<script setup lang="ts">
import { Tables } from '@/types/supabase';
import ItemCode from './ItemCode.vue';

interface Props{
  codeList: Tables<'codes'>[]
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
