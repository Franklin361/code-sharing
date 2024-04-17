<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tables } from '@/types/supabase';
import { Icon } from '@iconify/vue';

interface Props {
  description:string
  profile?:Tables<'profiles'>
}
defineProps<Props>()
</script>

<template>
  <div
    class="p-4 text-lg my-5 mt-10 text-white/90 rounded-md  relative custom-animation bg-gradient-to-r from-violet-900 via-violet-800 to-violet-700"
  >
    <div
      v-if="profile?.avatar && profile.name"
      class="flex items-center gap-4 flex-row-reverse absolute -top-4 right-5 bg-background pl-3 rounded-full border-2 border-violet-900"
    >
      <Avatar class="size-8">
        <AvatarImage
          :src="profile.avatar"
          :alt="profile.name"
        />
        <AvatarFallback>
          {{ profile.name.slice(0,2) }}
        </AvatarFallback>
      </Avatar>

      <span class="text-sm opacity-80 font-medium">{{ profile.name }}</span>
    </div>
    <Icon
      icon="material-symbols-light:info"
      class="absolute -top-5 right-0 size-8"
      v-else
    />
    <span class="text-sm absolute -top-7 left-1 opacity-60"
      >Description about the code</span
    >
    <p class="text-[15px] font-semibold">{{ description }}</p>
  </div>
</template>

<style scoped>
.custom-animation {
  animation: custom-animation 1s ease 1s 3;
}

@keyframes custom-animation {
  0% { opacity: 1; }
  50% { opacity: 0.5; }
  100% { opacity: 1;}
}
</style>
