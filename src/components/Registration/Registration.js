import React from 'react';
import axios from 'axios';
import '../../../src/App.css';

class Registration extends React.Component {


    



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
            <ul className="nav">
                <li className="active"><a href="http://localhost:5000/login">Вход</a></li>
                <li><a href="http://localhost:5000/registration">Регистрация</a></li>
            </ul>
        </div>
    </nav>
    <div className="container">
        <h1>Регистрация нового пользователя</h1>   
        <form className="form-horizontal" action="http://localhost:5000/registration" method="POST">
            <div className="form-group">
                <label className="control-label col-sm-2" for="userlogin">Логин:</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" id="userlogin" placeholder="Введите логин" name="UserLogin"/>
                </div>
            </div>
            <div className="form-group">
                <label className="control-label col-sm-2" for="pwd">Пароль:</label>
                <div className="col-sm-10">
                    <input type="password" className="form-control" id="pwd" placeholder="Введите пароль" name="Password"/>
                </div>
            </div>
            <div className="form-group">
                <label className="control-label col-sm-2" for="pwdRep">Повторите пароль:</label>
                <div className="col-sm-10">
                    <input type="password" className="form-control" id="pwdRep" placeholder="Повторите пароль" name="RepeatPassword"/>
                </div>
            </div>
            <div className="form-group">
                <div className="col-sm-offset-2 col-sm-10">
                    <button type="submit" className="btn btn-default">Регистрация</button>
                </div>
            </div>
        </form>
    </div>
                </div>
            );
        } 
    };
}

export default Registration;