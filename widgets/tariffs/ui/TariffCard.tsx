import React from 'react';
import { ITariff } from '@/widgets/tariffs/lib/types';
import Features from '@/widgets/tariffs/ui/Features';
import Pricing from '@/widgets/tariffs/ui/Pricing';
import HeaderCard from '@/widgets/tariffs/ui/HeaderCard';
import BadgeCurrentTariff from '@/widgets/tariffs/ui/BadgeCurrentTariff';
import ButtonCard from '@/widgets/tariffs/ui/ButtonCard';

const TariffCard = ({ tariff }: { tariff: ITariff }) => {
  const { label, description, iconUrl, color, isCurrentPlan, pricing, features, button, badge } =
    tariff;

  return (
    <div
      style={{ borderColor: isCurrentPlan ? color : '' }}
      className="shadow-card flex h-[512px] w-[335px] flex-col overflow-hidden rounded-lg border-2 lg:h-[540px] lg:w-[415px]"
    >
      <HeaderCard label={label} description={description} iconUrl={iconUrl} color={color} />
      <div className="flex h-full flex-1 flex-col py-3">
        <BadgeCurrentTariff badge={badge} isCurrentPlan={isCurrentPlan} />
        <div className="flex flex-1 flex-col justify-between px-6">
          <Pricing pricing={pricing} />
          <div>
            <h4 className="mb-1.5 font-medium">В тариф входит:</h4>
            <Features features={features} />
          </div>
          <ButtonCard isCurrentPlan={isCurrentPlan} button={button} />
        </div>
      </div>
    </div>
  );
};

export default TariffCard;
