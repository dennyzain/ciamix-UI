import { OTPField as BaseOTPField } from '@base-ui/react/otp-field';
import type { ComponentPropsWithRef } from 'react';

function OTPFieldRoot(props: ComponentPropsWithRef<typeof BaseOTPField.Root>) {
  return <BaseOTPField.Root data-ciamix="otp" {...props} />;
}

function OTPFieldInput(props: ComponentPropsWithRef<typeof BaseOTPField.Input>) {
  return <BaseOTPField.Input data-ciamix="otp-input" {...props} />;
}

function OTPFieldSeparator(props: ComponentPropsWithRef<typeof BaseOTPField.Separator>) {
  return <BaseOTPField.Separator data-ciamix="otp-separator" {...props} />;
}

/**
 * Ciamix OTPField: wrapper around Base UI's OTPField.
 * Docs: https://base-ui.com/react/components/otp-field
 */
export const OTPField = {
  Root: OTPFieldRoot,
  Input: OTPFieldInput,
  Separator: OTPFieldSeparator,
} satisfies Record<keyof typeof BaseOTPField, unknown>;
