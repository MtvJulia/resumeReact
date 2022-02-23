import React from 'react';

import './Services.css';

import books from '../../images/services/books.jpeg'
import docs from '../../images/services/docs.jpg'
import resume from '../../images/services/resume.jpg'
import sobesedovanie from '../../images/services/sobesedov.jpg'

class Services extends React.Component {

    componentDidMount() { 
        if( localStorage.getItem('isLogin')==null||localStorage.getItem('isLogin')==='false'){     
         document.getElementById("guestStatus").hidden = false;
         document.getElementById("userStatus").hidden = true;
        }
         if(localStorage.getItem('isLogin')==='true'){   
         document.getElementById("guestStatus").hidden = true;
         document.getElementById("userStatus").hidden = false;
        }                              
     }     
    render() {

        return (
            <div className="container">

                <div className="container main">

                    {/* <img src="..." className="img-fluid" alt="..." /> */}

                    {/* <div className="jumbotron jumbotron-fluid gradient">
                        <div className="container">
                            <h1 className="display-4">Fluid jumbotron</h1>
                            <p className="lead">Это модифицированный jumbotron, который занимает все горизонтальное пространство своего родителя.</p>
                        </div>
                    </div> */}

                    <div className="card card-main">
                        <h5 className="card-header">Создай стильное резюме онлайн</h5>
                        <div className="card-body">
                            {/* <h5 className="card-title">Создай стильное резюме онлайн</h5> */}
                            <p className="card-text">Конструктор резюме с красивыми шаблонами</p>
                            <a href="/login" className="btn btn-primary">Создать резюме</a>
                        </div>
                    </div>

                    <div className="row row-cols-1 row-cols-md-3">
                        <div className="col mb-4">
                            <div className="card h-100">
                                <a className='card-link' href="/kak-opisat'-opyt-raboty-v-rezyume">
                                    <img src={books} className="card-img-top" alt="books" />
                                    <div className="card-body">
                                        <h5 className="card-title">Как описать опыт работы в резюме</h5>
                                        <p className="card-text">Это важно</p>
                                    </div>
                                </a>

                            </div>
                        </div>
                        <div className="col mb-4">
                            <div className="card h-100">
                                <a className='card-link' href="/Navyki-dlya-vashego-rezyume:-kakie-ukazyvat'-v-2022-godu">
                                    <img src={resume} className="card-img-top" alt="books" />
                                    <div className="card-body">
                                        <h5 className="card-title">Навыки для вашего резюме: какие указывать в 2022 году</h5>
                                        <p className="card-text">Это важно</p>
                                    </div>
                                </a>

                            </div>
                        </div>
                       
                        <div className="col mb-4">
                            <div className="card h-100">
                                <img src={sobesedovanie} className="card-img-top" alt="sobesedovanie" />
                                <div className="card-body">
                                    <h5 className="card-title">7 признаков хорошей вакансии</h5>
                                    <p className="card-text">Это интересно</p>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-4">
                            <div className="card h-100 card-shadow">
                                <a className='card-link' href='/home'>
                                    <img src={docs} className="card-img-top" alt="docs" />
                                    <div className="card-body">
                                        <h5 className="card-title">Как распознать работодателя-мошенника</h5>
                                        <p className="card-text">Неожиданно</p>
                                    </div>
                                </a>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
};

export default Services;