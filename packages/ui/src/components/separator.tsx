import { Separator as BaseSeparator } from '@base-ui/react/separator';
import type { ComponentPropsWithRef } from 'react';

export type SeparatorProps = ComponentPropsWithRef<typeof BaseSeparator>;

/**
 * Ciamix Separator: wrapper around Base UI's Separator.
 * Docs: https://base-ui.com/react/components/separator
 */
export function Separator(props: SeparatorProps) {
  return <BaseSeparator data-ciamix="separator" {...props} />;
}
