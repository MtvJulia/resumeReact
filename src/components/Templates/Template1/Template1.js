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
                    <div className="container" id="main-container-t1">
                        <div className="row">

                            {/* left-container */}
                            <div className="col col-4" id="left-container">
                                <img id="avatar" src={avatar} className="rounded mx-auto d-block" alt="avatar" />
                                <div className="row justify-content-start" id='full-name'>
                                    <div className="col  name-text">Фамилия</div>
                                    <div className="col  name-text">Имя</div>
                                    <div className="col  name-text">Отчество</div>
                                </div>

                                <hr className="style1" />

                                <div className="col header-text">Должность
                                    <div className="col main-text">Бухгалтер</div>
                                </div>
                                <div className="col header-text">Возраст
                                    <div className="col main-text">47</div>
                                </div>
                                <div className="col header-text">Контакты</div>

                                <div className="col"><img className="icon-item" src={location} alt="location" />
                                    город</div>
                                <div className="col"><img className="icon-item" src={phone} alt="phone" />
                                    телефон</div>
                                <div className="col"><img className="icon-item" src={email} alt="email" />
                                    e-mail</div>

                                <div className="col header-text" >Водительские права
                                    <div className="col main-text">B, C, есть личный авто</div>
                                </div>

                                <div className="col header-text">Гражданство</div>
                                <div className="col header-text">Семейное положение</div>
                                <div className="col header-text">Желаемая зарплата</div>
                                <div className="col header-text">Занятость</div>
                                <div className="col header-text">Языки</div>
                                <div className="col header-text">Навыки</div>
                                <div className="col header-text">Армия</div>



                            </div>

                            {/* right-container */}
                            <div className="col" id="right-container">
                                <div className="col header-text border box">Опыт работы </div>
                                <div className="list-group ">
                                    <div className="list-group-item ">
                                        <div className="d-flex w-100 justify-content-between">
                                            <h5 className="mb-1">Рога и копыта</h5>
                                            <h5 className="mb-1">2000-2007</h5>
                                        </div>
                                        <p className="mb-1" >менеджер</p>
                                        <small>ведение клиентов, продажи</small>
                                    </div>
                                    <div className="list-group-item ">
                                        <div className="d-flex w-100 justify-content-between">
                                            <h5 className="mb-1">Рога и копыта</h5>
                                            <h5 className="mb-1">2007-2022</h5>
                                        </div>
                                        <p className="mb-1" >бухгалтер</p>
                                        <small>бухгалтерия предприятия</small>
                                    </div>
                                </div>

                                <div className="col header-text border box">Образование</div>
                                <div className="list-group ">
                                    <div className="list-group-item ">
                                        <div className="d-flex w-100 justify-content-between">
                                            <h5 className="mb-1">ЗИГМУ</h5>
                                            <h5 className="mb-1">2000</h5>
                                        </div>
                                        <p className="mb-1" >менеджмент и ВЭД</p>
                                        <small>менеджер среднего звена, бакалавр</small>
                                    </div>
                                </div>

                                <div className="col header-text border box">Курсы</div>
                                <div className="list-group ">
                                    <div className="list-group-item ">
                                        <div className="d-flex w-100 justify-content-between">
                                            <h5 className="mb-1">ЗИГМУ</h5>
                                            <h5 className="mb-1">2001</h5>
                                        </div>
                                        <p className="mb-1" >менеджмент и ВЭД</p>
                                        {/* <small>менеджер среднего звена, бакалавр</small> */}
                                    </div>
                                </div>

                                <div className="col header-text border box">Рекомендации</div>
                                <div className="list-group ">
                                    <div className="list-group-item ">
                                        <div className="d-flex w-100 justify-content-between">
                                            <h5 className="mb-1">ЗИГМУ</h5>
                                            {/* <h5 className="mb-1">2000</h5> */}
                                        </div>
                                        <p className="mb-1" >Иванов Иван Иванович</p>
                                        <div >+380661234512</div>
                                        <div >ivanov@gmail.com</div>
                                    </div>
                                </div>

                                <div className="col header-text border box">Личные качества</div>
                                <div className="list-group ">
                                    <div className="list-group-item ">                                        
                                        <p className="mb-1" >
                                            Здравствуйте. Основные сведения обо мне вы уже знаете из резюме. Могу немного рассказать о себе. Мне … лет, по специальности я работаю уже … года. Получать высшее образование по этой специальности решил осознанно, так как мне нравится профессия и то, что она может дать. Я стараюсь развиваться всесторонне, люблю получать новые знания. Поэтому работа в вашей компании окажется для меня очень полезной. А я, в свою очередь, все свои имеющиеся знания приложу для того, чтобы компания становилась еще перспективнее, а ее доходы росли. Там, где я работал раньше, мне удалось добиться существенных результатов (перечислите их). Прежнее место работы мне очень нравилось, но я хочу продвигаться вперед. Думаю, именно ваша компания мне такую возможность даст
                                        </p>                                        
                                    </div>
                                </div>

                                <div className="col header-text border box">Хобби</div>

                            </div>
                        </div>
                    </div>

                </div>
            );
        }
    };
}
export default Template1;