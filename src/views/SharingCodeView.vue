<script setup lang="ts">
import { defineAsyncComponent, ref, shallowRef } from 'vue';
import ErrorEditor from '@/components/editor/ErrorEditor.vue';
import LoadingEditor from '@/components/editor/LoadingEditor.vue';
import { getLanguage, getTheme } from '@/lib/utils';
import { useRoute } from 'vue-router';
import { Button } from '@/components/ui/button';
import { Icon } from '@iconify/vue';
import { useToast } from '@/components/ui/toast/use-toast'


const route = useRoute()
const {toast} = useToast()
const theme = shallowRef(getTheme(route.query.theme as string));
const language = ref(getLanguage(route.query.lang as string));
const code = ref(route.params.code as string);

const handleCopy = async() => {
  try {

    await window.navigator.clipboard.writeText(code.value);
    toast({
      title: 'Code copied to your clipboard!',
      duration: 2000,
      class: 'toast-success'
    })
  } catch (error) {
    console.log(error)
    toast({
      title: 'It was an error, try later',
      duration: 2000,
      class: 'toast-error'
    })
  }
}

const Editor = defineAsyncComponent({
  loader: () => import('@/components/editor/Editor.vue'),
  loadingComponent: LoadingEditor,
  errorComponent: ErrorEditor
});
</script>

<template>
  <main class="px-8 max-w-5xl mx-auto">
    <div>Sharing code</div>

    <div class="rounded-lg overflow-hidden">
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
          class="size-full absolute top-0 left-0 bg-transparent flex justify-end p-5 group-hover:translate-y-0 translate-y-full transition-all ease-in-out"
        >
          <Button
            class="flex justify-center items-center gap-1 group-hover:opacity-100 opacity-0 hover:!opacity-100 delay-100 transition-all"
            @click="handleCopy"
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
  </main>
</template>
