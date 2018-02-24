import React, { Component } from 'react'
import { I18n } from 'react-i18next'

class About extends Component {
  render() {
    return (
      <I18n ns="about">{(t, { i18n }) => (
        <div className="container">
          {t("content")}
        </div>
      )}</I18n>
    )
  }
}

export default About