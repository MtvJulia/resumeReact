const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');// модуль для парсинга пути
const mysql = require('mysql');
const fs = require("fs");
const { Blob, Buffer } = require('buffer');
const { Switch } = require('react-router');

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

const userDataChecking=(userData)=>{
  
    if(userData[0].endWork == null)
    {
       userData[0].endWork = new Date().toJSON().substr(0,10);          
    }  
    if(userData[0].endingCourse==null)
    {
        userData.endingCourse="дд.мм.гггг" ; 
    }
    //все что с датами, если nullб то...

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
        if(result) 
        {
            userData = result;
            userDataChecking(userData);
        }                      

        callback(res,userData);
    });
    };  


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
\'${fk_value.id_schedule}\', ${userDataChecked.businessTrip},\'${fk_value.id_maritalStatus}\',  \'${fk_value.id_education}\',${checkToNull.fupload},
${checkToNull.id_courseName}, ${checkToNull.id_organization}, ${checkToNull.id_endingCourse},${checkToNull.id_institutName}, ${checkToNull.id_levelEducation},
${checkToNull.id_faculty}, ${checkToNull.id_specialty}, ${checkToNull.id_ending},
${checkToNull.id_startWork}, \'${endWork}\', ${userDataChecked.stillWorking}, ${checkToNull.id_positionWork}, ${checkToNull.id_companyName}, ${checkToNull.id_jobDuties},
${checkToNull.id_langName}, ${checkToNull.id_level},${checkToNull.id_personRecommending}, ${checkToNull.id_company}, ${checkToNull.id_emailCompany},
${checkToNull.id_phoneCompany},${userDataChecked.children},${fk_value.id_currency} )`;

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


const getFkValue = (newUserData) =>{

    let fkValue={};

    if(newUserData.id_employment!="")
    {
        switch(newUserData.id_employment)
        {
          case "Полная занятость":{
            fkValue.id_employment = 1;
              break;
          }
          case "Частичная занятость":{
            fkValue.id_employment = 2;
              break;
          }
          case "Проектная работа":{
            fkValue.id_employment = 3;
              break;
          }
          case "Волонтерство":{
            fkValue.id_employment = 4;
              break;
          }
          case "Стажировка":{
            fkValue.id_employment = 5;
              break;
          }
        } 
    }
    
    if(newUserData.id_schedule!="")
    {
        switch(newUserData.id_schedule)
        {
          case "Полный день":{
            fkValue.id_schedule = 1;
              break;
          }
          case "Сменный график":{
            fkValue.id_schedule = 2;
              break;
          }
          case "Гибкий график":{
            fkValue.id_schedule = 3;
              break;
          }
          case "Удаленная работа":{
            fkValue.id_schedule = 4;
              break;
          }
          case "Вахтовый метод":{
            fkValue.id_schedule = 5;
              break;
          }
        } 
    }
    if(newUserData.id_maritalStatus!="")
    {
        switch(newUserData.id_maritalStatus)
        {
          case "Замужем":{
            fkValue.id_maritalStatus = 1;
              break;
          }
          case "Не замужем":{
            fkValue.id_maritalStatus = 2;
              break;
          }
          case "Женат":{
            fkValue.id_maritalStatus = 3;
              break;
          }
          case "Не женат":{
            fkValue.id_maritalStatus = 4;
              break;
          }          
        } 
    }
    if(newUserData.id_education!="")
    {
        switch(newUserData.id_education)
        {
          case "Общее среднее образование":{
            fkValue.id_education = 1;
              break;
          }
          case "Профессионально-техническое образование":{
            fkValue.id_education = 2;
              break;
          }
          case "Высшее образования":{
            fkValue.id_education = 3;
              break;
          }
          case "Аспирантура":{
            fkValue.id_education= 4;
              break;
          }
          case "Докторантура":{
            fkValue.id_education = 5;
              break;
          }
        } 
    }
    if(newUserData.id_currency!="")
    {
        switch(newUserData.id_currency)
        {
          case "Гривна":{
            fkValue.id_currency = 1;
              break;
          } 
          case "Доллар США":{
            fkValue.id_currency = 2;
              break;
          }
          case "Евро":{
            fkValue.id_currency = 3;
              break;
          }
          case "Рубли":{
            fkValue.id_currency = 4;
              break;
          }
          case "Фунт":{
            fkValue.id_currency= 5;
              break;
          }
          case "Юань":{
            fkValue.id_currency = 6;
              break;
          }
          case "Другая":{
            fkValue.id_currency = 7;
              break;
          }
        } 
    }   
return fkValue;

}

const getEndData = (newUserData) => {

    let endWork = '';
    
     if(newUserData.id_endWork == ''&& newUserData.id_stillWorking == 'on'){

        endWork = null;
        return endWork;
    }
    else if(newUserData.id_endWork == ''&& newUserData.id_stillWorking == '')
    {
        endWork = new Date().toISOString().substr(0, 10).toString()+"~";
    }
    else if(newUserData.id_endWork.length > 1 && (newUserData.id_endWork[0].length > 1||newUserData.id_endWork[1].length > 1))
    {
        for(let i=0;i<newUserData.id_endWork.length;i++)
        {
            if(newUserData.id_endWork[i]!="")
            {
                endWork += newUserData.id_endWork[i]+"~"; 
            }
            else{
                endWork += "NULL~";  
            }
        }
    }

    return endWork;
}

const getInfoTodrivLicense = (newUserData) => {

    let drivarLiscense = "";
    if (newUserData.id_driverLicenseA1 == 'on') {
        drivarLiscense += "A1~";
    }
    if (newUserData.id_driverLicenseA == 'on') {
        drivarLiscense += "A~";
    }
    if (newUserData.id_driverLicenseB1 == 'on') {
        drivarLiscense += "B1~";
    }
    if (newUserData.id_driverLicenseB == 'on') {
        drivarLiscense += "B~";
    }
    if (newUserData.id_driverLicenseC1 == 'on') {
        drivarLiscense += "C1~";
    }
    if (newUserData.id_driverLicenseC == 'on') {
        drivarLiscense += "C~";
    }
    if (newUserData.id_driverLicenseD1 == 'on') {
        drivarLiscense += "D1~";
    }
    if (newUserData.id_driverLicenseD == 'on') {
        drivarLiscense += "D~";
    }
    if (newUserData.id_driverLicenseT == 'on') {
        drivarLiscense += "T~";
    }
    return drivarLiscense;
}

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
    //если пришел массив и размер 0 элемента >1 , т.е.это не массив char
    if( newUserData.id_courseName[0].length > 1 )
    {   
         let  courses="";

        for(let i =0; i<newUserData.id_courseName.length;i++)
        {
            courses += newUserData.id_courseName[i] + "~";
        }

        objChecked.id_courseName = `\'${courses}\'`;

    }
    else{

        objChecked.id_courseName = `\'${newUserData.id_courseName}\'`;
    }   
}

