import { Navbar, Container, Nav,Image } from "react-bootstrap";
import logo from './../../../assets/logo.png';
const HeaderHome = () => {
    return (
        <Navbar expand="lg" className="bg-primary">
        <Container>
          <Navbar.Brand href="/home"><Image src={logo} rounded height={"70"}  /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="#link">Demos</Nav.Link>
              <Nav.Link href="#link">Catalogos</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default HeaderHome;