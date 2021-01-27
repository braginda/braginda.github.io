import React from 'react';
import styled from 'styled-components';
import wrkImg from '../assets/images/WTn5JKQyfy0.jpg';
import { Paragraph } from '../components/Paragraph/Paragraph';

interface ViewBottomRightProps {}

export const ViewWrk: React.FC<ViewBottomRightProps> = () => {
  return (
    <Container>
      <CompanyContainer>
        <TitleContainer>
          <Image src={wrkImg} alt="" />
          <CompanyName>.wrk</CompanyName>
        </TitleContainer>
        <AboutCompany>Vermilion</AboutCompany>
      </CompanyContainer>
      <Paragraph>Pizdasdas asdasd asd as das ddasgwrw rw gwr </Paragraph>
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

const CompanyContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  width: 100%;

  @media (min-width: ${props => props.theme.breakpoints.md}) and (orientation: portrait) {
    flex-direction: row;
    margin-bottom: ${props => props.theme.spacing(5)};
  }

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    flex-direction: row;
    margin-bottom: ${props => props.theme.spacing(5)};
  }
`;

const AboutCompany = styled.div`
  background: ${props => props.theme.palette.primary.main};
  color: ${props => props.theme.palette.background.main};
  border-radius: 5px 25px 5px 25px;
  padding: ${props => props.theme.spacing(4)};
  width: 50%;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: ${props => props.theme.spacing(4)};

  @media (min-width: ${props => props.theme.breakpoints.md}) and (orientation: portrait) {
    flex-direction: column;
    margin-bottom: 0;
  }

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    flex-direction: column;
    margin-bottom: 0;
  }
`;

const CompanyName = styled.span`
  font-size: 2.5rem;
  color: ${props => props.theme.palette.secondary.main};

  @media (min-width: ${props => props.theme.breakpoints.md}) and (orientation: portrait) {
    font-size: 5rem;
  }
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    font-size: 5rem;
  }
`;

const Image = styled.img`
  border-radius: 50%;
  box-shadow: 0 0 12px 0 white;
  margin-right: ${props => props.theme.spacing(4)};
  height: 50px;
  width: 50px;

  @media (min-width: ${props => props.theme.breakpoints.md}) and (orientation: portrait) {
    box-shadow: 0 0 24px 0 white;
    margin-right: 0;
    margin-bottom: ${props => props.theme.spacing(4)};
    height: 200px;
    width: 200px;
  }

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    box-shadow: 0 0 24px 0 white;
    margin-right: 0;
    margin-bottom: ${props => props.theme.spacing(5)};
    height: 300px;
    width: 300px;
  }
`;
