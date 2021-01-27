import React from 'react';
import anime from 'animejs';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Portrait } from '../components/Portrait';

interface ViewWelcomeProps {}

export const ViewWelcome: React.FC<ViewWelcomeProps> = () => {
  const { t } = useTranslation();

  React.useEffect(() => {
    anime({
      targets: ['#face'],
      delay: 3000,
      duration: 500,
      width: [0, '80%'],
      easing: 'spring(1, 100, 10, 0)',
    });
    anime({
      targets: [
        `.${IntroGreeting.styledComponentId}`,
        `.${IntroSelfPresentation.styledComponentId}`,
        `.${IntroName.styledComponentId}`,
      ],
      delay: anime.stagger(750, { start: 500 }),
      duration: 750,
      opacity: [0, 1],
      easing: 'easeOutBack',
    });
  }, []);

  return (
    <Container>
      <IntroGreeting>{t('intro.greeting')}</IntroGreeting>
      <PhotoContainer>
        <Portrait />
      </PhotoContainer>
      <IntroSelfPresentation>{t('intro.selfPresentation')}</IntroSelfPresentation>
      <IntroName>{t('intro.name')}</IntroName>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Amatic SC', cursive;
  font-size: 2rem;
  height: 100%;

  @media (orientation: landscape) {
    padding-bottom: 0;
    font-size: 2rem;
  }

  @media (min-width: ${props => props.theme.breakpoints.sm}) and (orientation: portrait) {
    font-size: 3rem;
  }

  @media (min-width: ${props => props.theme.breakpoints.lg}) and (orientation: landscape) {
    font-size: 3rem;
  }
`;

const PhotoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;

  @media (orientation: landscape) {
    width: 40vw;
  }

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    width: 60vw;
  }
  @media (min-width: ${props => props.theme.breakpoints.xl}) {
    width: 40vw;
  }
`;

const IntroGreeting = styled.span`
  font-size: 3em;
`;

const IntroSelfPresentation = styled.span``;

const IntroName = styled.span`
  color: ${props => props.theme.palette.secondary.main};
  margin-top: 0;
  font-size: 1.5em;
`;
