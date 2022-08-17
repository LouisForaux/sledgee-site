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
} from "reactstrap";
// core components
import ExamplesNavbar from "./components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "./components/Headers/LandingPageHeader.js";
import DemoFooter from "./components/Footers/DemoFooter.js";


function Thanks() {

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
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
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title">Merci !</h2>
                <h5 className="description">
                  Nous avons bien pris en compte votre demande.
                  Nous allons vite revenir vers vous par email ou directement par téléphone afin de convenir du meilleur rendez-vous qui correspond à vos besoins et disponibilités.
                </h5>
                <br />
                <Button
                  className="btn-round"
                  color="info"
                  href="https://www.ringover.me/EU_X6dOeNDCcD+s5sA"
                  onClick={(e) => e.preventDefault()}
                >
                  J'ai besoin d'appeller quelqu'un
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <DemoFooter />
    </>
  );
}
export default Thanks;
