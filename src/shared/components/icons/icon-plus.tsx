import { ComponentProps } from 'react';

export const IconPlus = (props: ComponentProps<'svg'>) => {
  return (
    <svg
      width='17'
      height='17'
      viewBox='0 0 17 17'
      fill='none'
      stroke='currentColor'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path d='M3.1875 8.38818H13.5889' strokeWidth='1.2' strokeLinecap='round' />
      <path d='M8.38672 13.5889V3.1875' strokeWidth='1.2' strokeLinecap='round' />
    </svg>
  );
};
