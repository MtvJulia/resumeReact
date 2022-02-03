const fillDriverLicense = (newUserData) => {
    let driverLicense = [];
    if (newUserData.id_driverLicenseA1 != undefined) { driverLicense.push(newUserData.id_driverLicenseA1); }
    if (newUserData.id_driverLicenseA != undefined) { driverLicense.push(newUserData.id_driverLicenseA); }
    if (newUserData.id_driverLicenseB1 != undefined) { driverLicense.push(newUserData.id_driverLicenseB1); }
    if (newUserData.id_driverLicenseB != undefined) { driverLicense.push(newUserData.id_driverLicenseB); }
    if (newUserData.id_driverLicenseC1 != undefined) { driverLicense.push(newUserData.id_driverLicenseC1); }
    if (newUserData.id_driverLicenseC != undefined) { driverLicense.push(newUserData.id_driverLicenseC); }
    if (newUserData.id_driverLicenseD1 != undefined) { driverLicense.push(newUserData.id_driverLicenseD1); }
    if (newUserData.id_driverLicenseD != undefined) { driverLicense.push(newUserData.id_driverLicenseD); }
    if (newUserData.id_driverLicenseT != undefined) { driverLicense.push(newUserData.id_driverLicenseT); }
    return driverLicense;
}
const addDriverLicenseToDB = (newUserData, dbConnection) => {

    let drLicense = fillDriverLicense(newUserData);
    // Data new user or update user from db.

    if (drLicense.length > 0) {

        drLicense.forEach(function (item) {
            let queryDriverLicense = ` INSERT INTO user_driver_license(userID,fk_driverLicense) VALUES(${newUserData.userID},${item}) 
                ON DUPLICATE KEY UPDATE fk_driverLicense=${item}`;
            dbConnection.query(queryDriverLicense, (err, result) => {
                if (err) console.log(err.message);
            });
        });
    }

}
const addLanguageToDB = (newUserData, dbConnection) => {
    if (newUserData.id_langName != undefined && newUserData.id_langName != '' && newUserData.id_langName != null) {

        // Data new user from db or update user.

        //// lang name a number  
        if (newUserData.id_langName.length > 0) {

            for (i = 0; i < newUserData.id_langName.length; i++) {
                if (newUserData.id_langName[i] != '' && newUserData.id_level[i] != "") {
                    let queryLang = ` INSERT INTO user_language(userID,fk_langName,fk_languag_proficiency_levelID)
                                  VALUES(${newUserData.userID},${newUserData.id_langName[i]},${newUserData.id_level[i]}) 
                                  ON DUPLICATE KEY UPDATE fk_langName=${newUserData.id_langName[i]}, fk_languag_proficiency_levelID=${newUserData.id_level[i]}`;
                    dbConnection.query(queryLang, (err, result) => {
                        if (err) console.log(err.message);

                    });
                }
            }
        }
    }
}

const addCoursesToDB = (newUserData, dbConnection) => {
    // Data new user or update user from db.

    if (newUserData.id_courseName != '' && newUserData.id_courseName != null) {
        let count = 0;
        if (Array.isArray(newUserData.id_courseName)) {
            newUserData.id_courseName.forEach(function (element) {
                if (element.length > 1) count++;
            });
        }
        if (count > 0) {
            for (i = 0; i < newUserData.id_courseName.length; i++) {
                if (newUserData.id_courseName[i] != '' && newUserData.id_organization[i] != "" && newUserData.id_endingCourse[i] != "") {

                    let queryCourses = ` INSERT INTO user_course(userID,courseName,organization,endingCourse)
                                         VALUES(${newUserData.userID},\'${newUserData.id_courseName[i]}\',\'${newUserData.id_organization[i]}\',\'${newUserData.id_endingCourse[i]}\')
                                         ON DUPLICATE KEY UPDATE courseName=\'${newUserData.id_courseName[i]}\', organization=\'${newUserData.id_organization[i]}\', 
                                         endingCourse=\'${newUserData.id_endingCourse[i]}\' `;

                    dbConnection.query(queryCourses, (err, result) => {
                        if (err) console.log(err.message);
                    });
                }
            }
        }
        else {
            let queryCourses = ` INSERT INTO user_course(userID,courseName,organization,endingCourse)
                VALUES(${newUserData.userID},\'${newUserData.id_courseName}\',\'${newUserData.id_organization}\',\'${newUserData.id_endingCourse}\')
                ON DUPLICATE KEY UPDATE courseName=\'${newUserData.id_courseName}\', organization=\'${newUserData.id_organization}\', endingCourse=\'${newUserData.id_endingCourse}\'`;
            dbConnection.query(queryCourses, (err, result) => {
                if (err) console.log(err.message);
            });
        }
    }

}

