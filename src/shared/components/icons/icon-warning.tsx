import { ComponentProps } from 'react';

export const IconWarning = (props: ComponentProps<'svg'>) => {
  return (
    <svg
      width='26'
      height='26'
      viewBox='0 0 26 26'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <rect width='26' height='26' rx='13' fill='#7D33C1' />
      <path
        d='M13 8V13.984'
        stroke='white'
        strokeWidth='1.6'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        opacity='0.4'
        d='M13 17.8032H13.0107'
        stroke='white'
        strokeWidth='1.6'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
