<script lang="ts" setup>
const { label, as = "div" } = defineProps<{
  label: string;
  as?: "div" | "li";
}>();

const id = useId();
provide("input-id", id);
</script>

<template>
  <component
    :is="as"
    class="flex items-center justify-between gap-4"
  >
    <label
      :for="id"
      class="font-bad-script text-lg whitespace-nowrap"
    >
      {{ label }}
    </label>

    <slot />
  </component>
</template>
