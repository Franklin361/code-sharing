<script setup lang="ts">
import DeleteAlertDialog from '@/components/list-code/DeleteAlertDialog.vue';
import Button from '@/components/ui/button/Button.vue';
import Input from '@/components/ui/input/Input.vue';
import { useToast } from '@/components/ui/toast/use-toast';
import { useShareCode } from '@/composables/useShareCode';
import { RouteNames } from '@/router/main';
import { useAuthStore } from '@/store/authStore';
import { useCodeStore } from '@/store/mainStore';
import { addNewCode, updateCode } from '@/supabase/code';
import { Icon } from '@iconify/vue';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

interface Props {
  idCodeToEdit?: number
}

const props = defineProps<Props>()

const { toast } = useToast()
const router = useRouter()
const store = useCodeStore()
const useAuth = useAuthStore()
const { description } = storeToRefs(store)
const handleShare = useShareCode()
const loading = ref(false)

const handleSave = async() => {
  loading.value = true

  try {
    if(props.idCodeToEdit) await handleUpdateCode()
    else await handleCreateCode()

    router.push({ name: RouteNames.HOME })
  } finally {
    loading.value = false
  }
}

const handleCreateCode =  async(  ) => {
  const { data, error } = await addNewCode({
    code: store.code,
    language: store.language,
    theme: store.theme,
    description: description.value,
  })

  if(error){
    toast({
      title: error,
      duration: 2000,
      class: 'toast-error'
    })
    return
  }

  store.addCodeToList(data)
  toast({
    title: `code added successfully`,
    duration: 2000,
    class: 'toast-success'
  })
}

const handleUpdateCode =  async(  ) => {

  if(!useAuth.user?.id) return;

  const { data, error } = await updateCode({
    values: {
      id: props.idCodeToEdit!,
      code: store.code,
      language: store.language,
      theme: store.theme,
      description: description.value,
    },
    userId: useAuth.user.id
  })

  if(error){
    toast({
      title: error,
      duration: 2000,
      class: 'toast-error'
    })
    return
  }

  store.updateCode(data)

  toast({
    title: `code updated successfully`,
    duration: 2000,
    class: 'toast-success'
  })
}
</script>

<template>
  <div
    class="border p-2 px-5 flex items-center justify-between gap-10 rounded-md my-5 h-[10vh] bg-secondary sticky bottom-0 left-0 border-white/30"
  >
    <div class="relative w-full max-w-sm items-center">
      <Input
        id="search"
        type="text"
        placeholder="Some description about your code (optional)"
        class="pl-10"
        v-model="description"
      />
      <span
        class="absolute start-0 inset-y-0 flex items-center justify-center px-2"
      >
        <Icon
          icon="material-symbols-light:chat-outline"
          class="size-6"
        />
      </span>
    </div>

    <div class="flex items-center justify-around gap-5">
      <Button
        class="flex justify-center gap-2 items-center disabled:opacity-60"
        :disabled="store.code.length < 5"
        @click="handleSave"
      >
        <Icon
          icon="material-symbols-light:save-outline-rounded"
          class="size-6"
        />
        <span v-if="!idCodeToEdit">Save</span>
        <span v-else>Edit</span>
      </Button>
      <Button
        class="flex justify-center gap-2 items-center disabled:opacity-60"
        :disabled="store.code.length < 5"
        @click="handleShare({ ...store })"
      >
        <Icon
          icon="material-symbols-light:share-outline"
          class="size-6"
        />
        Instant sharing
      </Button>

      <DeleteAlertDialog
        v-if="!!idCodeToEdit"
        :id-code="idCodeToEdit"
      />
    </div>
  </div>
</template>
