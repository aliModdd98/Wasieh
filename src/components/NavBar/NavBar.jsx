import React, { useRef } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from "./../../assets/wasiehLogo.png"
import "./NavBarStyle.css" 
import { Link } from 'react-router-dom';
import {NavLink} from "react-router-dom"
export const NavBar = () => {
 
  return (

   <section className='NavStyle'>
     <Container >
      <Navbar  className=" d-flex justify-content-between py-2 " expand="lg">
        <Navbar.Brand  className=" d-flex flex-row align-items-center justify-content-evenly  " href="#" >
          <img src={logo} alt="Logo" className='' style={{ maxHeight: '70px', width: '100px' }} /> 
        
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className='p-2' id="basic-navbar-nav ">
          <Nav  className="ms-auto px-1 nav"  >
            <Nav.Link href="#"><span className="lineUp"></span><NavLink to="/" className="active">Home </NavLink><span className="line"></span></Nav.Link>
            <Nav.Link href="#"><span className="lineUp"></span><NavLink to="/about" className="active">About Us</NavLink> <span className="line"></span></Nav.Link>
            <Nav.Link href="#"><span className="lineUp"></span><NavLink to="/contact" className="active">Contact</NavLink> <span className="line"></span></Nav.Link>
            <Nav.Link ><span className="lineUp"></span><NavLink to="/services"  className="active">Services</NavLink> <span className="line"></span></Nav.Link>

            <NavDropdown title="Language" id="basic-nav-dropdown" drop="down">
              <NavDropdown.Item href="#">English</NavDropdown.Item>
              <hr/>
              <NavDropdown.Item href="#">Arabic </NavDropdown.Item>
                          
               </NavDropdown>
          </Nav>
          <Link to="/login"><button className='btn' >Get Started</button> </Link>
             </Navbar.Collapse>
      </Navbar>
    </Container>
   </section>
  );
};
