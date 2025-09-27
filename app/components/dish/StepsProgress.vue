<script lang="ts" setup>
const { steps } = defineProps<{
  steps: DishStepWithCompleted[];
}>();

const stepsCompleted = computed(
  () => steps.filter((step) => step.completed).length,
);
const percent = computed(() =>
  steps.length ? Math.round((stepsCompleted.value / steps.length) * 100) : 0,
);
</script>

<template>
  <div class="flex items-center gap-4 p-2">
    <span class="whitespace-nowrap">
      <span>
        {{ stepsCompleted }}
      </span>
      / {{ steps.length }}
    </span>

    <ProgressBar
      :now="percent"
      thumb-color="bg-blue-600"
      label="Виконані кроки приготування"
    />
  </div>
</template>
