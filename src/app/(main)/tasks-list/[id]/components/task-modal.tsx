'use client';

import React, { useEffect, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/shared/components/ui/dialog';
import { Typography } from '@/shared/components/ui/typography';
import { Task } from '@/store/tasks-store';
import { getRemainingTime } from '@/shared/lib/utils';
import { Button } from '@/shared/components/ui/button';
import { useTasksListStore } from '@/providers/tasks-list-provider';
import { EditTaskForm } from '@/app/(main)/tasks-list/[id]/components/edit-task-form';

interface Props {
  children: React.ReactNode;
  task: Task;
  listId: string;
}

export const TaskModal = ({ children, task, listId }: Props) => {
  const removeTask = useTasksListStore((state) => state.removeTask);

  const [isOpen, setIsOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const [timeLeft, setTimeLeft] = useState(
    getRemainingTime({ estimate: task.estimate, startTime: task.ctime }),
  );

  const handleRemoveTask = () => {
    removeTask(listId, task.id);
    setIsOpen(false);
  };

  useEffect(() => {
    if (!isOpen) return;

    const interval = setInterval(() => {
      setTimeLeft(getRemainingTime({ estimate: task.estimate, startTime: task.ctime }));
    }, 1000);

    return () => clearInterval(interval);
  }, [isOpen, task]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent className={'w-[90%] max-w-[550px] p-5'}>
        <DialogHeader className='gap-1'>
          <DialogTitle className={'sr-only'}>Task:</DialogTitle>
          <DialogDescription className={'flex justify-between'}>
            Task info:
            <Typography
              tag={'span'}
              variant={'headline-2-bold'}
              className={'text-red-500 mr-[30px]'}
            >
              {timeLeft}
            </Typography>
          </DialogDescription>
        </DialogHeader>

        {editMode ? (
          <EditTaskForm task={task} listId={listId} onSuccess={() => setEditMode(false)} />
        ) : (
          <>
            <div className={'flex flex-col gap-3 border-b border-t py-4'}>
              <InfoItem title={'Estimate'} value={`${task.estimate}`} unit={'min'} />
              <InfoItem title={'Status'} value={task.status} />
              <InfoItem title={'Title'} value={task.title} />
              <InfoItem title={'Description'} value={task.description} />
            </div>

            <DialogFooter className='gap-[10px] ustify-end'>
              {!editMode && (
                <Button variant={'outline'} onClick={() => setEditMode(true)}>
                  Edit
                </Button>
              )}
              {editMode && (
                <Button variant={'outline'} onClick={() => setEditMode(true)}>
                  Save
                </Button>
              )}

              <Button variant={'destructive'} onClick={handleRemoveTask} disabled={editMode}>
                Delete
              </Button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

interface InfoItemProps {
  title: string;
  value: string;
  unit?: string;
}

const InfoItem = ({ value, title, unit }: InfoItemProps) => {
  return (
    <div>
      <Typography className={'text-gray-500'}>{title}:</Typography>
      <Typography variant={'headline-3-semibold'}>
        {value} {unit ?? ''}
      </Typography>
    </div>
  );
};
