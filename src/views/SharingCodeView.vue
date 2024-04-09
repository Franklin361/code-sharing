<script setup lang="ts">
import ErrorEditor from '@/components/editor/ErrorEditor.vue';
import LoadingEditor from '@/components/editor/LoadingEditor.vue';
import { Button } from '@/components/ui/button';
import { useCopy } from '@/composables/useCopy';
import { Icon } from '@iconify/vue';
import { defineAsyncComponent } from 'vue';
import { useRoute } from 'vue-router';


const route = useRoute()
const handleCopy = useCopy()

const Editor = defineAsyncComponent({
  loader: () => import('@/components/editor/Editor.vue'),
  loadingComponent: LoadingEditor,
  errorComponent: ErrorEditor
});
</script>

<template>
  <main class="px-8 max-w-5xl mx-auto">
    <div
      v-if="route.query.description"
      class="p-3 text-lg my-5 mt-10 text-white/90 border rounded-md border-white/50 relative custom-animation"
    >
      <span class="text-sm absolute -top-7 left-1 opacity-60"
        >Description about the code</span
      >
      <p>{{ route.query.description }}</p>
      <Icon
        icon="material-symbols-light:info"
        class="absolute -top-5 right-0 size-8"
      />
    </div>

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
          :language="route.query.lang"
          :theme="route.query.theme"
          :code="(route.params.code as string)"
          disabled
        />
        <div
          class="size-fit absolute top-0 right-2 bg-transparent p-2 group-hover:translate-y-0 translate-y-[20px] transition-all ease-in-out"
        >
          <Button
            class="flex justify-center items-center gap-1 group-hover:opacity-100 opacity-0 hover:!opacity-100 delay-100 transition-all"
            @click="handleCopy(route.params.code as string)"
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

<style scoped>
.custom-animation {
  animation: custom-animation 1s ease 1s 3;
}

@keyframes custom-animation {
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.5;
  }

  100% {
    opacity: 1;
  }
}
</style>
