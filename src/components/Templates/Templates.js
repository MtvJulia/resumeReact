import React from 'react';

import './css/main.css';

import template1 from '../../images/template1.png';
import template2 from '../../images/template2.png';
import template3 from '../../images/template3.png';
import template4 from '../../images/template4.png';
import template5 from '../../images/template5.png';
import template6 from '../../images/template6.png';

class Templates extends React.Component {

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

                        {/* fourth container */}
                        <div className='row justify-content-center' id='fourth-container'>
                            <h2>Выберите шаблон резюме</h2>
                        </div>

                        {/* fifth container */}
                        <div className='d-flex flex-wrap justify-content-center' id='fifth-container'>

                        <a href="http://localhost:3000/tmp1"><img className='img-template' src={template1}  alt='template'></img></a>  
                        <a href="http://localhost:3000/tmp2"><img className='img-template' src={template2} alt='template'></img></a>  
                        <a href="http://localhost:3000/tmp3"><img className='img-template' src={template3} alt='template'></img></a> 
                        <a href="http://localhost:3000/tmp4"><img className='img-template' src={template4} alt='template'></img></a> 
                        <a href="http://localhost:3000/tmp5"><img className='img-template' src={template5} alt='template'></img></a> 
                        <a href="http://localhost:3000/tmp6"><img className='img-template' src={template6} alt='template'></img></a>                    
                                                                      
                        </div>                        

                    </div>
                </div>
            );
        }
    };
}
export default Templates;