import React, { Component } from "react";
import styled from "styled-components";

import ListElement from "../ListElement";

export default class PokemonList extends Component {
  render() {
    const { pokemons } = this.props;
    // console.log(pokemons.length);
    return (
      <ListWrapper>
        {pokemons.length > 0 &&
          pokemons.map((pokemon) => {
            return <ListElement pokemon={pokemon} key={pokemons.name} />;
          })}
      </ListWrapper>
    );
  }
}

const ListWrapper = styled.ul`
  list-style-type: none;
`;
