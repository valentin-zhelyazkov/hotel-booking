import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import React, { useEffect, useState, useContext, createContext, useMemo } from 'react';
import Header from './components/header/header';
import Home from './components/home/home';
import Footer from './components/footer/footer';
import Login from './components/login/login';
import Register from './components/register/register';
import AddHotel from './components/addHotel/addHotel';
import Details from './components/details/details';
import Edit from './components/edit/edit';
import Profile from './components/profile/profile'
import HeaderWhenNotLogged from './components/headerWhenNotLogged/headerWhenNotLogged';
import LoggedContext from './contexts/logged-context';
import './App.css';

function App() {
  const [isLogged, setIsLogged] = useState(localStorage.getItem('uid'));

  return (
    <Router>
      <div className="App">
        <LoggedContext.Provider value={{ isLogged, setIsLogged }}>
          {isLogged ? <Header /> : <HeaderWhenNotLogged />}
          <Switch>
            <Route path="/" exact component={Home} />
            {isLogged ? <Route path="/add" exact component={AddHotel} /> : null}
            {isLogged ? <Route path="/profile" exact component={Profile} /> : null}
            {isLogged ? <Route path="/details/:hotelId" exact component={Details} /> : null}
            {isLogged ? <Route path="/edit/:hotelId" exact component={Edit} /> : null}
            {!isLogged ? <Route path="/login" exact component={Login} /> : null}
            {!isLogged ? <Route path="/register" exact component={Register} /> : null}
            <Redirect to="/" />
          </Switch>
        </LoggedContext.Provider>
        <Footer />
      </div>
    </Router>
  );
}


export default App;
