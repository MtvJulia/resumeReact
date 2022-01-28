import React from 'react';
import axios from 'axios';

import './Home.css';

import mainPhoto from '../../images/dance2.jpg';
import search from '../../images/search.png';
import page from '../../images/page.png';
import quickly from '../../images/quickly.png';
import templates from '../../images/templates.png';
import cloud from '../../images/cloud.png';
import online from '../../images/online.png';

class Home extends React.Component {

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
                <div className="container-fluid" id='container-main' >
                    <div className='container' >
                        {/* first container */}
                        <div className='row align-items-center justify-content-evenly' id='first-container'>
                            <div className='col col-md-6 col-12'>
                                <div className="header-title">Создайте резюме в онлайн конструкторе</div>
                                <div>
                                    <p>Увеличьте шансы получить работу, создав свое профессиональное резюме в онлайн конструкторе всего за 15 минут.</p>
                                </div>
                            </div>
                            <div className='col col-md-6 col-12' >
                                <img src={mainPhoto} alt='photo' id='photoResume'></img>
                            </div>
                        </div>

                        {/* second container */}
                        <div className='row justify-content-center' id='second-container'>
                            <h2>Создайте свое резюме здесь</h2>
                        </div>

                        {/* third container */}
                        <div className='row' id='third-container'>
                            <div className='col col-12 col-md-6 col-xl-4 '>
                                <img className='img-tips' src={search} alt='search'></img>
                                <div className='header-tips'>Больше шансов получить работу</div>
                                <div className='text-tips'>Репрезентативное резюме выделит Вас среди других кандидатов, что повысит вероятность приглашения на собеседование.</div>
                            </div>
                            <div className='col col-12 col-md-6 col-xl-4 '>
                                <img className='img-tips' src={page} alt='page'></img>
                                <div className='header-tips'>Возможность выделить главное</div>
                                <div className='text-tips'>Формат резюме 1-2 страниц позволит добавить только действительно важную информацию.</div>
                            </div>
                            <div className='col col-12 col-md-6 col-xl-4 '>
                                <img className='img-tips' src={quickly} alt='quickly'></img>
                                <div className='header-tips'>Быстро и легко</div>
                                <div className='text-tips'>С нашим онлайн конструктором резюме любой человек может легко и быстро создать профессиональное резюме.</div>
                            </div>
                            <div className='col col-12 col-md-6 col-xl-4 '>
                                <img className='img-tips' src={templates} alt='templates'></img>
                                <div className='header-tips'>Большой выбор шаблонов резюме</div>
                                <div className='text-tips'>Постоянно разрабатываются и внедряются новые оригинальные шаблоны для Вашего резюме.</div>
                            </div>
                            <div className='col col-12 col-md-6 col-xl-4 '>
                                <img className='img-tips' src={cloud} alt='cloud'></img>
                                <div className='header-tips'>Постоянный доступ</div>
                                <div className='text-tips'>Вы можете зайти в личный кабинет, внести изменения, создать новое или скачать резюме в любой момент.</div>
                            </div>
                            <div className='col col-12 col-md-6 col-xl-4 '>
                                <img className='img-tips ' src={online} alt='online'></img>
                                <div className='header-tips'>Разместить Online</div>
                                <div className='text-tips'>Открывайте online доступ к Вашему резюме online, отправляйте прямую ссылку будущим работодателям.</div>
                            </div>
                        </div>

                        {/* fourth container */}
                        <div className='row justify-content-center' id='fourth-container'>
                            <h2>Выберите шаблон резюме</h2>
                        </div>

                        {/* fifth container */}
                        <div className='row row-cols-3 justify-content-between' id='fifth container'>
                            <div className='col'>
                                <img className='img-template' src={mainPhoto} alt='template'></img>
                            </div>
                            <div className='col'>
                                <img className='img-template' src={mainPhoto} alt='template'></img>
                            </div>
                            <div className='col'>
                                <img className='img-template' src={mainPhoto} alt='template'></img>
                            </div>
                            <div className='col'>
                                <img className='img-template' src={mainPhoto} alt='template'></img>
                            </div>
                            <div className='col'>
                                <img className='img-template' src={mainPhoto} alt='template'></img>
                            </div>
                            <div className='col'>
                                <img className='img-template' src={mainPhoto} alt='template'></img>
                            </div>
                        </div>

                        {/* sixth container */}
                        <div className='row justify-content-center' id='sixth-container'>
                            <h2>Как это работает?</h2>
                        </div>

                        {/* seventh container */}
                        <div className='row justify-content-center'>
                            
                            <div className='col header-tips '>
                                <div className="text-center">Заполняете резюме online в удобной форме</div>
                            </div>
                            <div className='col header-tips'>
                                <div className="text-center">Выбираете хорошо подходящий Вам шаблон</div>
                            </div>
                            <div className='col header-tips'>
                                <div className="text-center">Скачиваете или размещаете online свое резюме</div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    };
}
export default Home;