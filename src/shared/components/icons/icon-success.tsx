import { ComponentProps } from 'react';

export const IconSuccess = (props: ComponentProps<'svg'>) => {
  return (
    <svg
      width='27'
      height='26'
      viewBox='0 0 27 26'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <rect x='0.5' width='26' height='26' rx='13' fill='#249FA3' />
      <path
        d='M7.5 13.1982L11.4097 17L19.5 9'
        stroke='white'
        strokeWidth='1.6'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
