import { useState, useEffect } from "react";
import { findHeroesByName } from "../api";

export function useSearchHeroes() {
  const [heroes, setHeroes] = useState();
  const [value, setValue] = useState();

  const handleChangeValue = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    findHeroesByName(value).then((res) => {
      setHeroes(res);
    });
  }, [value]);

  return { heroes, handleChangeValue };
}
