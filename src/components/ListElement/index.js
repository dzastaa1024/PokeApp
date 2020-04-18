import React, { Component } from "react";
import styled from "styled-components";
import * as fetcher from "../../fetcher";

import Card from "../Card";
import Stats from "../Stats";

export default class ListElement extends Component {
  state = {
    pokemon: null,
  };

  async componentDidMount() {
    const pokemon = await fetcher.fetchPokemon(this.props.pokemon.url);

    this.setState({
      pokemon: pokemon,
    });
  }

  render() {
    const { pokemon } = this.state;
    if (!pokemon) {
      return "loading..";
    }
    return (
      <Wrapper>
        <Card pokemon={pokemon} pokemonType={pokemon.types} />
        <Stats pokemon={pokemon} />
      </Wrapper>
    );
  }
}

const Wrapper = styled.li`
  padding: 4rem;
  background-color: #eaeaea;

  display: flex;
  justify-content: space-around;
  align-items: center;

  &:nth-child(2n + 1) {
    background-color: whitesmoke;
  }
`;
