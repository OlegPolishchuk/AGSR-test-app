'use client';

import { useTasksListStore } from '@/providers/tasks-list-provider';
import { AddListForm } from '@/app/(main)/tasks-list/components/add-list-form';
import { TaskListCard } from '@/app/(main)/tasks-list/components/task-list-card';

export default function TasksPage() {
  const taskLists = useTasksListStore((state) => state.lists);

  return (
    <div className='min-h-screen flex flex-col gap-10 container py-6'>
      <AddListForm />

      <div className={'grid grid-cols-3 gap-4'}>
        {taskLists.map((taskList) => (
          <TaskListCard key={taskList.id} taskList={taskList} />
        ))}
      </div>
    </div>
  );
}
