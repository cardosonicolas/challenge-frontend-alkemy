import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <Container fluid className="pb-5">
      <Navbar collapseOnSelect expand="sm">
        <Container>
          <Navbar.Brand>
            <Link to="/">SuperHero</Link>
          </Navbar.Brand>
          <Navbar.Toggle arial-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="flex-grow-0">
            <Nav>
              <Nav.Link>
                <Link to="/">Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/search">Search</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/login">Login</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>{children}</Container>
    </Container>
  );
};

export default Layout;
