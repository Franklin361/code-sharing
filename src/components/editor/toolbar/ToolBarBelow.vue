<script setup lang="ts">
import DeleteAlertDialog from '@/components/list-code/DeleteAlertDialog.vue';
import Button from '@/components/ui/button/Button.vue';
import Input from '@/components/ui/input/Input.vue';
import { useToast } from '@/components/ui/toast/use-toast';
import { useShareCode } from '@/composables/useShareCode';
import { RouteNames } from '@/router/main';
import { useCodeStore } from '@/store/mainStore';
import { Icon } from '@iconify/vue';
import { toRef } from 'vue';
import { onBeforeRouteUpdate, useRouter, onBeforeRouteLeave } from 'vue-router';

interface Props {
  idCodeToEdit?: string
  description: string
}

const props = defineProps<Props>()
const description =  toRef(props.description)
const store = useCodeStore()
const { toast } = useToast()
const router = useRouter()

const handleShare = useShareCode()

const handleSave = () => {

  const isEditing = !!props.idCodeToEdit

  const dataToSave = {
    id: props.idCodeToEdit || crypto.randomUUID(),
    code: store.code,
    language: store.language,
    theme: store.theme,
    description: description.value
  }
  console.log(dataToSave)
  if (isEditing) {
    store.updateCode(dataToSave)
  } else {
    store.addCodeToList(dataToSave)
  }

  toast({
    title: `code ${isEditing ? 'edited' : 'added'} successfully`,
    duration: 2000,
    class: 'toast-success'
  })
  router.push({ name: RouteNames.HOME })
}

const handleDeleteCompleted = () => {
  toast({
    title: `code deleted successfully`,
    duration: 2000,
    class: 'toast-success'
  })
  router.replace({ name: RouteNames.HOME, replace: true })
}

onBeforeRouteUpdate(() => {
  store.resetCodeStore()
})
onBeforeRouteLeave(() => {
  store.resetCodeStore()
})
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
        class="flex justify-center gap-2 items-center"
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
        class="flex justify-center gap-2 items-center"
        @click="handleShare({ ...store })"
      >
        <Icon
          icon="material-symbols-light:share-outline"
          class="size-6"
        />
        Share
      </Button>

      <DeleteAlertDialog
        v-if="!!idCodeToEdit"
        :id-code="idCodeToEdit"
        @callback="handleDeleteCompleted"
      />
    </div>
  </div>
</template>
