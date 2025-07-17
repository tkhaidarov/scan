import { ITariff } from '@/widgets/tariffs/ui/types';

export const TARIFFS_DATA: ITariff[] = [
  {
    id: 'beginner',
    label: 'Beginner',
    description: 'Для небольшого исследования',
    iconUrl: '/assets/images/svg/lightbulb.svg',
    color: '#ffb64f',
    isCurrentPlan: true,
    pricing: {
      currentPrice: 799,
      originalPrice: 1200,
      currency: '₽',
      installmentPrice: 150,
      installmentPeriod: 24,
      installmentCurrency: 'мес.',
    },
    features: [
      {
        id: 1,
        text: 'Безлимитная история запросов',
      },
      {
        id: 2,
        text: 'Безопасная сделка',
      },
      {
        id: 3,
        text: 'Поддержка 24/7',
      },
    ],
    button: {
      textSecondary: 'Перейти в личный кабинет',
      textPrimary: 'Подробнее',
    },
    badge: {
      text: 'Текущий тариф',
      color: '#3ba5e0',
    },
  },
  {
    id: 'pro',
    label: 'Pro',
    description: 'Для HR и фрилансеров',
    iconUrl: '/assets/images/svg/darts.svg',
    color: ' #7ce3e1',
    isCurrentPlan: false,
    pricing: {
      currentPrice: 1299,
      originalPrice: 2600,
      currency: '₽',
      installmentPrice: 279,
      installmentPeriod: 24,
      installmentCurrency: 'мес.',
    },
    features: [
      {
        id: 1,
        text: 'Все пункты тарифа Beginner',
      },
      {
        id: 2,
        text: 'Экспорт истории',
      },
      {
        id: 3,
        text: 'Рекомендации по приоритетам',
      },
    ],
    button: {
      textSecondary: 'Перейти в личный кабинет',
      textPrimary: 'Подробнее',
    },
    badge: {
      text: 'Текущий тариф',
      color: '#3ba5e0',
    },
  },
  {
    id: 'business',
    label: 'Business',
    description: 'Для корпоративных клиентов',
    iconUrl: '/assets/images/svg/laptop.svg',
    color: '#000000',
    isCurrentPlan: false,
    pricing: {
      currentPrice: 2379,
      originalPrice: 3700,
      currency: '₽',
      installmentPrice: 0,
      installmentPeriod: 24,
      installmentCurrency: 'мес.',
    },
    features: [
      {
        id: 1,
        text: 'Все пункты тарифа Pro',
      },
      {
        id: 2,
        text: 'Безлимитное количество запросова',
      },
      {
        id: 3,
        text: 'Приоритетная поддержка',
      },
    ],
    button: {
      textSecondary: 'Перейти в личный кабинет',
      textPrimary: 'Подробнее',
    },
    badge: {
      text: 'Текущий тариф',
      color: '#3ba5e0',
    },
  },
];
