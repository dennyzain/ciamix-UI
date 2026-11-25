import { Checkbox as BaseCheckbox } from '@base-ui/react/checkbox';
import type { ComponentPropsWithRef } from 'react';

// Add styles to the wrapped parts below once the design is decided.
// Parts passed through as-is render no element of their own (or are generic, hooks or handles).

function CheckboxRoot(props: ComponentPropsWithRef<typeof BaseCheckbox.Root>) {
  return <BaseCheckbox.Root {...props} />;
}

function CheckboxIndicator(props: ComponentPropsWithRef<typeof BaseCheckbox.Indicator>) {
  return <BaseCheckbox.Indicator {...props} />;
}

/**
 * Ciamix Checkbox: unstyled wrapper around Base UI's Checkbox.
 * Docs: https://base-ui.com/react/components/checkbox
 */
export const Checkbox = {
  Root: CheckboxRoot,
  Indicator: CheckboxIndicator,
} satisfies Record<keyof typeof BaseCheckbox, unknown>;
