import React from 'react';

import './Template1.css';

import avatar from '../../../images/avatar.png';
import location from '../../../images/location.png';
import phone from '../../../images/phone.png';
import email from '../../../images/email.png';

class Template1 extends React.Component {

    constructor(props) {

        super(props);

        //Начальное состояние состояния (state)
        this.state = {
            users: null
        }

        this.API_BASE_ADDRESS = "http://localhost:55555";
    }

    componentDidMount() {

        //Встроенный метод для GET (и только) запросов
        fetch(this.API_BASE_ADDRESS)
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
                                <img id="avatar" src={avatar} className="rounded mx-auto d-block" alt="avatar" />
                                <div className="row justify-content-start" id='full-name'>
                                    <div className="mr-3 text-capitalize text-break name-text">иванова</div>
                                    <div className="mr-3 text-capitalize name-text">ольга</div>
                                    <div className="mr-3 text-capitalize name-text">Викторовна</div>
                                </div>

                                <hr className="style1" />

                                <div className="col header-text">Должность
                                    <div className="col main-text">Бухгалтер</div>
                                </div>
                                <div className="col header-text">Возраст
                                    <div className="col main-text">47</div>
                                </div>
                                <div className="col header-text">Контакты</div>

                                <div className="col text-capitalize "><img className="icon-item" src={location} alt="location" />
                                    Запорожье</div>
                                <div className="col "><img className="icon-item" src={phone} alt="phone" />
                                    +380661212123</div>
                                <div className="col long-text "><img className="icon-item" src={email} alt="email" />
                                    ivanova_olga@gmail.com</div>

                                <div className="col text-nowrap header-text" >Водительские права
                                    <div className="col main-text">B, C, есть личный авто</div>
                                </div>

                                <div className="col header-text">Гражданство
                                    <div className="col main-text">украинка</div>
                                </div>
                                <div className="col text-nowrap header-text">Семейное положение
                                    <div className="col main-text">замужем, есть дети</div>
                                </div>
                                <div className="col text-nowrap header-text">Желаемая зарплата
                                    <div className="col main-text">500$</div>
                                </div>
                                <div className="col header-text">Занятость
                                    <div className="col main-text">полная, полный день, командировки, готовность на переезд</div>
                                </div>
                                <div className="col header-text">Языки
                                    <div className="col main-text">английский, В1</div>
                                    <div className="col main-text">украинский, С1</div>
                                </div>
                                <div className="col header-text">Армия
                                </div>



                            </div>

                            {/* right-container */}
                            <div className="col" id="right-container">
                                <div className="col header-text border box">Опыт работы </div>
                                <div className="list-group ">
                                    <div className="list-group-item ">
                                        <div className="d-flex w-100 justify-content-between">
                                            <h5 className="mb-1">государственная служба</h5>
                                            <h5 className="mb-1 years">2000-2007</h5>
                                        </div>
                                        <p className="mb-1" >менеджер</p>
                                        <small>ведение клиентов, продажи</small>
                                    </div>
                                    <div className="list-group-item ">
                                        <div className="d-flex w-100 justify-content-between">
                                            <h5 className="mb-1">государственная служба</h5>
                                            <h5 className="mb-1 years">2007-2022</h5>
                                        </div>
                                        <p className="mb-1" >бухгалтер</p>
                                        <small>бухгалтерия предприятия</small>
                                    </div>
                                </div>

                                <div className="col header-text border box">Образование</div>
                                <div className="list-group ">
                                    <div className="list-group-item ">
                                        <div className="d-flex w-100 justify-content-between">
                                            <h5 className="mb-1">Университет</h5>
                                            <h5 className="mb-1 years">2000</h5>
                                        </div>
                                        <p className="mb-1" >менеджмент и ВЭД</p>
                                        <small>менеджер среднего звена, бакалавр</small>
                                    </div>
                                </div>

                                <div className="col header-text border box">Курсы</div>
                                <div className="list-group ">
                                    <div className="list-group-item ">
                                        <div className="d-flex w-100 justify-content-between">
                                            <h5 className="mb-1">Университет</h5>
                                            <h5 className="mb-1 years">2001</h5>
                                        </div>
                                        <p className="mb-1" >менеджмент и ВЭД</p>
                                    </div>
                                </div>

                                <div className="col header-text border box">Рекомендации</div>
                                <div className="list-group ">
                                    <div className="list-group-item ">
                                        <div className="d-flex w-100 justify-content-between">
                                            <h5 className="mb-1">Университет</h5>
                                        </div>
                                        <p className="mb-1 text-capitalize" >иванов Иван Иванович</p>
                                        <div >+380661234512</div>
                                        <div >ivanov@gmail.com</div>
                                    </div>
                                </div>

                                <div className="col header-text border box">Профессиональные навыки</div>
                                <div className="list-group ">
                                    <div className="list-group-item ">
                                        <div className="mb-1 long-text" >
                                            Составление договоров.
                                            Расширение клиентской базы.
                                            Проведение презентаций.
                                            консультирование по телефону.
                                            Привел в компанию 7 ключевых клиентов (совокупно до 50% заказов).
                                            Создал отдел продаж с нуля. Впоследствии отдел (5 человек) под моим руководством регулярно выполнял план по привлечению новых клиентов и продажам.
                                            Разработал и внедрил в компании технологию продаж технически сложного оборудования.
                                        </div>
                                    </div>
                                </div>

                                <div className="col header-text border box">Личные качества</div>
                                <div className="list-group ">
                                    <div className="list-group-item ">
                                        <p className="mb-1" >
                                            Здравствуйте. Основные сведения обо мне вы уже знаете из резюме.
                                            Могу немного рассказать о себе. Мне … лет,
                                            по специальности я работаю уже … года. Получать высшее образование
                                            по этой специальности решил осознанно, так как мне нравится
                                            профессия и то, что она может дать. Я стараюсь развиваться
                                            всесторонне, люблю получать новые знания. Поэтому работа в вашей
                                            компании окажется для меня очень полезной. А я, в свою очередь,
                                            все свои имеющиеся знания приложу для того, чтобы компания
                                            становилась еще перспективнее, а ее доходы росли. Там, где
                                            я работал раньше, мне удалось добиться существенных результатов.
                                            Прежнее место работы мне очень нравилось,
                                            но я хочу продвигаться вперед. Думаю, именно ваша компания мне
                                            такую возможность даст
                                        </p>
                                    </div>
                                </div>

                                <div className="col header-text border box">Хобби</div>
                                <div className="list-group ">
                                    <div className="list-group-item ">
                                        <p className="mb-1" >
                                            вязание крючком и вышивание крестиком
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            );
        }
    };
}
export default Template1;