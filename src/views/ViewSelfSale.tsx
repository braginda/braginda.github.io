import React from 'react';
import { Paragraph } from '../components/Paragraph/Paragraph';
import styled from 'styled-components';

interface ViewSelfSaleProps {}

export const ViewSelfSale: React.FC<ViewSelfSaleProps> = () => {
  return (
    <Container>
      <Paragraph>TBD</Paragraph>
      <Paragraph>I'm still working on it. Come back later! </Paragraph>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100%;
`;
