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
var userData = {};
var foundUserID = 0; //найденный пользователь при входе уже зарегистрированного пользователя
var getToRegistrationFlag = false;
var multyLangFlag = false;
var multyCoursesFlag = false;
var multyRecommendingFlag = false;
var multyExperienceFlag = false;
var multyEducationFlag = false;

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
const requestToDbGETExisting = (query, dbConnection, res) => {

    // console.log(query.includes('basic_information'));
    if (query.includes('basic_information')) {
        dbConnection.query(query, (err, result) => {
            if (err) console.log(err.message);
            //res.json(result);
          // console.log(result);
            userData.basic = result;
            //console.log(userData.basic);
            res.end();
        });
    }
    else if (query.includes('personal_information')) {
        dbConnection.query(query, (err, result) => {
            if (err) console.log(err.message);
            //res.json(result);
            //console.log(result);
            userData.personal = result;
           // console.log(userData.personal);
           res.end();
        });
    }
    else if (query.includes('additional_information')) {
        dbConnection.query(query, (err, result) => {
            if (err) console.log(err.message);
            //res.json(result);
            //console.log(result);
            userData.additional = result;
          //  console.log(userData.additional);
            res.end();
        });
    }
    else if (query.includes('contact_information')) {
        dbConnection.query(query, (err, result) => {
            if (err) console.log(err.message);
            //res.json(result);
           // console.log(result);
            userData.contact = result;
           // console.log(userData.contact);
           res.end();
        });
    }

    else if (query.includes('education')) {
        dbConnection.query(query, (err, result) => {
            if (err) console.log(err.message);
            //res.json(result);
          // console.log(result);
            userData.education = result;
           // console.log(userData.education);
            res.end();
        });
    }

    else if (query.includes('experience')) {
        dbConnection.query(query, (err, result) => {
            if (err) console.log(err.message);
            //res.json(result);
           // console.log(result);
            userData.experience = result;
           // console.log(userData.experience);
            res.end();
        });
    }

    else if (query.includes('recommendation')) {
        dbConnection.query(query, (err, result) => {
            if (err) console.log(err.message);
            //res.json(result);
           // console.log(result);
            userData.recommendation = result;
           // console.log(userData.recommendation);
            res.end();
        });
    }
    else if (query.includes('lang_info')) {
        dbConnection.query(query, (err, result) => {
            if (err) console.log(err.message);
            //res.json(result);
           // console.log(result);
            userData.lang_info = result;
            //console.log(userData.lang_info);
           res.end();
        });
    }
    else if (query.includes('сourses')) {
        dbConnection.query(query, (err, result) => {
            if (err) console.log(err.message);
            //res.json(result);
            //console.log(result);
            userData.сourses = result;
           // console.log(userData.сourses);
            res.end();
        });
    }
    else if (query.includes('userphoto')) {
        dbConnection.query(query, (err, result) => {
            if (err) console.log(err.message);
           // res.json(result);
           //console.log(result);
            userData.userphoto = result;
            //console.log(userData.userphoto);
            res.end();
        });
    } 
    // res.json(userData);
    // res.end();
    
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

            return requestToDbGETAferPost("SELECT * FROM user", dbConnection, res, newUser);

        }
        res.end();
    });

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

server.get("/existinguserdata", function (request, res) {
    
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
// console.log(foundUserID);

    let queryBasic = `SELECT * FROM basic_information WHERE userID = ${foundUserID} `;
    requestToDbGETExisting(queryBasic, dbConnection, res);

    let queryPersonal = `SELECT * FROM personal_information WHERE userID = ${foundUserID} `;
    requestToDbGETExisting(queryPersonal, dbConnection, res);

    let queryAdditional = `SELECT * FROM additional_information WHERE userID = ${foundUserID} `;
    requestToDbGETExisting(queryAdditional, dbConnection, res);

    let queryContact = `SELECT * FROM contact_information WHERE userID = ${foundUserID} `;
    requestToDbGETExisting(queryContact, dbConnection, res);

    let queryEducation = `SELECT * FROM education WHERE userID = ${foundUserID} `;
    requestToDbGETExisting(queryEducation, dbConnection, res);

    let queryExperience = `SELECT * FROM experience WHERE userID = ${foundUserID} `;
    requestToDbGETExisting(queryExperience, dbConnection, res);

    let queryRecommendation = `SELECT * FROM recommendation WHERE userID = ${foundUserID} `;
    requestToDbGETExisting(queryRecommendation, dbConnection, res);

    let queryLang_info = `SELECT * FROM lang_info WHERE userID = ${foundUserID} `;
    requestToDbGETExisting(queryLang_info, dbConnection, res);

    let queryCourses = `SELECT * FROM сourses WHERE userID = ${foundUserID} `;
    requestToDbGETExisting(queryCourses, dbConnection, res);

    let queryUserphoto = `SELECT * FROM userphoto WHERE userID = ${foundUserID} `;
    requestToDbGETExisting(queryUserphoto, dbConnection, res);     
  
    res.json(userData);
    res.end();     
   
}
// ,function(userData){

//     console.log(userData);

//     res.json(userData);
//     res.end();
// }

);

