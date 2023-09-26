import React, { useEffect, useState } from 'react';
import  {NavBar}  from "./components/NavBar";
import './App.css';
import Footer from './components/Footer';
import {CircleLoader} from 'react-spinners'
import { PopupWidget } from "react-calendly";
import HomeScreen from './Screens/HomeScreen';
import logo from "./assets/img/logo1.png";


import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFound from './components/PageNotFound';
import Leadership from './Screens/Signup/Leadership';
function App() {
  const [pageLoaded,setPageLoaded] = useState(false)

  useEffect(() =>{

    setTimeout(() =>setPageLoaded(true),1000)
  },[pageLoaded]);



  if(pageLoaded==false) {
    return (
      <div className='landing'>
        <CircleLoader
          color='white'
          size={80}
          speedMultiplier={1}
        />
        <img src={logo} alt='Logo' className='logo' />
      </div>
    );
  }else
  return (
    <BrowserRouter>
      <div className='App'>
        <PopupWidget
          url='https://calendly.com/digital_surges/30min'
          /*
           * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
           * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
           */
          rootElement={document.getElementById("root")}
          text='Click here to schedule!'
          textColor='#ffffff'
          color='#00a2ff'
        />
        <NavBar />
        <Routes>
          <Route path='/' element={<HomeScreen />} />
          <Route path='/leadership' element={<Leadership />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
