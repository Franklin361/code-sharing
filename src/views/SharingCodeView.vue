<script setup lang="ts">
import ErrorEditor from '@/components/editor/ErrorEditor.vue';
import LoadingEditor from '@/components/editor/LoadingEditor.vue';
import { defineAsyncComponent } from 'vue';


const Editor = defineAsyncComponent({
  loader: () => import('@/components/editor/Editor.vue'),
  loadingComponent: LoadingEditor,
  errorComponent: ErrorEditor
})
</script>

<template>
  <main>
    <div>Sharing code</div>
    <Editor />
  </main>
</template>
