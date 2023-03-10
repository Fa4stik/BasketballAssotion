import React from "react";

const Button = (props) => {
  return (
    <button
      type="button"
      className={`text-white white bg-nba-blue text-[${props.textSize}] ${props.paddings}`}
    >
          {props.children}
    </button>
  );
};
export default Button;
