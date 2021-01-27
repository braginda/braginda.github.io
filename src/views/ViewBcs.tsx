import React from 'react';
import { useTranslation } from 'react-i18next';
import { Company } from '../components/Company/Company';
import img from '../assets/images/bcs.png';

interface ViewBcsProps {}

export const ViewBcs: React.FC<ViewBcsProps> = () => {
  const { t } = useTranslation();

  return (
    <Company
      index={4}
      img={img}
      name={t('bcs.name')}
      description={t('bcs.description')}
      responsibilities={t('bcs.responsibilities')}
      pros={t('bcs.pros', { returnObjects: true })}
      cons={t('bcs.cons', { returnObjects: true })}
    />
  );
};
