import React, { useState } from 'react';
import './Login.css';
import iconForForm from '../../images/user.png';
import { API_ADDRESS_LOGIN } from '../../ConstantModule';

class Login extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            users: null,
            UserLogin: "",
            Password: "",
            rememberMe: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleChange = (event) => {
        const input = event.target;
        const value = input.type === 'checkbox' ? input.checked : input.value;
        this.setState({ [input.name]: value });
    };

    handleFormSubmit = () => {
        const { UserLogin, Password, rememberMe } = this.state;
        const isLogin = true;
        localStorage.setItem('UserLogin', UserLogin);
        localStorage.setItem('Password', Password);
        localStorage.setItem('rememberMe', rememberMe);
        localStorage.setItem('isLogin', isLogin);
    };

<<<<<<< HEAD
      handleFormSubmit = ( ) => {          
        const { UserLogin, Password,rememberMe } = this.state;
        const isLogin = true;                
        localStorage.setItem('UserLogin', UserLogin ) ;
        localStorage.setItem('Password', Password ) ;
        localStorage.setItem('rememberMe', rememberMe ) ;
        localStorage.setItem('isLogin', isLogin ) ;
      } ;   
    
=======
>>>>>>> 69bcfdfb772c0f8511f3ab92ffc329dfbb0091a8
    componentDidMount() {

        fetch(API_ADDRESS_LOGIN)
            .then((response) => response.json())
            .then((data) => {

                const rememberMe = localStorage.getItem('rememberMe') === 'true';
                const UserLogin = rememberMe ? localStorage.getItem('UserLogin') : "";
                const Password = rememberMe ? localStorage.getItem('Password') : "";
                const users = data;
                this.setState({ users, UserLogin, Password, rememberMe });
                console.log(this.state);
            });
    }

    render() {

        if (this.state.users == null) {
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

                <div className="container">
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <h1 className="text-center text-dark mt-5">Авторизация</h1>
                            <div className="card my-5">
                                <form className="card-body cardbody-color p-lg-5" action={API_ADDRESS_LOGIN} method="POST" onSubmit={this.handleFormSubmit}>

                                    <div className="text-center">
                                        <img src={iconForForm} className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                                            width="200px" alt="profile" />
                                        <div className="errorColor">{this.state.users.errorlogin}  </div>
                                    </div>
                                    <div className="mb-3">
                                        <input type="email" className="form-control" id="userlogin" name="UserLogin" aria-describedby="emailHelp"
                                            placeholder="Введите e-mail" required defaultValue={this.state.UserLogin} onChange={this.handleChange} />
                                    </div>
                                    <div className="mb-3">
                                        <input type="password" className="form-control" id="pwd" name="Password"
                                            placeholder="Введите пароль" required defaultValue={this.state.Password} onChange={this.handleChange} />
                                    </div>
                                    <div className="text-center">
                                        <button type="submit" className="btn btn-color px-5 mb-3 w-100">Вход</button>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="id_rememberMe" name='rememberMe' checked={this.state.rememberMe} onChange={this.handleChange} />
                                        <label className="form-check-label" htmlFor="id_rememberMe">
                                            Запомнить меня
                                        </label>
                                    </div>
                                    <div id="regUser" className="form-text text-center text-dark">Не зарегистрирован?
                                        <a href="/registration" className="text-dark fw-bold"> Создать аккаунт</a>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    };
}
export default Login;