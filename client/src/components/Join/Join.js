import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./join.css";

function Join() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join Room</h1>
        <div>
          <input
            placeholder="Enter your name"
            className="joinInput"
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div>
          <input
            placeholder="Enter room name"
            className="joinInput mt-20"
            type="text"
            onChange={(e) => {
              setRoom(e.target.value);
            }}
          />
        </div>
        <Link onClick={event => (!name || !room)? event.preventDefault():null} to={`/chat?name=${name}&room=${room}`}>
          <button type="button" className="button mt-20">
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Join;
