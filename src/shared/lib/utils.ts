import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getRemainingTime({
  estimate,
  startTime,
}: {
  estimate: number;
  startTime: number;
}): string {
  const endTime = startTime + estimate * 60 * 1000;
  const diff = endTime - Date.now();

  if (diff <= 0) return 'Time is up';

  const minutes = Math.floor(diff / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}
