import { ComponentProps } from 'react';

export const IconMoreVertical = (props: ComponentProps<'svg'>) => {
  return (
    <svg
      width='24'
      height='25'
      viewBox='0 0 24 25'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M10 19.502C10 20.602 10.9 21.502 12 21.502C13.1 21.502 14 20.602 14 19.502C14 18.402 13.1 17.502 12 17.502C10.9 17.502 10 18.402 10 19.502Z'
        //stroke='#070D31'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <path
        d='M10 5.50195C10 6.60195 10.9 7.50195 12 7.50195C13.1 7.50195 14 6.60195 14 5.50195C14 4.40195 13.1 3.50195 12 3.50195C10.9 3.50195 10 4.40195 10 5.50195Z'
        // stroke='#070D31'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <path
        opacity='0.4'
        d='M10 12.502C10 13.602 10.9 14.502 12 14.502C13.1 14.502 14 13.602 14 12.502C14 11.402 13.1 10.502 12 10.502C10.9 10.502 10 11.402 10 12.502Z'
        // stroke='#070D31'
        stroke='currentColor'
        strokeWidth='1.5'
      />
    </svg>
  );
};
