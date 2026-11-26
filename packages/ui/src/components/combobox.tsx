import { Combobox as BaseCombobox } from '@base-ui/react/combobox';
import type { ComponentPropsWithRef } from 'react';

function ComboboxLabel(props: ComponentPropsWithRef<typeof BaseCombobox.Label>) {
  return <BaseCombobox.Label data-ciamix="label" {...props} />;
}

function ComboboxInput(props: ComponentPropsWithRef<typeof BaseCombobox.Input>) {
  return <BaseCombobox.Input data-ciamix="input" {...props} />;
}

function ComboboxInputGroup(props: ComponentPropsWithRef<typeof BaseCombobox.InputGroup>) {
  return <BaseCombobox.InputGroup data-ciamix="input-group" {...props} />;
}

function ComboboxTrigger(props: ComponentPropsWithRef<typeof BaseCombobox.Trigger>) {
  return <BaseCombobox.Trigger {...props} />;
}

function ComboboxList(props: ComponentPropsWithRef<typeof BaseCombobox.List>) {
  return <BaseCombobox.List data-ciamix="option-list" {...props} />;
}

function ComboboxStatus(props: ComponentPropsWithRef<typeof BaseCombobox.Status>) {
  return <BaseCombobox.Status data-ciamix="description" {...props} />;
}

function ComboboxPortal(props: ComponentPropsWithRef<typeof BaseCombobox.Portal>) {
  return <BaseCombobox.Portal {...props} />;
}

function ComboboxBackdrop(props: ComponentPropsWithRef<typeof BaseCombobox.Backdrop>) {
  return <BaseCombobox.Backdrop data-ciamix="modal-backdrop" {...props} />;
}

function ComboboxPositioner(props: ComponentPropsWithRef<typeof BaseCombobox.Positioner>) {
  return <BaseCombobox.Positioner data-ciamix="positioner" {...props} />;
}

function ComboboxPopup(props: ComponentPropsWithRef<typeof BaseCombobox.Popup>) {
  return <BaseCombobox.Popup data-ciamix="menu-popup" {...props} />;
}

function ComboboxArrow(props: ComponentPropsWithRef<typeof BaseCombobox.Arrow>) {
  return <BaseCombobox.Arrow data-ciamix="popup-arrow" {...props} />;
}

function ComboboxIcon(props: ComponentPropsWithRef<typeof BaseCombobox.Icon>) {
  return <BaseCombobox.Icon data-ciamix="icon" {...props} />;
}

function ComboboxGroup(props: ComponentPropsWithRef<typeof BaseCombobox.Group>) {
  return <BaseCombobox.Group {...props} />;
}

function ComboboxGroupLabel(props: ComponentPropsWithRef<typeof BaseCombobox.GroupLabel>) {
  return <BaseCombobox.GroupLabel data-ciamix="group-label" {...props} />;
}

function ComboboxItem(props: ComponentPropsWithRef<typeof BaseCombobox.Item>) {
  return <BaseCombobox.Item data-ciamix="option" {...props} />;
}

function ComboboxItemIndicator(props: ComponentPropsWithRef<typeof BaseCombobox.ItemIndicator>) {
  return <BaseCombobox.ItemIndicator data-ciamix="option-indicator" {...props} />;
}

function ComboboxChips(props: ComponentPropsWithRef<typeof BaseCombobox.Chips>) {
  return <BaseCombobox.Chips data-ciamix="chips" {...props} />;
}

function ComboboxChip(props: ComponentPropsWithRef<typeof BaseCombobox.Chip>) {
  return <BaseCombobox.Chip data-ciamix="chip" {...props} />;
}

function ComboboxChipRemove(props: ComponentPropsWithRef<typeof BaseCombobox.ChipRemove>) {
  return <BaseCombobox.ChipRemove data-ciamix="inline-button" {...props} />;
}

function ComboboxRow(props: ComponentPropsWithRef<typeof BaseCombobox.Row>) {
  return <BaseCombobox.Row {...props} />;
}

function ComboboxEmpty(props: ComponentPropsWithRef<typeof BaseCombobox.Empty>) {
  return <BaseCombobox.Empty data-ciamix="empty" {...props} />;
}

function ComboboxClear(props: ComponentPropsWithRef<typeof BaseCombobox.Clear>) {
  return <BaseCombobox.Clear data-ciamix="inline-button" {...props} />;
}

function ComboboxSeparator(props: ComponentPropsWithRef<typeof BaseCombobox.Separator>) {
  return <BaseCombobox.Separator data-ciamix="separator" {...props} />;
}

/**
 * Ciamix Combobox: wrapper around Base UI's Combobox.
 * Docs: https://base-ui.com/react/components/combobox
 */
export const Combobox = {
  Root: BaseCombobox.Root,
  Label: ComboboxLabel,
  Value: BaseCombobox.Value,
  Input: ComboboxInput,
  InputGroup: ComboboxInputGroup,
  Trigger: ComboboxTrigger,
  List: ComboboxList,
  Status: ComboboxStatus,
  Portal: ComboboxPortal,
  Backdrop: ComboboxBackdrop,
  Positioner: ComboboxPositioner,
  Popup: ComboboxPopup,
  Arrow: ComboboxArrow,
  Icon: ComboboxIcon,
  Group: ComboboxGroup,
  GroupLabel: ComboboxGroupLabel,
  Item: ComboboxItem,
  ItemIndicator: ComboboxItemIndicator,
  Chips: ComboboxChips,
  Chip: ComboboxChip,
  ChipRemove: ComboboxChipRemove,
  Row: ComboboxRow,
  Collection: BaseCombobox.Collection,
  Empty: ComboboxEmpty,
  Clear: ComboboxClear,
  Separator: ComboboxSeparator,
  useFilter: BaseCombobox.useFilter,
  useFilteredItems: BaseCombobox.useFilteredItems,
  createItems: BaseCombobox.createItems,
} satisfies Record<keyof typeof BaseCombobox, unknown>;
