<script lang="ts" setup>
const { label } = defineProps<{
  label: string;
}>();

const id = useId();
provide("input-id", id);
</script>

<template>
  <div class="flex items-center justify-between gap-4">
    <label
      :for="id"
      class="font-bad-script text-lg whitespace-nowrap"
    >
      {{ label }}
    </label>

    <slot />
  </div>
</template>
