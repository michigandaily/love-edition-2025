import React from "react";
import "./Notecard.css";

const Notecard: React.FC = () => {
  return (
    <div className="wrapper">
      <div className="lid one"></div>
      <div className="lid two"></div>
      <div className="envelope"></div>
      <div className="letter">
        <p>Hello World</p>
      </div>
    </div>
  );
};

export default Notecard;