////----------------SERVER.POST--------------------------------------
server.post("/login", function (request, response) {
    response.header("Access-Control-Allow-Origin", "http://localhost:3000");
    var foundFlag = false;
    arrUsers.forEach(element => {
        if (element.userLogin === request.body.UserLogin && element.userPassword === request.body.Password) {
            console.log(`User login : ${element.userLogin} password : ${element.userPassword} have ID :${element.userID}`);
            foundFlag = true;
            foundUserID = element.userID;
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

////////////////////////////USER DATA   POST///////////////////////////////////////////

server.post("/userdata", function (request, response) {

    response.header("Access-Control-Allow-Origin", "http://localhost:3000");

    let newUserData = request.body;


    console.log("---------newUserData----------------------------------------");

    console.log(newUserData);

    console.log("---------newUserData--end--------------------------------------");

    // //добавляем базовую информацию
    if (newUserData) {

        let queryBasicInfo = `INSERT INTO basic_information (userID, firstName, lastName,middleName,birthOfDate,сityOfResidence,position)            
    VALUES(\'${userIDFromDB}\', \'${newUserData.id_firstName}\', \'${newUserData.id_lastName}\', \'${newUserData.id_middleName}\', \'${newUserData.id_birthOfDate}\', 
    \'${newUserData.id_cityOfResidence}\', \'${newUserData.id_userPosition}\')`;

        let infoPers = getPersonalInfo(newUserData);

        let queryPersonalInfo = `INSERT INTO personal_information (userID, nationality, relocate,desiredSalary,employment,schedule,businessTrip,maritalStatus,children,education)            
    VALUES(\'${userIDFromDB}\', \'${newUserData.id_nationality}\', ${infoPers.relocation}, \'${newUserData.id_desiredSalary}\',
     \'${newUserData.id_employment}\', \'${newUserData.id_schedule}\', ${infoPers.businessTrip}, \'${newUserData.id_maritalStatus}\', ${infoPers.children}, \'${newUserData.id_education}\')`;

        let additionalInfo = getAdditionalInfo(newUserData);

        console.log(additionalInfo);
        console.log(additionalInfo.drivLicense);

        let queryAdditionalInfo = `INSERT INTO additional_information (userID, driverLicense, privateСar,army,hobby,personalQualities,professionalSkills)            
    VALUES(\'${userIDFromDB}\', \'${additionalInfo.drivLicense}\', ${additionalInfo.privateCar}, ${additionalInfo.army}, \'${newUserData.id_hobby}\',
     \'${newUserData.id_personalQualities}\', \'${newUserData.id_professionalSkills}\')`;


        let queryContactInfo = `INSERT INTO contact_information (userID, phone, email)            
    VALUES(\'${userIDFromDB}\', \'${newUserData.id_phone}\', \'${newUserData.id_email}\')`;


        requestToDbCUDUserData(queryPersonalInfo, dbConnection, response);
        requestToDbCUDUserData(queryBasicInfo, dbConnection, response);
        requestToDbCUDUserData(queryAdditionalInfo, dbConnection, response);
        requestToDbCUDUserData(queryContactInfo, dbConnection, response);


        //////-------EDUCATION------------------
        ////------------более 1 образования---------------
        multyEducationFlag = false;

        if (multyEducationFlag === true && newUserData.id_institutName != '') {

            for (let i = 0; i < newUserData.id_institutName.length; i++) {
                let queryEducationInfo = `INSERT INTO education (userID, institutName, levelEducation, faculty, specialty,ending )            
                VALUES(\'${userIDFromDB}\', \'${newUserData.id_institutName[i]}\', \'${newUserData.id_levelEducation[i]}\', \'${newUserData.id_faculty[i]}\', \'${newUserData.id_specialty[i]}\', \'${newUserData.id_ending[i]}\')`;

                requestToDbCUDUserData(queryEducationInfo, dbConnection, response);
            }
        }
        ////-------------1 образование-------------------------
        else if (multyEducationFlag === false && newUserData.id_institutName != '') {
            let queryEducationInfo = `INSERT INTO education (userID, institutName, levelEducation, faculty, specialty,ending )            
            VALUES(\'${userIDFromDB}\', \'${newUserData.id_institutName}\', \'${newUserData.id_levelEducation}\', \'${newUserData.id_faculty}\', \'${newUserData.id_specialty}\', \'${newUserData.id_ending}\')`;
            requestToDbCUDUserData(queryEducationInfo, dbConnection, response);
        }





        /////---------------EXPERIENCE------------------------------
        ////более 1 места работы-------------------------------

        multyExperienceFlag = true;

        if (newUserData.id_startWork != '' && multyExperienceFlag === true) {

            for (let i = 0; i < newUserData.id_companyName.length; i++) {
                let statusWorke = stillWorking(newUserData);
                console.log(statusWorke);
                let endWork = '';

                if (newUserData.id_endWork[i] == '' && statusWorke == 1) {

                    endWork = null;
                }
                else if (newUserData.id_endWork[i] == '' && statusWorke == 0) {
                    endWork = new Date().toISOString().substr(0, 10);
                }

                else {
                    endWork = newUserData.id_endWork[i];
                    statusWorke = 0;
                }

                console.log(statusWorke);
                console.log(endWork);

                if (endWork == null) {
                    let queryExperienceInfo = `INSERT INTO experience (userID, startWork, endWork, stillWorking, positionWork,companyName, jobDuties )            
        VALUES(\'${userIDFromDB}\', \'${newUserData.id_startWork[i]}\', ${endWork}, ${statusWorke}, \'${newUserData.id_positionWork[i]}\', \'${newUserData.id_companyName[i]}\', \'${newUserData.id_jobDuties[i]}\')`;
                    requestToDbCUDUserData(queryExperienceInfo, dbConnection, response);
                }
                else {
                    let queryExperienceInfo = `INSERT INTO experience (userID, startWork, endWork, stillWorking, positionWork,companyName, jobDuties )            
        VALUES(\'${userIDFromDB}\', \'${newUserData.id_startWork[i]}\', \'${endWork}\', ${statusWorke}, \'${newUserData.id_positionWork[i]}\', \'${newUserData.id_companyName[i]}\', \'${newUserData.id_jobDuties[i]}\')`;
                    requestToDbCUDUserData(queryExperienceInfo, dbConnection, response);
                }
            }
        }
        ////если есть 1 
        else if (newUserData.id_startWork != '' && multyExperienceFlag === false) {
            let statusWorke = stillWorking(newUserData);
            let endWork = getEndData(newUserData);

            if (endWork == null) {
                let queryExperienceInfo = `INSERT INTO experience (userID, startWork, endWork, stillWorking, positionWork,companyName, jobDuties )            
    VALUES(\'${userIDFromDB}\', \'${newUserData.id_startWork}\', ${endWork}, ${statusWorke}, \'${newUserData.id_positionWork}\', \'${newUserData.id_companyName}\', \'${newUserData.id_jobDuties}\')`;
                requestToDbCUDUserData(queryExperienceInfo, dbConnection, response);
            }
            else {
                let queryExperienceInfo = `INSERT INTO experience (userID, startWork, endWork, stillWorking, positionWork,companyName, jobDuties )            
    VALUES(\'${userIDFromDB}\', \'${newUserData.id_startWork}\', \'${endWork}\', ${statusWorke}, \'${newUserData.id_positionWork}\', \'${newUserData.id_companyName}\', \'${newUserData.id_jobDuties}\')`;
                requestToDbCUDUserData(queryExperienceInfo, dbConnection, response);
            }
        }


        //------------если есть данные по РЕКОМЕНДАЦИЯМ
        ////если более 1 рекомендации
        if (newUserData.id_personRecommending != '' && newUserData.id_company != '' && multyRecommendingFlag === true) {

            for (let i = 0; i < newUserData.id_company.length; i++) {
                let query = `INSERT INTO recommendation(userID, personRecommending, company,emailCompany,phoneCompany)            
        VALUES(\'${userIDFromDB}\', \'${newUserData.id_personRecommending[i]}\', \'${newUserData.id_company[i]}\', \'${newUserData.id_emailCompany[i]}\', \'${newUserData.id_phoneCompany[i]}\')`;

                requestToDbCUDUserData(query, dbConnection, response);
            }
        }
        ////если 1 рекомендация
        else if (newUserData.id_personRecommending != '' && newUserData.id_company != '' && multyRecommendingFlag === false) {

            let query = `INSERT INTO recommendation(userID, personRecommending, company,emailCompany,phoneCompany)            
        VALUES(\'${userIDFromDB}\', \'${newUserData.id_personRecommending}\', \'${newUserData.id_company}\', \'${newUserData.id_emailCompany}\', \'${newUserData.id_phoneCompany}\')`;

            requestToDbCUDUserData(query, dbConnection, response);
        }

        /////////LANG-----------------------------------------------
        multyLangFlag = false;

        //если есть данные по знаниям языка (более 1)
        if (newUserData.id_langName.length > 1 && multyLangFlag === true) {
            console.log(newUserData.id_langName.length);
            for (let i = 0; i < newUserData.id_langName.length; i++) {
                let query = `INSERT INTO lang_info(userID, langName, level)            
    VALUES(\'${userIDFromDB}\', \'${newUserData.id_langName[i]}\', \'${newUserData.id_level[i]}\')`;

                requestToDbCUDUserData(query, dbConnection, response);
            }

        }
        ////--------1 язык---------------------
        else if (multyLangFlag === false) {
            if (newUserData.id_langName != '') {

                let query = `INSERT INTO lang_info(userID, langName, level)            
     VALUES(\'${userIDFromDB}\', \'${newUserData.id_langName}\', \'${newUserData.id_level}\')`;

                requestToDbCUDUserData(query, dbConnection, response);
            }
        }


        ////// COURSES--------------------------------------------------
        //если есть данные по прохождению курсов (более 1)
        if (multyCoursesFlag === true && newUserData.id_courseName != '') {
            for (let i = 0; i < newUserData.id_courseName.length; i++) {
                let query = `INSERT INTO сourses(userID, courseName, organization, endingCourse)            
 VALUES(\'${userIDFromDB}\', \'${newUserData.id_courseName[i]}\', \'${newUserData.id_organization[i]}\', \'${newUserData.id_endingCourse[i]}\')`;

                requestToDbCUDUserData(query, dbConnection, response);
            }
        }
        ////--------1 курсы---------------------
        else if (multyCoursesFlag === false) {

            if (newUserData.id_courseName != '') {

                let query = `INSERT INTO сourses(userID, courseName, organization, endingCourse)            
 VALUES(\'${userIDFromDB}\', \'${newUserData.id_courseName}\', \'${newUserData.id_organization}\', \'${newUserData.id_endingCourse}\')`;

                requestToDbCUDUserData(query, dbConnection, response);
            }
        }

        //////// ----------PHOTO---------------------------------
        //если есть фото
        if (newUserData.fupload != '') {

            let query = `INSERT INTO userphoto(userID, image)            
     VALUES(\'${userIDFromDB}\', \'${newUserData.fupload}\')`;

            requestToDbCUDUserData(query, dbConnection, response);
        }
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
            endWork = new Date().toISOString().substr(0, 10);
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


////get additional info

const getAdditionalInfo = (newUserData) => {

    let drivLicense1 = getInfoTodrivLicense(newUserData);


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

    let addData = {
        drivLicense: drivLicense1,
        privateCar: availabilityCar(newUserData),
        army: army(newUserData)
    };

    return addData;
}



/////get Personal info
const getPersonalInfo = (newUserData) => {

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

    let infoPersonal = {
        relocation: relocate(newUserData),
        businessTrip: businessTrip(newUserData),
        children: haveChildren(newUserData)
    };
    return infoPersonal;
}

//// 
let stillWorking = (newUserData) => {
    if (newUserData.id_stillWorking == 'on') {
        return 1;
    }
    else return 0;
}

const startupCallback = function () {
    console.log(`Server started at: http://localhost:${service.address().port}`)
};

const service = server.listen(SERVER_PORT, startupCallback);