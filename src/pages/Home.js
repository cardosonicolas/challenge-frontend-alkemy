import HeroesTeam from "../components/HeroesTeam";
import { ListGroup, Container } from "react-bootstrap";

const Home = ({ team, deleteFromTeam, statistic }) => {
  return (
    <>
      <h1>My team</h1>
      <Container className="justify-content-md-between w-100">
        <HeroesTeam team={team} deleteFromTeam={deleteFromTeam} />
        <ListGroup className="py-4 mx-auto col-md-5">
          <h2>Stats:</h2>
          {statistic.map((e) => (
            <ListGroup.Item className="d-flex justify-content-between ">
              <h5>{`${e[0].toUpperCase()}`}</h5>
              <span>{`${e[1]}`}</span>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Container>
    </>
  );
};

export default Home;
