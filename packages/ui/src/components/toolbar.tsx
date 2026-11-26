import { Toolbar as BaseToolbar } from '@base-ui/react/toolbar';
import type { ComponentPropsWithRef } from 'react';

function ToolbarSeparator(props: ComponentPropsWithRef<typeof BaseToolbar.Separator>) {
  return <BaseToolbar.Separator data-ciamix="separator" {...props} />;
}

function ToolbarRoot(props: ComponentPropsWithRef<typeof BaseToolbar.Root>) {
  return <BaseToolbar.Root data-ciamix="toolbar" {...props} />;
}

function ToolbarGroup(props: ComponentPropsWithRef<typeof BaseToolbar.Group>) {
  return <BaseToolbar.Group data-ciamix="toolbar-group" {...props} />;
}

function ToolbarButton(props: ComponentPropsWithRef<typeof BaseToolbar.Button>) {
  return <BaseToolbar.Button data-ciamix="control" {...props} />;
}

function ToolbarLink(props: ComponentPropsWithRef<typeof BaseToolbar.Link>) {
  return <BaseToolbar.Link data-ciamix="nav-link" {...props} />;
}

function ToolbarInput(props: ComponentPropsWithRef<typeof BaseToolbar.Input>) {
  return <BaseToolbar.Input data-ciamix="input" {...props} />;
}

/**
 * Ciamix Toolbar: wrapper around Base UI's Toolbar.
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
