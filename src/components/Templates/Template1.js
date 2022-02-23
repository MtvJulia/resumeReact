import React from 'react';
import PrintComponents from "react-print-components";

import './css/main.css';

import avatar from '../../images/avatar.png';
import location from '../../images/location.png';
import phone from '../../images/phone.png';
import email from '../../images/email.png';
import { API_ADDRESS_TMP1 } from '../../ConstantModule';
import { getDriverLicense, getRecomendingArr, getExperience, getEducation, calculateAge, getCourses, getLanguages, getArmyData, getEmployment, getDesiredSalary, getMaritalStatus } from "../TemplateLoadingMethods";

class Template1 extends React.Component {

    constructor(props) {

        super(props);
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
    }

    componentDidMount() {

        //Встроенный метод для GET (и только) запросов
        fetch(API_ADDRESS_TMP1)
            .then((response) => response.json())
            .then((data) => {
                document.getElementById("guestStatus").hidden = true;
                document.getElementById("userStatus").hidden = false;
                if (data.middleName == null) {
                    data.middleName = "";
                }
                if (data.file) {
                    let fileFromDB = new Buffer.from(data.file).toString("base64");
                    this.imageFromDB = "data:image/png;base64," + fileFromDB;
                    document.getElementById("userAvatar").src = this.imageFromDB  ;
                }
                else {
                    this.imageFromDB = avatar;
                }
                this.languagesArr = getLanguages(data);
                this.driverLicenseStr = getDriverLicense(data);
                this.maritalStatusStr = getMaritalStatus(data);
                this.salaryStr = getDesiredSalary(data);
                this.employmentStr = getEmployment(data);
                this.army = getArmyData(data);
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
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div className="container" >

                    {/* template 1 */}
                    <div className="container-sm" id="main-container-t1" >
                        <div className="row container-t" id="divToPDF">
                            {/* left-container */}
                            <div className="col col-4" id="left-container-t1">
                                <img id="avatar" src={this.imageFromDB} className="rounded mx-auto d-block" alt="avatar" />
                                <div className="d-flex flex-row justify-content-start" id='full-name'>
                                    <div className="mr-3 text-capitalize text-break name-text">{this.state.userData.lastName}</div>
                                    <div className="mr-3 text-capitalize name-text">{this.state.userData.firstName}</div>
                                    <div className="mr-3 text-capitalize name-text">{this.state.userData.middleName}</div>
                                </div>

                                <hr className="hr2" />

                                <div className="col header-text">Должность
                                    <div className="col main-text">{this.state.userData.position}</div>
                                </div>
                                <div className="col header-text">Возраст
                                    <div className="col main-text">{this.age}</div>
                                </div>
                                <div className="col header-text">Контакты</div>

                                <div className="col text-capitalize "><img className="icon-item " src={location} alt="location" />
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

                                <div className="col header-text">{this.army}</div>
                            </div>

                            {/* right-container */}
                            <div className="col col-8" id="right-container">
                                <div className="col header-text border box-t1">Опыт работы </div>
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

                                <div className="col header-text border box-t1">Образование</div>
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

                                <div className="col header-text border box-t1">Курсы</div>
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

                                <div className="col header-text border box-t1">Рекомендации</div>
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

                                <div className="col header-text border box-t1">Профессиональные навыки</div>
                                <div className="list-group ">
                                    <div className="list-group-item ">
                                        <div className="mb-1 long-text" >
                                            {this.state.userData.professionalSkills}
                                        </div>
                                    </div>
                                </div>

                                <div className="col header-text border box-t1">Личные качества</div>
                                <div className="list-group ">
                                    <div className="list-group-item ">
                                        <p className="mb-1" >
                                            {this.state.userData.personalQualities}
                                        </p>
                                    </div>
                                </div>

                                <div className="col header-text border box-t1">Хобби</div>
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
                    <PrintComponents trigger={
                        <div className='d-flex justify-content-center'>
                            <button className="btn btn-primary btn-lg btn-save">Распечатать и сохранить в PDF</button>
                        </div>} >

                        {/* template 1 */}
                        <div className="container-sm" id="main-container-t1" >
                            <div className="row container-t" id="divToPDF">
                                {/* left-container */}
                                <div className="col col-4" id="left-container-t1">
                                    <img id="avatar" src={this.imageFromDB} className="rounded mx-auto d-block" alt="avatar" />
                                    <div className="d-flex flex-row justify-content-start" id='full-name'>
                                        <div className="mr-3 text-capitalize text-break name-text">{this.state.userData.lastName}</div>
                                        <div className="mr-3 text-capitalize name-text">{this.state.userData.firstName}</div>
                                        <div className="mr-3 text-capitalize name-text">{this.state.userData.middleName}</div>
                                    </div>

                                    <hr className="hr2" />

                                    <div className="col header-text">Должность
                                        <div className="col main-text">{this.state.userData.position}</div>
                                    </div>
                                    <div className="col header-text">Возраст
                                        <div className="col main-text">{this.age}</div>
                                    </div>
                                    <div className="col header-text">Контакты</div>

                                    <div className="col text-capitalize "><img className="icon-item " src={location} alt="location" />
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

                                    <div className="col header-text">{this.army}</div>
                                </div>

                                {/* right-container */}
                                <div className="col col-8" id="right-container">
                                    <div className="col header-text border box-t1">Опыт работы </div>
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

                                    <div className="col header-text border box-t1">Образование</div>
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

                                    <div className="col header-text border box-t1">Курсы</div>
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

                                    <div className="col header-text border box-t1">Рекомендации</div>
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

                                    <div className="col header-text border box-t1">Профессиональные навыки</div>
                                    <div className="list-group ">
                                        <div className="list-group-item ">
                                            <div className="mb-1 long-text" >
                                                {this.state.userData.professionalSkills}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col header-text border box-t1">Личные качества</div>
                                    <div className="list-group ">
                                        <div className="list-group-item ">
                                            <p className="mb-1" >
                                                {this.state.userData.personalQualities}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="col header-text border box-t1">Хобби</div>
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
                </div >
            );
        }
    };
}
export default Template1;