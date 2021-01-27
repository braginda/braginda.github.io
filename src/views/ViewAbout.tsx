import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import anime from 'animejs';
import { Header } from '../components/Header/Header';
import { Paragraph } from '../components/Paragraph/Paragraph';

interface ViewAboutProps {}

export const ViewAbout: React.FC<ViewAboutProps> = () => {
  const { t } = useTranslation();

  React.useEffect(() => {
    anime({
      targets: [`.view-about__header`],
      delay: 200,
      duration: 750,
      skewX: ['15deg', '-35deg', '-10deg'],
      easing: 'easeOutBounce',
    });
    anime({
      targets: [`.view-about__paragraph`],
      delay: anime.stagger(750, { start: 950 }),
      duration: 1250,
      opacity: [0, 1],
      easing: 'easeInOutBack',
    });
  }, []);

  return (
    <Container className="view-about">
      <Header className="view-about__header">{t('about.header')}</Header>
      <TextContainer>
        <Paragraph className="view-about__paragraph">{t('about.p1')}</Paragraph>
        <Paragraph className="view-about__paragraph">{t('about.p2')}</Paragraph>
        <Paragraph className="view-about__paragraph">{t('about.p3')}</Paragraph>
        <Paragraph className="view-about__paragraph">{t('about.p4')}</Paragraph>
        <Paragraph className="view-about__paragraph">{t('about.p5')}</Paragraph>
      </TextContainer>
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

const TextContainer = styled.div`
  padding-top: ${props => props.theme.spacing(3)};

  @media (min-width: ${props => props.theme.breakpoints.md}) and (orientation: portrait) {
    padding-top: ${props => props.theme.spacing(5)};
  }

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    padding-top: ${props => props.theme.spacing(5)};
    max-width: ${props => props.theme.breakpoints.lg};
  }
`;
