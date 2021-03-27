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

        this.fillExpArr = this.fillExpArr.bind(this);
        this.fillEducArr = this.fillEducArr.bind(this);
        this.fillLangArr = this.fillLangArr.bind(this);
        this.fillCoursArr = this.fillCoursArr.bind(this);
        this.fillRecomendArr = this.fillRecomendArr.bind(this);
        this.fillDriveLicenseObj = this.fillDriveLicenseObj.bind(this);
    }

    fillDriveLicenseObj(data,drLicense) 
    {
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

    fillExpArr(data, expArr) {
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

    changeData(data) {

        if (data[0].endingCourse == null) {
            data[0].endingCourse = "";
        }
        data[0].positionWork = data[0].positionWork.split("~");

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
                let drLicense ={};

                this.fillExpArr(data, expArr);
                this.fillEducArr(data, educArr);
                this.fillLangArr(data,langArr);
                if (data.courseName != null) {
                    this.fillCoursArr(data, coursArr);
                }
                if (data.phoneCompany != null) {
                    this.fillRecomendArr(data,recomendArr);
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

                this.setState({
                    items: data
                });


            });
    }

    render() {
        if (this.state.items == null) {
            return (
                <div> Loading...</div>
            );
        }
        else {
            return (
                <div className="container">
                    <div className="container-fluid ">
                        {/* <!-- First container --> */}
                        <div className="divData ">
                            <div>
                                <form action="http://localhost:55555/userdata" method="POST">
                                    <table>
                                        <tr>
                                            <td> <label className="control-label " for="id_userPosition">Желаемая должность:</label></td>
                                            <td className="col-sm-8">
                                                <input type="text" className="form-control" id="id_userPosition" value={this.state.items.position} name="id_userPosition" placeholder="Введите название должности" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="col-md-6">
                                                <h2>Основная информация</h2>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="col-md-3"> <label className="control-label" for="id_lastName">Фамилия:</label></td>
                                            <td className="col-sm-3">
                                                <input type="text" className="form-control" id="id_lastName" name="id_lastName" value={this.state.items.lastName} placeholder="Введите фамилию" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_firstName">Имя:</label></td>
                                            <td className="col-sm-8">
                                                <input type="text" className="form-control" id="id_firstName" name="id_firstName" value={this.state.items.firstName} placeholder="Введите имя" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_middleName">Отчество:</label></td>
                                            <td className="col-sm-8">
                                                <input type="text" className="form-control" id="id_middleName" name="id_middleName" value={this.state.items.middleName} placeholder="Введите отчество" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_birthOfDate">Дата рождения:</label></td>
                                            <td className="col-sm-8">
                                                <input type="date" className="form-control" id="id_birthOfDate" value={this.state.items.birthOfDate.substr(0, 10)} name="id_birthOfDate" />
                                            </td>
                                        </tr>
                                        {/* -----------------------------------!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
                                        <tr className="form-group">
                                            <td>
                                                <label for="imgup">Изображение:</label>
                                            </td>
                                            <td className="col-sm-8">
                                                <input type="file" id="imgup" className="form-control" name="fupload" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_cityOfResidence">Город проживания:</label></td>
                                            <td className="col-sm-8">
                                                <input type="text" className="form-control" id="id_cityOfResidence" value={this.state.items.сityOfResidence} name="id_cityOfResidence" placeholder="Введите название города" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h2>Контакты</h2>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_phone">Телефон:</label></td>
                                            <td className="col-sm-8">
                                                <input type="" className="form-control" id="id_phone" value={this.state.items.phone} name="id_phone" placeholder="+380661234567" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_email">Электронная почта:</label></td>
                                            <td className="col-sm-8">
                                                <input type="email" className="form-control" id="id_email" name="id_email" value={this.state.items.email} placeholder="address@site.com" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h2>Личная информация</h2>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_nationality">Национальность:</label></td>
                                            <td className="col-sm-8">
                                                <input type="text" className="form-control" id="id_nationality" value={this.state.items.nationality} name="id_nationality" placeholder="Введите национальность" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_relocate">Готовность на переезд:</label></td>
                                            <td >
                                                <input type="checkbox" id="id_relocate" name="id_relocate" checked={this.state.items.relocate} />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_desiredSalary">Желаемая зарплата:</label></td>
                                            <td className="col-sm-8">
                                                <input type="number" className="form-control" id="id_desiredSalary" value={this.state.items.desiredSalary} name="id_desiredSalary" step="1" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_employment">Занятось:</label></td>
                                            <td className="col-sm-8">
                                                <select className="form-control" id="id_employment" value={this.state.items.employment} name="id_employment">
                                                    <option>Полная занятость</option>
                                                    <option>Частичная занятость</option>
                                                    <option>Проектная работа</option>
                                                    <option>Волонтерство</option>
                                                    <option>Стажировка</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_schedule">График работы:</label></td>
                                            <td className="col-sm-8">
                                                <select className="form-control" value={this.state.items.schedule} id="id_schedule" name="id_schedule">
                                                    <option>Полный день</option>
                                                    <option>Сменный график</option>
                                                    <option>Гибкий график</option>
                                                    <option>Удаленная работа</option>
                                                    <option>Вахтовый метод</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_businessTrip">Командировки:</label></td>
                                            <td >
                                                <input type="checkbox" id="id_businessTrip" checked={this.state.items.schedule} name="id_businessTrip" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_maritalStatus">Семейное положение:</label></td>
                                            <td className="col-sm-8">
                                                <input type="text" className="form-control" id="id_maritalStatus" value={this.state.items.maritalStatus} name="id_maritalStatus" placeholder="Введите семейное положение" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_children">Дети:</label></td>
                                            <td >
                                                <input className="control-input" type="checkbox" id="id_children" checked={this.state.items.children} name="id_children" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_education">Основное образование:</label></td>
                                            <td className="col-sm-8">
                                                <select className="form-control" id="id_education" value={this.state.items.education} name="id_education">
                                                    <option>Общее среднее образование</option>
                                                    <option>Профессионально-техническое образование</option>
                                                    <option>Высшее образования</option>
                                                    <option>Аспирантура</option>
                                                    <option>Докторантура</option>
                                                </select>
                                            </td>
                                        </tr>

                                        {/* <tr>
                                            <td>
                                                <h2>Владение языками</h2>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_langName">Язык:</label></td>
                                            <td className="col-sm-8">
                                                <input type="text" className="form-control" value={this.state.items.langName} id="id_langName"name="id_langName" placeholder="Введите язык" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_level">Уровень владения:</label></td>
                                            <td className="col-sm-8">
                                                <select className="form-control" id="id_level" value={this.state.items.level} name="id_level">
                                                    <option>A1 - начальный</option>
                                                    <option>A2 - базовый</option>
                                                    <option>B1 - средний</option>
                                                    <option>B2 - выше среднего</option>
                                                    <option>C1 - продвинутый</option>
                                                    <option>C2 - профессиональный</option>
                                                </select>
                                            </td>
                                        </tr> */}



                                        <ShowLanguage arrayToDisplay={this.langArray} />

                                        <ShowEducation arrayToDisplay={this.educArray} />
                                        {/* <tr>
                                            <td>
                                                <h2>Образование</h2>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_institutName">Наименование учебного заведения:</label></td>
                                            <td className="col-sm-8">
                                                <input type="text" className="form-control" id="id_institutName" value={this.state.items.institutName}  name="id_institutName" placeholder="Введите наименование учебного заведения" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_levelEducation">Уровень образование:</label></td>
                                            <td className="col-sm-8">
                                                <select className="form-control" id="id_levelEducation" value={this.state.items.levelEducation} name="id_levelEducation">
                                                    <option>Высшее</option>
                                                    <option>Бакалавр</option>
                                                    <option>Магистр</option>
                                                    <option>Специалист</option>
                                                    <option>Кандидат наук</option>
                                                    <option>Доктор наук</option>
                                                    <option>Неполное высшее</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_faculty">Факультет:</label></td>
                                            <td className="col-sm-8">
                                                <input type="text" className="form-control" id="id_faculty" value={this.state.items.faculty}  name="id_faculty"placeholder="Введите факультет" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_specialty">Специальность:</label></td>
                                            <td className="col-sm-8">
                                                <input type="text" className="form-control" id="id_specialty" name="id_specialty" value={this.state.items.specialty} placeholder="Введите специальность" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_ending">Год окончания:</label></td>
                                            <td className="col-sm-8">
                                                <input type="date" className="form-control" id="id_ending" value={this.state.items.ending.substr(0,10)} name="id_ending" />
                                            </td>
                                        </tr> */}
                                        {/* <tr>
                                            <td>
                                                <h2>Курсы повышения квалификации</h2>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_courseName">Название курса:</label></td>
                                            <td className="col-sm-8">
                                                <input type="text" className="form-control" id="id_courseName" value={this.state.items.courseName} name="id_courseName" placeholder="Название курса" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_organization">Проводившая организация:</label></td>
                                            <td className="col-sm-8">
                                                <input type="text" className="form-control" id="id_organization"name="id_organization" value={this.state.items.organization} placeholder="Проводившая организация" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_endingCourse">Год окончания:</label></td>
                                            <td className="col-sm-8">
                                                <input type="date" className="form-control" id="id_endingCourse" value={this.state.items.endingCourse.substr(0,10)} name="id_endingCourse"/>
                                            </td>
                                        </tr> */}


                                        <ShowCourses arrayToDisplay={this.coursArray} />




                                        {/* <tr>
                                            <td> <label className="control-label" for="id_courseName">Название курса:</label></td>
                                            <td className="col-sm-8">
                                                <input type="text" className="form-control" id="id_courseName" name="id_courseName" placeholder="Название курса" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_organization">Проводившая организация:</label></td>
                                            <td className="col-sm-8">
                                                <input type="text" className="form-control" id="id_organization"name="id_organization" placeholder="Проводившая организация" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_endingCourse">Год окончания:</label></td>
                                            <td className="col-sm-8">
                                                <input type="date" className="form-control" id="id_endingCourse" name="id_endingCourse"/>
                                            </td>
                                        </tr> */}

                                        < ShowExperience arrayToDisplay={this.expArray} />

                                        {/* <tr>
                                            <td>
                                                <h2>Опыт работы</h2>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_startWork">Начало работы:</label></td>
                                            <td className="col-sm-8">
                                                <input type="date" className="form-control" value={this.state.items[0].startWork[0].substr(0,10)}  id="id_startWork" name="id_startWork" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_endWork">Конец работы:</label></td>
                                            <td className="col-sm-8">
                                                <input type="date" className="form-control" value={this.state.items[0].endWork[0].substr(0,10)}  id="id_endWork" name="id_endWork" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_stillWorking">Еще работаю:</label></td>
                                            <td >
                                                <input className="control-input" type="checkbox" checked={this.state.items[0].stillWorking} id="id_stillWorking"name="id_stillWorking"   />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_positionWork">Должность:</label></td>
                                            <td className="col-sm-8">
                                                <input type="text" className="form-control" id="id_positionWork"value={this.state.items[0].positionWork[0]} name="id_positionWork"placeholder="Должность" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_companyName">Название компании:</label></td>
                                            <td className="col-sm-8">
                                                <input type="text" className="form-control" id="id_companyName" value={this.state.items[0].companyName[0]} name="id_companyName"placeholder="Название компании" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_jobDuties">Обязанности:</label></td>
                                            <td className="col-sm-8">
                                                <textarea className="form-control" id="id_jobDuties" value={this.state.items[0].jobDuties[0]} name="id_jobDuties"></textarea>                                               
                                            </td>
                                        </tr> */}


                                        {/* <tr>
                                            <td>
                                                <h2>Опыт работы</h2>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_startWork">Начало работы:</label></td>
                                            <td className="col-sm-8">
                                                <input type="date" className="form-control" id="id_startWork" value={this.state.items[0].startWork[1].substr(0,10)} name="id_startWork" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_endWork">Конец работы:</label></td>
                                            <td className="col-sm-8">
                                                <input type="date" className="form-control" id="id_endWork"value={this.state.items[0].endWork[1].substr(0,10)} name="id_endWork" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_stillWorking">Еще работаю:</label></td>
                                            <td >
                                                <input className="control-input" type="checkbox"  checked={this.state.items[0].stillWorking} id="id_stillWorking"name="id_stillWorking"   />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_positionWork">Должность:</label></td>
                                            <td className="col-sm-8">
                                                <input type="text" className="form-control" id="id_positionWork"value={this.state.items[0].positionWork[1]} name="id_positionWork"placeholder="Должность" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_companyName">Название компании:</label></td>
                                            <td className="col-sm-8">
                                                <input type="text" className="form-control" id="id_companyName" value={this.state.items[0].companyName[1]} name="id_companyName"placeholder="Название компании" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_jobDuties">Обязанности:</label></td>
                                            <td className="col-sm-8">
                                                <textarea className="form-control" id="id_jobDuties" value={this.state.items[0].jobDuties[1]}  name="id_jobDuties"></textarea>                                               
                                            </td>
                                        </tr> */}


                                        {/* <tr>
                                            <td>
                                                <h2>Рекомендации</h2>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_personRecommending">ФИО рекомендующего:</label></td>
                                            <td className="col-sm-8">
                                                <input type="text" className="form-control" id="id_personRecommending" value={this.state.items.personRecommending} name="id_personRecommending" placeholder="ФИО рекомендующего" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_company">Компания, должность:</label></td>
                                            <td className="col-sm-8">
                                                <input type="text" className="form-control" id="id_company" value={this.state.items.company} name="id_company" placeholder="Компания, должность" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_emailCompany">Электронная почта:</label></td>
                                            <td className="col-sm-8">
                                                <input type="email" className="form-control" id="id_emailCompany" value={this.state.items.emailCompany} name="id_emailCompany" placeholder="address@site.com" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_phoneCompany">Телефон:</label></td>
                                            <td className="col-sm-8">
                                                <input type="" className="form-control" id="id_phoneCompany" value={this.state.items.phoneCompany} name="id_phoneCompany" placeholder="+380661234567" />
                                            </td>
                                        </tr> */}

                                        <ShowRecommending arrayToDisplay={this.recomendationArray} />


                                        <tr>
                                            <td>
                                                <h2>Дополнительная информация</h2>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_driverLicense">Права категории:</label></td>
                                            <td className="col-sm-8">
                                                <label className="checkbox-inline"><input type="checkbox" id="id_driverLicenseA1" checked={this.driveLicense.A1} name="id_driverLicenseA1" />A1</label>
                                                <label className="checkbox-inline"><input type="checkbox" id="id_driverLicenseA" checked={this.driveLicense.A} name="id_driverLicenseA" />A</label>
                                                <label className="checkbox-inline"><input type="checkbox" id="id_driverLicenseB1" checked={this.driveLicense.B1} name="id_driverLicenseB1" />B1</label>
                                                <label className="checkbox-inline"><input type="checkbox" id="id_driverLicenseB" checked={this.driveLicense.B} name="id_driverLicenseB" />B</label>
                                                <label className="checkbox-inline"><input type="checkbox" id="id_driverLicenseC1" checked={this.driveLicense.C1} name="id_driverLicenseC1" />C1</label>
                                                <label className="checkbox-inline"><input type="checkbox" id="id_driverLicenseC" checked={this.driveLicense.C} name="id_driverLicenseC" />C</label>
                                                <label className="checkbox-inline"><input type="checkbox" id="id_driverLicenseD1" checked={this.driveLicense.D1} name="id_driverLicenseD1" />D1</label>
                                                <label className="checkbox-inline"><input type="checkbox" id="id_driverLicenseD" checked={this.driveLicense.D} name="id_driverLicenseD" />D</label>
                                                <label className="checkbox-inline"><input type="checkbox" id="id_driverLicenseT" checked={this.driveLicense.T} name="id_driverLicenseT" />T</label>
                                                {/* <!-- <input type="text" className="form-control" id="id_company" placeholder="Компания, должность" /> --> */}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_privatCar">Есть личный автомобиль:</label></td>
                                            <td >
                                                <input className="control-input" type="checkbox" checked={this.state.items.privateСar} id="id_privatCar" name="id_privatCar" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_army">Служба в армии:</label></td>
                                            <td >
                                                <input className="control-input" type="checkbox" checked={this.state.items.army} id="id_army" name="id_army" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_hobby">Хобби:</label></td>
                                            <td className="col-sm-8">
                                                <textarea className="form-control" id="id_hobby" value={this.state.items.hobby} name="id_hobby"></textarea>
                                                {/* <!-- <input type="text" className="form-control" id="id_jobDuties" placeholder="Проводившая организация" /> --> */}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_personalQualities">Личные качества:</label></td>
                                            <td className="col-sm-8">
                                                <textarea className="form-control" id="id_personalQualities" value={this.state.items.personalQualities} name="id_personalQualities" ></textarea>
                                                {/* <!-- <input type="text" className="form-control" id="id_jobDuties" placeholder="Проводившая организация" /> --> */}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_professionalSkills">Профессиональные навыки:</label></td>
                                            <td className="col-sm-8">
                                                <textarea className="form-control" id="id_professionalSkills" value={this.state.items.professionalSkills} name="id_professionalSkills" ></textarea>
                                                {/* <!-- <input type="text" className="form-control" id="id_jobDuties" placeholder="Проводившая организация" /> --> */}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td>
                                                <button type="submit" className="btn btn-primary" id="sbmResume" >Отправить</button>
                                            </td>
                                        </tr>
                                    </table>
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