<script setup lang="ts">
import { useCodeStore } from '@/store/mainStore';

import LoadingView from '@/components/LoadingView.vue';
import ListCode from '@/components/list-code/ListCode.vue';
import NoItems from '@/components/list-code/NoItems.vue';
import { useAuthStore } from '@/store/authStore';
import { getAllCodesByUser } from '@/supabase/code';
import { ref, watch } from 'vue';

const loading = ref(true)

const useCode = useCodeStore();
const useAuth = useAuthStore();

const initialize = async() => {
  loading.value = true
  if(useAuth.user?.id && useCode.codeList === null){
    console.log('initialize code list')
    const { data, error } = await getAllCodesByUser(useAuth.user.id)
    if(!error) useCode.initializeCodeList(data || [])
  }
  loading.value = false
}

watch(
  ()=> useAuth.user,
  () => {
    initialize()
  },
  { immediate: true }
)
</script>

<template>
  <main class="px-5 ">
    <LoadingView
      label="Loading your codes ..."
      v-if="loading"
    />
    <template v-else>
      <ListCode
        v-if="useCode.codeList && useCode.codeList.length > 0"
        :code-list="useCode.codeList"
      />
      <NoItems v-else />
    </template>
  </main>
</template>
