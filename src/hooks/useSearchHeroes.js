import { useState, useEffect } from "react";
import { findHerosByName } from "../api";

export function useSearchHeroes() {
  const [heroes, setHeroes] = useState();
  const [value, setValue] = useState("bat");

  const handleChangeValue = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    findHerosByName(value).then((res) => {
      setHeroes(res);
    });
  }, [value]);

  return { heroes, handleChangeValue };
}
