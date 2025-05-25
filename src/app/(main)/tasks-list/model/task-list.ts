import { z } from 'zod';

export const requiredMsg = 'This field is required';

export const TaskListSchema = z.object({
  title: z.string().trim().min(1, { message: requiredMsg }),
  description: z.string().optional(),
});

export type NewTaskListFormFields = z.infer<typeof TaskListSchema>;
