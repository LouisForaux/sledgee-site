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
import { Button, Container } from "reactstrap";

// core components

function LandingPageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div
        style={{
          backgroundImage:
            "url('../../assets/img/background.jpg')",
        }}
        className="page-header"
        data-parallax={true}
        ref={pageHeader}
      >
        <div className="filter" />
        <Container>
          <div className="motto text-center">
            <h1>Un site ? Une réparation ?</h1>
            <h3>N'attendez pas que votre ordinateur ne fonctionne plus</h3>
            <br />
            <Button
              className="btn-round mr-1"
              color="neutral"
              outline
              data-co-bot-display="pop-up" data-co-bot="BOT-8030FC5F23" href="#"
            >
              <i className="fa fa-calendar" />
              Prendre un rendez-vous
            </Button>
            <span>   </span>
            <Button className="btn-round contact-button" color="neutral" type="button" outline href="#Contact">
              Nous contacter
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
}

export default LandingPageHeader;
