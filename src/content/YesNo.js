import "./Content.css";
import React, { useState } from "react";

export default function YesNo() {
  const [decider, setDecider] = useState(null);

  const handleClick = () => {
    setDecider((Math.random() * 1000).toFixed());
  };

  return (
    <>
      <p className="info">tap 🤔 below to get your response</p>
      <div onClick={handleClick}>
        {decider === null ? (
          <div className="main">
            <div className="emoji">🤔</div>
            <p className="msg">let's go!</p>
          </div>
        ) : decider % 2 === 0 ? (
          <div className="main">
            <div className="emoji">👍🏻</div>
            <p className="msg">yes!</p>
          </div>
        ) : (
          <div className="main">
            <div className="emoji">👎🏻</div>
            <p className="msg">no!</p>
          </div>
        )}
      </div>
    </>
  );
}
