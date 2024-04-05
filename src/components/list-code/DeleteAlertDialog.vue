<script setup lang="ts">
import { Icon } from '@iconify/vue';
import Button from '@/components/ui/button/Button.vue';
import { useCodeStore } from '@/store/mainStore';
import CustomDialog from '@/components/CustomDialog.vue';
import { ref } from 'vue';

interface Props {
  idCode: string
}

const props = defineProps<Props>()
const emit = defineEmits<{   (e: 'callback'): void }>()
const store = useCodeStore()
const loading = ref(false)


const handleDelete = async (onCloseDialog: (shouldCloseModal: boolean) => void) => {
  try {
    loading.value = true
    console.log('delete code: ', props.idCode)

    store.$patch({
      codeList: store.codeList?.filter(code => code.id !== props.idCode)
    })
    onCloseDialog(true)

    emit('callback')

  } catch (error) {
    console.log('error', error)
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <CustomDialog>
    <template #dialog-trigger>
      <Button
        variant="destructive"
        class="flex justify-start gap-3 cursor-pointer px-0 pl-2 pr-4 size-fit"
      >
        <Icon
          icon="material-symbols-light:delete-outline"
          class="size-5 text-white"
        />
        <span class="">Delete code</span>
      </Button>
    </template>
    <template #dialog-title>
      <h4>Are you sure?</h4>
    </template>
    <template #dialog-description> This action will be irreversible </template>
    <template #dialog-footer="{ onClose }">
      <div class="flex items-center justify-end gap-5 w-full">
        <Button
          variant="outline"
          :disabled="loading"
          @click="onClose(true)"
        >
          Close
        </Button>
        <Button
          :disabled="loading"
          @click="handleDelete(onClose)"
        >
          {{ loading ? 'Deleting...' : 'Ok' }}
        </Button>
      </div>
    </template>
  </CustomDialog>
</template>
