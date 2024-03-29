<script setup lang="ts"></script>

<template>
  <main>
    <div>Sharing code</div>
    <pre>
      <code>{{ $route.params.code }}</code>
    </pre>
  </main>
</template>
