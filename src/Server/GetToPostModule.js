const { response } = require("express");
var userDataFromPromis = {
connection:null,
filestream:null,
userdata:{},
result:null};

// const getDataFile=(userData,fs)=>{  
//   if (userData.image != null) {
//     var imageData = userData.image.toString();
// console.log(userData.image.toString());
//     fs.readFile('uploads/' + imageData, function (error, data) {
//       if (error) {
//         response.statusCode = 404;
//         response.end("Resourse not found!");
//       }
//       else {
//         userData.file = data;
//         userData.file.originalname = imageData;
//         console.log("OOOOKKKKKK!!!!");
//         console.log(userData.file);
//         console.log("------------NEW--USER DATA-----------");
//         console.log(userData);           
//       }
//     });    
//   } 
// }

function getDriverLicenseDataFromDB(userDataFromPromis){
  
  return new Promise(function(resolve,reject){
  
  let queryCourses = `SELECT * FROM v_user_data_driver_license WHERE userID = ${userDataFromPromis.userdata.userID} `;

  userDataFromPromis.connection.query(queryCourses, (err, result) => {
    if (err) reject(console.log(err.message));
    if (result) {
      console.log(result);
      if (Array.isArray(result)) {
        result.forEach(item => {
        
          switch (item.driverLicenseName) {
            case 'A1':
              {
                userDataFromPromis.userdata.drivLicense.driverLicenseA1 =1;
                break;
              }
            case 'A':
              {
                userDataFromPromis.userdata.drivLicense.driverLicenseA =1;
                break;
              }
            case 'B1':
              {
                userDataFromPromis.userdata.drivLicense.driverLicenseB1 =1;
                break;
              }
            case 'B':
              {
                userDataFromPromis.userdata.drivLicense.driverLicenseB =1;
                break;
              }
            case 'C1':
              {
                userDataFromPromis.userdata.drivLicense.driverLicenseC1 =1;
                break;
              }
            case 'C':
              {
                userDataFromPromis.userdata.drivLicense.driverLicenseC =1;
                break;
              }
            case 'D1':
              {
                userDataFromPromis.userdata.drivLicense.driverLicenseD1 =1;
                break;
              }
            case 'D':
              {
                userDataFromPromis.userdata.drivLicense.driverLicenseD =1;
                break;
              }
            case 'T':
              {
                userDataFromPromis.userdata.drivLicense.driverLicenseT =1;
                break;
              }
            default:
              {
                break;
              }
          }

        });
      }
      console.log("userDataFromPromis.userdata.drivLicense ================== "+ userDataFromPromis.userdata.drivLicense);
      resolve(userDataFromPromis);
    }
  });
})}
const getExpirienceDataFromDB = (userDataFromPromis) => {
  return new Promise(function(resolve,reject){
  let queryCourses = `SELECT * FROM v_user_data_expirience WHERE userID = ${userDataFromPromis.userdata.userID} `;
  userDataFromPromis.connection.query(queryCourses, (err, result) => {
    if (err)reject(console.log(err.message));
    if (result) {
      console.log(result);
      if (Array.isArray(result)) {
        result.forEach(item => {
          userDataFromPromis.userdata.companyName.push(item.companyName);
          userDataFromPromis.userdata.positionWork.push(item.positionWork);
          userDataFromPromis.userdata.jobDuties.push(item.jobDuties);
          userDataFromPromis.userdata.startWork.push(item.startWork);
          userDataFromPromis.userdata.endWork.push(item.endWork);
          userDataFromPromis.userdata.stillWorking.push(item.stillWorking);
        });
      }
      resolve(userDataFromPromis);
    }
  });
})
}
const getEducationDataFromDB = (userDataFromPromis) => {
  return new Promise(function(resolve,reject){
  let queryCourses = `SELECT * FROM user_education WHERE userID = ${userDataFromPromis.userdata.userID} `;
  userDataFromPromis.connection.query(queryCourses, (err, result) => {
    if (err)reject(console.log(err.message));
    if (result) {
      console.log(result);
      if (Array.isArray(result)) {
        result.forEach(item => {
          userDataFromPromis.userdata.institutName.push(item.institutName);
          userDataFromPromis.userdata.faculty.push(item.faculty);
          userDataFromPromis.userdata.specialty.push(item.specialty);
          userDataFromPromis.userdata.ending.push(item.ending);
          userDataFromPromis.userdata.levelEducation.push(item.fk_levelEducation);
        });
      }
      resolve(userDataFromPromis);
    }
  });
})
}

