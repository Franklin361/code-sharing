<script setup lang="ts">
import ErrorEditor from '@/components/editor/ErrorEditor.vue';
import LoadingEditor from '@/components/editor/LoadingEditor.vue';
import { Button } from '@/components/ui/button';
import { useCopy } from '@/composables/useCopy';
import { Icon } from '@iconify/vue';
import { defineAsyncComponent } from 'vue';

const Editor = defineAsyncComponent({
  loader: () => import('@/components/editor/Editor.vue'),
  loadingComponent: LoadingEditor,
  errorComponent: ErrorEditor
});

interface Props {
  language:string
  theme:string
  code:string
}
defineProps<Props>()

const handleCopy = useCopy()
</script>

<template>
  <div class="rounded-lg overflow-hidden my-10">
    <header
      class="bg-secondary rounded-t-lg border border-foreground/20 w-full flex gap-2 justify-start items-center p-2"
    >
      <div class="size-3 rounded-full bg-red-500"></div>
      <div class="size-3 rounded-full bg-yellow-500"></div>
      <div class="size-3 rounded-full bg-green-500"></div>
    </header>
    <div class="relative group overflow-hidden">
      <Editor
        :language="language"
        :theme="theme"
        :code="code"
        disabled
      />
      <div
        class="size-fit absolute top-0 right-2 bg-transparent p-2 group-hover:translate-y-0 translate-y-[20px] transition-all ease-in-out"
      >
        <Button
          class="flex justify-center items-center gap-1 group-hover:opacity-100 opacity-0 hover:!opacity-100 delay-100 transition-all"
          @click="handleCopy(code)"
        >
          <Icon
            icon="mdi-light:clipboard"
            class="size-5"
          />
          <span class="text-sm">Copy</span>
        </Button>
      </div>
    </div>
  </div>
</template>
