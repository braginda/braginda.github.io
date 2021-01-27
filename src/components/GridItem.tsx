import React from 'react';
import styled from 'styled-components';
import { useSwipeable } from 'react-swipeable';

interface GridItemProps {
  active?: boolean;
  scrollable?: boolean;
}

export const GridItem: React.FC<GridItemProps> = ({ children, active, scrollable }) => {
  const [shownAtLeastOnce, setShownAtLeastOnce] = React.useState<boolean>(false);
  const [scrolledToTop, setScrolledToTop] = React.useState<boolean>(false);
  const [scrolledToBottom, setScrolledToBottom] = React.useState<boolean>(false);

  const gridItemRef = React.useRef<HTMLDivElement>(null);
  const childrenWrapperRef = React.useRef<HTMLDivElement>(null);

  const handlers = useSwipeable({
    onSwiped: eventData => {
      if (
        !gridItemRef.current ||
        !childrenWrapperRef.current ||
        childrenWrapperRef.current.scrollHeight < gridItemRef.current.clientHeight
      ) {
        return;
      }
      if ((eventData.dir === 'Up' && !scrolledToBottom) || (eventData.dir === 'Down' && !scrolledToTop)) {
        eventData.event.stopPropagation();
      }
    },
  });

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const target = event.currentTarget;
    setScrolledToBottom(target.scrollHeight - target.scrollTop - target.clientHeight < 5);
    setScrolledToTop(!target.scrollTop);
  };

  React.useEffect(() => {
    if (active && !shownAtLeastOnce) {
      setShownAtLeastOnce(true);
    }
  }, [active]);

  return (
    <StyledGridItem ref={gridItemRef} scrollable={scrollable} onScroll={handleScroll}>
      <DivFullHeight {...handlers}>
        <DivFullHeight ref={childrenWrapperRef}>{shownAtLeastOnce ? children : null}</DivFullHeight>
      </DivFullHeight>
    </StyledGridItem>
  );
};

const StyledGridItem = styled.div<GridItemProps>`
  padding: ${props => props.theme.spacing(3)};
  overflow-y: ${props => (props.scrollable ? 'auto' : 'hidden')};

  @media (min-width: ${props => props.theme.breakpoints.md}) and (orientation: portrait) {
    padding: ${props => props.theme.spacing(4)};
  }

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    padding: ${props => props.theme.spacing(5)};
  }
`;

const DivFullHeight = styled.div`
  height: 100%;
`;
