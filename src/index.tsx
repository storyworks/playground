import React, { useRef } from "react";
import { render } from "react-dom";

import { createBem } from "./bem";
import Card, { Rain } from "./components/";

import "./assets/index.scss";

const bem = createBem("App");

const Application = () => {
  const refArray: React.RefObject<HTMLDivElement>[] = new Array(4).fill(
    useRef<HTMLDivElement>(null)
  );
  const data = [
    {
      id: "Deut32:2",
      audioId: "Go4YMAws6BU",
      content: <Rain />,
    },
    {
      id: "Deut32:3",
      content: <div style={{ backgroundColor: "black", width: "500px" }} />,
    },
    {
      id: "Deut32:4",
      content: <div style={{ backgroundColor: "black", width: "500px" }} />,
    },
  ];

  const cards: any[] = data.map((item, index) => {
    return {
      ...item,
      ref: refArray[index],
    };
  });

  return (
    <div className={bem()}>
      <div className={bem("grid")}>
        <h1 className={bem("heading")}>Playground</h1>
        {cards.map((card) => {
          return <Card key={card.id} {...card} />;
        })}
        <span className={bem("credits")}>
          Icons by Fengquan Li from the Noun Project
        </span>
      </div>
      <span className={bem("dev")}>made by ziwei</span>
    </div>
  );
};

render(<Application />, document.getElementById("root"));
