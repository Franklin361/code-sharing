<script setup lang="ts">

import {
AlertDialog,
AlertDialogContent,
AlertDialogDescription,
AlertDialogFooter,
AlertDialogHeader,
AlertDialogTitle,
AlertDialogTrigger
} from '@/components/ui/alert-dialog';
import { ref } from 'vue';

const open = ref(false)

const onClose = (shouldCloseModal: boolean) => {
  if(shouldCloseModal){
    open.value = false
  }
}
</script>

<template>
  <AlertDialog
    :open="open"
    @update:open="open = !open"
  >
    <AlertDialogTrigger>
      <slot name="dialog-trigger"></slot>
    </AlertDialogTrigger>
    <AlertDialogContent class="md:max-w-lg max-w-[290px]">
      <AlertDialogHeader>
        <AlertDialogTitle>
          <slot name="dialog-title"></slot>
        </AlertDialogTitle>
        <AlertDialogDescription>
          <slot name="dialog-description"></slot>
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter class="mt-5">
        <slot
          name="dialog-footer"
          :onClose="onClose"
        ></slot>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
</template>
