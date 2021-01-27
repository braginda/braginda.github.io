import React from 'react';
import { useTranslation } from 'react-i18next';
import { Company } from '../components/Company/Company';
import img from '../assets/images/cft.jpg';

interface ViewCftProps {}

export const ViewCft: React.FC<ViewCftProps> = () => {
  const { t } = useTranslation();

  return (
    <Company
      index={2}
      img={img}
      name={t('cft.name')}
      description={t('cft.description')}
      responsibilities={t('cft.responsibilities')}
      pros={t('cft.pros', { returnObjects: true })}
      cons={t('cft.cons', { returnObjects: true })}
    />
  );
};
