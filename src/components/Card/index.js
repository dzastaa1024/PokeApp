import React, { Component } from "react";
import styled from "styled-components";

export default class Card extends Component {
  render() {
    const { pokemon } = this.props;
    return (
      <Wrapper>
        <ImageWrapper>
          <Image />
        </ImageWrapper>
        <Name>{pokemon.name}</Name>
        <Abilities></Abilities>
        <Skills></Skills>
      </Wrapper>
    );
  }
}

const Wrapper = styled.li`
  width: 30rem;
  height: 30rem;
`;

const ImageWrapper = styled.div`
  width: 10rem;
  height: 10rem;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const Name = styled.h3``;

const Abilities = styled.p``;

const Skills = styled.p``;
