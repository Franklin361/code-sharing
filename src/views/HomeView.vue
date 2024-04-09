<script setup lang="ts">
import { useCodeStore } from '@/store/mainStore';

import ListCode from '@/components/list-code/ListCode.vue';
import NoItems from '@/components/list-code/NoItems.vue';

const store = useCodeStore()
</script>

<template>
  <main class="px-5 min-h-[200vh]">
    <ListCode v-if="store.codeList && store.codeList.length > 0" :code-list="store.codeList" />
    <NoItems v-else />
  </main>
</template>
