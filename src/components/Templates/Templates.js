import React, { Component } from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';
import PrintComponents from "react-print-components";
//import mysql from 'mysql';
//import { connString } from "../../Server/ConnectionModule";

import './Templates.css';

import avatar from '../../images/avatar.png';
import location from '../../images/location.png';
import phone from '../../images/phone.png';
import email from '../../images/email.png';
import {getDriverLicense,getRecomendingArr,getExperience,getEducation,calculateAge,getCourses,getLanguages,getArmyData,getEmployment,getDesiredSalary,getMaritalStatus} from "../TemplateLoadingMethods";

class Templates extends React.Component {

    constructor(props) {

        super(props);

        //Начальное состояние состояния (state)
        this.state = {
            userData: null,
            languagesArr: null,
            coursesArr: null,
            educationArr: null,
            experienceArr: null,
            recomendingArr: null
        }

        this.nameUserData = "";
        this.driverLicenseStr = "";
        this.maritalStatusStr = "";
        this.employmentStr = "";
        this.army = "";
        this.languagesArr = [];
        this.courseArr = [];
        this.educatArr = [];
        this.experArr = [];
        this.recomendArr = [];
        this.age = 0;

        
        this.API_ADDRESS = "http://localhost:55555/tmps";

        }

    createAndDownloadPdf = () => {

        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            data: this.state,
            url: 'http://localhost:55555/create-pdf'
        };

        axios(options)
            .then(() => axios.get('http://localhost:55555/fetch-pdf', { responseType: 'blob' }))
            .then((res) => {
                const pdfBlob = new Blob([res.data], { type: 'application/pdf' });

                saveAs(pdfBlob, 'newPdf.pdf');
            })
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
                this.languagesArr = getLanguages(data);
                this.driverLicenseStr = getDriverLicense(data);
                this.maritalStatusStr =getMaritalStatus(data);
                this.salaryStr = getDesiredSalary(data);
                this.employmentStr = getEmployment(data);
                this.army =getArmyData(data);
                this.age = calculateAge(data.birthOfDate);
                this.courseArr = getCourses(data);
                this.educatArr = getEducation(data);
                this.experArr = getExperience(data);
                this.recomendArr = getRecomendingArr(data);


