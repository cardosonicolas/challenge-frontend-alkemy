import { useState } from "react";

const MAXIMUM_MEMBERS = 6;

const statsAccumulator = (team) => {
  const accumulatedStatistic = team.reduce((acc, hero) => {
    for (const stat in hero.powerstats) {
      let value = Number(hero.powerstats[stat]) || 0;
      acc[stat] = (acc[stat] || 0) + value;
    }
    return acc;
  }, {});

  return accumulatedStatistic;
};

const sortStatsFromHighestToLowest = (accumulatedStatistic) => {
  let orderedStatistic = Object.entries(accumulatedStatistic).sort(
    ([, a], [, b]) => b - a
  );
  return orderedStatistic;
};

export function useTeam(heroes) {
  const [team, setTeam] = useState([]);

  const addToTeam = (id) => {
    const hero = heroes.find((hero) => hero.id === id);
    if (team.length === MAXIMUM_MEMBERS) return "Team complete";
    if (team.find((hero) => hero.id === id)) return "Is already in the team";

    const alignments = team.reduce((acc, hero) => {
      acc[hero.biography.alignment] = (acc[hero.biography.alignment] || 0) + 1;
      return acc;
    }, {});

    if (alignments[hero.biography.alignment] >= 3) {
      return `They cannot enter more of the ${hero.biography.alignment} side`;
    }
    setTeam([...team, hero]);
  };

  const deleteFromTeam = (id) => {
    const updatedTeam = team.filter((hero) => hero.id !== id);
    setTeam(updatedTeam);
  };

  const statistic = sortStatsFromHighestToLowest(statsAccumulator(team));

  return { team, addToTeam, deleteFromTeam, statistic };
}
