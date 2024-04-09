<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue';
import { RouteNames } from '@/router/main';
</script>

<template>
  <div class="flex justify-center items-center flex-col gap-2 min-h-[500px]">
    <img src="https://cdn-icons-png.flaticon.com/512/10479/10479781.png" alt="icon"
      class="w-[100px] object-cover -rotate-12" loading="eager">
    <span class="opacity-50 text-4xl font-bold text-center">No codes to share 📝</span>
    <router-link :to="{ name: RouteNames.EDITOR }" class="mt-5">
      <Button variant="outline">Create a new code</Button>
    </router-link>
  </div>
</template>

<style scoped>
img {
  animation: img-rotation .5s linear infinite alternate;
}

@keyframes img-rotation {
  to {
    transform: rotate(0deg);
  }
}
</style>