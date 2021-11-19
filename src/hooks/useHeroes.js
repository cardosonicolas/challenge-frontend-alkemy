import { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = `https://www.superheroapi.com/api.php/${API_KEY}/search/`;

export function useHeroes() {
  const [heroes, setHeroes] = useState();
  const [name, setName] = useState("batman");

  const handleClick = (e) => {
    setName(e.target.value);
  };

  useEffect(() => {
    axios
      .get(API_URL + name)
      .then((res) => {
        setHeroes(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [name]);

  return { heroes, handleClick };
}
