'use client';

import React, { useState } from 'react';
import { Typography } from '@/shared/components/ui/typography';
import { Task, TaskStatus } from '@/store/tasks-store';
import { Button } from '@/shared/components/ui/button';
import { Edit2, PencilOff, Trash2 } from 'lucide-react';
import { Input } from '@/shared/components/ui/input';
import { useTasksListStore } from '@/providers/tasks-list-provider';
import { Checkbox } from '@/shared/components/ui/checkbox';
import { TaskModal } from '@/app/(main)/tasks-list/[id]/components/task-modal';

interface Props {
  listId: string;
  task: Task;
  index: number;
}

export const TaskCard = ({ task, index, listId }: Props) => {
  const [editMode, setEditMode] = useState(false);
  const [taskValue, setTaskValue] = useState(task.title);

  console.log('task =>', task);

  const editTask = useTasksListStore((state) => state.editTask);
  const removeTask = useTasksListStore((state) => state.removeTask);

  const handleSetEditMode = () => {
    setTaskValue(task.title);
    setEditMode(true);
  };

  const handleEditTaskName = () => {
    setEditMode(false);

    editTask({ listId, ...task, title: taskValue });
  };

  const handleRemoveTask = () => {
    removeTask(listId, task.id);
  };

  const handleChangeTaskStatus = (checked: boolean) => {
    const newStatus = checked ? TaskStatus.COMPLETED : TaskStatus.IDLE;

    editTask({ listId, ...task, status: newStatus });
  };

  return (
    <div key={task.id} className={'flex justify-between gap-2 border-b py-6'}>
      <div className={'flex gap-2 items-center'}>
        <Typography variant={'headline-3-semibold'} className={'mb-[4px]'}>
          {index + 1})
        </Typography>

        <div className={'flex gap-4 items-center'}>
          <Checkbox
            checked={task.status === TaskStatus.COMPLETED}
            onCheckedChange={handleChangeTaskStatus}
            className={'mt-[2px]'}
            disabled={editMode}
          />

          {editMode ? (
            <Input
              className={'w-full'}
              value={taskValue}
              onChange={(e) => setTaskValue(e.currentTarget.value)}
            />
          ) : (
            <TaskModal task={task} listId={listId}>
              <Button variant={'link'}>
                <Typography
                  variant={'headline-3-semibold'}
                  className={task.status === 'COMPLETED' ? 'line-through' : ''}
                >
                  {task.title}
                </Typography>
              </Button>
            </TaskModal>
          )}
        </div>
      </div>

      <div className={'ml-auto flex items-center'}>
        {!editMode && (
          <Button variant={'ghost'} onClick={handleSetEditMode}>
            <Edit2 className={'text-orange-700'} />
          </Button>
        )}

        {editMode && (
          <Button variant={'ghost'} onClick={handleEditTaskName}>
            <PencilOff className={'text-orange-700'} />
          </Button>
        )}

        <Button variant={'ghost'} onClick={handleRemoveTask}>
          <Trash2 className={'text-destructive'} />
        </Button>
      </div>
    </div>
  );
};
