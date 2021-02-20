import React from 'react';
import axios from 'axios';
import '../../../src/App.css';

class UserData extends React.Component {
  
    constructor(props) {

        super(props);

        //Начальное состояние состояния (state)
        this.state = {
            users: null
        }

        this.API_ADDRESS = "http://localhost:55555";        
    
    }

    componentDidMount() {
        //Встроенный метод для GET (и только) запросов
        fetch(this.API_ADDRESS)        
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

                 <h1>Анкета</h1>   
        <form className="form-horizontal" action="http://localhost:55555/userdata" method="POST">



        <div className="col-sm-offset-2 col-sm-10">
                    <button type="submit" className="btn btn-default" >Сохранить</button>
                </div>               
        </form>


                </div>
            );
        } 
    };
}

export default UserData;