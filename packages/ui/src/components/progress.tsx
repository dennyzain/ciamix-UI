import { Progress as BaseProgress } from '@base-ui/react/progress';
import type { ComponentPropsWithRef } from 'react';

function ProgressRoot(props: ComponentPropsWithRef<typeof BaseProgress.Root>) {
  return <BaseProgress.Root data-ciamix="measure" {...props} />;
}

function ProgressTrack(props: ComponentPropsWithRef<typeof BaseProgress.Track>) {
  return <BaseProgress.Track data-ciamix="measure-track" {...props} />;
}

function ProgressIndicator(props: ComponentPropsWithRef<typeof BaseProgress.Indicator>) {
  return <BaseProgress.Indicator data-ciamix="measure-fill" {...props} />;
}

function ProgressValue(props: ComponentPropsWithRef<typeof BaseProgress.Value>) {
  return <BaseProgress.Value data-ciamix="measure-value" {...props} />;
}

function ProgressLabel(props: ComponentPropsWithRef<typeof BaseProgress.Label>) {
  return <BaseProgress.Label data-ciamix="label" {...props} />;
}

/**
 * Ciamix Progress: wrapper around Base UI's Progress.
 * Docs: https://base-ui.com/react/components/progress
 */
export const Progress = {
  Root: ProgressRoot,
  Track: ProgressTrack,
  Indicator: ProgressIndicator,
  Value: ProgressValue,
  Label: ProgressLabel,
} satisfies Record<keyof typeof BaseProgress, unknown>;
