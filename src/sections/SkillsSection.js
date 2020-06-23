import React from "react";
import SkillsStyle from "../styles/SkillsStyle.css";
import * as SkillsConst from "../assets/it-skills";

class SkillsSection extends React.Component {
  render() {
    return (
      <div className="skills-section">
        <div className="it-section">
          <div className="title-text">Skills</div>
          <div>
            <table className="skill-table">
              <tr>
                <th className="table-header">LANGUAGE</th>
                <th className="table-header">FRAMEWORKS / LIBRARIES</th>
                <th className="table-header">WORKING SINCE</th>
              </tr>
              {SkillsConst.skills.map((skill) => {
                return (
                  <tr>
                    <td className="table-cell">{skill.language}</td>
                    <td className="table-cell">
                      {skill.frameworks.map((framework) => {
                        return framework + ", ";
                      })}
                    </td>
                    <td className="table-cell">{skill.since}</td>
                  </tr>
                );
              })}
            </table>
          </div>
        </div>
        <div className="spacer" />
        <div className="language-personal-section">
          <div className="it-section">
            <div className="title-text">Languages</div>
            <div>
              <table className="skill-table">
                <tr>
                  <th className="table-header">LANGUAGE</th>
                  <th className="table-header">LEVEL</th>
                </tr>
                <tr>
                  <td className="table-cell">English</td>
                  <td className="table-cell">C1</td>
                </tr>
                <tr>
                  <td className="table-cell">Spanish</td>
                  <td className="table-cell">A2</td>
                </tr>
                <tr>
                  <td className="table-cell">German</td>
                  <td className="table-cell">A2</td>
                </tr>
              </table>
            </div>
          </div>
          <div className="it-section">
            <div className="title-text">Personal skills</div>

            <div>
              <li className="table-cell">Problem solving</li>

              <li className="table-cell">Teamworking</li>

              <li className="table-cell">Leadership skills</li>

              <li className="table-cell">Creativity</li>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SkillsSection;
