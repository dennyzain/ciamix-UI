import { NumberField as BaseNumberField } from '@base-ui/react/number-field';
import type { ComponentPropsWithRef } from 'react';

function NumberFieldRoot(props: ComponentPropsWithRef<typeof BaseNumberField.Root>) {
  return <BaseNumberField.Root data-ciamix="field" {...props} />;
}

function NumberFieldGroup(props: ComponentPropsWithRef<typeof BaseNumberField.Group>) {
  return <BaseNumberField.Group data-ciamix="number-group" {...props} />;
}

function NumberFieldIncrement(props: ComponentPropsWithRef<typeof BaseNumberField.Increment>) {
  return <BaseNumberField.Increment data-ciamix="control" {...props} />;
}

function NumberFieldDecrement(props: ComponentPropsWithRef<typeof BaseNumberField.Decrement>) {
  return <BaseNumberField.Decrement data-ciamix="control" {...props} />;
}

function NumberFieldInput(props: ComponentPropsWithRef<typeof BaseNumberField.Input>) {
  return <BaseNumberField.Input data-ciamix="input" {...props} />;
}

function NumberFieldScrubArea(props: ComponentPropsWithRef<typeof BaseNumberField.ScrubArea>) {
  return <BaseNumberField.ScrubArea data-ciamix="scrub-area" {...props} />;
}

function NumberFieldScrubAreaCursor(props: ComponentPropsWithRef<typeof BaseNumberField.ScrubAreaCursor>) {
  return <BaseNumberField.ScrubAreaCursor {...props} />;
}

/**
 * Ciamix NumberField: wrapper around Base UI's NumberField.
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
