import React from 'react';
import axios from 'axios';

import './About.css';

class About extends React.Component {

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
                <div>Loading...</div>
            );
        }
        else {
            return (
                <div className="container">
                    <nav className="nav nav-inverse">
                        <div className="container-fluid">
                            <div className="nav-header">
                            </div>
                           
                        </div>
                    </nav>

                    <div className="container">

                        <h1>About</h1>
                        
                    </div>
                </div>
            );
        }
    };
}
export default About;