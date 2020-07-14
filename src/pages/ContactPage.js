import React from "react";
import { Form,Button } from 'react-bootstrap';

import Hero from '../components/Hero';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'



class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
            status: ""
        };
    }

    render() {
        const { status } = this.state;
        return (
            <div className="contactpage">
                <Row className="contactrow">
                    <Col className="form-title">
                        <Container fluid={true} className="praatje">
                        <Hero title={this.props.title}/>
                        </Container>
                        <br/>
                        <a href="tel:+62896706255135"><i class="fas fa-phone-alt"></i></a>
                        <br/>
                        <a className="tel" href="tel:+62896706255135">0492 05 09 30</a>
                        <br/>
                        <a href="mailto:stienfranssens@hotmail.com"><i class="fas fa-envelope"></i></a> 
                        <br/>
                        <a className="mail" href="mailto:stienfranssens@hotmail.com">stienfranssens@hotmail.com</a>  
                        <br/> <br/>
                        <a className="linkedin" href="https://www.linkedin.com/in/stien-franssens/"><i class="fab fa-linkedin-in"></i></a>  
                        <a className="github" href="https://github.com/stienf"><i class="fab fa-github"></i></a>             
                        </Col>
                    <Col className="form-background">
                        <div className="contactform">
                            <h3>Hit me up!</h3>
                            <Form className="form" onSubmit={this.submitForm} action='https://formspree.io/meqrrvea' method="POST">
                                <Form.Group>
                                    <Form.Label className="kop" htmlFor="full-name"> Volledige naam </Form.Label>
                                    <Form.Control id="full-name" name="name" type="text" required={true} />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label className="kop" htmlFor="email"> E-mail </Form.Label>
                                    <Form.Control id="email" name="email" type="email" required={true} />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label className="kop" htmlFor="message"> Bericht </Form.Label>
                                    <Form.Control id="message" name="message" as="textarea" rows='5' required={true} />
                                </Form.Group>
                                <hr/>

                               <Button className="over-btn" type="submit">VERSTUUR</Button>

                                {status === 'SUCCESS' && <p className="d-inline success-msg">Uw e-mail werd verzonden!</p>}
                                {status === 'ERROR' && <p className="d-inline err-msg">Oops, er ging iets mis...</p>}

                            </Form>
                            </div>
                            
                                
                          
                    </Col>
                </Row>
                
            </div>
        );
    }

    submitForm(ev) {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                this.setState({ status: "SUCCESS" });
            } else {
                this.setState({ status: "ERROR" });
            }
        };
        xhr.send(data);
    }
}

export default MyForm;