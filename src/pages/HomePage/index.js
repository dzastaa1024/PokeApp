import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default class HomePage extends Component {
  renderCards = () => {
    const cards = [
      { id: 0, title: "Pokedex", color: "red" },
      { id: 1, title: "Abilities", color: "red" },
      { id: 2, title: "Moves", color: "red" },
      { id: 3, title: "Items", color: "red" },
      { id: 4, title: "Location", color: "red" },
      { id: 5, title: "TypeCharts", color: "red" },
    ];

    const cardList = cards.map((card) => {
      return (
        <Item key={card.id}>
          <StyledLink to={`/${card.title}`}>{card.title} </StyledLink>
        </Item>
      );
    });

    return cardList;
  };

  render() {
    return (
      <Wrapper>
        <Container>
          <Header>Welcome to PokeApp!</Header>
          <Form>
            <List>{this.renderCards()}</List>
          </Form>
        </Container>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Container = styled.div`
  width: 60vw;
  background-color: rgba(64, 60, 60, 0.2);
  padding: 2rem;
  box-shadow: 0 0 6px 0;
`;

const Header = styled.h1`
  padding: 1rem;
  text-align: center;
  color: white;
`;

const Form = styled.form``;

const List = styled.ul`
  list-style-type: none;
  display: grid;
  grid-gap: 3rem;
  grid-template-columns: auto auto auto;
  padding: 10px;
`;

const Item = styled.li`
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 0.8rem;
  font-size: 2rem;
  text-align: center;
`;

const StyledLink = styled(Link)`
  color: #1d1919;
  font-weight: 500;
`;
