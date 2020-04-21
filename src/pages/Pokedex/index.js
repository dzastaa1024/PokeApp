import React, { Component } from "react";
import * as fetcher from "../../fetcher";
import styled from "styled-components";

import PokemonList from "../../components/PokemonList";

export default class Pokedex extends Component {
  state = {
    abilities: [],
    pokemons: [],
    pokemonFilters: [],
  };

  async componentDidMount() {
    const pokemons = [];

    const respokemons = await fetcher.fetchPokemons();
    respokemons.forEach((pokemon) => {
      fetcher.fetchPokemon(pokemon.url).then((pok) => {
        pokemons.push(pok);
      });
    });

    this.setState({ pokemons: pokemons });
  }

  componentDidUpdate(prevProps, prevState) {
    const { pokemons } = this.state;

    if (prevState.pokemons.length !== this.state.pokemons.length) {
      let allAbilities = [];

      pokemons.forEach((pokemon) => {
        const pokemonAbilities = pokemon.abilities.map((ability) => {
          return ability.ability.name;
        });

        allAbilities = [...allAbilities, ...pokemonAbilities];
      });

      this.setState({
        abilities: allAbilities,
      });
    }
  }

  handleClick = (name) => {
    const { pokemonFilters } = this.state;

    if (pokemonFilters.includes(name)) {
      this.setState({
        pokemonFilters: pokemonFilters.filter(
          (filterName) => filterName !== name
        ),
      });
      return;
    }

    this.setState({
      pokemonFilters: this.state.pokemonFilters.concat(name),
    });
  };

  render() {
    const { abilities, pokemons, pokemonFilters } = this.state;

    const pokemonsToRender = pokemons;

    pokemonFilters.length > 0 &&
      pokemonFilters.forEach((filteredPokemon) => {
        pokemonsToRender = pokemonsToRender.find((filtered) => {
          return filtered.ability.name === filteredPokemon;
        });
      });

    console.log("pokemonsToRender", pokemonsToRender);

    console.log("abilities", abilities);

    return (
      <Page>
        <SideBar>
          <AbilitiesSection>
            {abilities.map((ability) => (
              <Item key={ability} onClick={() => this.handleClick(ability)}>
                {ability}
              </Item>
            ))}
          </AbilitiesSection>
        </SideBar>
        <PokemonsSection>
          <PokemonList pokemonsToRender={pokemonsToRender} />
        </PokemonsSection>
      </Page>
    );
  }
}

export const Page = styled.div`
  height: 100%;
  overflow-y: scroll;
`;

const SideBar = styled.div`
  position: fixed;
  height: 100%;
  width: 17rem;
  overflow-y: scroll;
  background-color: white;
`;

const AbilitiesSection = styled.ul``;

const Item = styled.li`
  padding: 1rem 2rem;
  text-align: center;
  text-transform: uppercase;
  border-radius: 10px;
  margin: 0.7rem;
  background-color: #f3f3f3;
  font-weight: 400;
  border: none;
  cursor: pointer;
`;

const PokemonsSection = styled.div`
  margin-left: 17rem;
`;
