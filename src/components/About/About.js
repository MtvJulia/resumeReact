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
            <div className="container">

                <div className="container">

                    <h1>Рады приветствовать вас на сайте ResumeOnline!</h1>

                    <p>Наша мисия - помочь вам найти работу мечты</p>
                </div>
            </div>
        );
    }
};

export default About;