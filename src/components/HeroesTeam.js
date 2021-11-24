import { Row, Col } from "react-bootstrap";
import Heroe from "./Heroe";

const HeroesTeam = ({ team, deleteFromTeam }) => {
  return (
    <>
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
    </>
  );
};

export default HeroesTeam;
