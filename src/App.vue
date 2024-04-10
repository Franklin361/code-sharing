<script setup lang="ts">
import NavBar from '@/components/NavBar.vue';
import Toaster from '@/components/ui/toast/Toaster.vue';
</script>

<template>
  <NavBar />

  <router-view v-slot="{ Component }">
    <transition
      name="slide"
      mode="out-in"
    >
      <component
        :is="Component"
        :key="$route.fullPath"
      />
    </transition>
  </router-view>
  <Toaster />
</template>

<style>
.slide-enter-active,
.slide-leave-active {
  transition: opacity 1s, transform 1s;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(50px);
}


body:has(.slide-enter-active),
body:has(.slide-leave-active),
html:has(.slide-enter-active),
html:has(.slide-leave-active) {
  overflow: hidden;
}
</style>
