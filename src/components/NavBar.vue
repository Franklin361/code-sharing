<script setup lang="ts">
import ModeToggle from '@/components/ModeToggle.vue';
import { RouteNames } from '@/router/main';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()

const titles = {
  [RouteNames.HOME]: '🎉',
  [RouteNames.EDITOR]: 'Editor ✏️',
  [RouteNames.SHARING_CODE]: 'Instant code shared 🔗',
}
const titleSelected = computed(() => route.name && (titles as any)[route.name.toString()])
</script>

<template>
  <nav
    class="flex items-center justify-between border-b p-3 px-5 shadow-xl shadow-black/20 dark:bg-gradient-to-l from-purple-700/70 to-violet-900/70 sticky top-0 left-0 z-30 backdrop-blur-xl"
  >
    <span>Note Code</span>

    <span
      v-if="!!titleSelected"
      class="font-bold"
      >{{ titleSelected }}</span
    >
    <ModeToggle />
  </nav>
</template>
