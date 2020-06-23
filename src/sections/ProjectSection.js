import React from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import ProjectStyle from "../styles/ProjectStyle.css";
import ProjectBox from "../components/ProjectBox";
import * as ProjectDescs from "../assets/projects";
class ProjectSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
    this.goToRepo = this.goToRepo.bind(this);
    this.decrementIndex = this.decrementIndex.bind(this);
    this.incrementIndex = this.incrementIndex.bind(this);
  }

  goToRepo() {
    var link;
    switch (this.state.index) {
      case 0:
        link = "https://github.com/ITermiTI/JoyFinder";
        break;
      case 2:
        link = "https://github.com/ITermiTI/portfolio";
        break;
      case 3:
        link = "https://github.com/ITermiTI/TransportCompanyWebApp";
        break;
      case 4:
        link = "https://github.com/ITermiTI/TextApp";
        break;
      case 5:
        link = "https://github.com/ITermiTI/Kredek";
        break;
      case 6:
        link = "https://github.com/ITermiTI/systemy-operacyjne-2";
        break;
    }

    window.location.href = link;
  }

  decrementIndex() {
    console.log(this.state.index);
    var index;
    if (this.state.index === 0) index = ProjectDescs.projects.length - 1;
    else index = this.state.index - 1;
    this.setState({ index: index });
  }

  incrementIndex() {
    var index;
    if (this.state.index === ProjectDescs.projects.length - 1) index = 0;
    else index = this.state.index + 1;
    this.setState({ index: index });
  }

  render() {
    return (
      <div className="project-section">
        <div className="project-title">My projects</div>
        <div className="project-row">
          <AiOutlineLeft
            className="left-arrow"
            color="gray"
            size="100"
            cursor="pointer"
            onClick={this.decrementIndex}
          />
          <ProjectBox
            project={ProjectDescs.projects[this.state.index]}
            goToRepo={this.goToRepo}
          />
          <AiOutlineRight
            className="right-arrow"
            color="gray"
            size="100"
            cursor="pointer"
            onClick={this.incrementIndex}
          />
        </div>
        <div className="spacer" />
      </div>
    );
  }
}

export default ProjectSection;
