import { Meter as BaseMeter } from '@base-ui/react/meter';
import type { ComponentPropsWithRef } from 'react';

function MeterRoot(props: ComponentPropsWithRef<typeof BaseMeter.Root>) {
  return <BaseMeter.Root data-ciamix="measure" {...props} />;
}

function MeterTrack(props: ComponentPropsWithRef<typeof BaseMeter.Track>) {
  return <BaseMeter.Track data-ciamix="measure-track" {...props} />;
}

function MeterIndicator(props: ComponentPropsWithRef<typeof BaseMeter.Indicator>) {
  return <BaseMeter.Indicator data-ciamix="measure-fill" {...props} />;
}

function MeterValue(props: ComponentPropsWithRef<typeof BaseMeter.Value>) {
  return <BaseMeter.Value data-ciamix="measure-value" {...props} />;
}

function MeterLabel(props: ComponentPropsWithRef<typeof BaseMeter.Label>) {
  return <BaseMeter.Label data-ciamix="label" {...props} />;
}

/**
 * Ciamix Meter: wrapper around Base UI's Meter.
 * Docs: https://base-ui.com/react/components/meter
 */
export const Meter = {
  Root: MeterRoot,
  Track: MeterTrack,
  Indicator: MeterIndicator,
  Value: MeterValue,
  Label: MeterLabel,
} satisfies Record<keyof typeof BaseMeter, unknown>;
