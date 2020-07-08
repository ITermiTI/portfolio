import React from "react";
import ProjectStyle from "../styles/ProjectStyle.css";
import { FaGithub, FaSquare } from "react-icons/fa";

class ProjectBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageOne: null,
      imageTwo: null,
      imageThree: null,
    };
    this.goToLink = this.goToLink.bind(this);
  } /*
  componentDidMount() {
    this.importImages();
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.project.photos &&
      prevProps.project.photos !== this.props.project.photos
    ) {
      this.importImages();
    }
  }

  importImages() {
    var image1, image2, image3;
    import(`../assets/${this.props.project.photos[0]}`).then(
      (image) => (image1 = image),

      import(`../assets/${this.props.project.photos[1]}`).then(
        (image) => (image2 = image),

        import(`../assets/${this.props.project.photos[2]}`).then(
          (image) => (image3 = image),
          this.setState({
            imageOne: image1,
            imageTwo: image2,
            imageThree: image3,
          })
        )
      )
    );
  }*/

  goToLink() {
    window.location.href = this.props.project.link;
  }

  render() {
    var progressColors;
    switch (this.props.project.difficulty) {
      case 1:
        progressColors = ["green", "gray", "gray"];
        break;
      case 2:
        progressColors = ["green", "green", "gray"];
        break;
      case 3:
        progressColors = ["green", "green", "green"];
        break;
    }
    return (
      <div className="project-box">
        <div className="project-name">{this.props.project.name}</div>
        <div className="project-content">
          <div className="subtitle-text">About:</div>
          <li>{this.props.project.description}</li>
          {"\n"}
          <div className="subtitle-text">Tech stack:</div>
          <li>
            {"\n"}
            {this.props.project.techstack}
            {this.props.project.photos && (
              <div className="images-row">
                <img src={this.state.imageOne} className="project-photo" />
                <img src={this.state.imageTwo} className="project-photo" />
                <img src={this.state.imageThree} className="project-photo" />
              </div>
            )}
          </li>
          {this.props.project.link && (
            <div onClick={this.goToLink} className="app-link">
              See the app on webside
            </div>
          )}
        </div>
        <div className="difficulty">
          <div className="difficulty-text">Difficulty:</div>
          <div>
            <FaSquare
              size="23"
              color={progressColors[0]}
              className="difficulty-square"
            />
            <FaSquare
              size="23"
              color={progressColors[1]}
              className="difficulty-square"
            />
            <FaSquare
              size="23"
              color={progressColors[2]}
              className="difficulty-square"
            />
          </div>
        </div>
        <div className="project-footer">
          {this.props.project.showRepo && (
            <div className="repo-link" onClick={this.props.goToRepo}>
              <FaGithub color="white" size="16" className="github-icon" />
              Find on repo
            </div>
          )}
          <div className="author-box">
            <div className="author-text">Authors: </div>
            <div className="authors-names">
              {this.props.project.authors &&
                this.props.project.authors.map((author) => {
                  return author[0] + " " + author[1] + ", ";
                })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectBox;
