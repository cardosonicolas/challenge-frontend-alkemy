import { useState } from "react";

const MAXIMUM_MEMBERS = 6;

const statsAccumulator = (team) => {
  const accumulatedStatistic = team.reduce((acc, hero) => {
    for (const stat in hero.powerstats) {
      let value = Number.parseInt(hero.powerstats[stat]) || 0;
      acc[stat] = (acc[stat] || 0) + value;
    }
    return acc;
  }, {});

  return accumulatedStatistic;
};

const sortStatsFromHighestToLowest = (accumulatedStatistic) => {
  let orderedStatistic = Object.fromEntries(
    Object.entries(accumulatedStatistic).sort(([, a], [, b]) => b - a)
  );
  orderedStatistic = Object.entries(orderedStatistic);
  return orderedStatistic;
};

export function useTeam(heroes) {
  const [team, setTeam] = useState([]);

  const addToTeam = (id) => {
    const hero = heroes.find((hero) => hero.id === id);
    if (team.length === MAXIMUM_MEMBERS) return "Team completo";
    if (team.find((hero) => hero.id === id)) return "Ya esta en el equipo";

    setTeam([...team, hero]);
  };

  const deleteFromTeam = (id) => {
    const updatedTeam = team.filter((hero) => hero.id !== id);
    setTeam(updatedTeam);
  };

  const alignments = team.reduce((acc, hero) => {
    acc[hero.biography.alignment] = (acc[hero.biography.alignment] || 0) + 1;
    return acc;
  }, {});

  const statistic = sortStatsFromHighestToLowest(statsAccumulator(team));

  return { team, addToTeam, deleteFromTeam, statistic };
}
