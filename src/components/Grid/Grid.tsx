import React from 'react';
import styled from 'styled-components';
import { useSwipeable } from 'react-swipeable';
import { GridItem } from '../GridItem/GridItem';
import {
  ViewBottomCenter,
  ViewBottomLeft,
  ViewWrk,
  ViewWelcome,
  ViewCenterLeft,
  ViewTrueEngineering,
  ViewBcs,
  ViewAbout,
  ViewCft,
} from '../../views';
import { useWindowEvent } from '../../hooks';
import { gridOffsets, Offset, Position } from './constants';

interface GridProps {}

export const Grid: React.FC<GridProps> = () => {
  const [position, setPosition] = React.useState<Position>({ y: 1, x: 1 });
  const handlers = useSwipeable({
    onSwiped: eventData => {
      if (eventData.dir === 'Left' && position.x < 2) {
        setPosition({ x: position.x + 1, y: position.y });
      }
      if (eventData.dir === 'Right' && position.x > 0) {
        setPosition({ x: position.x - 1, y: position.y });
      }
      if (eventData.dir === 'Up' && position.y < 2) {
        setPosition({ x: position.x, y: position.y + 1 });
      }
      if (eventData.dir === 'Down' && position.y > 0) {
        setPosition({ x: position.x, y: position.y - 1 });
      }
    },
  });

  const arrowKeysListener = React.useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight' && position.x < 2) {
        setPosition({ x: position.x + 1, y: position.y });
      }
      if (event.key === 'ArrowLeft' && position.x > 0) {
        setPosition({ x: position.x - 1, y: position.y });
      }
      if (event.key === 'ArrowDown' && position.y < 2) {
        setPosition({ x: position.x, y: position.y + 1 });
      }
      if (event.key === 'ArrowUp' && position.y > 0) {
        setPosition({ x: position.x, y: position.y - 1 });
      }
    },
    [position, setPosition]
  );

  useWindowEvent('keydown', arrowKeysListener);

  return (
    <StyledGrid {...handlers} offset={gridOffsets[position.y][position.x]}>
      <GridItem active={position.y === 0 && position.x === 0}>
        <ViewBottomCenter />
      </GridItem>
      <GridItem active={position.y === 0 && position.x === 1} scrollable>
        <ViewBcs />
      </GridItem>
      <GridItem active={position.y === 0 && position.x === 2} scrollable>
        <ViewTrueEngineering />
      </GridItem>
      <GridItem active={position.y === 1 && position.x === 0}>
        <ViewCenterLeft />
      </GridItem>
      <GridItem active={position.y === 1 && position.x === 1}>
        <ViewWelcome />
      </GridItem>
      <GridItem active={position.y === 1 && position.x === 2}>
        <ViewCft />
      </GridItem>
      <GridItem active={position.y === 2 && position.x === 0}>
        <ViewBottomLeft />
      </GridItem>
      <GridItem active={position.y === 2 && position.x === 1} scrollable>
        <ViewAbout />
      </GridItem>
      <GridItem active={position.y === 2 && position.x === 2} scrollable>
        <ViewWrk />
      </GridItem>
    </StyledGrid>
  );
};

const StyledGrid = styled.div<{ offset: Offset }>`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  height: 300%;
  width: 300%;
  top: ${props => props.offset.top};
  left: ${props => props.offset.left};
  position: absolute;
  transition-duration: 250ms;
  transition-timing-function: ease-out;
  transition-property: top, left, right, bottom;
`;
