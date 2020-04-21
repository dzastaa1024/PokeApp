import React, { Component } from "react";
import styled from "styled-components";
import * as fetcher from "../../fetcher";
import { lightGrey, grey } from "../../colors";

import Card from "../Card";
import Stats from "../Stats";

export default class ListElement extends Component {
  render() {
    const { pokemon } = this.props;
    if (!pokemon) {
      return "loading..";
    }

    return (
      <Wrapper>
        <Card pokemon={pokemon} />
        <Stats pokemonStats={pokemon.stats} />
      </Wrapper>
    );
  }
}

const Wrapper = styled.li`
  padding: 4rem;
  background-color: ${grey};

  display: flex;
  justify-content: space-around;
  align-items: center;

  &:nth-child(2n + 1) {
    background-color: ${lightGrey};
  }
`;
