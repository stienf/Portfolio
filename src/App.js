import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'
import './index.css';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import WebAppPage from './pages/WebAppPage';
import PhotographyPage from './pages/PhotographyPage';
import PhotoPageVietnam from './pages/PhotoPageVietnam';
import PhotoPageCA from './pages/PhotoPageCA';
import PhotoPageZA from './pages/PhotoPageZA';
import PhotoPageKask from './pages/PhotoPageKask';
import PhotoPageMar from './pages/PhotoPageMar';
import PhotoPageAnaloog from './pages/PhotoPageAnaloog';



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Stien Franssens',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/over' },
        { title: 'Contact', path: '/contact' },
      ],
      home: {
        title: 'Hallo, ik ben Stien',
        subtitle: 'Een enthousiaste creatieveling met interesse in (online) marketing, fotografie en web development.',
      },
      about: {
        title: 'Over mij',
      },
      contact: {
        title: 'Zin in een praatje?',
      },
      fotografie: {
        title: 'fotografie'
      },
      webapps: {
        title:'web apps'
      }
  
      
    }
  }
  render() {
    return (
<Router basename={`${process.env.PUBLIC_URL}/`}>
          <Container className="p-0" fluid={true}>
          <Navbar className="border-bottom" expand="lg">
            <Link className="nav-link title" to="/">STIEN FRANSSENS</Link>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/over">Over mij</Link>
                <NavDropdown title="Portfolio" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="/fotografie">Fotografie</NavDropdown.Item>
                  <NavDropdown.Item href="/web-applicaties">Websites</NavDropdown.Item>
                  <NavDropdown.Item href="/">Projecten</NavDropdown.Item>
                </NavDropdown>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subtitle={this.state.home.subtitle} />} />
          <Route path="/over" render={() => <AboutPage title={this.state.about.title} />} />
          <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} />} />
          <Route path="/fotografie" render={() => <PhotographyPage title={this.state.fotografie.title}/>} />
          <Route path="/web-applicaties" render={() => <WebAppPage title={this.state.webapps.title}/>} />
          <Route exact path='/' component={Home}/>

          <Route path="/vietnam" render={() => <PhotoPageVietnam />} />
          <Route path="/centraal-amerika" render={() => <PhotoPageCA />} />
          <Route path="/zuid-afrika" render={() => <PhotoPageZA />} />
          <Route path="/kask" render={() => <PhotoPageKask />} />
          <Route path="/marrakech" render={() => <PhotoPageMar />} />
          <Route path="/analoog" render={() => <PhotoPageAnaloog />} />

        </Container>
      </Router>

    );
    
  }
  
}

export default App;
