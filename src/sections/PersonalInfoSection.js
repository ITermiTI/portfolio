import React from "react";
import PersonalInfoStyle from "../styles/PersonalInfoStyle.css";
import { FaGithub, FaLinkedin, FaPaperclip } from "react-icons/fa";
import polwroc from "../assets/politechnika-wroclawska.png";
import xeva from "../assets/xeva.PNG";
import myphoto from "../assets/me.jpg";
import { GrMail } from "react-icons/gr";

class PersonalInfoSection extends React.Component {
  goToGithub() {
    window.location.href = "https://github.com/ITermiTI";
  }

  goToLinkedin() {
    window.location.href =
      "https://www.linkedin.com/in/pawe%C5%82-owczarek-a433a01a2/";
  }

  downloadCV() {}

  render() {
    return (
      <div className="personal-section">
        <div className="spacer" />
        <div className="info-section">
          <div className="photo-box">
            <img src={myphoto} className="my-photo" />
            <div className="name-text">Pawel Owczarek</div>
          </div>
          <div className="mail-box">
            <GrMail size="25" color="white" />
            <div className="mail-text">termit.t91t@gmail.com</div>
          </div>
          <div className="icons-section">
            <div className="icon-desc-section" onClick={this.goToGithub}>
              <FaGithub color="white" size="25" />
              <div className="desc-text">GITHUB</div>
            </div>
            <div className="icon-desc-section" onClick={this.goToLinkedin}>
              <FaLinkedin color="white" size="25" />
              <div className="desc-text">LINKEDIN</div>
            </div>
            <div className="icon-desc-section" onClick={this.downloadCV}>
              <FaPaperclip color="white" size="25" />
              <div className="desc-text">CV Sample</div>
            </div>
          </div>
        </div>
        <div className="introduction-text">
          Welcome to my page, I am Pawel and I am currently a third year student
          at Wroclaw University of Science and Technology and software
          developer.
        </div>
        <div className="education-experiance-section">
          <div className="education-section">
            <div className="education-text">EDUCATION</div>
            <div className="spacer-small" />
            <table className="education-table">
              <tr className="header-row">
                <td></td>
                <th className="table-header">University</th>
                <th className="table-header">Time</th>
                <th className="table-header">Faculty</th>
                <th className="table-header">Field</th>
              </tr>
              <tr className="data-row">
                <td className="table-cell">
                  <img src={polwroc} className="university-logo" />
                </td>
                <td className="table-cell">
                  Wroclaw University of Science and Technology
                </td>
                <td className="table-cell">2017 -</td>
                <td className="table-cell">Electronics</td>
                <td className="table-cell">Computer Science</td>
              </tr>
            </table>
          </div>
          <div className="education-section">
            <div className="education-text">EXPERIANCE</div>
            <div className="spacer-small" />
            <table className="education-table">
              <tr className="header-row">
                <td></td>
                <th className="table-header">Company</th>
                <th className="table-header">Time</th>
                <th className="table-header">Role</th>
                <th className="table-header">Description</th>
              </tr>
              <tr className="data-row">
                <td className="table-cell">
                  <img src={xeva} className="firm-logo" />
                </td>
                <td className="table-cell">XEVA</td>
                <td className="table-cell">03.2020 - 06.2020</td>
                <td className="table-cell">Team leader and developer</td>
                <td className="table-cell">
                  Devoloping an app for the company
                </td>
              </tr>
            </table>
          </div>
          <div className="experiance-section"></div>
        </div>
        <div className="spacer" />
      </div>
    );
  }
}

export default PersonalInfoSection;
