import { Select as BaseSelect } from '@base-ui/react/select';
import type { ComponentPropsWithRef } from 'react';

function SelectLabel(props: ComponentPropsWithRef<typeof BaseSelect.Label>) {
  return <BaseSelect.Label data-ciamix="label" {...props} />;
}

function SelectTrigger(props: ComponentPropsWithRef<typeof BaseSelect.Trigger>) {
  return <BaseSelect.Trigger data-ciamix="select-trigger" {...props} />;
}

function SelectValue(props: ComponentPropsWithRef<typeof BaseSelect.Value>) {
  return <BaseSelect.Value data-ciamix="select-value" {...props} />;
}

function SelectIcon(props: ComponentPropsWithRef<typeof BaseSelect.Icon>) {
  return <BaseSelect.Icon data-ciamix="icon" {...props} />;
}

function SelectPortal(props: ComponentPropsWithRef<typeof BaseSelect.Portal>) {
  return <BaseSelect.Portal {...props} />;
}

function SelectBackdrop(props: ComponentPropsWithRef<typeof BaseSelect.Backdrop>) {
  return <BaseSelect.Backdrop data-ciamix="modal-backdrop" {...props} />;
}

function SelectPositioner(props: ComponentPropsWithRef<typeof BaseSelect.Positioner>) {
  return <BaseSelect.Positioner data-ciamix="positioner" {...props} />;
}

function SelectPopup(props: ComponentPropsWithRef<typeof BaseSelect.Popup>) {
  return <BaseSelect.Popup data-ciamix="menu-popup" {...props} />;
}

function SelectList(props: ComponentPropsWithRef<typeof BaseSelect.List>) {
  return <BaseSelect.List data-ciamix="option-list" {...props} />;
}

function SelectItem(props: ComponentPropsWithRef<typeof BaseSelect.Item>) {
  return <BaseSelect.Item data-ciamix="option" {...props} />;
}

function SelectItemIndicator(props: ComponentPropsWithRef<typeof BaseSelect.ItemIndicator>) {
  return <BaseSelect.ItemIndicator data-ciamix="option-indicator" {...props} />;
}

function SelectItemText(props: ComponentPropsWithRef<typeof BaseSelect.ItemText>) {
  return <BaseSelect.ItemText {...props} />;
}

function SelectArrow(props: ComponentPropsWithRef<typeof BaseSelect.Arrow>) {
  return <BaseSelect.Arrow data-ciamix="popup-arrow" {...props} />;
}

function SelectScrollDownArrow(props: ComponentPropsWithRef<typeof BaseSelect.ScrollDownArrow>) {
  return <BaseSelect.ScrollDownArrow data-ciamix="select-scroll" {...props} />;
}

function SelectScrollUpArrow(props: ComponentPropsWithRef<typeof BaseSelect.ScrollUpArrow>) {
  return <BaseSelect.ScrollUpArrow data-ciamix="select-scroll" {...props} />;
}

function SelectGroup(props: ComponentPropsWithRef<typeof BaseSelect.Group>) {
  return <BaseSelect.Group {...props} />;
}

function SelectGroupLabel(props: ComponentPropsWithRef<typeof BaseSelect.GroupLabel>) {
  return <BaseSelect.GroupLabel data-ciamix="group-label" {...props} />;
}

function SelectSeparator(props: ComponentPropsWithRef<typeof BaseSelect.Separator>) {
  return <BaseSelect.Separator data-ciamix="separator" {...props} />;
}

/**
 * Ciamix Select: wrapper around Base UI's Select.
 * Docs: https://base-ui.com/react/components/select
 */
export const Select = {
  Root: BaseSelect.Root,
  Label: SelectLabel,
  Trigger: SelectTrigger,
  Value: SelectValue,
  Icon: SelectIcon,
  Portal: SelectPortal,
  Backdrop: SelectBackdrop,
  Positioner: SelectPositioner,
  Popup: SelectPopup,
  List: SelectList,
  Item: SelectItem,
  ItemIndicator: SelectItemIndicator,
  ItemText: SelectItemText,
  Arrow: SelectArrow,
  ScrollDownArrow: SelectScrollDownArrow,
  ScrollUpArrow: SelectScrollUpArrow,
  Group: SelectGroup,
  GroupLabel: SelectGroupLabel,
  Separator: SelectSeparator,
} satisfies Record<keyof typeof BaseSelect, unknown>;
