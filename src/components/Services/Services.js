import React from 'react';
import axios from 'axios';

import './Services.css';

class Services extends React.Component {

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
                <div className="container">                  

                    <div className="container main">

                        <h1>Services</h1>
                        
                    </div>
                </div>
            );
        }
    };
}
export default Services;