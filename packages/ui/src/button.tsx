import { Button as BaseButton } from '@base-ui/react/button';
import type { ComponentPropsWithRef } from 'react';

export type ButtonProps = ComponentPropsWithRef<typeof BaseButton>;

/**
 * Ciamix Button: unstyled wrapper around Base UI's Button.
 * Add design styles here once they are decided. Base UI sets `data-disabled` for styling.
 * Docs: https://base-ui.com/react/components/button
 */
export function Button(props: ButtonProps) {
  return <BaseButton {...props} />;
}
