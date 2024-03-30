<script setup lang="ts">
import { Code } from '@/types/code';
import { defineProps } from 'vue'
import ItemCode from './ItemCode.vue';

interface Props{
  codeList: Code[]
}

defineProps<Props>()
</script>

<template>
  <section
    v-if="codeList && codeList.length > 0"
    :class="[
        'grid grid-cols-4',
        'gap-8 max-w-5xl mx-auto my-20',
      ]"
  >
    <ItemCode
      v-for="(item) in codeList"
      :key="item.id"
      :item="item"
    />
  </section>
</template>
