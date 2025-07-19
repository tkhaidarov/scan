import React from 'react';
import { ITariffFeature } from '@/widgets/tariffs/lib/types';
import { Check } from 'lucide-react';

const Features = ({ features }: { features: ITariffFeature[] }) => {
  return (
    <ul>
      {features.map(feature => (
        <li key={feature.id} className="flex items-center gap-1.5">
          <Check color="#5dd842" strokeWidth={3.5} size={16} />
          {feature.text}
        </li>
      ))}
    </ul>
  );
};

export default Features;
