import React from 'react';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/shared/ui/form';
import { Input } from '@/shared/ui/input';
import { IInputProps } from '@/widgets/login/lib/types';
import { cn } from '@/shared/lib/utils';

export const InputField: React.FC<IInputProps> = ({
  id,
  control,
  placeholder,
  name,
  label,
  type = 'text',
  icon,
}) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <FormItem className="gap-0">
          <FormLabel
            className="text-muted-foreground mb-[15px] text-[16px] leading-none font-normal"
            htmlFor={id}
          >
            {label}
          </FormLabel>
          <FormControl>
            <div className="relative h-11">
              <Input
                id={id}
                {...field}
                type={type}
                placeholder={placeholder}
                className={cn(
                  'h-full pr-8',
                  fieldState.error && [
                    'border-destructive focus-visible:ring-destructive/50' + ' text-destructive',
                  ],
                )}
                autoComplete={id}
                onKeyDown={e => {
                  if (e.key === 'Enter') e.currentTarget.blur();
                }}
              />
              <div
                className={cn(
                  'input-icon',
                  fieldState.error ? 'text-destructive' : 'text-muted-foreground',
                )}
              >
                {icon}
              </div>
            </div>
          </FormControl>
          <div className="min-h-[1.25rem]">
            <FormMessage />
          </div>
        </FormItem>
      )}
    />
  );
};
