import React from 'react';
import { cn } from '@/shared/lib/utils';
import { Button } from '@/shared/ui/button';
import { ITariff } from '@/widgets/tariffs/lib/types';

type TButtonCard = Pick<ITariff, 'isCurrentPlan' | 'button'>;
const ButtonCard: React.FC<TButtonCard> = ({ isCurrentPlan, button }) => {
  const { textPrimary, textSecondary, bgSecondary } = button;
  const btnBackgroundColor = isCurrentPlan ? bgSecondary : '';
  const btnTextColor = isCurrentPlan && 'text-black';
  return (
    <Button
      className={cn('mb-3 h-[60px] w-full', btnTextColor)}
      style={{ backgroundColor: btnBackgroundColor }}
    >
      {isCurrentPlan ? textSecondary : textPrimary}
    </Button>
  );
};

export default ButtonCard;