                this.setState({
                    userData: data,
                    languagesArr: this.languagesArr,
                    coursesArr: this.courseArr,
                    educationArr: this.educatArr,
                    experienceArr: this.experArr,
                    recomendingArr: this.recomendArr
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
                                        {this.state.languagesArr.map(function (value, i) { return (<div className="col main-text" key={'val-' + i}>{value}</div>); })}

                                    </div>
                                    <div className="col header-text">{this.army}
                                    </div>
                                </div>

                                {/* right-container */}
                                <div className="col" id="right-container">
                                    <div className="col header-text border box">Опыт работы </div>
                                    <div className="list-group ">
                                        {this.state.experienceArr.map(function (value, i) {
                                            return (
                                                <div className="list-group-item " key={'val-' + i}>
                                                    <div className="d-flex w-100 justify-content-between">
                                                        <h5 className="mb-1">{value.companyName}</h5>
                                                        <h5 className="mb-1 years">{value.startWork + " - " + value.endWork}</h5>
                                                    </div>
                                                    <p className="mb-1" >{value.positionWork}</p>
                                                    <small>{value.jobDuties}</small>
                                                </div>

                                            );
                                        })}

                                    </div>

                                    <div className="col header-text border box">Образование</div>
                                    <div className="list-group ">

                                        {this.state.educationArr.map(function (value, i) {
                                            return (
                                                <div className="list-group-item " key={'val-' + i}>
                                                    <div className="d-flex w-100 justify-content-between">
                                                        <h5 className="mb-1">{value.institutName}</h5>
                                                        <h5 className="mb-1 years">{value.ending}</h5>
                                                    </div>
                                                    <p className="mb-1" >{value.faculty}</p>
                                                    <small>{value.specialty + " , " + value.levelEducation}</small>
                                                </div>
                                            );
                                        })}
                                    </div>

                                    <div className="col header-text border box">Курсы</div>
                                    <div className="list-group ">

                                        {this.state.coursesArr.map(function (value, i) {
                                            return (

                                                <div className="list-group-item " key={'val-' + i}>
                                                    <div className="d-flex w-100 justify-content-between">
                                                        <h5 className="mb-1">{value.organization}</h5>
                                                        <h5 className="mb-1 years">{value.endingCourse}</h5>
                                                    </div>
                                                    <p className="mb-1" >{value.courseName}</p>
                                                </div>
                                            );
                                        })}
                                    </div>

                                    <div className="col header-text border box">Рекомендации</div>
                                    <div className="list-group ">
                                        {this.state.recomendingArr.map(function (value, i) {
                                            return (
                                                <div className="list-group-item " key={'val-' + i}>
                                                    <div className="d-flex w-100 justify-content-between">
                                                        <h5 className="mb-1">{value.company}</h5>
                                                    </div>
                                                    <p className="mb-1 text-capitalize" >{value.personRecommending}</p>
                                                    <div >{value.phoneCompany}</div>
                                                    <div >{value.emailCompany}</div>
                                                </div>
                                            );
                                        })}
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
                        </div>                   
                    <div> <button onClick={this.createAndDownloadPdf}>Download PDF</button> </div>
                    <PrintComponents
                        trigger={<button>Print</button>} >
                        
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
                                        {this.state.languagesArr.map(function (value, i) { return (<div className="col main-text" key={'val-' + i}>{value}</div>); })}

                                    </div>
                                    <div className="col header-text">{this.army}
                                    </div>
                                </div>

                                {/* right-container */}
                                <div className="col" id="right-container">
                                    <div className="col header-text border box">Опыт работы </div>
                                    <div className="list-group ">
                                        {this.state.experienceArr.map(function (value, i) {
                                            return (
                                                <div className="list-group-item " key={'val-' + i}>
                                                    <div className="d-flex w-100 justify-content-between">
                                                        <h5 className="mb-1">{value.companyName}</h5>
                                                        <h5 className="mb-1 years">{value.startWork + " - " + value.endWork}</h5>
                                                    </div>
                                                    <p className="mb-1" >{value.positionWork}</p>
                                                    <small>{value.jobDuties}</small>
                                                </div>

                                            );
                                        })}

                                    </div>

                                    <div className="col header-text border box">Образование</div>
                                    <div className="list-group ">

                                        {this.state.educationArr.map(function (value, i) {
                                            return (
                                                <div className="list-group-item " key={'val-' + i}>
                                                    <div className="d-flex w-100 justify-content-between">
                                                        <h5 className="mb-1">{value.institutName}</h5>
                                                        <h5 className="mb-1 years">{value.ending}</h5>
                                                    </div>
                                                    <p className="mb-1" >{value.faculty}</p>
                                                    <small>{value.specialty + " , " + value.levelEducation}</small>
                                                </div>
                                            );
                                        })}
                                    </div>

                                    <div className="col header-text border box">Курсы</div>
                                    <div className="list-group ">

                                        {this.state.coursesArr.map(function (value, i) {
                                            return (

                                                <div className="list-group-item " key={'val-' + i}>
                                                    <div className="d-flex w-100 justify-content-between">
                                                        <h5 className="mb-1">{value.organization}</h5>
                                                        <h5 className="mb-1 years">{value.endingCourse}</h5>
                                                    </div>
                                                    <p className="mb-1" >{value.courseName}</p>
                                                </div>
                                            );
                                        })}
                                    </div>

                                    <div className="col header-text border box">Рекомендации</div>
                                    <div className="list-group ">
                                        {this.state.recomendingArr.map(function (value, i) {
                                            return (
                                                <div className="list-group-item " key={'val-' + i}>
                                                    <div className="d-flex w-100 justify-content-between">
                                                        <h5 className="mb-1">{value.company}</h5>
                                                    </div>
                                                    <p className="mb-1 text-capitalize" >{value.personRecommending}</p>
                                                    <div >{value.phoneCompany}</div>
                                                    <div >{value.emailCompany}</div>
                                                </div>
                                            );
                                        })}
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
                        </div>               
                    </PrintComponents>
                </div>
            );
        }
    };
}
export default Templates;