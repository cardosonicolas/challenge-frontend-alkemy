import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <Container fluid>
      <Navbar collapseOnSelect expand="sm">
        <Container>
          <Navbar.Brand>
            <Link style={{ textDecoration: "none", color: "inherit" }} to="/">
              SuperHero
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle arial-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="flex-grow-0">
            <Nav>
              <Nav.Link>
                <Link
                  style={{ textDecoration: "none", color: "inherit" }}
                  to="/"
                >
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  style={{ textDecoration: "none", color: "inherit" }}
                  to="/team"
                >
                  Team
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  style={{ textDecoration: "none", color: "inherit" }}
                  to="/login"
                >
                  Login
                </Link>
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
