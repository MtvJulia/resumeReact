import React from 'react';
import PrintComponents from "react-print-components";

import './css/main.css';

import avatar from '../../images/avatar.png';
import location from '../../images/location.png';
import phone from '../../images/phone.png';
import email from '../../images/email.png';
import {API_ADDRESS_TMP3} from "../../ConstantModule";
import { getDriverLicense, getRecomendingArr, getExperience, getEducation, calculateAge, getCourses, getLanguages, getArmyData, getEmployment, getDesiredSalary, getMaritalStatus } from "../TemplateLoadingMethods";

class Template3 extends React.Component {

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
        fetch(API_ADDRESS_TMP3)
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

                    {/* template 3 */}
                    <div className="container-sm border " id="main-container-t3" >
                        <div className="media align-items-center">
                            <div className="media-body ">
                                <div className='row justify-content-center m-0'>
                                    <div className='mr-3 text-capitalize text-break name-text-t3'>{this.state.userData.lastName}</div>
                                    <div className='mr-3 text-capitalize text-break name-text-t3'>{this.state.userData.firstName}</div>
                                    <div className='mr-3 text-capitalize text-break name-text-t3'>{this.state.userData.middleName}</div>
                                </div>
                                <div className='row justify-content-center m-0 header-text'><h2>{this.state.userData.position + " , " + this.age + " лет"}</h2></div>
                                <div className='row justify-content-center m-0 header-text'>ожидаемая заработная плата: {this.salaryStr}</div>
                            </div>
                            <div className="media-right">
                                <img className="media-object" id="avatar" src={this.imageFromDB} alt="avatar" />
                            </div>
                        </div>

                        <hr className='hr2'></hr>

                        <div className='header-text m-0'>Контакты</div>

                        <div className='row justify-content-around'>
                            <div className="d-flex text-capitalize"><img className="icon-item-t3" src={location} alt="location" />{this.state.userData.сityOfResidence}</div>
                            <div className="d-flex "><img className="icon-item-t3" src={phone} alt="phone" />{this.state.userData.phone}</div>
                            <div className="d-flex long-text "><img className="icon-item-t3" src={email} alt="email" />{this.state.userData.email}</div>
                        </div>

                        <hr className='hr2'></hr>

                        <div className='row user-info-t3'>
                            <div className="col text-nowrap header-text" >Водительские права
                                <div className="col main-text">{this.driverLicenseStr}</div>
                            </div>
                            <div className="col header-text">Гражданство
                                <div className="col main-text">{this.state.userData.nationality}</div>
                            </div>
                        </div>
                        <div className='row user-info-t3'>
                            <div className="col header-text">Занятость
                                <div className="col main-text">{this.employmentStr}</div>
                            </div>
                            <div className="col text-nowrap header-text">Семейное положение
                                <div className="col main-text">{this.maritalStatusStr}</div>
                            </div>
                        </div>
                        <div className='row user-info-t3'>
                            <div className="col header-text">Языки
                                {this.state.languagesArr.map(function (value, i) { return (<div className="col main-text" key={'val-' + i}>{value}</div>); })}
                            </div>
                            <div className="col header-text">{this.army}
                            </div>
                        </div>

                        <hr className='hr2'></hr>

                        <div className='row justify-content-start header-text m-0'>Опыт работы</div>
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
                        <hr className='hr2'></hr>
                        <div className='row justify-content-start header-text m-0'>Образование</div>
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

                        <hr className='hr2'></hr>
                        <div className='row justify-content-start header-text m-0'>Курсы</div>
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

                        <hr className='hr2'></hr>
                        <div className='row justify-content-start header-text m-0'>Рекомендации</div>
                        <div className="list-group">
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

