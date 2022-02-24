import React from 'react';
import './About.css';

class About extends React.Component {

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

                <div className='container-fluid block-yellow py-4'>
                    <div className='container py-5'>
                        <h2 className="text">Рады приветствовать вас на сайте ResumeOnline!</h2>
                        <h5 className="text">Наша мисия - помочь вам найти работу мечты</h5>
                        <a href="/login" className="btn btn-primary" id='header-btn'>Создать резюме</a>
                    </div>
                </div>

                <div className="container my-5 p-5" id='about-container'>

                    <h1 className='header-text-about'>Ищешь работу своей мечты?</h1>
                    <h3 className='h3-about'>Мы поможем осуществить твою мечту всего за 4 шага:</h3>
                    <ul className='main-text-about'>
                        <li>Зарегистрируйся</li>
                        <li>Заполни свои данные в конструкторе-резюме</li>
                        <li>Выбери понравившийся шаблон</li>
                        <li>Сохрани готовое резюме в PDF формате</li>
                    </ul>
                    <h3 className='h3-about'>Все готово!</h3>
                    <h3 className='h3-about'>Отправляй свое резюме работодателю и готовься к собеседованию</h3>

                    <h1 className='slogan'>ResumeOnline - твое резюме всегда с тобой!</h1>

<div >

</div>
                    <iframe id='videoPromo' width="560" height="315"
                        src="https://www.youtube.com/embed/uSJhHY0dyfM"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                    </iframe>



                </div>
            </div>
        );
    }
};

export default About;