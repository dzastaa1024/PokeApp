import axios from "axios";

const baseUrl = "https://pokeapi.co/api/v2";

export const fetchPokemon = async (url) => {
  const pokemon = await axios.get(url);

  return pokemon.data;
};

export const fetchPokemons = async () => {
  const url = `${baseUrl}/pokemon`;
  const pokemons = await axios.get(url);

  return pokemons.data.results;
};

export const fetchAbility = async () => {
  const url = `${baseUrl}/ability`;

  const res = await axios.get(url);

  return res.data.results;
};
