import React from 'react';
import PrintComponents from "react-print-components";

import './css/main.css';

import avatar from '../../images/avatar.png';
import location from '../../images/location.png';
import phone from '../../images/phone.png';
import email from '../../images/email.png';
import {API_ADDRESS_TMP5} from "../../ConstantModule";
import { getDriverLicense, getRecomendingArr, getExperience, getEducation, calculateAge, getCourses, getLanguages, getArmyData, getEmployment, getDesiredSalary, getMaritalStatus } from "../TemplateLoadingMethods";

class Template5 extends React.Component {

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
        fetch(API_ADDRESS_TMP5)
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
                    <div className="spinner-border  text-primary" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div className="container">

                    {/* template 5 */}
                    <div className="container-sm" id="main-container-t5" >
                        <div className="row container-t">
                            {/* left-container */}
                            <div className="col col-4" id="left-container-t5">
                                <img id="avatar" src={this.imageFromDB} className="rounded mx-auto d-block" alt="avatar" />
                                <div>
                                    <div className="col header-text my-3"><u>Контакты</u></div>
                                    <div className="col text-capitalize "><img className="icon-item " src={location} alt="location" />
                                        {this.state.userData.сityOfResidence}</div>
                                    <div className="col "><img className="icon-item" src={phone} alt="phone" />
                                        {this.state.userData.phone}</div>
                                    <div className="col long-text "><img className="icon-item" src={email} alt="email" />
                                        {this.state.userData.email}</div>
                                </div>
                                <div>
                                    <div className="col text-nowrap header-text my-3"><u>Водительские права</u></div>
                                    <div className="col main-text">{this.driverLicenseStr}</div>
                                </div>
                                <div>
                                    <div className="col header-text my-3"><u>Гражданство</u></div>
                                    <div className="col main-text">{this.state.userData.nationality}</div>
                                </div>
                                <div>
                                    <div className="col text-nowrap header-text my-3"><u>Семейное положение</u></div>
                                    <div className="col main-text">{this.maritalStatusStr}</div>
                                </div>
                                <div>
                                    <div className="col header-text my-3"><u>Занятость</u></div>
                                    <div className="col main-text">{this.employmentStr}</div>
                                </div>
                                <div>
                                    <div className="col header-text my-3"><u>Языки</u></div>
                                    {this.state.languagesArr.map(function (value, i) { return (<div className="col main-text" key={'val-' + i}>{value}</div>); })}
                                </div>
                                <div>
                                    <div className="col header-text my-3"><u>Хобби</u></div>
                                    <div className="col main-text">{this.state.userData.hobby}</div>
                                </div>
                                <div className="col header-text my-3"><u>{this.army}</u></div>

                            </div>

                            {/* right-container */}
                            <div className="col" id="right-container">
                                <div className="media align-items-center border">
                                    <div className="media-body py-4  box-t5">
                                        <div className='row justify-content-center m-0'>
                                            <div className='mr-3 text-capitalize text-break name-text'>{this.state.userData.lastName}</div>
                                            <div className='mr-3 text-capitalize text-break name-text'>{this.state.userData.firstName}</div>
                                            <div className='mr-3 text-capitalize text-break name-text'>{this.state.userData.middleName}</div>
                                        </div>
                                        <div className='row justify-content-center m-0 header-text'>{this.state.userData.position + " , " + this.age + " лет"}</div>
                                        <div className='row justify-content-center m-0 main-text'>желаемая заработная плата: {this.salaryStr}</div>
                                    </div>

