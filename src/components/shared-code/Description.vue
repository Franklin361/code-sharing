<script setup lang="ts">
import { Icon } from '@iconify/vue';

interface Props {
  description:string
}
defineProps<Props>()
</script>

<template>
  <div
    class="p-3 text-lg my-5 mt-10 text-white/90 border rounded-md border-white/50 relative custom-animation"
  >
    <span class="text-sm absolute -top-7 left-1 opacity-60"
      >Description about the code</span
    >
    <p>{{ description }}</p>
    <Icon
      icon="material-symbols-light:info"
      class="absolute -top-5 right-0 size-8"
    />
  </div>
</template>

<style scoped>
.custom-animation {
  animation: custom-animation 1s ease 1s 3;
}

@keyframes custom-animation {
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.5;
  }

  100% {
    opacity: 1;
  }
}
</style>
