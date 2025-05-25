'use client';

import React, { RefObject, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/shared/components/ui/dialog';
import { Button } from '@/shared/components/ui/button';
import { EditListForm } from '@/app/(main)/tasks-list/components/edit-list-form';
import { TaskList } from '@/store/tasks-store';

interface Props {
  taskList: TaskList;
  children: React.ReactNode;
  ref?: RefObject<HTMLDivElement | null>;
}

export const EditListModal = ({ taskList, children, ref }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className={'p-0 w-fit'}>
        <div ref={ref} className='w-[290px] p-5'>
          <DialogHeader className='gap-1'>
            <DialogTitle className={'sr-only'}>Edit task list:</DialogTitle>
            <DialogDescription>Edit task list:</DialogDescription>
          </DialogHeader>

          <EditListForm taskList={taskList} onSuccess={() => setIsOpen(false)} />
        </div>
      </DialogContent>
    </Dialog>
  );
};
