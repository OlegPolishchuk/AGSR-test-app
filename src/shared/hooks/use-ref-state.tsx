import { useState } from 'react';

export interface StateRef<Value> {
  (value: Value): void;
  current: Value;
  state?: Value;
}

function createRefState<Value>(
  initialValue: Value,
  setState: (value: Value) => void,
): StateRef<Value> {
  let temp = initialValue;

  const ref = ((value: Value) => {
    if (temp === value) return;
    temp = value;
    setState(temp);
  }) as StateRef<Value>;

  Object.defineProperty(ref, 'current', {
    get: () => temp,
    set: (value: Value) => {
      if (temp === value) return;
      temp = value;
      setState(temp);
    },
    configurable: true,
    enumerable: true,
  });

  return ref;
}

export function useRefState<Value>(initialValue?: Value): StateRef<Value> {
  const [state, setState] = useState(initialValue);
  const [ref] = useState(() => createRefState(initialValue, setState));
  ref.state = state;
  return ref;
}
