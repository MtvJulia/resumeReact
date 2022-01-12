const CheckedToNull = (newUserData) => {

    let objChecked = {};
    
    if(newUserData.id_middleName==''||newUserData.id_middleName==null){
        objChecked.id_middleName = null;
       }
    
    else{
        objChecked.id_middleName = `\'${newUserData.id_middleName}\'`;
    }

    if(newUserData.id_nationality==''||newUserData.id_nationality==null){
        objChecked.id_nationality = null;
       }
    
    else{
        objChecked.id_nationality = `\'${newUserData.id_nationality}\'`;
    }
    
    if(newUserData.id_hobby==''||newUserData.id_hobby==null){
        objChecked.id_hobby = null;
       }
    
    else{
        objChecked.id_hobby = `\'${newUserData.id_hobby}\'`;
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
    
    if(newUserData.id_desiredSalary==''||newUserData.id_desiredSalary==null){
        objChecked.id_desiredSalary = null;
       }
    
    else{
        objChecked.id_desiredSalary = `\'${newUserData.id_desiredSalary}\'`;
    }    
      
        return objChecked;
    
    }


    // const getInfoTodrivLicense = (newUserData) => {

    //     let drivarLiscense = "";
    //     if (newUserData.id_driverLicenseA1 == 'on') {
    //         drivarLiscense += "A1~";
    //     }
    //     if (newUserData.id_driverLicenseA == 'on') {
    //         drivarLiscense += "A~";
    //     }
    //     if (newUserData.id_driverLicenseB1 == 'on') {
    //         drivarLiscense += "B1~";
    //     }
    //     if (newUserData.id_driverLicenseB == 'on') {
    //         drivarLiscense += "B~";
    //     }
    //     if (newUserData.id_driverLicenseC1 == 'on') {
    //         drivarLiscense += "C1~";
    //     }
    //     if (newUserData.id_driverLicenseC == 'on') {
    //         drivarLiscense += "C~";
    //     }
    //     if (newUserData.id_driverLicenseD1 == 'on') {
    //         drivarLiscense += "D1~";
    //     }
    //     if (newUserData.id_driverLicenseD == 'on') {
    //         drivarLiscense += "D~";
    //     }
    //     if (newUserData.id_driverLicenseT == 'on') {
    //         drivarLiscense += "T~";
    //     }
    //     return drivarLiscense;
    // }


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
        // let stillWorking = (newUserData) => {
        //     if (newUserData.id_stillWorking == 'on') {
        //         return 1;
        //     }
        //     else return 0;
        // }
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
       // let driveLicense = getInfoTodrivLicense(newUserData);
    
        let infoUserChecked = {
            relocation: relocate(newUserData),
            businessTrip: businessTrip(newUserData),
            children: haveChildren(newUserData),
           // stillWorking: stillWorking(newUserData),
          //  drivLicense: driveLicense,
            privateCar: availabilityCar(newUserData),
            army: army(newUserData)
        };
    
        return infoUserChecked;
    }


module.exports.CheckedToNull = CheckedToNull;
module.exports.getCheckedInfo = getCheckedInfo;