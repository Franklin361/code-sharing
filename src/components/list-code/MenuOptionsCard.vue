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
import { Tables } from '@/types/supabase';
import { Icon } from '@iconify/vue';
import { useRouter } from 'vue-router';
import DeleteAlertDialog from './DeleteAlertDialog.vue';

interface Props{
  item: Tables<'codes'>
}

const props = defineProps<Props>();

const router = useRouter()

const handleShareAnon = useShareCode()

const handleGoToEditor = () => {
  router.push({
    name: RouteNames.EDIT_CODE,
    params: {
      id: props.item.id
    }
  })
}

const handleGoToSharing = () => {
  router.push({
    name: RouteNames.SHARING_CODE,
    params: {
      id: props.item.id,
      userId: props.item.user_id
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
        @click="handleGoToSharing()"
      >
        <Icon
          icon="material-symbols-light:share-outline"
          class="size-5 text-foreground"
        />
        <span class="">Share code</span>
      </DropdownMenuItem>
      <DropdownMenuItem
        class="flex justify-start gap-3 cursor-pointer"
        @click="handleShareAnon(item)"
      >
        <Icon
          icon="mdi:anonymous"
          class="size-5 text-foreground"
        />
        <span class="">Share as anon</span>
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
