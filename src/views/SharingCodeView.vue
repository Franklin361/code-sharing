<script setup lang="ts">
import LoadingView from '@/components/LoadingView.vue';

import EditorCodeDisabled from '@/components/shared-code/Code.vue';
import Description from '@/components/shared-code/Description.vue';
import { useCodeStore } from '@/store/mainStore';
import { getProfile } from '@/supabase/profile';
import { Tables } from '@/types/supabase';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const useCode = useCodeStore()
const route = useRoute()

const loading = ref(true)
const profile = ref<Tables<'profiles'> >()

const initProfile =  async(  ) => {
  const { data, error } = await getProfile(route.params.userId as string);
  if(data && !error){
    profile.value = data
  }
  loading.value  = false
}

onMounted(() => {
  initProfile()
})
</script>

<template>
  <main class="px-5 max-w-5xl mx-auto my-20 md:mt-20 mt-28">
    <LoadingView
      label="Loading code..."
      v-if="loading"
    />
    <template v-else>
      <Description
        v-if="useCode.description"
        :description="useCode.description"
        :profile="profile"
      />

      <EditorCodeDisabled
        v-if="useCode.code && useCode.language && useCode.theme"
        :language="useCode.language"
        :theme="useCode.theme"
        :code="useCode.code"
      />
    </template>
  </main>
</template>
