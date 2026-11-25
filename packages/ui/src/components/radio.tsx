import { Radio as BaseRadio } from '@base-ui/react/radio';
import type { ComponentPropsWithRef } from 'react';

// Add styles to the wrapped parts below once the design is decided.
// Parts passed through as-is render no element of their own (or are generic, hooks or handles).

function RadioIndicator(props: ComponentPropsWithRef<typeof BaseRadio.Indicator>) {
  return <BaseRadio.Indicator {...props} />;
}

/**
 * Ciamix Radio: unstyled wrapper around Base UI's Radio.
 * Docs: https://base-ui.com/react/components/radio-group
 */
export const Radio = {
  Root: BaseRadio.Root,
  Indicator: RadioIndicator,
} satisfies Record<keyof typeof BaseRadio, unknown>;
