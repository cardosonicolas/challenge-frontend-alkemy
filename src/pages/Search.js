import { Link } from "react-router-dom";
import { Row, Col, FormControl } from "react-bootstrap";
import Hero from "../components/Hero";

const Search = ({ handleChangeValue, heroes, addToTeam }) => {
  return (
    <>
      <FormControl
        type="search"
        placeholder="Search a hero (ej: Batman)"
        className="me-2"
        onChange={handleChangeValue}
      />
      <Row xs={1} md={2} xl={3}>
        {heroes
          ? heroes.map(({ image, name, biography, id }) => (
              <Col className="my-2">
                <Link to={`/${id}`}>
                  <Hero
                    key={id}
                    id={id}
                    image={image}
                    name={name}
                    biography={biography}
                    buttonText={"Add to team"}
                    onClick={addToTeam}
                  />
                </Link>
              </Col>
            ))
          : null}
      </Row>
    </>
  );
};

export default Search;
