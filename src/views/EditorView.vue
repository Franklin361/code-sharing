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

interface Props {
  itemId?: string
}
defineProps<Props>()

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
    {{ itemId }}
    <h1
      class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center mb-10"
    >
      <span>Create & Share </span>
      <span>Your code easily</span>
    </h1>

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

    <ToolBarBelow :id-code-to-edit="itemId" />
  </main>
</template>
