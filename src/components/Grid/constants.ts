export interface Position {
  x: number;
  y: number;
}

export type Offset = {
  top: string | number;
  left: string | number;
};

export const gridOffsets: Offset[][] = [
  [
    {
      top: 0,
      left: 0,
    },
    {
      top: 0,
      left: '-100%',
    },
    {
      top: 0,
      left: '-200%',
    },
  ],
  [
    {
      top: '-100%',
      left: 0,
    },
    {
      top: '-100%',
      left: '-100%',
    },
    {
      top: '-100%',
      left: '-200%',
    },
  ],
  [
    {
      top: '-200%',
      left: 0,
    },
    {
      top: '-200%',
      left: '-100%',
    },
    {
      top: '-200%',
      left: '-200%',
    },
  ],
];
