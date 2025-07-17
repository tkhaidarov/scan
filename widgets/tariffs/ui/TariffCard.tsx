import React from 'react';
import { ITariff } from '@/widgets/tariffs/ui/types';
import { cn } from '@/shared/lib/utils';
import { Badge } from '@/shared/ui/badge';

const TariffCard = ({ tariff }: { tariff: ITariff }) => {
  const { label, description, iconUrl, color, isCurrentPlan, pricing, features, button, badge } =
    tariff;
  const {
    currentPrice,
    installmentPrice,
    installmentCurrency,
    installmentPeriod,
    currency,
    originalPrice,
  } = pricing;
  const isBlackColor = color === '#000000';
  const textWhite = isBlackColor && 'text-white';

  return (
    <div className="shadow-card h-[512px] w-[335px] overflow-hidden rounded-lg lg:h-[540px] lg:w-[415px]">
      <div
        className={`relative flex h-[132px] w-full flex-col px-6 pt-[30px]`}
        style={{ backgroundColor: color }}
      >
        <h3 className={cn('text-xl', textWhite)}>{label}</h3>
        <span className={cn('text-lg', textWhite)}>{description}</span>
        <div className="absolute top-0 right-0">
          <img src={iconUrl} alt={label} className="h-16 w-14 object-contain lg:h-full lg:w-full" />
        </div>
      </div>
      <div>
        <div>
          <Badge style={{ backgroundColor: badge.color }} className="h-6 w-[134px]">
            {badge.text}
          </Badge>
        </div>
        <div>
          <p>
            {currentPrice} {currency}{' '}
            <span>
              {originalPrice} {currency}
            </span>
          </p>
          <p>
            <span>
              или {installmentPrice} {currency}/{installmentCurrency} при рассрочке на{' '}
              {installmentPeriod} мес.
            </span>
          </p>
        </div>
        <div>tariff features</div>
        <div>button</div>
      </div>
    </div>
  );
};

export default TariffCard;
