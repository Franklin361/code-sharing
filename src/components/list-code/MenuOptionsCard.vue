<script setup lang="ts">
import { Icon } from '@iconify/vue';
import {
DropdownMenu,
DropdownMenuContent,
DropdownMenuItem,
DropdownMenuLabel,
DropdownMenuSeparator,
DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useShareCode } from '@/composables/useShareCode';
import { Code } from '@/types/code';
import { useRouter } from 'vue-router';
import { RouteNames } from '@/router/main';

interface Props extends Code {}

defineProps<Props>();

const router = useRouter()

const handleShare = useShareCode()

const handleGoToEditor = () => {
  // TODO: send a signal to let you know that you are about to be edited
  router.push({
    name: RouteNames.EDITOR
  })
}
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger>
      <slot></slot>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuLabel>Code options</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem
        class="flex justify-start gap-3 cursor-pointer"
        @click="handleShare($props)"
      >
        <Icon
          icon="material-symbols-light:share-outline"
          class="size-5 text-foreground"
        />
        <span class="">Share code</span>
      </DropdownMenuItem>
      <DropdownMenuItem
        class="flex justify-start gap-3 cursor-pointer"
        @click="handleGoToEditor"
      >
        <Icon
          icon="iconoir:edit"
          class="size-5 text-foreground"
        />
        <span class="">Edit code</span>
      </DropdownMenuItem>
      <DropdownMenuSeparator class="mt-5" />
      <DropdownMenuItem
        class="flex justify-start gap-3 cursor-pointer bg-red-500/40 hover:!bg-red-500/60"
      >
        <Icon
          icon="material-symbols-light:delete-outline"
          class="size-5 text-foreground"
        />
        <span class="">Delete code</span>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
