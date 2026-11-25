import { Separator as BaseSeparator } from '@base-ui/react/separator';
import type { ComponentPropsWithRef } from 'react';

export type SeparatorProps = ComponentPropsWithRef<typeof BaseSeparator>;

/**
 * Ciamix Separator: unstyled wrapper around Base UI's Separator.
 * Add styles here once the design is decided.
 * Docs: https://base-ui.com/react/components/separator
 */
export function Separator(props: SeparatorProps) {
  return <BaseSeparator {...props} />;
}
