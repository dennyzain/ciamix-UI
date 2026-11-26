import { Collapsible as BaseCollapsible } from '@base-ui/react/collapsible';
import type { ComponentPropsWithRef } from 'react';

function CollapsibleRoot(props: ComponentPropsWithRef<typeof BaseCollapsible.Root>) {
  return <BaseCollapsible.Root data-ciamix="collapsible" {...props} />;
}

function CollapsibleTrigger(props: ComponentPropsWithRef<typeof BaseCollapsible.Trigger>) {
  return <BaseCollapsible.Trigger data-ciamix="disclosure-trigger" {...props} />;
}

function CollapsiblePanel(props: ComponentPropsWithRef<typeof BaseCollapsible.Panel>) {
  return <BaseCollapsible.Panel data-ciamix="disclosure-panel" {...props} />;
}

/**
 * Ciamix Collapsible: wrapper around Base UI's Collapsible.
 * Docs: https://base-ui.com/react/components/collapsible
 */
export const Collapsible = {
  Root: CollapsibleRoot,
  Trigger: CollapsibleTrigger,
  Panel: CollapsiblePanel,
} satisfies Record<keyof typeof BaseCollapsible, unknown>;
