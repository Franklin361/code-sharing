import { languagesList, themesList } from '@/config';
import { Tables } from '@/types/supabase';
import { defineStore } from 'pinia';
import { ref } from 'vue';

type Code = Tables<'codes'>;

export const useCodeStore = defineStore('code-store', () => {
  const language = ref(languagesList[0].value);
  const theme = ref(themesList[0].value);
  const code = ref('');
  const description = ref('');

  const codeList = ref<Code[] | null>(null);

  const initializeCodeList = (codes: Code[]) => {
    codeList.value = codes;
  };

  const addCodeToList = async (code: Code) => {
    if (codeList.value === null) {
      codeList.value = [code];
    } else {
      codeList.value.push(code);
    }
  };

  const updateCode = async (code: Code) => {
    console.log(code);
    const index = codeList.value?.findIndex((item) => item.id === code.id);
    console.log({ index });
    codeList.value![index!] = code;
  };

  const resetCodeStore = () => {
    console.log('reset');
    language.value = languagesList[0].value;
    theme.value = themesList[0].value;
    code.value = '';
    description.value = '';
  };

  const clearCodeStore = () => {
    console.log('clear');
    codeList.value = null;
    resetCodeStore();
  };

  const deleteItemFromList = (id: number) => {
    if (codeList.value) {
      codeList.value = codeList.value.filter((code) => code.id !== id);
    }
  };

  const onSelectLanguage = (languageSelected: string) => {
    language.value = languageSelected;
  };

  const onSelectTheme = (themeSelected: string) => {
    theme.value = themeSelected;
  };

  const onUpdateCode = (codeUpdated: string) => {
    code.value = codeUpdated;
  };

  const onUpdateDescription = (descriptionUpdated: string) => {
    description.value = descriptionUpdated;
  };

  return {
    language,
    theme,
    code,
    description,
    codeList,
    addCodeToList,
    updateCode,
    resetCodeStore,
    deleteItemFromList,
    onSelectLanguage,
    onSelectTheme,
    onUpdateCode,
    onUpdateDescription,
    initializeCodeList,
    clearCodeStore,
  };
});
