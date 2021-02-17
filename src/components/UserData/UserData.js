import React from 'react';
import axios from 'axios';
import '../../../src/App.css';

class UserData extends React.Component {



    render() {

        if (this.state.items == null) {
            return (
                <div>Loading...</div>
            );
        }
        else {
            return (
                <div className="container">
                 



                 
                </div>
            );
        } 
    };
}

export default UserData;