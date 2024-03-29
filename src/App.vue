<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
import NavBar from '@/components/NavBar.vue';
import ToolBar from '@/components/editor/toolbar/ToolBar.vue';
import ToolBarBelow from '@/components/editor/toolbar/ToolBarBelow.vue';
import LoadingEditor from '@/components/editor/LoadingEditor.vue';
import ErrorEditor from '@/components/editor/ErrorEditor.vue';

const Editor = defineAsyncComponent({
  loader: () => import('@/components/editor/Editor.vue'),
  loadingComponent: LoadingEditor,
  errorComponent: ErrorEditor
})
</script>

<template>
  <NavBar />
  <main class="container mx-auto p-5">
    <h1
      class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center mb-10"
    >
      <span>Create & Share </span>
      <span>Your code easily</span>
    </h1>

    <ToolBar />

    <Editor />

    <ToolBarBelow />
  </main>
</template>
