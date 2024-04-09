<script setup lang="ts">
import ModeToggle from '@/components/ModeToggle.vue';
import { RouteNames } from '@/router/main';
</script>

<template>
  <nav
    class="flex items-center justify-between border-b p-3 px-5 shadow-xl shadow-black/20 dark:bg-gradient-to-l from-purple-700/70 to-violet-900/70 sticky top-0 left-0 z-10 backdrop-blur-xl">
    <span>Note Code</span>
    <div class="flex justify-center gap-5">
      <router-link :to="{ name: RouteNames.EDITOR }">Editor</router-link>
      <router-link :to="{ name: RouteNames.HOME }">Home</router-link>
    </div>
    <ModeToggle />
  </nav>
</template>
