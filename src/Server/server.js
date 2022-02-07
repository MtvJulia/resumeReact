const express = require('express');
const bodyParser = require('body-parser');
const pdf = require('html-pdf');
const cors = require('cors');
//const path = require('path');// модуль для парсинга пути
const mysql = require('mysql');
const fs = require("fs");
//const { Blob, Buffer } = require('buffer');
//const { Switch } = require('react-router');
const { connString } = require("./ConnectionModule");
const { CheckedToNull, getCheckedInfo } = require("./CheckedModule");
const {fillDriverLicense,addDriverLicenseToDB,addLanguageToDB,addCoursesToDB,addRecomendingToDB, addEducationToDB,addExpirienceToDB} = require("./AddDataToDBModule");
const {  getUserData, getFileValue } = require("./GetToPostModule");
const multer = require('multer');
const bcrypt = require('bcrypt'); // import the Library. 



const saltRounds = 10; // The number of rounds for encrypt the passwords. 
const server = express();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // the file is saved to here
        cb(null, '/Nata/ItStep/React/git_resume/resumeReact/src/Server/uploads')
    },
    filename: function (req, file, cb) {
        // the filename field is added or altered here once the file is uploaded
        cb(null, file.originalname)
    }
})

let checkedUserFlag = false ;
let newUser={};
const upload = multer({ storage: storage });
const foundUser={};
const userDataEmptyObject = {
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
server.use(bodyParser.json({limit: '50mb'}));
server.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
server.use(cors());
server.engine('html', require('ejs').renderFile);
server.set('view engine', 'html');
server.set('views', __dirname);


//const pdfTemplate1 = require('./documents/tmp1');
const SERVER_PORT = 55555;
const HTTP_OK = 200;
const dbConnection = mysql.createConnection(connString);



// подключаемся
dbConnection.connect((err) => {
    if (err) console.log(err.message);
    else console.log("Connected to MySQL");
});



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
       if(result)
       {
            ////-----insert or update all user data with id
           callback(res, newUserData, dbConnection);
       }       
    });
}

const requestToDbGET = (query, dbConnection, res) => {

    dbConnection.query(query, (err, result) => {
        if (err) console.log(err.message);
        res.json(result);      
        res.end();
    });
}

const newUserRegistration=(newUser,foundUser,callback=(hashPassword,foundUser)=>{
    let queryRegisterUser = ` INSERT INTO user_registration_data(userLogin,userPassword) VALUES(\'${newUser.UserLogin}\',\'${hashPassword}\')`;
    dbConnection.query(queryRegisterUser, (err, result) => {
        if (err) throw err;       
        foundUser.userID  = result.insertId;                      
    });
})=>{
  ////hash+ salt
 let hashPassword="";
  bcrypt.genSalt(saltRounds, function (err, salt) {
    bcrypt.hash(newUser.Password, salt, function (err, hash) {
         hashPassword = hash;        
        callback(hashPassword,foundUser);
    });
});
};

////---------------------SERVER.GET------------------------

server.get("/", (req, res) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    let query = "SELECT * FROM user_registration_data";
    requestToDbGET(query, dbConnection, res);
});

server.get("/login", function (request, res) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    let query = "SELECT * FROM user_registration_data";
    requestToDbGET(query, dbConnection, res);
});

server.get("/register", function (request, res) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    let query = "SELECT * FROM user_registration_data";
    requestToDbGET(query, dbConnection, res);
});

