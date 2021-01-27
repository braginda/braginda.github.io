declare module 'styled-components' {
  export interface DefaultTheme {
    palette: Palette;
    breakpoints: Record<Breakpoint, string>;
    spacing: Spacing;
  }
}

export interface Palette {
  primary: Color;
  secondary: Color;
  background: Color;
}

export type Color = {
  main?: string;
  light?: string;
  dark?: string;
};

export type SpacingIncrement = 0 | 1 | 2 | 3 | 4 | 5;

export type Spacing = (increment: SpacingIncrement) => string;

export type Breakpoint = 'sm' | 'md' | 'lg' | 'xl';