                                </div>
                                <div className="col header-text border box-t5 mt-3">Опыт работы </div>
                                <div className="list-group ">
                                    {this.state.experienceArr.map(function (value, i) {
                                        return (
                                            <div key={'val-' + i}>
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

                                <div className="col header-text border box-t5">Образование</div>
                                <div className="list-group ">
                                    {this.state.educationArr.map(function (value, i) {
                                        return (
                                            <div key={'val-' + i}>
                                                <div className="d-flex w-100 justify-content-between">
                                                    <h5 className="mb-1 pl-4">{value.institutName}</h5>
                                                    <h5 className="mb-1 pr-4 years">{value.ending}</h5>
                                                </div>
                                                <p className="mb-1 pl-4" >{value.faculty}</p>
                                                <small className='pl-4 mb-2'>{value.specialty + " , " + value.levelEducation}</small>
                                            </div>
                                        );
                                    })}
                                </div>

                                <div className="col header-text border box-t5">Курсы</div>
                                <div className="list-group ">
                                    {this.state.coursesArr.map(function (value, i) {
                                        return (
                                            <div key={'val-' + i}>
                                                <div className="d-flex w-100 justify-content-between">
                                                    <h5 className="mb-1 pl-4">{value.organization}</h5>
                                                    <h5 className="mb-1 pr-4 years">{value.endingCourse}</h5>
                                                </div>
                                                <p className="mb-2 pl-4" >{value.courseName}</p>
                                            </div>
                                        );
                                    })}
                                </div>

                                <div className="col header-text border box-t5">Рекомендации</div>
                                <div className="list-group ">
                                    {this.state.recomendingArr.map(function (value, i) {
                                        return (
                                            <div key={'val-' + i}>
                                                <div className="d-flex w-100 justify-content-between">
                                                    <h5 className="mb-1 pl-4">{value.company}</h5>
                                                </div>
                                                <div className='row ml-4 justify-content-start'>
                                                    <div className="mb-1 text-capitalize">{value.personRecommending}</div>
                                                    <div className="d-flex "><img className="icon-item-t3" src={phone} alt="phone" />{value.phoneCompany}</div>
                                                    <div className="d-flex long-text mb-2"><img className="icon-item-t3" src={email} alt="email" />{value.emailCompany}</div>

                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>

                                <div className="col header-text border box-t5">Профессиональные навыки</div>
                                <div className="list-group ">
                                    <div className="list-group-item ">
                                        <div className="mb-1 pl-4 long-text" >{this.state.userData.professionalSkills} </div>
                                    </div>
                                </div>

                                <div className="col header-text border box-t5">Личные качества</div>
                                <div className="list-group ">
                                    <div className="list-group-item ">
                                        <p className="mb-1" >
                                            {this.state.userData.personalQualities}
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <PrintComponents trigger={<button>Print</button>} >
                        {/* template 5 */}
                        <div className="container-sm" id="main-container-t5" >
                            <div className="row container-t">
                                {/* left-container */}
                                <div className="col col-4" id="left-container-t5">
                                    <img id="avatar" src={this.imageFromDB} className="rounded mx-auto d-block" alt="avatar" />
                                    <div>
                                        <div className="col header-text my-3"><u>Контакты</u></div>
                                        <div className="col text-capitalize "><img className="icon-item " src={location} alt="location" />
                                            {this.state.userData.сityOfResidence}</div>
                                        <div className="col "><img className="icon-item" src={phone} alt="phone" />
                                            {this.state.userData.phone}</div>
                                        <div className="col long-text "><img className="icon-item" src={email} alt="email" />
                                            {this.state.userData.email}</div>
                                    </div>
                                    <div>
                                        <div className="col text-nowrap header-text my-3"><u>Водительские права</u></div>
                                        <div className="col main-text">{this.driverLicenseStr}</div>
                                    </div>
                                    <div>
                                        <div className="col header-text my-3"><u>Гражданство</u></div>
                                        <div className="col main-text">{this.state.userData.nationality}</div>
                                    </div>
                                    <div>
                                        <div className="col text-nowrap header-text my-3"><u>Семейное положение</u></div>
                                        <div className="col main-text">{this.maritalStatusStr}</div>
                                    </div>
                                    <div>
                                        <div className="col header-text my-3"><u>Занятость</u></div>
                                        <div className="col main-text">{this.employmentStr}</div>
                                    </div>
                                    <div>
                                        <div className="col header-text my-3"><u>Языки</u></div>
                                        {this.state.languagesArr.map(function (value, i) { return (<div className="col main-text" key={'val-' + i}>{value}</div>); })}
                                    </div>
                                    <div>
                                        <div className="col header-text my-3"><u>Хобби</u></div>
                                        <div className="col main-text">{this.state.userData.hobby}</div>
                                    </div>
                                    <div className="col header-text my-3"><u>{this.army}</u></div>

                                </div>

                                {/* right-container */}
                                <div className="col" id="right-container">
                                    <div className="media align-items-center border">
                                        <div className="media-body py-4  box-t5">
                                            <div className='row justify-content-center m-0'>
                                                <div className='mr-3 text-capitalize text-break name-text'>{this.state.userData.lastName}</div>
                                                <div className='mr-3 text-capitalize text-break name-text'>{this.state.userData.firstName}</div>
                                                <div className='mr-3 text-capitalize text-break name-text'>{this.state.userData.middleName}</div>
                                            </div>
                                            <div className='row justify-content-center m-0 header-text'>{this.state.userData.position + " , " + this.age + " лет"}</div>
                                            <div className='row justify-content-center m-0 main-text'>желаемая заработная плата: {this.salaryStr}</div>
                                        </div>

                                    </div>
                                    <div className="col header-text border box-t5 mt-3">Опыт работы </div>
                                    <div className="list-group ">
                                        {this.state.experienceArr.map(function (value, i) {
                                            return (
                                                <div key={'val-' + i}>
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

                                    <div className="col header-text border box-t5">Образование</div>
                                    <div className="list-group ">
                                        {this.state.educationArr.map(function (value, i) {
                                            return (
                                                <div key={'val-' + i}>
                                                    <div className="d-flex w-100 justify-content-between">
                                                        <h5 className="mb-1 pl-4">{value.institutName}</h5>
                                                        <h5 className="mb-1 pr-4 years">{value.ending}</h5>
                                                    </div>
                                                    <p className="mb-1 pl-4" >{value.faculty}</p>
                                                    <small className='pl-4 mb-2'>{value.specialty + " , " + value.levelEducation}</small>
                                                </div>
                                            );
                                        })}
                                    </div>

                                    <div className="col header-text border box-t5">Курсы</div>
                                    <div className="list-group ">
                                        {this.state.coursesArr.map(function (value, i) {
                                            return (
                                                <div key={'val-' + i}>
                                                    <div className="d-flex w-100 justify-content-between">
                                                        <h5 className="mb-1 pl-4">{value.organization}</h5>
                                                        <h5 className="mb-1 pr-4 years">{value.endingCourse}</h5>
                                                    </div>
                                                    <p className="mb-2 pl-4" >{value.courseName}</p>
                                                </div>
                                            );
                                        })}
                                    </div>

                                    <div className="col header-text border box-t5">Рекомендации</div>
                                    <div className="list-group ">
                                        {this.state.recomendingArr.map(function (value, i) {
                                            return (
                                                <div key={'val-' + i}>
                                                    <div className="d-flex w-100 justify-content-between">
                                                        <h5 className="mb-1 pl-4">{value.company}</h5>
                                                    </div>
                                                    <div className='row ml-4 justify-content-start'>
                                                        <div className="mb-1 text-capitalize">{value.personRecommending}</div>
                                                        <div className="d-flex "><img className="icon-item-t3" src={phone} alt="phone" />{value.phoneCompany}</div>
                                                        <div className="d-flex long-text mb-2"><img className="icon-item-t3" src={email} alt="email" />{value.emailCompany}</div>

                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>

                                    <div className="col header-text border box-t5">Профессиональные навыки</div>
                                    <div className="list-group ">
                                        <div className="list-group-item ">
                                            <div className="mb-1 pl-4 long-text" >{this.state.userData.professionalSkills} </div>
                                        </div>
                                    </div>

                                    <div className="col header-text border box-t5">Личные качества</div>
                                    <div className="list-group ">
                                        <div className="list-group-item ">
                                            <p className="mb-1" >
                                                {this.state.userData.personalQualities}
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
export default Template5;