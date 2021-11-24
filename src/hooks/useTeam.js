import { useState } from "react";

const MAXIMUM_MEMBERS = 6;

export function useTeam(heroes) {
  const [team, setTeam] = useState([]);

  const addToTeam = (id) => {
    const alignments = team.reduce((acc, hero) => {
      acc[hero.biography.alignment] = (acc[hero.biography.alignment] || 0) + 1;
      return acc;
    }, {});

    const { good, bad } = alignments;
    if (good >= 3) return "No puedes agregar mas personajes buenos";
    if (bad >= 3) return "No puedes agregar mas personajes malos";

    const hero = heroes.find((hero) => hero.id === id);
    if (team.length === MAXIMUM_MEMBERS) return "Team completo";
    if (team.find((hero) => hero.id === id)) return "Ya esta en el equipo";

    setTeam([...team, hero]);
  };

  const deleteFromTeam = (id) => {
    const updatedTeam = team.filter((hero) => hero.id !== id);
    setTeam(updatedTeam);
  };

  return { team, addToTeam, deleteFromTeam };
}
