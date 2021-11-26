import { useEffect, useState } from "react";
import { Container, ListGroup, Image } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { findHeroByID } from "../api";

const HeroDetail = () => {
  const [hero, setHero] = useState({});
  const { id } = useParams();

  useEffect(() => {
    findHeroByID(id).then((res) => {
      setHero(res);
    });
  }, [id]);

  const { name, appearance, biography, work, image } = hero;

  return (
    <Container className="m-0 p-0 w-100">
      <Container>
        <Image
          src={image && image.url}
          className="w-100"
          alt={`${name} image`}
        />
      </Container>
      <ListGroup>
        <h1 className={`p-2 w-100 `}>{name}</h1>
        <ListGroup.Item>
          Peso: {appearance && appearance.weight[1]}
        </ListGroup.Item>
        <ListGroup.Item>
          Altura: {appearance && appearance.height[1]}
        </ListGroup.Item>
        <ListGroup.Item>
          Color de ojos: {appearance && appearance["eye-color"]}
        </ListGroup.Item>
        <ListGroup.Item>
          Color de cabello: {appearance && appearance["hair-color"]}
        </ListGroup.Item>
        <ListGroup.Item>Lugar de trabajo: {work && work.base}</ListGroup.Item>
        <ListGroup.Item>
          Alias:
          {biography &&
            biography.aliases.map((e) => {
              return ` ${e},`;
            })}
        </ListGroup.Item>
      </ListGroup>
    </Container>
  );
};

export default HeroDetail;
