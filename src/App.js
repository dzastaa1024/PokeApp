import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";

import HomePage from "./pages/HomePage";
import Pokedex from "./pages/Pokedex";
import Abilities from "./pages/Abilities";
import Moves from "./pages/Moves";
import Items from "./pages/Items";
import Location from "./pages/Location";
import TypeCharts from "./pages/TypeCharts";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Wrapper>
          <GlobalStyles />
          <Route exact path="/homepage" component={HomePage} />
          <Route path="/pokedex" component={Pokedex} />
          <Route path="/abilities" component={Abilities} />
          <Route path="/moves" component={Moves} />
          <Route path="/items" component={Items} />
          <Route path="/location" component={Location} />
          <Route path="/typeCharts" component={TypeCharts} />
        </Wrapper>
      </Router>
    );
  }
}

const Wrapper = styled.div`
  height: 100%;
`;
