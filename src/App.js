import React, { useEffect, useState } from 'react';
import { NavBar } from "./components/NavBar";
import './App.css';
import Footer from './components/Footer';
import { CircleLoader } from 'react-spinners';
import { PopupWidget } from "react-calendly";
import HomeScreen from './Screens/HomeScreen';
import logo from "./assets/img/logo2.jpg";
import { lineSpinner } from 'ldrs';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFound from './components/PageNotFound';
import Leadership from './Screens/Signup/Leadership';

function App() {
  // Register lineSpinner when the component mounts
  useEffect(() => {
    lineSpinner.register();
  }, []);

  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setPageLoaded(true), 1000);
  }, []);

  if (!pageLoaded) {
    return (
      <div className='landing'>
        <div className='centered-loader'>
          <img
            src={logo}
            alt='Loader'
            className='logo2 logo2-loader'
          />
        </div>
      </div>
    );
  } else {
    return (
      <BrowserRouter>
        <div className='App'>
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
}

export default App;





/*

import React, { useEffect, useState } from 'react';
import { NavBar } from "./components/NavBar";
import './App.css';
import Footer from './components/Footer';
import { CircleLoader } from 'react-spinners';
import { PopupWidget } from "react-calendly";
import HomeScreen from './Screens/HomeScreen';
import logo from "./assets/img/logo2.jpg";
import { lineSpinner } from 'ldrs';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFound from './components/PageNotFound';
import Leadership from './Screens/Signup/Leadership';

function App() {
  // Register lineSpinner when the component mounts
  useEffect(() => {
    lineSpinner.register();
  }, []);

  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setPageLoaded(true), 1000);
  }, []);

  if (!pageLoaded) {
    return (
      <div className='landing'>
       <l-line-spinner
  size="40"                // Adjust the size of the spinner
  stroke="3"               // Adjust the stroke width of the spinner
  speedMultiplier="1"      // Adjust the speed of the spinner
  color="white"            // Adjust the color of the spinner
></l-line-spinner>

        <img src={logo} alt='Logo' className='logo' />
      </div>
    );
  } else {
    return (
      <BrowserRouter>
        <div className='App'>
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
}

export default App;
*/