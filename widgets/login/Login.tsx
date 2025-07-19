'use client';
import React, { useMemo } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { type TvalidationLoginSchema, validationLoginSchema } from '@/widgets/login/lib/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { CONSTANTS_FIELDS } from '@/widgets/login/lib/constants';
import { InputField } from '@/shared/ui/InputField';
import { Form } from '@/shared/ui/form';
import ButtonComponent from '@/shared/ui/ButtonComponent';
import Link from 'next/link';

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
      <div className="m-0 flex flex-col gap-4 pb-2">
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
      <div className="flex w-full flex-col">
        <div>
          <form id="login-form" onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {FormField}
          </form>
        </div>
        <ButtonComponent
          form="login-form"
          type="submit"
          className="h-[60px] w-full cursor-pointer"
          title="Login"
          isValid={isValid}
        />
        <Link href="#">Восстановить пароль</Link>
        <div>
          <span>Войти через:</span>
          <div></div>
        </div>
      </div>
    </Form>
  );
};

export default Login;
