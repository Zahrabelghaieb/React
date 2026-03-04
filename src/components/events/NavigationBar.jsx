import { Container, Navbar } from "react-bootstrap"
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";

const NavigationBar = () => {
    return (
        <Navbar bg="light" expand="lg" fixed="top">
            <Container>
                <Navbar.Brand as={NavLink} to="/">Event Management</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link as={NavLink} to="/" style={({isActive}) => ({textDecoration:isActive ? 'underline' : 'none'})}>Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/events" style={({isActive}) => ({textDecoration:isActive ? 'underline' : 'none'})}>Events</Nav.Link>
                        <Nav.Link as={NavLink} to="/add" style={({isActive}) => ({textDecoration:isActive ? 'underline' : 'none'})}>Add new Event</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar