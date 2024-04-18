<script setup lang="ts">
import CustomDialog from '@/components/CustomDialog.vue';
import ButtonGitHub from '@/components/auth/ButtonGitHub.vue';
import Button from '@/components/ui/button/Button.vue';
import { Icon } from '@iconify/vue';
</script>

<template>
  <CustomDialog>
    <template #dialog-trigger>
      <Button
        class="flex justify-center md:gap-3 gap-1 items-center disabled:opacity-60 md:px-3 md:py-2 px-2   w-fit h-fit"
      >
        <Icon
          icon="material-symbols-light:save-outline-rounded"
          class="md:size-6 size-5"
        />
        <span class="md:text-base text-sm">Save</span>
      </Button>
    </template>

    <template #dialog-title>
      <h4>You must be logged in 🤨</h4>
    </template>

    <template #dialog-description>
      For saving any item code, you must get an account.
    </template>

    <template #dialog-footer="{ onClose }">
      <div class="flex items-center justify-between gap-5 w-full">
        <Button
          variant="outline"
          @click="onClose(true)"
        >
          Cancel
        </Button>
        <div>
          <ButtonGitHub />
        </div>
      </div>
    </template>
  </CustomDialog>
</template>
