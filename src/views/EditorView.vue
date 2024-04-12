<script setup lang="ts">
import ErrorEditor from '@/components/editor/ErrorEditor.vue';
import LoadingEditor from '@/components/editor/LoadingEditor.vue';
import ToolBar from '@/components/editor/toolbar/ToolBar.vue';
import ToolBarBelow from '@/components/editor/toolbar/ToolBarBelow.vue';

import { useCodeStore } from '@/store/mainStore';
import { defineAsyncComponent } from 'vue';
import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router';

const Editor = defineAsyncComponent({
  loader: () => import('@/components/editor/Editor.vue'),
  loadingComponent: LoadingEditor,
  errorComponent: ErrorEditor
})

const store = useCodeStore();

onBeforeRouteUpdate(() => {
  store.resetCodeStore()
})
onBeforeRouteLeave(() => {
  store.resetCodeStore()
})
</script>

<template>
  <main class="container mx-auto p-5">
    <ToolBar
      :default-language="store.language"
      :default-theme="store.theme"
    />

    <Editor
      :language="store.language"
      :theme="store.theme"
      :code="store.code"
      @update:modelValue="store.onUpdateCode"
    />

    <ToolBarBelow :id-code-to-edit="+$route.params.id" />
  </main>
</template>
