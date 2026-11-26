import { Field as BaseField } from '@base-ui/react/field';
import type { ComponentPropsWithRef } from 'react';

function FieldRoot(props: ComponentPropsWithRef<typeof BaseField.Root>) {
  return <BaseField.Root data-ciamix="field" {...props} />;
}

function FieldLabel(props: ComponentPropsWithRef<typeof BaseField.Label>) {
  return <BaseField.Label data-ciamix="label" {...props} />;
}

function FieldError(props: ComponentPropsWithRef<typeof BaseField.Error>) {
  return <BaseField.Error data-ciamix="error" {...props} />;
}

function FieldDescription(props: ComponentPropsWithRef<typeof BaseField.Description>) {
  return <BaseField.Description data-ciamix="description" {...props} />;
}

function FieldControl(props: ComponentPropsWithRef<typeof BaseField.Control>) {
  return <BaseField.Control data-ciamix="input" {...props} />;
}

function FieldItem(props: ComponentPropsWithRef<typeof BaseField.Item>) {
  return <BaseField.Item data-ciamix="field-item" {...props} />;
}

/**
 * Ciamix Field: wrapper around Base UI's Field.
 * Docs: https://base-ui.com/react/components/field
 */
export const Field = {
  Root: FieldRoot,
  Label: FieldLabel,
  Error: FieldError,
  Description: FieldDescription,
  Control: FieldControl,
  Validity: BaseField.Validity,
  Item: FieldItem,
} satisfies Record<keyof typeof BaseField, unknown>;
