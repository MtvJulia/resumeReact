const CheckedToNull = (newUserData) => {

    let objChecked = {};
    
    if(newUserData.id_middleName==''||newUserData.id_middleName==null){
        objChecked.id_middleName = null;
       }
    
    else{
        objChecked.id_middleName = `\'${newUserData.id_middleName}\'`;
    }
    
    if(newUserData.id_hobby==''||newUserData.id_hobby==null){
        objChecked.id_hobby = null;
       }
    
    else{
        objChecked.id_hobby = `\'${newUserData.id_hobby}\'`;
    }
    
    if(newUserData.id_nationality==''||newUserData.id_nationality==null){
        objChecked.id_nationality = null;
       }
    
    else{
        objChecked.id_nationality = `\'${newUserData.id_nationality}\'`;
    }
    
    if(newUserData.id_desiredSalary==''||newUserData.id_desiredSalary==null){
        objChecked.id_desiredSalary = null;
       }
    
    else{
        objChecked.id_desiredSalary = `\'${newUserData.id_desiredSalary}\'`;
    }
    
    
    
    if(newUserData.fupload==''||newUserData.fupload==null){
        objChecked.fupload = null;
       }
    
    else{
        objChecked.fupload = `\'${newUserData.fupload}\'`;
        //////////////////////////////////////////////////////////////////////////////////////????????????????????????????
        console.log(objChecked.fupload);
    }
    
    
    if(newUserData.id_courseName==''||newUserData.id_courseName==null){
        objChecked.id_courseName = null;
       }
    
    else{       
        //если пришел массив и размер 0 элемента >1 , т.е.это не массив char
        // let count=0;
        // newUserData.id_courseName.forEach(element => {
        //    if(element.length>1) count++;
        //    });     

        //if( count > 0 )
        if(Array.isArray(newUserData.id_courseName) )
        {  
           
             let  courses="";
    
            for(let i =0; i< newUserData.id_courseName.length;i++)
            {
                if(newUserData.id_courseName[i]!="")
                {
                    courses += newUserData.id_courseName[i] + "~";
                } 
                else{
                    courses += "NULL~";
                }                            
            }
    
            objChecked.id_courseName = `\'${courses}\'`;
    
        }
        else{
    
            objChecked.id_courseName = `\'${newUserData.id_courseName + "~"}\'`;
        }   
    }
    
    if(newUserData.id_organization==''||newUserData.id_organization==null){
        objChecked.id_organization = null;
       }
    
       else{
        //если пришел массив и размер 0 элемента >1 , т.е.это не массив char
        // let count=0;
        // newUserData.id_organization.forEach(element => {
        //    if(element.length>1) count++;
        //    });     

        // if( count > 0 )
        if(Array.isArray(newUserData.id_organization)  )
        {   
             let  organization="";
    
            for(let i =0; i<newUserData.id_organization.length;i++)
            {
                if(newUserData.id_organization[i]!="")
                {
                    organization += newUserData.id_organization[i] + "~";
                }     
                else{
                    organization += "NULL~";
                }                       
            }
    
            objChecked.id_organization = `\'${organization}\'`;
    
        }
        else{
            
            objChecked.id_organization = `\'${newUserData.id_organization + "~"}\'`;
        }
    }
    
    if(newUserData.id_endingCourse==''||newUserData.id_endingCourse==null){
        objChecked.id_endingCourse = null;
       }
       else{
        //если пришел массив и размер 0 элемента >1 , т.е.это не массив char
        // let count=0;
        // newUserData.id_endingCourse.forEach(element => {
        //    if(element.length>1) count++;
        //    });     

        // if( count > 0 )
        if(Array.isArray(newUserData.id_endingCourse)  )
        {   
             let  endingCourse = "";
    
            for(let i =0; i< newUserData.id_endingCourse.length;i++)
            {
                if( newUserData.id_endingCourse[i]!="")
                {
                    endingCourse +=  newUserData.id_endingCourse[i] + "~";
                } 
                else{
                    endingCourse += "NULL~";
                }                            
            }
    
            objChecked.id_endingCourse = `\'${endingCourse}\'`;
    
        }
        else{
       
            objChecked.id_endingCourse = `\'${newUserData.id_endingCourse + "~"}\'`;
        }
    }
    
    
    if(newUserData.id_institutName==''||newUserData.id_institutName==null){
    
        objChecked.id_institutName = null;
       }
    
       else{
        // let count=0;
        // newUserData.id_institutName.forEach(element => {
        //    if(element.length>1) count++;
        //    });     

        // if( count > 0 )
        if(Array.isArray(newUserData.id_institutName)  )
        {   
             let  institutName="";
    
            for(let i =0; i< newUserData.id_institutName.length;i++)
            {
                if( newUserData.id_institutName[i]!="")
                {
                    institutName +=  newUserData.id_institutName[i] + "~";
                } 
                else{
                    institutName += "NULL~";
                }              
            }
    
            objChecked.id_institutName = `\'${institutName}\'`;
    
        }
        else{
          
            objChecked.id_institutName = `\'${newUserData.id_institutName + "~"}\'`;
        }
    }
    
    
    if(newUserData.id_levelEducation==''||newUserData.id_levelEducation==null){
        
        objChecked.id_levelEducation = null;
       }
       else{
     
        // let count=0;
        // newUserData.id_levelEducation.forEach(element => {
        //    if(element.length>1) count++;
        //    });     

        // if( count > 0 )
        if(Array.isArray(newUserData.id_levelEducation)  )
        {   
             let  levelEducation="";
    
            for(let i =0; i<newUserData.id_levelEducation.length;i++)
            {
                if(newUserData.id_levelEducation[i]!="")
                {
                    levelEducation +=  newUserData.id_levelEducation[i] + "~";
                }  
                else{
                    levelEducation += "NULL~";
                }               
            }
    
            objChecked.id_levelEducation = `\'${levelEducation}\'`;
    
        }
        else{
          
            objChecked.id_levelEducation = `\'${newUserData.id_levelEducation + "~"}\'`;
        }
    }
    
    
       if(newUserData.id_faculty==''||newUserData.id_faculty==null)
       {
        objChecked.id_faculty = null;
       }
       else{
     
        // let count=0;
        // newUserData.id_faculty.forEach(element => {
        //    if(element.length>1) count++;
        //    });     

        // if( count > 0 )
        if(Array.isArray(newUserData.id_faculty)  )
        {   
             let  faculty="";
    
            for(let i =0; i< newUserData.id_faculty.length;i++)
            {
                if( newUserData.id_faculty[i]!="")
                {
                    faculty +=   newUserData.id_faculty[i] + "~";
                } 
                else{
                    faculty += "NULL~";
                }                
            }
    
            objChecked.id_faculty = `\'${faculty}\'`;
    
        }
        else{
          
            objChecked.id_faculty = `\'${newUserData.id_faculty + "~"}\'`;
           }
    }
      
    
    
       if(newUserData.id_specialty==''||newUserData.id_specialty==null){
        objChecked.id_specialty = null;
       }
       else{
     
        // let count=0;
        // newUserData.id_specialty.forEach(element => {
        //    if(element.length>1) count++;
        //    });     

        // if( count > 0 )
        if(Array.isArray(newUserData.id_specialty)  )
        {   
             let  specialty="";
    
            for(let i =0; i< newUserData.id_specialty.length;i++)
            {

                if( newUserData.id_specialty[i]!=""){
                    specialty +=   newUserData.id_specialty[i] + "~";
                }
                else if(newUserData.id_specialty[0]=="")
                {
                    specialty += "NULL~";
                }
                else{
                    specialty += "NULL~";
                } 
               
            }
    
            objChecked.id_specialty = `\'${specialty}\'`;
    
        }
        else{  
             
        objChecked.id_specialty = `\'${newUserData.id_specialty + "~"}\'`;
    }
    }
       
    
       if(newUserData.id_ending==''||newUserData.id_ending==null){
        objChecked.id_ending = null;
       }
       else{
     
        // let count=0;
        // newUserData.id_ending.forEach(element => {
        //    if(element.length>1) count++;
        //    });     

        // if( count > 0 )
        if(Array.isArray(newUserData.id_ending)  )
        {   
             let  ending="";
    
            for(let i =0; i< newUserData.id_ending.length;i++)
            {
                if( newUserData.id_ending[i]!=""){
                    ending += newUserData.id_ending[i] + "~";
                }
                else{
                    ending += "NULL~";
                } 
               
            }
    
            objChecked.id_ending = `\'${ending}\'`;
    
        }
        else{
           
        objChecked.id_ending = `\'${newUserData.id_ending + "~"}\'`;
             }
    }
      
    
    
    if(newUserData.id_startWork==''||newUserData.id_startWork==null){
        objChecked.id_startWork = null;
       }
       else{
     
        // let count=0;
        // newUserData.id_startWork.forEach(element => {
        //    if(element.length>1) count++;
        //    });     

        // if( count > 0 )
        if(Array.isArray(newUserData.id_startWork)  )
        {   
             let  startWork="";
    
            for(let i =0; i< newUserData.id_startWork.length;i++)
            {
                if(  newUserData.id_startWork[i]!="")
                {
                    startWork += newUserData.id_startWork[i] + "~";
                }   
                else{
                    startWork += "NULL~";
                }                         
            }           
    
            objChecked.id_startWork = `\'${startWork}\'`;    
        }
        else{
          
        objChecked.id_startWork = `\'${newUserData.id_startWork + "~"}\'`;
         }
    }     
       
    
    if(newUserData.id_endWork==''||newUserData.id_endWork==null){
        objChecked.id_endWork = null;
       }
       else{
     
        // let count=0;
        // newUserData.id_endWork.forEach(element => {
        //    if(element.length>1) count++;
        //    });     

        // if( count > 0 )
        if(Array.isArray(newUserData.id_endWork)  )
        {   
             let  endWork="";
    
            for(let i = 0; i < newUserData.id_endWork.length; i++)
            {
                if(newUserData.id_endWork[i]!="")
                {
                    endWork +=  newUserData.id_endWork[i] + "~";
                } 
                else{
                    endWork += "NULL~";
                }               
            }    
            objChecked.id_endWork = `\'${endWork}\'`;
        }
        else{       
        objChecked.id_endWork = `\'${newUserData.id_endWork + "~"}\'`;
           }
    }
      
    
    
    if(newUserData.id_positionWork==''||newUserData.id_positionWork==null){
        objChecked.id_positionWork = null;
       }
       else{
     
        // let count=0;
        // newUserData.id_positionWork.forEach(element => {
        //    if(element.length>1) count++;
        //    });     

        // if( count > 0 )
        if(Array.isArray(newUserData.id_positionWork))
        {   
             let  positionWork="";
    
            for(let i =0; i< newUserData.id_positionWork.length;i++)
            {
                if(newUserData.id_positionWork[i]!=""){
                    positionWork += newUserData.id_positionWork[i] + "~";
                }
                else{
                    positionWork += "NULL~";
                }                
            }
    
            objChecked.id_positionWork = `\'${positionWork}\'`;
        }
        else{
            
        objChecked.id_positionWork = `\'${newUserData.id_positionWork + "~"}\'`;
      }
    }
      
    
    if(newUserData.id_companyName==''||newUserData.id_companyName==null){
        objChecked.id_companyName = null;
       }
       else{
        // let count=0;
        // newUserData.id_companyName.forEach(element => {
        //    if(element.length>1) count++;
        //    });     

        // if( count > 0 )
        if(Array.isArray(newUserData.id_companyName)  )
        {   
             let  companyName="";
    
            for(let i =0; i<newUserData.id_companyName.length;i++)
            {
                if(newUserData.id_companyName[i]!=""){
                    companyName += newUserData.id_companyName[i] + "~";
                } 
                else{
                    companyName += "NULL~";
                }                
            }
    
            objChecked.id_companyName = `\'${companyName}\'`;
        }
        else{
          
        objChecked.id_companyName = `\'${newUserData.id_companyName + "~"}\'`;
        }
    }
      
     
    
    if(newUserData.id_jobDuties==''||newUserData.id_jobDuties==null){
        objChecked.id_jobDuties = null;
       }
       else{
     
        // let count=0;
        // newUserData.id_jobDuties.forEach(element => {
        //    if(element.length>1) count++;
        //    });     

        // if( count > 0 )
        if(Array.isArray(newUserData.id_jobDuties)  )
        {   
             let  jobDuties="";
    
            for(let i =0; i<newUserData.id_jobDuties.length;i++)
            {
                if(newUserData.id_jobDuties[i]!="")
                {
                    jobDuties += newUserData.id_jobDuties[i] + "~";
                }   
                else{
                    jobDuties += "NULL~";
                }              
            }
    
            objChecked.id_jobDuties = `\'${jobDuties}\'`;
        }
        else{
           
        objChecked.id_jobDuties = `\'${newUserData.id_jobDuties + "~"}\'`;
         }
    }       
    
    if(newUserData.id_langName==''||newUserData.id_langName==null){
        objChecked.id_langName = null;
       }
       else{
        // let count=0;
        // newUserData.id_langName.forEach(element => {
        //    if(element.length>1) count++;
        //    });     

        // if( count > 0 )
        if(Array.isArray(newUserData.id_langName))
        {   
             let  langName="";
    
            for(let i =0; i< newUserData.id_langName.length;i++)
            {
                if(newUserData.id_langName[i]!="")
                {
                    langName +=  newUserData.id_langName[i] + "~";
                } 
                else{
                    langName += "NULL~";
                }                
            }
    
            objChecked.id_langName = `\'${langName}\'`;
        }
        else{
            
        objChecked.id_langName = `\'${newUserData.id_langName + "~"}\'`;
         }
    } 
    
    if(newUserData.id_level==''||newUserData.id_level==null){
        objChecked.id_level = null;
       }
       else{
        //    let count=0;
        //    newUserData.id_level.forEach(element => {
        //    if(element.length>1) count++;
        //    });     

        // if( count > 0 )
        if(Array.isArray(newUserData.id_level)  )
        {   
             let  level="";         
    
            for(let i =0; i< newUserData.id_level.length;i++)
            {
                if(newUserData.id_level[i]!="")
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
                else{
                    level += "NULL~";
                } 
                
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
       if(newUserData.id_personRecommending ==''||newUserData.id_personRecommending == null ){
        objChecked.id_personRecommending = null;
       }
       else{ 
    //        let count=0;
    //     newUserData.id_personRecommending.forEach(element => {
    //     if(element.length>1) count++;
    //     });     

    //  if( count > 0 )
    if(Array.isArray( newUserData.id_personRecommending) )
        {   
             let  personRecommending="";
    
            for(let i =0; i< newUserData.id_personRecommending.length;i++)
            {
                if(newUserData.id_personRecommending[i]!="")
                {
                    personRecommending += newUserData.id_personRecommending[i] + "~";
                }
                else{
                    personRecommending += "NULL~";
                }               
            }
    
            objChecked.id_personRecommending = `\'${personRecommending}\'`;
        }
        else{
            
        objChecked.id_personRecommending = `\'${newUserData.id_personRecommending + "~"}\'`;
          }
    }
       
    
       if(newUserData.id_company==''||newUserData.id_company== null){
        objChecked.id_company = null;
       }
       else{
     
        // let count=0;
        // newUserData.id_company.forEach(element => {
        //    if(element.length>1) count++;
        //    });     

        // if( count > 0 )
        if(Array.isArray(newUserData.id_company))
        {   
             let  company="";
    
            for(let i =0; i< newUserData.id_company.length;i++)
            {
                if(newUserData.id_company[i]!="")
                {
                    company += newUserData.id_company[i] + "~";
                }
                else{
                    company += "NULL~";
                }               
            }
    
            objChecked.id_company = `\'${company}\'`;
        }
        else{
           
        objChecked.id_company = `\'${newUserData.id_company + "~"}\'`;
         }
    }
       
    
       if(newUserData.id_emailCompany==''||newUserData.id_emailCompany==null){
        objChecked.id_emailCompany = null;
       }
       else{
     
        // let count=0;
        // newUserData.id_emailCompany.forEach(element => {
        //    if(element.length>1) count++;
        //    });     

        // if( count > 0 )
        if(Array.isArray( newUserData.id_emailCompany) )
        {   
             let  emailCompany="";
    
            for(let i =0; i<newUserData.id_emailCompany.length;i++)
            {
                if(newUserData.id_emailCompany[i]!="")
                {
                    emailCompany += newUserData.id_emailCompany[i] + "~";
                }
                else{
                    emailCompany += "NULL~";
                } 
            }
    
            objChecked.id_emailCompany= `\'${emailCompany}\'`;
        }
        else{
          
        objChecked.id_emailCompany = `\'${newUserData.id_emailCompany + "~"}\'`;
    }
    }  
    
       if(newUserData.id_phoneCompany==''||newUserData.id_phoneCompany==null){
        objChecked.id_phoneCompany = null;
       }
       else{
     
        // let count=0;
        // newUserData.id_phoneCompany.forEach(element => {
        //    if(element.length>1) count++;
        //    });     

        // if( count > 0 )
        if(Array.isArray(newUserData.id_phoneCompany)  )
        {   
             let  phoneCompany="";
    
            for(let i =0; i< newUserData.id_phoneCompany.length;i++)
            {
                if(newUserData.id_phoneCompany[i]!="")
                {
                    phoneCompany +=  newUserData.id_phoneCompany[i] + "~";
                }  
                else{
                    phoneCompany += "NULL~";
                }              
            }
    
            objChecked.id_phoneCompany= `\'${phoneCompany}\'`;
        }
        else{
          
        objChecked.id_phoneCompany = `\'${newUserData.id_phoneCompany + "~"}\'`;
            }
    }   
    
       if(newUserData.id_personalQualities==''||newUserData.id_personalQualities==null){
    
        objChecked.id_personalQualities = null;
       }
       else{
    
        objChecked.id_personalQualities = `\'${newUserData.id_personalQualities}\'`;
    }
    
       if(newUserData.id_professionalSkills==''||newUserData.id_professionalSkills==null){  
    
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