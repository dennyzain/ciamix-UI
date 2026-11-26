import { Accordion as BaseAccordion } from '@base-ui/react/accordion';
import type { ComponentPropsWithRef } from 'react';

function AccordionItem(props: ComponentPropsWithRef<typeof BaseAccordion.Item>) {
  return <BaseAccordion.Item data-ciamix="accordion-item" {...props} />;
}

function AccordionHeader(props: ComponentPropsWithRef<typeof BaseAccordion.Header>) {
  return <BaseAccordion.Header data-ciamix="accordion-header" {...props} />;
}

function AccordionTrigger(props: ComponentPropsWithRef<typeof BaseAccordion.Trigger>) {
  return <BaseAccordion.Trigger data-ciamix="disclosure-trigger" {...props} />;
}

function AccordionPanel(props: ComponentPropsWithRef<typeof BaseAccordion.Panel>) {
  return <BaseAccordion.Panel data-ciamix="disclosure-panel" {...props} />;
}

function AccordionRoot<Value>(props: BaseAccordion.Root.Props<Value>) {
  return <BaseAccordion.Root data-ciamix="accordion" {...props} />;
}

/**
 * Ciamix Accordion: wrapper around Base UI's Accordion.
 * Docs: https://base-ui.com/react/components/accordion
 */
export const Accordion = {
  Root: AccordionRoot,
  Item: AccordionItem,
  Header: AccordionHeader,
  Trigger: AccordionTrigger,
  Panel: AccordionPanel,
} satisfies Record<keyof typeof BaseAccordion, unknown>;
