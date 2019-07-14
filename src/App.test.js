import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './theme';

describe('Component should be rendered properly', () => {
  it('Render component', () => {
    expect(shallow(<MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>)).toHaveLength(1);
  });
});