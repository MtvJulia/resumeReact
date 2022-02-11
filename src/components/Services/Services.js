import React from 'react';

import './Services.css';

import books from '../../images/services/books.jpeg'
import docs from '../../images/services/docs.jpg'
import resume from '../../images/services/resume.jpg'
import sobesedovanie from '../../images/services/sobesedov.jpg'

class Services extends React.Component {      

    render() {
        
            return (
                <div className="container">

                    <div className="container main">

                        {/* <img src="..." class="img-fluid" alt="..." /> */}

                        <div class="jumbotron jumbotron-fluid gradient">
                            <div class="container">
                                <h1 class="display-4">Fluid jumbotron</h1>
                                <p class="lead">Это модифицированный jumbotron, который занимает все горизонтальное пространство своего родителя.</p>
                            </div>
                        </div>

                        <div class="card card-main">
                            <h5 class="card-header">Featured</h5>
                            <div class="card-body">
                                <h5 class="card-title">Специальный заголовок</h5>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" class="btn btn-primary">Переход куда-нибудь</a>
                            </div>
                        </div>

                        <div class="row row-cols-1 row-cols-md-3">
                            <div class="col mb-4">
                                <div class="card h-100">
                                    <a className='card-link' href="/kak-opisat'-opyt-raboty-v-rezyume">
                                        <img src={books} class="card-img-top" alt="books" />
                                    <div class="card-body">
                                        <h5 class="card-title">Название карточки</h5>
                                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    </div>
                                    </a>
                                    
                                </div>
                            </div>
                            <div class="col mb-4">
                                <div class="card h-100">
                                    <img src={resume} class="card-img-top" alt="resume" />
                                    <div class="card-body">
                                        <h5 class="card-title">Название карточки</h5>
                                        <p class="card-text">This is a short card.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col mb-4">
                                <div class="card h-100">
                                    <img src={sobesedovanie} class="card-img-top" alt="sobesedovanie" />
                                    <div class="card-body">
                                        <h5 class="card-title">Название карточки</h5>
                                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col mb-4">
                                <div class="card h-100 card-shadow">
                                    <a className='card-link' href='/home'>
                                        <img src={docs} class="card-img-top" alt="docs" />
                                        <div class="card-body">
                                            <h5 class="card-title">Название карточки</h5>
                                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
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