import React from 'react';

import './css/main.css';
import { API_BASE_ADDRESS, API_REDIRECT_TMP1, API_REDIRECT_TMP2, API_REDIRECT_TMP3, API_REDIRECT_TMP4, API_REDIRECT_TMP5, API_REDIRECT_TMP6 } from "../../ConstantModule";
import template1 from '../../images/template1.png';
import template2 from '../../images/template2.png';
import template3 from '../../images/template3.png';
import template4 from '../../images/template4.png';
import template5 from '../../images/template5.png';
import template6 from '../../images/template6.png';

class Templates extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: null
        }
    }

    componentDidMount() {
        fetch(API_BASE_ADDRESS)
            .then((response) => response.json())
            .then((data) => {                
                document.getElementById("guestStatus").hidden = true;
                document.getElementById("userStatus").hidden = false;
                console.log(localStorage.getItem('image'));
                document.getElementById("userAvatar").src = localStorage.getItem('image');
                this.setState({
                    items: data
                });
            });
    }

    render() {

        if (this.state.items == null) {
            return (
                <div className="d-flex justify-content-center spin">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div className="container-fluid" >
                    <div className='container' >
                        <div className='row justify-content-center header-block'>
                            <h2>Выберите шаблон резюме</h2>
                        </div>

                        <div className='d-flex flex-wrap justify-content-center block-bottom'>

                            <a href={API_REDIRECT_TMP1}><img className='img-template card-item-tmps' src={template1} alt='template'></img></a>
                            <a href={API_REDIRECT_TMP2}><img className='img-template card-item-tmps' src={template2} alt='template'></img></a>
                            <a href={API_REDIRECT_TMP3}><img className='img-template card-item-tmps' src={template3} alt='template'></img></a>
                            <a href={API_REDIRECT_TMP4}><img className='img-template card-item-tmps' src={template4} alt='template'></img></a>
                            <a href={API_REDIRECT_TMP5}><img className='img-template card-item-tmps' src={template5} alt='template'></img></a>
                            <a href={API_REDIRECT_TMP6}><img className='img-template card-item-tmps' src={template6} alt='template'></img></a>

                        </div>
                    </div>
                </div>
            );
        }
    };
}
export default Templates;