import { Switch as BaseSwitch } from '@base-ui/react/switch';
import type { ComponentPropsWithRef } from 'react';

function SwitchRoot(props: ComponentPropsWithRef<typeof BaseSwitch.Root>) {
  return <BaseSwitch.Root data-ciamix="switch" {...props} />;
}

function SwitchThumb(props: ComponentPropsWithRef<typeof BaseSwitch.Thumb>) {
  return <BaseSwitch.Thumb data-ciamix="switch-thumb" {...props} />;
}

/**
 * Ciamix Switch: wrapper around Base UI's Switch.
 * Docs: https://base-ui.com/react/components/switch
 */
export const Switch = {
  Root: SwitchRoot,
  Thumb: SwitchThumb,
} satisfies Record<keyof typeof BaseSwitch, unknown>;
