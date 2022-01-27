const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');// модуль для парсинга пути
const mysql = require('mysql');
const fs = require("fs");
const { Blob, Buffer } = require('buffer');
const { Switch } = require('react-router');
const { connString } = require("./ConnectionModule");
const { CheckedToNull, getCheckedInfo } = require("./CheckedModule");
const { getFkValue, getEndData, getUserData } = require("./GetToPostModule");
const multer = require('multer');
const bcrypt = require('bcrypt'); // import the Library. 


const saltRounds = 10; // The number of rounds for encrypt the passwords. 


const server = express();

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // the file is saved to here
        cb(null, '/Nata/ItStep/React/git_resume/resumeReact/src/Server/uploads')
    },
    filename: function (req, file, cb) {
        // the filename field is added or altered here once the file is uploaded
        cb(null, file.originalname)
    }
})
var upload = multer({ storage: storage })


var hashPassword = "";
var duplicateFlag = false;
var userIDFromDB = 0;
var foundUserID = 0; //найденный пользователь при входе уже зарегистрированного пользователя
var foundUser = {};
var getToRegistrationFlag = false;
var newUser = {};
var userData = {
    userID: 0,
    userLogin: "",
    firstName: "",
    lastName: "",
    middleName: "",
    birthOfDate: "",
    phone: "",
    email: "",
    сityOfResidence: "",
    nationality: "",
    position: "",
    privateСar: 0,
    army: 0,
    hobby: "",
    personalQualities: "",
    professionalSkills: "",
    relocate: 0,
    desiredSalary: 0,
    children: 0,
    businessTrip: 0,
    image: [],
    employment: "",
    schedule: "",
    maritalStatus: "",
    education: "",
    currency: "",
    drivLicense: { driverLicenseA1: 0, driverLicenseA: 0, driverLicenseB1: 0, driverLicenseB: 0, driverLicenseC1: 0, driverLicenseC: 0, driverLicenseD1: 0, driverLicenseD: 0, driverLicenseT: 0 },
    courseName: [],
    organization: [],
    endingCourse: [],
    company: [],
    personRecommending: [],
    emailCompany: [],
    phoneCompany: [],
    langName: [],
    level: [],
    institutName: [],
    levelEducation: [],
    faculty: [],
    specialty: [],
    ending: [],
    companyName: [],
    positionWork: [],
    jobDuties: [],
    startWork: [],
    endWork: [],
    stillWorking: []
};


server.use(express.static(__dirname + '/public'));
server.use(bodyParser.urlencoded({ extended: false }));
server.engine('html', require('ejs').renderFile);
server.set('view engine', 'html');
server.set('views', __dirname);


const SERVER_PORT = 55555;
const HTTP_OK = 200;
const dbConnection = mysql.createConnection(connString);

// подключаемся
dbConnection.connect((err) => {
    if (err) console.log(err.message);
    else console.log("Connected to MySQL");
});


