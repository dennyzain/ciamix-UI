import { CheckboxGroup as BaseCheckboxGroup } from '@base-ui/react/checkbox-group';
import type { ComponentPropsWithRef } from 'react';

export type CheckboxGroupProps = ComponentPropsWithRef<typeof BaseCheckboxGroup>;

/**
 * Ciamix CheckboxGroup: unstyled wrapper around Base UI's CheckboxGroup.
 * Add styles here once the design is decided.
 * Docs: https://base-ui.com/react/components/checkbox-group
 */
export function CheckboxGroup(props: CheckboxGroupProps) {
  return <BaseCheckboxGroup {...props} />;
}
