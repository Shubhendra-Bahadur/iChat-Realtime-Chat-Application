import React from "react";
import './input.css';

function Input(props) {
  const { message, setMessage, sendMessage } = props;
  return (
    <form action="" className="form">
      <input
        className="input"
        type="text"
        placeholder="Type a message"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        onKeyPress={(event) =>
          event.key === "Enter" ? sendMessage(event) : null
        }
      />
      <button className="sendButton" onClick={(event)=>sendMessage(event)}>Send</button>
    </form>
  );
}

export default Input;
