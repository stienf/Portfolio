import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Hero(props) {

    return(
        <Jumbotron className="bg-transparent jumbotron-fluid p-0">
            <Container fluid={false}>
                <Row>
                    <Col lg={6} md={8} xs={12}>
                        <div className="titles">
                       
                        { props.title && <h1>{props.title}</h1> }
                        </div>
                        <div className="subtitle">
                        { props.subtitle && <h4 className="display-5 font-weight-light">{props.subtitle}</h4> } 
                        </div>
                        
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );

}


export default Hero;