server.get("/existinguserdata", (req, res) => {
    let getUsData = JSON.parse( JSON.stringify( userDataEmptyObject )) ;     
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    let result = getUserData(res, getUsData, dbConnection, foundUser.userID, fs,checkedUserFlag);
    console.log(checkedUserFlag);
    if (result == false) {
        res.json(getUsData);
        res.end();
    }
});
server.get("/tmp1", (req, res) => {
    let userDataTMP1 = JSON.parse( JSON.stringify( userDataEmptyObject )) ;    
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    let result = getUserData(res, userDataTMP1, dbConnection, foundUser.userID, fs,checkedUserFlag);   
    if (result == false) {
        res.json(userDataTMP1);
        res.end();
    }
});
server.get("/tmp2", (req, res) => {
    let userDataTMP2 =JSON.parse( JSON.stringify( userDataEmptyObject )) ;
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    let result = getUserData(res, userDataTMP2, dbConnection, foundUser.userID, fs,checkedUserFlag);   
    if (result == false) {
        res.json(userDataTMP2);
        res.end();
    }
});
server.get("/tmp3", (req, res) => {
    let userDataTMP3 = JSON.parse( JSON.stringify( userDataEmptyObject )) ;    
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    let result = getUserData(res, userDataTMP3, dbConnection, foundUser.userID, fs,checkedUserFlag);   
    if (result == false) {
        res.json(userDataTMP3);
        res.end();
    }
});
server.get("/tmp4", (req, res) => {
    let userDataTMP4 = JSON.parse( JSON.stringify( userDataEmptyObject )) ;   
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    let result = getUserData(res, userDataTMP4, dbConnection,foundUser.userID, fs,checkedUserFlag);   
    if (result == false) {
        res.json(userDataTMP4);
        res.end();
    }
});
server.get("/tmp5", (req, res) => {
    let userDataTMP5 = JSON.parse( JSON.stringify( userDataEmptyObject )) ;     
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    let result = getUserData(res, userDataTMP5, dbConnection, foundUser.userID, fs,checkedUserFlag);   
    if (result == false) {
        res.json(userDataTMP5);
        res.end();
    }
});
server.get("/tmp6", (req, res) => {
    let userDataTMP6 = JSON.parse( JSON.stringify( userDataEmptyObject )) ;   
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    let result = getUserData(res, userDataTMP6, dbConnection, foundUser.userID, fs,checkedUserFlag);   
    if (result == false) {
        res.json(userDataTMP6);
        res.end();
    }
});

