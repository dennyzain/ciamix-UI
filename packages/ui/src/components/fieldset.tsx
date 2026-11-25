import { Fieldset as BaseFieldset } from '@base-ui/react/fieldset';
import type { ComponentPropsWithRef } from 'react';

// Add styles to the wrapped parts below once the design is decided.
// Parts passed through as-is render no element of their own (or are generic, hooks or handles).

function FieldsetRoot(props: ComponentPropsWithRef<typeof BaseFieldset.Root>) {
  return <BaseFieldset.Root {...props} />;
}

function FieldsetLegend(props: ComponentPropsWithRef<typeof BaseFieldset.Legend>) {
  return <BaseFieldset.Legend {...props} />;
}

/**
 * Ciamix Fieldset: unstyled wrapper around Base UI's Fieldset.
 * Docs: https://base-ui.com/react/components/fieldset
 */
export const Fieldset = {
  Root: FieldsetRoot,
  Legend: FieldsetLegend,
} satisfies Record<keyof typeof BaseFieldset, unknown>;
