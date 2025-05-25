import React, { useRef } from 'react';
import { ShowMore, ShowMoreButton } from '@/components/show-more/show-more';
import Link from 'next/link';
import { ROUTES } from '@/shared/constants/routes';
import { Typography } from '@/shared/components/ui/typography';
import { TaskList } from '@/store/tasks-store';
import { useTasksListStore } from '@/providers/tasks-list-provider';
import { EditListModal } from '@/app/(main)/tasks-list/components/edit-list-modal';

interface Props {
  taskList: TaskList;
}

export const TaskListCard = ({ taskList }: Props) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const removeTask = useTasksListStore((state) => state.removeListFromStore);

  const handleDeleteTaskList = () => {
    removeTask(taskList.id);
  };

  return (
    <div className={'relative border rounded-lg p-4 flex flex-col gap-4'}>
      <ShowMore className={'absolute top-[8px] right-[8px]'} clickOutsideExceptions={[modalRef]}>
        <EditListModal taskList={taskList} ref={modalRef}>
          <ShowMoreButton>Edit</ShowMoreButton>
        </EditListModal>
        <ShowMoreButton variant={'negative'} onClick={handleDeleteTaskList}>
          Delete
        </ShowMoreButton>
      </ShowMore>

      <Link href={`${ROUTES.main}/${taskList.id}`}>
        <Typography
          variant={'headline-3-medium'}
          className={'w-fit hover:underline w-[90%] overflow-hidden text-ellipsis'}
        >
          {taskList.title}
        </Typography>
      </Link>

      <Typography variant={'body-m-regular'}>{taskList.description}</Typography>
    </div>
  );
};
