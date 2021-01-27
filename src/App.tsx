import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Grid } from './components/Grid/Grid';
import './i18n';
import { GlobalStyle, theme } from './theme';

export const App = () => {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ViewportBlocker>
          <Grid />
        </ViewportBlocker>
      </ThemeProvider>
    </React.Fragment>
  );
};

const ViewportBlocker = styled.div`
  position: relative;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  width: 100vw;
  overflow: hidden;
  color: ${props => props.theme.palette.primary.main};
`;
