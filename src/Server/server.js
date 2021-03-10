const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');// модуль для парсинга пути
const mysql = require('mysql');
const fs = require("fs");
const { Blob, Buffer } = require('buffer');

var arrUsers = [];
const server = express();
var duplicateFlag = false;
var userIDFromDB = 0;
var foundUserID = 0; //найденный пользователь при входе уже зарегистрированного пользователя
var getToRegistrationFlag = false;
var multyLangFlag = false;
var multyCoursesFlag = false;
var multyRecommendingFlag = false;
var multyExperienceFlag = false;
var multyEducationFlag = false;
var userData = {};
var newUser = {};

const connString = {
    host: "93.175.214.80",
    port: "37826",//"localhost",    
    user: "studProgr",//"root"
    database: "resume_db",
    password: "753Rg2D78H34f@"
}

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

const requestToDbGETAferPost = (query, dbConnection, res, newUser) => {

    dbConnection.query(query, (err, result) => {

        if (err) console.log(err.message);

        arrUsers = result;

        if (getToRegistrationFlag === true) {
            console.log(newUser);
            arrUsers.forEach(element => {
                if (element.userLogin === newUser.UserLogin && element.userPassword === newUser.Password)

                    userIDFromDB = element.userID;
            });
        }        
        console.log(userIDFromDB);
        res.end();
    });
}
const requestToDbGET = (query, dbConnection, res, newUser) => {
    dbConnection.query(query, (err, result) => {
        if (err) console.log(err.message);
        res.json(result);
        arrUsers = result;
        console.log(arrUsers);
        res.end();
    });
}

const requestToDbCUDUserData = (query, dbConnection, res) => {

    dbConnection.query(query, (err, result) => {

        if (err) console.log(err.message);

        res.end();
    });
}
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

function  getUserData(res,userData ,dbConnection, callback = (res,userData)=>{ 
    console.log("I'm here!!!"); 
   // console.log(userData); 
    res.json(userData);
    res.end();     
})
    {
    let queryToView = `SELECT * FROM v_getUserData WHERE userID = ${foundUserID} `; 

    dbConnection.query(queryToView, (err, result) => {
        if (err) console.log(err.message);           
        userData = result;
         if(userData[0].endWork == null)
         {
            userData[0].endWork = new Date().toJSON().substr(0,10);          
         }
        // console.log("--------------------------START------------------------------------------");
        // console.log(userData);
        // console.log("--------------------------END------------------------------------------");
        // console.log(userData[0].endWork);
        callback(res,userData);
    });
    };  

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
    getUserData(res,userData ,dbConnection);
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
            console.log(foundUserID);
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
        ////создаем нового user в БД post
        //// потом переход в форму регистрации заполнение
         newUser = request.body;

        arrUsers.forEach(element => {

            if (element.userLogin === newUser.UserLogin) {

                duplicateFlag = true;
                let objJSON1 = { "result": "Пользователь с данным логином уже зарегистрирован, придумайте новый логин !" };
                // console.log(objJSON1);
                return response.redirect("http://localhost:3000/registration");
            }
        });

        if (duplicateFlag === false) {

    //         let query = `INSERT INTO user(userLogin, userPassword)

    // VALUES(\'${newUser.UserLogin}\', \'${newUser.Password}\')`;

    //         let objJSON = { "result": "User added!" };

    return response.redirect("http://localhost:3000/userdata");

            //return requestToDbCUD(query, dbConnection, response, objJSON, newUser);
        }
    }

    else {

        console.log("Password does not match repeat ");

        return response.redirect('http://localhost:3000/registration');
    }
    response.end();
});






////////////////////////////USER DATA POST///////////////////////////////////////////

