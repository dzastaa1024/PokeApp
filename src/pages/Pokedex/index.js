import React, { Component } from "react";
import * as fetcher from "../../fetcher";
import styled from "styled-components";

import List from "../../components/List";

export default class Pokedex extends Component {
  state = {
    pokemons: [],
    abilities: [],
  };

  async componentDidMount() {
    const pokedex = await fetcher.fetchPokedexs();
    const abilities = await fetcher.fetchAbility();

    console.log(abilities);

    this.setState({
      pokemons: pokedex,
      abilities: abilities,
    });
  }

  render() {
    const { abilities, pokemons } = this.state;
    return (
      <Wrapper>
        <SideBar>
          <AbilitiesSection>
            {abilities.map((ability) => (
              <Item key={ability.name}>{ability.name}</Item>
            ))}
          </AbilitiesSection>
        </SideBar>
        <PokemonsSection>
          <List />
        </PokemonsSection>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  display: flex;
  height: 100%;
`;

const SideBar = styled.div``;

const AbilitiesSection = styled.ul``;

const Item = styled.li`
  padding: 1rem 2rem;
  border: 1px solid black;
  text-align: center;
  text-transform: uppercase;
  border-radius: 10px;
  margin: 0.7rem;
`;

const PokemonsSection = styled.div`
  width: 10rem;
  height: 10rem;
  border: 2px solid black;
`;
