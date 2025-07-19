export interface IInputProps {
  id?: string;
  control?: any;
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
  icon?: React.ReactNode;
}

export interface IButtonProps {
  type?: 'button' | 'reset' | 'submit' | undefined;
  variant?:
    | 'default'
    | 'link'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | null
    | undefined;
  className?: string;
  icon?: React.ReactNode;
  title: string;
  form?: string;
  isValid?: boolean;
}