const getRecomendingDataFromDB = (userDataFromPromis) => {
  return new Promise(function(resolve,reject){
  let queryCourses = `SELECT * FROM v_user_data_recomending WHERE userID = ${userDataFromPromis.userdata.userID} `;
  userDataFromPromis.connection.query(queryCourses, (err, result) => {
    if (err)reject(console.log(err.message));
    if (result) {
      console.log(result);
      if (Array.isArray(result)) {
        result.forEach(item => {
          userDataFromPromis.userdata.company.push(item.company);
          userDataFromPromis.userdata.personRecommending.push(item.personRecommending);
          userDataFromPromis.userdata.emailCompany.push(item.emailCompany);
          userDataFromPromis.userdata.phoneCompany.push(item.phoneCompany);
        });
      }
      resolve(userDataFromPromis);
    }
  });
})
}

  
const getCourseDataFromDB = (userDataFromPromis) => {
  return new Promise(function(resolve,reject){
  let queryCourses = `SELECT * FROM v_user_data_course WHERE userID = ${userDataFromPromis.userdata.userID} `;
  userDataFromPromis.connection.query(queryCourses, (err, result) => {
    if (err)reject(console.log(err.message));
    if (result) {
      console.log(result);
      if (Array.isArray(result)) {
        result.forEach(item => {
          userDataFromPromis.userdata.courseName.push(item.courseName);
          userDataFromPromis.userdata.organization.push(item.organization);
          userDataFromPromis.userdata.endingCourse.push(item.endingCourse);
        });
      }
      resolve(userDataFromPromis);
    }
  });
})
}

const getLanguageDataFromDB = (userDataFromPromis) => {
  return new Promise(function(resolve,reject){
  let queryCourses = `SELECT * FROM user_language WHERE userID = ${userDataFromPromis.userdata.userID} `;
  userDataFromPromis.connection.query(queryCourses, (err, result) => {
    if (err) reject(console.log(err.message));
    if (result) {
      console.log(result);
      if (Array.isArray(result)) {
        result.forEach(item => {
          userDataFromPromis.userdata.langName.push(item.fk_langName);
          userDataFromPromis.userdata.level.push(item.fk_languag_proficiency_levelID);

        });
      }
      resolve(userDataFromPromis);
    }
  });
})
}


const sendData = (userDataFromPromis,callback=(userDataFromPromis)=>{
  console.log("I'm here!!!");  
  console.log(userDataFromPromis);
  var userData = userDataFromPromis.userdata;
  console.log("USER DATA SEND DATA :" + userData);
  userDataFromPromis.result.json(userData);
  userDataFromPromis.result.end();
  console.log("I'm gooooo!!!");
}) => {
  if (userDataFromPromis.userdata.image != null) {
    var imageData = userDataFromPromis.userdata.image.toString();
console.log(userDataFromPromis.userdata.image.toString());
userDataFromPromis.filestream.readFile('uploads/' + imageData, function (error, data) {
      if (error) {
        response.statusCode = 404;
        response.end("Resourse not found!");
      }
      else {
        userDataFromPromis.userdata.file = data;
        userDataFromPromis.userdata.file.originalname = imageData;
        console.log("OOOOKKKKKK!!!!");
        console.log(userDataFromPromis.userdata.file);
        console.log("------------NEW--USER DATA-----------");
        console.log(userDataFromPromis.userdata); 
        callback(userDataFromPromis);          
      }
    });    
  } 



};


