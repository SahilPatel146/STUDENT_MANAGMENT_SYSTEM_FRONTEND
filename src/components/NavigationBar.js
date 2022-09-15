import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom'

export default function NavigationBar() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Student Management System</Navbar.Brand>
                    <Link to="/" className='navbar-brand'>Student Management System</Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Add Student</Nav.Link>
                            <Nav.Link href="#pricing">View Students</Nav.Link>
                            <Link to="/student" className="nav-link">Add Student</Link>
                            <Link to="/listStudents" className="nav-link">View Students</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}