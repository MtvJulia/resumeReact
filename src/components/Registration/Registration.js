import React from 'react';
import axios from 'axios';
import '../../../src/App.css';

import iconForForm from '../../images/user.png';

class Registration extends React.Component {



    constructor(props) {

        super(props);

        //Начальное состояние состояния (state)
        this.state = {
            users: null
        }

        this.API_BASE_ADDRESS = "http://localhost:55555/register";

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
                // <div className="container">                    
                //     <div className="container">
                //         <h1>Регистрация нового пользователя</h1>
                //         <form className="form-horizontal" action="http://localhost:55555/registration" method="POST">
                //             <div className="form-group">
                //                 <label className="control-label col-sm-2" for="userlogin">Логин:</label>
                //                 <div className="col-sm-8">
                //                     <input type="text" className="form-control" id="userlogin" placeholder="Введите логин" name="UserLogin" />
                //                 </div>
                //             </div>
                //             <div className="form-group">
                //                 <label className="control-label col-sm-2" for="pwd">Пароль:</label>
                //                 <div className="col-sm-8">
                //                     <input type="password" className="form-control" id="pwd" placeholder="Введите пароль" name="Password" />
                //                 </div>
                //             </div>
                //             <div className="form-group">
                //                 <label className="control-label col-sm-2" for="pwdRep">Повторите пароль:</label>
                //                 <div className="col-sm-8">
                //                     <input type="password" className="form-control" id="pwdRep" placeholder="Повторите пароль" name="RepeatPassword" />
                //                 </div>
                //             </div>
                //             <div className="form-group">
                //                 <div className="col-sm-offset-2 col-sm-10">
                //                     <button type="submit" className="btn btn-primary" >Регистрация</button>
                //                 </div>
                //             </div>
                //         </form>
                //     </div>
                // </div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <h1 className="text-center text-dark mt-5">Регистрация нового пользователя</h1>
                            <div className="card my-5">
                                <form className="card-body cardbody-color p-lg-5" action="http://localhost:55555/registration" method="POST">

                                    <div className="text-center">
                                        <img src={iconForForm} className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                                            width="200px" alt="profile" />
                                    </div>

                                    <div className="mb-3">
                                        <input type="text" className="form-control" id="userlogin" aria-describedby="emailHelp"
                                            placeholder="Введите логин" name="UserLogin" />
                                    </div>
                                    <div className="mb-3">
                                        <input type="password" className="form-control" id="pwd" placeholder="Введите пароль" name="Password" />
                                    </div>
                                    <div className="mb-3">
                                        <input type="password" className="form-control" id="pwdRep" placeholder="Повторите пароль" name="RepeatPassword" />
                                    </div>
                                    <div className="text-center">
                                        <button type="submit" className="btn btn-color px-5 mb-5 w-100">Регистрация</button></div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            );
        }
    };
}

export default Registration;