const fillDriverLicense = (newUserData) => {
    let driverLicense = [];
    if (newUserData.id_driverLicenseA1 != undefined) { driverLicense.push(newUserData.id_driverLicenseA1); }
    if (newUserData.id_driverLicenseA != undefined) { driverLicense.push(newUserData.id_driverLicenseA); }
    if (newUserData.id_driverLicenseB1 != undefined) { driverLicense.push(newUserData.id_driverLicenseB1); }
    if (newUserData.id_driverLicenseB != undefined) { driverLicense.push(newUserData.id_driverLicenseB); }
    if (newUserData.id_driverLicenseC1 != undefined) { driverLicense.push(newUserData.id_driverLicenseC1); }
    if (newUserData.id_driverLicenseC != undefined) { driverLicense.push(newUserData.id_driverLicenseC); }
    if (newUserData.id_driverLicenseD1 != undefined) { driverLicense.push(newUserData.id_driverLicenseD1); }
    if (newUserData.id_driverLicenseD != undefined) { driverLicense.push(newUserData.id_driverLicenseD); }
    if (newUserData.id_driverLicenseT != undefined) { driverLicense.push(newUserData.id_driverLicenseT); }
    return driverLicense;
}
const addDriverLicenseToDB = (newUserData, dbConnection) => {

    let drLicense = fillDriverLicense(newUserData);
    // Data new user or update user from db.

    if (drLicense.length > 0) {

        drLicense.forEach(function (item) {
            let queryDriverLicense = ` INSERT INTO user_driver_license(userID,fk_driverLicense) VALUES(${newUserData.userID},${item}) 
                ON DUPLICATE KEY UPDATE fk_driverLicense=${item}`;
            dbConnection.query(queryDriverLicense, (err, result) => {
                if (err) console.log(err.message);
            });
        });
    }

}
const addLanguageToDB = (newUserData, dbConnection) => {
    if (newUserData.id_langName != undefined && newUserData.id_langName != '' && newUserData.id_langName != null) {

        // Data new user from db or update user.

        //// lang name a number  
        if (newUserData.id_langName.length > 0) {

            for (i = 0; i < newUserData.id_langName.length; i++) {
                if (newUserData.id_langName[i] != '' && newUserData.id_level[i] != "") {
                    let queryLang = ` INSERT INTO user_language(userID,fk_langName,fk_languag_proficiency_levelID)
                                  VALUES(${newUserData.userID},${newUserData.id_langName[i]},${newUserData.id_level[i]}) 
                                  ON DUPLICATE KEY UPDATE fk_langName=${newUserData.id_langName[i]}, fk_languag_proficiency_levelID=${newUserData.id_level[i]}`;
                    dbConnection.query(queryLang, (err, result) => {
                        if (err) console.log(err.message);

                    });
                }
            }
        }
    }
}

const addCoursesToDB = (newUserData, dbConnection) => {
    // Data new user or update user from db.

    if (newUserData.id_courseName != '' && newUserData.id_courseName != null) {
        let count = 0;
        if (Array.isArray(newUserData.id_courseName)) {
            newUserData.id_courseName.forEach(function (element) {
                if (element.length > 1) count++;
            });
        }
        if (count > 0) {
            for (i = 0; i < newUserData.id_courseName.length; i++) {
                if (newUserData.id_courseName[i] != '' && newUserData.id_organization[i] != "" && newUserData.id_endingCourse[i] != "") {

                    let queryCourses = ` INSERT INTO user_course(userID,courseName,organization,endingCourse)
                                         VALUES(${newUserData.userID},\'${newUserData.id_courseName[i]}\',\'${newUserData.id_organization[i]}\',\'${newUserData.id_endingCourse[i]}\')
                                         ON DUPLICATE KEY UPDATE courseName=\'${newUserData.id_courseName[i]}\', organization=\'${newUserData.id_organization[i]}\', 
                                         endingCourse=\'${newUserData.id_endingCourse[i]}\' `;

                    dbConnection.query(queryCourses, (err, result) => {
                        if (err) console.log(err.message);
                    });
                }
            }
        }
        else {
            let queryCourses = ` INSERT INTO user_course(userID,courseName,organization,endingCourse)
                VALUES(${newUserData.userID},\'${newUserData.id_courseName}\',\'${newUserData.id_organization}\',\'${newUserData.id_endingCourse}\')
                ON DUPLICATE KEY UPDATE courseName=\'${newUserData.id_courseName}\', organization=\'${newUserData.id_organization}\', endingCourse=\'${newUserData.id_endingCourse}\'`;
            dbConnection.query(queryCourses, (err, result) => {
                if (err) console.log(err.message);
            });
        }
    }

}

