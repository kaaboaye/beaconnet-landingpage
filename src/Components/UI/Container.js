import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Home from "../Views/Home";
import About from "../Views/About";
import Routes from "../../routes";
import OpenSource from "../Views/OpenSource";

class Container extends Component {
  render() {
    return (
      <div id="UIContainer">
        <Route exact path={Routes.Home} component={Home} />
        <Route exact path={Routes.About} component={About} />
        <Route exact path={Routes.OpenSource} component={OpenSource} />
      </div>
    )
  }
}

export default Container