server.post("/userdata", function (request, response) {

    response.header("Access-Control-Allow-Origin", "http://localhost:3000");

    let newUserData = request.body;

    console.log("---------newUser----------------------------------------");

    console.log(newUser);

    console.log("---------newUser-end--------------------------------------");

    console.log("---------newUserData----------------------------------------");

    console.log(newUserData);

    console.log("---------newUserData--end--------------------------------------");

    if (newUserData) {
      
        let endWork = getEndData(newUserData);        

       let userDataChecked = getCheckedInfo(newUserData);

        let checkToNull =  CheckedToNull(newUserData);    



    let query = `INSERT INTO user_info (userLogin,userPassword,firstName,lastName,middleName,birthOfDate,сityOfResidence,position,
        driverLicense,privateСar,army,hobby,personalQualities,professionalSkills,phone,email,nationality,relocate,desiredSalary,employment,schedule,
        businessTrip,maritalStatus,education,image,courseName,organization,endingCourse,institutName,levelEducation,faculty,specialty,ending,startWork,
        endWork,stillWorking,positionWork,companyName, jobDuties, langName, level, personRecommending, company, emailCompany, phoneCompany, children, currency) 

        VALUES ( \'${newUser.UserLogin}\', \'${newUser.Password}\', \'${newUserData.id_firstName}\', \'${newUserData.id_lastName}\', \'${newUserData.id_middleName}\', 
\'${newUserData.id_birthOfDate}\', \'${newUserData.id_cityOfResidence}\', \'${newUserData.id_userPosition}\', 
\'${userDataChecked.drivLicense}\', ${userDataChecked.privateCar}, ${userDataChecked.army}, \'${newUserData.id_hobby}\', ${checkToNull.id_personalQualities},${checkToNull.id_professionalSkills},
\'${newUserData.id_phone}\', \'${newUserData.id_email}\',\'${newUserData.id_nationality}\', ${userDataChecked.relocation}, \'${newUserData.id_desiredSalary}\', \'${newUserData.id_employment}\', 
\'${newUserData.id_schedule}\', ${userDataChecked.businessTrip},\'${newUserData.id_maritalStatus}\',  \'${newUserData.id_education}\',\'${newUserData.fupload}\',
\'${newUserData.id_courseName}\', \'${newUserData.id_organization}\', \'${newUserData.id_endingCourse}\',
${checkToNull.id_institutName}, \'${newUserData.id_levelEducation}\', ${checkToNull.id_faculty}, ${checkToNull.id_specialty}, ${checkToNull.id_ending},
\'${newUserData.id_startWork}\', \'${endWork}\', ${userDataChecked.stillWorking}, \'${newUserData.id_positionWork}\', \'${newUserData.id_companyName}\', \'${newUserData.id_jobDuties}\',
\'${newUserData.id_langName}\', \'${newUserData.id_level}\',${checkToNull.id_personRecommending}, ${checkToNull.id_company}, ${checkToNull.id_emailCompany},
${checkToNull.id_phoneCompany},${userDataChecked.children},${userDataChecked.currency} )`;

 requestToDbCUDUserData(query, dbConnection, response);      
        
    }

    response.end();
});



const insertImgToDB = (temp_path, userID) => {
    fs.open(temp_path, 'r', function (status, fd) {
        if (status) {
            console.log(status.message);
            return;
        }
        var fileSize = getFilesizeInBytes(temp_path);
        var buffer = Buffer.alloc(fileSize);
        fs.read(fd, buffer, 0, fileSize, 0, function (err, num) {

            var query = "INSERT INTO userphoto SET ?",
                values = {
                    file_type: 'img',
                    file_size: buffer.length,
                    file: buffer
                };

            dbConnection.query(query, values, function (er, da) {
                if (er) throw er;
            });

        });
    });
}
// `INSERT INTO userphoto ('userID','image') VALUES (\'${userID}\',{image: })`;


const getEndData = (newUserData) => {

    let endWork = '';

    if (newUserData.id_endWork == '') {
        if (statusWorke == 1) {

            endWork = null;
        }

        else {
            endWork = new Date().toISOString().substr(0, 10).toString()+"~";
        }
    }
    else {
        endWork = newUserData.id_endWork;
    }
    return endWork;
}

const getInfoTodrivLicense = (newUserData) => {

    let drivarLiscense = "";
    if (newUserData.id_driverLicenseA1 == 'on') {
        drivarLiscense += "A1-";
    }
    if (newUserData.id_driverLicenseA == 'on') {
        drivarLiscense += "A-";
    }
    if (newUserData.id_driverLicenseB1 == 'on') {
        drivarLiscense += "B1-";
    }
    if (newUserData.id_driverLicenseB == 'on') {
        drivarLiscense += "B-";
    }
    if (newUserData.id_driverLicenseC1 == 'on') {
        drivarLiscense += "C1-";
    }
    if (newUserData.id_driverLicenseC == 'on') {
        drivarLiscense += "C-";
    }
    if (newUserData.id_driverLicenseD1 == 'on') {
        drivarLiscense += "D1-";
    }
    if (newUserData.id_driverLicenseD == 'on') {
        drivarLiscense += "D-";
    }
    if (newUserData.id_driverLicenseT == 'on') {
        drivarLiscense += "T-";
    }
    return drivarLiscense;
}


// ////get additional info

// const getAdditionalInfo = (newUserData) => {

//     let drivLicense1 = getInfoTodrivLicense(newUserData);


