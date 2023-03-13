import React from "react";

const Button = (props) => {
  let color = props.color;
  if (color === undefined) color = 'black';
  return (
    <button
      type="button"
      className={` bg-nba-blue text-[36px] ${props.paddings} ${props.className} text-${color}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
export default Button;
