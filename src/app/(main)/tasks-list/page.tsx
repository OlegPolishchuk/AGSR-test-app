'use client';

import { useTasksListStore } from '@/providers/tasks-list-provider';
import { Typography } from '@/shared/components/ui/typography';
import { AddListForm } from '@/app/(main)/tasks-list/components/add-list-form';

export default function TasksPage() {
  const taskLists = useTasksListStore((state) => state.lists);

  return (
    <div className='min-h-screen flex flex-col container py-6'>
      <AddListForm />

      <div>
        {taskLists.map((task) => (
          <div key={task.id} className={'flex flex-col gap-4'}>
            <Typography variant={'body-lg-bold'}>{task.title}</Typography>
          </div>
        ))}
      </div>
    </div>
  );
}
