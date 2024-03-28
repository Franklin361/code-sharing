<script setup lang="ts">
import { javascript } from '@codemirror/lang-javascript';
import { oneDark } from '@codemirror/theme-one-dark';
import { EditorView } from 'codemirror';
import { ref, shallowRef } from 'vue';
import { Codemirror } from 'vue-codemirror';

const code = ref(`console.log('Hello, world!')`)
const extensions = [javascript(), oneDark]

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
    v-model="code"
    placeholder="Code goes here..."
    :style="{ height: '400px'}"
    :autofocus="true"
    :indent-with-tab="true"
    :tab-size="2"
    :extensions="extensions"
    @ready="handleReady"
    @change="console.log('change', $event)"
    @focus="console.log('focus', $event)"
    @blur="console.log('blur', $event)"
  />
</template>

<style>
.cm-content {
  font-size: 1.2rem;
}
</style>
