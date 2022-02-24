const  getDriverLicense = (data) => {
    let stringDataDrivLicense = "";
    if (data.drivLicense.driverLicenseA == 1) stringDataDrivLicense += "A, ";
    if (data.drivLicense.driverLicenseA1 == 1) stringDataDrivLicense += "A1, ";
    if (data.drivLicense.driverLicenseB == 1) stringDataDrivLicense += "B, ";
    if (data.drivLicense.driverLicenseB1 == 1) stringDataDrivLicense += "B1, ";
    if (data.drivLicense.driverLicenseC == 1) stringDataDrivLicense += "C, ";
    if (data.drivLicense.driverLicenseC1 == 1) stringDataDrivLicense += "C1, ";
    if (data.drivLicense.driverLicenseD == 1) stringDataDrivLicense += "D, ";
    if (data.drivLicense.driverLicenseD1 == 1) stringDataDrivLicense += "D1, ";
    if (data.drivLicense.driverLicenseT == 1) stringDataDrivLicense += "T, ";
    if (data.privateСar == 1) stringDataDrivLicense += " личный автомобиль";
    if (stringDataDrivLicense == "") stringDataDrivLicense = "-";
    return stringDataDrivLicense;
}

const getMaritalStatus=(data)=> {
    let maritalStatusString = "";
    switch (data.maritalStatus) {
        case 1:
            {
                maritalStatusString += "Замужем";
                break;
            }
        case 2:
            {
                maritalStatusString += "Не замужем";
                break;
            }
        case 3:
            {
                maritalStatusString += "Женат";
                break;
            }
        case 4:
            {
                maritalStatusString += "Не женат";
                break;
            }
        default:
            {
                maritalStatusString = "";
            }
    }
    if (data.children === 1) maritalStatusString += ", есть дети";
    return maritalStatusString;
}

const getDesiredSalary = (data) => {
    let currency = "";

    currency += data.desiredSalary;
    switch (data.currency) {
        case 1:
            {
                currency += " ₴";
                break;
            }
        case 2:
            {
                currency += " $";
                break;
            }
        case 3:
            {
                currency += " €";
                break;
            }
        case 4:
            {
                currency += " ₽";
                break;
            }
        case 5:
            {
                currency += " £";
                break;
            }
        case 6:
            {
                currency += " ¥";
                break;
            }
        case 7:
            {
                currency += " в другой валюте";
                break;
            }
    }

    return currency;
}
const getEmployment = (data) => {
    let employmentStr = "";
    switch (data.employment) {
        case 1: {
            employmentStr += "Полная занятость";
            break;
        }
        case 2: {
            employmentStr += "Частичная занятость";
            break;
        }
        case 3: {
            employmentStr += "Проектная работа";
            break;
        }
        case 4: {
            employmentStr += "Волонтерство";
            break;
        }
        case 5: {
            employmentStr += "Стажировка";
            break;
        }
        default:
            {
                break;
            }
    }
    switch (data.schedule) {
        case 1: {
            employmentStr += ", полный день";
            break;
        }
        case 2: {
            employmentStr += ", сменный график";
            break;
        }
        case 3: {
            employmentStr += ", гибкий график";
            break;
        }
        case 4: {
            employmentStr += ", удаленная работа";
            break;
        }
        case 5: {
            employmentStr += ", вахтовый метод";
            break;
        }
        default:
            {
                break;
            }
    }
    if (data.businessTrip === 1) employmentStr += ", командировки";
    if (data.relocate === 1) employmentStr += ", возможен переезд";
    return employmentStr;
}

const getArmyData=(data)=> {
    console.log(data.army);
    if (data.army == true) return "Служба в армии";
    else { return ""; }
}

