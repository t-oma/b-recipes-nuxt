<script lang="ts" setup>
const model = defineModel<string | number>();

const props = withDefaults(
  defineProps<{
    name: string;
    placeholder?: string;
    required?: boolean;
    rows?: number;
    cols?: number;
  }>(),
  {
    placeholder: "Введіть текст",
    rows: 4,
    cols: 24,
  },
);

const providedId = inject<string | null>("input-id", null);
const generatedId = useId();
const id = computed(() => providedId ?? generatedId);
</script>

<template>
  <textarea
    :id
    v-bind="props"
    v-model="model"
    class="bg-accent-background rounded-lg p-1 px-2"
  />
</template>