if(newUserData.id_organization==''){
    objChecked.id_organization = null;
   }

   else{
    //если пришел массив и размер 0 элемента >1 , т.е.это не массив char
    if( newUserData.id_organization[0].length >1 )
    {   
         let  organization="";

        for(let i =0; i<newUserData.id_organization.length;i++)
        {
            organization += newUserData.id_organization[i] + "~";
        }

        objChecked.id_organization = `\'${organization}\'`;

    }
    else{
        
        objChecked.id_organization = `\'${newUserData.id_organization}\'`;
    }
}

if(newUserData.id_endingCourse==''){
    objChecked.id_endingCourse = null;
   }
   else{
    //если пришел массив и размер 0 элемента >1 , т.е.это не массив char
    if(  newUserData.id_endingCourse[0].length >1 )
    {   
         let  endingCourse="";

        for(let i =0; i< newUserData.id_endingCourse.length;i++)
        {
            endingCourse +=  newUserData.id_endingCourse[i] + "~";
        }

        objChecked.id_endingCourse = `\'${endingCourse}\'`;

    }
    else{
   
        objChecked.id_endingCourse = `\'${newUserData.id_endingCourse}\'`;
    }
}


if(newUserData.id_institutName==''){

    objChecked.id_institutName = null;
   }

   else{
   
    if(   newUserData.id_institutName[0].length >1 )
    {   
         let  institutName="";

        for(let i =0; i< newUserData.id_institutName.length;i++)
        {
            institutName +=  newUserData.id_institutName[i] + "~";
        }

        objChecked.id_institutName = `\'${institutName}\'`;

    }
    else{
      
        objChecked.id_institutName = `\'${newUserData.id_institutName}\'`;
    }
}


