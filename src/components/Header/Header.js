import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

function Header() {
    return (
        <header>
            <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary justify-content-between">
                <Container>
                    <Navbar.Brand href="#home"><span style={{ color: "#06FC90" }}><strong>Kumara</strong> </span><strong>Ruben</strong></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="/about">About</Nav.Link>
                            <Nav.Link href="/education">Education</Nav.Link>
                            <Nav.Link href="/projects">Projects</Nav.Link>
                            <Nav.Link href="/contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header