import React, { Component } from 'react'
import { I18n } from 'react-i18next'
import { Jumbotron, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Container, Row, Col  } from 'reactstrap'

import P1 from '../../Images/TMP-P1.jpg'
import P2 from '../../Images/TMP-P2.jpg'
import P3 from '../../Images/TMP-P3.jpg'
import P4 from '../../Images/TMP-P4.jpg'

import '../../Styles/About.css'

class About extends Component {
  render() {
    return (
      <I18n ns="About">{(t, { i18n }) => (
        <div id="About">
          <Jumbotron>
            <h1 className="display-3">{t("Landingpage:About")}</h1>
            <p className="lead">
              {t("Content")}
            </p>
          </Jumbotron>

          <Container>
            <Row>
              <Col>
                <Card>
                  <CardImg top width="100%" src={P1} alt="Card" />
                  <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                  </CardBody>
                </Card>
              </Col>

              <Col>
                <Card>
                  <CardImg top width="100%" src={P2} alt="Card" />
                  <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                  </CardBody>
                </Card>
              </Col>

              <Col>
                <Card>
                  <CardImg top width="100%" src={P3} alt="Card" />
                  <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                  </CardBody>
                </Card>
              </Col>

              <Col>
                <Card>
                  <CardImg top width="100%" src={P4} alt="Card" />
                  <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
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

export default About