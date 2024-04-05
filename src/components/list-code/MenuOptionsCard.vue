<script setup lang="ts">
;
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useShareCode } from '@/composables/useShareCode';
import { RouteNames } from '@/router/main';
import { Code } from '@/types/code';
import { Icon } from '@iconify/vue';
import { useRouter } from 'vue-router';
import DeleteAlertDialog from './DeleteAlertDialog.vue';

interface Props{
  item: Code
}


const props = defineProps<Props>();

const router = useRouter()

const handleShare = useShareCode()

const handleGoToEditor = () => {
  router.push({
    name: RouteNames.EDITOR,
    query: {
      id: props.item.id
    }
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
        @click="handleShare(item)"
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

      <DeleteAlertDialog :id-code="item.id" />
    </DropdownMenuContent>
  </DropdownMenu>
</template>
