import { Meter as BaseMeter } from '@base-ui/react/meter';
import type { ComponentPropsWithRef } from 'react';

// Add styles to the wrapped parts below once the design is decided.
// Parts passed through as-is render no element of their own (or are generic, hooks or handles).

function MeterRoot(props: ComponentPropsWithRef<typeof BaseMeter.Root>) {
  return <BaseMeter.Root {...props} />;
}

function MeterTrack(props: ComponentPropsWithRef<typeof BaseMeter.Track>) {
  return <BaseMeter.Track {...props} />;
}

function MeterIndicator(props: ComponentPropsWithRef<typeof BaseMeter.Indicator>) {
  return <BaseMeter.Indicator {...props} />;
}

function MeterValue(props: ComponentPropsWithRef<typeof BaseMeter.Value>) {
  return <BaseMeter.Value {...props} />;
}

function MeterLabel(props: ComponentPropsWithRef<typeof BaseMeter.Label>) {
  return <BaseMeter.Label {...props} />;
}

/**
 * Ciamix Meter: unstyled wrapper around Base UI's Meter.
 * Docs: https://base-ui.com/react/components/meter
 */
export const Meter = {
  Root: MeterRoot,
  Track: MeterTrack,
  Indicator: MeterIndicator,
  Value: MeterValue,
  Label: MeterLabel,
} satisfies Record<keyof typeof BaseMeter, unknown>;
