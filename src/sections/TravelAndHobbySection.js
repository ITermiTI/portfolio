import React from "react";
import HobbyStyle from "../styles/HobbyStyle.css";
import SkydivingImage from "../assets/skydiving.png";
import DivingImage from "../assets/scubadiving.jpg";
import SportsImage from "../assets/hockey.jpg";
import TravelImage from "../assets/travel.jpg";

class TravelAndHobbySection extends React.Component {
  render() {
    return (
      <div className="hobby-section">
        <div className="spacer" />
        <div className="about-text">ABOUT ME</div>
        <div className="hobby-row">
          <img src={SkydivingImage} className="hobby-image" />
          <div className="hobby-description">
            <div>SKYDIVING</div>
            <div>
              As flight and planes were always my thing it was my little dream
              to skydive. I started doing it when I turned 18 y.o. in Gliwice
              Aeroclub. Since then I am still attending "weekends with
              skydiving" from time to time.
            </div>
          </div>
        </div>
        <div className="hobby-row">
          <div className="hobby-description">
            <div>SCUBA DIVING</div>
            <div>
              Since I achieved my skydiving dream, my next goal was to go under
              water. I started my scuba diving course in 2018 and I gained my
              diving license. My next plans include exploring coral reefs all
              over the world.
            </div>
          </div>
          <img src={DivingImage} className="hobby-image" />
        </div>
        <div className="hobby-row">
          <img src={SportsImage} className="hobby-image" />
          <div className="hobby-description">
            <div>SPORTS</div>
            <div>
              As a child, I really enjoyed any sports activities. Now, despite
              having less time I still spend a lot of time at a gym or on a
              sportsfield. I also really enjoy attending sports events,
              especially hockey and football games.
            </div>
          </div>
        </div>
        <div className="spacer" />
        <div className="hobby-row">
          <div className="hobby-description">Site made by: Pawel Owczarek</div>
          <div className="hobby-description">
            Contact me: termit.t91t@gmail.com
          </div>
        </div>
      </div>
    );
  }
}

export default TravelAndHobbySection;
