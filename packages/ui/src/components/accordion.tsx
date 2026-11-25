import { Accordion as BaseAccordion } from '@base-ui/react/accordion';
import type { ComponentPropsWithRef } from 'react';

// Add styles to the wrapped parts below once the design is decided.
// Parts passed through as-is render no element of their own (or are generic, hooks or handles).

function AccordionItem(props: ComponentPropsWithRef<typeof BaseAccordion.Item>) {
  return <BaseAccordion.Item {...props} />;
}

function AccordionHeader(props: ComponentPropsWithRef<typeof BaseAccordion.Header>) {
  return <BaseAccordion.Header {...props} />;
}

function AccordionTrigger(props: ComponentPropsWithRef<typeof BaseAccordion.Trigger>) {
  return <BaseAccordion.Trigger {...props} />;
}

function AccordionPanel(props: ComponentPropsWithRef<typeof BaseAccordion.Panel>) {
  return <BaseAccordion.Panel {...props} />;
}

/**
 * Ciamix Accordion: unstyled wrapper around Base UI's Accordion.
 * Docs: https://base-ui.com/react/components/accordion
 */
export const Accordion = {
  Root: BaseAccordion.Root,
  Item: AccordionItem,
  Header: AccordionHeader,
  Trigger: AccordionTrigger,
  Panel: AccordionPanel,
} satisfies Record<keyof typeof BaseAccordion, unknown>;
