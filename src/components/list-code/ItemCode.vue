<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue';
import { Code } from '@/types/code';
import { Icon } from '@iconify/vue';
import { defineProps } from 'vue';
import { useShareCode } from '@/composables/useShareCode';

interface Props{
  item: Code
}

defineProps<Props>();

const handleShare = useShareCode()
</script>

<template>
  <div class="group/card ">
    <div
      class="border min-h-[190px] border-foreground/40 w-full p-3 rounded-md flex flex-col gap-5 relative"
    >
      <div
        class="group-hover/card:opacity-100 opacity-0 transition-all w-fit delay-200 duration-500 group-hover/card:-translate-y-5 translate-y-5 absolute top-0 right-0 z-20"
      >
        <Button
          variant="default"
          size="icon"
          class="!size-8 "
          @click="handleShare({ ...$props.item as Required<Omit<Code, 'id'>> })"
        >
          <Icon
            icon="material-symbols-light:share-outline"
            class="size-5"
          />
        </Button>
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
