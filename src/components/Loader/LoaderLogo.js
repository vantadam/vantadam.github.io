import React from "react";
import "./LoaderLogo.css";
import Lottie from 'react-lottie';
import animationData from './loader.json';


class LogoLoader extends React.Component {
  render() {
    const theme = this.props.theme;
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };
    return (
      <div>
      <Lottie 
	    options={defaultOptions}
        height={400}
        width={400}
      />
    </div>
    );
  }
}

export default LogoLoader;
