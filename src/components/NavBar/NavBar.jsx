import {Navbar,Container,NavDropdown,Nav} from "react-bootstrap"
import {Link , NavLink} from 'react-router-dom'


const NavBar = (props) => {
  if (props.header){
    return (
      <Navbar bg="light" variant="light">
        <Container fluid>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <NavDropdown title="Productos" id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/productos/remeras">Remeras</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/productos/pantalones">Pantalones</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/productos/otros">Otros</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/contacto">{props.contacto}</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      )
  }else{
    return (
      <Navbar bg="light" variant="light">
        <Container fluid>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/productos">Productos</Nav.Link>
            <Nav.Link href="#pricing">{props.instagram}</Nav.Link>
            <Nav.Link href="#pricing">{props.facebook}</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      )
  }
}

export default NavBar

//rafce