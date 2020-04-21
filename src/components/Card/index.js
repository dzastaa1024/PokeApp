import React, { Component } from "react";
import styled, { css } from "styled-components";
import { primaryColor, darkerGrey } from "../../colors";

export default class Card extends Component {
  render() {
    const { pokemon } = this.props;

    // console.log("pokemon ", pokemon);
    // console.log("pokemontyp", pokemonType);

    return (
      <Wrapper>
        <BackgroundId> #{pokemon.id}</BackgroundId>
        <Circle right>{pokemon.height}m</Circle>
        <Circle>{pokemon.weight}kg </Circle>
        <ImageWrapper>
          <Image src={pokemon.sprites.front_default} />
        </ImageWrapper>
        <Name>{pokemon.name}</Name>
        <Skills>
          {pokemon.abilities.map((ability) => {
            return <Abilities>{ability.ability.name}</Abilities>;
          })}
        </Skills>
        <Skills>
          {pokemon.types.map((type) => {
            return <Type key={type.type.url}>{type.type.name}</Type>;
          })}
        </Skills>
      </Wrapper>
    );
  }
}

const Circle = styled.span`
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

const BackgroundId = styled.div`
  width: 100%;
  font-size: 12rem;
  position: absolute;
  z-index: 1;
  color: ${darkerGrey};
  font-weight: 600;
`;

const Wrapper = styled.div`
  border: 1px solid red;
  flex: 1 0 50%;

  text-align: center;
  border-radius: 14px;
  background-color: #fbf9f9;
  box-shadow: 0 0 20px 0px;
  border: none;
  position: relative;
`;

const ImageWrapper = styled.div`
  height: 16rem;
  width: 16rem;
  padding: 1rem;
  margin: auto;

  z-index: 2;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const Name = styled.h3`
  padding-bottom: 2rem;
  font-weight: 600;
  color: ${primaryColor};
  font-size: 2.7rem;

  &::first-letter {
    text-transform: uppercase;
  }
`;

const Skills = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-bottom: 2rem;
  text-transform: uppercase;
`;

const Type = styled.li``;

const Abilities = styled.li`
  font-weight: 600;
`;
