import { ContextMenu as BaseContextMenu } from '@base-ui/react/context-menu';
import type { ComponentPropsWithRef } from 'react';

function ContextMenuTrigger(props: ComponentPropsWithRef<typeof BaseContextMenu.Trigger>) {
  return <BaseContextMenu.Trigger data-ciamix="context-target" {...props} />;
}

function ContextMenuBackdrop(props: ComponentPropsWithRef<typeof BaseContextMenu.Backdrop>) {
  return <BaseContextMenu.Backdrop data-ciamix="modal-backdrop" {...props} />;
}

function ContextMenuPortal(props: ComponentPropsWithRef<typeof BaseContextMenu.Portal>) {
  return <BaseContextMenu.Portal {...props} />;
}

function ContextMenuPositioner(props: ComponentPropsWithRef<typeof BaseContextMenu.Positioner>) {
  return <BaseContextMenu.Positioner data-ciamix="positioner" {...props} />;
}

function ContextMenuPopup(props: ComponentPropsWithRef<typeof BaseContextMenu.Popup>) {
  return <BaseContextMenu.Popup data-ciamix="menu-popup" {...props} />;
}

function ContextMenuArrow(props: ComponentPropsWithRef<typeof BaseContextMenu.Arrow>) {
  return <BaseContextMenu.Arrow data-ciamix="popup-arrow" {...props} />;
}

function ContextMenuGroup(props: ComponentPropsWithRef<typeof BaseContextMenu.Group>) {
  return <BaseContextMenu.Group {...props} />;
}

function ContextMenuGroupLabel(props: ComponentPropsWithRef<typeof BaseContextMenu.GroupLabel>) {
  return <BaseContextMenu.GroupLabel data-ciamix="group-label" {...props} />;
}

function ContextMenuItem(props: ComponentPropsWithRef<typeof BaseContextMenu.Item>) {
  return <BaseContextMenu.Item data-ciamix="option" {...props} />;
}

function ContextMenuCheckboxItem(props: ComponentPropsWithRef<typeof BaseContextMenu.CheckboxItem>) {
  return <BaseContextMenu.CheckboxItem data-ciamix="option" {...props} />;
}

function ContextMenuCheckboxItemIndicator(props: ComponentPropsWithRef<typeof BaseContextMenu.CheckboxItemIndicator>) {
  return <BaseContextMenu.CheckboxItemIndicator data-ciamix="option-indicator" {...props} />;
}

function ContextMenuLinkItem(props: ComponentPropsWithRef<typeof BaseContextMenu.LinkItem>) {
  return <BaseContextMenu.LinkItem data-ciamix="option" {...props} />;
}

function ContextMenuRadioGroup(props: ComponentPropsWithRef<typeof BaseContextMenu.RadioGroup>) {
  return <BaseContextMenu.RadioGroup {...props} />;
}

function ContextMenuRadioItem(props: ComponentPropsWithRef<typeof BaseContextMenu.RadioItem>) {
  return <BaseContextMenu.RadioItem data-ciamix="option" {...props} />;
}

function ContextMenuRadioItemIndicator(props: ComponentPropsWithRef<typeof BaseContextMenu.RadioItemIndicator>) {
  return <BaseContextMenu.RadioItemIndicator data-ciamix="option-indicator" {...props} />;
}

function ContextMenuSubmenuTrigger(props: ComponentPropsWithRef<typeof BaseContextMenu.SubmenuTrigger>) {
  return <BaseContextMenu.SubmenuTrigger data-ciamix="option" {...props} />;
}

function ContextMenuSeparator(props: ComponentPropsWithRef<typeof BaseContextMenu.Separator>) {
  return <BaseContextMenu.Separator data-ciamix="separator" {...props} />;
}

/**
 * Ciamix ContextMenu: wrapper around Base UI's ContextMenu.
 * Docs: https://base-ui.com/react/components/context-menu
 */
export const ContextMenu = {
  Root: BaseContextMenu.Root,
  Trigger: ContextMenuTrigger,
  Backdrop: ContextMenuBackdrop,
  Portal: ContextMenuPortal,
  Positioner: ContextMenuPositioner,
  Popup: ContextMenuPopup,
  Arrow: ContextMenuArrow,
  Group: ContextMenuGroup,
  GroupLabel: ContextMenuGroupLabel,
  Item: ContextMenuItem,
  CheckboxItem: ContextMenuCheckboxItem,
  CheckboxItemIndicator: ContextMenuCheckboxItemIndicator,
  LinkItem: ContextMenuLinkItem,
  RadioGroup: ContextMenuRadioGroup,
  RadioItem: ContextMenuRadioItem,
  RadioItemIndicator: ContextMenuRadioItemIndicator,
  SubmenuRoot: BaseContextMenu.SubmenuRoot,
  SubmenuTrigger: ContextMenuSubmenuTrigger,
  Separator: ContextMenuSeparator,
} satisfies Record<keyof typeof BaseContextMenu, unknown>;
