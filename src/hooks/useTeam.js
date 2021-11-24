import { useState } from "react";

const MAXIMUM_MEMBERS = 6;

export function useTeam(heroes) {
  const [team, setTeam] = useState([]);

  const addToTeam = (id) => {
    const alignments = team.reduce((acc, heroe) => {
      acc[heroe.biography.alignment] =
        (acc[heroe.biography.alignment] || 0) + 1;
      return acc;
    }, {});
    const { good, bad } = alignments;
    if (good >= 3) return "No puedes mas buenos";
    if (bad >= 3) return "No puedes mas malos";

    const heroe = heroes.find((heroe) => heroe.id === id);
    if (team.length === MAXIMUM_MEMBERS) return "Team completo";
    if (team.find((heroe) => heroe.id === id)) return "Ya esta en el equipo";

    setTeam([...team, heroe]);
  };

  const deleteFromTeam = (id) => {
    const updatedTeam = team.filter((heroe) => heroe.id !== id);
    setTeam(updatedTeam);
  };

  return { team, addToTeam, deleteFromTeam };
}
