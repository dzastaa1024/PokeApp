import React, { Component } from "react";
import styled from "styled-components";
import * as fetcher from "../../fetcher";

import Card from "../Card";
import Stats from "../Stats";

export default class ListElement extends Component {
  state = {
    pokemon: [],
  };

  async componentDidMount() {
    const pokemon = await fetcher.fetchPokemon(this.props.pokemon.url);

    this.setState({
      pokemon: pokemon,
    });
  }

  render() {
    const { pokemon } = this.state;
    console.log("moj state", pokemon);
    return (
      <Wrapper>
        <Card pokemon={pokemon} />
        <Stats pokemon={pokemon} />
      </Wrapper>
    );
  }
}

const Wrapper = styled.li``;
