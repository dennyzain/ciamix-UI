import { Switch as BaseSwitch } from '@base-ui/react/switch';
import type { ComponentPropsWithRef } from 'react';

// Add styles to the wrapped parts below once the design is decided.
// Parts passed through as-is render no element of their own (or are generic, hooks or handles).

function SwitchRoot(props: ComponentPropsWithRef<typeof BaseSwitch.Root>) {
  return <BaseSwitch.Root {...props} />;
}

function SwitchThumb(props: ComponentPropsWithRef<typeof BaseSwitch.Thumb>) {
  return <BaseSwitch.Thumb {...props} />;
}

/**
 * Ciamix Switch: unstyled wrapper around Base UI's Switch.
 * Docs: https://base-ui.com/react/components/switch
 */
export const Switch = {
  Root: SwitchRoot,
  Thumb: SwitchThumb,
} satisfies Record<keyof typeof BaseSwitch, unknown>;
