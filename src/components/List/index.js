import React, { Component } from "react";
import styled from "styled-components";

import ListElement from "../ListElement";

export default class List extends Component {
  render() {
    return (
      <Wrapper>
        <ListElement />
      </Wrapper>
    );
  }
}

const Wrapper = styled.div``;
