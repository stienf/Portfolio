import React from 'react';

import Hero from '../components/Hero';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';


function HomePage(props) {
    return (
        <div className="homepage">
            <Hero title={props.title} subtitle={props.subtitle} text={props.text} />
            <Container fluid={false}>
                <Row>
                    <Col md={8} sm={12}>
                        <form method="get" action="/about">
                            <button className="homeBtn" type="submit">MEER OVER MIJ</button>
                        </form>

                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default HomePage;