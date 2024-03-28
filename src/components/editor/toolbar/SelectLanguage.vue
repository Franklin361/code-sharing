<script setup lang="ts">
import { ref } from 'vue'
import { Check, ChevronsUpDown } from 'lucide-vue-next'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

interface Props {
  list: { value: string, label:string }[],
  placeholder:string
  notFoundLabel:string
}

defineProps<Props>()

const open = ref(false)
const value = ref('')
</script>

<template>
  <Popover v-model:open="open">
    <PopoverTrigger as-child>
      <Button
        variant="outline"
        role="combobox"
        :aria-expanded="open"
        class="w-[200px] justify-between hover:border-primary"
        :class="open ? 'border-primary' : ''"
      >
        {{ value
          ? list.find((item) => item.value === value)?.label
          : placeholder }}
        <ChevronsUpDown class="ml-2 h-4 w-4 shrink-0 opacity-50" />
      </Button>
    </PopoverTrigger>
    <PopoverContent class="w-[200px] p-0">
      <Command>
        <CommandInput
          class="h-9"
          :placeholder="placeholder"
        />
        <CommandEmpty>{{ notFoundLabel }}</CommandEmpty>
        <CommandList>
          <CommandGroup>
            <CommandItem
              v-for="item in list"
              :key="item.value"
              :value="item.value"
              @select="(ev) => {
                if (typeof ev.detail.value === 'string') {
                  value = ev.detail.value
                }
                open = false
              }"
            >
              {{ item.label }}
              <Check
                :class="cn(
                  'ml-auto h-4 w-4',
                  value === item.value ? 'opacity-100' : 'opacity-0',
                )"
              />
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </PopoverContent>
  </Popover>
</template>
