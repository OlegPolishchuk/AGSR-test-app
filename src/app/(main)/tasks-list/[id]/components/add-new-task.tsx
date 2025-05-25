import React from 'react';
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
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { NewTaskFormFields, TaskSchema } from '@/app/(main)/tasks-list/[id]/model/task-list';
import { TaskStatus } from '@/store/tasks-store';
import { useTasksListStore } from '@/providers/tasks-list-provider';

interface Props {
  listId: string;
}

export const AddNewTask = ({ listId }: Props) => {
  const addNewTask = useTasksListStore((state) => state.addTaskToList);

  const form = useForm<NewTaskFormFields>({
    resolver: zodResolver(TaskSchema),
    defaultValues: {
      title: '',
      description: '',
      estimate: 60,
      status: TaskStatus.IDLE,
    },
  });

  const handleSubmit = (data: NewTaskFormFields) => {
    form.reset();

    addNewTask({ listId: listId, ...data });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className='space-y-4 flex flex-col'>
        <div className={'grid grid-cols-[1fr_200px] items-start gap-3 w-full'}>
          <FormField
            control={form.control}
            name='title'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder='New task title' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='estimate'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Time estimate (minutes)</FormLabel>
                <FormControl>
                  <Input
                    type={'number'}
                    placeholder='for example 60m'
                    {...field}
                    onChange={(e) => field.onChange(e.target.valueAsNumber)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name='description'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder='New task description' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button variant={'outline'} type='submit' className={'ml-auto'}>
          Add
        </Button>
      </form>
    </Form>
  );
};
