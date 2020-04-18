import React, { Component } from "react";
import * as fetcher from "../../fetcher";
import styled from "styled-components";

import PokemonList from "../../components/PokemonList";

export default class Pokedex extends Component {
  state = {
    abilities: [],
    pokemons: [],
  };

  async componentDidMount() {
    const abilities = await fetcher.fetchAbility();
    const pokemons = await fetcher.fetchPokemons();

    console.log("moje pokemony ", pokemons);

    this.setState({
      abilities: abilities,
      pokemons: pokemons,
    });
  }

  render() {
    const { abilities, pokemons } = this.state;
    // console.log("Pokedex", pokemons.length);
    return (
      <Page>
        <SideBar>
          <AbilitiesSection>
            {abilities.map((ability) => (
              <Item key={ability.name}>{ability.name}</Item>
            ))}
          </AbilitiesSection>
        </SideBar>
        <PokemonsSection>
          <PokemonList pokemons={pokemons} />
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
  border: 1px solid black;
  text-align: center;
  text-transform: uppercase;
  border-radius: 10px;
  margin: 0.7rem;
  background-color: #f3f3f3;
  font-weight: 400;
`;

const PokemonsSection = styled.div`
  border: 2px solid black;
  margin-left: 17rem;
`;
