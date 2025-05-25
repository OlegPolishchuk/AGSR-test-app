import * as React from 'react';
import { ComponentProps, RefObject, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import {
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverTrigger,
} from '@/shared/components/ui/popover';
import { Button } from '@/shared/components/ui/button';
import { IconMoreVertical } from '@/shared/components/icons/icon-more-vertical';
import { useClickOutside } from '@siberiacancode/reactuse';

interface ButtonMoreProps {
  children?: React.ReactNode;
  className?: string;
  contentClassName?: string;
  triggerClassName?: string;
  align?: 'start' | 'center' | 'end';
  side?: 'top' | 'right' | 'bottom' | 'left';
  width?: string;
  clickOutsideExceptions?: Array<RefObject<HTMLElement | null>>;
}

const ShowMore: React.FC<ButtonMoreProps> = ({
  className,
  children,
  contentClassName,
  align = 'end',
  side = 'bottom',
  width = 'w-[65px]',
  clickOutsideExceptions = [],
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const triggerRef = useClickOutside<HTMLButtonElement>((event) => {
    const target = event.target as HTMLElement;

    const isInsideException = clickOutsideExceptions?.some(
      (exception) => exception?.current && exception.current.contains(target),
    );

    if (!isInsideException) {
      setIsOpen(false);
    }
  });

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          ref={triggerRef}
          variant='ghost'
          size='default'
          className={twMerge(
            `text-(--foreground) hover:text-(--primary) data-[state=open]:text-(--primary)`,
            className,
          )}
        >
          <IconMoreVertical className='size-6' />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className={`${width} rounded-lg bg-white p-0 shadow-md ${contentClassName} flex flex-col items-start`}
        align={align}
        side={side}
      >
        <PopoverArrow className='fill-white' />
        {children}
      </PopoverContent>
    </Popover>
  );
};

interface ShowMoreBtnProps extends ComponentProps<'button'> {
  variant?: 'primary' | 'negative';
}

const ShowMoreButton = ({ variant = 'primary', children, onClick, ...props }: ShowMoreBtnProps) => {
  const classNames: Record<'primary' | 'negative', string> = {
    primary: 'hover:text-primary',
    negative: 'hover:text-destructive',
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();

    if (onClick) {
      onClick(event);
    }
  };

  return (
    <Button
      variant='ghost'
      className={twMerge(
        'text-foreground h-[32px] w-full justify-start px-[10px] text-xs leading-none hover:no-underline',
        classNames[variant],
      )}
      type={'button'}
      onClick={handleClick}
      {...props}
    >
      {children}
    </Button>
  );
};

export { ShowMore, ShowMoreButton };
