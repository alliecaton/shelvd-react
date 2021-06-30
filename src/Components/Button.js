import React from "react";

const Button = ({ text, styleMode }) => {
  return (
    <div>
      <button className={`${styleMode}`}>{text}</button>
    </div>
  );
};

export default Button;
