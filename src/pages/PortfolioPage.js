import React from "react";
import PageStyle from "../styles/PageStyle.css";
import MainPageStyle from "../styles/MainPageStyle.css";
import NavMenu from "../components/NavMenu";
import WelcomeSection from "../sections/WelcomeSection";
import ProjectSection from "../sections/ProjectSection";
import PersonalInfoSection from "../sections/PersonalInfoSection";
import SkillsSection from "../sections/SkillsSection";
import TravelAndHobbySection from "../sections/TravelAndHobbySection";

class PortfolioPage extends React.Component {
  references = [
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
  ];
  scrollToHandler = (section) => {
    const formHandler = this.references[section].current;
    if (formHandler !== null)
      formHandler.scrollIntoView({ behavior: "smooth" });
  };
  render() {
    return (
      <div className="page">
        <div className="welcome-section">
          <NavMenu scrollToHandler={this.scrollToHandler} />
          <div ref={this.references[0]}>
            <WelcomeSection />
          </div>
        </div>
        <div ref={this.references[1]}>
          <PersonalInfoSection />
        </div>
        <div ref={this.references[2]}>
          <ProjectSection />
        </div>
        <div ref={this.references[3]}>
          <SkillsSection />
        </div>
        <div ref={this.references[4]}>
          <TravelAndHobbySection />
        </div>
      </div>
    );
  }
}

export default PortfolioPage;
