import React, { Component } from "react";
import styled, { css } from "styled-components";

export default class Stats extends Component {
  render() {
    const { pokemonStats } = this.props;
    return (
      <Wrapper>
        <StatsList>
          {pokemonStats.map((stat) => (
            <Container>
              <Cathegory>{stat.stat.name}</Cathegory>
              <Numbers>{stat.base_stat}</Numbers>
              <ChartWrapper>
                <Chart width={stat.base_stat}></Chart>
              </ChartWrapper>
            </Container>
          ))}
        </StatsList>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  width: 20rem;
  height: 20rem;
  flex: 1 0 50%;
  padding: 1rem;
  font-size: 1.5rem;
  line-height: 200%;
`;

const StatsList = styled.ul`
  list-style-type: none;
`;

const Container = styled.li`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Cathegory = styled.span`
  &::first-letter {
    text-transform: uppercase;
  }
`;

const Numbers = styled.span`
  padding: 0 4rem 0 4rem;
`;

const Chart = styled.div`
  position: absolute;
  height: 7px;
  border-radius: 3px;

  ${(props) =>
    props.width < 30 &&
    css`
      width: ${props.width}px;
      background-color: red;
    `}

  ${(props) =>
    props.width >= 30 &&
    props.width < 75 &&
    css`
      width: ${props.width}px;
      background-color: #ffc65e;
    `}

    ${(props) =>
      props.width >= 75 &&
      css`
        width: ${props.width}px;
        background-color: #24cc24;
      `}

`;

const ChartWrapper = styled.div`
  width: 40%;
  background-color: #d0cfcf;
  height: 7px;
  border-radius: 4px;

  position: relative;
`;
