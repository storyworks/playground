import React from "react";
import { createBem } from "~/bem";

import "./Icon.scss";

interface IconProps {
  iconColour: string;
}

const bem = createBem("Icon");

export const BufferIcon = ({ iconColour }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={bem("buffer")}
    viewBox="0 0 44 44"
    x="0px"
    y="0px"
    width="100%"
  >
    <title>buffer</title>
    <g>
      <g>
        <path
          d="M22.28,9.71A12.29,12.29,0,0,1,31.63,30"
          fill="none"
          stroke={iconColour}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3.5px"
        />
        <path
          d="M29.17,26.47,30,30.25a1.54,1.54,0,0,0,1.48,1.23l3.86.06"
          fill="none"
          stroke={iconColour}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3.5px"
        />
        <path
          d="M22.28,34.29A12.29,12.29,0,0,1,12.93,14"
          fill="none"
          stroke={iconColour}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3.5px"
        />
        <path
          d="M15.4,17.53l-.79-3.78a1.54,1.54,0,0,0-1.48-1.23l-3.86-.06"
          fill="none"
          stroke={iconColour}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3.5px"
        />
      </g>
    </g>
  </svg>
);
