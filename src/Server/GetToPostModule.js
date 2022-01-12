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
    else if(newUserData.id_endWork.length > 1 && (newUserData.id_endWork[0].length > 1||newUserData.id_endWork[1].length > 1))////////////////////////////////////////!!!!!!!!!!!!!!
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

const userDataChecking=(userData,fs,res,callback = (res,userData)=>{ 
  console.log("I'm here!!!");  
  console.log(userData);      
  res.json(userData);   
  res.end();  
  console.log("I'm gooooo!!!");   
})=>{
  
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

if(userData.image != null){
  var imageData = userData.image.toString();
  console.log("////////////////////////////////////////" + imageData) ;  
  fs.readFile('uploads/'+imageData, function(error, data){    
    if(error){              
        response.statusCode = 404;
        response.end("Resourse not found!");
    }   
    else{
        userData.file = data;
        userData.file.originalname = imageData;
        console.log("OOOOKKKKKK!!!!");
        console.log( userData.file);
        console.log("------------NEW--USER DATA-----------");
        console.log(userData);

        callback(res,userData);
    }
});
} 
else{

  callback(res,userData);
}


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

// function  getUserData(res,userData ,dbConnection,foundUserID,fs, callback = (res,userData)=>{ 
//     console.log("I'm here!!!");          
//     res.json(userData);   
//     res.end();  
//     console.log("I'm gooooo!!!");   
// })
//     {
//     let queryToView = `SELECT * FROM v_getUserData WHERE userID = ${foundUserID} `; 

//     dbConnection.query(queryToView, (err, result) => {
//         if (err) console.log(err.message);  
//         if(result) 
//         {
//             userData = result;           
//             userDataChecking(userData,fs);                       
//         }                         

//         callback(res,userData);
//     });
// };  

//******************************** 
function  getUserData(res,userData ,dbConnection,foundUserID,fs)
  {
  let queryToView = `SELECT * FROM v_getUserData WHERE userID = ${foundUserID} `; 
  if(foundUserID>0)
  {
    dbConnection.query(queryToView, (err, result) => {
      if (err) console.log(err.message);  
      if(result) 
      {
          userData = result;  
          console.log("In getUserData ::: "+userData);         
          userDataChecking(userData,fs,res);                       
      }                         
  });
  return true;
  }
return false;
  };  


module.exports.getEndData = getEndData;
module.exports.getUserData = getUserData;