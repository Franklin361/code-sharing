<script setup lang="ts">
import SelectLanguage from '@/components/editor/toolbar/SelectLanguage.vue'

const configLanguages = {
  list: [
    { value: 'js', label: 'JavaScript' },
    { value: 'ts', label: 'TypeScript' },
    { value: 'vue', label: 'Vue' },
    { value: 'html', label: 'HTML' },
    { value: 'css', label: 'CSS' },
    { value: 'jsx', label: 'JSX' },
  ],
  placeholder: 'Select a language...',
  notFoundLabel: 'No language supported'
}

const configThemes = {
  list: [
    { value: 'dracula', label: 'Dracula' },
    { value: 'one-dark', label: 'One Dark' },
  ],
  placeholder: 'Select a theme...',
  notFoundLabel: 'No theme supported'
}
</script>

<template>
  <div
    class="border p-2 px-5 flex items-center justify-between rounded-md my-5 bg-gradient-to-l from-black to-card via-secondary border-white/30 sticky top-0 left-0"
  >
    <span class="font-mono font-semibold">ToolBar</span>
    <div class="flex gap-5 items-center">
      <SelectLanguage v-bind="configLanguages" />
      <SelectLanguage v-bind="configThemes" />
    </div>
  </div>
</template>
