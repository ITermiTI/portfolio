import React from "react";
import WelcomeStyle from "../styles/WelcomeStyle.css";

class WelcomeSection extends React.Component {
  render() {
    return (
      <div className="welcome-section">
        <div className="welcome-photo">
          <div className="name-and-surname-text">Paweł Owczarek</div>
          <div className="introduction-text">Software developer</div>
        </div>
      </div>
    );
  }
}

export default WelcomeSection;
