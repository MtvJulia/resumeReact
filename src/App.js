import React from 'react';

import { Route, Link, BrowserRouter } from 'react-router-dom';

import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import UserData from './components/UserData/UserData';

import './App.css';
// import mainPhoto from './images/dance2.jpg';


class App extends React.Component {

  render() {

    return (
      <div className="container-fluid mainApp" >
        <BrowserRouter>
          {/* <!-- Second navbar for sign in --> */}
          <nav className="navbar navbar-expand-sm navbar-default sticky-top">
            <div className="container ">

              {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
              <div className="collapse navbar-collapse" id="navbar-collapse">

                <ul className="nav ">
                  {/* navbar-nav */}
                  <li className="nav-item"><a href="/">Home</a></li>
                  <li className="nav-item"><a href="#">About</a></li>
                  <li className="nav-item"><a href="#">Services</a></li>
                  <li className="nav-item"><a href="#">Works</a></li>
                  <li className="nav-item"><a href="http://localhost:3000/userdata">News</a></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li><Link to="/login" className="btn btn-primary">Вход</Link></li>
                  <li><Link to="/registration" className="btn btn-primary">Регистрация</Link></li>
                </ul>
              </div>
            </div>
          </nav>

          <div className="container-fluid">
            <Route path="/login" component={Login} />
            <Route path="/registration" component={Registration} />
            <Route path="/userdata" component={UserData} />
          </div>

        </BrowserRouter>

        <div className="container">
          <div className="photo">
            {/* <img src={mainPhoto} alt="mainPhoto" /> */}

          </div>
        </div>

        {/* <div class="container">
          <h3>Basic Navbar Example</h3>
          <p>A navigation bar is a navigation header that is placed at the top of the page.</p>
        </div> */}

      </div>
    );
  }
}

export default App;

