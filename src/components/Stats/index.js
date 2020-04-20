import React, { Component } from "react";
import styled from "styled-components";

export default class Stats extends Component {
  render() {
    const { pokemonStats } = this.props;
    return (
      <Wrapper>
        <StatsWrapper>
          <StatsList>
            {pokemonStats.map((stat) => (
              <Cathegory>{stat.stat.name}</Cathegory>
            ))}
          </StatsList>
          <StatsList>
            {pokemonStats.map((stat) => (
              <Numbers>{stat.base_stat}</Numbers>
            ))}
          </StatsList>
          <Chart> tu beda slupki </Chart>
        </StatsWrapper>
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
`;

const StatsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  line-height: 160%;
`;

const StatsList = styled.ul`
  list-style-type: none;
  text-align: end;
`;

const Cathegory = styled.li`
  &::first-letter {
    text-transform: uppercase;
  }
`;

const Numbers = styled.li``;

const Chart = styled.div`
  width: 40%;
`;