if(newUserData.id_levelEducation==''){
    
    objChecked.id_levelEducation = null;
   }
   else{
 
    if(   newUserData.id_levelEducation[0].length >1 )
    {   
         let  levelEducation="";

        for(let i =0; i<newUserData.id_levelEducation.length;i++)
        {
            levelEducation +=  newUserData.id_levelEducation[i] + "~";
        }

        objChecked.id_levelEducation = `\'${levelEducation}\'`;

    }
    else{
      
        objChecked.id_levelEducation = `\'${newUserData.id_levelEducation}\'`;
    }
}


   if(newUserData.id_faculty==''){
    objChecked.id_faculty = null;
   }
   else{
 
    if( newUserData.id_faculty[0].length >1 )
    {   
         let  faculty="";

        for(let i =0; i< newUserData.id_faculty.length;i++)
        {
            faculty +=   newUserData.id_faculty[i] + "~";
        }

        objChecked.id_faculty = `\'${faculty}\'`;

    }
    else{
      
        objChecked.id_faculty = `\'${newUserData.id_faculty}\'`;
       }
}
  


   if(newUserData.id_specialty==''){
    objChecked.id_specialty = null;
   }
   else{
 
    if( newUserData.id_specialty[0].length >1 )
    {   
         let  specialty="";

        for(let i =0; i< newUserData.id_specialty.length;i++)
        {
            specialty +=   newUserData.id_specialty[i] + "~";
        }

        objChecked.id_specialty = `\'${specialty}\'`;

    }
    else{  
         
    objChecked.id_specialty = `\'${newUserData.id_specialty}\'`;
}
}
   

   if(newUserData.id_ending==''){
    objChecked.id_ending = null;
   }
   else{
 
    if( newUserData.id_ending[0].length >1 )
    {   
         let  ending="";

        for(let i =0; i< newUserData.id_ending.length;i++)
        {
            ending += newUserData.id_ending[i] + "~";
        }

        objChecked.id_ending = `\'${ending}\'`;

    }
    else{
       
    objChecked.id_ending = `\'${newUserData.id_ending}\'`;
         }
}
  


if(newUserData.id_startWork==''){
    objChecked.id_startWork = null;
   }
   else{
 
    if( newUserData.id_startWork[0].length >1 )
    {   
         let  startWork="";

        for(let i =0; i< newUserData.id_startWork.length;i++)
        {
            startWork += newUserData.id_startWork[i] + "~";
            console.log(startWork);
        }
        console.log(startWork);

        objChecked.id_startWork = `\'${startWork}\'`;

    }
    else{
      
    objChecked.id_startWork = `\'${newUserData.id_startWork}\'`;
     }
}
  
   

if(newUserData.id_endWork==''){
    objChecked.id_endWork = null;
   }
   else{
 
    if( newUserData.id_endWork[0].length >1 )
    {   
         let  endWork="";

        for(let i =0; i< newUserData.id_endWork.length;i++)
        {
            endWork +=  newUserData.id_endWork[i] + "~";
        }

        objChecked.id_endWork = `\'${endWork}\'`;
    }
    else{       
    objChecked.id_endWork = `\'${newUserData.id_endWork}\'`;
       }
}
  


if(newUserData.id_positionWork==''){
    objChecked.id_positionWork = null;
   }
   else{
 
    if( newUserData.id_positionWork[0].length >1 )
    {   
         let  positionWork="";

        for(let i =0; i< newUserData.id_positionWork.length;i++)
        {
            positionWork += newUserData.id_positionWork[i] + "~";
        }

        objChecked.id_positionWork = `\'${positionWork}\'`;
    }
    else{
        
    objChecked.id_positionWork = `\'${newUserData.id_positionWork}\'`;
  }
}
  

if(newUserData.id_companyName==''){
    objChecked.id_companyName = null;
   }
   else{
 
    if(newUserData.id_companyName[0].length >1 )
    {   
         let  companyName="";

        for(let i =0; i<newUserData.id_companyName.length;i++)
        {
            companyName += newUserData.id_companyName[i] + "~";
        }

        objChecked.id_companyName = `\'${companyName}\'`;
    }
    else{
      
    objChecked.id_companyName = `\'${newUserData.id_companyName}\'`;
    }
}
  
 

if(newUserData.id_jobDuties==''){
    objChecked.id_jobDuties = null;
   }
   else{
 
    if( newUserData.id_jobDuties[0].length >1 )
    {   
         let  jobDuties="";

        for(let i =0; i<newUserData.id_jobDuties.length;i++)
        {
            jobDuties += newUserData.id_jobDuties[i] + "~";
        }

        objChecked.id_jobDuties = `\'${jobDuties}\'`;
    }
    else{
       
    objChecked.id_jobDuties = `\'${newUserData.id_jobDuties}\'`;
     }
}
   

