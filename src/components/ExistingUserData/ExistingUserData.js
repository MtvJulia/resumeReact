import React from 'react';
import axios from 'axios';
import '../../../src/App.css';
import ShowExperience from '../../Server/ShowExperience';
import ShowEducation from '../../Server/ShowEducation';
import ShowLanguage from '../../Server/ShowLanguage';
import ShowCourses from '../../Server/ShowCourses';
import ShowRecommending from '../../Server/ShowRecommending';
import { Switch } from 'react-router';

class ExistingUserData extends React.Component {
    constructor(props) {
        super(props);
        //Начальное состояние состояния (state)
        this.state = {
            users: null
        }
        this.API_ADDRESS = "http://localhost:55555/existinguserdata";
        this.changeData = this.changeData.bind(this);
        this.expArray = [];
        this.educArray = [];
        this.langArray = [];
        this.coursArray = [];
        this.recomendationArray = [];
        this.driveLicense = {
            A1: 0,
            A: 0,
            B1: 0,
            B: 0,
            C1: 0,
            C: 0,
            D1: 0,
            D: 0,
            T: 0
        };
        this.currencyName = "";

        this.fillExpArr = this.fillExpArr.bind(this);
        this.fillEducArr = this.fillEducArr.bind(this);
        this.fillLangArr = this.fillLangArr.bind(this);
        this.fillCoursArr = this.fillCoursArr.bind(this);
        this.fillRecomendArr = this.fillRecomendArr.bind(this);
        this.fillDriveLicenseObj = this.fillDriveLicenseObj.bind(this);
        this.getCurrency = this.getCurrency.bind(this);
        this.AddLang = this.AddLang.bind(this);
        this.AddScheduler = this.AddScheduler.bind(this);
        this.AddCourse = this.AddCourse.bind(this);
        this.AddExperience = this.AddExperience.bind(this);
    }

    getCurrency(data, currency) {

        switch (data.currency) {
            case "Гривна":
                {
                    currency = "₴ - гривна";
                    break;
                }
            case "Доллар США":
                {
                    currency = "$ - доллар";
                    break;
                }
            case "Евро":
                {
                    currency = "€ - евро";
                    break;
                }
            case "Рубли":
                {
                    currency = "₽ - рубль";
                    break;
                }
            case "Фунт стерлингов":
                {
                    currency = "£ - фунты";
                    break;
                }
            case "Юань":
                {
                    currency = "¥ - юань";
                    break;
                }
            case "Другая":
                {
                    currency = "другая валюта";
                    break;
                }
        }
        return currency;
    }

    fillDriveLicenseObj(data, drLicense) {
        for (let i = 0; i < data.driverLicense.length; i++) {
            switch (data.driverLicense[i]) {
                case "A1":
                    {
                        drLicense.A1 = 1;
                        break;
                    }
                case "A":
                    {
                        drLicense.A = 1;
                        break;
                    }
                case "B1":
                    {
                        drLicense.B1 = 1;
                        break;
                    }
                case "B":
                    {
                        drLicense.B = 1;
                        break;
                    }
                case "C1":
                    {
                        drLicense.C1 = 1;
                        break;
                    }
                case "C":
                    {
                        drLicense.C = 1;
                        break;
                    }
                case "D1":
                    {
                        drLicense.D1 = 1;
                        break;
                    }
                case "D":
                    {
                        drLicense.D = 1;
                        break;
                    }
                case "T":
                    {
                        drLicense.T = 1;
                        break;
                    }
            }
        }
    }




    fillCoursArr(data, coursArr) {

        for (let i = 0; i < data.courseName.length; i++) {

            var objCourses = {};

            objCourses.courseName = data.courseName[i];
            objCourses.organization = data.organization[i];
            objCourses.endingCourse = data.endingCourse[i];

            coursArr.push(objCourses);
        }
    }
    fillRecomendArr(data, recomendArr) {

        for (let i = 0; i < data.phoneCompany.length; i++) {

            var objRecomendation = {};

            objRecomendation.personRecommending = data.personRecommending[i];
            objRecomendation.company = data.company[i];
            objRecomendation.emailCompany = data.emailCompany[i];
            objRecomendation.phoneCompany = data.phoneCompany[i];

            recomendArr.push(objRecomendation);
        }

    }



