import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

export default function TopBar() {
    return (
        <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home" className="mx-auto">
        <img
            alt="instacart logo"
            src="https://www.instacart.com/assets/beetstrap/brand/2022/instacart-logo-color-6678cb82d531f8910d5ba270a11a7e9b56fc261371bda42ea7a5abeff3492e1c.svg"
            style={{ maxWidth: "100%" }} // Set a max-width to prevent the logo from being too large
        />
    </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto"></Nav>
            <Nav style={{ padding: "24px 40px 20px 40px", fontSize: "18px", lineHeight: "26px", fontWeight: "bolder", display: "flex", marginLeft: "auto" }}>
                    <Nav.Link style={{ color: "#343538", marginLeft: "auto" }} href="#LogIn">Log In</Nav.Link>
                    <Button variant="success" style={{ fontSize: "18px" }}>Sign Up</Button>{' '}
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}