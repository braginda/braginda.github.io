import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.palette.background.main};
    margin: 0;
    font-family: 'Balsamiq Sans', cursive;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow: hidden;
    user-select: none;
  }
  
  * {
    scrollbar-width: thin;
    scrollbar-color: ${props => props.theme.palette.primary.main} rgba(0,0,0, .7);
  }
  
  ::-webkit-scrollbar {
    width: 6px;
  }
  
  ::-webkit-scrollbar-track {
    background: rgba(0,0,0, .7);
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.palette.primary.main};
    border-radius: 20px;
  }
`;
