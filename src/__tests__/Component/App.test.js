import React from "react";
import { shallow } from "enzyme";
import App from "../../App";

describe('Component should be rendered properly', () => {
  it('Render component', () => {
    expect(shallow(
      <App />
    )).toHaveLength(1);
  });
});