////----------------SERVER.POST--------------------------------------
server.post("/login", function (request, response) {
    response.header("Access-Control-Allow-Origin", "http://localhost:3000");
   
    let foundFlag = false;  
    let userPass = request.body.Password;

    let query = `SELECT * FROM resume_db.user_registration_data WHERE userLogin = '${request.body.UserLogin}'`;
    
    // query database for user's password
    dbConnection.query(query, (err, result) => {
        if (err) throw err;
        if (result) {
            let hash = result[0];         
            // compare hash and password
            bcrypt.compare(userPass, hash.userPassword, function (err, result) {
                if (err) console.log(err.message);                
                if (result) {                  
                    foundFlag = true;                    
                    foundUser.userID = hash.userID;
                    foundUser.userLogin = hash.userLogin;
                    foundUser.userPassword = hash.userPassword;                  
                    let queryCheckedUser = `SELECT * FROM resume_db.user_info WHERE userID = ${foundUser.userID}`;
        
                    // query database for user  login
                    dbConnection.query(queryCheckedUser, (err, result) => {
                        if (err) throw err;                       
                        if(result[0])
                        {
                            checkedUserFlag = true;                            
                        }   
                    });
                    return response.redirect("http://localhost:3000/existinguserdata");
                }
                else {
                    //ЕСЛИ ПАРОЛЬ НЕ СОВПАЛ !!!!!!!!!!!!!!!
                    if (foundFlag === false) {
                        console.log(`User login : ${request.body.UserLogin} password : ${request.body.Password} NOT FOUND , Go to regestration!!!`);
                        ////переход на регистрацию сделать правильно!!!!!!!
                        //// На страницу  , где выбор вход(логин ) или регистрация

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

        let query = `SELECT * FROM resume_db.user_registration_data WHERE userLogin = '${newUser.UserLogin}'`;
        
        // query database for user  login
        dbConnection.query(query, (err, result) => {
            if (err) throw err;
            let userDataFromDB = result[0];            

            if (userDataFromDB) {               
               //// &&&&&&&&&&&&&&&&& let objJSON1 = { "result": "Пользователь с данным логином уже зарегистрирован, придумайте новый логин !" }; ??????????????????????
                return response.redirect("http://localhost:3000/registration");
            }
            else {                
                newUserRegistration(newUser,foundUser);              
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
    
    let newFileNameToDb;
    
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
    console.log("checkedUserFlag  UPDATE :::::::::::: ");
    console.log(checkedUserFlag);
    console.log(foundUser);  
    console.log("---------updateUser-end--------------------------------------");

    ////--------------------- NEW USER AFTER REGESTRATION --------------------------------------------
    
        let newUserData = req.body;
        newUserData.userID = foundUser.userID;        
        if (newUserData) {

            let userDataChecked = getCheckedInfo(newUserData);

            let checkToNull = CheckedToNull(newUserData);

            let fileToDB = null;
            if (newFileNameToDb) {
                fileToDB = newFileNameToDb;
            }
            
            let query = `INSERT INTO user_info (userID,firstName,lastName,middleName,birthOfDate,phone,email,сityOfResidence,nationality,position,privateСar,
            army,hobby,personalQualities,professionalSkills,relocate,desiredSalary,children,businessTrip,fk_employmentID,fk_scheduleID,
            fk_marital_statusID,fk_level_of_educationID,fk_currencyID,image) 
    
            VALUES ( ${foundUser.userID}, \'${newUserData.id_firstName}\', \'${newUserData.id_lastName}\', ${checkToNull.id_middleName}, 
    \'${newUserData.id_birthOfDate}\',\'${newUserData.id_phone}\', \'${newUserData.id_email}\', \'${newUserData.id_cityOfResidence}\', ${checkToNull.id_nationality},
    \'${newUserData.id_userPosition}\', ${userDataChecked.privateCar}, ${userDataChecked.army}, ${checkToNull.id_hobby}, ${checkToNull.id_personalQualities},${checkToNull.id_professionalSkills},
     ${userDataChecked.relocation}, ${checkToNull.id_desiredSalary},${userDataChecked.children},  ${userDataChecked.businessTrip},\'${newUserData.id_employment}\', 
    \'${newUserData.id_schedule}\', \'${newUserData.id_maritalStatus}\',  \'${newUserData.id_education}\',\'${newUserData.id_currency}\',\'${fileToDB}\' )

    ON DUPLICATE KEY UPDATE firstName=\'${newUserData.id_firstName}\',lastName=\'${newUserData.id_lastName}\',middleName= ${checkToNull.id_middleName},
    birthOfDate=\'${newUserData.id_birthOfDate}\', phone=\'${newUserData.id_phone}\',email=\'${newUserData.id_email}\',сityOfResidence=\'${newUserData.id_cityOfResidence}\',
    nationality=${checkToNull.id_nationality},position=\'${newUserData.id_userPosition}\',privateСar=${userDataChecked.privateCar},army= ${userDataChecked.army},
    hobby= ${checkToNull.id_hobby},personalQualities=${checkToNull.id_personalQualities},professionalSkills=${checkToNull.id_professionalSkills}, relocate= ${userDataChecked.relocation},
    desiredSalary= ${checkToNull.id_desiredSalary}, children=${userDataChecked.children},businessTrip=${userDataChecked.businessTrip},fk_employmentID=\'${newUserData.id_employment}\',fk_scheduleID=\'${newUserData.id_schedule}\',
    fk_marital_statusID=\'${newUserData.id_maritalStatus}\',fk_level_of_educationID=\'${newUserData.id_education}\', fk_currencyID =\'${newUserData.id_currency}\' ${ req.file!= undefined?getFileValue(fileToDB,req):""}`;

           requestToDbCUDUserData(query, dbConnection, newUserData, res);
        }
        return res.redirect("http://localhost:3000/tmps"); 
});

const startupCallback = function () {
    console.log(`Server started at: http://localhost:${service.address().port}`)
};

const service = server.listen(SERVER_PORT, startupCallback);
