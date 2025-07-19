import React from 'react';
import { Badge } from '@/shared/ui/badge';
import { ITariff } from '@/widgets/tariffs/lib/types';

type TBagdeProps = Pick<ITariff, 'isCurrentPlan' | 'badge'>;
const BadgeCurrentTariff: React.FC<TBagdeProps> = ({ isCurrentPlan, badge }) => {
  return (
    <div className="flex h-[25px] w-full justify-end px-2.5">
      {isCurrentPlan && (
        <Badge style={{ backgroundColor: badge.color }} className="hidden h-6 w-[134px] lg:block">
          {badge.text}
        </Badge>
      )}
    </div>
  );
};

export default BadgeCurrentTariff;
