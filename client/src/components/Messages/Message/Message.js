import React from "react";
import "./message.css";
import ReactEmoji from 'react-emoji'

function Message(props) {
  const {
    message: { user, text },
    name,
  } = props;
  const Name = name.trim().toLowerCase(); //Name=trimmed name
  let isSentByCurrentUser = user === Name;
  return isSentByCurrentUser ? (
    <div className="messageContainer justifyEnd">
      <p className="sentText pr-10">{Name}</p>
      <div className="messageBox backgroundBlue">
        <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
      </div>
    </div>
  ) : (
    <div className="messageContainer justifyStart">
      <div className="messageBox backgroundLight">
        <p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
      </div>
      <p className="sentText">{user}</p>
    </div>
  );
}

export default Message;
