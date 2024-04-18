<script setup lang="ts">
import { getLanguage, getTheme } from '@/lib/utils';
import { EditorView, basicSetup } from 'codemirror';
import { computed, shallowRef, toRef } from 'vue';
import { Codemirror } from 'vue-codemirror';

interface Props {
  language: any
  theme: any
  disabled?: boolean
  code: string
}

interface Emits {
  (e: 'update:modelValue', value: string): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const codeRef = toRef(props.code)
const view = shallowRef()

const extensions = computed(( ) => {
  return [
    basicSetup,
    getLanguage(props.language)() as any,
    getTheme(props.theme),
    props.disabled ? EditorView.lineWrapping : null,
  ].filter(Boolean)
})

const handleReady = (payload: {
  view: EditorView;
  state: any;
  container: HTMLDivElement;
}) => {
  view.value = payload.view
}
</script>

<template>
  <codemirror
    v-model:model-value="codeRef"
    v-on:change="emit('update:modelValue', $event)"
    :disabled="disabled"
    placeholder="Code goes here..."
    :class="disabled && 'cm-disabled'"
    :style="{ minHeight: disabled ? 'auto' : '40dvh' }"
    :autofocus="!disabled"
    :indent-with-tab="true"
    :tab-size="2"
    :extensions="extensions"
    @ready="handleReady"
  />
</template>

<style>
.cm-content {
  font-size: 0.9rem;
}

.cm-scroller {
  min-height: 40dvh;
}

.cm-disabled .cm-content {
  @apply lg:text-[1.1rem] md:text-base text-sm
}



.cm-disabled .cm-scroller {
  min-height: auto;
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.cm-disabled .cm-activeLine,
.cm-disabled .cm-activeLineGutter {
  background: transparent !important;
  user-select: none !important;
  pointer-events: none !important;
}
</style>