const addRecomendingToDB = (newUserData, dbConnection) => {
    if (newUserData.id_company != '' && newUserData.id_company != null) {
        let count = 0;
        let email = null;
        if (Array.isArray(newUserData.id_company)) {
            newUserData.id_company.forEach(function (element) {
                if (element.length > 1) count++;
            });
        }
        if (count > 0) {
            for (i = 0; i < newUserData.id_company.length; i++) {
                if (newUserData.id_company[i] != '' && newUserData.id_personRecommending[i] != "" && newUserData.id_phoneCompany[i] != "") {
                    if (newUserData.id_emailCompany[i] != undefined && newUserData.id_emailCompany[i] != "") {
                        email = newUserData.id_emailCompany[i];
                    }

                    let queryRecomending = ` INSERT INTO user_recomending(userID,company,personRecommending,emailCompany,phoneCompany)
                    VALUES(${newUserData.userID},\'${newUserData.id_company[i]}\',\'${newUserData.id_personRecommending[i]}\',\'${email}\',\'${newUserData.id_phoneCompany[i]}\')
                    ON DUPLICATE KEY UPDATE company=\'${newUserData.id_company[i]}\',personRecommending=\'${newUserData.id_personRecommending[i]}\', emailCompany=\'${email}\',phoneCompany=\'${newUserData.id_phoneCompany[i]}\'`;
                    dbConnection.query(queryRecomending, (err, result) => {
                        if (err) console.log(err.message);
                    });
                }
            }
        }
        else {
            let queryRecomending = ` INSERT INTO user_recomending(userID,company,personRecommending,emailCompany,phoneCompany)
                VALUES(${newUserData.userID},\'${newUserData.id_company}\',\'${newUserData.id_personRecommending}\',\'${email}\',\'${newUserData.id_phoneCompany}\')
                ON DUPLICATE KEY UPDATE company=\'${newUserData.id_company}\',personRecommending=\'${newUserData.id_personRecommending}\', emailCompany=\'${email}\',phoneCompany=\'${newUserData.id_phoneCompany}\'`;
            dbConnection.query(queryRecomending, (err, result) => {
                if (err) console.log(err.message);
            });
        }
    }
}
const addEducationToDB = (newUserData, dbConnection) => {
    if (newUserData.id_institutName != '' && newUserData.id_institutName != null) {
        let count = 0;
        if (Array.isArray(newUserData.id_institutName)) {
            newUserData.id_institutName.forEach(function (element) {
                if (element.length > 1) count++;
            });
        }
        if (count > 0) {
            for (i = 0; i < newUserData.id_institutName.length; i++) {
                if (newUserData.id_institutName[i] != '' && newUserData.id_faculty[i] != "" && newUserData.id_specialty[i] != "" && newUserData.id_ending[i] != "" && newUserData.id_levelEducation[i] != "") {
                    let queryEducation = ` INSERT INTO user_education(userID,institutName,faculty,specialty,ending,fk_levelEducation)
                        VALUES(${newUserData.userID},\'${newUserData.id_institutName[i]}\',\'${newUserData.id_faculty[i]}\',\'${newUserData.id_specialty[i]}\',\'${newUserData.id_ending[i]}\',${newUserData.id_levelEducation[i]})
                        ON DUPLICATE KEY UPDATE institutName=\'${newUserData.id_institutName[i]}\',faculty=\'${newUserData.id_faculty[i]}\', specialty=\'${newUserData.id_specialty[i]}\',
                        ending=\'${newUserData.id_ending[i]}\',fk_levelEducation=${newUserData.id_levelEducation[i]}`;

                    dbConnection.query(queryEducation, (err, result) => {
                        if (err) console.log(err.message);
                    });
                }
            }
        }
        else {
            let queryEducation = ` INSERT INTO user_education(userID,institutName,faculty,specialty,ending,fk_levelEducation)
                    VALUES(${newUserData.userID},\'${newUserData.id_institutName}\',\'${newUserData.id_faculty}\',\'${newUserData.id_specialty}\',\'${newUserData.id_ending}\',${newUserData.id_levelEducation})
                    ON DUPLICATE KEY UPDATE institutName=\'${newUserData.id_institutName}\',faculty=\'${newUserData.id_faculty}\', specialty=\'${newUserData.id_specialty}\',
                    ending=\'${newUserData.id_ending}\',fk_levelEducation=${newUserData.id_levelEducation}`;

            dbConnection.query(queryEducation, (err, result) => {
                if (err) console.log(err.message);
            });
        }
    }
}
const addExpirienceToDB = (newUserData, dbConnection) => {
    if (newUserData.id_companyName != '' && newUserData.id_companyName != null) {
        let count = 0;
        let queryExpiriennce = "";
        let stillWorking = 0;
        if (Array.isArray(newUserData.id_companyName)) {
            newUserData.id_companyName.forEach(function (element) {
                if (element.length > 1) count++;
            });
        }

        if (count > 0) {
            for (i = 0; i < newUserData.id_companyName.length; i++) {
                let endWork = null;
                if (newUserData.id_companyName[i] != '' && newUserData.id_positionWork[i] != "" && newUserData.id_jobDuties[i] != "" && newUserData.id_startWork[i] != "") {
                    if (newUserData.id_endWork[i] != "") {
                        stillWorking = 0;
                    }
                    if (newUserData.id_stillWorking != undefined && newUserData.id_stillWorking[i] == "on" && newUserData.id_endWork[i] == "") {
                        stillWorking = 1;
                    }
                    if (newUserData.id_endWork[i] != undefined && newUserData.id_endWork[i] != "") {
                        endWork = newUserData.id_endWork[i];


                        queryExpiriennce = ` INSERT INTO user_expirience(userID,companyName,positionWork,jobDuties,startWork,endWork,stillWorking)
                            VALUES(${newUserData.userID},\'${newUserData.id_companyName[i]}\',\'${newUserData.id_positionWork[i]}\',\'${newUserData.id_jobDuties[i]}\',\'${newUserData.id_startWork[i]}\',
                            \'${endWork}\',${stillWorking})
                            ON DUPLICATE KEY UPDATE companyName=\'${newUserData.id_companyName[i]}\',positionWork=\'${newUserData.id_positionWork[i]}\', jobDuties=\'${newUserData.id_jobDuties[i]}\',
                            startWork=\'${newUserData.id_startWork[i]}\',endWork=\'${endWork}\',stillWorking=${stillWorking}`;
                    }
                    else {
                        stillWorking = 1;

                        queryExpiriennce = ` INSERT INTO user_expirience(userID,companyName,positionWork,jobDuties,startWork,endWork,stillWorking)
                            VALUES(${newUserData.userID},\'${newUserData.id_companyName[i]}\',\'${newUserData.id_positionWork[i]}\',\'${newUserData.id_jobDuties[i]}\',\'${newUserData.id_startWork[i]}\',
                            ${endWork},${stillWorking})
                            ON DUPLICATE KEY UPDATE companyName=\'${newUserData.id_companyName[i]}\',positionWork=\'${newUserData.id_positionWork[i]}\', jobDuties=\'${newUserData.id_jobDuties[i]}\',
                            startWork=\'${newUserData.id_startWork[i]}\',endWork=${endWork},stillWorking=${stillWorking}`;
                    }
                    dbConnection.query(queryExpiriennce, (err, result) => {
                        if (err) console.log(err.message);
                    });
                }
            }
        }
        else {
            let endWork = null;
            if (newUserData.id_endWork != "") {
                stillWorking = 0;
                endWork = newUserData.id_endWork;
            }
            if (newUserData.id_stillWorking != undefined && newUserData.id_stillWorking == "on" && newUserData.id_endWork == "") {
                stillWorking = 1;
            }
            if (newUserData.id_endWork != undefined && newUserData.id_endWork != "") {

                queryExpiriennce = ` INSERT INTO user_expirience(userID,companyName,positionWork,jobDuties,startWork,endWork,stillWorking)
                    VALUES(${newUserData.userID},\'${newUserData.id_companyName}\',\'${newUserData.id_positionWork}\',\'${newUserData.id_jobDuties}\',\'${newUserData.id_startWork}\',
                    \'${endWork}\',${stillWorking})
                    ON DUPLICATE KEY UPDATE companyName=\'${newUserData.id_companyName}\',positionWork=\'${newUserData.id_positionWork}\', jobDuties=\'${newUserData.id_jobDuties}\',
                    startWork=\'${newUserData.id_startWork}\',endWork= \'${endWork}\',stillWorking=${stillWorking}`;
            }
            else {
                stillWorking = 1;

                queryExpiriennce = ` INSERT INTO user_expirience(userID,companyName,positionWork,jobDuties,startWork,endWork,stillWorking)
                    VALUES(${newUserData.userID},\'${newUserData.id_companyName}\',\'${newUserData.id_positionWork}\',\'${newUserData.id_jobDuties}\',\'${newUserData.id_startWork}\',
                    ${endWork},${stillWorking})
                    ON DUPLICATE KEY UPDATE companyName=\'${newUserData.id_companyName}\',positionWork=\'${newUserData.id_positionWork}\', jobDuties=\'${newUserData.id_jobDuties}\',
                    startWork=\'${newUserData.id_startWork}\',endWork=${endWork},stillWorking=${stillWorking}`;
            }

            dbConnection.query(queryExpiriennce, (err, result) => {
                if (err) console.log(err.message);
            });
        }
    }
}

