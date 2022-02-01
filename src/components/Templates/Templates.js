import React, { Component } from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';
//import mysql from 'mysql';
//import { connString } from "../../Server/ConnectionModule";

import './Templates.css';

import avatar from '../../images/avatar.png';
import location from '../../images/location.png';
import phone from '../../images/phone.png';
import email from '../../images/email.png';


class Templates extends React.Component {

    constructor(props) {

        super(props);

        //Начальное состояние состояния (state)
        this.state = {
            userData: null,
            languagesArr:null,
            coursesArr :null,
            educationArr : null,
            experienceArr : null 
        }

        this.nameUserData = "";
        this.driverLicenseStr = "";
        this.maritalStatusStr = "";
        this.employmentStr = "";
        this.army = "";
        this.languagesArr = [];
        this.courseArr=[];
        this.educatArr= [];
        this.experArr =[];

        this.age = 0;
       
        // this.educArray = [];
        this.API_ADDRESS = "http://localhost:55555/tmps";

        this.getDriverLicense = this.getDriverLicense.bind(this);
        this.getMaritalStatus = this.getMaritalStatus.bind(this);
        this.getDesiredSalary = this.getDesiredSalary.bind(this);
        this.getEmployment = this.getEmployment.bind(this);
        this.getArmyData = this.getArmyData.bind(this);
        this.getLanguages = this.getLanguages.bind(this);
        this.calculateAge = this.calculateAge.bind(this);
        this.getCourses = this.getCourses.bind(this);
        this.getEducation =  this.getEducation.bind(this);
        this.getExperience = this.getExperience.bind(this);
    }

    createAndDownloadPdf = () => {
        console.log(this.state);
        var uData = this.state;

        console.log(typeof (uData));
        console.log(typeof (JSON.stringify(uData)));


        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            data: JSON.stringify(uData),
            url: 'http://localhost:55555/create-pdf'
        };

