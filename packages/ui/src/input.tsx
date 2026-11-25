import { Input as BaseInput } from '@base-ui/react/input';
import type { ComponentPropsWithRef } from 'react';

export type InputProps = ComponentPropsWithRef<typeof BaseInput>;

/**
 * Ciamix Input: unstyled wrapper around Base UI's Input.
 * Add design styles here once they are decided. Inside a Field, Base UI sets
 * `data-focused`, `data-invalid`, `data-filled`, `data-disabled` and related attributes.
 * Docs: https://base-ui.com/react/components/input
 */
export function Input(props: InputProps) {
  return <BaseInput {...props} />;
}
