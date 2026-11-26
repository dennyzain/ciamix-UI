import { Toggle as BaseToggle } from '@base-ui/react/toggle';
import type { RefAttributes } from 'react';

export function Toggle<Value extends string>(props: BaseToggle.Props<Value> & RefAttributes<HTMLButtonElement>) {
  return <BaseToggle data-ciamix="toggle" {...props} />;
}

export declare namespace Toggle {
  type Props<Value extends string = string> = BaseToggle.Props<Value>;
  type State = BaseToggle.State;
  type ChangeEventReason = BaseToggle.ChangeEventReason;
  type ChangeEventDetails = BaseToggle.ChangeEventDetails;
}
