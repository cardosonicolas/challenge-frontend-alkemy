import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Hero from "./Hero";

const HeroesTeam = ({ team, deleteFromTeam }) => {
  return (
    <>
      <Row xs={1} md={2} xl={3}>
        {team
          ? team.map(({ image, name, biography, id }) => (
              <Col className="my-2">
                <Link to={`/${id}`}>
                  <Hero
                    key={id}
                    id={id}
                    image={image}
                    name={name}
                    biography={biography}
                    buttonText={"Delete from team"}
                    onClick={deleteFromTeam}
                    bgColor="danger"
                  />
                </Link>
              </Col>
            ))
          : null}
      </Row>
    </>
  );
};

export default HeroesTeam;
