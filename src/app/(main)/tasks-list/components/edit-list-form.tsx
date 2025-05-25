import React from 'react';
import { useForm } from 'react-hook-form';
import { NewTaskListFormFields, TaskListSchema } from '@/app/(main)/tasks-list/model/task-list';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/shared/components/ui/form';
import { Input } from '@/shared/components/ui/input';
import { Textarea } from '@/shared/components/ui/textarea';
import { Button } from '@/shared/components/ui/button';
import { TaskList } from '@/store/tasks-store';
import { useTasksListStore } from '@/providers/tasks-list-provider';

interface Props {
  taskList: TaskList;
  onSuccess?: () => void;
}

export const EditListForm = ({ taskList, onSuccess }: Props) => {
  const editList = useTasksListStore((state) => state.editList);

  const form = useForm<NewTaskListFormFields>({
    resolver: zodResolver(TaskListSchema),
    defaultValues: {
      title: taskList.title,
      description: taskList.description,
    },
  });

  const handleSubmit = (data: NewTaskListFormFields) => {
    editList({ id: taskList.id, ...data });

    if (onSuccess) {
      onSuccess();
    }

    form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className='space-y-4 flex flex-col'>
        <FormField
          control={form.control}
          name='title'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder='New list title' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='description'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder='New list description' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button variant={'outline'} type='submit' className={'ml-auto'}>
          Save
        </Button>
      </form>
    </Form>
  );
};
