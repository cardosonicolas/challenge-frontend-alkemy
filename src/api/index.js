import axios from "axios";
const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL_BY_NAME = `https://www.superheroapi.com/api.php/${API_KEY}/search/`;
const API_URL_BY_ID = `https://www.superheroapi.com/api.php/${API_KEY}/`;

export function findHeroesByName(value) {
  return axios
    .get(API_URL_BY_NAME + value)
    .then((res) => {
      const { results } = res.data;
      return results;
    })
    .catch((err) => {
      //   console.log(err);
    });
}

export function findHeroeByID(value) {
  return axios
    .get(API_URL_BY_ID + value)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      //   console.log(err);
    });
}
