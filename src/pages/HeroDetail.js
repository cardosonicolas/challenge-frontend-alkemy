import { useEffect, useState } from "react";
import { Container, ListGroup, Image, Button } from "react-bootstrap";
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

  const handleClickBack = () => {
    window.history.back();
  };

  const { name, appearance, biography, work, image } = hero;

  return (
    <Container>
      <Button className="btn-lg my-3" onClick={handleClickBack}>
        Back
      </Button>
      <Container className="d-md-flex p-0 m-0">
        <Image
          src={image && image.url}
          className="img-fluid"
          alt={`${name} image`}
        />
        <ListGroup className="p-md-5 mx-auto col-md-5">
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
    </Container>
  );
};

export default HeroDetail;
