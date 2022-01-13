import React from 'react';

import { Route, Link, BrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import About from './components/About/About';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import UserData from './components/UserData/UserData';
import ExistingUserData from './components/ExistingUserData/ExistingUserData';

import './App.css';
import logoPhoto from './images/logoResume.png';


class App extends React.Component {
  render() {
    return (
      <div className="container-fluid" id="mainApp" >

        <BrowserRouter>
          {/* <!-- navbar --> */}
          <nav className="navbar navbar-expand navbar-default sticky-top">

            <div className="container-fluid">

              {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
              <div className="collapse navbar-collapse" id="navbar-collapse">

                <ul className="nav links-nav">
                  {/* navbar-nav */}
                  <li>
                    <a className="navbar-brand nav-link" href="/">
                      <img src={logoPhoto} id="logo-photo" alt="" />
                    </a>
                  </li>
                  <li className="nav-item"><a className="nav-link" href="/home">Главная</a></li>
                  <li className="nav-item"><a className="nav-link" href="/services">Как составить резюме</a></li>
                  <li className="nav-item"><a className="nav-link" href="/about">О нас</a></li>
                  <li className="nav-item"><a className="nav-link" href="http://localhost:3000/existinguserdata">News</a></li>
                </ul>

                <ul className="nav ">
                  <li><Link to="/login" className="btn btn-primary">Вход</Link></li>
                  <li><Link to="/registration" className="btn btn-primary">Регистрация</Link></li>
                </ul>
              </div>
            </div>

          </nav>

          <div className="container-fluid">
            <Route path='/' exact={true} component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/services" component={Services} />
            <Route path="/about" component={About} />
            <Route path="/login" component={Login} />
            <Route path="/registration" component={Registration} />
            <Route path="/userdata" component={UserData} />
            <Route path="/existinguserdata" component={ExistingUserData} />
          </div>

        </BrowserRouter>

      </div>
    );
  }
}
export default App;


