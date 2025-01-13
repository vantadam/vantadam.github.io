import React, { Component } from "react";
import Proud from "./feeling_proud.svg";


class FeelingProud extends Component {
  render() {
    const theme = this.props.theme;
    return (
   <img
      src={Proud}
      alt="feeling proud"
     
     />

    );
  }
}

export default FeelingProud;