//     let availabilityCar = (newUserData) => {
//         if (newUserData.id_privatCar == 'on') {
//             return 1;
//         }
//         else return 0;
//     }
//     let army = (newUserData) => {
//         if (newUserData.id_army == 'on') {
//             return 1;
//         }
//         else return 0;
//     }

//     let addData = {
//         drivLicense: drivLicense1,
//         privateCar: availabilityCar(newUserData),
//         army: army(newUserData)
//     };

//     return addData;
// }

const CheckedToNull = (newUserData) => {

let objChecked = {};

if(newUserData.id_middleName==''){
    objChecked.id_middleName = null;
   }

else{
    objChecked.id_middleName = `\'${newUserData.id_middleName}\'`;
}

if(newUserData.id_hobby==''){
    objChecked.id_hobby = null;
   }

else{
    objChecked.id_hobby = `\'${newUserData.id_hobby}\'`;
}

if(newUserData.id_nationality==''){
    objChecked.id_nationality = null;
   }

else{
    objChecked.id_nationality = `\'${newUserData.id_nationality}\'`;
}

if(newUserData.id_desiredSalary==''){
    objChecked.id_desiredSalary = null;
   }

else{
    objChecked.id_desiredSalary = `\'${newUserData.id_desiredSalary}\'`;
}

if(newUserData.id_currency ==''){
    objChecked.id_desiredSalary = null;
   }

else{
    objChecked.id_desiredSalary = `\'${newUserData.id_desiredSalary}\'`;
}

if(newUserData.id_maritalStatus==''){
    objChecked.id_maritalStatus = null;
   }

else{
    objChecked.id_maritalStatus = `\'${newUserData.id_maritalStatus}\'`;
}

if(newUserData.fupload==''){
    objChecked.fupload = null;
   }

else{
    objChecked.fupload = `\'${newUserData.fupload}\'`;
}

if(newUserData.id_courseName==''){
    objChecked.id_courseName = null;
   }

else{
    ////Проверить 1 или более записей,если более, разделить ~
    objChecked.id_courseName = `\'${newUserData.id_courseName}\'`;
}

if(newUserData.id_organization==''){
    objChecked.id_organization = null;
   }

else{
    ////Проверить 1 или более записей,если более, разделить ~
    objChecked.id_organization = `\'${newUserData.id_organization}\'`;
}

if(newUserData.id_endingCourse==''){
    objChecked.id_endingCourse = null;
   }

else{
    ////Проверить 1 или более записей,если более, разделить ~
    objChecked.id_endingCourse = `\'${newUserData.id_endingCourse}\'`;
}

if(newUserData.id_institutName==''){

    objChecked.id_institutName = null;
   }

else{
    ////Проверить 1 или более записей,если более, разделить ~
    objChecked.id_institutName = `\'${newUserData.id_institutName}\'`;
}

if(newUserData.id_levelEducation==''){
    
    objChecked.id_levelEducation = null;
   }

else{
    ////Проверить 1 или более записей,если более, разделить ~
    objChecked.id_levelEducation = `\'${newUserData.id_levelEducation}\'`;
}

   if(newUserData.id_faculty==''){
    objChecked.id_faculty = null;
   }

   else{
        ////Проверить 1 или более записей,если более, разделить ~
    objChecked.id_faculty = `\'${newUserData.id_faculty}\'`;
   }


   if(newUserData.id_specialty==''){
    objChecked.id_specialty = null;
   }
   else{  
        ////Проверить 1 или более записей,если более, разделить ~   
    objChecked.id_specialty = `\'${newUserData.id_specialty}\'`;
}

   if(newUserData.id_ending==''){
    objChecked.id_ending = null;
   }
   else{
        ////Проверить 1 или более записей,если более, разделить ~
    objChecked.id_ending = `\'${newUserData.id_ending}\'`;
}


if(newUserData.id_startWork==''){
    objChecked.id_startWork = null;
   }
   else{
        ////Проверить 1 или более записей,если более, разделить ~
    objChecked.id_startWork = `\'${newUserData.id_startWork}\'`;
}

if(newUserData.id_endWork==''){
    objChecked.id_endWork = null;
   }
   else{
        ////Проверить 1 или более записей,если более, разделить ~
    objChecked.id_endWork = `\'${newUserData.id_endWork}\'`;
}


if(newUserData.id_positionWork==''){
    objChecked.id_positionWork = null;
   }
   else{
        ////Проверить 1 или более записей,если более, разделить ~
    objChecked.id_positionWork = `\'${newUserData.id_positionWork}\'`;
}

if(newUserData.id_companyName==''){
    objChecked.id_companyName = null;
   }
   else{
        ////Проверить 1 или более записей,если более, разделить ~
    objChecked.id_companyName = `\'${newUserData.id_companyName}\'`;
}

if(newUserData.id_jobDuties==''){
    objChecked.id_jobDuties = null;
   }
   else{
        ////Проверить 1 или более записей,если более, разделить ~
    objChecked.id_jobDuties = `\'${newUserData.id_jobDuties}\'`;
}

if(newUserData.id_langName==''){
    objChecked.id_langName = null;
   }
   else{
        ////Проверить 1 или более записей,если более, разделить ~
    objChecked.id_langName = `\'${newUserData.id_langName}\'`;
}

if(newUserData.id_level==''){
    objChecked.id_level = null;
   }
   else{
        ////Проверить 1 или более записей,если более, разделить ~
    objChecked.id_level = `\'${newUserData.id_level}\'`;
}

   if(newUserData.id_personRecommending==''){
    objChecked.id_personRecommending = null;
   }
   else{
        ////Проверить 1 или более записей,если более, разделить ~
    objChecked.id_personRecommending = `\'${newUserData.id_personRecommending}\'`;
}

   if(newUserData.id_company==''){
    objChecked.id_company = null;
   }
   else{
        ////Проверить 1 или более записей,если более, разделить ~
    objChecked.id_company = `\'${newUserData.id_company}\'`;
}

   if(newUserData.id_emailCompany==''){
    objChecked.id_emailCompany = null;
   }
   else{
        ////Проверить 1 или более записей,если более, разделить ~
    objChecked.id_emailCompany = `\'${newUserData.id_emailCompany}\'`;
}

   if(newUserData.id_phoneCompany==''){
    objChecked.id_phoneCompany = null;
   }
   else{
        ////Проверить 1 или более записей,если более, разделить ~
    objChecked.id_phoneCompany = `\'${newUserData.id_phoneCompany}\'`;
}

   if(newUserData.id_personalQualities==''){
    objChecked.id_personalQualities = null;
   }
   else{
    objChecked.id_personalQualities = `\'${newUserData.id_personalQualities}\'`;
}

   if(newUserData.id_professionalSkills==''){        
    objChecked.id_professionalSkills =  null;   
   }
   else{
    objChecked.id_professionalSkills = `\'${newUserData.id_professionalSkills}\'`;
}  
    return objChecked;

}

