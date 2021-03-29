import React from 'react';
import axios from 'axios';
import '../../../src/App.css';
class UserData extends React.Component {
    constructor(props) {
        super(props);
        //Начальное состояние состояния (state)
        this.state = {
            users: null
        }
<<<<<<< HEAD
        this.API_ADDRESS = "http://localhost:55555/userdata";
    }
=======
        this.API_ADDRESS = "http://localhost:55555/userdata";      
     }


>>>>>>> 5f541cbd690d8c1ab09bb8fdf7925733e3c8c1f1
    componentDidMount() {
        //Встроенный метод для GET (и только) запросов
        fetch(this.API_ADDRESS)
            .then((response) => response.json())
            .then((data) => {
                // console.log(data);
                this.setState({
                    items: data
                });
            });
    }

    

    render() {
        if (this.state.items == null) {
            return (
                <div className="spinner-border text-muted"></div>
            );
        }
        else {
            return (
<<<<<<< HEAD
                <div className="container-fluid mainUserData">

=======
                <div className="container">
>>>>>>> 5f541cbd690d8c1ab09bb8fdf7925733e3c8c1f1
                    <div className="container-fluid ">
                        {/* <!-- First container --> */}
                        <div className="divData ">
                            <div>
                                <form action="http://localhost:55555/userdata" method="POST">
<<<<<<< HEAD

                                    {/* <!-- -------ОСНОВНАЯ ИНФО----------- --> */}
                                    <fieldset className="form-group p-3">
                                        <legend className="w-auto px-2">
                                            <h3>Основная информация</h3>
                                        </legend>

                                        <div className="row">
                                            <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <label for="id_userPosition">Желаемая должность:</label>
                                                <input id="id_userPosition" type="text" className="form-control"
                                                    placeholder="Введите должность" />
                                            </div>
                                            <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <label for="id_lastName">Фамилия:</label>
                                                <input id="id_lastName" type="text" className="form-control" placeholder="Введите фамилию" />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <div className="userPhoto">
                                                    <label>
                                                        <img className="avatar" src="../../images/dance2.jpg"
                                                            alt="Нажмите для выбора файла" />
                                                        <input type="file" id="id_imgUpl" name="id_imgUpl" hidden />
                                                    </label>
                                                </div>
                                            </div>

                                            <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <label for="id_firstName">Имя:</label>
                                                <input type="text" className="form-control" id="id_firstName" placeholder="Введите имя" />
                                                <label for="id_middleName">Отчество:</label>
                                                <input type="text" className="form-control" id="id_middleName"
                                                    placeholder="Введите отчество" />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <label for="id_birthOfDate">Дата рождения:</label>
                                                <input type="date" className="form-control" id="id_birthOfDate" />
                                            </div>
                                            <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <label for="id_cityOfResidence">Город проживания:</label>
                                                <input type="text" className="form-control" id="id_cityOfResidence"
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
                                                <input type="text" className="form-control" id="id_phone" placeholder="+380661234567" />
                                            </div>
                                            <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <label for="id_lastName">Электронная почта:</label>
                                                <input type="email" className="form-control" id="id_lastName"
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
                                                <input type="text" className="form-control" id="id_nationality"
                                                    placeholder="Введите национальность" />
                                            </div>
                                            <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <label for="id_desiredSalary">Желаемая зарплата:</label>

                                                <div className="input-group mb-2">
                                                    <input type="number" className="form-control" id="id_desiredSalary" placeholder="0"
                                                        step="1" min="0" />
                                                    <div className="input-group-append">
                                                        <select className="form-control" id="id_currency">
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
                                                <select className="form-control" id="id_employment" placeholder="выбрать">
=======
                                    <table>
                                        <tr>
                                            <td> <label className="control-label " for="id_userPosition">Желаемая должность:</label></td>
                                            <td className="col-sm-8">
                                                <input type="text" className="form-control" id="id_userPosition"name = "id_userPosition" placeholder="Введите название должности" />
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
                                                <input type="text" className="form-control" id="id_lastName" name ="id_lastName" placeholder="Введите фамилию" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_firstName">Имя:</label></td>
                                            <td className="col-sm-8">
                                                <input type="text" className="form-control" id="id_firstName" name = "id_firstName" placeholder="Введите имя" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_middleName">Отчество:</label></td>
                                            <td className="col-sm-8">
                                                <input type="text" className="form-control" id="id_middleName" name = "id_middleName" placeholder="Введите отчество" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_birthOfDate">Дата рождения:</label></td>
                                            <td className="col-sm-8">
                                                <input type="date" className="form-control" id="id_birthOfDate" name = "id_birthOfDate" />
                                            </td>
                                        </tr>
                                        <tr className="form-group">
                                            <td>
                                                <label for="imgup">Изображение:</label>
                                            </td>
                                            <td className="col-sm-8">
                                                <input type="file" id="imgup" className="form-control" name ="fupload" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_cityOfResidence">Город проживания:</label></td>
                                            <td className="col-sm-8">
                                                <input type="text" className="form-control" id="id_cityOfResidence" name="id_cityOfResidence" placeholder="Введите название города" />
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
                                                <input type="" className="form-control" id="id_phone" name ="id_phone" placeholder="+380661234567" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_email">Электронная почта:</label></td>
                                            <td className="col-sm-8">
                                                <input type="email" className="form-control" id="id_email" name="id_email" placeholder="address@site.com" />
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
                                                <input type="text" className="form-control" id="id_nationality" name ="id_nationality" placeholder="Введите национальность" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_relocate">Готовность на переезд:</label></td>
                                            <td >
                                                <input type="checkbox" id="id_relocate" name ="id_relocate"   />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_desiredSalary">Желаемая зарплата:</label></td>
                                            <td className="col-sm-8">
                                                <input type="number" className="form-control" id="id_desiredSalary" name ="id_desiredSalary" step="1" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_employment">Занятось:</label></td>
                                            <td className="col-sm-8">
                                                <select className="form-control" id="id_employment" name="id_employment">
>>>>>>> 5f541cbd690d8c1ab09bb8fdf7925733e3c8c1f1
                                                    <option>Полная занятость</option>
                                                    <option>Частичная занятость</option>
                                                    <option>Проектная работа</option>
                                                    <option>Волонтерство</option>
                                                    <option>Стажировка</option>
                                                </select>
<<<<<<< HEAD
                                            </div>
                                            <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <label for="id_schedule">График работы:</label>
                                                <select className="form-control" id="id_schedule">
=======
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_schedule">График работы:</label></td>
                                            <td className="col-sm-8">
                                                <select className="form-control" id="id_schedule"name="id_schedule">
>>>>>>> 5f541cbd690d8c1ab09bb8fdf7925733e3c8c1f1
                                                    <option>Полный день</option>
                                                    <option>Сменный график</option>
                                                    <option>Гибкий график</option>
                                                    <option>Удаленная работа</option>
                                                    <option>Вахтовый метод</option>
                                                </select>
<<<<<<< HEAD
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <div className="custom-control custom-checkbox custom-control-inline ccb-right">
                                                    <input type="checkbox" id="id_businessTrip" className="custom-control-input" />
                                                    <label className="custom-control-label" for="id_businessTrip">Командировки</label>
                                                </div>
                                            </div>
                                            <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <div className="custom-control custom-checkbox custom-control-inline ccb-right">
                                                    <input type="checkbox" id="id_relocate" className="custom-control-input" />
                                                    <label className="custom-control-label" for="id_relocate">Готовность на переезд</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <label for="id_maritalStatus">Семейное положение:</label>
                                                <select className="form-control" id="id_maritalStatus">
                                                    <option>Замужем</option>
                                                    <option>Не замужем</option>
                                                    <option>Женат</option>
                                                    <option>Не женат</option>
                                                </select>
                                                <div
                                                    className="custom-control custom-checkbox custom-control-inline ccb-right childrenCheckBox">
                                                    <input type="checkbox" id="id_children" className="custom-control-input" />
                                                    <label className="custom-control-label" for="id_children">Дети</label>
                                                </div>
                                            </div>
                                            <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <label for="id_education">Основное образование:</label>
                                                <select className="form-control" id="id_education">
=======
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_businessTrip">Командировки:</label></td>
                                            <td >
                                                <input type="checkbox" id="id_businessTrip" name="id_businessTrip" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_maritalStatus">Семейное положение:</label></td>
                                            <td className="col-sm-8">
                                                <input type="text" className="form-control" id="id_maritalStatus" name ="id_maritalStatus" placeholder="Введите семейное положение" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_children">Дети:</label></td>
                                            <td >
                                                <input className="control-input" type="checkbox" id="id_children" name ="id_children"   />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_education">Основное образование:</label></td>
                                            <td className="col-sm-8">
                                                <select className="form-control" id="id_education" name ="id_education">
>>>>>>> 5f541cbd690d8c1ab09bb8fdf7925733e3c8c1f1
                                                    <option>Общее среднее образование</option>
                                                    <option>Профессионально-техническое образование</option>
                                                    <option>Высшее образования</option>
                                                    <option>Аспирантура</option>
                                                    <option>Докторантура</option>
                                                </select>
<<<<<<< HEAD
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
                                                    <input type="text" className="form-control" id="id_langName"
                                                        placeholder="Введите язык" />
                                                </div>
                                                <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                    <label for="id_level">Уровень владения:</label>
                                                    <select className="form-control" id="id_level">
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
                                        <a href="javascript:AddLang()">Добавить</a>

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
                                                    <input type="text" className="form-control" id="id_institutName"
                                                        placeholder="Введите наименование учебного заведения" />
                                                </div>
                                                <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                    <label for="id_levelEducation">Уровень образование:</label>
                                                    <select className="form-control" id="id_levelEducation">
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
                                                    <input type="text" className="form-control" id="id_faculty"
                                                        placeholder="Введите факультет" />
                                                </div>
                                                <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                    <label for="id_specialty">Специальность:</label>
                                                    <input type="text" className="form-control" id="id_specialty"
                                                        placeholder="Введите специальность" />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                    <label for="id_ending">Год окончания:</label>
                                                    <input type="date" className="form-control" id="id_ending" />
                                                </div>
                                            </div>
                                        </details>

                                        <div id="educationList">
                                        </div>
                                        <a href="javascript:AddScheduler()">Добавить</a>
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
                                                    <input type="text" className="form-control" id="id_courseName"
                                                        placeholder="Название курса" />
                                                </div>
                                                <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                    <label for="id_organization">Проводившая организация:</label>
                                                    <input type="text" className="form-control" id="id_organization"
                                                        placeholder="Проводившая организация" />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                    <label for="id_endingCourse">Год окончания:</label>
                                                    <input type="date" className="form-control" id="id_endingCourse" />
                                                </div>
                                            </div>
                                        </details>

                                        <div id="courseList">
                                        </div>
                                        <a href="javascript:AddCourse()">Добавить</a>
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
                                                    <label for="id_startWork_1">Начало работы:</label>
                                                    <input type="date" className="form-control" id="id_startWork_1" />
                                                </div>
                                                <div className="form-group col-12 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                                    <label for="id_endWork_1">Конец работы:</label>
                                                    <input type="date" className="form-control" id="id_endWork_1" />
                                                </div>
                                                <div className="form-group col-12 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                                    <div className="custom-control custom-checkbox custom-control-inline ccb-right">
                                                        <input type="checkbox" id="id_stillWorking_1" className="custom-control-input" />
                                                        <label className="custom-control-label" for="id_stillWorking_1">Еще работаю</label>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                    <label for="id_positionWork_1">Должность:</label>
                                                    <input type="text" className="form-control" id="id_positionWork_1"
                                                        placeholder="Должность" />
                                                </div>
                                                <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                    <label for="id_companyName_1">Название компании:</label>
                                                    <input type="text" className="form-control" id="id_companyName_1"
                                                        placeholder="Название компании" />
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="form-group col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                    <label for="id_jobDuties_1">Обязанности:</label>
                                                    <textarea className="form-control" id="id_jobDuties_1"></textarea>
                                                </div>
                                            </div>

                                        </details>

                                        <div id="experienceList">
                                        </div>
                                        <a href="javascript:AddExperience()">Добавить</a>

                                    </fieldset>

                                    {/* <!-- -------РЕКОМЕНДАЦИИ----------- --> */}
                                    <fieldset className="scheduler-border">
                                        <legend className="scheduler-border">
                                            <h3>Рекомендации</h3>
                                        </legend>

                                        <div className="row">
                                            <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <label for="id_personRecommending">ФИО рекомендующего:</label>
                                                <input type="text" className="form-control" id="id_personRecommending"
                                                    placeholder="ФИО рекомендующего" />
                                            </div>
                                            <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <label for="id_company">Компания, должность:</label>
                                                <input type="text" className="form-control" id="id_company"
                                                    placeholder="Компания, должность" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <label for="id_emailCompany">Электронная почта:</label>
                                                <input type="email" className="form-control" id="id_emailCompany"
                                                    placeholder="address@site.com" />
                                            </div>
                                            <div className="form-group col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <label for="id_phoneCompany">Телефон:</label>
                                                <input type="text" className="form-control" id="id_phoneCompany"
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
                                                    <input type="checkbox" id="id_driverLicense" className="custom-control-input" />
                                                    <label className="custom-control-label" for="id_driverLicense">A1</label>
                                                </div>
                                                <div className="custom-control custom-checkbox custom-control-inline ccb-right">
                                                    <input type="checkbox" id="id_driverLicense" className="custom-control-input" />
                                                    <label className="custom-control-label" for="id_driverLicense">A</label>
                                                </div>
                                                <div className="custom-control custom-checkbox custom-control-inline ccb-right">
                                                    <input type="checkbox" id="id_driverLicense" className="custom-control-input" />
                                                    <label className="custom-control-label" for="id_driverLicense">B1</label>
                                                </div>
                                                <div className="custom-control custom-checkbox custom-control-inline ccb-right">
                                                    <input type="checkbox" id="id_driverLicense" className="custom-control-input" />
                                                    <label className="custom-control-label" for="id_driverLicense">B</label>
                                                </div>
                                                <div className="custom-control custom-checkbox custom-control-inline ccb-right">
                                                    <input type="checkbox" id="id_driverLicense" className="custom-control-input" />
                                                    <label className="custom-control-label" for="id_driverLicense">C1</label>
                                                </div>
                                                <div className="custom-control custom-checkbox custom-control-inline ccb-right">
                                                    <input type="checkbox" id="id_driverLicense" className="custom-control-input" />
                                                    <label className="custom-control-label" for="id_driverLicense">C</label>
                                                </div>
                                                <div className="custom-control custom-checkbox custom-control-inline ccb-right">
                                                    <input type="checkbox" id="id_driverLicense" className="custom-control-input" />
                                                    <label className="custom-control-label" for="id_driverLicense">D1</label>
                                                </div>
                                                <div className="custom-control custom-checkbox custom-control-inline ccb-right">
                                                    <input type="checkbox" id="id_driverLicense" className="custom-control-input" />
                                                    <label className="custom-control-label" for="id_driverLicense">D</label>
                                                </div>
                                                <div className="custom-control custom-checkbox custom-control-inline ccb-right">
                                                    <input type="checkbox" id="id_driverLicense" className="custom-control-input" />
                                                    <label className="custom-control-label" for="id_driverLicense">T</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="form-group col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <div className="custom-control custom-checkbox custom-control-inline ccb-right">
                                                    <input type="checkbox" id="id_privatCar" className="custom-control-input" />
                                                    <label className="custom-control-label" for="id_privatCar">Есть личный
                                        автомобиль</label>
                                                </div>
                                            </div>
                                            <div className="form-group col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <div className="custom-control custom-checkbox custom-control-inline ccb-right">
                                                    <input type="checkbox" id="id_army" className="custom-control-input" />
                                                    <label className="custom-control-label" for="id_army">Служба в армии</label>
                                                </div>
                                            </div>
                                            <div className="form-group col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <label for="id_hobby">Хобби:</label>
                                                <textarea className="form-control" id="id_hobby"></textarea>
                                            </div>                                           
                                            <div className="form-group col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <label for="id_personalQualities">Личные качества:</label>
                                                <textarea className="form-control" id="id_personalQualities"></textarea>
                                            </div>
                                            <div className="form-group col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <label for="id_professionalSkills">Профессиональные навыки:</label>
                                                <textarea className="form-control" id="id_professionalSkills"></textarea>
                                            </div>
                                        </div>
                                    </fieldset>

                                    <button type="submit" className="btn btn-primary " id="sbmResume">Отправить</button>

=======
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h2>Владение языками</h2>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_langName">Язык:</label></td>
                                            <td className="col-sm-8">
                                                <input type="text" className="form-control" id="id_langName"name="id_langName" placeholder="Введите язык" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_level">Уровень владения:</label></td>
                                            <td className="col-sm-8">
                                                <select className="form-control" id="id_level" name="id_level">
                                                    <option>A1 - начальный</option>
                                                    <option>A2 - базовый</option>
                                                    <option>B1 - средний</option>
                                                    <option>B2 - выше среднего</option>
                                                    <option>C1 - продвинутый</option>
                                                    <option>C2 - профессиональный</option>
                                                </select>
                                            </td>
                                        </tr>
                                        
                                        {/* <tr>
                                            <td> <label className="control-label" for="id_langName">Язык:</label></td>
                                            <td className="col-sm-8">
                                                <input type="text" className="form-control" id="id_langName"name="id_langName" placeholder="Введите язык" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_level">Уровень владения:</label></td>
                                            <td className="col-sm-8">
                                                <select className="form-control" id="id_level" name="id_level">
                                                    <option>A1 - начальный</option>
                                                    <option>A2 - базовый</option>
                                                    <option>B1 - средний</option>
                                                    <option>B2 - выше среднего</option>
                                                    <option>C1 - продвинутый</option>
                                                    <option>C2 - профессиональный</option>
                                                </select>
                                            </td>
                                        </tr> */}
                                        <tr>
                                            <td>
                                                <h2>Образование</h2>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_institutName">Наименование учебного заведения:</label></td>
                                            <td className="col-sm-8">
                                                <input type="text" className="form-control" id="id_institutName" name="id_institutName" placeholder="Введите наименование учебного заведения" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_levelEducation">Уровень образование:</label></td>
                                            <td className="col-sm-8">
                                                <select className="form-control" id="id_levelEducation" name="id_levelEducation">
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
                                                <input type="text" className="form-control" id="id_faculty" name="id_faculty"placeholder="Введите факультет" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_specialty">Специальность:</label></td>
                                            <td className="col-sm-8">
                                                <input type="text" className="form-control" id="id_specialty" name="id_specialty" placeholder="Введите специальность" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_ending">Год окончания:</label></td>
                                            <td className="col-sm-8">
                                                <input type="date" className="form-control" id="id_ending" name="id_ending" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h2>Курсы повышения квалификации</h2>
                                            </td>
                                        </tr>
                                        <tr>
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
                                        </tr>


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



                                        <tr>
                                            <td>
                                                <h2>Опыт работы</h2>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_startWork">Начало работы:</label></td>
                                            <td className="col-sm-8">
                                                <input type="date" className="form-control" id="id_startWork" name="id_startWork" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_endWork">Конец работы:</label></td>
                                            <td className="col-sm-8">
                                                <input type="date" className="form-control" id="id_endWork" name="id_endWork" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_stillWorking">Еще работаю:</label></td>
                                            <td >
                                                <input className="control-input" type="checkbox" id="id_stillWorking"name="id_stillWorking"   />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_positionWork">Должность:</label></td>
                                            <td className="col-sm-8">
                                                <input type="text" className="form-control" id="id_positionWork" name="id_positionWork"placeholder="Должность" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_companyName">Название компании:</label></td>
                                            <td className="col-sm-8">
                                                <input type="text" className="form-control" id="id_companyName" name="id_companyName"placeholder="Название компании" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_jobDuties">Обязанности:</label></td>
                                            <td className="col-sm-8">
                                                <textarea className="form-control" id="id_jobDuties" name="id_jobDuties"></textarea>
                                                {/* <!-- <input type="text" className="form-control" id="id_jobDuties" placeholder="Проводившая организация" /> --> */}
                                            </td>
                                        </tr>

                                     {/* ///////////////////////// */}
                                        <tr>
                                            <td>
                                                <h2>Опыт работы</h2>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_startWork">Начало работы:</label></td>
                                            <td className="col-sm-8">
                                                <input type="date" className="form-control" id="id_startWork" name="id_startWork" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_endWork">Конец работы:</label></td>
                                            <td className="col-sm-8">
                                                <input type="date" className="form-control" id="id_endWork" name="id_endWork" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_stillWorking">Еще работаю:</label></td>
                                            <td >
                                                <input className="control-input" type="checkbox" id="id_stillWorking"name="id_stillWorking"   />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_positionWork">Должность:</label></td>
                                            <td className="col-sm-8">
                                                <input type="text" className="form-control" id="id_positionWork" name="id_positionWork"placeholder="Должность" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_companyName">Название компании:</label></td>
                                            <td className="col-sm-8">
                                                <input type="text" className="form-control" id="id_companyName" name="id_companyName"placeholder="Название компании" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_jobDuties">Обязанности:</label></td>
                                            <td className="col-sm-8">
                                                <textarea className="form-control" id="id_jobDuties" name="id_jobDuties"></textarea>
                                                {/* <!-- <input type="text" className="form-control" id="id_jobDuties" placeholder="Проводившая организация" /> --> */}
                                            </td>
                                        </tr>
                                        {/* //////// */}





                                        <tr>
                                            <td>
                                                <h2>Рекомендации</h2>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_personRecommending">ФИО рекомендующего:</label></td>
                                            <td className="col-sm-8">
                                                <input type="text" className="form-control" id="id_personRecommending" name="id_personRecommending" placeholder="ФИО рекомендующего" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_company">Компания, должность:</label></td>
                                            <td className="col-sm-8">
                                                <input type="text" className="form-control" id="id_company" name="id_company" placeholder="Компания, должность" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_emailCompany">Электронная почта:</label></td>
                                            <td className="col-sm-8">
                                                <input type="email" className="form-control" id="id_emailCompany"name="id_emailCompany" placeholder="address@site.com" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_phoneCompany">Телефон:</label></td>
                                            <td className="col-sm-8">
                                                <input type="" className="form-control" id="id_phoneCompany"name="id_phoneCompany" placeholder="+380661234567" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h2>Дополнительная информация</h2>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_driverLicense">Права категории:</label></td>
                                            <td className="col-sm-8">
                                                <label className="checkbox-inline"><input type="checkbox" id="id_driverLicenseA1" name="id_driverLicenseA1"/>A1</label>
                                                <label className="checkbox-inline"><input type="checkbox" id="id_driverLicenseA" name="id_driverLicenseA"/>A</label>
                                                <label className="checkbox-inline"><input type="checkbox" id="id_driverLicenseB1" name="id_driverLicenseB1"/>B1</label>
                                                <label className="checkbox-inline"><input type="checkbox" id="id_driverLicenseB" name="id_driverLicenseB"/>B</label>
                                                <label className="checkbox-inline"><input type="checkbox" id="id_driverLicenseC1" name="id_driverLicenseC1"/>C1</label>
                                                <label className="checkbox-inline"><input type="checkbox" id="id_driverLicenseC" name="id_driverLicenseC"/>C</label>
                                                <label className="checkbox-inline"><input type="checkbox" id="id_driverLicenseD1" name="id_driverLicenseD1"/>D1</label>
                                                <label className="checkbox-inline"><input type="checkbox" id="id_driverLicenseD" name="id_driverLicenseD"/>D</label>
                                                <label className="checkbox-inline"><input type="checkbox" id="id_driverLicenseT" name="id_driverLicenseT"/>T</label>
                                                {/* <!-- <input type="text" className="form-control" id="id_company" placeholder="Компания, должность" /> --> */}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_privatCar">Есть личный автомобиль:</label></td>
                                            <td >
                                                <input className="control-input" type="checkbox" id="id_privatCar"name="id_privatCar" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_army">Служба в армии:</label></td>
                                            <td >
                                                <input className="control-input" type="checkbox" id="id_army"name="id_army"/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_hobby">Хобби:</label></td>
                                            <td className="col-sm-8">
                                                <textarea className="form-control" id="id_hobby" name="id_hobby"></textarea>
                                                {/* <!-- <input type="text" className="form-control" id="id_jobDuties" placeholder="Проводившая организация" /> --> */}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_personalQualities">Личные качества:</label></td>
                                            <td className="col-sm-8">
                                                <textarea className="form-control" id="id_personalQualities"name="id_personalQualities" ></textarea>
                                                {/* <!-- <input type="text" className="form-control" id="id_jobDuties" placeholder="Проводившая организация" /> --> */}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_professionalSkills">Профессиональные навыки:</label></td>
                                            <td className="col-sm-8">
                                                <textarea className="form-control" id="id_professionalSkills"name="id_professionalSkills" ></textarea>
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
>>>>>>> 5f541cbd690d8c1ab09bb8fdf7925733e3c8c1f1
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