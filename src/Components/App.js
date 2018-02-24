import React, { Component } from 'react'

import NavBar from './UI/NavBar'
import Container from "./UI/Container";
import Footer from "./UI/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Container/>
        <Footer/>
      </div>
    )
  }
}

export default App