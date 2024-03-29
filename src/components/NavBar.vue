<script setup lang="ts">
import ModeToggle from '@/components/ModeToggle.vue';
</script>

<template>
  <nav
    class="flex items-center justify-between border-b p-3 px-5 shadow-xl shadow-black/20"
  >
    <span>Note Code</span>
    <div class="flex justify-center gap-5">
      <router-link to="/editor">Editor</router-link>
      <router-link to="/">Home</router-link>
    </div>
    <ModeToggle />
  </nav>
</template>
