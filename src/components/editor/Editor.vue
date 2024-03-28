<script setup lang="ts">
import { ref, shallowRef, watch } from 'vue';
import { Codemirror } from 'vue-codemirror';
import { EditorView } from 'codemirror';

import { useCodeStore } from '@/store/mainStore'

import { languages } from '@/config/languages';
import { themes } from '@/config/themes';

const store = useCodeStore()

const language = ref(Object.entries(languages).find( ([key]) => key === store.language)![1])
const theme = shallowRef(Object.entries(themes).find( ([key]) => key === store.theme)![1])

const view = shallowRef()

const handleReady = (payload:{
  view: EditorView;
  state: any;
  container: HTMLDivElement;
}) => {
  view.value = payload.view
}

watch(
  () => store.theme,
  () => {
    theme.value = Object.entries(themes).find( ([key]) => key === store.theme)![1]
  }
)
watch(
  () => store.language,
  () => {
    language.value = Object.entries(languages).find( ([key]) => key === store.language)![1]
  }
)
</script>

<template>
  <codemirror
    v-model="store.code"
    placeholder="Code goes here..."
    :style="{ minHeight: '40dvh'}"
    :autofocus="true"
    :indent-with-tab="true"
    :tab-size="2"
    :extensions="[language(),theme]"
    @ready="handleReady"
  />
</template>

<style>
.cm-content {
  font-size: 0.9rem;
}
</style>
