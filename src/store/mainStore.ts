import { languagesList, themesList } from '@/config';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCodeStore = defineStore('code-store', () => {
  const language = ref(languagesList[0].value);
  const theme = ref(themesList[0].value);
  const code = ref('');

  return {
    language,
    theme,
    code,
  };
});
