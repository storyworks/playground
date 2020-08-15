/* eslint-env jest */
import React from "react";
import { render } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";

import BusySpinner from ".";

describe("BusySpinner", () => {
  it("displays the content when isBusy is false", () => {
    const actual = render(
      <BusySpinner>
        <p data-id="test-data">Test Data</p>
      </BusySpinner>
    );
    const content = actual.getByText("Test Data");
    expect(content).toBeDefined();
  });
});
