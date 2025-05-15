import { Navbar, Container, Nav,Image } from "react-bootstrap";
import logo from './../assets/logos/Logo para post.png';
const HeaderHome = () => {
    return (
        <Navbar expand="lg" className="bg-primary">
        <Container>
          <Navbar.Brand href="/home"><Image src={logo} rounded height={"70"}  /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/demos">Demos</Nav.Link>
              {/* <Nav.Link href="#link">Catalogos</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default HeaderHome;