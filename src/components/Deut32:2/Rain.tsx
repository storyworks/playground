import React from "react";

import { createBem } from "~/bem";
import { dew } from "~/assets/images";

import "./Rain.scss";

interface RainProps {
  numberOfDrops?: number;
}

const bem = createBem("Rain");

const Rain = ({ numberOfDrops = 25 }: RainProps) => {
  const array = new Array(numberOfDrops).fill(0);

  return (
    <div className={bem()}>
      <div
        className={bem("verse")}
        style={{
          fontSize: `${Math.min(window.innerWidth, 500) / 100 / 3.4}em`,
          lineHeight: `${Math.min(window.innerWidth, 500) / 1000}em`,
        }}
      >
        <p>
          <span>Let my teaching fall like rain</span>
        </p>
        <p>
          <span>and my words descend like dew,</span>
        </p>
        <p>
          <span>like showers on new grass,</span>
        </p>
        <p>
          <span>like abundant rain on tender plants.</span>
        </p>
        <p className={bem("reference")}>Deuteronomy 32:2</p>
      </div>
      <div className={bem("rain")}>
        {array.map(() => {
          const randoHundo = Math.floor(Math.random() * (98 - 1 + 1) + 1);
          const randoFiver = Math.floor(Math.random() * (5 - 2 + 1) + 2);
          return (
            <>
              <div
                className={bem("drop")}
                style={{
                  width: `${500 / numberOfDrops}px`,
                  bottom: `${randoFiver + randoFiver - 1 + 95}%`,
                  animationDelay: `0.${randoHundo}s`,
                  animationDuration: `0.9${randoHundo}s`,
                }}
              >
                <div
                  className={bem("stem")}
                  style={{
                    animationDelay: `0.${randoHundo}s`,
                    animationDuration: `0.9${randoHundo}s;`,
                  }}
                />
              </div>
            </>
          );
        })}
      </div>
      <img src={dew} alt="morning dew" />
    </div>
  );
};

export default Rain;
