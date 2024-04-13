<script setup lang="ts">
import CustomDialog from '@/components/CustomDialog.vue';
import Button from '@/components/ui/button/Button.vue';
import { useToast } from '@/components/ui/toast/use-toast';
import { RouteNames } from '@/router/main';
import { useAuthStore } from '@/store/authStore';
import { useCodeStore } from '@/store/mainStore';
import { deleteCode } from '@/supabase/code';
import { Icon } from '@iconify/vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

interface Props {
  idCode: number
}

const props = defineProps<Props>()
const emit = defineEmits<{   (e: 'callback'): void }>()
const { deleteItemFromList } = useCodeStore()
const router = useRouter()
const { toast } = useToast()
const loading = ref(false)
const useAuth = useAuthStore()

const handleDelete = async (onCloseDialog: (shouldCloseModal: boolean) => void) => {

  if(!useAuth.user?.id) {
    toast({
      title: `You must be authenticated to delete your code`,
      duration: 2000,
      class: 'toast-error'
    })
    return
  }

  try {
    loading.value = true

    const { error } = await deleteCode({ codeId: props.idCode,  userId:useAuth.user.id  })

    if(error){
      toast({
        title: error,
        duration: 2000,
        class: 'toast-error'
      })
      return
    }

    deleteItemFromList(props.idCode)

    toast({
      title: `code deleted successfully`,
      duration: 2000,
      class: 'toast-success'
    })

    router.replace({ name: RouteNames.HOME, replace: true })

  } catch (error) {
    console.log('error', error)
  } finally {
    loading.value = false
    onCloseDialog(true)
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
