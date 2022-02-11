import React from 'react';
import './Login.css';
import iconForForm from '../../images/user.png';
import {API_ADDRESS_LOGIN} from '../../ConstantModule';


class Login extends React.Component {

    constructor(props) {

        super(props);
        
        this.state = {
            users: null
        }      
    }

    componentDidMount() {
        
        fetch(API_ADDRESS_LOGIN)
            .then((response) => response.json())
            .then((data) => {                
                this.setState({
                    users: data
                });           
            });
    }

    render() {

        if (this.state.users == null) {
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
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <h1 className="text-center text-dark mt-5">Вход</h1>
                            <div className="card my-5">
                                <form className="card-body cardbody-color p-lg-5" action={API_ADDRESS_LOGIN} method="POST">

                                    <div className="text-center">
                                        <img src={iconForForm} className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                                            width="200px" alt="profile" />
                                    </div>

                                    <div className="mb-3">
                                        <input type="text" className="form-control" id="userlogin" name="UserLogin" aria-describedby="emailHelp"
                                            placeholder="Введите логин" onChange={this.setLogin} />
                                    </div>

                                    <div className="mb-3">
                                        <input type="password" className="form-control" id="pwd" name="Password" placeholder="Введите пароль" onChange={this.setPassword} />
                                    </div>

                                    <div className="text-center"><button type="submit" className="btn btn-color px-5 mb-5 w-100">Вход</button></div>
                                    <div id="emailHelp" className="form-text text-center mb-5 text-dark">Не зарегистрирован?
                                        <a href="/registration" className="text-dark fw-bold"> Создай аккаунт</a>
                                    </div>

                                    <div  className = "errorColor">{this.state.users.errorlogin}  </div>
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