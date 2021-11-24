// import "Style.css";

import { Container, Row, Col } from "react-bootstrap";
import { useHeroes } from "./hooks/useHeroes";
import { useTeam } from "./hooks/useTeam";
import { useState } from "react";
import Heroe from "./components/Heroe";
import HeroesTeam from "./components/HeroesTeam";

function App() {
  const { heroes, handleChangeValue } = useHeroes();
  const { team, addToTeam, deleteFromTeam } = useTeam(heroes);

  return (
    <>
      <Container>
        <input type="text" onChange={handleChangeValue} />
        <Row xs={1} md={2} xl={3}>
          {heroes
            ? heroes.map(({ image, name, biography, id }) => (
                <Col className="my-2">
                  <Heroe
                    onClick={addToTeam}
                    id={id}
                    image={image}
                    name={name}
                    biography={biography}
                    key={id}
                    buttonText={"Add"}
                  />
                </Col>
              ))
            : null}
        </Row>
      </Container>
      <HeroesTeam team={team} deleteFromTeam={deleteFromTeam} />
    </>
  );
}

export default App;
