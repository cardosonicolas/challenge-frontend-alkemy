import { useState, useEffect } from "react";
import { findHeroesByName } from "../api";

export function useHeroes() {
  const [heroes, setHeroes] = useState();
  const [value, setValue] = useState("batman");

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
