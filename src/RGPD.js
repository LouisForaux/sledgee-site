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
  Container,
  Row,
  Col,
} from "reactstrap";
// core components
import ExamplesNavbar from "./components/Navbars/ExamplesNavbar.js";
import DemoFooter from "./components/Footers/DemoFooter.js";


function RGPD() {

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
                <h2 className="title">RGPD</h2>
                <h5 className="description">
                  Gérez vos préférences de cookies
                </h5>
                <br />
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section text-center">
          <Container>
            <Row>
              <Col md="12">
                <script id="CookieDeclaration" src="https://consent.cookiebot.com/8f1419e7-e187-4df4-b6be-4ac8fe98d3df/cd.js" type="text/javascript" async></script>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <DemoFooter />
    </>
  );
}
export default RGPD;
