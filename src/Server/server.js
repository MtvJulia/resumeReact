const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');// модуль для парсинга пути
const mysql = require('mysql');
const fs = require("fs");

var arrUsers = [];
const server = express();
var duplicateFlag = false;

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

const requestToDbGET = (query, dbConnection, res) => {
    dbConnection.query(query, (err, result) => {

        if (err) console.log(err.message);
        res.json(result);
        arrUsers = result;
        console.log(arrUsers);
        res.end();
    });
}

const requestToDbCUD = (query, dbConnection, res, objJSON) => {
    dbConnection.query(query, (err, result) => {
        if (err) console.log(err.message);
        res.json(objJSON);
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

////----------------SERVER.POST--------------------------------------
server.post("/login", function (request, response) {
    response.header("Access-Control-Allow-Origin", "http://localhost:3000");
    var foundFlag = false;
    arrUsers.forEach(element => {
        if (element.userLogin === request.body.UserLogin && element.userPassword === request.body.Password) {
            console.log(`User login : ${element.userLogin} password : ${element.userPassword} have ID :${element.userID}`);
            foundFlag = true;
            //ПЕРЕХОД ПО ССЫЛКЕ НА ЗАПОЛНЕННУЮ КОЛБАСУ!!!!!!!!!     
            return  response.redirect("http://localhost:3000/userdata"); 
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

            return  requestToDbCUD(query, dbConnection, response, objJSON);

            ////ПЕРЕЙТИ НА НОВУЮ ПУСТУЮ КОЛБАСУ!!!
            //И надо получить ID вставленного нового пользователя!!!
        }
    }

    else {

        // alert("Password does not match repeat !!!");
        console.log("Password does not match repeat ");

        return response.redirect('http://localhost:3000/registration');
    }
    response.end();
});

server.post("/userdata", function (request, response) {

    response.header("Access-Control-Allow-Origin", "http://localhost:3000");
    // if (request.body.Password === request.body.RepeatPassword) {
    //     console.log("OK");
    //    //Получае все данные с формы!!!!!!!!!!!!
        let newUserData = request.body;
       console.log(newUserData);
    //     if (duplicateFlag === false) {
            let query = `INSERT INTO lang_info(userID, langName, level)
            VALUES('5', 'Испанский', 'А1 - Начальный')`;
    // VALUES(\'${newUserData.userID}\', \'${newUserData.langName}\', \'${newUserData.level}\')`;
            let objJSON = { "result": "User lang data added!" };
            requestToDbCUD(query, dbConnection, response, objJSON);
            //response.redirect('"http://localhost:3000/registration"');
            ////ПЕРЕЙТИ НА НОВУЮ ПУСТУЮ КОЛБАСУ!!!
            //И надо получить ID вставленного нового пользователя!!!
        //}
   // }
    // else {
    //     // alert("Password does not match repeat !!!");
    //     console.log("Password does not match repeat ");
    //     response.redirect('/registration');
    // }
    response.end();
});

const startupCallback = function () {
    console.log(`Server started at: http://localhost:${service.address().port}`)
};

const service = server.listen(SERVER_PORT, startupCallback);