import React from 'react';
import Header from './components/Header';
import Description from './components/Description';
import AboutMe from './components/AboutMe';
import MyCv from './components/MyCv';
import Links from './components/Links';
import './css/PageStyle.css';


export default class App extends React.Component {
  render() {
    return (
      <div className="body">
        <Header />
        <Description />
        <AboutMe />
        <MyCv />
        <Links />
      </div>
    );
  }
}