import React from "react";
import "./LoaderLogo.css";
import animationData from "./loader.json";

class LogoLoader extends React.Component {
  render() {
    const theme = this.props.theme;
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };
    return <div></div>;
  }
}

export default LogoLoader;
