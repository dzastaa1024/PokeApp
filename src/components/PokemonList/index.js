import React, { Component } from "react";
import styled from "styled-components";

import ListElement from "../ListElement";

export default class PokemonList extends Component {
  render() {
    const { pokemons, pokemonFilters, pokemonsToRender } = this.props;
    return (
      <ListWrapper>
        {/* {pokemons.length > 0 &&
          pokemons.map((pokemon) => {
            return (
              <ListElement
                pokemon={pokemon}
                key={pokemons.name}
                pokemonFilters={pokemonFilters}
              />
            );
          })} */}

        {pokemonsToRender > 0 &&
          pokemonsToRender.map((pokemon) => {
            return (
              <ListElement
                pokemon={pokemon}
                key={pokemons.name}
                pokemonFilters={pokemonFilters}
              />
            );
          })}
      </ListWrapper>
    );
  }
}

const ListWrapper = styled.ul``;
