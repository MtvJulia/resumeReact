const express = require('express');
const bodyParser = require('body-parser');
const pdf = require('html-pdf');
const cors = require('cors');
const path = require('path');// модуль для парсинга пути
const mysql = require('mysql');
const fs = require("fs");
const { Blob, Buffer } = require('buffer');
const { Switch } = require('react-router');
const { connString } = require("./ConnectionModule");
const { CheckedToNull, getCheckedInfo } = require("./CheckedModule");
const {fillDriverLicense,addDriverLicenseToDB,addLanguageToDB,addCoursesToDB,addRecomendingToDB, addEducationToDB,addExpirienceToDB} = require("./AddDataToDBModule");
const {  getUserData } = require("./GetToPostModule");
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
// server.use(bodyParser.json()); 

server.use(bodyParser.json({limit: '50mb'}));
server.use(bodyParser.urlencoded({limit: '50mb', extended: true}));


//server.use(bodyParser.urlencoded({ extended: false }));
server.use(cors());
server.engine('html', require('ejs').renderFile);
server.set('view engine', 'html');
server.set('views', __dirname);
const pdfTemplate1 = require('./documents/tmp1');

const SERVER_PORT = 55555;
const HTTP_OK = 200;
const dbConnection = mysql.createConnection(connString);



// подключаемся
dbConnection.connect((err) => {
    if (err) console.log(err.message);
    else console.log("Connected to MySQL");
});

function strToObj(str){
    var obj = {};
    if(str&&typeof str ==='string'){
        var objStr = str.match(/\{(.)+\}/g);
        eval("obj ="+objStr);
    }
    return obj
 }

server.post('/create-pdf', (req, res) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    console.log("111111111111111111111111111111111");
        console.log(JSON.stringify(req.body));
     pdf.create(pdfTemplate1(req.body), {}).toFile('result.pdf', (err) => {
        if(err) {
            res.send(Promise.reject());
        }
               
        res.send(Promise.resolve());
    });
});

server.get('/fetch-pdf', (req, res) => {
    res.sendFile(`${__dirname}/result.pdf`)
})

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
server.get("/tmps", (req, res) => {
    userData = {userID: 0,  userLogin: "", firstName: "", lastName: "", middleName: "", birthOfDate: "", phone: "",  email: "", сityOfResidence: "", nationality: "",   position: "",
        privateСar: 0,  army: 0, hobby: "", personalQualities: "", professionalSkills: "",relocate: 0,desiredSalary: 0,children: 0, businessTrip: 0, image: [], employment: "",schedule: "",
        maritalStatus: "",education: "",
        currency: "",drivLicense: { driverLicenseA1: 0, driverLicenseA: 0, driverLicenseB1: 0, driverLicenseB: 0, driverLicenseC1: 0, driverLicenseC: 0, driverLicenseD1: 0, driverLicenseD: 0, driverLicenseT: 0 },
        courseName: [],organization: [],endingCourse: [],company: [],personRecommending: [],emailCompany: [],phoneCompany: [],langName: [], level: [],institutName: [],levelEducation: [],
        faculty: [],specialty: [],ending: [],companyName: [],positionWork: [],jobDuties: [],startWork: [], endWork: [],stillWorking: [] };  

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
        return res.redirect("http://localhost:3000/tmps");
      //  res.end();
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
        return res.redirect("http://localhost:3000/tmps");
      // res.end();
    }
   
});

const startupCallback = function () {
    console.log(`Server started at: http://localhost:${service.address().port}`)
};

const service = server.listen(SERVER_PORT, startupCallback);