const requestToDbCUDUserData = (query, dbConnection, newUserData, res, callback = (res, newUserData, dbConnection) => {

    addDriverLicenseToDB(newUserData, dbConnection);
    addLanguageToDB(newUserData, dbConnection);
    addCoursesToDB(newUserData, dbConnection);
    addRecomendingToDB(newUserData, dbConnection);
    addEducationToDB(newUserData, dbConnection);
    addExpirienceToDB(newUserData, dbConnection);

}) => {

    ////-----insert or update user data to db
    dbConnection.query(query, (err, result) => {

        if (err) console.log(err.message);
        if (newUserData.userID == undefined || newUserData.userID == null || newUserData.userID == "" || newUserData.userID == 0) newUserData.userID = result.insertId;

        ////-----insert or update all user data with id
        callback(res, newUserData, dbConnection);
    });
}

const requestToDbGET = (query, dbConnection, res) => {

    dbConnection.query(query, (err, result) => {
        if (err) console.log(err.message);
        res.json(result);
        arrUsers = result;
        res.end();
    });
}


////---------------------SERVER.GET------------------------

server.get("/", (req, res) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    let query = "SELECT * FROM users_info";
    requestToDbGET(query, dbConnection, res);
});

server.get("/login", function (request, res) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    let query = "SELECT * FROM users_info";
    requestToDbGET(query, dbConnection, res);
});

