<script setup lang="ts">
interface Props {
  label?: string
}
defineProps<Props>()
</script>

<template>
  <div class="flex justify-center items-center gap-5 flex-col min-h-[500px]">
    <div
      class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] "
      role="status"
    ></div>
    <span class="opacity-50">{{ label || 'Loading ...' }}</span>
  </div>
</template>
