import { Card, Button } from "react-bootstrap";

const backgroundColor = { good: "warning", bad: "danger", neutral: "light" };

const Heroe = ({ image, name, biography, id, onClick, buttonText }) => {
  const { url } = image;
  const { alignment } = biography;
  const bg = backgroundColor[alignment];

  return (
    <Card bg={bg}>
      <Card.Body>
        <Card.Img
          src={url}
          alt={`${name} image`}
          className={"border border-bottom-0 border-5 border-dark p-0 m-0"}
        />
        <Card.Title as={"h3"} className={`p-2 bg-dark text-${bg} w-100 `}>
          {name}
        </Card.Title>
      </Card.Body>
      <Card.Footer>
        <Button className="w-50 border-0" onClick={() => onClick(id)}>
          {buttonText}
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default Heroe;
