// import "Style.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Heroe from "./components/Heroe";

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = `https://www.superheroapi.com/api.php/${API_KEY}/search/`;

function App() {
  const [heroes, setHeroes] = useState();
  const [name, setName] = useState("batman");

  useEffect(() => {
    axios
      .get(API_URL + name)
      .then((res) => {
        setHeroes(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [name]);

  const handleClick = (e) => {
    setName(e.target.value);
  };

  console.log(heroes);

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
