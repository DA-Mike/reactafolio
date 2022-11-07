import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import bootstrap from 'bootstrap';
// import { Collapse } from bootstrap;
// import Collapse from 'react-bootstrap/Collapse'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

function Navigation({ currentPage, handlePageChange }) {
  return (
    <>
      <Navbar bg="primary" variant="dark" class='navbar'>
        <Container>
          <Navbar.Brand href="#about" onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>Mike Rugh</Navbar.Brand>
          <Nav className="nav-items">
            <Nav.Link href="#about" onClick={() => handlePageChange('About')}
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>About Me</Nav.Link>
            <Nav.Link href="#portfolio" onClick={() => handlePageChange('Portfolio')}
            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>Portfolio</Nav.Link>
            <Nav.Link href="#contact" onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact Me</Nav.Link>
            <Nav.Link href="#resume" onClick={() => handlePageChange('Resume')}
            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>Resume</Nav.Link>
          </Nav>
          <div className="container-fluid nav-ham">
          <nav className="navbar navbar-expand-lg navbar-light bg-light m-4 rounded shadow">
              <div className="container-fluid">
                  <button className="navbar-toggler" type="button"
                      data-bs-toggle="collapse" data-bs-target="#navbarNav"
                      aria-controls="navbarNav" aria-expanded="false"
                      aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNav">
                      <ul className="navbar-nav ms-auto">
                          <li className="nav-item">
                              <a aria-current="page" href="#about"  onClick={() => handlePageChange('About')}
                                  className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>About</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link" href="#portfolio">Portfolio</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link" href="/">Contact</a>
                          </li>
                      </ul>
                  </div>
              </div>
          </nav>
          </div>
        </Container>
      </Navbar>
      
    </>
  );
}

export default Navigation;
