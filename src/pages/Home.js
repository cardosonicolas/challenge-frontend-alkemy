import { Row, Col } from "react-bootstrap";
import Heroe from "../components/Heroe";

const Home = ({ handleChangeValue, heroes, addToTeam }) => {
  return (
    <>
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
    </>
  );
};

export default Home;
