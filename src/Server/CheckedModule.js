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
    
            objChecked.id_courseName = `\'${newUserData.id_courseName + "~"}\'`;
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
            
            objChecked.id_organization = `\'${newUserData.id_organization + "~"}\'`;
        }
    }
    
    if(newUserData.id_endingCourse==''){
        objChecked.id_endingCourse = null;
       }
       else{
        //если пришел массив и размер 0 элемента >1 , т.е.это не массив char
        if(  newUserData.id_endingCourse[0].length > 1 )
        {   
             let  endingCourse = "";
    
            for(let i =0; i< newUserData.id_endingCourse.length;i++)
            {
                endingCourse +=  newUserData.id_endingCourse[i] + "~";
            }
    
            objChecked.id_endingCourse = `\'${endingCourse}\'`;
    
        }
        else{
       
            objChecked.id_endingCourse = `\'${newUserData.id_endingCourse + "~"}\'`;
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
          
            objChecked.id_institutName = `\'${newUserData.id_institutName + "~"}\'`;
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
          
            objChecked.id_levelEducation = `\'${newUserData.id_levelEducation + "~"}\'`;
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
          
            objChecked.id_faculty = `\'${newUserData.id_faculty + "~"}\'`;
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
             
        objChecked.id_specialty = `\'${newUserData.id_specialty + "~"}\'`;
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
           
        objChecked.id_ending = `\'${newUserData.id_ending + "~"}\'`;
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
          
        objChecked.id_startWork = `\'${newUserData.id_startWork + "~"}\'`;
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
        objChecked.id_endWork = `\'${newUserData.id_endWork + "~"}\'`;
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
            
        objChecked.id_positionWork = `\'${newUserData.id_positionWork + "~"}\'`;
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
          
        objChecked.id_companyName = `\'${newUserData.id_companyName + "~"}\'`;
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
           
        objChecked.id_jobDuties = `\'${newUserData.id_jobDuties + "~"}\'`;
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
            
        objChecked.id_langName = `\'${newUserData.id_langName + "~"}\'`;
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
            
        objChecked.id_personRecommending = `\'${newUserData.id_personRecommending + "~"}\'`;
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
           
        objChecked.id_company = `\'${newUserData.id_company + "~"}\'`;
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
          
        objChecked.id_emailCompany = `\'${newUserData.id_emailCompany + "~"}\'`;
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
          
        objChecked.id_phoneCompany = `\'${newUserData.id_phoneCompany + "~"}\'`;
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


module.exports.CheckedToNull = CheckedToNull;
module.exports.getCheckedInfo = getCheckedInfo;