<script setup lang="ts">
import ErrorEditor from '@/components/editor/ErrorEditor.vue';
import LoadingEditor from '@/components/editor/LoadingEditor.vue';
import ToolBar from '@/components/editor/toolbar/ToolBar.vue';
import ToolBarBelow from '@/components/editor/toolbar/ToolBarBelow.vue';
import { useChangeConfigEditor } from '@/composables/useChangeConfigEditor';
import { Code } from '@/types/code';
import { defineAsyncComponent } from 'vue';

interface Props {
  item?: Code
}
const props = defineProps<Props>()

const { language,description, theme, code, updateValue } = useChangeConfigEditor(props.item)

const Editor = defineAsyncComponent({
  loader: () => import('@/components/editor/Editor.vue'),
  loadingComponent: LoadingEditor,
  errorComponent: ErrorEditor
})
</script>

<template>
  <main class="container mx-auto p-5">
    <h1
      class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center mb-10"
    >
      <span>Create & Share </span>
      <span>Your code easily</span>
    </h1>

    <ToolBar
      :default-language="item?.language"
      :default-theme="item?.theme"
    />

    <Editor
      :language="language"
      :theme="theme"
      :code="code"
      @update:modelValue="updateValue"
    />

    <ToolBarBelow
      :id-code-to-edit="props.item?.id"
      :description="description"
    />
  </main>
</template>
