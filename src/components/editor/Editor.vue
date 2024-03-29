<script setup lang="ts">
import { EditorView } from 'codemirror';
import {  shallowRef, defineEmits } from 'vue';
import { Codemirror } from 'vue-codemirror';

interface Props {
  language: any
  theme: any
  disabled?: boolean
  code: string
}


defineProps<Props>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const view = shallowRef()

const handleReady = (payload:{
  view: EditorView;
  state: any;
  container: HTMLDivElement;
}) => {
  view.value = payload.view
}
</script>

<template>
  <codemirror
    :value="code"
    v-on:change="emit('update:modelValue', $event)"
    :disabled="disabled"
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
