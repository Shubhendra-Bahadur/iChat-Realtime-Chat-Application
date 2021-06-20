import React from "react";
import "./infobar.css";
import onlineIcon from "../../images/onlineIcon.png";
import closeIcon from "../../images/closeIcon.png";
function InfoBar(props) {
  const { room } = props;
  return (
    <div className="infoBar">
      <div className="leftInnerContainer">
        <img src={onlineIcon} alt="online" className="onlineIcon" />
        <h3>{room}</h3>
      </div>
      <div className="rightInnerContainer">
        <a href="/">
          <img src={closeIcon} alt="close" />
        </a>
      </div>
    </div>
  );
}

export default InfoBar;
