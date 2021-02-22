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
var getToRegistrationFlag = false;

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

        if(getToRegistrationFlag === true)
        {    
            console.log(newUser);
            arrUsers.forEach(element => {
                if(element.userLogin === newUser.UserLogin && element.userPassword === newUser.Password)
            
                    userIDFromDB = element.userID;
                });   
        }
       // console.log(arrUsers);
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

            return requestToDbGETAferPost("SELECT * FROM user", dbConnection, res,newUser);

        }        // res.json(objJSON);
        res.end();
    });
   // console.log(userIDFromDB);
}

////---------------------SERVER.GET------------------------
server.get("/", (req, res) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    let query = "SELECT * FROM user";
    requestToDbGET(query, dbConnection, res);
});

server.get("/login", function (request, res) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    let query = "SELECT * FROM user";
    requestToDbGET(query, dbConnection, res);
});

server.get("/register", function (request, res) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    let query = "SELECT * FROM user";
    requestToDbGET(query, dbConnection, res);
});

server.get("/userdata", function (request, res) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    let query = "SELECT * FROM user";
    requestToDbGET(query, dbConnection, res);
});

////----------------SERVER.POST--------------------------------------
server.post("/login", function (request, response) {
    response.header("Access-Control-Allow-Origin", "http://localhost:3000");
    var foundFlag = false;
    arrUsers.forEach(element => {
        if (element.userLogin === request.body.UserLogin && element.userPassword === request.body.Password) {
            console.log(`User login : ${element.userLogin} password : ${element.userPassword} have ID :${element.userID}`);
            foundFlag = true;
            //ПЕРЕХОД ПО ССЫЛКЕ НА ЗАПОЛНЕННУЮ КОЛБАСУ!!!!!!!!!     
            return response.redirect("http://localhost:3000/userdata");
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
        let newUser = request.body;

        arrUsers.forEach(element => {

            if (element.userLogin === newUser.UserLogin) {

                duplicateFlag = true;
                let objJSON1 = { "result": "Пользователь с данным логином уже зарегистрирован, придумайте новый логин !" };
                // console.log(objJSON1);

                return response.redirect("http://localhost:3000/registration");
            }
        });

        if (duplicateFlag === false) {

            let query = `INSERT INTO user(userLogin, userPassword)

    VALUES(\'${newUser.UserLogin}\', \'${newUser.Password}\')`;

            let objJSON = { "result": "User added!" };

            response.redirect("http://localhost:3000/userdata");
            
            return requestToDbCUD(query, dbConnection, response, objJSON, newUser);          
           
        }
    }

    else {
       
        console.log("Password does not match repeat ");

        return response.redirect('http://localhost:3000/registration');
    }
    response.end();
});



server.post("/userdata", function (request, response) {

    response.header("Access-Control-Allow-Origin", "http://localhost:3000");
    
    let newUserData = request.body;   
  
    
    console.log("---------newUserData----------------------------------------");  

    console.log(newUserData);

    console.log("---------newUserData--end--------------------------------------");  

//добавляем базовую информацию
if(newUserData){
    

    let queryBasicInfo = `INSERT INTO basic_information (userID, firstName, lastName,middleName,birthOfDate,сityOfResidence,position)            
    VALUES(\'${userIDFromDB}\', \'${newUserData.id_firstName}\', \'${newUserData.id_lastName}\', \'${newUserData.id_middleName}\', \'${newUserData.id_birthOfDate}\', \'${newUserData.id_cityOfResidence}\', \'${newUserData.id_userPosition}\')`;



    let infoPers = getPersonalInfo(newUserData);

    let queryPersonalInfo = `INSERT INTO personal_information (userID, nationality, relocate,desiredSalary,employment,schedule,businessTrip,maritalStatus,children,education)            
    VALUES(\'${userIDFromDB}\', \'${newUserData.id_nationality}\', ${infoPers.relocation}, \'${newUserData.id_desiredSalary}\', \'${newUserData.id_employment}\', \'${newUserData.id_schedule}\', ${infoPers.businessTrip}, \'${newUserData.id_maritalStatus}\', ${infoPers.children}, \'${newUserData.id_education}\')`;

    

    let additionalInfo = getAdditionalInfo(newUserData);

    console.log(additionalInfo);
    console.log(additionalInfo.drivLicense);

    let queryAdditionalInfo = `INSERT INTO additional_information (userID, driverLicense, privateСar,army,hobby,personalQualities,professionalSkills)            
    VALUES(\'${userIDFromDB}\', \'${additionalInfo.drivLicense}\', ${additionalInfo.privateCar}, ${additionalInfo.army}, \'${newUserData.id_hobby}\', \'${newUserData.id_personalQualities}\', \'${newUserData.id_professionalSkills}\')`;

 
    let queryContactInfo = `INSERT INTO contact_information (userID, phone, email)            
    VALUES(\'${userIDFromDB}\', \'${newUserData.id_phone}\', \'${newUserData.id_email}\')`;
    

   let queryEducationInfo = `INSERT INTO education (userID, institutName, levelEducation, faculty, specialty,ending )            
    VALUES(\'${userIDFromDB}\', \'${newUserData.id_institutName}\', \'${newUserData.id_levelEducation}\', \'${newUserData.id_faculty}\', \'${newUserData.id_specialty}\', \'${newUserData.id_ending}\')`;

//////end data
   let statusWorke = stillWorking(newUserData);

   let queryExperienceInfo = `INSERT INTO experience (userID, startWork, endWork, stillWorking, positionWork,companyName, jobDuties )            
   VALUES(\'${userIDFromDB}\', \'${newUserData.id_startWork}\', \'${newUserData.id_endWork}\', ${statusWorke}, \'${newUserData.id_positionWork}\', \'${newUserData.id_companyName}\', \'${newUserData.id_jobDuties}\')`;


    requestToDbCUDUserData(queryPersonalInfo,dbConnection,response);
    requestToDbCUDUserData(queryBasicInfo,dbConnection,response); 
    requestToDbCUDUserData(queryAdditionalInfo,dbConnection,response);
    requestToDbCUDUserData(queryContactInfo,dbConnection,response);
    requestToDbCUDUserData(queryEducationInfo,dbConnection,response);
    requestToDbCUDUserData(queryExperienceInfo,dbConnection,response);
}


    //если есть данные по РЕКОМЕНДАЦИЯМ
    if(newUserData.id_personRecommending && newUserData.id_company){

        let query = `INSERT INTO recommendation(userID, personRecommending, company,emailCompany,phoneCompany)            
        VALUES(\'${userIDFromDB}\', \'${newUserData.id_personRecommending}\', \'${newUserData.id_company}\', \'${newUserData.id_emailCompany}\', \'${newUserData.id_phoneCompany}\')`;
   
        requestToDbCUDUserData(query,dbConnection,response);    
    
    }

    //если есть данные по знаниям языка
    if(newUserData.id_langName){

        let query = `INSERT INTO lang_info(userID, langName, level)            
     VALUES(\'${userIDFromDB}\', \'${newUserData.id_langName}\', \'${newUserData.id_level}\')`;

     requestToDbCUDUserData(query,dbConnection,response);
    }
    //если есть данные по прохождению курсов
    if(newUserData.id_courseName){

        let query = `INSERT INTO сourses(userID, courseName, organization, endingCourse)            
     VALUES(\'${userIDFromDB}\', \'${newUserData.id_courseName}\', \'${newUserData.id_organization}\', \'${newUserData.id_endingCourse}\')`;

     requestToDbCUDUserData(query,dbConnection,response);
    }
      //если есть фото
    if(newUserData.fupload){

        let query = `INSERT INTO userphoto(userID, image)            
     VALUES(\'${userIDFromDB}\', \'${newUserData.fupload}\')`;

     requestToDbCUDUserData(query,dbConnection,response);
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


const getInfoTodrivLicense = (newUserData) =>{

let drivarLiscense ="";
    if(newUserData.id_driverLicenseA1 =='on')
    {
        drivarLiscense += "A1-";
    }
    if(newUserData.id_driverLicenseA =='on')
    {
        drivarLiscense += "A-";
    }
    if(newUserData.id_driverLicenseB1 =='on')
    {
        drivarLiscense += "B1-";
    }
    if(newUserData.id_driverLicenseB =='on')
    {
        drivarLiscense += "B-";
    }
    if(newUserData.id_driverLicenseC1 =='on')
    {
        drivarLiscense += "C1-";
    }
    if(newUserData.id_driverLicenseC =='on')
    {
        drivarLiscense += "C-";
    }
    if(newUserData.id_driverLicenseD1 =='on')
    {
        drivarLiscense += "D1-";
    }
    if(newUserData.id_driverLicenseD =='on')
    {
        drivarLiscense += "D-";
    }
    if(newUserData.id_driverLicenseT =='on')
    {
        drivarLiscense += "T-";
    }
    return  drivarLiscense;

}


////get additional info

const getAdditionalInfo =(newUserData)=>{

    let drivLicense1 = getInfoTodrivLicense(newUserData);
  

    let availabilityCar = (newUserData)=>{
        if(newUserData.id_privatCar =='on')
        {
            return 1;
        }
        else return 0;
    }
    let army = (newUserData)=>{
        if(newUserData.id_army =='on')
        {
            return 1;
        }
        else return 0;
    }

let addData = {
    drivLicense : drivLicense1,
    privateCar : availabilityCar(newUserData),
    army : army(newUserData)
};

return addData;
}



/////get Personal info
const getPersonalInfo = (newUserData)=>{

let relocate = (newUserData)=>{
        if(newUserData.id_relocate =='on')
        {
            return 1;
        }
        else return 0;
    }
let businessTrip = (newUserData)=>
{
    if(newUserData.id_businessTrip =='on')
    {
        return 1;
    }
    else return 0;
    }

    let haveChildren=(newUserData)=>{
        if(newUserData.id_children =='on')
        {
            return 1;
        }
        else return 0;
        }
  
        let infoPersonal={
         relocation : relocate (newUserData),
         businessTrip : businessTrip(newUserData),
         children : haveChildren(newUserData)
        };
        return infoPersonal;
}

//// 
let stillWorking = (newUserData)=>{
    if(newUserData.id_stillWorking =='on')
    {
        return 1;
    }
    else return 0;
}

const startupCallback = function () {
    console.log(`Server started at: http://localhost:${service.address().port}`)
};

const service = server.listen(SERVER_PORT, startupCallback);