    fillLangArr(data, langArr) {
        for (let i = 0; i < data.langName.length; i++) {

            var objLanguage = {};

            objLanguage.langName = data.langName[i];
            switch (data.level[i]) {
                case "1":
                    {
                        objLanguage.level = "A1 - начальный";
                        break;
                    }
                case "2":
                    {
                        objLanguage.level = "A2 - базовый";
                        break;
                    }
                case "3":
                    {
                        objLanguage.level = "B1 - средний";
                        break;
                    }
                case "4":
                    {
                        objLanguage.level = "B2 - выше среднего";
                        break;
                    }
                case "5":
                    {
                        objLanguage.level = "C1 - продвинутый";
                        break;
                    }
                case "6":
                    {
                        objLanguage.level = "C2 - профессиональный";
                        break;
                    }
                case "7":
                    {
                        objLanguage.level = "A1 - начальный";
                        break;
                    }

            }
            langArr.push(objLanguage);
        }
    }

    fillEducArr(data, educArr) {
        if (data.institutName != null) {
            for (let i = 0; i < data.institutName.length; i++) {

                var objEducation = {};

                objEducation.institutName = data.institutName[i];
                objEducation.levelEducation = data.levelEducation[i];
                objEducation.faculty = data.faculty[i];
                objEducation.specialty = data.specialty[i];
                objEducation.ending = data.ending[i];

                educArr.push(objEducation);
            }
        }
    }

    fillExpArr(data, expArr) {
        if (data.companyName != null) {
            for (let i = 0; i < data.companyName.length; i++) {

                var objExperience = {};

                objExperience.startWork = data.startWork[i];
                objExperience.endWork = data.endWork[i];
                objExperience.stillWorking = data.stillWorking;
                objExperience.positionWork = data.positionWork[i];
                objExperience.companyName = data.companyName[i];
                objExperience.jobDuties = data.jobDuties[i];

                expArr.push(objExperience);
            }
        }
    }

    changeData(data) {

        if (data[0].endingCourse == null) {
            data[0].endingCourse = "";
        }
        data[0].positionWork = data[0].positionWork.split("~");

    }
    AddLang() {
        var langList = document.getElementById("langList");
        var langDetails = document.getElementById('langDetails').outerHTML;      
        langList.insertAdjacentHTML("beforeend", langDetails);
      
    }
    AddScheduler() {
        var educationList = document.getElementById("educationList");
        var educationDatails = document.getElementById('educationDatails').outerHTML;
        console.log(educationDatails);
        educationList.insertAdjacentHTML("beforeend", educationDatails);
    }
    AddCourse() {
        var courseList = document.getElementById("courseList");
        var courseDetails = document.getElementById('courseDetails').outerHTML;
        console.log(courseDetails);
        courseList.insertAdjacentHTML("beforeend", courseDetails);
    }
    AddExperience() {
        var experienceList = document.getElementById("experienceList");
        var experienceDetails = document.getElementById('experienceDetails').outerHTML;
        console.log(experienceDetails);
        experienceList.insertAdjacentHTML("beforeend", experienceDetails);
    }


    componentDidMount() {

        fetch(this.API_ADDRESS)
            .then((response) => response.json())
            .then((data) => {

                data = data[0]; //переводим в объект

                console.log(data);

                let expArr = [];
                let educArr = [];
                let langArr = [];
                let coursArr = [];
                let recomendArr = [];
                let drLicense = {};
                let currency = "";

                this.fillExpArr(data, expArr);
                this.fillEducArr(data, educArr);
                this.fillLangArr(data, langArr);
                if (data.courseName != null) {
                    this.fillCoursArr(data, coursArr);
                }
                if (data.phoneCompany != null) {
                    this.fillRecomendArr(data, recomendArr);
                }
                if (data.driverLicense != null) {
                    this.fillDriveLicenseObj(data, drLicense);
                }


                this.expArray = expArr;
                this.educArray = educArr;
                this.langArray = langArr;
                this.coursArray = coursArr;
                this.recomendationArray = recomendArr;
                this.driveLicense = drLicense;
                this.currencyName = this.getCurrency(data, currency);


                this.setState({
                    items: data
                });


            });
    }

