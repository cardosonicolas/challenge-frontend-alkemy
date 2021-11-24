// import "Style.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useSearchHeroes } from "./hooks/useSearchHeroes";
import { useTeam } from "./hooks/useTeam";
import Home from "./pages/Home";
import HeroeDetail from "./pages/HeroeDetail";
import HeroesTeam from "./components/HeroesTeam";
import Layout from "./components/Layout";

function App() {
  const { heroes, handleChangeValue } = useSearchHeroes();
  const { team, addToTeam, deleteFromTeam } = useTeam(heroes);

  return (
    <Router>
      <Layout>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home
                handleChangeValue={handleChangeValue}
                addToTeam={addToTeam}
                heroes={heroes}
              />
            }
          />
          <Route
            exect
            path="/team"
            element={<HeroesTeam team={team} deleteFromTeam={deleteFromTeam} />}
          />
          <Route exect path="/:id" element={<HeroeDetail />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
