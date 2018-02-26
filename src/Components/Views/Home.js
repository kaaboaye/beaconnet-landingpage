import React, { Component } from 'react'
import { I18n } from 'react-i18next'

import { Container, Row, Col,
  Card, CardBody, CardText } from 'reactstrap'

import '../../Styles/Home.css'
import Video from '../../Images/MapVideo.mp4'
import Poster from '../../Images/MapPoster.jpg'

class Home extends Component {
  render() {
    return (
      <I18n ns="Landingpage">{(t, { i18n }) => (
      <div id="Home">
        <video autoPlay loop muted poster={Poster}>
          <source src={Video} type="video/mp4"/>
        </video>

        <div id="Header">
          <h1>{t("Title")}</h1>
        </div>

        <div className="Content">
          <Container>
            <Row>
              <Col>
                <Card>
                  <CardBody>
                    <CardText>{t("About:Content")}{t("About:Content")}{t("About:Content")}{t("About:Content")}{t("About:Content")}</CardText>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      )}</I18n>
    )
  }
}

export default Home