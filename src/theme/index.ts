import { DefaultTheme } from 'styled-components';
import { palette } from './palette';
import { breakpoints } from './breakpoints';
import { SpacingIncrement } from './styled';

export * from './global';

const spacer = 16;
const spacing = (increment: SpacingIncrement) => {
  switch (increment) {
    case 0:
      return '0px';
    case 1:
      return `${spacer * 0.25}px`;
    case 2:
      return `${spacer * 0.5}px`;
    case 3:
      return `${spacer}px`;
    case 4:
      return `${spacer * 1.5}px`;
    case 5:
      return `${spacer * 3}px`;
  }
};

export const theme: DefaultTheme = {
  palette,
  breakpoints,
  spacing,
};
