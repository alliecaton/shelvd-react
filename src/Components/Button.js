import React from "react";

const Button = ({ text, styleMode, onClick }) => {
  return (
    <>
      <button onClick={onClick} className="light">
        {text}
      </button>
    </>
  );
};

export default Button;
