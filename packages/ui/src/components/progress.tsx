import { Progress as BaseProgress } from '@base-ui/react/progress';
import type { ComponentPropsWithRef } from 'react';

// Add styles to the wrapped parts below once the design is decided.
// Parts passed through as-is render no element of their own (or are generic, hooks or handles).

function ProgressRoot(props: ComponentPropsWithRef<typeof BaseProgress.Root>) {
  return <BaseProgress.Root {...props} />;
}

function ProgressTrack(props: ComponentPropsWithRef<typeof BaseProgress.Track>) {
  return <BaseProgress.Track {...props} />;
}

function ProgressIndicator(props: ComponentPropsWithRef<typeof BaseProgress.Indicator>) {
  return <BaseProgress.Indicator {...props} />;
}

function ProgressValue(props: ComponentPropsWithRef<typeof BaseProgress.Value>) {
  return <BaseProgress.Value {...props} />;
}

function ProgressLabel(props: ComponentPropsWithRef<typeof BaseProgress.Label>) {
  return <BaseProgress.Label {...props} />;
}

/**
 * Ciamix Progress: unstyled wrapper around Base UI's Progress.
 * Docs: https://base-ui.com/react/components/progress
 */
export const Progress = {
  Root: ProgressRoot,
  Track: ProgressTrack,
  Indicator: ProgressIndicator,
  Value: ProgressValue,
  Label: ProgressLabel,
} satisfies Record<keyof typeof BaseProgress, unknown>;
