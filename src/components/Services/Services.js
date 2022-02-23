import React from 'react';

import './Services.css';

import books from '../../images/services/books.jpeg'
import docs from '../../images/services/docs.jpg'
import resume from '../../images/services/resume.jpg'
import sobesedovanie from '../../images/services/sobesedov.jpg'
import work from '../../images/services/sobes5.jpg'

import sobes from '../../images/services/sobes.jpeg'

class Services extends React.Component {

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
            <div className="container-fluid p-0 ">

                <div className='container-fluid block-yellow'>
                    <div className='container' id='header-tmps'>
                        <h1 className="text">Повысьте свои шансы получить работу</h1>
                        <h5 className="text">У Вас будет на 65% больше шансов получить работу</h5>
                        <a href="/login" className="btn btn-primary" id='header-btn'>Создать резюме</a>
                    </div>
                </div>

                <div className="container block-white" id='main'>

                    {/* block for cards */}
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">

                        <div className="col mb-4">
                            <div className="card card-item h-100 border">
                                <a className='card-link' href="/kak-opisat'-opyt-raboty-v-rezyume">
                                    <img src={books} className="card-img-top" alt="books" />
                                    <div className="card-body">
                                        <h5 className="card-title">Как описать опыт работы в резюме</h5>
                                        <p className="card-text text-end chapter">Это важно</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col mb-4">
                            <div className="card card-item h-100 border">
                                <a className='card-link' href="/Navyki-dlya-vashego-rezyume:-kakie-ukazyvat'-v-2022-godu">
                                    <img src={resume} className="card-img-top" alt="books" />
                                    <div className="card-body">
                                        <h5 className="card-title">Навыки для вашего резюме: какие указывать в 2022 году</h5>
                                        <p className="card-text align-text-bottom chapter">Это важно</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col mb-4">
                            <div className="card card-item h-100 border">
                                <a className='card-link' href="/#">
                                    <img src={work} className="card-img-top" alt="books" />
                                    <div className="card-body">
                                        <h5 className="card-title">7 признаков хорошей вакансии</h5>
                                        <p className="card-text text-end chapter">Это интересно</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col mb-4">
                            <div className="card card-item h-100 border">
                                <a className='card-link' href="/#">
                                    <img src={sobesedovanie} className="card-img-top" alt="books" />
                                    <div className="card-body">
                                        <h5 className="card-title">Как распознать работодателя-мошенника</h5>
                                        <p className="card-text align-text-bottom chapter">Неожиданно</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                    </div>
                    {/* end block for cards */}
                </div>
            </div>
        );
    }
};

export default Services;