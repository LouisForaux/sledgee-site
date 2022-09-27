 /* eslint-disable */
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
  Form,
  Input,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";
// core components
import ExamplesNavbar from "./components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "./components/Headers/LandingPageHeader.js";
import DemoFooter from "./components/Footers/DemoFooter.js";


function LandingPage() {

console.log('LANDING LOADED');
  document.documentElement.classList.remove("nav-open");
  document.title = 'SLEDGEE - Votre référence web en Seine-Et-Marne';
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  
  return (
    <>
      <ExamplesNavbar />
      <LandingPageHeader />
      <div className="main">
        <div className="section text-center">
          <Container>
            <Row>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-album-2" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Besoin de graphisme ?</h4>
                    <p className="description">
                      Nous avons également la capacité de vous fournir un logo et des élements marketings basés sur votre site internet
                    </p>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-bulb-63" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Nouvelles idées ?</h4>
                    <p>
                      Vous voulez un site internet innovant et basé sur vos idées et besoins ? Vous êtes au bon endroit !
                    </p>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-chart-bar-32" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Statistiques</h4>
                    <p>
                      Dans chaque offre de création de site internet, nous vous fournissons des statistiques. Votre plateforme auto-hébergée, pour être 100% conforme RGPD !
                    </p>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-sun-fog-29" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">N'importe quand</h4>
                    <p>
                      Uniquement en début de journée ou en fin de journée pour votre dépannage ? Nous nous adaptons à vos besoins ! Et toujours au même prix, 35€/heure, déplacement inclus
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* <div className="section section-dark text-center hidden" >
          <Container>
            <h2 className="title">A propos de nous</h2>
            <Row>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={
                          require("./assets/img/faces/clem-onojeghuo-3.jpg")
                            .default
                        }
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Henry Ford</CardTitle>
                        <h6 className="card-category">Product Manager</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      Teamwork is so important that it is virtually impossible
                      for you to reach the heights of your capabilities or make
                      the money that you want without becoming very good at it.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-google-plus" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={
                          require("./assets/img/faces/joe-gardner-2.jpg").default
                        }
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Sophie West</CardTitle>
                        <h6 className="card-category">Designer</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      A group becomes a team when each member is sure enough of
                      himself and his contribution to praise the skill of the
                      others. No one can whistle a symphony. It takes an
                      orchestra to play it.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-google-plus" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={
                          require("./assets/img/faces/erik-lucatero-2.jpg")
                            .default
                        }
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Robert Orben</CardTitle>
                        <h6 className="card-category">Developer</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      The strength of the team is each individual member. The
                      strength of each member is the team. If you can laugh
                      together, you can work together, silence isn’t golden,
                      it’s deadly.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-google-plus" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Container>
        </div> */}
        <div className="section landing-section" id="Contact">
          <Container>
            <Row className="justify-content-md-center">
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="text-center">Vous êtes prêts ?</h2>
                <Form action='https://crm.zoho.eu/crm/WebToLeadForm' name="WebToLeads501857000000419035" method='POST' onSubmit={()=>{return checkMandatory501857000000419035()}} className="contact-form" acceptCharset='UTF-8'>
                  <input type='text' style={{display: 'none'}} name='xnQsjsdp' value='20693a94d15b4e01dd0c3a25f181bc91cbf989dff7b6ef66dcb601774c014d32' readOnly></input> 
                  <input type='hidden' name='zc_gad' id='zc_gad' value='' readOnly ></input> 
                  <input type='text' style={{display: 'none'}} name='xmIwtLD' value='0c7877eea7c0767da04f3037f38bfcfbf1ccb5d38560da92ef4dfb32854e0b99' readOnly></input> 
                  <input type='text'  style={{display: 'none'}} name='actionType' value='TGVhZHM=' readOnly></input>
                  <input type='text' style={{display: 'none'}} name='returnURL' value='https&#x3a;&#x2f;&#x2f;sledgee.com&#x2f;thanks' readOnly></input>

                    <input type='text' style={{display: 'none'}} id='ldeskuid' name='ldeskuid'></input>
                    <input type='text' style={{display: 'none'}} id='LDTuvid' name='LDTuvid'></input>
                    <Row>
                      <Col md="6">
                        <div className='zcwf_row'>
                          <div className='zcwf_col_lab'>
                            <label for='First_Name'>Prénom<span >*</span></label>
                          </div>
                          <div className='zcwf_col_fld'>
                            <Input type='text' id='First_Name' name='First Name' maxLength='40'></Input>
                            <div className='zcwf_col_help'></div>
                          </div>
                        </div>
                      </Col>
                      <Col md="6">
                        <div className='zcwf_row'>
                          <div className='zcwf_col_lab' >
                            <label for='Last_Name'>Nom<span >*</span></label>
                          </div>
                          <div className='zcwf_col_fld'>
                            <Input type='text' id='Last_Name' name='Last Name' maxLength='80'></Input>
                            <div className='zcwf_col_help'></div>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <Row> 
                      <Col md="6">
                        <div className='zcwf_row'>
                          <div className='zcwf_col_lab' >
                            <label for='Company'>Société<span >*</span></label>
                          </div>
                          <div className='zcwf_col_fld'>
                            <Input type='text' id='Company' name='Company' maxLength='200'></Input>
                            <div className='zcwf_col_help'></div>
                          </div>
                        </div>
                      </Col>
                      <Col md="6">
                        <div className='zcwf_row'>
                          <div className='zcwf_col_lab' >
                            <label for='Phone'>Téléphone<span >*</span></label>
                          </div>
                          <div className='zcwf_col_fld'>
                            <Input type='text' id='Phone' name='Phone' maxLength='30'></Input>
                            <div className='zcwf_col_help'></div>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <div className='zcwf_row'>
                        <div className='zcwf_col_lab' >
                          <label for='Description'>Description de votre projet<span >*</span></label>
                        </div>
                        <div className='zcwf_col_fld'>
                          <Input placeholder="Décrivez-nous votre projet ou problème."
                    type="textarea"
                    rows="4"
                     id='Description' name='Description'></Input>
                          <div className='zcwf_col_help'></div>
                        </div>
                      </div>
                    </Row>
                    <Row>
                      <div className='zcwf_row'>
                        <div className='zcwf_col_lab'></div>
                        <div className='zcwf_col_fld'>
                          <Col md="6">
                            <Button type='submit' id='formsubmit' className="btn-fill" color="danger" size="lg" value='Soumettre' title='Soumettre'>Soumettre</Button>
                          </Col>
                        </div>
                      </div>
                    </Row>
                </Form>
                {/* <Form className="contact-form" action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8" method="POST">
                    <input type="hidden" name="oid" value="00D7Q00000AAI40" />
                    <input type="hidden" name="retURL" value="https://sledgee.com/thanks" />

                  <Row>
                    <Col md="6">
                      <label>Prénom</label>
                      <InputGroup>
                        <Input placeholder="Prénom" type="text" name="first_name"/>
                      </InputGroup>
                    </Col>
                    <Col md="6">
                      <label>Nom</label>
                      <InputGroup>
                        <Input placeholder="Nom" type="text" name="last_name"/>
                      </InputGroup>
                    </Col>
                    <Col md="6">
                      <label>Email</label>
                      <InputGroup>
                        <Input placeholder="Email" type="email" name="email"/>
                      </InputGroup>
                    </Col>
                    <Col md="6">
                      <label>Ville</label>
                      <InputGroup>
                        <Input placeholder="Ville" type="text" name="city"/>
                      </InputGroup>
                    </Col>
                    <Col md="6">
                      <label>Entreprise</label>
                      <InputGroup>
                        <Input placeholder="Entreprise" type="text" name="company"/>
                      </InputGroup>
                    </Col>
                    <Col md="6">
                      <label>Téléphone</label>
                      <InputGroup>
                        <Input placeholder="Téléphone" type="phone" name="phone"/>
                      </InputGroup>
                    </Col>
                  </Row>
                  <label>Message</label>
                  <Input
                    placeholder="Décrivez-nous votre projet ou problème."
                    type="textarea"
                    rows="4"
                    name="description"
                  />
                  <Row>
                    <Col className="ml-auto mr-auto" md="6">
                      <Button className="btn-fill" color="danger" size="lg" name="submit">
                        Envoyer ma demande
                      </Button>
                    </Col>
                  </Row>
                </Form> */}
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <DemoFooter />
    </>
  );
}
export default LandingPage;