const getLanguages=(data)=> {

    let langDataArr = [];
    for (let i = 0; i < data.langName.length; i++) {
        let strDataLangToArr = "";

        switch (data.langName[i]) {
            case 1:
                {
                    strDataLangToArr += "Украинский";
                    break;
                }
            case 2:
                {
                    strDataLangToArr += "Русский";
                    break;
                }
            case 3:
                {
                    strDataLangToArr += "Английский";
                    break;
                }
            case 4:
                {
                    strDataLangToArr += "Китайский";
                    break;
                }
            case 5:
                {
                    strDataLangToArr += "Испанский";
                    break;
                }
            case 6:
                {
                    strDataLangToArr += "Польский";
                    break;
                }
            case 7:
                {
                    strDataLangToArr += "Немецкий";
                    break;
                }
            case 8:
                {
                    strDataLangToArr += "Французский";
                    break;
                }
            case 9:
                {
                    strDataLangToArr += "Итальянский";
                    break;
                }
            case 10:
                {
                    strDataLangToArr += "Португальский";
                    break;
                }
            case 11:
                {
                    strDataLangToArr += "Арабский";
                    break;
                }
            case 12:
                {
                    strDataLangToArr += "Хинди";
                    break;
                }
            case 13:
                {
                    strDataLangToArr += "Японский";
                    break;
                }
            case 14:
                {
                    strDataLangToArr += "Белорусский";
                    break;
                }
            case 15:
                {
                    strDataLangToArr += "Иврит";
                    break;
                }
            case 16:
                {
                    strDataLangToArr += "Турецкий";
                    break;
                }
            default:
                {
                    break;
                }
        }

        switch (data.level[i]) {
            case 1:
                {
                    strDataLangToArr += ", A1 - начальный";
                    break;
                }
            case 2:
                {
                    strDataLangToArr += ", A2 - базовый";
                    break;
                }
            case 3:
                {
                    strDataLangToArr += ", B1 - средний";
                    break;
                }
            case 4:
                {
                    strDataLangToArr += ", B2 - выше среднего";
                    break;
                }
            case 5:
                {
                    strDataLangToArr += ", C1 - продвинутый";
                    break;
                }
            case 6:
                {
                    strDataLangToArr += ", C2 - профессиональный";
                    break;
                }
            default:
                {
                    break;
                }
        }
        console.log(strDataLangToArr);
        langDataArr.push(strDataLangToArr);
    }

    return langDataArr;

}
const calculateAge=(birthday)=> { // birthday is a date
    let ageDifMs = Date.now() - Date.parse(birthday);
    let ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

const getCourses = (data)=> {
    let coursesArr = [];
    if (data.courseName != '' && data.courseName != null) {
        let count = 0;
        if (Array.isArray(data.courseName)) {
            data.courseName.forEach(function (element) {
                if (element.length > 1) count++;
            });
        }
        if (count > 0) {
            for (let i = 0; i < data.courseName.length; i++) {
                let courseItem = {};
                courseItem.courseName = data.courseName[i];
                courseItem.organization = data.organization[i];
                courseItem.endingCourse = data.endingCourse[i];
                coursesArr.push(courseItem);
            }
        }
        else {
            let courseItem = {};
            courseItem.courseName = data.courseName;
            courseItem.organization = data.organization;
            courseItem.endingCourse = data.endingCourse;
            coursesArr.push(courseItem);
        }
    }
    return coursesArr;

}
const getEducation=(data)=> {

    let educationArr = [];
    if (data.institutName != '' && data.institutName != null) {
        let count = 0;
        if (Array.isArray(data.institutName)) {
            data.institutName.forEach(function (element) {
                if (element.length > 1) count++;
            });
        }
        if (count > 0) {
            for (let i = 0; i < data.institutName.length; i++) {
                let educationItem = {};
                educationItem.institutName = data.institutName[i];
                educationItem.faculty = data.faculty[i];
                educationItem.specialty = data.specialty[i];
                educationItem.ending = data.ending[i];
                switch (data.levelEducation[i]) {
                    case 6:
                        {
                            educationItem.levelEducation = "Высшее";
                            break;
                        }
                    case 7:
                        {
                            educationItem.levelEducation = "Бакалавр";
                            break;
                        }
                    case 8:
                        {
                            educationItem.levelEducation = "Магистр";
                            break;
                        }
                    case 9:
                        {
                            educationItem.levelEducation = "Специалист";
                            break;
                        }
                    case 10:
                        {
                            educationItem.levelEducation = "Кандидат наук";
                            break;
                        }
                    case 11:
                        {
                            educationItem.levelEducation = "Доктор наук";
                            break;
                        }
                    case 12:
                        {
                            educationItem.levelEducation = "Неполное высшее";
                            break;
                        }
                    default: {
                        educationItem.levelEducation = "";
                        break;
                    }

                }
                educationArr.push(educationItem);
            }
        }
        else {
            let educationItem = {};
            educationItem.institutName = data.institutName;
            educationItem.faculty = data.faculty;
            educationItem.specialty = data.specialty;
            educationItem.ending = data.ending;
            educationItem.levelEducation = data.levelEducation;
            switch (data.levelEducation) {
                case 6:
                    {
                        educationItem.levelEducation = "Высшее";
                        break;
                    }
                case 7:
                    {
                        educationItem.levelEducation = "Бакалавр";
                        break;
                    }
                case 8:
                    {
                        educationItem.levelEducation = "Магистр";
                        break;
                    }
                case 9:
                    {
                        educationItem.levelEducation = "Специалист";
                        break;
                    }
                case 10:
                    {
                        educationItem.levelEducation = "Кандидат наук";
                        break;
                    }
                case 11:
                    {
                        educationItem.levelEducation = "Доктор наук";
                        break;
                    }
                case 12:
                    {
                        educationItem.levelEducation = "Неполное высшее";
                        break;
                    }
                default: {
                    educationItem.levelEducation = "";
                    break;
                }

            }
            educationArr.push(educationItem);
        }
    }
    return educationArr;
}

const getExperience=(data)=> {

    let experienceArr = [];
    if (data.companyName != '' && data.companyName != null) {
        let count = 0;
        if (Array.isArray(data.companyName)) {
            data.companyName.forEach(function (element) {
                if (element.length > 1) count++;
            });
        }

        if (count > 0) {
            for (let i = 0; i < data.companyName.length; i++) {
                let expItem = {};
                expItem.companyName = data.companyName[i];
                expItem.positionWork = data.positionWork[i];
                expItem.jobDuties = data.jobDuties[i];
                expItem.startWork = data.startWork[i].substr(0, 10);
                if (data.endWork[i] == null && data.stillWorking[i] == 1) {
                    expItem.endWork = "еще работаю";
                }
                else {
                    expItem.endWork = data.endWork[i].substr(0, 10);
                }
                experienceArr.push(expItem);
            }
        }
        else {
            let expItem = {};
            expItem.companyName = data.companyName;
            expItem.positionWork = data.positionWork;
            expItem.jobDuties = data.jobDuties;
            expItem.startWork = data.startWork.substr(0, 10);
            if (data.endWork == null && data.stillWorking == 1) {
                expItem.endWork = "еще работаю";
            }
            else {
                expItem.endWork = data.endWork.substr(0, 10);
            }
            experienceArr.push(expItem);
        }
    }
    return experienceArr;
}

const getRecomendingArr=(data)=> {
    let recomendingArr = [];
    if (data.phoneCompany != '' && data.phoneCompany != null) {
        let count = 0;
        if (Array.isArray(data.phoneCompany)) {
            data.phoneCompany.forEach(function (element) {
                if (element.length > 1) count++;
            });
        }
        if (count > 0) {
            for (let i = 0; i < data.phoneCompany.length; i++) {
                let recomendingItem = {};
                recomendingItem.personRecommending = data.personRecommending[i];
                recomendingItem.company = data.company[i];
                recomendingItem.emailCompany = data.emailCompany[i];
                recomendingItem.phoneCompany = data.phoneCompany[i];
                recomendingArr.push(recomendingItem);
            }
        }
        else {
            let recomendingItem = {};
            recomendingItem.personRecommending = data.personRecommending;
            recomendingItem.company = data.company;
            recomendingItem.emailCompany = data.emailCompany;
            recomendingItem.phoneCompany = data.phoneCompany;
            recomendingArr.push(recomendingItem);
        }
    }
    return recomendingArr;


}

module.exports.getRecomendingArr = getRecomendingArr;
module.exports.getDriverLicense = getDriverLicense;
module.exports.getExperience = getExperience;
module.exports.getEducation = getEducation;
module.exports.getCourses = getCourses;
module.exports.calculateAge = calculateAge;
module.exports.getLanguages = getLanguages;
module.exports.getArmyData = getArmyData;
module.exports.getEmployment = getEmployment;
module.exports.getDesiredSalary = getDesiredSalary;
module.exports.getMaritalStatus = getMaritalStatus;