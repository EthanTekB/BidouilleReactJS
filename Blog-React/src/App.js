import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header'
import Description from './components/Description'
import AboutMe from './components/AboutMe'
import MyCv from './components/MyCv'
import Links from './components/Links'


function App() {
  return (
      <div className="body">
      <Header />
      <Description/>
      <AboutMe/>
      <MyCv/>
      <Links/>  
      </div>
  );
}

export default App;
