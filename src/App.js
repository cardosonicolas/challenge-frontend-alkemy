// import "Style.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useSearchHeroes } from "./hooks/useSearchHeroes";
import { useTeam } from "./hooks/useTeam";
import { useAuth } from "./hooks/useAuth";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Search from "./pages/Search";
import HeroDetail from "./pages/HeroDetail";
import Layout from "./components/Layout";
import "./App.css";

function App() {
  const { heroes, handleChangeValue } = useSearchHeroes();
  const { team, addToTeam, deleteFromTeam, statistic } = useTeam(heroes);
  const { logIn, logOut, isAuth } = useAuth();

  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/login" element={<Login logIn={logIn} />} />
          <Route
            exact
            path="/"
            element={
              <Home
                team={team}
                deleteFromTeam={deleteFromTeam}
                statistic={statistic}
              />
            }
          />
          <Route
            exect
            path="/search"
            element={
              <Search
                handleChangeValue={handleChangeValue}
                addToTeam={addToTeam}
                heroes={heroes}
              />
            }
          />
          <Route exect path="/:id" element={<HeroDetail />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
