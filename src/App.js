import React, { Component } from 'react';
import './App.css';
import Navigation from './components/navigation/Navigation';
import Hero from './components/hero/Hero';
import CardDisplay from './components/carddisplay/CardDisplay';
import TableDisplay from './components/tableDisplay/TableDisplay';
import Footer from './components/footer/Footer';



class App extends Component {
  render() {
    return (

      <div>
      <Navigation/>
      <Hero/>
      <CardDisplay/>
      <TableDisplay/>
      <Footer/>
      </div>
    );
  }
}

export default App;
