// import "Style.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useSearchHeroes } from "./hooks/useSearchHeroes";
import { useTeam } from "./hooks/useTeam";
import Home from "./pages/Home";
import Login from "./pages/Login";
import HeroDetail from "./pages/HeroDetail";
import HeroesTeam from "./components/HeroesTeam";
import Layout from "./components/Layout";
import "./App.css";

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
          <Route exact path="/login" element={<Login />} />
          <Route
            exect
            path="/team"
            element={<HeroesTeam team={team} deleteFromTeam={deleteFromTeam} />}
          />
          <Route exect path="/:id" element={<HeroDetail />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
