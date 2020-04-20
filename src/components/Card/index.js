import React, { Component } from "react";
import styled, { css } from "styled-components";

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
        <CloseIcon right>{pokemon.height}m</CloseIcon>
        <CloseIcon>{pokemon.weight}kg </CloseIcon>
        <ImageWrapper>
          text
          <Image src={pokemon.sprites.front_default} />
        </ImageWrapper>
        <Name>{pokemon.name}</Name>
        <Abilities>
          {pokemonType.map((abilitie) => {
            return <Skills>{abilitie.type.name}</Skills>;
          })}
        </Abilities>
      </Wrapper>
    );
  }
}

const CloseIcon = styled.span`
  width: 6rem;
  height: 6rem;
  line-height: 5rem;
  color: #6b6969;
  background: white;
  border-radius: 5rem;
  position: absolute;
  top: -1.5rem;
  right: -1.5rem;
  font-weight: 600;

  ${(props) =>
    props.right &&
    css`
      left: -1.5rem;
    `}
`;

const Wrapper = styled.div`
  border: 1px solid red;
  flex: 1 0 50%;

  text-align: center;
  border-radius: 14px;
  background-color: #fbf9f9;
  box-shadow: 0 0 1px 0px;
  border: none;
  position: relative;
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
  font-weight: 600;
  color: #6b6969;
  font-size: 2.7rem;

  &::first-letter {
    text-transform: uppercase;
  }
`;

const Abilities = styled.p`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-bottom: 2rem;
  text-transform: uppercase;
`;

const Skills = styled.p``;

const Weight = styled.p`
  padding-bottom: 1.5rem;
  font-weight: 600;
`;