const getCheckedInfo = (newUserData) => {

    let relocate = (newUserData) => {
        if (newUserData.id_relocate == 'on') {
            return 1;
        }
        else return 0;
    }
    let businessTrip = (newUserData) => {
        if (newUserData.id_businessTrip == 'on') {
            return 1;
        }
        else return 0;
    }

    let haveChildren = (newUserData) => {
        if (newUserData.id_children == 'on') {
            return 1;
        }
        else return 0;
    }
    let stillWorking = (newUserData) => {
        if (newUserData.id_stillWorking == 'on') {
            return 1;
        }
        else return 0;
    }
    let availabilityCar = (newUserData) => {
        if (newUserData.id_privatCar == 'on') {
            return 1;
        }
        else return 0;
    }
    let army = (newUserData) => {
        if (newUserData.id_army == 'on') {
            return 1;
        }
        else return 0;
    }
    let driveLicense = getInfoTodrivLicense(newUserData);

    let infoUserChecked = {
        relocation: relocate(newUserData),
        businessTrip: businessTrip(newUserData),
        children: haveChildren(newUserData),
        stillWorking: stillWorking(newUserData),
        drivLicense: driveLicense,
        privateCar: availabilityCar(newUserData),
        army: army(newUserData)
    };

    return infoUserChecked;
}

// /////get Personal info
// const getPersonalInfo = (newUserData) => {

//     let relocate = (newUserData) => {
//         if (newUserData.id_relocate == 'on') {
//             return 1;
//         }
//         else return 0;
//     }
//     let businessTrip = (newUserData) => {
//         if (newUserData.id_businessTrip == 'on') {
//             return 1;
//         }
//         else return 0;
//     }

//     let haveChildren = (newUserData) => {
//         if (newUserData.id_children == 'on') {
//             return 1;
//         }
//         else return 0;
//     }

//     let infoPersonal = {
//         relocation: relocate(newUserData),
//         businessTrip: businessTrip(newUserData),
//         children: haveChildren(newUserData)
//     };
//     return infoPersonal;
// }

//// 
// let stillWorking = (newUserData) => {
//     if (newUserData.id_stillWorking == 'on') {
//         return 1;
//     }
//     else return 0;
// }

const startupCallback = function () {
    console.log(`Server started at: http://localhost:${service.address().port}`)
};

const service = server.listen(SERVER_PORT, startupCallback);