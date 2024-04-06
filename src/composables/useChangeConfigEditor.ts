import { getLanguage, getTheme } from '@/lib/utils';
import { useCodeStore } from '@/store/mainStore';
import { Code } from '@/types/code';
import { ref, shallowRef, watch } from 'vue';

export function useChangeConfigEditor(defaultValues?: Code) {
  // return { language, description, theme, code, updateValue };
}
