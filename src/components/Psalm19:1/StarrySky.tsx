import React from "react";

import { createBem } from "~/bem";
import { starrySky, forest } from "~/assets/images";

import "./StarrySky.scss";

interface StarrySkyProps {
  numberOfStars?: number;
}

const bem = createBem("StarrySky");

const StarrySky = ({ numberOfStars = 40 }: StarrySkyProps) => {
  const array = new Array(numberOfStars).fill(0);

  return (
    <div className={bem()}>
      <div
        className={bem("verse")}
        style={{
          fontSize: `${Math.min(window.innerWidth, 500) / 100 / 4}em`,
          lineHeight: `${Math.min(window.innerWidth, 500) / 3000}em`,
        }}
      >
        <p className={bem("top")}>
          <span>The heavens declare the glory of God,</span>
        </p>
        <p className={bem("mid")}>
          <span>and the expanse proclaims</span>
        </p>
        <p className={bem("bottom")}>
          <span>the work of his hands.</span>
        </p>
        <p className={bem("reference")}>Psalm 19:1</p>
      </div>
      <div className={bem("stars")}>
        {array.map((i) => {
          const randoHundo = Math.floor(Math.random() * (98 - 1 + 1) + 1);
          const randoFiver = Math.floor(Math.random() * (5 - 2 + 1) + 2);
          return (
            <div
              key={`star${i}`}
              className={bem("star")}
              style={{
                width: `${randoFiver % 2}px`,
                height: `${randoFiver % 2}px`,
                marginTop: `${randoHundo * 5}px`,
                animationDelay: `0.${randoFiver}s`,
                animationDuration: `1.8${randoFiver}s`,
              }}
            />
          );
        })}
      </div>
      <img
        src={forest}
        alt="forest"
        className={bem("overlay")}
        style={{
          height: Math.min(window.innerWidth * 0.85, 500),
        }}
      />
      <img src={starrySky} alt="starry sky" className={bem("background")} />
    </div>
  );
};

export default StarrySky;
