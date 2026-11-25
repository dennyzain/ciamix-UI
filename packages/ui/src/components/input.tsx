import { Input as BaseInput } from '@base-ui/react/input';
import type { ComponentPropsWithRef } from 'react';

export type InputProps = ComponentPropsWithRef<typeof BaseInput>;

/**
 * Ciamix Input: unstyled wrapper around Base UI's Input.
 * Add styles here once the design is decided.
 * Docs: https://base-ui.com/react/components/input
 */
export function Input(props: InputProps) {
  return <BaseInput {...props} />;
}
