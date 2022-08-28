/*!

=========================================================
* Paper Kit React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Button,
  Container,
  Row,
  Col,
  Badge,
} from "reactstrap";
// core components
import ExamplesNavbar from "./components/Navbars/ExamplesNavbar.js";
import DemoFooter from "./components/Footers/DemoFooter.js";


function Montevrain() {

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    document.title = 'Dépannage informatique Montévrain - SLEDGEE';
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  
  return (
    <>
      <ExamplesNavbar />
      <div className="main">
        <div className="section section-dark text-center justify-content-md-center">
          <Container>
          <Row className="justify-content-md-center">
              <Col className="ml-auto mr-auto" md="8"><br />
                <h2 className="title">Dépannage informatique à Montevrain</h2>
                <h5 className="description">
                  Votre ordinateur ne démarre plus ?
                  Votre ordinateur est lent ? Ou simplement vous voulez installer un anti-virus ou faire un nettoyage mais vous ne savez pas comment faire ?
                </h5>
                <h3><Badge color="success">35€/heure</Badge></h3>
                <br />
                <Button
                  className="btn-round"
                  color="info"
                  href="#RendezVous"
                >
                  Prendre un rendez-vous
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section text-center">
          <Container>
            <Row>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="fa fa-calendar-days" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Dans la semaine</h4>
                    <p className="description">
                      Trouvez un rendez-vous dans la semaine grâce à notre prise de rendez-vous en ligne !
                    </p>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="fas fa-file-invoice" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Besoin d'un devis ?</h4>
                    <p>
                      Contactez-nous directement en utilisant la bulle en bas à droite de l'écran pour obtenir un devis.
                    </p>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="fas fa-arrows-turn-to-dots" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Et si nous ne pouvons réparer sur place</h4>
                    <p>
                      Votre ordinateur part en atelier pour être dépanné dans la semaine, même si cela prends plus de temps que prévu, et toujours au même prix
                    </p>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="fas fa-clock" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">N'importe quand</h4>
                    <p>
                      Uniquement en début de journée ou en fin de journée pour votre dépannage ? Nous nous adaptons à vos besoins ! Et toujours au même prix, 35€/heure !
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="section text-center" id="RendezVous">
          <Container>
            <Row>
              <Col md="12">
              <iframe width='100%' height='750px' src='https://booking.sledgee.com/portal-embed#/customer/142867000000030154' frameborder='0' allowfullscreen='' title="Rendez-Vous Montevrain" > </iframe>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <DemoFooter />
    </>
  );
}
export default Montevrain;
