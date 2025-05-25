import { z } from 'zod';
import { TaskStatus } from '@/store/tasks-store';

export const requiredMsg = 'This field is required';

export const TaskSchema = z.object({
  title: z.string().trim().min(1, { message: requiredMsg }),
  description: z.string().trim().min(1, { message: requiredMsg }),
  estimate: z.coerce
    .number()
    .min(1, 'Estimate must be at least 1 minute')
    .positive('Estimate must be positive number'),
  status: z.nativeEnum(TaskStatus),
});

export type NewTaskFormFields = z.infer<typeof TaskSchema>;
