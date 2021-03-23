import React from 'react';
import Header from './components/header/header';
import Home from './components/home/home';
import Footer from './components/footer/footer';
import Login from './components/login/login';
import Register from './components/register/register';
import AddHotel from './components/addHotel/addHotel';
import Details from './components/details/details';
import Edit from './components/edit/edit'; 
import Profile from './components/profile/profile'
import './App.css';


function App() {
  return (
    <div className="App">
      <Header/>
      
      <Profile/>
      <Footer/>
    </div>
  );
}

export default App;
