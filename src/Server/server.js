const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');// модуль для парсинга пути
const mysql = require('mysql');
const fs = require("fs");
const { Blob, Buffer } = require('buffer');
const { Switch } = require('react-router');
const { connString } = require("./ConnectionModule");
const {CheckedToNull,getCheckedInfo} = require("./CheckedModule");
const{getFkValue,getEndData,getUserData} = require("./GetToPostModule");
const multer  = require('multer');



const server = express();

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // the file is saved to here
        cb(null, '/Nata/ItStep/React/git_resume/resumeReact/src/Server/uploads')
    },
    filename: function (req, file, cb) {
        // the filename field is added or altered here once the file is uploaded
        cb(null,file.originalname)
    }
})
var upload = multer({ storage: storage })
 



var duplicateFlag = false;
var userIDFromDB = 0;
var arrUsers = [];
var foundUserID = 0; //найденный пользователь при входе уже зарегистрированного пользователя
var foundUser={};
var getToRegistrationFlag = false;
var userData = {};
var newUser = {};



server.use(express.static(__dirname + '/public'));
server.use(bodyParser.urlencoded({ extended: false }));
server.engine('html', require('ejs').renderFile);
server.set('view engine', 'html');
server.set('views', __dirname);
//server.use(bodyParser.json());

const SERVER_PORT = 55555;
const HTTP_OK = 200;
const dbConnection = mysql.createConnection(connString);

// подключаемся
dbConnection.connect((err) => {
    if (err) console.log(err.message);
    else console.log("Connected to MySQL");
});


const requestToDbCUD = (query, dbConnection, res, objJSON, newUser) => {

    console.log(newUser);

    dbConnection.query(query, (err, result) => {

        if (err) console.log(err.message);

        else {

            getToRegistrationFlag = true;

            return requestToDbGETAferPost("SELECT * FROM v_getUserData", dbConnection, res, newUser);

        }
        res.end();
    });
}
const requestToDbGETAferPost = (query, dbConnection, res, newUser) => {

    dbConnection.query(query, (err, result) => {

        if (err) console.log(err.message);

        arrUsers = result;

        if (getToRegistrationFlag === true) {
           // console.log(newUser);
            arrUsers.forEach(element => {
                if (element.userLogin === newUser.UserLogin && element.userPassword === newUser.Password)

                    userIDFromDB = element.userID;
            });
        }        
       // console.log(userIDFromDB);
        res.end();
    });
}

const requestToDbCUDUserData = (query, dbConnection, res) => {
    console.log("-----------query-------------");
    console.log(query);
    dbConnection.query(query, (err, result) => {

        if (err) console.log(err.message);

        res.end();
    });
}

const requestToDbGET = (query, dbConnection, res) => {
   
    dbConnection.query(query, (err, result) => {
        if (err) console.log(err.message);
        res.json(result);
        arrUsers = result;
       // console.log(arrUsers);
        res.end();
    });
}


////---------------------SERVER.GET------------------------

server.get("/", (req, res) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    let query = "SELECT * FROM user_info";
    requestToDbGET(query, dbConnection, res);
});

server.get("/login", function (request, res) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    let query = "SELECT * FROM user_info";
    requestToDbGET(query, dbConnection, res);
    
});

server.get("/register", function (request, res) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    let query = "SELECT * FROM user_info";
    requestToDbGET(query, dbConnection, res);
});

server.get("/userdata", function (request, res) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    let query = "SELECT * FROM user_info";
    requestToDbGET(query, dbConnection, res);
});   

server.get("/existinguserdata",(req,res)=>{

    userData = {};  
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    getUserData(res,userData ,dbConnection,foundUserID,fs);
    //getImageFile();
});
    
     
////----------------SERVER.POST--------------------------------------
server.post("/login", function (request, response) {
    response.header("Access-Control-Allow-Origin", "http://localhost:3000");
    foundUserID = 0;
    var foundFlag = false;
    arrUsers.forEach(element => {
        if (element.userLogin === request.body.UserLogin && element.userPassword === request.body.Password) {
            console.log(`User login : ${element.userLogin} password : ${element.userPassword} have ID :${element.userID}`);
            foundFlag = true;          
            foundUserID = element.userID;
            foundUser.UserID=element.userID;
            foundUser.UserLogin = element.userLogin;
            foundUser.UserPassword = element.userPassword;             
            //ПЕРЕХОД ПО ССЫЛКЕ НА ЗАПОЛНЕННУЮ КОЛБАСУ!!!!!!!!!     
            return response.redirect("http://localhost:3000/existinguserdata");
        }
    });    
    if (foundFlag === false) {
        console.log(`User login : ${request.body.UserLogin} password : ${request.body.Password} NOT FOUND , Go to regestration!!!`);
        ////переход на регистрацию сделать правильно!!!!!!!
        return response.redirect('http://localhost:3000/registration');
    }
    response.end();
});


