import { Slider as BaseSlider } from '@base-ui/react/slider';
import type { ComponentPropsWithRef, RefAttributes } from 'react';

function SliderLabel(props: ComponentPropsWithRef<typeof BaseSlider.Label>) {
  return <BaseSlider.Label data-ciamix="label" {...props} />;
}

function SliderValue(props: ComponentPropsWithRef<typeof BaseSlider.Value>) {
  return <BaseSlider.Value data-ciamix="measure-value" {...props} />;
}

function SliderControl(props: ComponentPropsWithRef<typeof BaseSlider.Control>) {
  return <BaseSlider.Control data-ciamix="slider-control" {...props} />;
}

function SliderTrack(props: ComponentPropsWithRef<typeof BaseSlider.Track>) {
  return <BaseSlider.Track data-ciamix="slider-track" {...props} />;
}

function SliderThumb(props: ComponentPropsWithRef<typeof BaseSlider.Thumb>) {
  return <BaseSlider.Thumb data-ciamix="slider-thumb" {...props} />;
}

function SliderIndicator(props: ComponentPropsWithRef<typeof BaseSlider.Indicator>) {
  return <BaseSlider.Indicator data-ciamix="slider-fill" {...props} />;
}

function SliderRoot<Value extends number | readonly number[]>(props: BaseSlider.Root.Props<Value> & RefAttributes<HTMLDivElement>) {
  return <BaseSlider.Root data-ciamix="slider" {...props} />;
}

/**
 * Ciamix Slider: wrapper around Base UI's Slider.
 * Docs: https://base-ui.com/react/components/slider
 */
export const Slider = {
  Root: SliderRoot,
  Label: SliderLabel,
  Value: SliderValue,
  Control: SliderControl,
  Track: SliderTrack,
  Thumb: SliderThumb,
  Indicator: SliderIndicator,
} satisfies Record<keyof typeof BaseSlider, unknown>;
