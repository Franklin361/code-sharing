<script setup lang="ts">
import ModeToggle from '@/components/ModeToggle.vue';
import { RouteNames } from '@/router/main';
</script>

<template>
  <nav
    class="flex items-center justify-between border-b p-3 px-5 shadow-xl shadow-black/20"
  >
    <span>Note Code</span>
    <div class="flex justify-center gap-5">
      <router-link :to="{ name: RouteNames.EDITOR }">Editor</router-link>
      <router-link :to="{ name: RouteNames.HOME }">Home</router-link>
    </div>
    <ModeToggle />
  </nav>
</template>
