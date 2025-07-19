import { z } from 'zod';

const phoneRegex = /^(\+7|8)\d{10}$/;
const loginRegex = /^[a-zA-Z0-9_.-]+$/; // Пример регулярки для логина (буквы, цифры, символы)

export const validationLoginSchema = z.object({
  loginOrPhone: z
    .string()
    .nonempty({ message: 'Поле не может быть пустым' })
    .refine(
      value => {
        // Проверяем телефон
        const isValidPhone = phoneRegex.test(value);

        // Проверяем логин (минимум 3 символа и допустимые символы)
        const isValidLogin = loginRegex.test(value) && value.length >= 3;

        return isValidPhone || isValidLogin;
      },
      { message: 'Введите корректный логин (мин. 3 символа) или номер телефона' },
    ),
  password: z
    .string()
    .nonempty({ message: 'Поле не может быть пустым' })
    .min(3, { message: 'Поле обязательно' }),
});

export type TvalidationLoginSchema = z.infer<typeof validationLoginSchema>;
