import { Fieldset as BaseFieldset } from '@base-ui/react/fieldset';
import type { ComponentPropsWithRef } from 'react';

function FieldsetRoot(props: ComponentPropsWithRef<typeof BaseFieldset.Root>) {
  return <BaseFieldset.Root data-ciamix="fieldset" {...props} />;
}

function FieldsetLegend(props: ComponentPropsWithRef<typeof BaseFieldset.Legend>) {
  return <BaseFieldset.Legend data-ciamix="legend" {...props} />;
}

/**
 * Ciamix Fieldset: wrapper around Base UI's Fieldset.
 * Docs: https://base-ui.com/react/components/fieldset
 */
export const Fieldset = {
  Root: FieldsetRoot,
  Legend: FieldsetLegend,
} satisfies Record<keyof typeof BaseFieldset, unknown>;
