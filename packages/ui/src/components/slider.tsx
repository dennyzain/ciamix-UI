import { Slider as BaseSlider } from '@base-ui/react/slider';
import type { ComponentPropsWithRef } from 'react';

// Add styles to the wrapped parts below once the design is decided.
// Parts passed through as-is render no element of their own (or are generic, hooks or handles).

function SliderLabel(props: ComponentPropsWithRef<typeof BaseSlider.Label>) {
  return <BaseSlider.Label {...props} />;
}

function SliderValue(props: ComponentPropsWithRef<typeof BaseSlider.Value>) {
  return <BaseSlider.Value {...props} />;
}

function SliderControl(props: ComponentPropsWithRef<typeof BaseSlider.Control>) {
  return <BaseSlider.Control {...props} />;
}

function SliderTrack(props: ComponentPropsWithRef<typeof BaseSlider.Track>) {
  return <BaseSlider.Track {...props} />;
}

function SliderThumb(props: ComponentPropsWithRef<typeof BaseSlider.Thumb>) {
  return <BaseSlider.Thumb {...props} />;
}

function SliderIndicator(props: ComponentPropsWithRef<typeof BaseSlider.Indicator>) {
  return <BaseSlider.Indicator {...props} />;
}

/**
 * Ciamix Slider: unstyled wrapper around Base UI's Slider.
 * Docs: https://base-ui.com/react/components/slider
 */
export const Slider = {
  Root: BaseSlider.Root,
  Label: SliderLabel,
  Value: SliderValue,
  Control: SliderControl,
  Track: SliderTrack,
  Thumb: SliderThumb,
  Indicator: SliderIndicator,
} satisfies Record<keyof typeof BaseSlider, unknown>;
