// import "Style.css";

import { Container, Row, Col } from "react-bootstrap";
import { useHeroes } from "./hooks/useHeroes";
import { useState } from "react";
import Heroe from "./components/Heroe";

function App() {
  const MAXIMUM_MEMBERS = 6;
  const { heroes, handleChangeValue } = useHeroes();
  const [team, setTeam] = useState([]);

  const addToTeam = (id) => {
    const heroe = heroes.find((heroe) => heroe.id === id);
    if (team.length === MAXIMUM_MEMBERS) return "Team completo";
    if (team.find((heroe) => heroe.id === id)) return "Ya esta en el equipo";

    setTeam([...team, heroe]);
  };

  const deleteFromTeam = (id) => {
    const updatedTeam = team.filter((heroe) => heroe.id !== id);
    setTeam(updatedTeam);
  };

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
      <Container>
        <Row xs={1} md={2} xl={3}>
          {team
            ? team.map(({ image, name, biography, id }) => (
                <Col className="my-2">
                  <Heroe
                    onClick={deleteFromTeam}
                    id={id}
                    image={image}
                    name={name}
                    biography={biography}
                    key={id}
                    buttonText={"Delete"}
                  />
                </Col>
              ))
            : null}
        </Row>
      </Container>
    </>
  );
}

export default App;
