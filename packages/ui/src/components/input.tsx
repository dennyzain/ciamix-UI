import { Input as BaseInput } from '@base-ui/react/input';
import type { ComponentPropsWithRef } from 'react';

export type InputProps = ComponentPropsWithRef<typeof BaseInput>;

/**
 * Ciamix Input: wrapper around Base UI's Input.
 * Docs: https://base-ui.com/react/components/input
 */
export function Input(props: InputProps) {
  return <BaseInput data-ciamix="input" {...props} />;
}
