import React from "react";
import { addDecorator } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import BusySpinner from ".";

export default {
  title: "components/BusySpinner",
  component: BusySpinner,
};

const rootStyle: React.CSSProperties = {
  backgroundColor: "#F0F0F0",
  color: "#000000",
  padding: "1rem",
};
addDecorator((storyFn) => <div style={rootStyle}>{storyFn()}</div>);

/* Story #1 - the component is busy */
export const normal: React.SFC<{}> = () => (
  <BusySpinner isBusy onClick={action("onClick")}>
    This is some content
  </BusySpinner>
);

/* Story #2 - the component is not busy */
export const notBusy: React.SFC<{}> = () => (
  <BusySpinner>
    <p>This is the real content</p>
  </BusySpinner>
);
