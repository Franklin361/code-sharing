import { languages } from '@/config/languages';
import { themes } from '@/config/themes';

import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getLanguage = (lang: string) =>
  Object.entries(languages).find(([key]) => key === lang)![1];
export const getTheme = (theme: string) =>
  Object.entries(themes).find(([key]) => key === theme)![1];
