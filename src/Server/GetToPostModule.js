const { response } = require("express");

function getDriverLicenseDataFromDB(userDataFromPromis){ 
  
  return new Promise(function(resolve,reject){  

  let queryCourses = `SELECT * FROM v_user_data_driver_license WHERE userID = ${userDataFromPromis.userdata.userID} `;

  userDataFromPromis.connection.query(queryCourses, (err, result) => {
    if (err) reject(console.log(err.message));
    if (result) {     
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
      if (Array.isArray(result)) {
        result.forEach(item => {
          userDataFromPromis.userdata.company.push(item.company);
          userDataFromPromis.userdata.personRecommending.push(item.personRecommending);
          if(item.emailCompany==null||item.emailCompany =='null' )userDataFromPromis.userdata.emailCompany.push("");
          else{userDataFromPromis.userdata.emailCompany.push(item.emailCompany);}
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
  let sendUserData = userDataFromPromis.userdata; 
  userDataFromPromis.result.json(sendUserData);
  userDataFromPromis.result.end();
 
}) => {  
  
  if (userDataFromPromis.userdata.image != null && userDataFromPromis.userdata.image.length>0)
   {       
          let imageData = userDataFromPromis.userdata.image.toString();
    userDataFromPromis.filestream.readFile('uploads/' + imageData, function (error, data) {
      if (error) {
        console.log("ERROR !!!");
       console.log(error);
      }
      else {
      
        userDataFromPromis.userdata.file = data;
        userDataFromPromis.userdata.file.originalname = imageData;
          
        callback(userDataFromPromis);          
      }
    });
                
  } 
  else{
        userDataFromPromis.userdata.file = null;                
        callback(userDataFromPromis);          
  }
};

function getMainUserDataFromDB(dbConnection,userData,foundUserID,fs,res){ 
   
  return new Promise(function(resolve,reject){    
  const userDataFromPromis={
    connection: dbConnection,
    filestream:fs,
    userdata:userData,
    result:res   
  };
 
let queryToView = `SELECT * FROM user_info WHERE userID = ${foundUserID} `;
       userDataFromPromis.userdata.userID = foundUserID;
userDataFromPromis.connection.query(queryToView, (err, result) => {
      if (err) reject(console.log(err.message));
     
      if (result[0]!=undefined) {
        result = result[0];         
        userDataFromPromis.userdata.userID = foundUserID; 
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
      }   
 
 
    
  resolve(userDataFromPromis);
});
  })
 
}

function getUserData(res, userData, dbConnection, foundUserID, fs)    {
 
  if (foundUserID > 0) {    
    
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

const getFileValue=(fileToDB,req)=>{
  console.log(fileToDB,req);
if(req.file!= undefined&&fileToDB!= null)
{
  return `, image=\'${fileToDB}\'`;
}
else if(req.file!= undefined&&fileToDB == null)
{
  return `, image=${fileToDB}`;
}
}

module.exports.getFileValue = getFileValue;
module.exports.getUserData = getUserData;