import { Button as BaseButton } from '@base-ui/react/button';
import type { ComponentPropsWithRef } from 'react';

export type ButtonProps = ComponentPropsWithRef<typeof BaseButton> & {
  variant?: 'control' | 'raised' | 'ghost' | 'default' | 'outline' | 'secondary' | 'destructive' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
};

export function Button({ variant = 'control', size = 'default', ...props }: ButtonProps) {
  return <BaseButton data-ciamix="control" data-variant={variant} data-size={size} {...props} />;
}
