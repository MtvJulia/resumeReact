import React from 'react';
import axios from 'axios';
import '../UserData/UserData.css';
import UploadPhoto from '../../images/uploadPhoto.jpg'

class UserData extends React.Component {
    constructor(props) {
        super(props);
        //Начальное состояние состояния (state)
        this.state = {
            users: null
        }
        this.API_ADDRESS = "http://localhost:55555/userdata";
        this.AddLang = this.AddLang.bind(this);
        this.AddScheduler = this.AddScheduler.bind(this);
        this.AddCourse = this.AddCourse.bind(this);
        this.AddExperience = this.AddExperience.bind(this);

    }
    AddLang() {
        var langList = document.getElementById("langList");
        var langDetails = document.getElementById('langDetails').outerHTML;
        console.log(langDetails);
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
        //Встроенный метод для GET (и только) запросов
        fetch(this.API_ADDRESS)
            .then((response) => response.json())
            .then((data) => {
                 console.log(data);
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
                                                <input id="id_userPosition" type="text" className="form-control" name="id_userPosition"
                                                    placeholder="Введите должность" />
                                            </div>
                                            <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <label for="id_lastName">Фамилия:</label>
                                                <input id="id_lastName" type="text" className="form-control" name="id_lastName" placeholder="Введите фамилию" />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <div className="userPhoto">
                                                    <label>
                                                        <img className="avatar" src={UploadPhoto} alt="Нажмите для выбора файла" />
                                                        <input type="file" id="id_imgUpl" name="fupload" hidden />
                                                    </label>
                                                </div>
                                            </div>

                                            <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <label for="id_firstName">Имя:</label>
                                                <input type="text" className="form-control" id="id_firstName" name="id_firstName" placeholder="Введите имя" />
                                                <label for="id_middleName">Отчество:</label>
                                                <input type="text" className="form-control" id="id_middleName" name="id_middleName"
                                                    placeholder="Введите отчество" />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <label for="id_birthOfDate">Дата рождения:</label>
                                                <input type="date" className="form-control" id="id_birthOfDate" name="id_birthOfDate" />
                                            </div>
                                            <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <label for="id_cityOfResidence">Город проживания:</label>
                                                <input type="text" className="form-control" id="id_cityOfResidence" name="id_cityOfResidence"
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
                                                <input type="text" className="form-control" id="id_phone" name="id_phone" placeholder="+380661234567" />
                                            </div>
                                            <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <label for="id_email">Электронная почта:</label>
                                                <input type="email" className="form-control" id="id_email" name="id_email"
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
                                                <input type="text" className="form-control" id="id_nationality" name="id_nationality"
                                                    placeholder="Введите национальность" />
                                            </div>
                                            <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <label for="id_desiredSalary">Желаемая зарплата:</label>

                                                <div className="input-group mb-2">
                                                    <input type="number" className="form-control" id="id_desiredSalary" name="id_desiredSalary" placeholder="0"
                                                        step="1" min="0" />
                                                    <div className="input-group-append">
                                                        <select className="form-control" id="id_currency" name="id_currency">
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
                                                <select className="form-control" id="id_employment" name="id_employment" placeholder="выбрать">
                                                    <option>Полная занятость</option>
                                                    <option>Частичная занятость</option>
                                                    <option>Проектная работа</option>
                                                    <option>Волонтерство</option>
                                                    <option>Стажировка</option>
                                                </select>
                                            </div>
                                            <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <label for="id_schedule">График работы:</label>
                                                <select className="form-control" id="id_schedule" name="id_schedule">
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
                                                    <input type="checkbox" id="id_businessTrip" className="custom-control-input" name="id_businessTrip" />
                                                    <label className="custom-control-label" for="id_businessTrip">Командировки</label>
                                                </div>
                                            </div>
                                            <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <div className="custom-control custom-checkbox custom-control-inline ccb-right">
                                                    <input type="checkbox" id="id_relocate" className="custom-control-input" name="id_relocate" />
                                                    <label className="custom-control-label" for="id_relocate">Готовность на переезд</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <label for="id_maritalStatus">Семейное положение:</label>
                                                <select className="form-control" id="id_maritalStatus" name="id_maritalStatus">
                                                    <option>Замужем</option>
                                                    <option>Не замужем</option>
                                                    <option>Женат</option>
                                                    <option>Не женат</option>
                                                </select>
                                                <div
                                                    className="custom-control custom-checkbox custom-control-inline ccb-right childrenCheckBox">
                                                    <input type="checkbox" id="id_children" className="custom-control-input" name="id_children" />
                                                    <label className="custom-control-label" for="id_children">Дети</label>
                                                </div>
                                            </div>
                                            <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <label for="id_education">Основное образование:</label>
                                                <select className="form-control" id="id_education" name="id_education">
                                                    <option>Общее среднее образование</option>
                                                    <option>Профессионально-техническое образование</option>
                                                    <option>Высшее образования</option>
                                                    <option>Аспирантура</option>
                                                    <option>Докторантура</option>
                                                </select>
                                            </div>
                                        </div>
                                    </fieldset>

                                    {/* <!-- -------ВЛАДЕНИЕ ЯЗЫКАМИ----------- --> */}
                                    <fieldset className="scheduler-border">
                                        <legend className="scheduler-border">
                                            <h3>Владение языками</h3>
                                        </legend>

                                        <details id="langDetails">
                                            <summary>Язык</summary>
                                            <div className="row">
                                                <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                    <label for="id_langName">Язык:</label>
                                                    <input type="text" className="form-control" id="id_langName" name="id_langName"
                                                        placeholder="Введите язык" />
                                                </div>
                                                <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                    <label for="id_level">Уровень владения:</label>
                                                    <select className="form-control" id="id_level" name="id_level">
                                                        <option disabled>Выберите уровень</option>
                                                        <option selected></option>
                                                        <option>A1 - начальный</option>
                                                        <option>A2 - базовый</option>
                                                        <option>B1 - средний</option>
                                                        <option>B2 - выше среднего</option>
                                                        <option>C1 - продвинутый</option>
                                                        <option>C2 - профессиональный</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </details>

                                        <div id="langList">
                                        </div>
                                        <a href="javascript:AddLang()" onClick={this.AddLang}>Добавить</a>

                                    </fieldset>

                                    {/* <!-- -------ОБРАЗОВАНИЕ----------- --> */}
                                    <fieldset className="scheduler-border">
                                        <legend className="scheduler-border">
                                            <h3>Образование</h3>
                                        </legend>

                                        <details id="educationDatails">
                                            <summary>Mесто учебы</summary>
                                            <div className="row">
                                                <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                    <label for="id_institutName">Наименование учебного заведения:</label>
                                                    <input type="text" className="form-control" id="id_institutName" name="id_institutName"
                                                        placeholder="Введите наименование учебного заведения" />
                                                </div>
                                                <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                    <label for="id_levelEducation">Уровень образование:</label>
                                                    <select className="form-control" id="id_levelEducation" name="id_levelEducation">
                                                        <option disabled>Выберите уровень</option>
                                                        <option selected></option>
                                                        <option>Высшее</option>
                                                        <option>Бакалавр</option>
                                                        <option>Магистр</option>
                                                        <option>Специалист</option>
                                                        <option>Кандидат наук</option>
                                                        <option>Доктор наук</option>
                                                        <option>Неполное высшее</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                    <label for="id_faculty">Факультет:</label>
                                                    <input type="text" className="form-control" id="id_faculty" name="id_faculty"
                                                        placeholder="Введите факультет" />
                                                </div>
                                                <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                    <label for="id_specialty">Специальность:</label>
                                                    <input type="text" className="form-control" id="id_specialty" name="id_specialty"
                                                        placeholder="Введите специальность" />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                    <label for="id_ending">Год окончания:</label>
                                                    <input type="date" className="form-control" id="id_ending" name="id_ending" />
                                                </div>
                                            </div>
                                        </details>

                                        <div id="educationList">
                                        </div>
                                        <a href="javascript:this.AddScheduler()" onClick={this.AddScheduler}>Добавить</a>
                                    </fieldset>

                                    {/* <!-- -------КУРСЫ ПОВЫШЕНИЯ КВАЛИФИКАЦИИ----------- --> */}
                                    <fieldset className="scheduler-border">
                                        <legend className="scheduler-border">
                                            <h3>Курсы повышения квалификации</h3>
                                        </legend>

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
                                                    <input type="date" className="form-control" id="id_endingCourse" name="id_endingCourse" />
                                                </div>
                                            </div>
                                        </details>

                                        <div id="courseList">
                                        </div>
                                        <a href="javascript:AddCourse()" onClick={this.AddCourse}>Добавить</a>
                                    </fieldset>

                                    {/* <!-- -------ОПЫТ РАБОТЫ----------- --> */}
                                    <fieldset className="scheduler-border">
                                        <legend className="scheduler-border">
                                            <h3>Опыт работы</h3>
                                        </legend>

                                        <details id="experienceDetails">
                                            <summary>Mесто работы</summary>

                                            <div className="row">
                                                <div className="form-group col-12 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                                    <label for="id_startWork">Начало работы:</label>
                                                    <input type="date" className="form-control" id="id_startWork" name="id_startWork" />
                                                </div>
                                                <div className="form-group col-12 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                                    <label for="id_endWork">Конец работы:</label>
                                                    <input type="date" className="form-control" id="id_endWork" name="id_endWork" />
                                                </div>
                                                <div className="form-group col-12 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                                    <div className="custom-control custom-checkbox custom-control-inline ccb-right">
                                                        <input type="checkbox" id="id_stillWorking" className="custom-control-input" name="id_stillWorking" />
                                                        <label className="custom-control-label" for="id_stillWorking">Еще работаю</label>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                    <label for="id_positionWork">Должность:</label>
                                                    <input type="text" className="form-control" id="id_positionWork" name="id_positionWork"
                                                        placeholder="Должность" />
                                                </div>
                                                <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                    <label for="id_companyName">Название компании:</label>
                                                    <input type="text" className="form-control" id="id_companyName" name="id_companyName"
                                                        placeholder="Название компании" />
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="form-group col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                    <label for="id_jobDuties_1">Обязанности:</label>
                                                    <textarea className="form-control" id="id_jobDuties_1" name="id_jobDuties"></textarea>
                                                </div>
                                            </div>

                                        </details>

                                        <div id="experienceList">
                                        </div>
                                        <a href="javascript:AddExperience()" onClick={this.AddExperience}>Добавить</a>

                                    </fieldset>

                                    {/* <!-- -------РЕКОМЕНДАЦИИ----------- --> */}
                                    <fieldset className="scheduler-border">
                                        <legend className="scheduler-border">
                                            <h3>Рекомендации</h3>
                                        </legend>

                                        <div className="row">
                                            <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <label for="id_personRecommending">ФИО рекомендующего:</label>
                                                <input type="text" className="form-control" id="id_personRecommending" name="id_personRecommending"
                                                    placeholder="ФИО рекомендующего" />
                                            </div>
                                            <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <label for="id_company">Компания, должность:</label>
                                                <input type="text" className="form-control" id="id_company" name="id_company"
                                                    placeholder="Компания, должность" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <label for="id_emailCompany">Электронная почта:</label>
                                                <input type="email" className="form-control" id="id_emailCompany" name="id_emailCompany"
                                                    placeholder="address@site.com" />
                                            </div>
                                            <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <label for="id_phoneCompany">Телефон:</label>
                                                <input type="text" className="form-control" id="id_phoneCompany" name="id_phoneCompany"
                                                    placeholder="+380661234567" />
                                            </div>
                                        </div>
                                    </fieldset>

                                    {/* <!-- -------ДОПОЛНИТЕЛЬНАЯ ИНФО----------- --> */}
                                    <fieldset className="scheduler-border">
                                        <legend className="scheduler-border">
                                            <h3>Дополнительная информация</h3>
                                        </legend>

                                        <div className="row">
                                            <div className="form-group col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <label for="id_driverLicense">Права категории:</label>
                                                <div className="custom-control custom-checkbox custom-control-inline ccb-right">
                                                    <input type="checkbox" id="id_driverLicenseA1" className="custom-control-input" name="id_driverLicenseA1" />
                                                    <label className="custom-control-label" for="id_driverLicenseA1">A1</label>
                                                </div>
                                                <div className="custom-control custom-checkbox custom-control-inline ccb-right">
                                                    <input type="checkbox" id="id_driverLicenseA" className="custom-control-input" name="id_driverLicenseA" />
                                                    <label className="custom-control-label" for="id_driverLicenseA">A</label>
                                                </div>
                                                <div className="custom-control custom-checkbox custom-control-inline ccb-right">
                                                    <input type="checkbox" id="id_driverLicenseB1" className="custom-control-input" name="id_driverLicenseB1" />
                                                    <label className="custom-control-label" for="id_driverLicenseB1">B1</label>
                                                </div>
                                                <div className="custom-control custom-checkbox custom-control-inline ccb-right">
                                                    <input type="checkbox" id="id_driverLicenseB" className="custom-control-input" name="id_driverLicenseB" />
                                                    <label className="custom-control-label" for="id_driverLicenseB">B</label>
                                                </div>
                                                <div className="custom-control custom-checkbox custom-control-inline ccb-right">
                                                    <input type="checkbox" id="id_driverLicenseC1" className="custom-control-input" name="id_driverLicenseC1" />
                                                    <label className="custom-control-label" for="id_driverLicenseC1">C1</label>
                                                </div>
                                                <div className="custom-control custom-checkbox custom-control-inline ccb-right">
                                                    <input type="checkbox" id="id_driverLicenseC" className="custom-control-input" name="id_driverLicenseC" />
                                                    <label className="custom-control-label" for="id_driverLicenseC">C</label>
                                                </div>
                                                <div className="custom-control custom-checkbox custom-control-inline ccb-right">
                                                    <input type="checkbox" id="id_driverLicenseD1" className="custom-control-input" name="id_driverLicenseD1" />
                                                    <label className="custom-control-label" for="id_driverLicenseD1">D1</label>
                                                </div>
                                                <div className="custom-control custom-checkbox custom-control-inline ccb-right">
                                                    <input type="checkbox" id="id_driverLicenseD" className="custom-control-input" name="id_driverLicenseD" />
                                                    <label className="custom-control-label" for="id_driverLicenseD">D</label>
                                                </div>
                                                <div className="custom-control custom-checkbox custom-control-inline ccb-right">
                                                    <input type="checkbox" id="id_driverLicenseT" className="custom-control-input" name="id_driverLicenseT" />
                                                    <label className="custom-control-label" for="id_driverLicenseT">T</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="form-group col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <div className="custom-control custom-checkbox custom-control-inline ccb-right">
                                                    <input type="checkbox" id="id_privatCar" className="custom-control-input" name="id_privatCar" />
                                                    <label className="custom-control-label" for="id_privatCar">Есть личный
                                        автомобиль</label>
                                                </div>
                                            </div>
                                            <div className="form-group col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <div className="custom-control custom-checkbox custom-control-inline ccb-right">
                                                    <input type="checkbox" id="id_army" className="custom-control-input" name="id_army" />
                                                    <label className="custom-control-label" for="id_army">Служба в армии</label>
                                                </div>
                                            </div>
                                            <div className="form-group col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <label for="id_hobby">Хобби:</label>
                                                <textarea className="form-control" id="id_hobby" name="id_hobby"></textarea>
                                            </div>
                                            <div className="form-group col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <label for="id_personalQualities">Личные качества:</label>
                                                <textarea className="form-control" id="id_personalQualities" name="id_personalQualities"></textarea>
                                            </div>
                                            <div className="form-group col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <label for="id_professionalSkills">Профессиональные навыки:</label>
                                                <textarea className="form-control" id="id_professionalSkills" name="id_professionalSkills"></textarea>
                                            </div>
                                        </div>
                                    </fieldset>

                                    <button type="submit" className="btn btn-primary " id="sbmResume">Отправить</button>

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
export default UserData;

