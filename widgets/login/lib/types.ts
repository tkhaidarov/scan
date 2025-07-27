export interface IInputProps {
  id?: string;
  control?: any;
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
  icon?: React.ReactNode;
}

type TButtonType = 'button' | 'reset' | 'submit' | undefined;

type TButtonVariant =
  | 'default'
  | 'link'
  | 'destructive'
  | 'outline'
  | 'secondary'
  | 'ghost'
  | null
  | undefined;

export interface IButtonProps {
  type?: TButtonType;
  variant?: TButtonVariant;
  className?: string;
  icon?: React.ReactNode;
  title: string;
  form?: string;
  isValid?: boolean;
}

export interface IAuthButtonsProps {
  id: string;
  title: string;
  icon: React.ReactNode;
}
