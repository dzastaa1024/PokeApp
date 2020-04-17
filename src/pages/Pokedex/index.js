import React, { Component } from "react";
import * as fetcher from "../../fetcher";

export default class Pokedex extends Component {
  async componentDidMount() {
    const pokedex = await fetcher.fetchPokedexs();
    console.log(pokedex);
  }

  render() {
    return <div></div>;
  }
}
