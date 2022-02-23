import React from 'react';

import { Route, Link, BrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import About from './components/About/About';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import UserData from './components/UserData/UserData';

import Templates from './components/Templates/Templates';
import Template1 from './components/Templates/Template1';
import Template2 from './components/Templates/Template2';
import Template3 from './components/Templates/Template3';
import Template4 from './components/Templates/Template4';
import Template5 from './components/Templates/Template5';
import Template6 from './components/Templates/Template6';

import Page1 from './components/Pages/Page1';
import Page2 from './components/Pages/Page2';

import './App.css';
import logoPhoto from './images/logoResume.png';
import avatar from './images/avatar.png';


class App extends React.Component {

  logout = () => {
    let login = localStorage.getItem('UserLogin');
    let pass = localStorage.getItem('Password');
    let rememberMe = localStorage.getItem('rememberMe');
    localStorage.clear();
    document.getElementById("guestStatus").hidden = false;
    document.getElementById("userStatus").hidden = true;
    localStorage.setItem('UserLogin', login);
    localStorage.setItem('Password', pass);
    localStorage.setItem('rememberMe', rememberMe);
    localStorage.setItem('isLogin', false);
  }

  render() {
    return (
      <div className="container-fluid p-0">

        <BrowserRouter>
          {/* <!-- navbar --> */}
          <nav className="navbar navbar-expand navbar-default sticky-top">

            <div className="container-fluid">

              {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
              <div className="collapse navbar-collapse" id="navbar-content">


                <ul className="nav links-nav">
                  {/* navbar-nav */}
                  <li>
                    <a className="navbar-brand nav-link" href="/">
                      <img src={logoPhoto} id="logo-photo" alt="" />
                    </a>
                  </li>
                  <li className="nav-item"><a className="nav-link" href="/home">Главная</a></li>
                  <li className="nav-item"><a className="nav-link" href="/services">Карьерные советы</a></li>
                  <li className="nav-item"><a className="nav-link" href="/about">О нас</a></li>
                </ul>

                <ul className="nav" id='guestStatus' hidden>
                  <li><Link to="/login" className="btn btn-primary">Вход</Link></li>
                  <li><Link to="/registration" className="btn btn-primary">Регистрация</Link></li>
                </ul>

                <ul className="nav align-items-center" id='userStatus' hidden>
                  <li><img src={avatar} id="userAvatar" className="rounded-circle my-1" width="80px" alt="user" /></li>
                  <li><Link to="/home" className="btn btn-primary exit-btn" onClick={this.logout}>Выход</Link></li>
                </ul>
              </div>
            </div>
          </nav>

          <div className="container-fluid" id="conteiner-components">
            <Route path='/' exact={true} component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/services" component={Services} />
            <Route path="/about" component={About} />
            <Route path="/login" component={Login} />
            <Route path="/registration" component={Registration} />
            <Route path="/userdata" component={UserData} />
            <Route path="/tmps" component={Templates} />
            <Route path="/tmp1" component={Template1} />
            <Route path="/tmp2" component={Template2} />
            <Route path="/tmp3" component={Template3} />
            <Route path="/tmp4" component={Template4} />
            <Route path="/tmp5" component={Template5} />
            <Route path="/tmp6" component={Template6} />

            <Route path="/kak-opisat'-opyt-raboty-v-rezyume" component={Page1} />
            <Route path="/Navyki-dlya-vashego-rezyume:-kakie-ukazyvat'-v-2022-godu" component={Page2} />
          </div>

        </BrowserRouter>

        <footer className="page-footer font-small static-bottom">
          <div className="footer-copyright text-center py-3 ">
            <ul className="list-inline text-center py-3">
              <li className="list-inline-item"><a href="/">Домой</a></li>
              <li className="list-inline-item"><a href="/services">Карьерные советы</a></li>
              <li className="list-inline-item"><a href="/about">О нас</a></li>
              {/* <li className="list-inline-item"><a href="#">Terms</a></li> */}
              {/* <li className="list-inline-item"><a href="#">Privacy Policy</a></li> */}
            </ul>
            <p className="copyright text-white">ResumeOnline © 2022</p>
          </div>
        </footer>

      </div>
    );
  }
}
export default App;
