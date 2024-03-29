import { getLanguage, getTheme } from '@/lib/utils';
import { useCodeStore } from '@/store/mainStore';
import { storeToRefs } from 'pinia';
import { ref, shallowRef, watch } from 'vue';

export function useChangeConfigEditor() {
  const store = useCodeStore();

  const { code } = storeToRefs(store);
  const language = ref(getLanguage(store.language));
  const theme = shallowRef(getTheme(store.theme));

  const updateValue = (code: string) => {
    console.log(code);
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
