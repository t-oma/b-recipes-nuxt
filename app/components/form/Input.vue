<script lang="ts" setup>
import type { InputHTMLAttributes } from "vue";

const model = defineModel<string | number>();

const props = withDefaults(
  defineProps<{
    type?: InputHTMLAttributes["type"];
    name: string;
    placeholder?: string;
    required?: boolean;
  }>(),
  {
    type: "text",
    placeholder: "Введіть текст",
  },
);

// берём то, что дали сверху, или генерим своё
const providedId = inject<string | null>("input-id", null);
const generatedId = useId();
const id = computed(() => providedId ?? generatedId); // ✅ всегда будет id
</script>

<template>
  <input
    :id
    v-bind="props"
    v-model="model"
    class="bg-accent-background rounded-lg p-1 px-2"
  />
</template>
