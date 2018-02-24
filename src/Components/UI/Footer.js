import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { I18n } from 'react-i18next'

class Footer extends Component {
  render() {
    return (
      <I18n ns="landingpage">{(t, { i18n }) => (
      <footer>
        <p>{t("CookieAlert")}</p>
        <p><Link to="/OpenSource">{t("OpenSource")}</Link></p>
      </footer>
      )}</I18n>
    )
  }
}

export default Footer