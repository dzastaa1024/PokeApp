import React, { Component } from "react";
import styled from "styled-components";

export default class Card extends Component {
  // state = {
  //   pokemonTypes: [],
  // };

  // typeOfPokemons = () => {
  //   const pokemonTypes = [];

  //   this.props.pokemon.types.map((singlePokemon) => {
  //     return (pokemonTypes = singlePokemon.type.name);
  //   });

  //   this.setState({
  //     pokemonTypes: pokemonTypes,
  //   });
  // };

  render() {
    const { pokemon, pokemonType } = this.props;
    // const { pokemonTypes } = this.state;

    console.log("pokemon ", pokemon);
    console.log("pokemontyp", pokemonType);

    return (
      <Wrapper>
        <ImageWrapper>
          <Image src={pokemon.sprites.front_default} />
        </ImageWrapper>
        <Name>{pokemon.name}</Name>
        <Abilities>
          {pokemonType.map((abilitie) => {
            return <Skills>{abilitie.type.name}</Skills>;
          })}
        </Abilities>
        <Weight>Weight : {pokemon.weight}</Weight>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  border: 1px solid red;
  flex: 1 0 50%;

  text-align: center;
  border-radius: 14px;
  background-color: white;
  box-shadow: 0 0 2px 0px;
  border: none;
`;

const ImageWrapper = styled.div`
  height: 16rem;
  width: 16rem;
  padding: 1rem;
  margin: auto;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const Name = styled.h3`
  padding-bottom: 2rem;

  &::first-letter {
    text-transform: uppercase;
  }
`;

const Abilities = styled.p`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-bottom: 2rem;
`;

const Skills = styled.p``;

const Weight = styled.p`
  padding-bottom: 1.5rem;
  font-weight: 600;
`;