server.post("/registration", function (request, response) {
    response.header("Access-Control-Allow-Origin", "http://localhost:3000");
    if (request.body.Password === request.body.RepeatPassword) {
        console.log("OK");       
        //// потом переход в форму регистрации заполнение
        //логин-пароль у будущего пользователя
         newUser = request.body;

        arrUsers.forEach(element => {

            if (element.userLogin === newUser.UserLogin) {

                duplicateFlag = true;
                let objJSON1 = { "result": "Пользователь с данным логином уже зарегистрирован, придумайте новый логин !" };              
                return response.redirect("http://localhost:3000/registration");
            }
        });

        //если нет пользователя с данным логином в базе
        if (duplicateFlag === false) {    

    return response.redirect("http://localhost:3000/userdata");
           
        }
    }

    else {
        //console.log("Password does not match repeat ");
        newUser = {};
        return response.redirect('http://localhost:3000/registration');
    }
    response.end();
});


////////////////////////////USER DATA POST///////////////////////////////////////////

server.post("/userdata", upload.single('fupload'), function (request, response) {

    response.header("Access-Control-Allow-Origin", "http://localhost:3000");      
    
    const fileName = request.file.originalname;
    const newFileNameToDb = Date.now()+"_"+fileName;

    fs.rename('uploads/'+fileName,'uploads/'+newFileNameToDb, err => {
        if(err) throw err; // не удалось переименовать файл
        console.log('Файл успешно переименован');
        console.log("*** ::: "+newFileNameToDb+" ::: ***");
     });   
   
    let newUserData = request.body;
    console.log("---------request body start----------------------------------------");
    console.log(request.body);
    console.log("---------request body end----------------------------------------");    
    console.log("---------newUser----------------------------------------");
    console.log(newUser);
    console.log("---------newUser-end--------------------------------------");
    console.log("---------newUserData----------------------------------------");
    console.log(request.body);
    console.log("---------newUserData--end--------------------------------------");
    
    if (newUserData) {
      
        let endWork = getEndData(newUserData);              

        let userDataChecked = getCheckedInfo(newUserData);      

        let checkToNull =  CheckedToNull(newUserData); 
      
        let fk_value = getFkValue(newUserData);       
       
             
      
    let query = `INSERT INTO user_info (userLogin,userPassword,firstName,lastName,middleName,birthOfDate,сityOfResidence,position,
        driverLicense,privateСar,army,hobby,personalQualities,professionalSkills,phone,email,nationality,relocate,desiredSalary,fk_employmentID,fk_scheduleID,
        businessTrip,fk_marital_statusID,fk_level_of_educationID,image,courseName,organization,endingCourse,institutName,levelEducation,faculty,specialty,ending,startWork,
        endWork,stillWorking,positionWork,companyName, jobDuties, langName, languag_proficiency_levelID, personRecommending, company, 
        emailCompany, phoneCompany, children, fk_currencyID) 

        VALUES ( \'${newUser.UserLogin}\', \'${newUser.Password}\', \'${newUserData.id_firstName}\', \'${newUserData.id_lastName}\', ${checkToNull.id_middleName}, 
\'${newUserData.id_birthOfDate}\', \'${newUserData.id_cityOfResidence}\', \'${newUserData.id_userPosition}\', \'${userDataChecked.drivLicense}\',
 ${userDataChecked.privateCar}, ${userDataChecked.army}, ${checkToNull.id_hobby}, ${checkToNull.id_personalQualities},${checkToNull.id_professionalSkills},
\'${newUserData.id_phone}\', \'${newUserData.id_email}\',${checkToNull.id_nationality}, ${userDataChecked.relocation}, ${checkToNull.id_desiredSalary}, \'${fk_value.id_employment}\', 
\'${fk_value.id_schedule}\', ${userDataChecked.businessTrip},\'${fk_value.id_maritalStatus}\',  \'${fk_value.id_education}\',\'${newFileNameToDb}\',
${checkToNull.id_courseName}, ${checkToNull.id_organization}, ${checkToNull.id_endingCourse},${checkToNull.id_institutName}, ${checkToNull.id_levelEducation},
${checkToNull.id_faculty}, ${checkToNull.id_specialty}, ${checkToNull.id_ending},
${checkToNull.id_startWork}, \'${endWork}\', ${userDataChecked.stillWorking}, ${checkToNull.id_positionWork}, ${checkToNull.id_companyName}, ${checkToNull.id_jobDuties},
${checkToNull.id_langName}, ${checkToNull.id_level},${checkToNull.id_personRecommending}, ${checkToNull.id_company}, ${checkToNull.id_emailCompany},
${checkToNull.id_phoneCompany},${userDataChecked.children},\'${fk_value.id_currency}\' )`;

requestToDbCUDUserData(query, dbConnection, response);     
        
     }
    response.end();
});