server.get("/register", function (request, res) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    let query = "SELECT * FROM users_info";
    requestToDbGET(query, dbConnection, res);
});

server.get("/userdata", function (request, res) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    let query = "SELECT * FROM users_info";
    requestToDbGET(query, dbConnection, res);
});

server.get("/existinguserdata", (req, res) => {

    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    let result = getUserData(res, userData, dbConnection, foundUserID, fs);
    if (result == false) {
        res.json(userData);
        res.end();
    }
});


////----------------SERVER.POST--------------------------------------
server.post("/login", function (request, response) {
    response.header("Access-Control-Allow-Origin", "http://localhost:3000");
    foundUserID = 0;
    var foundFlag = false;

    var userLog = request.body.UserLogin;
    var userPass = request.body.Password;

    let query = `SELECT * FROM resume_db.users_info WHERE userLogin = '${request.body.UserLogin}'`;

    console.log("QUERY : " + query);
    // query database for user's password
    dbConnection.query(query, (err, result) => {
        if (err) throw err;
        if (result) {
            var hash = result[0];
            console.log(hash.userPassword);

            // compare hash and password
            bcrypt.compare(userPass, hash.userPassword, function (err, result) {
                if (err) console.log(err.message);
                console.log("LOGIN RESULT ::: " + result);
                console.log("USER HASH + USER LOGIN ::: " + hash.userPassword, userLog);
                if (result) {
                    console.log(`User login : ${hash.userLogin} password : ${hash.userPassword} have ID :${hash.userID}`);
                    foundFlag = true;
                    foundUserID = hash.userID;
                    foundUser.UserID = hash.userID;
                    foundUser.UserLogin = hash.userLogin;
                    foundUser.UserPassword = hash.userPassword;
                    console.log("FOUND USER ::: " + foundUser);
                        
                    return response.redirect("http://localhost:3000/existinguserdata");
                }
                else {
                    //ЕСЛИ ПАРОЛЬ НЕ СОВПАЛ !!!!!!!!!!!!!!!
                    if (foundFlag === false) {
                        console.log(`User login : ${request.body.UserLogin} password : ${request.body.Password} NOT FOUND , Go to regestration!!!`);
                        ////переход на регистрацию сделать правильно!!!!!!!
                        return response.redirect('http://localhost:3000/registration');
                    }
                }
                response.end();
            });
        }
    });
});


