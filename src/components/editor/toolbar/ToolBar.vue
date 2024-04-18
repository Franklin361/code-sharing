<script setup lang="ts">
import SelectLanguage from '@/components/editor/toolbar/SelectLanguage.vue';
import { configLanguages, configThemes } from '@/config';
import { useCodeStore } from '@/store/mainStore';

interface Props {
  defaultTheme?:string
  defaultLanguage?:string
}
defineProps<Props>()
const { onSelectLanguage, onSelectTheme } = useCodeStore()
</script>

<template>
  <div
    class="border p-3 md:px-5 px-3 flex items-center justify-between rounded-md my-5 bg-gradient-to-l from-black to-card via-secondary border-white/30 sticky top-0 left-0 md:flex-row flex-col md:gap-0 gap-2"
  >
    <span class="font-mono font-semibold">ToolBar</span>
    <div
      class="flex md:gap-5 gap-2 items-center md:w-fit w-full md:flex-row flex-col"
    >
      <SelectLanguage
        :list="configLanguages.list"
        :not-found-label="configLanguages.notFoundLabel"
        :placeholder="configLanguages.placeholder"
        :default-value="defaultLanguage || configLanguages.defaultValue"
        :on-select-value="onSelectLanguage"
      />
      <SelectLanguage
        :list="configThemes.list"
        :not-found-label="configThemes.notFoundLabel"
        :placeholder="configThemes.placeholder"
        :default-value="defaultTheme || configThemes.defaultValue"
        :on-select-value="onSelectTheme"
      />
    </div>
  </div>
</template>
