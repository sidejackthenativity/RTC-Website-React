import './App.css';
import React from 'react';
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap'
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Contact } from './components/contact';
import { Home } from './components/home';
import { Wpe } from './components/wpe';
import { Portal } from './components/portal';


function App() {
 

  return (
    <BrowserRouter>
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">RTC</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/wpe">Win Priv Esc</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
              <Nav.Link href="https://portal.ryanthompsonconsulting.com/login?client_id=5pral9jttontfv1cd8v8d5606p&response_type=token&scope=aws.cognito.signin.user.admin+email+openid+phone+profile&redirect_uri=https://ryanthompsonconsulting.com/portal">Login</Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>
        <Routes>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/wpe" element={<Wpe/>}/>
          <Route path="/portal" element={<Portal/>}/>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </div>
    
    </div>
    </BrowserRouter>
  );
}

export default App;
