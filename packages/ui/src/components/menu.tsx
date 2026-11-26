import { Menu as BaseMenu } from '@base-ui/react/menu';
import type { ComponentPropsWithRef, RefAttributes } from 'react';

function MenuArrow(props: ComponentPropsWithRef<typeof BaseMenu.Arrow>) {
  return <BaseMenu.Arrow data-ciamix="popup-arrow" {...props} />;
}

function MenuBackdrop(props: ComponentPropsWithRef<typeof BaseMenu.Backdrop>) {
  return <BaseMenu.Backdrop data-ciamix="modal-backdrop" {...props} />;
}

function MenuCheckboxItem(props: ComponentPropsWithRef<typeof BaseMenu.CheckboxItem>) {
  return <BaseMenu.CheckboxItem data-ciamix="option" {...props} />;
}

function MenuCheckboxItemIndicator(props: ComponentPropsWithRef<typeof BaseMenu.CheckboxItemIndicator>) {
  return <BaseMenu.CheckboxItemIndicator data-ciamix="option-indicator" {...props} />;
}

function MenuGroup(props: ComponentPropsWithRef<typeof BaseMenu.Group>) {
  return <BaseMenu.Group {...props} />;
}

function MenuGroupLabel(props: ComponentPropsWithRef<typeof BaseMenu.GroupLabel>) {
  return <BaseMenu.GroupLabel data-ciamix="group-label" {...props} />;
}

function MenuItem(props: ComponentPropsWithRef<typeof BaseMenu.Item>) {
  return <BaseMenu.Item data-ciamix="option" {...props} />;
}

function MenuLinkItem(props: ComponentPropsWithRef<typeof BaseMenu.LinkItem>) {
  return <BaseMenu.LinkItem data-ciamix="option" {...props} />;
}

function MenuPopup(props: ComponentPropsWithRef<typeof BaseMenu.Popup>) {
  return <BaseMenu.Popup data-ciamix="menu-popup" {...props} />;
}

function MenuPortal(props: ComponentPropsWithRef<typeof BaseMenu.Portal>) {
  return <BaseMenu.Portal {...props} />;
}

function MenuPositioner(props: ComponentPropsWithRef<typeof BaseMenu.Positioner>) {
  return <BaseMenu.Positioner data-ciamix="positioner" {...props} />;
}

function MenuRadioGroup(props: ComponentPropsWithRef<typeof BaseMenu.RadioGroup>) {
  return <BaseMenu.RadioGroup {...props} />;
}

function MenuRadioItem(props: ComponentPropsWithRef<typeof BaseMenu.RadioItem>) {
  return <BaseMenu.RadioItem data-ciamix="option" {...props} />;
}

function MenuRadioItemIndicator(props: ComponentPropsWithRef<typeof BaseMenu.RadioItemIndicator>) {
  return <BaseMenu.RadioItemIndicator data-ciamix="option-indicator" {...props} />;
}

function MenuViewport(props: ComponentPropsWithRef<typeof BaseMenu.Viewport>) {
  return <BaseMenu.Viewport {...props} />;
}

function MenuSeparator(props: ComponentPropsWithRef<typeof BaseMenu.Separator>) {
  return <BaseMenu.Separator data-ciamix="separator" {...props} />;
}

function MenuSubmenuTrigger(props: ComponentPropsWithRef<typeof BaseMenu.SubmenuTrigger>) {
  return <BaseMenu.SubmenuTrigger data-ciamix="option" {...props} />;
}

function MenuInput(props: ComponentPropsWithRef<typeof BaseMenu.Input>) {
  return <BaseMenu.Input data-ciamix="input" {...props} />;
}

function MenuList(props: ComponentPropsWithRef<typeof BaseMenu.List>) {
  return <BaseMenu.List data-ciamix="option-list" {...props} />;
}

function MenuClear(props: ComponentPropsWithRef<typeof BaseMenu.Clear>) {
  return <BaseMenu.Clear data-ciamix="inline-button" {...props} />;
}

function MenuEmpty(props: ComponentPropsWithRef<typeof BaseMenu.Empty>) {
  return <BaseMenu.Empty data-ciamix="empty" {...props} />;
}

function MenuTrigger<Payload>(props: BaseMenu.Trigger.Props<Payload> & RefAttributes<HTMLElement>) {
  return <BaseMenu.Trigger data-ciamix="control" {...props} />;
}

/**
 * Ciamix Menu: wrapper around Base UI's Menu.
 * Docs: https://base-ui.com/react/components/menu
 */
export const Menu = {
  Arrow: MenuArrow,
  Backdrop: MenuBackdrop,
  CheckboxItem: MenuCheckboxItem,
  CheckboxItemIndicator: MenuCheckboxItemIndicator,
  Group: MenuGroup,
  GroupLabel: MenuGroupLabel,
  Item: MenuItem,
  LinkItem: MenuLinkItem,
  Popup: MenuPopup,
  Portal: MenuPortal,
  Positioner: MenuPositioner,
  RadioGroup: MenuRadioGroup,
  RadioItem: MenuRadioItem,
  RadioItemIndicator: MenuRadioItemIndicator,
  Root: BaseMenu.Root,
  SubmenuRoot: BaseMenu.SubmenuRoot,
  Trigger: MenuTrigger,
  Viewport: MenuViewport,
  Separator: MenuSeparator,
  SubmenuTrigger: MenuSubmenuTrigger,
  Handle: BaseMenu.Handle,
  createHandle: BaseMenu.createHandle,
  FilterProvider: BaseMenu.FilterProvider,
  Input: MenuInput,
  List: MenuList,
  Clear: MenuClear,
  Empty: MenuEmpty,
  useFilter: BaseMenu.useFilter,
} satisfies Record<keyof typeof BaseMenu, unknown>;
