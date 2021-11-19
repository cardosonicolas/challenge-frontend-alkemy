// import "Style.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

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
      {heroes
        ? heroes.map(({ image, name }) => (
            <div>
              <div>
                <img src={image.url} alt="" width={"100%"} />
                <h2>{name}</h2>
              </div>
            </div>
          ))
        : null}
    </Container>
  );
}

export default App;
