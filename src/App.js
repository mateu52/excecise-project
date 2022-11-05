import './';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';

import './App.css';
import React from 'react';
import Home from './components/home/home';
import Btn from './components/refreshbutton/btn';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Userinfo from './components/refreshbutton/userinfo';
import Stopwatch from './components/Stopwatch/Stopwatch';
import Form from './components/Form/Form';

function App() {
  return (
    <Router>
      <div>
        <Navbar bg="light" expand="md">
          <Container>
              <Navbar.Brand>
              <img
              alt=""
              src={require("./aautoptr.jpg")}
              width="35"
              height="45"
              className="d-inline-block align-top"
            />{'M.W'}
              </Navbar.Brand> 
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className='me-auto'>
                <Nav.Link ><Link className="link" to='/'>Home</Link></Nav.Link>
                <Nav.Link ><Link className="link" to='/buttonusers'>Button</Link></Nav.Link>
                <Nav.Link ><Link className="link" to='/Form'>Form</Link></Nav.Link>
                <Nav.Link ><Link className="link" to='/Stoper'>Stoper</Link></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/buttonusers/:userId' element={<Userinfo />} />
          <Route path='/buttonusers' element={<Btn />} />
          <Route path='/Form' element={<Form />} />
          <Route path='/Stoper' element={<Stopwatch />} />
        </Routes>
      </div>
      
    </Router>
  );
}

export default App;
