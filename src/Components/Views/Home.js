import React, { Component } from 'react'
import { I18n } from 'react-i18next'
import { Jumbotron } from 'reactstrap'

import '../../Styles/Home.css'

class Home extends Component {
  render() {
    return (
      <I18n ns="Landingpage">{(t, { i18n }) => (
      <div id="Home">
        <Jumbotron>
          <h1 className="display-3">{t("Title")}</h1>
          <p className="lead">
            {t("About:Content")}
          </p>
        </Jumbotron>
        <iframe width="100%" ref="mapFrame" height="320px" src="/map.html" title="Map" scrolling="no"/>
      </div>
      )}</I18n>
    )
  }
}

export default Home