server.post("/registration", function (request, response) {

    response.header("Access-Control-Allow-Origin", "http://localhost:3000");

    if (request.body.Password === request.body.RepeatPassword) {
       
        //// Go to registration form
        //Login and password new user
        newUser = request.body;
        console.log(newUser);
        ////hash+ salt
        bcrypt.genSalt(saltRounds, function (err, salt) {
            bcrypt.hash(newUser.Password, salt, function (err, hash) {
                hashPassword = hash;
                console.log(hashPassword);
            });
        });
        //console.log("HASH PASSWORD ::: " + hashPassword);

        let query = `SELECT * FROM resume_db.users_info WHERE userLogin = '${newUser.UserLogin}'`;
        
        // query database for user  login
        dbConnection.query(query, (err, result) => {
            if (err) throw err;
            var userDataFromDB = result[0];

            if (userDataFromDB) {
                duplicateFlag = true;
                let objJSON1 = { "result": "Пользователь с данным логином уже зарегистрирован, придумайте новый логин !" };
                return response.redirect("http://localhost:3000/registration");
            }
            else {
                duplicateFlag = false;
                console.log("duplicateFlag === false");
                return response.redirect("http://localhost:3000/existinguserdata");
            }
        });
    }
    else {
        return response.redirect('http://localhost:3000/registration');
    }
});


//////////////////////////////////////////////ExistingUserData POST/////////////////////////////////////////////////////////////////////


