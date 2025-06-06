'use client';

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
import { Button } from '@/shared/components/ui/button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Textarea } from '@/shared/components/ui/textarea';
import { useTasksListStore } from '@/providers/tasks-list-provider';
import { NewTaskListFormFields, TaskListSchema } from '@/app/(main)/tasks-list/model/task-list';

export const AddListForm = () => {
  const addNewList = useTasksListStore((state) => state.addList);

  const form = useForm<NewTaskListFormFields>({
    resolver: zodResolver(TaskListSchema),
    defaultValues: {
      title: '',
      description: '',
    },
  });

  const handleSubmit = (data: NewTaskListFormFields) => {
    addNewList(data);
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
          Add
        </Button>
      </form>
    </Form>
  );
};
