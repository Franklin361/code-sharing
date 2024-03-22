<script setup lang="ts">
  import { javascript } from '@codemirror/lang-javascript';
import { oneDark } from '@codemirror/theme-one-dark';
import { EditorView } from 'codemirror';
import { ref, shallowRef } from 'vue';
import { Codemirror } from 'vue-codemirror';

  const code = ref(`console.log('Hello, world!')`)
  const extensions = [javascript(), oneDark]

  // Codemirror EditorView instance ref
  const view = shallowRef()

  interface Props {
    view: EditorView;
    state: any;
    container: HTMLDivElement;
  }

  const handleReady = (payload:Props) => {
    view.value = payload.view
  }

   // Status is available at all times via Codemirror EditorView
  //  const getCodemirrorStates = () => {
  //       const state = view.value.state
  //       const ranges = state.selection.ranges
  //       const selected = ranges.reduce((r, range) => r + range.to - range.from, 0)
  //       const cursor = ranges[0].anchor
  //       const length = state.doc.length
  //       const lines = state.doc.lines
      // }
</script>

<template>
  <div class="my-10 border">
    <codemirror
      :style="{ height: '400px', fontFamily: 'Comic Neue', fontSize: '20px' }"
      v-model="code"
      placeholder="Code goes here..."
      :autofocus="true"
      :indent-with-tab="true"
      :tab-size="2"
      :extensions="extensions"
      @ready="handleReady"
      @change="console.log('change', $event)"
      @focus="console.log('focus', $event)"
      @blur="console.log('blur', $event)"
    />
  </div>
</template>