        axios(options)
            .then(() => axios.get('http://localhost:55555/fetch-pdf', { responseType: 'blob' }))
            .then((res) => {
                const pdfBlob = new Blob([res.data], { type: 'application/pdf' });

                saveAs(pdfBlob, 'newPdf.pdf');
            })
    }

    getDriverLicense(data) {
        var stringDataDrivLicense = "";
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
    getMaritalStatus(data) {
        var maritalStatusString = "";
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

    getDesiredSalary(data) {
        var currency = "";

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
    getEmployment(data) {
        var employmentStr = "";
        switch (data.employment) {
            case 1:{
                employmentStr+="Полная занятость";
                break;
            }
            case 2:{
                employmentStr+="Частичная занятость";
                break;
            }
            case 3:{
                employmentStr+="Проектная работа";
                break;
            }
            case 4:{
                employmentStr+="Волонтерство";
                break;
            }
            case 5:{
                employmentStr+="Стажировка";
                break;
            }
            default:
                {
                    break;
                }
        }
        switch (data.schedule) {
            case 1:{
                employmentStr+=", полный день";
                break;
            }
            case 2:{
                employmentStr+=", сменный график";
                break;
            }
            case 3:{
                employmentStr+=", гибкий график";
                break;
            }
            case 4:{
                employmentStr+=", удаленная работа";
                break;
            }
            case 5:{
                employmentStr+=", вахтовый метод";
                break;
            }
            default:
                {
                    break;
                }
        }
if(data.businessTrip===1)employmentStr+=", командировки";
if(data.relocate===1)employmentStr+=", возможен переезд";
return employmentStr;
    }

    getArmyData(data){
if(data.army===1)return "Служба в армии";
else{return "";}
    }

    getLanguages(data){      

        var langDataArr=[];      
            for(let i=0;i<data.langName.length;i++)
            {
                let strDataLangToArr="";             

                switch(data.langName[i])
                {
                    case 1:
                        {
                            strDataLangToArr+="Украинский";
                            break;
                        }
                        case 2:
                        {
                            strDataLangToArr+="Русский";
                            break;
                        }
                        case 3:
                        {
                            strDataLangToArr+="Английский";
                            break;
                        }
                        case 4:
                        {
                            strDataLangToArr+="Китайский";
                            break;
                        }
                        case 5:
                        {
                            strDataLangToArr+="Испанский";
                            break;
                        }
                        case 6:
                        {
                            strDataLangToArr+="Польский";
                            break;
                        }
                        case 7:
                        {
                            strDataLangToArr+="Немецкий";
                            break;
                        }
                        case 8:
                        {
                            strDataLangToArr+="Французский";
                            break;
                        }
                        case 9:
                        {
                            strDataLangToArr+="Итальянский";
                            break;
                        }
                        case 10:
                        {
                            strDataLangToArr+="Португальский";
                            break;
                        }
                        case 11:
                        {
                            strDataLangToArr+="Арабский";
                            break;
                        }
                        case 12:
                        {
                            strDataLangToArr+="Хинди";
                            break;
                        }
                        case 13:
                        {
                            strDataLangToArr+="Японский";
                            break;
                        }
                        case 14:
                        {
                            strDataLangToArr+="Белорусский";
                            break;
                        }
                        case 15:
                        {
                            strDataLangToArr+="Иврит";
                            break;
                        }
                        case 16:
                        {
                            strDataLangToArr+="Турецкий";
                            break;
                        }
                        default:
                            {
                                break;
                            }
                }

                switch(data.level[i])
                {
                    case 1:
                        {
                            strDataLangToArr+=", A1 - начальный";
                            break;
                        }
                        case 2:
                        {
                            strDataLangToArr+=", A2 - базовый";
                            break;
                        }
                        case 3:
                        {
                            strDataLangToArr+=", B1 - средний";
                            break;
                        }
                        case 4:
                        {
                            strDataLangToArr+=", B2 - выше среднего";
                            break;
                        }
                        case 5:
                        {
                            strDataLangToArr+=", C1 - продвинутый";
                            break;
                        }
                        case 6:
                        {
                            strDataLangToArr+=", C2 - профессиональный";
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
    calculateAge(birthday) { // birthday is a date
        var ageDifMs = Date.now() - Date.parse(birthday);
        var ageDate = new Date(ageDifMs); // miliseconds from epoch
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    getCourses(data){
        var coursesArr=[];
        if (data.courseName != '' && data.courseName != null){
            let count = 0;
            if (Array.isArray(data.courseName)) {
                data.courseName.forEach(function (element) {
                    if (element.length > 1) count++;
                });
            }
            if (count > 0){
                for(let i=0;i<data.courseName.length;i++)
                {
                 let courseItem={};
                 courseItem.courseName = data.courseName[i];
                 courseItem.organization = data.organization[i];
                 courseItem.endingCourse = data.endingCourse[i];    
                 coursesArr.push(courseItem);
                }
            }
            else{
                let courseItem={};
                 courseItem.courseName = data.courseName;
                 courseItem.organization = data.organization;
                 courseItem.endingCourse = data.endingCourse;    
                 coursesArr.push(courseItem);
            }
        }
          return coursesArr;

    }
    getEducation(data){

        var educationArr=[];
        if (data.institutName != '' && data.institutName != null){
            let count = 0;
            if (Array.isArray(data.institutName)) {
                data.institutName.forEach(function (element) {
                    if (element.length > 1) count++;
                });
            }
            if (count > 0){
                for(let i=0;i<data.institutName.length;i++)
                {
                 let educationItem={};
                 educationItem.institutName = data.institutName[i];
                 educationItem.faculty = data.faculty[i];
                 educationItem.specialty = data.specialty[i];
                 educationItem.ending = data.ending[i];
                 switch(data.levelEducation[i])
                 {
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
                         default :{
                        educationItem.levelEducation="";
                        break;
                    }

                    }                                            
                    educationArr.push(educationItem);
                }
            }
            else{
                let educationItem={};
                educationItem.institutName = data.institutName;
                educationItem.faculty = data.faculty;
                educationItem.specialty = data.specialty;
                educationItem.ending = data.ending;               
                educationItem.levelEducation = data.levelEducation;
                switch(data.levelEducation)
                {
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
                        default :{
                       educationItem.levelEducation="";
                       break;
                   }

                   }                       
                 educationArr.push(educationItem);
            }
        }
          return educationArr;
    }

    getExperience(data){
     
        let experienceArr =[];
        if (data.companyName != '' && data.companyName != null) {
            let count = 0;            
            if (Array.isArray(data.companyName)) {
                data.companyName.forEach(function (element) {
                    if (element.length > 1) count++;
                });
            }
    
            if (count > 0)
            {
                for(let i =0;i<data.companyName.length;i++)
                {
                    let expItem={};
                    expItem.companyName  = data.companyName[i];
                    expItem.positionWork = data.positionWork[i];
                    expItem.jobDuties = data.jobDuties[i];
                    expItem.startWork = data.startWork[i];
                    if(data.endWork[i]==null&&data.stillWorking[i]==1)
                    {
                        expItem.endWork = "еще работаю";
                    }
                    else{
                        expItem.endWork = data.endWork[i] ;
                    }
                    experienceArr.push(expItem);
                }
            }
            else{
                let expItem={};
                expItem.companyName  = data.companyName;
                expItem.positionWork = data.positionWork;
                expItem.jobDuties = data.jobDuties;
                expItem.startWork = data.startWork;
                if(data.endWork==null&&data.stillWorking==1)
                {
                    expItem.endWork = "еще работаю";
                }
                else{
                    expItem.endWork = data.endWork ;
                }
                experienceArr.push(expItem);
            }
            }
            return experienceArr;
    }

    componentDidMount() {

        //Встроенный метод для GET (и только) запросов
        fetch(this.API_ADDRESS)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                if (data.middleName == null) {
                    data.middleName = "";
                }
                if (data.file) {
                    let fileFromDB = new Buffer.from(data.file).toString("base64");
                    this.imageFromDB = "data:image/png;base64," + fileFromDB;
                }
                else {
                    this.imageFromDB = avatar;
                }
                this.languagesArr = this.getLanguages(data);
                this.driverLicenseStr = this.getDriverLicense(data);
                this.maritalStatusStr = this.getMaritalStatus(data);
                this.salaryStr = this.getDesiredSalary(data);
                this.employmentStr = this.getEmployment(data);
                this.army = this.getArmyData(data);
                this.age = this.calculateAge(data.birthOfDate); 
                this.courseArr = this.getCourses(data);
                this.educatArr = this.getEducation(data);
                this.experArr = this.getExperience(data);

                                            






                this.setState({
                    userData: data ,
                    languagesArr :  this.languagesArr ,
                    coursesArr : this.courseArr ,
                    educationArr : this.educatArr ,
                    experienceArr : this.experArr              
                });
               

                console.dir(this.state.userData);
                
               
            });
    }

    render() {

        if (this.state.userData == null) {
            return (
                <div className="d-flex justify-content-center spin">
                    <div className="spinner-border  text-primary" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div className="container">
                    <div className="container-sm" id="main-container-t1" >
                        <div className="row container-t1">

                            {/* left-container */}
                            <div className="col col-4" id="left-container">
                                <img id="avatar" src={this.imageFromDB} className="rounded mx-auto d-block" alt="avatar" />
                                <div className="row justify-content-start" id='full-name'>
                                    <div className="mr-3 text-capitalize text-break name-text">{this.state.userData.firstName}</div>
                                    <div className="mr-3 text-capitalize name-text">{this.state.userData.middleName}</div>
                                    <div className="mr-3 text-capitalize name-text">{this.state.userData.lastName}</div>
                                </div>

                                <hr className="style1" />

                                <div className="col header-text">Должность
                                    <div className="col main-text">{this.state.userData.position}</div>
                                </div>
                                <div className="col header-text">Возраст
                                    <div className="col main-text">{this.age}</div>
                                </div>
                                <div className="col header-text">Контакты</div>

                                <div className="col text-capitalize "><img className="icon-item" src={location} alt="location" />
                                    {this.state.userData.сityOfResidence}</div>
                                <div className="col "><img className="icon-item" src={phone} alt="phone" />
                                    {this.state.userData.phone}</div>
                                <div className="col long-text "><img className="icon-item" src={email} alt="email" />
                                    {this.state.userData.email}</div>

                                <div className="col text-nowrap header-text" >Водительские права
                                    <div className="col main-text">{this.driverLicenseStr}</div>
                                </div>

                                <div className="col header-text">Гражданство
                                    <div className="col main-text">{this.state.userData.nationality}</div>
                                </div>
                                <div className="col text-nowrap header-text">Семейное положение
                                    <div className="col main-text">{this.maritalStatusStr}</div>
                                </div>
                                <div className="col text-nowrap header-text">Желаемая зарплата
                                    <div className="col main-text">{this.salaryStr}</div>
                                </div>
                                <div className="col header-text">Занятость
                                    <div className="col main-text">{this.employmentStr}</div>
                                </div>
                                <div className="col header-text">Языки
                                { this.state.languagesArr.map(function(value,i) { return (<div className="col main-text" key={'val-' + i}>{value}</div>);} )}
                                   
                                  
                                </div>
                                <div className="col header-text">{this.army}
                                </div>
                            </div>

                            {/* right-container */}
                            <div className="col" id="right-container">
                                <div className="col header-text border box">Опыт работы </div>
                                <div className="list-group ">
                                { this.state.educationArr.map(function(value,i) {
                                     return (


                                        );} )}

                                    <div className="list-group-item ">
                                        <div className="d-flex w-100 justify-content-between">
                                            <h5 className="mb-1">государственная служба</h5>
                                            <h5 className="mb-1 years">2000-2007</h5>
                                        </div>
                                        <p className="mb-1" >менеджер</p>
                                        <small>ведение клиентов, продажи</small>
                                    </div>
                                    <div className="list-group-item ">
                                        <div className="d-flex w-100 justify-content-between">
                                            <h5 className="mb-1">государственная служба</h5>
                                            <h5 className="mb-1 years">2007-2022</h5>
                                        </div>
                                        <p className="mb-1" >бухгалтер</p>
                                        <small>бухгалтерия предприятия</small>
                                    </div>
                                </div>

                                <div className="col header-text border box">Образование</div>
                                <div className="list-group ">

                                 { this.state.educationArr.map(function(value,i) {
                                     return (
                                    <div className="list-group-item " key={'val-' + i}>
                                        <div className="d-flex w-100 justify-content-between">
                                            <h5 className="mb-1">{value.institutName}</h5>
                                            <h5 className="mb-1 years">{value.ending}</h5>
                                        </div>
                                        <p className="mb-1" >{value.faculty}</p>
                                        <small>{value.specialty + " , "+ value.levelEducation}</small>
                                    </div>
                                     );} )}
                                </div>

                                <div className="col header-text border box">Курсы</div>
                                <div className="list-group ">

                                { this.state.coursesArr.map(function(value,i) {
                                     return (
                                     
                                        <div className="list-group-item "key={'val-' + i}>
                                        <div className="d-flex w-100 justify-content-between">
                                            <h5 className="mb-1">{value.organization}</h5>
                                            <h5 className="mb-1 years">{value.endingCourse}</h5>
                                        </div>
                                        <p className="mb-1" >{value.courseName}</p>
                                        </div>                                                                                                                                                                                               
                                     );} )}                          
                                </div>

                                <div className="col header-text border box">Рекомендации</div>
                                <div className="list-group ">
                                    <div className="list-group-item ">
                                        <div className="d-flex w-100 justify-content-between">
                                            <h5 className="mb-1">{this.state.userData.company}</h5>
                                        </div>
                                        <p className="mb-1 text-capitalize" >{this.state.userData.personRecommending}</p>
                                        <div >{this.state.userData.phoneCompany}</div>
                                        <div >{this.state.userData.emailCompany}</div>
                                    </div>
                                </div>
                                <div className="col header-text border box">Профессиональные навыки</div>
                                <div className="list-group ">
                                    <div className="list-group-item ">
                                        <div className="mb-1 long-text" >
                                            {this.state.userData.professionalSkills}
                                        </div>
                                    </div>
                                </div>

                                <div className="col header-text border box">Личные качества</div>
                                <div className="list-group ">
                                    <div className="list-group-item ">
                                        <p className="mb-1" >
                                            {this.state.userData.personalQualities}
                                        </p>
                                    </div>
                                </div>

                                <div className="col header-text border box">Хобби</div>
                                <div className="list-group ">
                                    <div className="list-group-item ">
                                        <p className="mb-1" >
                                            {this.state.userData.hobby}
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <button onClick={this.createAndDownloadPdf}>Download PDF</button>
                    </div>
                </div>
            );
        }
    };
}
export default Templates;