import { useCodeStore } from '@/store/mainStore';
import { RouteLocationNormalized } from 'vue-router';

export const propsEditView = (to: RouteLocationNormalized) => {
  if (to.query?.id) {
    const store = useCodeStore();

    const itemSelected = store.codeList?.find(
      (item) => item.id === to.query.id
    );

    if (itemSelected) {
      store.onSelectLanguage(itemSelected.language);
      store.onSelectTheme(itemSelected.theme);
      store.onUpdateCode(itemSelected.code);
      store.onUpdateDescription(itemSelected.description || '');
    }
    return {
      itemId: itemSelected?.id,
    };
  }
};
