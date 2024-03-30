import { languagesList, themesList } from '@/config';
import { defineStore } from 'pinia';
import { ref } from 'vue';

interface Code {
  description?: string;
  id: string;
  code: string;
  language: string;
  theme: string;
}

export const useCodeStore = defineStore('code-store', () => {
  const language = ref(languagesList[0].value);
  const theme = ref(themesList[0].value);
  const code = ref('');
  const description = ref('');

  const codeList = ref<Code[] | null>(null);

  const addCodeToList = async (code: Code) => {
    if (codeList.value === null) {
      codeList.value = [code];
    } else {
      codeList.value.push(code);
    }
  };

  return {
    language,
    theme,
    code,
    description,
    codeList,
    addCodeToList,
  };
});
