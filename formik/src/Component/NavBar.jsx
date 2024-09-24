import React from 'react';
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom';


function NavBar() {
  return (
    <div>
      <Navbar expand="lg" className="bookNavbar p-2">
                <Container>
                    <Navbar.Brand to="/" className='text-white'><h2><b>Library Store</b></h2></Navbar.Brand>
                    <Navbar.Toggle style={{background:"#fff"}} aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="d-flex justify-content-between align-items-center w-100 px-5" id='navbar'>
                            <Link className='navLink' to="/">Dashboard</Link>
                            
                            <Link className='btn btnPrimary m-2' to='/add-records'>Add Records</Link>  
                            
                          
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    </div>
  )
}

export default NavBar