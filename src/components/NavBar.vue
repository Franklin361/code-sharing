<script setup lang="ts">
import ModeToggle from '@/components/ModeToggle.vue';
import ButtonGitHub from '@/components/auth/ButtonGitHub.vue';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Button from '@/components/ui/button/Button.vue';
import useAuth from '@/composables/useAuth.ts';
import { RouteNames } from '@/router/main';
import { Icon } from '@iconify/vue';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const { loading, session, handleSignOut } = useAuth()

const route = useRoute()

const titles = {
  [RouteNames.HOME]: 'Your codes 🎉',
  [RouteNames.EDITOR]: 'Editor ✏️',
  [RouteNames.SHARING_CODE]: 'Code shared 🔗',
  [RouteNames.EDIT_CODE]: 'Update code 📝',
  [RouteNames.SHARING_ANON_CODE]: 'Instant code shared 🔗',
}
const titleSelected = computed(() => route.name && (titles as any)[route.name.toString()])
</script>

<template>
  <span
    v-if="!!titleSelected"
    class="font-bold  opacity-80 fixed bottom-5 left-5 block"
    >{{ titleSelected }}</span
  >

  <nav
    class="flex items-center gap-10 justify-between border-b p-3 px-5 shadow-xl shadow-black/20 dark:bg-gradient-to-l from-purple-700/70 to-violet-900/70 sticky top-0 left-0 z-30 backdrop-blur-xl"
  >
    <span class=" flex-1">Note Code</span>

    <div class="flex gap-3">
      <router-link :to="{name: RouteNames.HOME}">
        <Button class="size-8 grid place-items-center ">
          <Icon
            icon="lucide:home"
            class="size-5"
          />
        </Button>
      </router-link>
      <router-link :to="{name: RouteNames.EDITOR}">
        <Button class="size-8 grid place-items-center ">
          <Icon
            icon="gala:editor"
            class="size-5"
          />
        </Button>
      </router-link>
    </div>

    <div class="flex items-center gap-5 justify-end  flex-1">
      <div
        v-if="loading"
        class="inline-block size-5 animate-spin rounded-full border-2 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
        role="status"
      ></div>

      <template v-else>
        <ButtonGitHub v-if="!session" />
        <div
          v-else
          class="flex items-center gap-5"
        >
          <div class="flex items-center gap-5">
            <Avatar>
              <AvatarImage
                :src="session.user.user_metadata.avatar_url"
                :alt="session.user.user_metadata.name"
              />
              <AvatarFallback
                >{{ (session.user.user_metadata.user_name as string).slice(0,2) }}</AvatarFallback
              >
            </Avatar>
            <span
              class="text-sm font-semibold"
              >{{ session.user.user_metadata.user_name }}</span
            >
          </div>

          <Button
            variant="destructive"
            @click="handleSignOut"
            >Sign out</Button
          >
        </div>
      </template>

      <ModeToggle />
    </div>
  </nav>
</template>
