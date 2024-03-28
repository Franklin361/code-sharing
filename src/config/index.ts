import { languages } from '@/config/languages';
import { themes } from '@/config/themes';

export const languagesList = Object.entries(languages).map(([key]) => ({
  value: key,
  label: key,
}));

export const configLanguages = {
  list: languagesList,
  placeholder: 'Select a language...',
  notFoundLabel: 'No language supported',
  defaultValue: languagesList[0].value,
};

export const themesList = Object.entries(themes).map(([key]) => ({
  value: key,
  label: key,
}));

export const configThemes = {
  list: themesList,
  placeholder: 'Select a theme...',
  notFoundLabel: 'No theme supported',
  defaultValue: themesList[0].value,
};
