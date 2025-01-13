import React, { Component } from "react";
import Design from "./design tools.svg";

export default class DesignImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <img
        src={Design}
        alt="design"
      ></img>
     
    );
  }
}
