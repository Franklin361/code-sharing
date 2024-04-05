import { getLanguage, getTheme } from '@/lib/utils';
import { useCodeStore } from '@/store/mainStore';
import { Code } from '@/types/code';
import { ref, shallowRef, watch } from 'vue';

export function useChangeConfigEditor(defaultValues?: Code) {
  const store = useCodeStore();
  // TODO: refactor, probably you don't need to set theses states here, just using the store may be enough
  const code = ref(defaultValues?.code || store.code);
  const description = ref(defaultValues?.description || store.description);
  const language = ref(getLanguage(defaultValues?.language || store.language));
  const theme = shallowRef(getTheme(defaultValues?.theme || store.theme));

  const updateValue = (code: string) => {
    store.$patch({
      code,
    });
  };

  watch(
    () => defaultValues,
    () => {
      store.$patch({
        ...defaultValues,
      });
    },
    {
      once: true,
      immediate: true,
    }
  );

  watch(
    () => store.theme,
    () => (theme.value = getTheme(store.theme))
  );
  watch(
    () => store.language,
    () => (language.value = getLanguage(store.language))
  );

  return { language, description, theme, code, updateValue };
}
