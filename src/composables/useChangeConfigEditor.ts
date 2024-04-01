import { getLanguage, getTheme } from '@/lib/utils';
import { useCodeStore } from '@/store/mainStore';
import { Code } from '@/types/code';
import { ref, shallowRef, watch } from 'vue';

export function useChangeConfigEditor(defaultValues?: Code) {
  const store = useCodeStore();

  const code = ref(defaultValues?.code || store.code);
  const language = ref(getLanguage(defaultValues?.language || store.language));
  const theme = shallowRef(getTheme(defaultValues?.theme || store.theme));

  const updateValue = (code: string) => {
    store.$patch({
      code,
    });
  };

  watch(
    () => store.theme,
    () => (theme.value = getTheme(store.theme))
  );
  watch(
    () => store.language,
    () => (language.value = getLanguage(store.language))
  );

  return { language, theme, code, updateValue };
}
