import React from 'react';
import { ITariffPricing } from '@/widgets/tariffs/lib/types';

const Pricing = ({ pricing }: { pricing: ITariffPricing }) => {
  const {
    currentPrice,
    installmentPrice,
    installmentCurrency,
    installmentPeriod,
    currency,
    originalPrice,
  } = pricing;
  return (
    <div className="flex flex-col gap-2.5">
      <p className="text-[30px]">
        {currentPrice} {currency}{' '}
        <span className="text-black/50 line-through">
          {originalPrice} {currency}
        </span>
      </p>
      <p className="w-3xs lg:w-full">
        <span>
          или {installmentPrice} {currency}/{installmentCurrency} при рассрочке на{' '}
          {installmentPeriod} мес.
        </span>
      </p>
    </div>
  );
};

export default Pricing;
