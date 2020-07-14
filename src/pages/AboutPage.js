import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ProgressBar from 'react-bootstrap/ProgressBar';
import cv from '../assets/documents/CV-Stien-Franssens-2020_1.pdf';



function AboutPage(props) {
    return (
        <>
            <Container fluid={true}>
                <Row>
                    <Col className="aboutColPhoto" lg={6}>
                    </Col>

                    <Col classnName="aboutcol" lg={6}>
                        <div className="intro">
                            <h2 className="AboutTitle">Over Mij</h2>
                            <h5 className="introTitle">Stien <br/> Franssens <span className="introText"><i class="fas fa-map-pin"></i>   Gent</span></h5> 
                            <p className="introSub">Welkom! <br/><br className="br"/>
                                                    Ik ben Stien, een enthousiaste creatieveling met kennis van online marketing, web development en fotografie.<br/>
                                                   Een marketing- of communicatiefunctie waar ik mijn creatieve geest en inlevingsvermogen optimaal kan benutten, daar kijk ik naar uit!<br/>
                                                    Collegialiteit en professionele groei zijn waarden die ik hoog in het vaandel draag op de werkvloer.<br/><br className="br"/>
                                                    Ik kijk ernaar uit u te ontmoeten!
                                                    </p><br/>
                            <div className="introDiv">
                            <a className="introLink" href="/contact">Contact</a> 
                            <a className="introLink" href={cv} download="CV-Stien-Franssens">Download CV</a>
                            
                            </div>
                            

                        </div>
                    </Col>
                </Row>
            </Container>
            <Container fluid={true}>
                <Row className="displaybig">
                    <Col classnName="aboutcol" lg={6}>
                        <div className="studyDiv">
                            <div className="studies">
                                <h5 className="studyTitle">Web Development</h5>
                                <p className="studyPlace">Intec Brussel</p>
                                <p className="studyYears">februari 2020 - september 2020</p>
                            </div>
                            <br className="br" /> <br className="br"/>
                            <div className="studies">
                                <h5 className="studyTitle">Bachelor Communicatiemanagement</h5>
                                <p className="studyPlace">Arteveldehogeschool Gent</p>
                                <p className="studyYears">september 2014 - januari 2018</p>
                                <p className="studyText"><i class="fas fa-star"></i> Afgestudeerd met onderscheiding</p>
                                <p className="studyText"><i class="fas fa-star"></i> Laureaat 'Beste Praktijkcase 2016-2017'   | <a className="eaca" href="#eaca"> meer info</a></p>
                            </div>
                            <br className="br"/> <br className="br"/>
                            <div className="studies">
                                <h5 className="studyTitle">Eerste Bachelor Fotografie</h5>
                                <p className="studyPlace">KASK Gent</p>
                                <p className="studyYears">september 2013 - augustus 2014</p>
                            </div>
                        </div>
                    </Col>
                    <Col className="studyCover" lg={6} >
                        <h3 className="CVTitles-study">Studies</h3>
                    </Col>
                </Row>
                <Row className="displaysmall">
                <Col className="studyCover" lg={6} >
                        <h3 className="CVTitles-study">Studies</h3>
                    </Col>
                    <Col classnName="aboutcol" lg={6}>
                        <div className="studyDiv">
                            <div className="studies">
                                <h5 className="studyTitle">Web Development</h5>
                                <p className="studyPlace">Intec Brussel</p>
                                <p className="studyYears">februari 2020 - september 2020</p>
                            </div>
                            <br className="br" /> <br className="br"/>
                            <div className="studies">
                                <h5 className="studyTitle">Bachelor Communicatiemanagement</h5>
                                <p className="studyPlace">Arteveldehogeschool Gent</p>
                                <p className="studyYears">september 2014 - januari 2018</p>
                                <p className="studyText"><i class="fas fa-star"> </i> Afgestudeerd met onderscheiding</p>
                                <p className="studyText"><i class="fas fa-star"> </i> Laureaat 'Beste Praktijkcase 2016-2017'   | <a className="eaca" href="#eaca"> meer info</a></p>
                            </div>
                            <br className="br"/> <br className="br"/>
                            <div className="studies">
                                <h5 className="studyTitle">Eerste Bachelor Fotografie</h5>
                                <p className="studyPlace">KASK Gent</p>
                                <p className="studyYears">september 2013 - augustus 2014</p>
                            </div>
                        </div>
                    </Col>
                
                </Row>
                <Row>
                    <Col className="workCover" lg={6}>
                        <h3 className="CVTitles-work">Werkervaring</h3>
                    </Col>
                    <Col classnName="aboutcol" lg={6}>
                        <div className="workDiv">
                            <div className="work">
                                <h5 className="workTitle">Klantverantwoordelijke</h5>
                                <p className="workPlace">Nestor NV - Sint-Martens-Latem</p>
                                <p className="workYears">september 2019 - december 2019</p>
                                <p className="workText"><i class="fas fa-caret-right"> </i> Sollicitatiegesprekken voeren en opvolgen</p>
                                <p className="workText"><i class="fas fa-caret-right"> </i> Contracten aanmaken en planning doorgeven</p>
                            </div>
                            <br className="br"/> <br className="br" />
                            <div className="work">
                                <h5 className="workTitle">Business Support Officer</h5>
                                <p className="workPlace">Tobania | ING - Gent</p>
                                <p className="workYears">september 2014 - januari 2018</p>
                            </div>
                            <br className="br"/> <br className="br"/>
                            <div className="work">
                                <h5 className="workTitle">Stagiaire Communicatie/Online Marketing</h5>
                                <p className="workPlace">La Esperanza Granada - Nicaragua</p>
                                <p className="workYears">september 2017 - december 2017</p>
                                <p className="workText"><i class="fas fa-caret-right"> </i> Beheren van de website, blog en sociale mediakanalen</p>
                                <p className="workText"><i class="fas fa-caret-right"> </i> Content creëren: blogberichten, foto's, promotievideo's, ...</p>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="displaysmall">
                <Col className="projectCover" lg={6}>
                        <h3 className="CVTitles-project">Projecten & Certificaten</h3>                    
                        </Col>
                    <Col className="aboutcol" lg={6}>
                        <div className="projectDiv">
                            <div className="project">
                                <h5 className="projectTitle" id="eaca">EACA Ad Venture Competition</h5>
                                <p className="projectSub">"Raising awareness for gender equality"</p>
                                <p className="projectYears">2017 </p>
                                <p className="projectText">Top 10 finalist in Europese wedstrijd | Laureaat 'Beste Praktijkcase'</p>
                                <a className="eaca" href="https://www.eaca-inspire.eu/students/ad-venture/previous-editions/winners-2017/">Bekijk Project | Team SKIRT</a>
                            </div>
                            <br className="br"/> <br className="br"/>
                            <div className="project">
                                <h5 className="projectTitle">Google Certificaat </h5>
                                <p className="projectSub">De Basisprincipes van Online Marketing</p>
                                <p className="projectYears">2020</p>
                            </div>
                            <br className="br"/> <br className="br"/>
                            <div className="project">
                                <h5 className="projectTitle">Google Certificaat</h5>
                                <p className="projectSub">Google Analytics Individual Qualification</p>
                                <p className="projectYears">2020</p>
                            </div>
                        </div>
                    </Col>
             

                </Row>

                <Row className="displaybig">
                    <Col className="aboutcol" lg={6}>
                        <div className="projectDiv">
                            <div className="project">
                                <h5 className="projectTitle" id="eaca">EACA Ad Venture Competition</h5>
                                <p className="projectSub">"Raising awareness for gender equality"</p>
                                <p className="projectYears">2017 </p>
                                <p className="projectText">Top 10 finalist in Europese wedstrijd | Laureaat 'Beste Praktijkcase'</p>
                                <a className="eaca" href="https://www.eaca-inspire.eu/students/ad-venture/previous-editions/winners-2017/">Bekijk Project | Team SKIRT</a>
                            </div>
                            <br className="br"/> <br className="br"/>
                            <div className="project">
                                <h5 className="projectTitle">Google Certificaat </h5>
                                <p className="projectSub">De Basisprincipes van Online Marketing</p>
                                <p className="projectYears">2020</p>
                            </div>
                            <br className="br"/> <br className="br"/>
                            <div className="project">
                                <h5 className="projectTitle">Google Certificaat</h5>
                                <p className="projectSub">Google Analytics Individual Qualification</p>
                                <p className="projectYears">2020</p>
                            </div>
                        </div>
                    </Col>
                    <Col className="projectCover" lg={6}>
                        <h3 className="CVTitles-project">Projecten & Certificaten</h3>                    </Col>

                </Row>


                <Row>
                    <Col className="aboutcol" lg={6}  md={6} sm={6} xs={12}>
                        <div className="langDiv">
                            <h3 className="CVTitles-lang">Talen</h3>
                            <div className="lang">
                                <h5 className="langTitle">Nederlands</h5>
                                <ProgressBar now={100} variant="light" className="progressbar" />
                            </div>
                            <br className="br"/> <br className="br" />
                            <div className="lang">
                                <h5 className="langTitle">Engels</h5>
                                <ProgressBar now={85} variant="light" className="progressbar" />
                            </div>
                            <br className="br"/> <br className="br"/>
                            <div className="lang">
                                <h5 className="langTitle">Frans</h5>
                                <ProgressBar now={60} variant="light" className="progressbar" />
                            </div>
                        </div>
                    </Col>
                    <Col className="aboutcol" lg={6} md={6} sm={6} xs={12}>
                        <div className="skillsDiv">
                            <h3 className="CVTitles-skills">skills</h3>
                            <div className="skills">
                                <h5 className="skillsTitle">MS Office</h5>
                            </div>
                            <div className="skills">
                                <h5 className="skillsTitle">Adobe Photoshop</h5>
                            </div>
                            <div className="skills">
                                <h5 className="skillsTitle">HTML</h5>
                            </div>
                            <div className="skills">
                                <h5 className="skillsTitle">CSS</h5>
                            </div>
                            <div className="skills">
                                <h5 className="skillsTitle">Javascript</h5>
                            </div>
                            <div className="skills">
                                <h5 className="skillsTitle">Node.js</h5>
                            </div>
                            <div className="skills">
                                <h5 className="skillsTitle">ReactJS</h5>
                            </div>
                            <div className="portfolioLinkDiv">
                            <a className="portfolioLink" href="/fotografie">Bekijk Foto's</a> 
                            <a className="portfolioLink" href="/web-applicaties">Bekijk Web Apps</a>
                            </div>

                        </div>
                    </Col>
                </Row>
                <Row className="footerDiv">
                    <Col className="aboutcol" lg={6}  md={6} sm={6} xs={12}>
                    <div className="contactDiv">
                        <div className="footer">
                            <h3 className="CVTitles-contact">Contact</h3>
                            <br className="br"/>
                            <a className="footerlink" href="/contact">klik hier</a>
                        </div>
                        </div>
                    </Col>
                    <Col className="aboutcol" lg={6}  md={6} sm={6} xs={12}>
                        <div className="cvDiv">
                        <div className="footer">

                            <h3 className="CVTitles-cv">CV</h3>
                            <br />
                            <a className="footerlink" href={cv} download="CV-Stien-Franssens">Download</a>

                        </div>
                        </div>
                    </Col>

                </Row>
            </Container>
        </>
    );
}

export default AboutPage;