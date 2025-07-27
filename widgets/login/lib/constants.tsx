import { AtSymbolIcon, KeyIcon } from '@heroicons/react/24/outline';
import { IAuthButtonsProps, IInputProps } from '@/widgets/login/lib/types';
import GoogleIcon from '@/shared/assets/icons/google.svg';
import FacebookIcon from '@/shared/assets/icons/facebook.svg';
import YandexIcon from '@/shared/assets/icons/yandex.svg';

export const CONSTANTS_FIELDS: IInputProps[] = [
  {
    id: '1',
    name: 'loginOrPhone',
    label: 'Логин или номер телефона',
    placeholder: 'Введите логин или номер телефона',
    type: 'text',
    icon: <AtSymbolIcon />,
  },
  {
    id: '2',
    name: 'password',
    label: 'Пароль',
    placeholder: 'Введите пароль',
    type: 'password',
    icon: <KeyIcon />,
  },
];

export const CONSTANTS_AUTH_BUTTONS: IAuthButtonsProps[] = [
  {
    id: '1',
    title: 'Google',
    icon: <GoogleIcon />,
  },
  {
    id: '2',
    title: 'Facebook',
    icon: <FacebookIcon />,
  },
  {
    id: '3',
    title: 'Yandex',
    icon: <YandexIcon />,
  },
];
