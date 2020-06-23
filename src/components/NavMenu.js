import React from "react";
import NavMenuStyle from "../styles/NavMenuStyle.css";

class NavMenu extends React.Component {
  componentDidUpdate() {
    console.log(this.props);
  }

  render() {
    return (
      <div className="navigation-menu">
        <button
          className="navigation-text"
          onClick={() => this.props.scrollToHandler(0)}
        >
          Home
        </button>
        <button
          className="navigation-text"
          onClick={() => this.props.scrollToHandler(1)}
        >
          Personal info
        </button>
        <button
          className="navigation-text"
          onClick={() => this.props.scrollToHandler(2)}
        >
          Projects
        </button>
        <button
          className="navigation-text"
          onClick={() => this.props.scrollToHandler(3)}
        >
          Skills
        </button>
        <button
          className="navigation-text"
          onClick={() => this.props.scrollToHandler(4)}
        >
          Hobbys
        </button>
      </div>
    );
  }
}

export default NavMenu;
