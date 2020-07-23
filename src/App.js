import React, { Component } from 'react'
import './App.css'
import CardContainer from './Component/main-page/cards/CardContainer'
import Footer from './Component/main-page/footer/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CardContainer/>
        <Footer/>
      </div>
    )
  }
}

export default App
