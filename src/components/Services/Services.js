import React from 'react';


import './Services.css';
import{API_BASE_ADDRESS} from'../../ConstantModule';

class Services extends React.Component {

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