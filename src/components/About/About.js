import React from 'react';
import {API_BASE_ADDRESS} from '../../ConstantModule';
import './About.css';

class About extends React.Component {

    constructor(props) {

        super(props);

        //Начальное состояние состояния (state)
        this.state = {
            users: null
        }
      
    }

    componentDidMount() {

        //Встроенный метод для GET (и только) запросов
        fetch(API_BASE_ADDRESS)
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