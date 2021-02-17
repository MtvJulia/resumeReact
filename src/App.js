import React from 'react';

import { Route, Link, BrowserRouter } from 'react-router-dom';

import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';


class App extends React.Component {



  
  render() {

    return (
      <div className="container">

        <h2>
          Compani API data
        </h2>
        <BrowserRouter>
        <Link to="/login" className="btn btn-primary">Вход</Link>&nbsp;
        <Link to="/registration" className="btn btn-primary">Регистрация</Link>&nbsp;
       

        <div className="container"> 

        <Route path="/login" component={Login}/>
        <Route path="/registration" component={Registration}/>
      

        </div>
        
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
