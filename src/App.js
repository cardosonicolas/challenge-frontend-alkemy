// import "Style.css";

import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useHeroes } from "./hooks/useHeroes";
import Heroe from "./components/Heroe";

function App() {
  const { heroes, handleClick } = useHeroes();

  return (
    <Container>
      <input type="text" onChange={handleClick} />
      <Row xs={1} md={2} xl={3}>
        {heroes
          ? heroes.map(({ image, name, biography, id }) => (
              <Col className="my-2">
                <Heroe
                  image={image}
                  name={name}
                  biography={biography}
                  key={id}
                />
              </Col>
            ))
          : null}
      </Row>
    </Container>
  );
}

export default App;
