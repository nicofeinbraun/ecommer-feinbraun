/*const NavBar = (props) => {

  //console.table(props.link)
  //console.log(props.footer)

  //console.log(props.id)
  if (props.footer){
    return (    
      <nav className="nav">
                      <a href="#">{props.nombre}</a>
                      <a href="#" className="nav_link">Home  </a>
                      <a href="#" className="nav_link">Prdocutos  </a>
                      <a href="#" className="nav_link">Contacto  </a>
                  </nav>
    )
  }else{
    return (    
      <nav className="nav">
                      <a href="#" className="nav_link">Home  </a>
                      <a href="#" className="nav_link">Prdocutos  </a>
                      <a href="#" className="nav_link">Contacto  </a>
                  </nav>
    )
  }
}*/

import {Navbar} from "react-bootstrap"
import {Container} from "react-bootstrap"
import {Nav} from "react-bootstrap"
import {NavDropdown} from "react-bootstrap"


const NavBar = (props) => {
  if (props.header){
    return (
      <Navbar bg="light" variant="light">
        <Container fluid>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Productos" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Remeras</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Zapatillas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Pantalones</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#pricing">{props.contacto}</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      )
  }else{
    return (
      <Navbar bg="light" variant="light">
        <Container fluid>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Productos</Nav.Link>
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