//////////////////////////////////////////////ExistingUserData PUT/////////////////////////////////////////////////////////////////////


server.post("/existinguserdata", (req, res) => {

    res.header("Access-Control-Allow-Origin", "http://localhost:3000");

    //получим нового пользователя из тела POST запроса,
    let updateUserData = req.body;   

    console.log("---------updateUser----------------------------------------");

    console.log(foundUser);

    console.log("---------updateUser-end--------------------------------------");

    console.log("---------updateUserData----------------------------------------");

    console.log(updateUserData);

    console.log("---------updateUserData--end--------------------------------------");



     if (updateUserData) {
      
        let endWork = getEndData(updateUserData);  //////////////////////////////////////////////////            

        let userDataChecked = getCheckedInfo(updateUserData);      

        let checkToNull =  CheckedToNull(updateUserData); 
      
        let fk_value = getFkValue(updateUserData);     
       
      
    let query = `UPDATE user_info SET   userLogin=\'${foundUser.UserLogin}\',userPassword=\'${foundUser.UserPassword}\',firstName=\'${updateUserData.id_firstName}\',lastName=\'${updateUserData.id_lastName}\',middleName= ${checkToNull.id_middleName},
    birthOfDate=\'${updateUserData.id_birthOfDate}\',сityOfResidence=\'${updateUserData.id_cityOfResidence}\',position=\'${updateUserData.id_userPosition}\',driverLicense=\'${userDataChecked.drivLicense}\',privateСar=${userDataChecked.privateCar},army= ${userDataChecked.army},
    hobby= ${checkToNull.id_hobby},personalQualities=${checkToNull.id_personalQualities},professionalSkills=${checkToNull.id_professionalSkills},phone=\'${updateUserData.id_phone}\',email=\'${updateUserData.id_email}\',nationality=${checkToNull.id_nationality},
    relocate= ${userDataChecked.relocation},desiredSalary= ${checkToNull.id_desiredSalary},fk_employmentID=\'${fk_value.id_employment}\',fk_scheduleID=\'${fk_value.id_schedule}\',businessTrip=${userDataChecked.businessTrip},fk_marital_statusID=\'${fk_value.id_maritalStatus}\',
    fk_level_of_educationID=\'${fk_value.id_education}\', image=${checkToNull.fupload},courseName=${checkToNull.id_courseName},organization= ${checkToNull.id_organization},endingCourse=${checkToNull.id_endingCourse},institutName=${checkToNull.id_institutName},levelEducation=${checkToNull.id_levelEducation},
    faculty=${checkToNull.id_faculty},specialty= ${checkToNull.id_specialty},ending= ${checkToNull.id_ending},startWork=${checkToNull.id_startWork}, endWork= \'${endWork}\',stillWorking=${userDataChecked.stillWorking},positionWork=${checkToNull.id_positionWork},companyName= ${checkToNull.id_companyName},
    jobDuties=${checkToNull.id_jobDuties}, langName=${checkToNull.id_langName}, languag_proficiency_levelID=${checkToNull.id_level}, personRecommending=${checkToNull.id_personRecommending}, company=${checkToNull.id_company}, emailCompany=${checkToNull.id_emailCompany},
    phoneCompany=${checkToNull.id_phoneCompany}, children=${userDataChecked.children}, fk_currencyID =\'${fk_value.id_currency}\' WHERE UserID=\'${foundUser.UserID}\'`;
      

 requestToDbCUDUserData(query, dbConnection, res);     
        
    }
    res.end();

});

const startupCallback = function () {
    console.log(`Server started at: http://localhost:${service.address().port}`)
};

const service = server.listen(SERVER_PORT, startupCallback);
