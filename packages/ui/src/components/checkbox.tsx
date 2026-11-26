import { Checkbox as BaseCheckbox } from '@base-ui/react/checkbox';
import type { ComponentPropsWithRef } from 'react';

function CheckboxRoot(props: ComponentPropsWithRef<typeof BaseCheckbox.Root>) {
  return <BaseCheckbox.Root data-ciamix="checkbox" {...props} />;
}

function CheckboxIndicator(props: ComponentPropsWithRef<typeof BaseCheckbox.Indicator>) {
  return <BaseCheckbox.Indicator data-ciamix="checkbox-indicator" {...props} />;
}

/**
 * Ciamix Checkbox: wrapper around Base UI's Checkbox.
 * Docs: https://base-ui.com/react/components/checkbox
 */
export const Checkbox = {
  Root: CheckboxRoot,
  Indicator: CheckboxIndicator,
} satisfies Record<keyof typeof BaseCheckbox, unknown>;
