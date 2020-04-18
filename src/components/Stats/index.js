import React, { Component } from "react";
import styled from "styled-components";

export default class Stats extends Component {
  render() {
    return <Wrapper></Wrapper>;
  }
}

const Wrapper = styled.div`
  width: 20rem;
  height: 20rem;
  border: 1px solid red;
  flex: 1 0 50%;
`;
