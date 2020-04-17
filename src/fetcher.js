import axios from "axios";

const baseUrl = "https://pokeapi.co/api/v2/";

export const fetchPokedexs = async () => {
  const pokemons = [];

  const url = `${baseUrl}pokemon/`;

  const res = await axios.get(url);

  res.data.results.forEach(async (pokemon) => {
    const eachPokemon = await axios.get(pokemon.url);
    pokemons.push(eachPokemon.data);
  });

  return pokemons;
};
