import { ComponentProps } from 'react';

export const IconQuestion = (props: ComponentProps<'svg'>) => {
  return (
    <svg
      width='26'
      height='26'
      viewBox='0 0 26 26'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <rect width='26' height='26' rx='13' fill='#0056D3' />
      <path
        d='M13.412 14.2352V13.9278C13.412 12.9323 14.0371 12.4052 14.6622 11.9806C15.2724 11.5707 15.8826 11.0436 15.8826 10.0773C15.8826 8.73042 14.7813 7.64697 13.412 7.64697C12.0427 7.64697 10.9414 8.73042 10.9414 10.0773'
        stroke='white'
        stroke-width='1.6'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        opacity='0.4'
        d='M13.404 17.5293H13.4188'
        stroke='white'
        stroke-width='1.6'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
};
