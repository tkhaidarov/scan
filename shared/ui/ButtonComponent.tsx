import React from 'react';
import { Button } from '@/shared/ui/button';
import type { IButtonProps } from '@/widgets/login/lib/types';

const ButtonComponent: React.FC<IButtonProps> = ({
  type,
  icon,
  variant = 'default',
  title,
  className,
  form,
  isValid = true,
}) => {
  return (
    <Button disabled={!isValid} form={form} type={type} variant={variant} className={className}>
      {icon}
      {title}
    </Button>
  );
};

export default ButtonComponent;
