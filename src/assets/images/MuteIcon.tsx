import React from "react";

interface IconProps {
  iconColour: string;
}

export const MuteIcon = ({ iconColour }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 40 40"
    x="0px"
    y="0px"
    width="100%"
  >
    <title>mute</title>
    <line
      x1="27.87"
      y1="15.46"
      x2="36.55"
      y2="24.14"
      fill="none"
      stroke={iconColour}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3px"
    />
    <line
      x1="36.55"
      y1="15.46"
      x2="27.87"
      y2="24.14"
      fill="none"
      stroke={iconColour}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3px"
    />
    <path
      d="M 12.4 26.172 h -2.3 a 2.7 2.43 0 0 1 -2.7 -2.43 v -7.92 a 2.7 2.43 0 0 1 2.7 -2.43 h 2.31"
      fill="none"
      stroke={iconColour}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3px"
    />
    <path
      d="M 12.4 26.172 l 4.53 5.256 a 2.9 2.61 0 0 0 5.19 -1.602 V 9.765 a 2.9 2.61 0 0 0 -5.19 -1.602 l -4.51 5.229"
      fill="none"
      stroke={iconColour}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3px"
    />
  </svg>
);
