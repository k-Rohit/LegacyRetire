import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import Learn from './components/Learn/Learn';
import Operation from './components/StockRecm/Operation';
import StockSugg from './components/StockRecm/StockSugg';

function App() {
  return (
      <div className="App">
        <NavBar />
        <NavBar/>
       <Hero/>
       <Learn/>
       <StockSugg/> 
      <Operation/>         
      </div>
    
  );
}

export default App;