                        <hr className='hr2'></hr>
                        <div className='row justify-content-start header-text m-0'>Профессиональные навыки</div>
                        <div className="list-group ">
                            <div className="mb-1 pl-4 long-text" >{this.state.userData.professionalSkills} </div>
                        </div>
                        <hr className='hr2'></hr>
                        <div className='row justify-content-start header-text m-0'>Личные качества</div>
                        <div className="list-group ">
                            <div className="mb-1 pl-4 long-text" >{this.state.userData.personalQualities}</div>
                        </div>
                        <hr className='hr2'></hr>
                        <div className='row justify-content-start header-text m-0'>Хобби</div>
                        <div className="list-group ">
                            <div className="mb-1 pl-4 long-text" >{this.state.userData.hobby}</div>
                        </div>
                    </div>
                    <PrintComponents trigger={<button>Print</button>} >
                        {/* template 3 */}
                    <div className="container-sm border " id="main-container-t3" >
                        <div className="media align-items-center">
                            <div className="media-body ">
                                <div className='row justify-content-center m-0'>
                                    <div className='mr-3 text-capitalize text-break name-text-t3'>{this.state.userData.lastName}</div>
                                    <div className='mr-3 text-capitalize text-break name-text-t3'>{this.state.userData.firstName}</div>
                                    <div className='mr-3 text-capitalize text-break name-text-t3'>{this.state.userData.middleName}</div>
                                </div>
                                <div className='row justify-content-center m-0 header-text'><h2>{this.state.userData.position + " , " + this.age + " лет"}</h2></div>
                                <div className='row justify-content-center m-0 header-text'>ожидаемая заработная плата: {this.salaryStr}</div>
                            </div>
                            <div className="media-right">
                                <img className="media-object" id="avatar" src={this.imageFromDB} alt="avatar" />
                            </div>
                        </div>

                        <hr className='hr2'></hr>

                        <div className='header-text m-0'>Контакты</div>

                        <div className='row justify-content-around'>
                            <div className="d-flex text-capitalize"><img className="icon-item-t3" src={location} alt="location" />{this.state.userData.сityOfResidence}</div>
                            <div className="d-flex "><img className="icon-item-t3" src={phone} alt="phone" />{this.state.userData.phone}</div>
                            <div className="d-flex long-text "><img className="icon-item-t3" src={email} alt="email" />{this.state.userData.email}</div>
                        </div>

                        <hr className='hr2'></hr>

                        <div className='row user-info-t3'>
                            <div className="col text-nowrap header-text" >Водительские права
                                <div className="col main-text">{this.driverLicenseStr}</div>
                            </div>
                            <div className="col header-text">Гражданство
                                <div className="col main-text">{this.state.userData.nationality}</div>
                            </div>
                        </div>
                        <div className='row user-info-t3'>
                            <div className="col header-text">Занятость
                                <div className="col main-text">{this.employmentStr}</div>
                            </div>
                            <div className="col text-nowrap header-text">Семейное положение
                                <div className="col main-text">{this.maritalStatusStr}</div>
                            </div>
                        </div>
                        <div className='row user-info-t3'>
                            <div className="col header-text">Языки
                                {this.state.languagesArr.map(function (value, i) { return (<div className="col main-text" key={'val-' + i}>{value}</div>); })}
                            </div>
                            <div className="col header-text">{this.army}
                            </div>
                        </div>

                        <hr className='hr2'></hr>

                        <div className='row justify-content-start header-text m-0'>Опыт работы</div>
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
                        <hr className='hr2'></hr>
                        <div className='row justify-content-start header-text m-0'>Образование</div>
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

                        <hr className='hr2'></hr>
                        <div className='row justify-content-start header-text m-0'>Курсы</div>
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

                        <hr className='hr2'></hr>
                        <div className='row justify-content-start header-text m-0'>Рекомендации</div>
                        <div className="list-group">
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

                        <hr className='hr2'></hr>
                        <div className='row justify-content-start header-text m-0'>Профессиональные навыки</div>
                        <div className="list-group ">
                            <div className="mb-1 pl-4 long-text" >{this.state.userData.professionalSkills} </div>
                        </div>
                        <hr className='hr2'></hr>
                        <div className='row justify-content-start header-text m-0'>Личные качества</div>
                        <div className="list-group ">
                            <div className="mb-1 pl-4 long-text" >{this.state.userData.personalQualities}</div>
                        </div>
                        <hr className='hr2'></hr>
                        <div className='row justify-content-start header-text m-0'>Хобби</div>
                        <div className="list-group ">
                            <div className="mb-1 pl-4 long-text" >{this.state.userData.hobby}</div>
                        </div>
                    </div>
                    </PrintComponents>                   
                </div >
            );
        }
    };
}
export default Template3;