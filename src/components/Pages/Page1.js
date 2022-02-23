import React from 'react';

import './Pages.css';

import imgMain from '../../images/services/books.jpeg'
import cat from '../../images/services/cat.png'

class Page1 extends React.Component {

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
            <div className="container-fluid" >
                <div className='container' >

                    <figure>
                        <img src={imgMain} className="img-main-page" alt="..." />
                    </figure>

                    <div className='d-flex justify-content-center'>
                        <h1 className='head-theme'>Как описать опыт работы в резюме</h1>
                    </div>

                    <p>
                        <b>Опыт работы</b> — это то, что работодатели ценят больше всего, поэтому этот раздел резюме нужно
                        заполнить особенно грамотно. Важно выгодно описать обязанности, упомянуть о достижениях и скрыть
                        слабые места. В статье подробно разобрали каждый пункт раздела «Опыт работы» и постарались
                        добавить достаточно примеров вам в помощь.
                    </p>

                    <h3 className='head-text'>Название компании</h3>
                    <p>Указывайте бренд компании, а не название юридического лица.</p>

                    <h3 className='head-text'>Название должности</h3>
                    <p>Забудьте о расплывчатых формулировках типа «специалист», «менеджер», «сотрудник» — нужно больше
                        конкретики. Плюс с таким названием должности вам будут приходить нерелевантные предложения по
                        работе.</p>
                    <p>Если в ходе работы в какой-то из компаний вас повысили в должности, оформите новую роль как новое место работы.</p>

                    <h3 className='head-text'>Обязанности и достижения</h3>
                    <p>Самое главное, что нужно запомнить об описании обязанностей в опыте работы, — пишите о том,
                        что СДЕЛАЛИ, а не ДЕЛАЛИ. Можно 8 часов в день просиживать штаны и не добиться никаких результатов,
                        поэтому ежедневные рутинные обязанности мало кого волнуют.</p>
                    <p>Еще при описании обязанностей и достижений, можно упомянуть специальные программы, в которых вы
                        работаете. Например, в вакансии написано, что работа будет осуществляться с помощью Excel —
                        упомяните в описании именно эту программу, чтобы рекрутер сразу обратил внимание.</p>

                    <h3 className='head-text'>Неофициальная работа</h3>
                    <p>Опытом считается не только та работа, о которой написано в трудовой книжке, важнее всего —
                        реальные практические знания. Если вы гениальный дизайнер-самоучка с огромным опытом на фрилансе,
                        компания закроет глаза на отсутствие трудового стажа.</p>
                    <p>Указывайте в резюме и стажировки, и практики, и работу на фрилансе, если опыта маловато.
                        Но фриланс, возможно, лучше стоит упоминать как проектную работу.</p>

                    <h3 className='head-text'>Термины и аббревиатуры</h3>
                    <p>Старайтесь не переусердствовать с сокращениями и аббревиатурами, чтобы резюме не превратилось
                        в «раб. над гос.мос.техн.конст-й с АБВГД» :) Оставьте распространенные сокращения типа MS
                        Office вместо Microsoft Office, а остальные расшифруйте.</p>

                    <div className='container justify-content-center ad'>
                        <div className='row justify-content-center'>
                            <div className='col-6 img-ad'><img src={cat} id='cat-ad' /></div>
                            <div className='col-6 text-ad'><h2 className="card-text">Создай стильное резюме онлайн</h2>
                                <a href="/login" className="btn btn-primary">Создать резюме</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );

    };
}
export default Page1;