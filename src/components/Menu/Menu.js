import React from 'react'
import { Outlet,Link,NavLink } from 'react-router-dom'
import { Nav,Navbar,Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import  Form  from 'react-bootstrap/Form';
import logo from '../../assets/LogoV 6.png';
const Menu = () => {
  return (
    <>
    <Navbar className = "navBg bg-white"expand = "lg" >
            <Container >
                <NavLink as = { Link } to = '/' >
                <img src = {logo}
                width = "80"
                height = "80"
                className = "d-inline-block align-top"
                alt = "React Bootstrap logo" />
                </NavLink> 
            <Navbar.Toggle ariacontrols = "basic-navbar-nav"/>
                <Navbar.Collapse id = "basic-navbar-nav" >
                    <Nav className = "mx-auto" >
                        <Nav.Link as = { Link } to = '/' > Inicio </Nav.Link> 
                        <Nav.Link as = { Link } to = '/salon1' > Salon 1 </Nav.Link> 
                        <Nav.Link as = { Link } to = '/salon2' > Salon 2 </Nav.Link> 
                        <Nav.Link as = { Link } to = '/contacto' > Contacto </Nav.Link>
                        <Nav.Link as = { Link } to = '/citas' > Citas </Nav.Link>   
                    </Nav>
                    <Form className = "d-flex" >
                        <Form.Control type = "search"
                        placeholder = "Search"
                        className = "me-2"
                        arialabel = "Search" />
                        <Button variant = "outline-success" > Search </Button> 
                    </Form> 
                </Navbar.Collapse> 
            </Container> 
        </Navbar> 
        <section>
        <Outlet > </Outlet> 
        </section>

  </>  
  )
}

export default Menu