server.post("/existinguserdata", upload.single('fupload'), function (req, res) {

    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    console.log("REQUEST ::: " + req);
    var newFileNameToDb;
    console.log("REQUEST FILE ::: " + req.file);
    if (req.file) {
        const fileName = req.file.originalname;
        newFileNameToDb = Date.now() + "_" + fileName;

        fs.rename('uploads/' + fileName, 'uploads/' + newFileNameToDb, err => {
            if (err) throw err; // не удалось переименовать файл
            console.log('Файл успешно переименован');
            console.log("*** ::: " + newFileNameToDb + " ::: ***");
        });
    }

    console.log("---------updateUser----------------------------------------");

    console.log(foundUser);

    console.log("---------updateUser-end--------------------------------------");
    ////--------------------- NEW USER AFTER REGESTRATION --------------------------------------------
    if (foundUser.UserLogin == undefined) {
        let newUserData = req.body;
        if (newUserData) {

            let userDataChecked = getCheckedInfo(newUserData);

            let checkToNull = CheckedToNull(newUserData);

            let fileToDB = null;
            if (newFileNameToDb) {
                fileToDB = newFileNameToDb;
            }
            let query = `INSERT INTO users_info (userLogin,userPassword,firstName,lastName,middleName,birthOfDate,phone,email,сityOfResidence,nationality,position,privateСar,
            army,hobby,personalQualities,professionalSkills,relocate,desiredSalary,children,businessTrip,fk_employmentID,fk_scheduleID,
            fk_marital_statusID,fk_level_of_educationID,fk_currencyID,image) 
    
            VALUES ( \'${newUser.UserLogin}\', \'${hashPassword}\', \'${newUserData.id_firstName}\', \'${newUserData.id_lastName}\', ${checkToNull.id_middleName}, 
    \'${newUserData.id_birthOfDate}\',\'${newUserData.id_phone}\', \'${newUserData.id_email}\', \'${newUserData.id_cityOfResidence}\', ${checkToNull.id_nationality},
    \'${newUserData.id_userPosition}\', ${userDataChecked.privateCar}, ${userDataChecked.army}, ${checkToNull.id_hobby}, ${checkToNull.id_personalQualities},${checkToNull.id_professionalSkills},
     ${userDataChecked.relocation}, ${checkToNull.id_desiredSalary},${userDataChecked.children},  ${userDataChecked.businessTrip},\'${newUserData.id_employment}\', 
    \'${newUserData.id_schedule}\', \'${newUserData.id_maritalStatus}\',  \'${newUserData.id_education}\',\'${newUserData.id_currency}\',\'${fileToDB}\' )`;

            requestToDbCUDUserData(query, dbConnection, res, newUserData);
        }

        res.end();
    }
    ////------------------------------UPDATE USER AFTER LOGIN ----------------------------------
    else {
        let updateUserData = req.body;
        console.log(updateUserData);
        updateUserData.userID = foundUser.UserID;
        if (updateUserData) {

            let userDataChecked = getCheckedInfo(updateUserData);

            let checkToNull = CheckedToNull(updateUserData);

            if (req.file == undefined)//если загруженное фото уже есть
            {
                let query = `UPDATE users_info SET  firstName=\'${updateUserData.id_firstName}\',lastName=\'${updateUserData.id_lastName}\',middleName= ${checkToNull.id_middleName},
   birthOfDate=\'${updateUserData.id_birthOfDate}\', phone=\'${updateUserData.id_phone}\',email=\'${updateUserData.id_email}\',сityOfResidence=\'${updateUserData.id_cityOfResidence}\',
   nationality=${checkToNull.id_nationality},position=\'${updateUserData.id_userPosition}\',privateСar=${userDataChecked.privateCar},army= ${userDataChecked.army},
   hobby= ${checkToNull.id_hobby},personalQualities=${checkToNull.id_personalQualities},professionalSkills=${checkToNull.id_professionalSkills}, relocate= ${userDataChecked.relocation},
   desiredSalary= ${checkToNull.id_desiredSalary}, children=${userDataChecked.children},businessTrip=${userDataChecked.businessTrip},fk_employmentID=\'${updateUserData.id_employment}\',fk_scheduleID=\'${updateUserData.id_schedule}\',
   fk_marital_statusID=\'${updateUserData.id_maritalStatus}\',fk_level_of_educationID=\'${updateUserData.id_education}\', fk_currencyID =\'${updateUserData.id_currency}\' WHERE UserID=\'${foundUser.UserID}\'`;

                console.log("************************** " + updateUserData.userID);
                requestToDbCUDUserData(query, dbConnection, updateUserData, res);
            }
            else {
                let fileToDB = null;
                if (newFileNameToDb) {
                    fileToDB = newFileNameToDb;
                }

                let query = `UPDATE users_info SET  firstName=\'${updateUserData.id_firstName}\',lastName=\'${updateUserData.id_lastName}\',middleName= ${checkToNull.id_middleName},
                birthOfDate=\'${updateUserData.id_birthOfDate}\', phone=\'${updateUserData.id_phone}\',email=\'${updateUserData.id_email}\',сityOfResidence=\'${updateUserData.id_cityOfResidence}\',
                nationality=${checkToNull.id_nationality},position=\'${updateUserData.id_userPosition}\',privateСar=${userDataChecked.privateCar},army= ${userDataChecked.army},
                hobby= ${checkToNull.id_hobby},personalQualities=${checkToNull.id_personalQualities},professionalSkills=${checkToNull.id_professionalSkills}, relocate= ${userDataChecked.relocation},
                desiredSalary= ${checkToNull.id_desiredSalary}, children=${userDataChecked.children},businessTrip=${userDataChecked.businessTrip},fk_employmentID=\'${updateUserData.id_employment}\',fk_scheduleID=\'${updateUserData.id_schedule}\',
                fk_marital_statusID=\'${updateUserData.id_maritalStatus}\',fk_level_of_educationID=\'${updateUserData.id_education}\', fk_currencyID =\'${updateUserData.id_currency}\', image=\'${fileToDB}\' WHERE UserID=\'${foundUser.UserID}\'`;

                requestToDbCUDUserData(query, dbConnection, updateUserData, res);
            }
        }
        res.end();
    }
});

const startupCallback = function () {
    console.log(`Server started at: http://localhost:${service.address().port}`)
};

const service = server.listen(SERVER_PORT, startupCallback);
