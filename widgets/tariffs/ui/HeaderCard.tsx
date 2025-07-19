import React from 'react';
import { cn } from '@/shared/lib/utils';
import { ITariff } from '@/widgets/tariffs/lib/types';

type THeaderCardProps = Pick<ITariff, 'label' | 'description' | 'iconUrl' | 'color'>;

const HeaderCard: React.FC<THeaderCardProps> = ({ label, description, iconUrl, color }) => {
  const isBlackColor = color === '#000000';
  const textWhite = isBlackColor && 'text-white';
  return (
    <div
      className="relative flex h-[132px] w-full flex-col justify-between px-6 pt-[30px] pb-[34px]"
      style={{ backgroundColor: color }}
    >
      <h3 className={cn('text-xl lg:text-3xl', textWhite)}>{label}</h3>
      <span className={cn('text-lg', textWhite)}>{description}</span>
      <div className="absolute top-0 right-0">
        <img src={iconUrl} alt={label} className="h-16 w-14 object-contain lg:h-full lg:w-full" />
      </div>
    </div>
  );
};

export default HeaderCard;
