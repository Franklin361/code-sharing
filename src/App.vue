<script setup lang="ts">
import NavBar from '@/components/NavBar.vue';
import Editor from '@/components/Editor.vue';
</script>

<template>
  <NavBar />
  <main class="container mx-auto p-5">
    <h1
      class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center"
    >
      <span>Create & Share </span>
      <span>Your code easily</span>
    </h1>

    <Editor />
  </main>
</template>
