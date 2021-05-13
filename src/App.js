import React, { Component } from 'react'
import ContactPage from './ContactPage/Contact.js'
import './App.css'
import CardContainer from './Component/main-page/cards/CardContainer'
import Footer from './Component/main-page/footer/Footer'
import Background from './LandingPage/Background/Background';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <h1>Hey</h1> */}
        <ContactPage />
//         <Background/>
//         <CardContainer/>
//         <Footer/>
      </div>
    );
  }
}

export default App;
