import { Container, Row, Col } from "react-bootstrap";
import Heroe from "./Heroe";

const HeroesTeam = ({ team, deleteFromTeam }) => {
  return (
    <Container>
      <Row xs={1} md={2} xl={3}>
        {team ? (
          team.map(({ image, name, biography, id }) => (
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
        ) : (
          <h1>Nada</h1>
        )}
      </Row>
    </Container>
  );
};

export default HeroesTeam;
