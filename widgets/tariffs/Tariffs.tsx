import React from 'react';
import LayoutH2 from '@/shared/layout/LayoutH2';
import LayoutSection from '@/shared/layout/LayoutSection';
import TariffCard from '@/widgets/tariffs/ui/TariffCard';
import { TARIFFS_DATA } from '@/widgets/tariffs/lib/constants';

const Tariffs = () => {
  return (
    <LayoutSection>
      <LayoutH2>Наши тарифы</LayoutH2>
      <div className="mb-11 grid grid-cols-1 justify-items-center gap-9 pt-4 md:grid-cols-2 lg:mb-[118px] lg:grid-cols-3 lg:place-items-start">
        {TARIFFS_DATA.map(tariff => (
          <TariffCard key={tariff.id} tariff={tariff} />
        ))}
      </div>
    </LayoutSection>
  );
};

export default Tariffs;
