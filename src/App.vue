<script setup lang="ts">
import NavBar from '@/components/NavBar.vue';
// import Editor from '@/components/editor/Editor.vue';
import ToolBar from '@/components/editor/toolbar/ToolBar.vue';
import ToolBarBelow from '@/components/editor/toolbar/ToolBarBelow.vue';
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
    <div class="w-full h-[70dvh] bg-secondary"></div>
    <!-- <Editor />  -->

    <ToolBarBelow />
  </main>
</template>
