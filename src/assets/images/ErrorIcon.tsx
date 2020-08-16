import React from "react";

interface IconProps {
  iconColour: string;
}

export const ErrorIcon = ({ iconColour }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 44 44"
    x="0px"
    y="0px"
    width="100%"
  >
    <title>error</title>
    <circle
      cx="22"
      cy="22"
      r="14.5"
      transform="translate(-9.11 22) rotate(-45)"
      fill="none"
      stroke={iconColour}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3.5px"
    />
    <line
      x1="11.75"
      y1="11.75"
      x2="32.25"
      y2="32.25"
      fill="none"
      stroke={iconColour}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3.5px"
    />
  </svg>
);
