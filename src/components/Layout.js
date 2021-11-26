import { Container } from "react-bootstrap";
import NavBar from "./NavBar";

const Layout = ({ children }) => {
  return (
    <Container className="p-0">
      <NavBar />
      <Container>{children}</Container>
    </Container>
  );
};

export default Layout;
