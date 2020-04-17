import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default class HomePage extends Component {
  renderCards = () => {
    const cards = [
      { id: 0, title: "pokedex", color: "red" },
      { id: 1, title: "abilities", color: "red" },
      { id: 2, title: "moves", color: "red" },
      { id: 3, title: "items", color: "red" },
      { id: 4, title: "location", color: "red" },
      { id: 5, title: "typeCharts", color: "red" },
    ];

    const cardList = cards.map((card) => {
      return (
        <Item key={card.id}>
          <Link to={`/${card.title}`}>{card.title}</Link>
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
`;

const Header = styled.h1`
  padding: 1rem;
  text-align: center;
`;

const Form = styled.form``;

const List = styled.ul`
  list-style-type: none;
`;

const Item = styled.li``;
