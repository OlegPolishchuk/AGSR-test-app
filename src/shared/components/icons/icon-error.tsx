import { ComponentProps } from 'react';

export const IconError = (props: ComponentProps<'svg'>) => {
  return (
    <svg
      width='26'
      height='26'
      viewBox='0 0 26 26'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <rect width='26' height='26' rx='13' fill='#FF4069' />
      <g clipPath='url(#clip0_2479_21710)'>
        <path
          opacity='0.4'
          d='M8.99902 17.1523L17.1504 9.00098'
          stroke='white'
          strokeWidth='1.6'
          strokeLinecap='round'
        />
        <path
          d='M16.7725 17.228L8.62109 9.07666'
          stroke='white'
          strokeWidth='1.6'
          strokeLinecap='round'
        />
      </g>
      <defs>
        <clipPath id='clip0_2479_21710'>
          <rect width='14' height='14' fill='white' transform='translate(6 6)' />
        </clipPath>
      </defs>
    </svg>
  );
};
