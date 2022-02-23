import React from 'react';
import './Home.css';

import search from '../../images/search.png';
import page from '../../images/page.png';
import quickly from '../../images/quickly.png';
import templates from '../../images/templates.png';
import cloud from '../../images/cloud.png';
import online from '../../images/online.png';

import template1 from '../../images/template1.png';
import template2 from '../../images/template2.png';
import template3 from '../../images/template3.png';
import template4 from '../../images/template4.png';
import template5 from '../../images/template5.png';
import template6 from '../../images/template6.png';
import tempHome from '../../images/temphome.png';

class Home extends React.Component {

    componentDidMount() {

        if (localStorage.getItem('isLogin') == null || localStorage.getItem('isLogin') === 'false') {
            document.getElementById("guestStatus").hidden = false;
            document.getElementById("userStatus").hidden = true;
        }
        if (localStorage.getItem('isLogin') === 'true') {
            document.getElementById("guestStatus").hidden = true;
            document.getElementById("userStatus").hidden = false;
            document.getElementById("userAvatar").src = localStorage.getItem('image');
        }
    }

    render() {

        return (
            <div className="container-fluid p-0">
                {/* first block */}
                <div className='container-fluid block-yellow'>
                    <div className='container'>
                        {/* first container */}
                        <div className='row align-items-center justify-content-center' id='first-container'>
                            <div className='col col-md-6 col-12'>
                                <div><h2>Создайте резюме в онлайн конструкторе</h2></div>
                                <div>
                                    <p>Увеличьте шансы получить работу, создав свое профессиональное резюме в онлайн конструкторе всего за 15 минут.</p>
                                    <p><a className="btn btn-primary btn-lg" href="/login" role="button">Создать резюме</a></p>
                                </div>
                            </div>
                            <div className='col col-md-6 col-12' >
                                <img src={tempHome} alt='photo' id='photoResume'></img>
                            </div>
                        </div>
                    </div>
                </div>

                {/* second block */}
                <div className='container-fluid block-white'>
                    <div className='container'>
                        {/* second container */}
                        <div className='row header-block justify-content-center' id='second-container'>
                            <h2>Создайте свое резюме</h2>
                        </div>

                        {/* third container */}
                        <div className='row block-bottom' id='third-container'>
                            <div className='col col-12 col-md-6 col-xl-4'>
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
                                <div className='header-tips'>Распечатать и сохранить</div>
                                <div className='text-tips'>Распечатывайте свое резюме или сохраняйте его в PDF формате.</div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* third block */}
                <div className='container-fluid block-gray'>
                    <div className='container'>
                        {/* fourth container */}
                        <div className='row justify-content-center header-block text-white' id='fourth-container'>
                            <h2>Варианты шаблонов резюме</h2>
                        </div>

                        {/* fifth container */}
                        <div className='d-flex flex-wrap justify-content-center block-bottom' id='fifth-container'>

                            <img className='img-template' src={template1} alt='template'></img>

                            <img className='img-template' src={template2} alt='template'></img>

                            <img className='img-template' src={template3} alt='template'></img>

                            <img className='img-template' src={template4} alt='template'></img>

                            <img className='img-template' src={template5} alt='template'></img>

                            <img className='img-template' src={template6} alt='template'></img>

                        </div>

                        <div className='d-flex justify-content-center block-bottom'>
                            <p><a className="btn btn-yellow btn-lg" href="/login" role="button">Создать резюме</a></p>
                        </div>
                    </div>
                </div>



                {/* fourth block */}
                <div className='container-fluid block-yellow'>
                    <div className='container'>
                        {/* sixth container */}
                        <div className='row justify-content-center header-block' id='sixth-container'>
                            <h2>Как это работает?</h2>
                        </div>

                        {/* seventh container */}
                        <div className="md-stepper-horizontal block-bottom">
                            <div className="md-step ">
                                <div className="md-step-circle"><span>1</span></div>
                                <div className="md-step-title">Заполняете резюме online в форме</div>
                                <div className="md-step-bar-left"></div>
                                <div className="md-step-bar-right"></div>
                            </div>
                            <div className="md-step ">
                                <div className="md-step-circle"><span>2</span></div>
                                <div className="md-step-title">Выбираете подходящий Вам шаблон</div>
                                <div className="md-step-bar-left"></div>
                                <div className="md-step-bar-right"></div>
                            </div>
                            <div className="md-step ">
                                <div className="md-step-circle"><span>3</span></div>
                                <div className="md-step-title">Скачивайте и распечатывайте свое резюме</div>
                                <div className="md-step-bar-left"></div>
                                <div className="md-step-bar-right"></div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* fifth block */}
                <div className='container-fluid block-white'>
                    <div className='container'>
                        {/* eighth container */}
                        <div className='d-flex flex-row-reverse header-block' id='eighth-container'>
                            <div className='col-6 '>
                                <div className=''><h2>Сэкономьте время</h2></div>
                                <p>Профессиональное резюме можно создать всего за несколько минут.
                                    Это очень удобный и полезный сервис для каждого, кто ищет работу.</p>
                            </div>

                        </div>

                        {/* ninth container */}
                        <div className='d-flex flex-row block-bottom' id='ninth-container'>
                            <div className='col-6'>
                                <div className=''><h2>Легкий и удобный в обслуживании</h2></div>
                                <p>Конструктор Резюме очень простой и легкий в использовании,
                                    не требует никаких дополнительных знаний из области графики или скачивания программ.</p>
                            </div>

                        </div>

                        {/* tenth container */}
                        <div className='d-flex flex-row-reverse block-bottom' id='tenth-container'>
                            <div className='col-6 '>
                                <div className=''><h2>Выбирайте среди множества стилей резюме</h2></div>
                                <p>Выбирайте один из доступных графических шаблонов,
                                    благодаря чему Ваше резюме будет выделяться среди конкурентов.</p>
                            </div>

                        </div>

                        {/* eleventh container */}
                        <div className='d-flex flex-row block-bottom' id='eleventh-container'>
                            <div className='col-6'>
                                <div className=''><h2>Скачивайте и распечатывайте свое резюме</h2></div>
                                <p>Возможность скачать ваше резюме в самом распространённом формате PDF,
                                    сохранить и отправить резюме работодателю по электронной почте.</p>
                            </div>

                        </div>

                        <div className='d-flex justify-content-center block-bottom' id='twelfth-container'>
                            <p><a className="btn btn-yellow btn-lg" href="/login" role="button">Создать резюме</a></p>
                        </div>
                    </div>
                </div>


            </div>

        );
    };
}
export default Home;