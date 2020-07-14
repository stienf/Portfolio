import React from 'react';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function Content(props) {
return(
<Container>
    <Row>
        <Col fluid={true} className="justify-content-center">
        {props.children}
        </Col>
    </Row>
</Container>
);
};

export default Content;