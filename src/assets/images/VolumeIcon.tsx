import React from "react";

interface IconProps {
  iconColour: string;
}

export const VolumeIcon = ({ iconColour }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 44 44"
    x="0px"
    y="0px"
    width="100%"
  >
    <title>volume</title>
    <path
      d="M27.6,16.88s1.75,1.56,1.75,5.13-1.75,5.13-1.75,5.13"
      fill="none"
      stroke={iconColour}
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="3px"
    />
    <path
      d="M32.2,9.75S36.28,13.48,36.28,22,32.2,34.25,32.2,34.25"
      fill="none"
      stroke={iconColour}
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="3px"
    />
    <path
      d="M12.4,29.08h-2.3a2.7,2.7,0,0,1-2.7-2.7v-8.8a2.7,2.7,0,0,1,2.7-2.7h2.31"
      fill="none"
      stroke={iconColour}
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="3px"
    />
    <path
      d="M12.4,29.08l4.53,5.84a2.9,2.9,0,0,0,5.19-1.78V10.85a2.9,2.9,0,0,0-5.19-1.78l-4.51,5.81"
      fill="none"
      stroke={iconColour}
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="3px"
    />
  </svg>
);
