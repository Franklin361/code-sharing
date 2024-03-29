<script setup lang="ts">
import { Icon } from '@iconify/vue';
</script>

<template>
  <div class="h-[40vh] w-full bg-secondary grid place-items-center">
    <div class="opacity-40 flex justify-center items-center gap-5 flex-col">
      <Icon
        icon="fluent:document-footer-dismiss-20-regular"
        class="size-14"
      />
      <span class="font-semibold"
        >It was an error while the editor was loading, try later!</span
      >
    </div>
  </div>
</template>
