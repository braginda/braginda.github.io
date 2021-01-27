import React from 'react';
import { useTranslation } from 'react-i18next';
import wrkImg from '../assets/images/wrk.jpg';
import { Company } from '../components/Company/Company';

interface ViewBottomRightProps {}

export const ViewWrk: React.FC<ViewBottomRightProps> = () => {
  const { t } = useTranslation();

  return (
    <Company
      index={1}
      img={wrkImg}
      name={t('wrk.name')}
      description={t('wrk.description')}
      responsibilities={t('wrk.responsibilities')}
      pros={t('wrk.pros', { returnObjects: true })}
      cons={t('wrk.cons', { returnObjects: true })}
    />
  );
};
