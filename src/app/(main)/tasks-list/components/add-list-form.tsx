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
import { z } from 'zod';
import { Textarea } from '@/shared/components/ui/textarea';
import { useTasksListStore } from '@/providers/tasks-list-provider';

const requiredMsg = 'This field is required';

export const Schema = z.object({
  title: z.string().trim().min(1, { message: requiredMsg }),
  description: z.string().optional(),
});

export type FormFields = z.infer<typeof Schema>;

export const AddListForm = () => {
  const addNewList = useTasksListStore((state) => state.addList);

  const form = useForm<FormFields>({
    resolver: zodResolver(Schema),
    defaultValues: {
      title: '',
      description: '',
    },
  });

  const handleSubmit = (data: FormFields) => {
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
              <FormLabel>Password</FormLabel>
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
