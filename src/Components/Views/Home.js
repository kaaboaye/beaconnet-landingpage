import React, { Component } from 'react'
import { I18n } from 'react-i18next'

import { Container, Row, Col,
  Card, CardText, CardBody, CardTitle } from 'reactstrap'

import '../../Styles/Home.css'
import Video from '../../Images/TMP-VIDEO.mp4'
import Poster from '../../Images/TMP-bingmap.png'

class Home extends Component {
  render() {
    return (
      <I18n ns="Landingpage">{(t, { i18n }) => (
      <div id="Home">
        <video autoPlay loop muted poster={Poster}>
          <source src={Video} type="video/mp4"/>
        </video>

        <Container>
          <Row>
            <Col>
              <Card>
                <CardBody>
                  <CardTitle tag="h1">{t("Title")}</CardTitle>
                  <CardText>{t("About:Content")}</CardText>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      )}</I18n>
    )
  }
}

export default Home