    render() {
        if (this.state.items == null) {
            return (
                <div className="spinner-border text-muted">Loading...</div>
            );
        }
        else {
            return (
                <div className="container-fluid mainUserData">

                    <div className="container-fluid ">
                        {/* <!-- First container --> */}
                        <div className="divData ">
                            <div>
                                <form action="http://localhost:55555/userdata" method="POST">

                                    {/* <!-- -------ОСНОВНАЯ ИНФО----------- --> */}
                                    <fieldset className="form-group p-3">
                                        <legend className="w-auto px-2">
                                            <h3>Основная информация</h3>
                                        </legend>

                                        <div className="row">
                                            <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <label for="id_userPosition">Желаемая должность:</label>
                                                <input id="id_userPosition" type="text" className="form-control" value={this.state.items.position} name="id_userPosition"
                                                    placeholder="Введите должность" />
                                            </div>
                                            <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <label for="id_lastName">Фамилия:</label>
                                                <input id="id_lastName" type="text" className="form-control" name="id_lastName" value={this.state.items.lastName} placeholder="Введите фамилию" />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <div className="userPhoto">
                                                    <label>
                                                        <img className="avatar" src="../../images/dance2.jpg"
                                                            alt="Нажмите для выбора файла" />
                                                        <input type="file" id="id_imgUpl" name="fupload" hidden />
                                                    </label>
                                                </div>
                                            </div>

                                            <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <label for="id_firstName">Имя:</label>
                                                <input type="text" className="form-control" id="id_firstName" name="id_firstName" value={this.state.items.firstName} placeholder="Введите имя" />
                                                <label for="id_middleName">Отчество:</label>
                                                <input type="text" className="form-control" id="id_middleName" name="id_middleName" value={this.state.items.middleName}
                                                    placeholder="Введите отчество" />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <label for="id_birthOfDate">Дата рождения:</label>
                                                <input type="date" className="form-control" id="id_birthOfDate" value={this.state.items.birthOfDate.substr(0, 10)} name="id_birthOfDate" />
                                            </div>
                                            <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <label for="id_cityOfResidence">Город проживания:</label>
                                                <input type="text" className="form-control" id="id_cityOfResidence" name="id_cityOfResidence" value={this.state.items.сityOfResidence}
                                                    placeholder="Введите город" />
                                            </div>
                                        </div>
                                    </fieldset>
                                    {/* <!-- -------КОНТАКТЫ----------- --> */}
                                    <fieldset className="scheduler-border">
                                        <legend className="scheduler-border">
                                            <h3>Контакты</h3>
                                        </legend>

                                        <div className="row">
                                            <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <label for="id_phone">Телефон:</label>
                                                <input type="text" className="form-control" id="id_phone" name="id_phone" value={this.state.items.phone} placeholder="+380661234567" />
                                            </div>
                                            <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <label for="id_email">Электронная почта:</label>
                                                <input type="email" className="form-control" id="id_email" name="id_email" value={this.state.items.email}
                                                    placeholder="address@site.com" />
                                            </div>
                                        </div>
                                    </fieldset>
                                    {/* <!-- -------ЛИЧНАЯ ИНФО----------- --> */}
                                    <fieldset className="scheduler-border">
                                        <legend className="scheduler-border">
                                            <h3>Личная информация</h3>
                                        </legend>
                                        <div className="row">
                                            <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <label for="id_nationality">Национальность:</label>
                                                <input type="text" className="form-control" id="id_nationality" name="id_nationality" value={this.state.items.nationality}
                                                    placeholder="Введите национальность" />
                                            </div>
                                            <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <label for="id_desiredSalary">Желаемая зарплата:</label>

                                                <div className="input-group mb-2">
                                                    <input type="number" className="form-control" id="id_desiredSalary" name="id_desiredSalary" value={this.state.items.desiredSalary} placeholder="0"
                                                        step="1" min="0" />
                                                    <div className="input-group-append">
                                                        <select className="form-control" id="id_currency" name="id_currency" value={this.currencyName}>
                                                            <option>₴ - гривна</option>
                                                            <option>$ - доллар</option>
                                                            <option>€ - евро</option>
                                                            <option>₽ - рубль</option>
                                                            <option>£ - фунты</option>
                                                            <option>¥ - юань</option>
                                                            <option>другая валюта</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <label for="id_employment">Занятось:</label>
                                                <select className="form-control" id="id_employment" name="id_employment" placeholder="выбрать" value={this.state.items.employment}>
                                                    <option>Полная занятость</option>
                                                    <option>Частичная занятость</option>
                                                    <option>Проектная работа</option>
                                                    <option>Волонтерство</option>
                                                    <option>Стажировка</option>
                                                </select>
                                            </div>
                                            <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <label for="id_schedule">График работы:</label>
                                                <select className="form-control" id="id_schedule" name="id_schedule" value={this.state.items.schedule}>
                                                    <option>Полный день</option>
                                                    <option>Сменный график</option>
                                                    <option>Гибкий график</option>
                                                    <option>Удаленная работа</option>
                                                    <option>Вахтовый метод</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <div className="custom-control custom-checkbox custom-control-inline ccb-right">
                                                    <input type="checkbox" id="id_businessTrip" className="custom-control-input" name="id_businessTrip" checked={this.state.items.businessTrip} />
                                                    <label className="custom-control-label" for="id_businessTrip">Командировки</label>
                                                </div>
                                            </div>
                                            <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <div className="custom-control custom-checkbox custom-control-inline ccb-right">
                                                    <input type="checkbox" id="id_relocate" className="custom-control-input" name="id_relocate" checked={this.state.items.relocate} />
                                                    <label className="custom-control-label" for="id_relocate">Готовность на переезд</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <label for="id_maritalStatus">Семейное положение:</label>
                                                <select className="form-control" id="id_maritalStatus" name="id_maritalStatus" value={this.state.items.maritalStatus} >
                                                    <option>Замужем</option>
                                                    <option>Не замужем</option>
                                                    <option>Женат</option>
                                                    <option>Не женат</option>
                                                </select>
                                                <div
                                                    className="custom-control custom-checkbox custom-control-inline ccb-right childrenCheckBox">
                                                    <input type="checkbox" id="id_children" className="custom-control-input" name="id_children" checked={this.state.items.children} />
                                                    <label className="custom-control-label" for="id_children">Дети</label>
                                                </div>
                                            </div>
                                            <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <label for="id_education">Основное образование:</label>
                                                <select className="form-control" id="id_education" name="id_education" value={this.state.items.education}>
                                                    <option>Общее среднее образование</option>
                                                    <option>Профессионально-техническое образование</option>
                                                    <option>Высшее образования</option>
                                                    <option>Аспирантура</option>
                                                    <option>Докторантура</option>
                                                </select>
                                            </div>
                                        </div>
                                    </fieldset>
                                    {/* 
                                        <legend className="scheduler-border">
                                        <h3>Владение языками</h3>
                                        </legend> */}
                                    <ShowLanguage arrayToDisplay={this.langArray} />

                                    <div id="langList">
                                    </div>
                                    <a href="javascript:AddLang()" onClick={this.AddLang}>Добавить</a>

                                    <ShowEducation arrayToDisplay={this.educArray} />
                                    <div id="educationList">
                                    </div>
                                    <a href="javascript:this.AddScheduler()" onClick={this.AddScheduler}>Добавить</a>

                                    <legend className="scheduler-border">
                                        <h3>Курсы повышения квалификации</h3>
                                    </legend>
                                    <ShowCourses arrayToDisplay={this.coursArray} />                                 
                                    <div id="courseList">
                                    </div>
                                    <div>
                                <fieldset className="scheduler-border">                                 
                                    <details id="courseDetails">
                                        <summary>Курс</summary>

                                        <div className="row">
                                            <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <label for="id_courseName">Название курса:</label>
                                                <input type="text" className="form-control" id="id_courseName" name="id_courseName" 
                                                    placeholder="Название курса" />
                                            </div>
                                            <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <label for="id_organization">Проводившая организация:</label>
                                                <input type="text" className="form-control" id="id_organization" name="id_organization" 
                                                    placeholder="Проводившая организация" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <label for="id_endingCourse">Год окончания:</label>
                                                <input type="date" className="form-control" id="id_endingCourse" name="id_endingCourse"  />
                                            </div>
                                        </div>
                                    </details>
                                </fieldset>
                            </div>
                                    <a href="javascript:AddCourse()" onClick={this.AddCourse}>Добавить</a>

                                    < ShowExperience arrayToDisplay={this.expArray} />
                                    <div id="experienceList">
                                    </div>
                                    <a href="javascript:AddExperience()" onClick={this.AddExperience}>Добавить</a>

                                    <ShowRecommending arrayToDisplay={this.recomendationArray} />

                                    {/* <!-- -------ДОПОЛНИТЕЛЬНАЯ ИНФО----------- --> */}
                                    <fieldset className="scheduler-border">
                                        <legend className="scheduler-border">
                                            <h3>Дополнительная информация</h3>
                                        </legend>

                                        <div className="row">
                                            <div className="form-group col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <label for="id_driverLicense">Права категории:</label>
                                                <div className="custom-control custom-checkbox custom-control-inline ccb-right">
                                                    <input type="checkbox" id="id_driverLicenseA1" className="custom-control-input" name="id_driverLicenseA1" checked={this.driveLicense.A1} />
                                                    <label className="custom-control-label" for="id_driverLicenseA1">A1</label>
                                                </div>
                                                <div className="custom-control custom-checkbox custom-control-inline ccb-right">
                                                    <input type="checkbox" id="id_driverLicenseA" className="custom-control-input" name="id_driverLicenseA" checked={this.driveLicense.A} />
                                                    <label className="custom-control-label" for="id_driverLicenseA">A</label>
                                                </div>
                                                <div className="custom-control custom-checkbox custom-control-inline ccb-right">
                                                    <input type="checkbox" id="id_driverLicenseB1" className="custom-control-input" name="id_driverLicenseB1" checked={this.driveLicense.B1} />
                                                    <label className="custom-control-label" for="id_driverLicenseB1">B1</label>
                                                </div>
                                                <div className="custom-control custom-checkbox custom-control-inline ccb-right">
                                                    <input type="checkbox" id="id_driverLicenseB" className="custom-control-input" name="id_driverLicenseB" checked={this.driveLicense.B} />
                                                    <label className="custom-control-label" for="id_driverLicenseB">B</label>
                                                </div>
                                                <div className="custom-control custom-checkbox custom-control-inline ccb-right">
                                                    <input type="checkbox" id="id_driverLicenseC1" className="custom-control-input" name="id_driverLicenseC1" checked={this.driveLicense.C1} />
                                                    <label className="custom-control-label" for="id_driverLicenseC1">C1</label>
                                                </div>
                                                <div className="custom-control custom-checkbox custom-control-inline ccb-right">
                                                    <input type="checkbox" id="id_driverLicenseC" className="custom-control-input" name="id_driverLicenseC" checked={this.driveLicense.C} />
                                                    <label className="custom-control-label" for="id_driverLicenseC">C</label>
                                                </div>
                                                <div className="custom-control custom-checkbox custom-control-inline ccb-right">
                                                    <input type="checkbox" id="id_driverLicenseD1" className="custom-control-input" name="id_driverLicenseD1" checked={this.driveLicense.D1} />
                                                    <label className="custom-control-label" for="id_driverLicenseD1">D1</label>
                                                </div>
                                                <div className="custom-control custom-checkbox custom-control-inline ccb-right">
                                                    <input type="checkbox" id="id_driverLicenseD" className="custom-control-input" name="id_driverLicenseD" checked={this.driveLicense.D} />
                                                    <label className="custom-control-label" for="id_driverLicenseD">D</label>
                                                </div>
                                                <div className="custom-control custom-checkbox custom-control-inline ccb-right">
                                                    <input type="checkbox" id="id_driverLicenseT" className="custom-control-input" name="id_driverLicenseT" checked={this.driveLicense.T} />
                                                    <label className="custom-control-label" for="id_driverLicenseT">T</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="form-group col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <div className="custom-control custom-checkbox custom-control-inline ccb-right">
                                                    <input type="checkbox" id="id_privatCar" className="custom-control-input" name="id_privatCar" checked={this.state.items.privateСar} />
                                                    <label className="custom-control-label" for="id_privatCar">Есть личный
                                        автомобиль</label>
                                                </div>
                                            </div>
                                            <div className="form-group col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <div className="custom-control custom-checkbox custom-control-inline ccb-right">
                                                    <input type="checkbox" id="id_army" className="custom-control-input" name="id_army" checked={this.state.items.army} />
                                                    <label className="custom-control-label" for="id_army">Служба в армии</label>
                                                </div>
                                            </div>
                                            <div className="form-group col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <label for="id_hobby">Хобби:</label>
                                                <textarea className="form-control" id="id_hobby" name="id_hobby" value={this.state.items.hobby}></textarea>
                                            </div>
                                            <div className="form-group col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <label for="id_personalQualities">Личные качества:</label>
                                                <textarea className="form-control" id="id_personalQualities" name="id_personalQualities" value={this.state.items.personalQualities}></textarea>
                                            </div>
                                            <div className="form-group col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <label for="id_professionalSkills">Профессиональные навыки:</label>
                                                <textarea className="form-control" id="id_professionalSkills" name="id_professionalSkills" value={this.state.items.professionalSkills}></textarea>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <button type="submit" className="btn btn-primary" id="sbmResume" >Отправить</button>


                                </form>
                            </div>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
            );
        }
    };
}
export default ExistingUserData;