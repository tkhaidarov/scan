'use client';
import Link from 'next/link';
import React, { useMemo } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Form } from '@/shared/ui/form';
import { InputField } from '@/shared/ui/InputField';
import { zodResolver } from '@hookform/resolvers/zod';
import ButtonComponent from '@/shared/ui/ButtonComponent';
import { CONSTANTS_AUTH_BUTTONS, CONSTANTS_FIELDS } from '@/widgets/login/lib/constants';
import { type TvalidationLoginSchema, validationLoginSchema } from '@/widgets/login/lib/schema';

const Login = () => {
  const defaultValues = useMemo(
    () => ({
      email: '',
      password: '',
    }),
    [],
  );
  const form = useForm<TvalidationLoginSchema>({
    resolver: zodResolver(validationLoginSchema),
    defaultValues,
    mode: 'onTouched',
  });
  const { isValid } = form.formState;
  const onSubmit: SubmitHandler<TvalidationLoginSchema> = data => console.log(data);
  const FormField = useMemo(
    () => (
      <div className="m-0 flex h-full flex-col pb-2.5">
        {CONSTANTS_FIELDS.map(field => {
          const { name, label, placeholder, type, icon } = field;
          return (
            <InputField
              key={name}
              control={form.control}
              name={name}
              label={label}
              placeholder={placeholder}
              type={type}
              icon={icon}
            />
          );
        })}
      </div>
    ),
    [form.control],
  );
  return (
    <Form {...form}>
      <div className="relative w-full flex-col pt-10">
        <form id="login-form" onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {FormField}
        </form>
        <div className="flex flex-col gap-[15px]">
          <ButtonComponent
            form="login-form"
            type="submit"
            className="h-[60px] cursor-pointer text-xl font-normal lg:text-[22px]"
            title="Войти"
            isValid={isValid}
          />
          <Link
            className="text-primary mb-[15px] self-center underline-offset-4 hover:underline"
            href="#"
          >
            Восстановить пароль
          </Link>
          <div className="flex flex-col gap-3.5">
            <span className="text-muted-foreground">Войти через:</span>
            <div className="flex gap-2.5">
              {CONSTANTS_AUTH_BUTTONS.map(item => {
                const { id, title, icon } = item;
                return (
                  <ButtonComponent
                    key={id}
                    variant="outline"
                    title={title}
                    icon={icon}
                    isValid={true}
                    className="border-primary/50 hover:bg-primary/10 max-w-[96px] rounded-[5px] lg:max-w-none"
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Form>
  );
};
export default Login;
