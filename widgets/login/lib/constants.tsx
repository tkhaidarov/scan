import { AtSymbolIcon, KeyIcon } from '@heroicons/react/24/outline';
import { IInputProps } from '@/widgets/login/lib/types';

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
