import React from 'react';
import Header from './Components/Header/Header';
import MainContainer from './Containers/MainContainer/MainContainer';
import Footer from './Components/Footer/Footer';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './theme';

/**
 * This app creates the structure of the application.
 * It is wrapped with a theme provider.
 */

function App() {
  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <Header></Header>
        <MainContainer></MainContainer>
        <Footer></Footer>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
