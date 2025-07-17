interface ITariffPricing {
  currentPrice: number;
  originalPrice: number;
  currency: string;
  installmentPrice: number;
  installmentPeriod: number;
  installmentCurrency: string;
}
interface ITariffFeature {
  id: number;
  text: string;
}
interface ITariffButton {
  textSecondary: string;
  textPrimary: string;
}

interface ITariffBadge {
  text: string;
  color: string;
}
export interface ITariff {
  id: string;
  label: string;
  description: string;
  iconUrl: string;
  color: string;
  isCurrentPlan: boolean;
  pricing: ITariffPricing;
  features: ITariffFeature[];
  button: ITariffButton;
  badge: ITariffBadge;
}
