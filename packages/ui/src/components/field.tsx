import { Field as BaseField } from '@base-ui/react/field';
import type { ComponentPropsWithRef } from 'react';

// Add styles to the wrapped parts below once the design is decided.
// Parts passed through as-is render no element of their own (or are generic, hooks or handles).

function FieldRoot(props: ComponentPropsWithRef<typeof BaseField.Root>) {
  return <BaseField.Root {...props} />;
}

function FieldLabel(props: ComponentPropsWithRef<typeof BaseField.Label>) {
  return <BaseField.Label {...props} />;
}

function FieldError(props: ComponentPropsWithRef<typeof BaseField.Error>) {
  return <BaseField.Error {...props} />;
}

function FieldDescription(props: ComponentPropsWithRef<typeof BaseField.Description>) {
  return <BaseField.Description {...props} />;
}

function FieldControl(props: ComponentPropsWithRef<typeof BaseField.Control>) {
  return <BaseField.Control {...props} />;
}

function FieldItem(props: ComponentPropsWithRef<typeof BaseField.Item>) {
  return <BaseField.Item {...props} />;
}

/**
 * Ciamix Field: unstyled wrapper around Base UI's Field.
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
