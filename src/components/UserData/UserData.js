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
        this.API_ADDRESS = "http://localhost:55555/userdata";
    }
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
                <div>Loading...</div>
            );
        }
        else {
            return (
                <div className="container">
                    <div className="container-fluid ">
                        {/* <!-- First container --> */}
                        <div className="divData col-6">
                            <div>
                                <form action="http://localhost:55555/userdata" method="POST">
                                    <table>
                                        <tr>
                                            <td> <label className="control-label " for="id_userPosition">Желаемая должность:</label></td>
                                            <td className="col-sm-8">
                                                <input type="text" className="form-control" id="id_userPosition" placeholder="Введите название должности" />
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
                                                <input type="text" className="form-control" id="id_lastName" placeholder="Введите фамилию" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_firstName">Имя:</label></td>
                                            <td className="col-sm-8">
                                                <input type="text" className="form-control" id="id_firstName" placeholder="Введите имя" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_middleName">Отчество:</label></td>
                                            <td className="col-sm-8">
                                                <input type="text" className="form-control" id="id_middleName" placeholder="Введите отчество" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_birthOfDate">Дата рождения:</label></td>
                                            <td className="col-sm-8">
                                                <input type="date" className="form-control" id="id_birthOfDate" />
                                            </td>
                                        </tr>
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
                                                <input type="text" className="form-control" id="id_cityOfResidence" placeholder="Введите название города" />
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
                                                <input type="" className="form-control" id="id_phone" placeholder="+380661234567" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_email">Электронная почта:</label></td>
                                            <td className="col-sm-8">
                                                <input type="email" className="form-control" id="id_email" placeholder="address@site.com" />
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
                                                <input type="text" className="form-control" id="id_nationality" placeholder="Введите национальность" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_relocate">Готовность на переезд:</label></td>
                                            <td >
                                                <input type="checkbox" id="id_relocate" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_desiredSalary">Желаемая зарплата:</label></td>
                                            <td className="col-sm-8">
                                                <input type="number" className="form-control" id="id_desiredSalary" step="1" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_employment">Занятось:</label></td>
                                            <td className="col-sm-8">
                                                <select className="form-control" id="id_employment">
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
                                                <select className="form-control" id="id_schedule">
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
                                                <input type="checkbox" id="id_businessTrip" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_maritalStatus">Семейное положение:</label></td>
                                            <td className="col-sm-8">
                                                <input type="text" className="form-control" id="id_maritalStatus" placeholder="Введите семейное положение" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_children">Дети:</label></td>
                                            <td >
                                                <input className="control-input" type="checkbox" id="id_children" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_education">Основное образование:</label></td>
                                            <td className="col-sm-8">
                                                <select className="form-control" id="id_education">
                                                    <option>Общее среднее образование</option>
                                                    <option>Профессионально-техническое образование</option>
                                                    <option>Высшее образования</option>
                                                    <option>Аспирантура</option>
                                                    <option>Докторантура</option>
                                                </select>
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
                                                <input type="text" className="form-control" id="id_langName" placeholder="Введите язык" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_level">Уровень владения:</label></td>
                                            <td className="col-sm-8">
                                                <select className="form-control" id="id_level">
                                                    <option>A1 - начальный</option>
                                                    <option>A2 - базовый</option>
                                                    <option>B1 - средний</option>
                                                    <option>B2 - выше среднего</option>
                                                    <option>C1 - продвинутый</option>
                                                    <option>C2 - профессиональный</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h2>Образование</h2>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_institutName">Наименование учебного заведения:</label></td>
                                            <td className="col-sm-8">
                                                <input type="text" className="form-control" id="id_institutName" placeholder="Введите наименование учебного заведения" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_levelEducation">Уровень образование:</label></td>
                                            <td className="col-sm-8">
                                                <select className="form-control" id="id_levelEducation">
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
                                                <input type="text" className="form-control" id="id_faculty" placeholder="Введите факультет" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_specialty">Специальность:</label></td>
                                            <td className="col-sm-8">
                                                <input type="text" className="form-control" id="id_specialty" placeholder="Введите специальность" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_ending">Год окончания:</label></td>
                                            <td className="col-sm-8">
                                                <input type="date" className="form-control" id="id_ending" />
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
                                                <input type="text" className="form-control" id="id_courseName" placeholder="Название курса" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_organization">Проводившая организация:</label></td>
                                            <td className="col-sm-8">
                                                <input type="text" className="form-control" id="id_organization" placeholder="Проводившая организация" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_endingCourse">Год окончания:</label></td>
                                            <td className="col-sm-8">
                                                <input type="date" className="form-control" id="id_endingCourse" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h2>Опыт работы</h2>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_startWork">Начало работы:</label></td>
                                            <td className="col-sm-8">
                                                <input type="date" className="form-control" id="id_startWork" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_endWork">Конец работы:</label></td>
                                            <td className="col-sm-8">
                                                <input type="date" className="form-control" id="id_endWork" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_stillWorking">Еще работаю:</label></td>
                                            <td >
                                                <input className="control-input" type="checkbox" id="id_stillWorking" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_positionWork">Должность:</label></td>
                                            <td className="col-sm-8">
                                                <input type="text" className="form-control" id="id_positionWork" placeholder="Должность" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_companyName">Название компании:</label></td>
                                            <td className="col-sm-8">
                                                <input type="text" className="form-control" id="id_companyName" placeholder="Название компании" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_jobDuties">Обязанности:</label></td>
                                            <td className="col-sm-8">
                                                <textarea className="form-control" id="id_jobDuties" ></textarea>
                                                {/* <!-- <input type="text" className="form-control" id="id_jobDuties" placeholder="Проводившая организация" /> --> */}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h2>Рекомендации</h2>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_personRecommending">ФИО рекомендующего:</label></td>
                                            <td className="col-sm-8">
                                                <input type="text" className="form-control" id="id_personRecommending" placeholder="ФИО рекомендующего" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_company">Компания, должность:</label></td>
                                            <td className="col-sm-8">
                                                <input type="text" className="form-control" id="id_company" placeholder="Компания, должность" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_emailCompany">Электронная почта:</label></td>
                                            <td className="col-sm-8">
                                                <input type="email" className="form-control" id="id_emailCompany" placeholder="address@site.com" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_phoneCompany">Телефон:</label></td>
                                            <td className="col-sm-8">
                                                <input type="" className="form-control" id="id_phoneCompany" placeholder="+380661234567" />
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
                                                <label className="checkbox-inline"><input type="checkbox" id="id_driverLicense" value="" />A1</label>
                                                <label className="checkbox-inline"><input type="checkbox" id="id_driverLicense" value="" />A</label>
                                                <label className="checkbox-inline"><input type="checkbox" id="id_driverLicense" value="" />B1</label>
                                                <label className="checkbox-inline"><input type="checkbox" id="id_driverLicense" value="" />B</label>
                                                <label className="checkbox-inline"><input type="checkbox" id="id_driverLicense" value="" />C1</label>
                                                <label className="checkbox-inline"><input type="checkbox" id="id_driverLicense" value="" />C</label>
                                                <label className="checkbox-inline"><input type="checkbox" id="id_driverLicense" value="" />D1</label>
                                                <label className="checkbox-inline"><input type="checkbox" id="id_driverLicense" value="" />D</label>
                                                <label className="checkbox-inline"><input type="checkbox" id="id_driverLicense" value="" />T</label>
                                                {/* <!-- <input type="text" className="form-control" id="id_company" placeholder="Компания, должность" /> --> */}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_privatCar">Есть личный автомобиль:</label></td>
                                            <td >
                                                <input className="control-input" type="checkbox" id="id_privatCar" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_army">Служба в армии:</label></td>
                                            <td >
                                                <input className="control-input" type="checkbox" id="id_army" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_hobby">Хобби:</label></td>
                                            <td className="col-sm-8">
                                                <textarea className="form-control" id="id_hobby" ></textarea>
                                                {/* <!-- <input type="text" className="form-control" id="id_jobDuties" placeholder="Проводившая организация" /> --> */}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_personalQualities">Личные качества:</label></td>
                                            <td className="col-sm-8">
                                                <textarea className="form-control" id="id_personalQualities" ></textarea>
                                                {/* <!-- <input type="text" className="form-control" id="id_jobDuties" placeholder="Проводившая организация" /> --> */}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> <label className="control-label" for="id_professionalSkills">Профессиональные навыки:</label></td>
                                            <td className="col-sm-8">
                                                <textarea className="form-control" id="id_professionalSkills" ></textarea>
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
export default UserData;