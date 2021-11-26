import { Card, Button } from "react-bootstrap";

const backgroundColor = { good: "warning", bad: "danger", neutral: "light" };

const Hero = ({ image, name, biography, onClick, id, buttonText }) => {
  const { url } = image;
  const { alignment } = biography;
  const bg = backgroundColor[alignment];

  return (
    <Card bg={bg}>
      <Card.Body>
        <Card.Img
          src={url}
          alt={`${name} image`}
          className={"border border-bottom-0 border-5 border-dark img-fluid"}
        />
        <Card.Title as={"h3"} className={`p-2 bg-dark text-${bg} w-100`}>
          {name}
        </Card.Title>
        <Button
          className={`mt-1 w-100 border-0 btn-lg `}
          onClick={(e) => {
            e.preventDefault();
            onClick(id);
          }}
        >
          {buttonText}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Hero;