const addRecomendingToDB = (newUserData, dbConnection) => {
    if (newUserData.id_company != '' && newUserData.id_company != null) {
        let count = 0;
        let email = null;
        if (Array.isArray(newUserData.id_company)) {
            newUserData.id_company.forEach(function (element) {
                if (element.length > 1) count++;
            });
        }
        if (count > 0) {
            for (i = 0; i < newUserData.id_company.length; i++) {
                if (newUserData.id_company[i] != '' && newUserData.id_personRecommending[i] != "" && newUserData.id_phoneCompany[i] != "") {
                    if (newUserData.id_emailCompany[i] != undefined && newUserData.id_emailCompany[i] != "") {
                        email = newUserData.id_emailCompany[i];
                    }

                    let queryRecomending = ` INSERT INTO user_recomending(userID,company,personRecommending,emailCompany,phoneCompany)
                    VALUES(${newUserData.userID},\'${newUserData.id_company[i]}\',\'${newUserData.id_personRecommending[i]}\',\'${email}\',\'${newUserData.id_phoneCompany[i]}\')
                    ON DUPLICATE KEY UPDATE company=\'${newUserData.id_company[i]}\',personRecommending=\'${newUserData.id_personRecommending[i]}\', emailCompany=\'${email}\',phoneCompany=\'${newUserData.id_phoneCompany[i]}\'`;
                    dbConnection.query(queryRecomending, (err, result) => {
                        if (err) console.log(err.message);
                    });
                }
            }
        }
        else {
            let queryRecomending = ` INSERT INTO user_recomending(userID,company,personRecommending,emailCompany,phoneCompany)
                VALUES(${newUserData.userID},\'${newUserData.id_company}\',\'${newUserData.id_personRecommending}\',\'${email}\',\'${newUserData.id_phoneCompany}\')
                ON DUPLICATE KEY UPDATE company=\'${newUserData.id_company}\',personRecommending=\'${newUserData.id_personRecommending}\', emailCompany=\'${email}\',phoneCompany=\'${newUserData.id_phoneCompany}\'`;
            dbConnection.query(queryRecomending, (err, result) => {
                if (err) console.log(err.message);
            });
        }
    }
}
const addEducationToDB = (newUserData, dbConnection) => {
    if (newUserData.id_institutName != '' && newUserData.id_institutName != null) {
        let count = 0;
        if (Array.isArray(newUserData.id_institutName)) {
            newUserData.id_institutName.forEach(function (element) {
                if (element.length > 1) count++;
            });
        }
        if (count > 0) {
            for (i = 0; i < newUserData.id_institutName.length; i++) {
                if (newUserData.id_institutName[i] != '' && newUserData.id_faculty[i] != "" && newUserData.id_specialty[i] != "" && newUserData.id_ending[i] != "" && newUserData.id_levelEducation[i] != "") {
                    let queryEducation = ` INSERT INTO user_education(userID,institutName,faculty,specialty,ending,fk_levelEducation)
                        VALUES(${newUserData.userID},\'${newUserData.id_institutName[i]}\',\'${newUserData.id_faculty[i]}\',\'${newUserData.id_specialty[i]}\',\'${newUserData.id_ending[i]}\',${newUserData.id_levelEducation[i]})
                        ON DUPLICATE KEY UPDATE institutName=\'${newUserData.id_institutName[i]}\',faculty=\'${newUserData.id_faculty[i]}\', specialty=\'${newUserData.id_specialty[i]}\',
                        ending=\'${newUserData.id_ending[i]}\',fk_levelEducation=${newUserData.id_levelEducation[i]}`;

                    dbConnection.query(queryEducation, (err, result) => {
                        if (err) console.log(err.message);
                    });
                }
            }
        }
        else {
            let queryEducation = ` INSERT INTO user_education(userID,institutName,faculty,specialty,ending,fk_levelEducation)
                    VALUES(${newUserData.userID},\'${newUserData.id_institutName}\',\'${newUserData.id_faculty}\',\'${newUserData.id_specialty}\',\'${newUserData.id_ending}\',${newUserData.id_levelEducation})
                    ON DUPLICATE KEY UPDATE institutName=\'${newUserData.id_institutName}\',faculty=\'${newUserData.id_faculty}\', specialty=\'${newUserData.id_specialty}\',
                    ending=\'${newUserData.id_ending}\',fk_levelEducation=${newUserData.id_levelEducation}`;

            dbConnection.query(queryEducation, (err, result) => {
                if (err) console.log(err.message);
            });
        }
    }
}
const addExpirienceToDB = (newUserData, dbConnection) => {
    if (newUserData.id_companyName != '' && newUserData.id_companyName != null) {
        let count = 0;
        let queryExpiriennce = "";
        let stillWorking = 0;
        if (Array.isArray(newUserData.id_companyName)) {
            newUserData.id_companyName.forEach(function (element) {
                if (element.length > 1) count++;
            });
        }

        if (count > 0) {
            for (i = 0; i < newUserData.id_companyName.length; i++) {
                let endWork = null;
                if (newUserData.id_companyName[i] != '' && newUserData.id_positionWork[i] != "" && newUserData.id_jobDuties[i] != "" && newUserData.id_startWork[i] != "") {
                    if (newUserData.id_endWork[i] != "") {
                        stillWorking = 0;
                    }
                    if (newUserData.id_stillWorking != undefined && newUserData.id_stillWorking[i] == "on" && newUserData.id_endWork[i] == "") {
                        stillWorking = 1;
                    }
                    if (newUserData.id_endWork[i] != undefined && newUserData.id_endWork[i] != "") {
                        endWork = newUserData.id_endWork[i];


                        queryExpiriennce = ` INSERT INTO user_expirience(userID,companyName,positionWork,jobDuties,startWork,endWork,stillWorking)
                            VALUES(${newUserData.userID},\'${newUserData.id_companyName[i]}\',\'${newUserData.id_positionWork[i]}\',\'${newUserData.id_jobDuties[i]}\',\'${newUserData.id_startWork[i]}\',
                            \'${endWork}\',${stillWorking})
                            ON DUPLICATE KEY UPDATE companyName=\'${newUserData.id_companyName[i]}\',positionWork=\'${newUserData.id_positionWork[i]}\', jobDuties=\'${newUserData.id_jobDuties[i]}\',
                            startWork=\'${newUserData.id_startWork[i]}\',endWork=\'${endWork}\',stillWorking=${stillWorking}`;
                    }
                    else {
                        stillWorking = 1;

                        queryExpiriennce = ` INSERT INTO user_expirience(userID,companyName,positionWork,jobDuties,startWork,endWork,stillWorking)
                            VALUES(${newUserData.userID},\'${newUserData.id_companyName[i]}\',\'${newUserData.id_positionWork[i]}\',\'${newUserData.id_jobDuties[i]}\',\'${newUserData.id_startWork[i]}\',
                            ${endWork},${stillWorking})
                            ON DUPLICATE KEY UPDATE companyName=\'${newUserData.id_companyName[i]}\',positionWork=\'${newUserData.id_positionWork[i]}\', jobDuties=\'${newUserData.id_jobDuties[i]}\',
                            startWork=\'${newUserData.id_startWork[i]}\',endWork=${endWork},stillWorking=${stillWorking}`;
                    }
                    dbConnection.query(queryExpiriennce, (err, result) => {
                        if (err) console.log(err.message);
                    });
                }
            }
        }
        else {
            let endWork = null;
            if (newUserData.id_endWork != "") {
                stillWorking = 0;
                endWork = newUserData.id_endWork;
            }
            if (newUserData.id_stillWorking != undefined && newUserData.id_stillWorking == "on" && newUserData.id_endWork == "") {
                stillWorking = 1;
            }
            if (newUserData.id_endWork != undefined && newUserData.id_endWork != "") {

                queryExpiriennce = ` INSERT INTO user_expirience(userID,companyName,positionWork,jobDuties,startWork,endWork,stillWorking)
                    VALUES(${newUserData.userID},\'${newUserData.id_companyName}\',\'${newUserData.id_positionWork}\',\'${newUserData.id_jobDuties}\',\'${newUserData.id_startWork}\',
                    \'${endWork}\',${stillWorking})
                    ON DUPLICATE KEY UPDATE companyName=\'${newUserData.id_companyName}\',positionWork=\'${newUserData.id_positionWork}\', jobDuties=\'${newUserData.id_jobDuties}\',
                    startWork=\'${newUserData.id_startWork}\',endWork= \'${endWork}\',stillWorking=${stillWorking}`;
            }
            else {
                stillWorking = 1;

                queryExpiriennce = ` INSERT INTO user_expirience(userID,companyName,positionWork,jobDuties,startWork,endWork,stillWorking)
                    VALUES(${newUserData.userID},\'${newUserData.id_companyName}\',\'${newUserData.id_positionWork}\',\'${newUserData.id_jobDuties}\',\'${newUserData.id_startWork}\',
                    ${endWork},${stillWorking})
                    ON DUPLICATE KEY UPDATE companyName=\'${newUserData.id_companyName}\',positionWork=\'${newUserData.id_positionWork}\', jobDuties=\'${newUserData.id_jobDuties}\',
                    startWork=\'${newUserData.id_startWork}\',endWork=${endWork},stillWorking=${stillWorking}`;
            }

            dbConnection.query(queryExpiriennce, (err, result) => {
                if (err) console.log(err.message);
            });
        }
    }
}



module.exports.fillDriverLicense = fillDriverLicense;
module.exports.addDriverLicenseToDB = addDriverLicenseToDB;
module.exports.addLanguageToDB = addLanguageToDB;
module.exports.addCoursesToDB = addCoursesToDB;
module.exports.addRecomendingToDB = addRecomendingToDB;
module.exports.addEducationToDB = addEducationToDB;
module.exports.addExpirienceToDB = addExpirienceToDB;