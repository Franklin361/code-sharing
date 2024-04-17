<script setup lang="ts">
import EditorCodeDisabled from '@/components/shared-code/Code.vue';
import Description from '@/components/shared-code/Description.vue';
</script>

<template>
  <main class="px-8 max-w-5xl mx-auto">
    <Description
      v-if="$route.query.description"
      :description="($route.query.description as string)"
    />

    <EditorCodeDisabled
      v-if="$route.query.code && $route.query.language && $route.query.theme"
      :language="($route.query.language as string)"
      :theme="($route.query.theme as string)"
      :code="($route.query.code as string)"
    />
  </main>
</template>
