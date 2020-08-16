import React from "react";
import { createBem } from "~/bem";

import "./Icon.scss";

interface IconProps {
  iconColour: string;
}

const bem = createBem("Icon");

export const VolumeIcon = ({ iconColour }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 40 40"
    x="0px"
    y="0px"
    width="100%"
  >
    <title>volume</title>
    <path
      className={bem("smallSoundwave")}
      d=" M 27.6 15.192 s 1.75 1.404 1.75 4.617 s -1.75 4.617 -1.75 4.617 "
      fill="none"
      stroke={iconColour}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3px"
    />
    <path
      className={bem("largeSoundwave")}
      d="M32.2 8.775 S 36.28 12.132 36.28 19.8 S 32.2 30.825 32.2 30.825"
      fill="none"
      stroke={iconColour}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3px"
    />
    {/* The sound icon */}
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
