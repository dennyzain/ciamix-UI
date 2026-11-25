import { NumberField as BaseNumberField } from '@base-ui/react/number-field';
import type { ComponentPropsWithRef } from 'react';

// Add styles to the wrapped parts below once the design is decided.
// Parts passed through as-is render no element of their own (or are generic, hooks or handles).

function NumberFieldRoot(props: ComponentPropsWithRef<typeof BaseNumberField.Root>) {
  return <BaseNumberField.Root {...props} />;
}

function NumberFieldGroup(props: ComponentPropsWithRef<typeof BaseNumberField.Group>) {
  return <BaseNumberField.Group {...props} />;
}

function NumberFieldIncrement(props: ComponentPropsWithRef<typeof BaseNumberField.Increment>) {
  return <BaseNumberField.Increment {...props} />;
}

function NumberFieldDecrement(props: ComponentPropsWithRef<typeof BaseNumberField.Decrement>) {
  return <BaseNumberField.Decrement {...props} />;
}

function NumberFieldInput(props: ComponentPropsWithRef<typeof BaseNumberField.Input>) {
  return <BaseNumberField.Input {...props} />;
}

function NumberFieldScrubArea(props: ComponentPropsWithRef<typeof BaseNumberField.ScrubArea>) {
  return <BaseNumberField.ScrubArea {...props} />;
}

function NumberFieldScrubAreaCursor(props: ComponentPropsWithRef<typeof BaseNumberField.ScrubAreaCursor>) {
  return <BaseNumberField.ScrubAreaCursor {...props} />;
}

/**
 * Ciamix NumberField: unstyled wrapper around Base UI's NumberField.
 * Docs: https://base-ui.com/react/components/number-field
 */
export const NumberField = {
  Root: NumberFieldRoot,
  Group: NumberFieldGroup,
  Increment: NumberFieldIncrement,
  Decrement: NumberFieldDecrement,
  Input: NumberFieldInput,
  ScrubArea: NumberFieldScrubArea,
  ScrubAreaCursor: NumberFieldScrubAreaCursor,
} satisfies Record<keyof typeof BaseNumberField, unknown>;
