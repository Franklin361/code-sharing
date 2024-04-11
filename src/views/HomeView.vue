<script setup lang="ts">
import { useCodeStore } from '@/store/mainStore';

import LoadingView from '@/components/LoadingView.vue';
import ListCode from '@/components/list-code/ListCode.vue';
import NoItems from '@/components/list-code/NoItems.vue';
import { useAuthStore } from '@/store/authStore';
import { getAllCodesByUser } from '@/supabase/code';
import { ref } from 'vue';

const loading = ref(true)

const useCode = useCodeStore();
const useAuth = useAuthStore();

if(useAuth.user?.id){
    getAllCodesByUser(useAuth.user.id).then(({ data,error }) => {
      if(!error) useCode.initializeCodeList(data || [])
    }).finally(() => {
      loading.value = false
    })
}
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
