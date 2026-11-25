import { Toolbar as BaseToolbar } from '@base-ui/react/toolbar';
import type { ComponentPropsWithRef } from 'react';

// Add styles to the wrapped parts below once the design is decided.
// Parts passed through as-is render no element of their own (or are generic, hooks or handles).

function ToolbarSeparator(props: ComponentPropsWithRef<typeof BaseToolbar.Separator>) {
  return <BaseToolbar.Separator {...props} />;
}

function ToolbarRoot(props: ComponentPropsWithRef<typeof BaseToolbar.Root>) {
  return <BaseToolbar.Root {...props} />;
}

function ToolbarGroup(props: ComponentPropsWithRef<typeof BaseToolbar.Group>) {
  return <BaseToolbar.Group {...props} />;
}

function ToolbarButton(props: ComponentPropsWithRef<typeof BaseToolbar.Button>) {
  return <BaseToolbar.Button {...props} />;
}

function ToolbarLink(props: ComponentPropsWithRef<typeof BaseToolbar.Link>) {
  return <BaseToolbar.Link {...props} />;
}

function ToolbarInput(props: ComponentPropsWithRef<typeof BaseToolbar.Input>) {
  return <BaseToolbar.Input {...props} />;
}

/**
 * Ciamix Toolbar: unstyled wrapper around Base UI's Toolbar.
 * Docs: https://base-ui.com/react/components/toolbar
 */
export const Toolbar = {
  Separator: ToolbarSeparator,
  Root: ToolbarRoot,
  Group: ToolbarGroup,
  Button: ToolbarButton,
  Link: ToolbarLink,
  Input: ToolbarInput,
} satisfies Record<keyof typeof BaseToolbar, unknown>;
