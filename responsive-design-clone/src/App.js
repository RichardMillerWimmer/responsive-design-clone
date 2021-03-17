import React, { Component } from 'react'

import Header from './components/Header'
// import Nav from './components/Nav'

import './App.css';

class App extends Component {

  render() {
    return (
      <div className='App'>
        <Header />
        <div className='hero'>
          <div className='heroContent'>
            <h2>Grayscale</h2>
            <p>A free, responsice, one page Bootstrap theme created by Start Bootstrap.</p>
            <a className='linkBtn'>Get Started</a>
          </div>
        </div>
      </div >
    );
  }
}

export default App;