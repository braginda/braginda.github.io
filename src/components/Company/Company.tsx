import React from 'react';
import { useTranslation } from 'react-i18next';
import anime from 'animejs';
import { Paragraph } from '../Paragraph/Paragraph';
import { AboutCompany, CompanyName, Container, LogoContainer, ProsCons, Image } from './styled';

interface CompanyProps {
  img: string;
  name: string;
  description: string;
  responsibilities: string;
  pros: string[];
  cons: string[];
  index: number;
}

export const Company: React.FC<CompanyProps> = ({ index, img, name, pros, cons, description, responsibilities }) => {
  const { t } = useTranslation();

  const descriptionClassName = `company-${index}__description`;
  const logoClassName = `company-${index}__logo`;
  const responsibilitiesClassName = `company-${index}__responsibilities`;
  const prosClassName = `company-${index}__pros`;
  const consClassName = `company-${index}__cons`;

  React.useEffect(() => {
    anime({
      targets: [`.${logoClassName}`],
      delay: 750,
      duration: 750,
      opacity: [0, 1],
      translateX: ['-75px', '0'],
      easing: 'easeOutCubic',
    });
    anime({
      targets: [`.${descriptionClassName}`, `.${responsibilitiesClassName}`],
      delay: anime.stagger(500, { start: 500 }),
      duration: 750,
      translateY: ['50px', '0'],
      opacity: [0, 1],
      easing: 'easeOutCubic',
    });
    anime({
      targets: [`.${prosClassName}`],
      delay: 1500,
      duration: 750,
      opacity: [0, 1],
      translateX: ['-75px', '0'],
      easing: 'easeOutCubic',
    });
    anime({
      targets: [`.${consClassName}`],
      delay: 1500,
      duration: 750,
      opacity: [0, 1],
      translateX: ['75px', '0'],
      easing: 'easeOutCubic',
    });
  }, []);

  return (
    <Container className="company">
      <LogoContainer className={logoClassName}>
        <Image src={img} alt="" />
        <CompanyName>
          #{index} {name}
        </CompanyName>
      </LogoContainer>
      <AboutCompany>
        <Paragraph className={descriptionClassName}>{description}</Paragraph>
        <div className={responsibilitiesClassName}>
          <Paragraph>{t('company.responsibilities')}</Paragraph>
          <Paragraph>{responsibilities}</Paragraph>
        </div>
        <ProsCons>
          <div className={prosClassName}>
            <h3>{t('company.pros')}</h3>
            {pros.map((p, i) => (
              <Paragraph key={`p-${index}-${i}`} noIndent>
                {p}
              </Paragraph>
            ))}
          </div>
          <div className={consClassName}>
            <h3>{t('company.cons')}</h3>
            {cons.map((c, i) => (
              <Paragraph key={`c-${index}-${i}`} noIndent>
                {c}
              </Paragraph>
            ))}
          </div>
        </ProsCons>
      </AboutCompany>
    </Container>
  );
};
