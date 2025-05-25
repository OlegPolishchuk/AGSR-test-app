'use client';

import { useTheme } from 'next-themes';
import { Toaster as Sonner, ToasterProps } from 'sonner';
import { IconSuccess } from '@/shared/components/icons/icon-success';
import { IconQuestion } from '@/shared/components/icons/icon-question';
import { IconWarning } from '@/shared/components/icons/icon-warning';
import { IconError } from '@/shared/components/icons/icon-error';

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = 'system' } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps['theme']}
      className='toaster group'
      toastOptions={{
        classNames: {
          toast:
            'group  toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg !pl-0 !flex !items-stretch !h-auto !py-0',
          title: 'text-(--foreground) text-base mb-[4px] font-semibold ',
          description: 'group-[.toast]:text-(--foreground) font-medium ',
          actionButton:
            '!bg-transparent !text-(--foreground) font-semibold absolute bottom-1 left-[75px] mt-[10px]',
          closeButton:
            'absolute !top-[28px] !border-none !left-[330px] [&>svg]:w-[24px] [&>svg]:h-[24px]',
          icon: '!relative !h-auto  !w-[56px]',
          content: 'group py-[20px] pl-[10px] ',
        },
      }}
      icons={{
        success: (
          <div className='absolute inset-y-0 left-0 flex !h-full w-[56px] items-center justify-center rounded-l-md bg-[#CDF3F1]'>
            <IconSuccess className='h-[26px] w-[26px]' />
          </div>
        ),
        info: (
          <div className='bg-(--border-focus) absolute inset-y-0 left-0 flex !h-full w-[56px] items-center justify-center rounded-l-md'>
            <IconQuestion className='h-[26px] w-[26px]' />
          </div>
        ),
        warning: (
          <div className='absolute inset-y-0 left-0 flex !h-full w-[56px] items-center justify-center rounded-l-md bg-[#E1CFF2]'>
            <IconWarning className='h-[26px] w-[26px]' />
          </div>
        ),
        error: (
          <div className='bg-(--secondary-negative-border) absolute inset-y-0 left-0 flex !h-full w-[56px] items-center justify-center rounded-l-md'>
            <IconError className='h-[26px] w-[26px]' />
          </div>
        ),
      }}
      {...props}
    />
  );
};

export { Toaster };
