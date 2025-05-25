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
import { useTasksListStore } from '@/providers/tasks-list-provider';
import { useForm } from 'react-hook-form';
import { NewTaskFormFields, TaskSchema } from '@/app/(main)/tasks-list/[id]/model/task-list';
import { zodResolver } from '@hookform/resolvers/zod';
import { Task, TaskStatus } from '@/store/tasks-store';
import { RadioGroup, RadioGroupItem } from '@/shared/components/ui/radio-group';

interface Props {
  task: Task;
  listId: string;
  onSuccess: () => void;
}

export const EditTaskForm = ({ task, listId, onSuccess }: Props) => {
  const editTask = useTasksListStore((state) => state.editTask);

  const form = useForm<NewTaskFormFields>({
    resolver: zodResolver(TaskSchema),
    defaultValues: {
      title: task.title,
      description: task.description,
      estimate: task.estimate,
      status: task.status,
    },
  });

  const handleSubmit = (data: NewTaskFormFields) => {
    editTask({ listId: listId, id: task.id, ...data });
    onSuccess();
    form.reset();
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
          name='status'
          render={({ field }) => (
            <FormItem className='space-y-3'>
              <FormLabel>Status</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className='flex flex-col space-y-1'
                >
                  <FormItem className='flex items-center space-x-3 space-y-0'>
                    <FormControl>
                      <RadioGroupItem value={TaskStatus.IDLE} />
                    </FormControl>
                    <FormLabel className='font-normal'>{TaskStatus.IDLE}</FormLabel>
                  </FormItem>

                  <FormItem className='flex items-center space-x-3 space-y-0'>
                    <FormControl>
                      <RadioGroupItem value={TaskStatus.COMPLETED} />
                    </FormControl>
                    <FormLabel className='font-normal'>{TaskStatus.COMPLETED}</FormLabel>
                  </FormItem>
                </RadioGroup>
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
                <Textarea placeholder='New task description' {...field} />
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
