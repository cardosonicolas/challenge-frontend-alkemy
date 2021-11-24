// import "Style.css";

import { useSearchHeroes } from "./hooks/useSearchHeroes";
import { useTeam } from "./hooks/useTeam";
import Home from "./pages/Home";
import HeroesTeam from "./components/HeroesTeam";

function App() {
  const { heroes, handleChangeValue } = useSearchHeroes();
  const { team, addToTeam, deleteFromTeam } = useTeam(heroes);

  return (
    <>
      <Home
        handleChangeValue={handleChangeValue}
        addToTeam={addToTeam}
        heroes={heroes}
      />
      <HeroesTeam team={team} deleteFromTeam={deleteFromTeam} />
    </>
  );
}

export default App;
