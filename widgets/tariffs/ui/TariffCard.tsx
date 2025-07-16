import React from 'react';
import { ITariff } from '@/widgets/tariffs/ui/types';

const TariffCard = ({ tariff }: { tariff: ITariff }) => {
  const { label, description, iconUrl, color, isCurrentPlan, pricing, features, button, badge } =
    tariff;

  return (
    <div className="shadow-card h-[512px] w-[335px] overflow-hidden rounded-lg lg:h-[540px] lg:w-[415px]">
      <div
        className={`relative flex h-[132px] w-full flex-col px-6 pt-[30px]`}
        style={{ backgroundColor: color }}
      >
        <h3 className="text-xl">{label}</h3>
        <span className="text-lg">{description}</span>
        <div className="absolute top-0 right-0">
          <img src={iconUrl} alt={label} className="h-16 w-14 object-contain lg:h-full lg:w-full" />
        </div>
      </div>
      <div>
        <div>current tariff bagde</div>
        <div>price</div>
        <div>tariff features</div>
        <div>button</div>
      </div>
    </div>
  );
};

export default TariffCard;
