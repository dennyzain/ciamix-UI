import { OTPField as BaseOTPField } from '@base-ui/react/otp-field';
import type { ComponentPropsWithRef } from 'react';

// Add styles to the wrapped parts below once the design is decided.
// Parts passed through as-is render no element of their own (or are generic, hooks or handles).

function OTPFieldRoot(props: ComponentPropsWithRef<typeof BaseOTPField.Root>) {
  return <BaseOTPField.Root {...props} />;
}

function OTPFieldInput(props: ComponentPropsWithRef<typeof BaseOTPField.Input>) {
  return <BaseOTPField.Input {...props} />;
}

function OTPFieldSeparator(props: ComponentPropsWithRef<typeof BaseOTPField.Separator>) {
  return <BaseOTPField.Separator {...props} />;
}

/**
 * Ciamix OTPField: unstyled wrapper around Base UI's OTPField.
 * Docs: https://base-ui.com/react/components/otp-field
 */
export const OTPField = {
  Root: OTPFieldRoot,
  Input: OTPFieldInput,
  Separator: OTPFieldSeparator,
} satisfies Record<keyof typeof BaseOTPField, unknown>;
