import { Radio as BaseRadio } from '@base-ui/react/radio';
import type { ComponentPropsWithRef } from 'react';

function RadioIndicator(props: ComponentPropsWithRef<typeof BaseRadio.Indicator>) {
  return <BaseRadio.Indicator data-ciamix="radio-indicator" {...props} />;
}

function RadioRoot<Value>(props: BaseRadio.Root.Props<Value>) {
  return <BaseRadio.Root data-ciamix="radio" {...props} />;
}

/**
 * Ciamix Radio: wrapper around Base UI's Radio.
 * Docs: https://base-ui.com/react/components/radio-group
 */
export const Radio = {
  Root: RadioRoot,
  Indicator: RadioIndicator,
} satisfies Record<keyof typeof BaseRadio, unknown>;