if(newUserData.id_langName==''){
    objChecked.id_langName = null;
   }
   else{
 
    if(  newUserData.id_langName[0].length >1 )
    {   
         let  langName="";

        for(let i =0; i< newUserData.id_langName.length;i++)
        {
            langName +=  newUserData.id_langName[i] + "~";
        }

        objChecked.id_langName = `\'${langName}\'`;
    }
    else{
        
    objChecked.id_langName = `\'${newUserData.id_langName}\'`;
     }
} 

if(newUserData.id_level==''){
    objChecked.id_level = null;
   }
   else{
 
    if( newUserData.id_level.length >1 &&  newUserData.id_level[0].length >1 )
    {   
         let  level="";         

        for(let i =0; i< newUserData.id_level.length;i++)
        {
            let changeValueToID = "";

            switch(newUserData.id_level[i])
            {
              case "A1 - начальный":{
                changeValueToID = 1;
                  break;
              } 
              case "A2 - базовый":{
                changeValueToID = 2;
                  break;
              }
              case "B1 - средний":{
                changeValueToID = 3;
                  break;
              }
              case "B2 - выше среднего":{
                changeValueToID = 4;
                  break;
              }
              case "C1 - продвинутый":{
                changeValueToID = 5;
                  break;
              }
              case "C2 - профессиональный":{
                changeValueToID = 6;
                  break;
              }          
            } 

            level +=changeValueToID + "~";
        }

        objChecked.id_level = `\'${level}\'`;
    }
    else{ 
        
        switch(newUserData.id_level)
        {
          case "A1 - начальный":{
            objChecked.id_level = `\'1~\'`; 
              break;
          } 
          case "A2 - базовый":{
            objChecked.id_level = `\'2~\'`;
           
              break;
          }
          case "B1 - средний":{
            objChecked.id_level = `\'3~\'`;
              break;
          }
          case "B2 - выше среднего":{
            objChecked.id_level = `\'4~\'`;
              break;
          }
          case "C1 - продвинутый":{
            objChecked.id_level = `\'5~\'`;
              break;
          }
          case "C2 - профессиональный":{
            objChecked.id_level = `\'6~\'`;
              break;
          }          
        }  
    }
}
  

   if(newUserData.id_personRecommending ==''){
    objChecked.id_personRecommending = null;
   }
   else{
 
    if(   newUserData.id_personRecommending[0].length >1 )
    {   
         let  personRecommending="";

        for(let i =0; i< newUserData.id_personRecommending.length;i++)
        {
            personRecommending += newUserData.id_personRecommending[i] + "~";
        }

        objChecked.id_personRecommending = `\'${personRecommending}\'`;
    }
    else{
        
    objChecked.id_personRecommending = `\'${newUserData.id_personRecommending}\'`;
      }
}
   

   if(newUserData.id_company==''){
    objChecked.id_company = null;
   }
   else{
 
    if(  newUserData.id_company[0].length >1 )
    {   
         let  company="";

        for(let i =0; i< newUserData.id_company.length;i++)
        {
            company +=   newUserData.id_company[i] + "~";
        }

        objChecked.id_company = `\'${company}\'`;
    }
    else{
       
    objChecked.id_company = `\'${newUserData.id_company}\'`;
     }
}
   

   if(newUserData.id_emailCompany==''){
    objChecked.id_emailCompany = null;
   }
   else{
 
    if(newUserData.id_emailCompany[0].length >1 )
    {   
         let  emailCompany="";

        for(let i =0; i<newUserData.id_emailCompany.length;i++)
        {
            emailCompany +=  newUserData.id_emailCompany[i] + "~";
        }

        objChecked.id_emailCompany= `\'${emailCompany}\'`;
    }
    else{
      
    objChecked.id_emailCompany = `\'${newUserData.id_emailCompany}\'`;
}
}  

   if(newUserData.id_phoneCompany==''){
    objChecked.id_phoneCompany = null;
   }
   else{
 
    if(   newUserData.id_phoneCompany[0].length >1 )
    {   
         let  phoneCompany="";

        for(let i =0; i< newUserData.id_phoneCompany.length;i++)
        {
            phoneCompany +=  newUserData.id_phoneCompany[i] + "~";
        }

        objChecked.id_phoneCompany= `\'${phoneCompany}\'`;
    }
    else{
      
    objChecked.id_phoneCompany = `\'${newUserData.id_phoneCompany}\'`;
        }
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

const startupCallback = function () {
    console.log(`Server started at: http://localhost:${service.address().port}`)
};

const service = server.listen(SERVER_PORT, startupCallback);