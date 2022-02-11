import React from 'react';

import './Page1.css';
import { API_BASE_ADDRESS } from "../../ConstantModule";

import imgMain from '../../images/services/books.jpeg'

class Page1 extends React.Component {

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
                        <div className=''>
                            <img src={imgMain} class="img-main-page" alt="..." />
                        </div>


                    </div>
                </div>
            );
        }
    };
}
export default Page1;