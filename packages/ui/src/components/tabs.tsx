import { Tabs as BaseTabs } from '@base-ui/react/tabs';
import type { ComponentPropsWithRef } from 'react';

function TabsRoot(props: ComponentPropsWithRef<typeof BaseTabs.Root>) {
  return <BaseTabs.Root data-ciamix="tabs" {...props} />;
}

function TabsTab(props: ComponentPropsWithRef<typeof BaseTabs.Tab>) {
  return <BaseTabs.Tab data-ciamix="tab" {...props} />;
}

function TabsIndicator(props: ComponentPropsWithRef<typeof BaseTabs.Indicator>) {
  return <BaseTabs.Indicator data-ciamix="tab-indicator" {...props} />;
}

function TabsPanel(props: ComponentPropsWithRef<typeof BaseTabs.Panel>) {
  return <BaseTabs.Panel data-ciamix="tab-panel" {...props} />;
}

function TabsList(props: ComponentPropsWithRef<typeof BaseTabs.List>) {
  return <BaseTabs.List data-ciamix="tabs-list" {...props} />;
}

/**
 * Ciamix Tabs: wrapper around Base UI's Tabs.
 * Docs: https://base-ui.com/react/components/tabs
 */
export const Tabs = {
  Root: TabsRoot,
  Tab: TabsTab,
  Indicator: TabsIndicator,
  Panel: TabsPanel,
  List: TabsList,
} satisfies Record<keyof typeof BaseTabs, unknown>;
