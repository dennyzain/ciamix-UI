import { Tabs as BaseTabs } from '@base-ui/react/tabs';
import type { ComponentPropsWithRef } from 'react';

// Add styles to the wrapped parts below once the design is decided.
// Parts passed through as-is render no element of their own (or are generic, hooks or handles).

function TabsRoot(props: ComponentPropsWithRef<typeof BaseTabs.Root>) {
  return <BaseTabs.Root {...props} />;
}

function TabsTab(props: ComponentPropsWithRef<typeof BaseTabs.Tab>) {
  return <BaseTabs.Tab {...props} />;
}

function TabsIndicator(props: ComponentPropsWithRef<typeof BaseTabs.Indicator>) {
  return <BaseTabs.Indicator {...props} />;
}

function TabsPanel(props: ComponentPropsWithRef<typeof BaseTabs.Panel>) {
  return <BaseTabs.Panel {...props} />;
}

function TabsList(props: ComponentPropsWithRef<typeof BaseTabs.List>) {
  return <BaseTabs.List {...props} />;
}

/**
 * Ciamix Tabs: unstyled wrapper around Base UI's Tabs.
 * Docs: https://base-ui.com/react/components/tabs
 */
export const Tabs = {
  Root: TabsRoot,
  Tab: TabsTab,
  Indicator: TabsIndicator,
  Panel: TabsPanel,
  List: TabsList,
} satisfies Record<keyof typeof BaseTabs, unknown>;
