import { ToggleGroup as BaseToggleGroup } from '@base-ui/react/toggle-group';
import type { RefAttributes } from 'react';

export function ToggleGroup<Value extends string>(props: BaseToggleGroup.Props<Value> & RefAttributes<HTMLDivElement>) {
  return <BaseToggleGroup data-ciamix="toggle-group" {...props} />;
}

export declare namespace ToggleGroup {
  type Props<Value extends string = string> = BaseToggleGroup.Props<Value>;
  type State = BaseToggleGroup.State;
  type ChangeEventReason = BaseToggleGroup.ChangeEventReason;
  type ChangeEventDetails = BaseToggleGroup.ChangeEventDetails;
}
