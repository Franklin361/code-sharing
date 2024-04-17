<script setup lang="ts">
import MenuOptionsCard from '@/components/list-code/MenuOptionsCard.vue';
import Button from '@/components/ui/button/Button.vue';
import { Tables } from '@/types/supabase';
import { Icon } from '@iconify/vue';

interface Props{
  item: Tables<'codes'>
}

defineProps<Props>();
</script>

<template>
  <div class="group/card ">
    <div
      class="border min-h-[190px] border-foreground/40 w-full p-3 rounded-md flex flex-col gap-5 relative"
    >
      <div class=" absolute -top-2 -right-2 z-20">
        <MenuOptionsCard :item="item">
          <Button
            class="size-8 p-1 border border-foreground/50 hover:border-foreground !rounded"
            variant="outline"
          >
            <Icon
              icon="mi:options-vertical"
              class="size-5"
            />
          </Button>
        </MenuOptionsCard>
      </div>

      <div
        class="w-full rounded h-[100px] bg-gradient-to-tl from-secondary/50 via-secondary to-secondary/50 opacity-80 group-hover/card:opacity-100 p-2"
      >
        <pre
          class="text-xs text-nowrap overflow-hidden line-clamp-5 select-none"
        ><code>{{ item.code }}</code></pre>
      </div>

      <label
        v-if="item.description"
        class="group/text cursor-pointer"
      >
        <input
          class="hidden"
          type="checkbox"
        />
        <p
          :class="[
              'line-clamp-2 text-sm leading-normal transition-all',
              'group-has-[:checked]/text:line-clamp-none'
            ]"
        >
          {{ item.description }}
        </p>
      </label>
      <span
        v-else
        class="text-sm opacity-50"
        >No description</span
      >
    </div>
    <div
      class="flex justify-between gap-5 pb-2 px-1 mt-2 opacity-50 group-hover/card:opacity-100 transition-opacity"
    >
      <span
        class="text-xs text-violet-500 font-semibold text-center p-1 "
        >{{ item.theme  }}</span
      >
      <span
        class="text-xs text-orange-500 font-semibold text-center p-1  "
        >{{ item.language  }}</span
      >
    </div>
  </div>
</template>
