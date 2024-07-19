import { useState, useEffect } from "react";
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";
import "../App.css"

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", onScroll);

        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    };

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container className="container">
                <div>
                <Navbar.Brand href="#home" >
                    <img id="nav-logo" src="images/logo.png" alt="logo"></img>
                </Navbar.Brand>
                </div>
                <div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home"  id="N"   className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#about"  id="N" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About</Nav.Link>
                        {/* <Nav.Link href="#login" className={activeLink === 'login' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('login')}>Login</Nav.Link> */}
                        <Nav.Link href="#services"  id="N" className={activeLink === 'services' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('services')}>Services</Nav.Link>
                        {/* <Nav.Link as={Link} to="/register">Register</Nav.Link> */}
                        <NavDropdown title="Register"  className='nav-dropdown' id="navbarScrollingDropdown">
                            <NavDropdown.Item as={Link}  id="N"  to="/register-user">User</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link}  id="N"  to="/register-notary">Notary</NavDropdown.Item>
                        </NavDropdown>
                       <NavDropdown title="Login"  className='nav-dropdown' id="navbarScrollingDropdown">
                            <NavDropdown.Item as={Link}  id="N" to="/login-user">user</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link}  id="N" to="/login-notary">Notary</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>  
                </Navbar.Collapse>
                </div>
            </Container>
        </Navbar>
    );
};