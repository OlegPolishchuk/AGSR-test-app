'use client';

import { useTasksListStore } from '@/providers/tasks-list-provider';
import { useParams } from 'next/navigation';
import { Typography } from '@/shared/components/ui/typography';
import { NothingToShow } from '@/app/(main)/tasks-list/[id]/components/nothing-to-show';
import { AddNewTask } from '@/app/(main)/tasks-list/[id]/components/add-new-task';
import { TaskCard } from '@/app/(main)/tasks-list/[id]/components/task-card';

export default function TasksPage() {
  const params = useParams();

  const lists = useTasksListStore((state) => state.lists);
  const currentList = lists.filter((list) => list.id === params.id)[0];

  return (
    <div className='min-h-screen flex flex-col gap-10 container py-6'>
      {!currentList ? (
        <NothingToShow />
      ) : (
        <div className={'flex flex-col gap-4'}>
          <Typography variant={'headline-1'} className={'mb-4 border-b pb-4'}>
            {currentList.title}
          </Typography>

          <AddNewTask listId={currentList.id} />

          <div className={'mb-4'}></div>

          <div>
            {currentList.tasks.map((task, index) => (
              <TaskCard key={task.id} task={task} index={index} listId={currentList.id} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
