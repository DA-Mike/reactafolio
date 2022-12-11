import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

function Navigation({ currentPage, handlePageChange }) {
  const hide = {
    '@media (maxWidth: 768px)': {
      display: 'none',
    },
  };

  const show = {
    '@media (maxWidth: 768px)': {
      display: 'block',
      margin: 0,
      padding: 0,
      color: 'white',
    },
  };

  return (
    <>
      <Navbar variant="dark" className="nav-items" style={hide} id="nav-full">
        <Container className="nav-items">
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
        </Container>
      </Navbar>
          <div className="container nav-ham" style={show}>
          <nav className="navbar navbar-expand-lg navbar-dark">
              <div className="container-fluid">
                <Navbar.Brand href="#about" onClick={() => handlePageChange('About')}
                className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>Mike Rugh</Navbar.Brand>
                  <button className="navbar-toggler collapsed" type="button"
                      data-bs-toggle="collapse" data-bs-target="#navbarNav"
                      aria-controls="navbarNav" aria-expanded="false"
                      aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNav">
                      <ul className="navbar-nav ms-auto">
                          <li className="nav-item">
                              <a href="#about" onClick={() => handlePageChange('About')}
                              className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>About Me</a>
                          </li>
                          <li className="nav-item">
                              <a href="#portfolio"onClick={() => handlePageChange('Portfolio')}
                              className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>Portfolio</a>
                          </li>
                          <li className="nav-item">
                              <a href="#contact"onClick={() => handlePageChange('Contact')}
                              className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact</a>
                          </li>
                          <li className="nav-item">
                              <a href="#resume"onClick={() => handlePageChange('Resume')}
                              className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>Resume</a>
                          </li>
                      </ul>
                  </div>
              </div>
          </nav>
          </div>      
    </>
  );
}

export default Navigation;
