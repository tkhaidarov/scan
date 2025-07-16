import React from 'react';
import LayoutH1 from '@/shared/layout/LayoutH1';
import LayoutSection from '@/shared/layout/LayoutSection';
import TariffCard from '@/widgets/tariffs/ui/TariffCard';
import { TARIFFS_DATA } from '@/widgets/tariffs/ui/constants';

const Tariffs = () => {
  return (
    <LayoutSection>
      <LayoutH1>Наши тарифы</LayoutH1>
      {TARIFFS_DATA.map(tariff => (
        <TariffCard key={tariff.id} tariff={tariff} />
      ))}
    </LayoutSection>
  );
};

export default Tariffs;
