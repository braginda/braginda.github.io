import React from 'react';
import img from '../assets/images/te.jpg';
import { Company } from '../components/Company/Company';
import { useTranslation } from 'react-i18next';

interface ViewTrueEngineeringProps {}

export const ViewTrueEngineering: React.FC<ViewTrueEngineeringProps> = () => {
  const { t } = useTranslation();

  return (
    <Company
      index={3}
      img={img}
      name={t('te.name')}
      description={t('te.description')}
      responsibilities={t('te.responsibilities')}
      pros={t('te.pros', { returnObjects: true })}
      cons={t('te.cons', { returnObjects: true })}
    />
  );
};
