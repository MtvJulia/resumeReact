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

const userDataChecking=(userData)=>{
  
  userData = userData[0];
  console.log("************************");
  console.log(userData);

 
  userData.positionWork = changingMultiValuesToArray(userData.positionWork);
  userData.startWork =  changingMultiValuesToArray(userData.startWork);
  userData.endWork = changingMultiValuesToArray(userData.endWork);
  userData.companyName = changingMultiValuesToArray(userData.companyName);
  userData.jobDuties = changingMultiValuesToArray(userData.jobDuties);
  userData.driverLicense = changingMultiValuesToArray(userData.driverLicense);
  userData.courseName = changingMultiValuesToArray(userData.courseName);
  userData.organization = changingMultiValuesToArray(userData.organization);
  userData.endingCourse = changingMultiValuesToArray(userData.endingCourse);
  userData.institutName = changingMultiValuesToArray(userData.institutName);
  userData.levelEducation = changingMultiValuesToArray(userData.levelEducation);
  userData.faculty = changingMultiValuesToArray(userData.faculty);
  userData.specialty = changingMultiValuesToArray(userData.specialty);
  userData.ending =  changingMultiValuesToArray(userData.ending);
  userData.langName = changingMultiValuesToArray(userData.langName);
  userData.level = changingMultiValuesToArray(userData.level);
  userData.personRecommending = changingMultiValuesToArray(userData.personRecommending);
  userData.company = changingMultiValuesToArray(userData.company);
  userData.emailCompany = changingMultiValuesToArray(userData.emailCompany);
  userData.phoneCompany = changingMultiValuesToArray(userData.phoneCompany);


console.log("------------NEW-------------");
console.log(userData);
    
}

function changingMultiValuesToArray(userDataValue){
  if(userDataValue!=null){
    userDataValue = userDataValue.split("~");
    if(userDataValue.length > 1){
      userDataValue.pop();
    }
  }
  return userDataValue;
}

function  getUserData(res,userData ,dbConnection,foundUserID, callback = (res,userData)=>{ 
    console.log("I'm here!!!");     
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

module.exports.getFkValue = getFkValue;
module.exports.getEndData = getEndData;
module.exports.getUserData = getUserData;