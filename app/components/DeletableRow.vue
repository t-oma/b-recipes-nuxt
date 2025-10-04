<script lang="ts" setup>
defineEmits<{
  delete: [];
}>();


defineProps<{
  as: "li" | "div";
}>();
</script>

<template>
  <component
    :is="as"
    class="grid grid-cols-8 items-center gap-2"
  >
    <slot />

    <button
      type="button"
      class="inline-flex h-full items-center justify-center rounded-lg text-red-500 transition-colors hover:bg-red-50 hover:text-red-700 active:bg-red-100"
      title="Видалити інгредієнт"
      @click="$emit('delete')"
    >
      <Icon
        name="lucide:trash-2"
        size="20"
      />
    </button>
  </component>
</template>
