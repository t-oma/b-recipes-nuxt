<script lang="ts" setup>
defineProps<{ text: string }>();
</script>

<template>
  <div
    class="bg-card mx-4 flex items-center justify-center rounded-xl p-2 shadow-xs"
  >
    <h1 class="font-caveat text-4xl">{{ text }}</h1>
  </div>
</template>
