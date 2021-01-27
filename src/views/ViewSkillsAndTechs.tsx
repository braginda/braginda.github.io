import React from 'react';
import styled from 'styled-components';
import { Paragraph } from '../components/Paragraph/Paragraph';

interface ViewSkillsAndTechsProps {}

export const ViewSkillsAndTechs: React.FC<ViewSkillsAndTechsProps> = () => {
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
