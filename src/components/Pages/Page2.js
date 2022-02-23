import React from 'react';

// import './Page1.css';

import resume from '../../images/services/resume.jpg'
import cat from '../../images/services/cat.png'

class Page2 extends React.Component {

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
                        <img src={resume} className="img-main-page" alt="..." />
                    </figure>

                    <div className='d-flex justify-content-center'>
                        <h1 className='head-theme'>Навыки для вашего резюме: какие указывать в 2022 году</h1>
                    </div>

                    <p>Хотите знать, какие навыки включить в свое резюме? Мы расскажем вам. Мы перечисляем все лучшие навыки
                        резюме на 2022 год, чтобы вы могли произвести впечатление на любого менеджера по найму и получить
                        работу.</p>
                    <p>Вот несколько полезных навыков, которые можно использовать в своем резюме в 2022 году:</p>

                    <ul>
                        <li>Навыки коммуникации</li>
                        <li>Навыки работы с компьютером</li>
                        <li>Навыки обслуживания клиентов</li>
                        <li>Лидерские навыки</li>
                        <li>Навыки управления</li>
                        <li>Организационные навыки</li>
                        <li>Технические навыки</li>
                        <li>Навыки тайм-менеджмента</li>
                    </ul>

                    <p>Кроме того, вот некоторые профессиональные навыки, которые вы должны включить в свое резюме, если ищете работу в этих отраслях:</p>

                    <ul>
                        <li>Навыки административного помощника</li>
                        <li>Навыки обслуживания клиентов</li>
                        <li>Маркетинговые навыки</li>
                        <li>Навыки руководителя проекта</li>
                        <li>Навыки продаж</li>                        
                    </ul>

                    <h3 className='head-text'>Лучшие навыки для резюме в 2022 году</h3>
                    <p>Даже если у вас уже есть список хороших навыков для включения в свое резюме, вы не можете включить их все. Вам нужно сузить список до тех навыков, которые подчеркивают, что вы отлично подходите для данной работы.</p>
                    <p>Есть два типа профессиональных навыков для резюме, которые менеджеры по найму оценивают при просмотре вашего заявления. Их называют твердыми и мягкими навыками. Если вы хотите выглядеть всесторонне развитым кандидатом, важно ориентироваться на оба типа.</p>
                    <p>Лучшие сотрудники обладают как твердыми, так и мягкими навыками. Если ваша цель — стать лучшим кандидатом на какую-либо должность, вам необходимо затронуть обе эти области в своем резюме.</p>
                   

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
export default Page2;