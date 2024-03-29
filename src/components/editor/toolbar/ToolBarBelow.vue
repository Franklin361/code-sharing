<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue';
import { Icon } from '@iconify/vue'
import { useCodeStore } from '@/store/mainStore'
import {  useRouter } from 'vue-router';
import { RouteNames } from '../../../router/main';

const store = useCodeStore()

const router = useRouter()

const handleSave = () => {
  const dataToSave = {
    code: store.code,
    language:store.language,
    theme:store.theme
  }
  console.log('save', {dataToSave})
}

const handleShare = () => {
  router.push({
    name: RouteNames.SHARING_CODE,
    params:{
      code: store.code
    },
    query: {
      lang: store.language,
      theme: store.theme
    }
  })
}
</script>

<template>
  <div
    class="border p-2 px-5 flex items-center justify-end gap-5 rounded-md my-5 h-[10vh] bg-secondary sticky bottom-0 left-0 border-white/30"
  >
    <Button
      class="flex justify-center gap-2 items-center"
      @click="handleSave"
    >
      <Icon
        icon="material-symbols-light:save-outline-rounded"
        class="size-6"
      />
      <span>Save</span>
    </Button>
    <Button
      class="flex justify-center gap-2 items-center"
      @click="handleShare"
    >
      <Icon
        icon="material-symbols-light:share-outline"
        class="size-6"
      />
      Share
    </Button>
  </div>
</template>
