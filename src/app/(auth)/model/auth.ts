import { z } from 'zod';

const requiredMsg = 'This field is required';

export const loginSchema = z.object({
  email: z.string().min(1, { message: requiredMsg }).email({ message: 'Email is not valid' }),
  password: z.string().min(1, { message: requiredMsg }),
});

export type LoginFormFields = z.infer<typeof loginSchema>;

export const validUserCredentials = {
  email: 'test@mail.com',
  password: '123',
};

export const sessionToken = 'mock-session-token-abc123';