const getUserDataFromDB = (userData, dbConnection, foundUserID, fs, res, callback = (userData, dbConnection, fs, res, foundUserID) => { 

  getAllData(userData, dbConnection, fs, res, foundUserID);
  
}) => {
  let queryToView = `SELECT * FROM v_user_data WHERE userID = ${foundUserID} `;
  dbConnection.query(queryToView, (err, result) => {
    if (err) console.log(err.message);
    if (result) {
      result = result[0];
      userData.userID = result.userID;
      userData.userLogin = result.userLogin;
      userData.firstName = result.firstName;
      userData.lastName = result.lastName;
      userData.middleName = result.middleName;
      userData.birthOfDate = result.birthOfDate;
      userData.phone = result.phone;
      userData.email = result.email;
      userData.сityOfResidence = result.сityOfResidence;
      userData.nationality = result.nationality;
      userData.position = result.position;
      userData.privateСar = result.privateСar;
      userData.army = result.army;
      userData.hobby = result.hobby;
      userData.personalQualities = result.personalQualities;
      userData.professionalSkills = result.professionalSkills;
      userData.relocate = result.relocate;
      userData.desiredSalary = result.desiredSalary;
      userData.children = result.children;
      userData.businessTrip = result.businessTrip;
      userData.image = result.image;
      userData.employment = result.employmentName;
      userData.schedule = result.scheduleName;
      userData.maritalStatus = result.marital_statusName;
      userData.education = result.level_of_educationName;
      userData.currency = result.currencyName;

      console.log("In getUserData ::: " + userData.image);
      callback(userData, dbConnection, fs, res,foundUserID);
    }
  });
}
function getMainUserDataFromDB(dbConnection,userData,foundUserID,fs,res){
  return new Promise(function(resolve,reject){

    userDataFromPromis.connection = dbConnection;
    userDataFromPromis.filestream=fs;
    userDataFromPromis.userdata=userData;
    userDataFromPromis.result=res;   
let queryToView = `SELECT * FROM users_info WHERE userID = ${foundUserID} `;
console.log("userDataFromPromis" + userDataFromPromis);
userDataFromPromis.connection.query(queryToView, (err, result) => {
      if (err) reject(console.log(err.message));
      if (result) {
        result = result[0];
        userDataFromPromis.userdata.userID = result.userID;
        userDataFromPromis.userdata.userLogin = result.userLogin;
        userDataFromPromis.userdata.firstName = result.firstName;
        userDataFromPromis.userdata.lastName = result.lastName;
        userDataFromPromis.userdata.middleName = result.middleName;
        userDataFromPromis.userdata.birthOfDate = result.birthOfDate;
        userDataFromPromis.userdata.phone = result.phone;
        userDataFromPromis.userdata.email = result.email;
        userDataFromPromis.userdata.сityOfResidence = result.сityOfResidence;
        userDataFromPromis.userdata.nationality = result.nationality;
        userDataFromPromis.userdata.position = result.position;
        userDataFromPromis.userdata.privateСar = result.privateСar;
        userDataFromPromis.userdata.army = result.army;
        userDataFromPromis.userdata.hobby = result.hobby;
        userDataFromPromis.userdata.personalQualities = result.personalQualities;
        userDataFromPromis.userdata.professionalSkills = result.professionalSkills;
        userDataFromPromis.userdata.relocate = result.relocate;
        userDataFromPromis.userdata.desiredSalary = result.desiredSalary;
        userDataFromPromis.userdata.children = result.children;
        userDataFromPromis.userdata.businessTrip = result.businessTrip;
        userDataFromPromis.userdata.image = result.image;
        userDataFromPromis.userdata.employment = result.fk_employmentID;
        userDataFromPromis.userdata.schedule = result.fk_scheduleID;
        userDataFromPromis.userdata.maritalStatus = result.fk_marital_statusID;
        userDataFromPromis.userdata.education = result.fk_level_of_educationID;
        userDataFromPromis.userdata.currency = result.fk_currencyID;  
        console.log("In getUserData ::: " + userDataFromPromis.userdata.image);      
  }
  console.log("AFTER  ::: " + userDataFromPromis.userdata.userID);
  resolve(userDataFromPromis);
});
  })
 
}

function getUserData(res, userData, dbConnection, foundUserID, fs)    {
  console.log(foundUserID);

 // console.log(userData);

  if (foundUserID > 0) {
    // getUserDataFromDB(userData, dbConnection, foundUserID, fs, res); 
    
    getMainUserDataFromDB(dbConnection,userData,foundUserID,fs,res)    
       .then(getDriverLicenseDataFromDB)
       .then(getExpirienceDataFromDB)
       .then(getEducationDataFromDB)
       .then(getRecomendingDataFromDB)
       .then(getCourseDataFromDB)
       .then(getLanguageDataFromDB)
       .then(sendData)
       .catch(err=>console.log(err))




    return true;
  }
  return false;
}

module.exports.getUserData = getUserData;