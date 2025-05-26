import { useEffect, useRef } from 'react';

import { isTarget } from '@/shared/lib/is-target';
import { getElement, HookTarget } from '@/shared/lib/get-element';

import { useRefState, StateRef } from './use-ref-state';

export interface UseClickOutside {
  (target: HookTarget, callback: (event: Event) => void): void;

  <Target extends Element>(callback: (event: Event) => void, target?: never): StateRef<Target>;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useClickOutside = ((...params: any[]) => {
  const target = (isTarget(params[0]) ? params[0] : undefined) as HookTarget | undefined;
  const callback = (params[1] ? params[1] : params[0]) as (event: Event) => void;

  const internalRef = useRefState<Element>();
  const internalCallbackRef = useRef(callback);
  internalCallbackRef.current = callback;

  useEffect(() => {
    if (!target && !internalRef.state) return;
    const onClick = (event: Event) => {
      const element = (target ? getElement(target) : internalRef.current) as Element;

      if (element && !element.contains(event.target as Node)) {
        internalCallbackRef.current(event);
      }
    };

    document.addEventListener('click', onClick);

    return () => {
      document.removeEventListener('click', onClick);
    };
  }, [target, internalRef.state]);

  if (target) return;
  return internalRef;
}) as UseClickOutside;
