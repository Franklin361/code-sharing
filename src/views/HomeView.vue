<script setup lang="ts">
import { Button } from '@/components/ui/button';

interface Movie {
  title: string;
  description: string;
  id: string;
  posterImage: string;
  language: 'javascript' | 'html' | 'css' | 'vue' | 'jsx';
  theme: 'dracula' | 'one dark' | 'monokai';
}

const listScreens: Movie[] = [
  {
    title: 'Inception',
    description: 'Un thriller de ciencia ficción que explora el mundo de los sueños',
    id: '001',
    posterImage: 'https://www.gstatic.com/tv/thumb/v22vodart/9010349/p9010349_v_v8_aj.jpg',
    language: 'javascript',
    theme: 'dracula'
  },
  {
    title: 'Interstellar',
    description: 'Una epopeya de ciencia ficción que sigue a un grupo de exploradores en un viaje interestelar',
    id: '002',
    posterImage: 'https://www.gstatic.com/tv/thumb/v22vodart/330459/p330459_v_v8_ab.jpg',
    language: 'html',
    theme: 'one dark'
  },
  {
    title: 'The Dark Knight',
    description: 'Una película de superhéroes basada en el personaje de DC Comics Batman',
    id: '003',
    posterImage: 'https://www.gstatic.com/tv/thumb/v22vodart/173378/p173378_v_v8_ay.jpg',
    language: 'css',
    theme: 'monokai'
  },
  {
    title: 'Fight Club',
    description: 'Una película de culto que explora la alienación y el nihilismo en la sociedad moderna',
    id: '004',
    posterImage: 'https://www.gstatic.com/tv/thumb/v22vodart/20525/p20525_v_v8_ah.jpg',
    language: 'vue',
    theme: 'dracula'
  },
  {
    title: 'The Matrix',
    description: 'Una película de ciencia ficción que plantea preguntas filosóficas sobre la realidad y la percepción',
    id: '005',
    posterImage: 'https://www.gstatic.com/tv/thumb/v22vodart/21048/p21048_v_v8_ad.jpg',
    language: 'jsx',
    theme: 'one dark'
  },
  {
    title: 'Pulp Fiction',
    description: 'Una película de crimen y misterio que entrelaza varias historias',
    id: '006',
    posterImage: 'https://www.gstatic.com/tv/thumb/v22vodart/15603/p15603_v_v8_ad.jpg',
    language: 'javascript',
    theme: 'monokai'
  },
  {
    title: 'The Shawshank Redemption',
    description: 'Un drama carcelario sobre la esperanza y la redención',
    id: '007',
    posterImage: 'https://www.gstatic.com/tv/thumb/v22vodart/594/p594_v_v8_aa.jpg',
    language: 'html',
    theme: 'dracula'
  },
  {
    title: 'Forrest Gump',
    description: 'Una película que sigue la vida de un hombre con un coeficiente intelectual bajo',
    id: '008',
    posterImage: 'https://www.gstatic.com/tv/thumb/v22vodart/15603/p15603_v_v8_ad.jpg',
    language: 'css',
    theme: 'one dark'
  },
  {
    title: 'The Godfather',
    description: 'Un clásico del cine que sigue la historia de una familia de la mafia italiana',
    id: '009',
    posterImage: 'https://www.gstatic.com/tv/thumb/v22vodart/1894/p1894_v_v8_aa.jpg',
    language: 'vue',
    theme: 'monokai'
  },
  {
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    description: 'La primera entrega de la trilogía épica basada en las novelas de J.R.R. Tolkien',
    id: '010',
    posterImage: 'https://www.gstatic.com/tv/thumb/v22vodart/29340/p29340_v_v8_ag.jpg',
    language: 'jsx',
    theme: 'dracula'
  }
];
</script>

<template>
  <main class="px-5">
    <section
      :class="[
        'grid grid-cols-4',
        'gap-8 max-w-5xl mx-auto my-20',
      ]"
    >
      <div
        v-for="(item) in listScreens"
        :key="item.id"
        class="group/card"
      >
        <div
          class="border border-foreground/40 w-full p-3 rounded-md flex flex-col gap-5 relative"
        >
          <div
            class="group-hover/card:opacity-100 opacity-0 transition-all w-fit delay-200 duration-500 group-hover/card:-translate-y-5 translate-y-5 absolute top-0 right-0 z-20"
          >
            <Button
              variant="default"
              size="sm"
              class=""
            >
              <span class="">Share</span>
            </Button>
          </div>

          <div
            class="w-full rounded h-[100px] bg-gradient-to-tl from-secondary/50 via-secondary to-secondary/50 opacity-80 group-hover/card:opacity-100 p-2"
          >
            <pre
              class="text-xs text-wrap line-clamp-5"
            ><code>const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/views/HomeView.vue'),
    name: RouteNames.HOME,
  },
  {
    path: '/editor',
    component: () => import('@/views/EditorView.vue'),
    name: RouteNames.EDITOR,
  },
  {
    path: '/sharing/:code',
    component: () => import('@/views/SharingCodeView.vue'),
    name: RouteNames.SHARING_CODE,
  },
];
</code></pre>
          </div>

          <label class="group/text cursor-pointer">
            <input
              class="hidden"
              type="checkbox"
            />
            <p
              :class="[
              'line-clamp-2 text-sm leading-normal transition-all pepa',
              'group-has-[:checked]/text:line-clamp-none'
            ]"
            >
              {{ item.description }}
            </p>
          </label>
        </div>
        <div
          class="flex justify-between gap-5 pb-2 px-1 mt-2 opacity-50 group-hover/card:opacity-100 transition-opacity"
        >
          <span
            class="text-xs text-violet-500 font-semibold text-center p-1 "
            >{{ item.theme  }}</span
          >
          <span
            class="text-xs text-orange-500 font-semibold text-center p-1  "
            >{{ item.language  }}</span
          >
        </div>
      </div>
    </section>
  </main>
</template>
