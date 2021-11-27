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
        <ListGroup className="py-4 mx-auto col-md-5">
          <h1 className={`p-2 w-100 `}>{name}</h1>
          <ListGroup.Item className="d-flex justify-content-between">
            <h5>Peso: </h5>
            <span>{appearance && appearance.weight[1]}</span>
          </ListGroup.Item>
          <ListGroup.Item className="d-flex justify-content-between">
            <h5>Altura: </h5>
            <span>{appearance && appearance.height[1]}</span>
          </ListGroup.Item>
          <ListGroup.Item className="d-flex justify-content-between">
            <h5>Color de ojos:</h5>
            <span> {appearance && appearance["eye-color"]}</span>
          </ListGroup.Item>
          <ListGroup.Item className="d-flex justify-content-between">
            <h5> Color de cabello: </h5>
            <span> {appearance && appearance["hair-color"]}</span>
          </ListGroup.Item>
          <ListGroup.Item>
            <h5>Lugar de trabajo: </h5>
            <span> {work && work.base}</span>
          </ListGroup.Item>
          <ListGroup.Item>
            <h5>Alias: </h5>

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
