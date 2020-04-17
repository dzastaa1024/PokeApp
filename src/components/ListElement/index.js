import React, { Component } from "react";
import styled from "styled-components";

import Card from "../Card";
import Stats from "../Stats";

export default class ListElement extends Component {
  render() {
    return (
      <Wrapper>
        <Card />
        <Stats />
      </Wrapper>
    );
  }
}

const Wrapper = styled.div``;
