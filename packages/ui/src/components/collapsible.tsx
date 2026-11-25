import { Collapsible as BaseCollapsible } from '@base-ui/react/collapsible';
import type { ComponentPropsWithRef } from 'react';

// Add styles to the wrapped parts below once the design is decided.
// Parts passed through as-is render no element of their own (or are generic, hooks or handles).

function CollapsibleRoot(props: ComponentPropsWithRef<typeof BaseCollapsible.Root>) {
  return <BaseCollapsible.Root {...props} />;
}

function CollapsibleTrigger(props: ComponentPropsWithRef<typeof BaseCollapsible.Trigger>) {
  return <BaseCollapsible.Trigger {...props} />;
}

function CollapsiblePanel(props: ComponentPropsWithRef<typeof BaseCollapsible.Panel>) {
  return <BaseCollapsible.Panel {...props} />;
}

/**
 * Ciamix Collapsible: unstyled wrapper around Base UI's Collapsible.
 * Docs: https://base-ui.com/react/components/collapsible
 */
export const Collapsible = {
  Root: CollapsibleRoot,
  Trigger: CollapsibleTrigger,
  Panel: CollapsiblePanel,
} satisfies Record<keyof typeof BaseCollapsible, unknown>;
