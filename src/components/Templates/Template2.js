import React from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';
import PrintComponents from "react-print-components";

import './css/main.css';

import avatar from '../../images/avatar.png';
import location from '../../images/location.png';
import phone from '../../images/phone.png';
import email from '../../images/email.png';

import { getDriverLicense, getRecomendingArr, getExperience, getEducation, calculateAge, getCourses, getLanguages, getArmyData, getEmployment, getDesiredSalary, getMaritalStatus } from "../TemplateLoadingMethods";

class Template2 extends React.Component {

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


        this.API_ADDRESS = "http://localhost:55555/tmp2";

    }

    // createAndDownloadPdf = () => {

    //     const options = {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    //         data: this.state,
    //         url: 'http://localhost:55555/create-pdf'
    //     };

    //     axios(options)
    //         .then(() => axios.get('http://localhost:55555/fetch-pdf', { responseType: 'blob' }))
    //         .then((res) => {
    //             const pdfBlob = new Blob([res.data], { type: 'application/pdf' });

    //             saveAs(pdfBlob, 'newPdf.pdf');
    //         })
    // }

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

                    {/* template 2 */}
                    <div className="container-sm" id="main-container-t2" >
                        <div className="row container-t">
                            {/* left-container */}
                            <div className="col col-4" id="left-container-t2">
                                <img id="avatar" src={this.imageFromDB} className="rounded mx-auto d-block" alt="avatar" />
                                <div className="row justify-content-start" id='full-name'>
                                    <div className="mr-3 text-capitalize text-break name-text txt-white">{this.state.userData.lastName}</div>
                                    <div className="mr-3 text-capitalize name-text txt-white">{this.state.userData.firstName}</div>
                                    <div className="mr-3 text-capitalize name-text txt-white">{this.state.userData.middleName}</div>
                                </div>

                                <hr className="hr2 invert" />

                                <div className="col header-text txt-white">Должность
                                    <div className="col main-text">{this.state.userData.position}</div>
                                </div>
                                <div className="col header-text txt-white">Возраст
                                    <div className="col main-text">{this.age}</div>
                                </div>
                                <div className="col header-text txt-white">Контакты</div>

                                <div className="col text-capitalize txt-white"><img className="icon-item-t2" src={location} alt="location" />{this.state.userData.сityOfResidence}</div>
                                <div className="col txt-white"><img className="icon-item-t2" src={phone} alt="phone" />{this.state.userData.phone}</div>
                                <div className="col long-text txt-white"><img className="icon-item-t2" src={email} alt="email" />{this.state.userData.email}</div>

                                <div className="col text-nowrap header-text txt-white" >Водительские права
                                    <div className="col main-text">{this.driverLicenseStr}</div>
                                </div>

                                <div className="col header-text txt-white">Гражданство
                                    <div className="col main-text">{this.state.userData.nationality}</div>
                                </div>
                                <div className="col text-nowrap header-text txt-white">Семейное положение
                                    <div className="col main-text">{this.maritalStatusStr}</div>
                                </div>
                                <div className="col text-nowrap header-text txt-white">Желаемая зарплата
                                    <div className="col main-text">{this.salaryStr}</div>
                                </div>
                                <div className="col header-text txt-white">Занятость
                                    <div className="col main-text">{this.employmentStr}</div>
                                </div>
                                <div className="col header-text txt-white">Языки
                                    {this.state.languagesArr.map(function (value, i) { return (<div className="col main-text" key={'val-' + i}>{value}</div>); })}

                                </div>
                                <div className="col header-text txt-white">{this.army}</div>
                            </div>

                            {/* right-container */}
                            <div className="col" id="right-container">
                                <div className="col header-text border box-t2">Опыт работы </div>
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

                                <div className="col header-text border box-t2">Образование</div>
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

                                <div className="col header-text border box-t2">Курсы</div>
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

                                <div className="col header-text border box-t2">Рекомендации</div>
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

                                <div className="col header-text border box-t2">Профессиональные навыки</div>
                                <div className="list-group ">
                                    <div className="list-group-item ">
                                        <div className="mb-1 long-text" >{this.state.userData.professionalSkills} </div>
                                    </div>
                                </div>

                                <div className="col header-text border box-t2">Личные качества</div>
                                <div className="list-group ">
                                    <div className="list-group-item ">
                                        <p className="mb-1" >{this.state.userData.personalQualities} </p>
                                    </div>
                                </div>

                                <div className="col header-text border box-t2">Хобби</div>
                                <div className="list-group ">
                                    <div className="list-group-item ">
                                        <p className="mb-1" >{this.state.userData.hobby}</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <PrintComponents trigger={<button>Print</button>} >
                        {/* template 2 */}
                        <div className="container-sm" id="main-container-t2" >
                            <div className="row container-t">
                                {/* left-container */}
                                <div className="col col-4" id="left-container-t2">
                                    <img id="avatar" src={this.imageFromDB} className="rounded mx-auto d-block" alt="avatar" />
                                    <div className="row justify-content-start" id='full-name'>
                                        <div className="mr-3 text-capitalize text-break name-text txt-white">{this.state.userData.lastName}</div>
                                        <div className="mr-3 text-capitalize name-text txt-white">{this.state.userData.firstName}</div>
                                        <div className="mr-3 text-capitalize name-text txt-white">{this.state.userData.middleName}</div>
                                    </div>

                                    <hr className="hr2 invert" />

                                    <div className="col header-text txt-white">Должность
                                        <div className="col main-text">{this.state.userData.position}</div>
                                    </div>
                                    <div className="col header-text txt-white">Возраст
                                        <div className="col main-text">{this.age}</div>
                                    </div>
                                    <div className="col header-text txt-white">Контакты</div>

                                    <div className="col text-capitalize txt-white"><img className="icon-item-t2" src={location} alt="location" />{this.state.userData.сityOfResidence}</div>
                                    <div className="col txt-white"><img className="icon-item-t2" src={phone} alt="phone" />{this.state.userData.phone}</div>
                                    <div className="col long-text txt-white"><img className="icon-item-t2" src={email} alt="email" />{this.state.userData.email}</div>

                                    <div className="col text-nowrap header-text txt-white" >Водительские права
                                        <div className="col main-text">{this.driverLicenseStr}</div>
                                    </div>

                                    <div className="col header-text txt-white">Гражданство
                                        <div className="col main-text">{this.state.userData.nationality}</div>
                                    </div>
                                    <div className="col text-nowrap header-text txt-white">Семейное положение
                                        <div className="col main-text">{this.maritalStatusStr}</div>
                                    </div>
                                    <div className="col text-nowrap header-text txt-white">Желаемая зарплата
                                        <div className="col main-text">{this.salaryStr}</div>
                                    </div>
                                    <div className="col header-text txt-white">Занятость
                                        <div className="col main-text">{this.employmentStr}</div>
                                    </div>
                                    <div className="col header-text txt-white">Языки
                                        {this.state.languagesArr.map(function (value, i) { return (<div className="col main-text" key={'val-' + i}>{value}</div>); })}

                                    </div>
                                    <div className="col header-text txt-white">{this.army}</div>
                                </div>

                                {/* right-container */}
                                <div className="col" id="right-container">
                                    <div className="col header-text border box-t2">Опыт работы </div>
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

                                    <div className="col header-text border box-t2">Образование</div>
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

                                    <div className="col header-text border box-t2">Курсы</div>
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

                                    <div className="col header-text border box-t2">Рекомендации</div>
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

                                    <div className="col header-text border box-t2">Профессиональные навыки</div>
                                    <div className="list-group ">
                                        <div className="list-group-item ">
                                            <div className="mb-1 long-text" >{this.state.userData.professionalSkills} </div>
                                        </div>
                                    </div>

                                    <div className="col header-text border box-t2">Личные качества</div>
                                    <div className="list-group ">
                                        <div className="list-group-item ">
                                            <p className="mb-1" >{this.state.userData.personalQualities} </p>
                                        </div>
                                    </div>

                                    <div className="col header-text border box-t2">Хобби</div>
                                    <div className="list-group ">
                                        <div className="list-group-item ">
                                            <p className="mb-1" >{this.state.userData.hobby}</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </PrintComponents>
                    <div> <button onClick={this.createAndDownloadPdf}>Download PDF</button> </div>
                </div >
            );
        }
    };
}
export default Template2;