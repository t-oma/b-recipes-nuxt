<script setup lang="ts">
const props = defineProps<{
  dishTitle: string;
  macronutrients: Macronutrient[];
}>();

const total = props.macronutrients.reduce(
  (acc, macronut) => (acc += macronut.amount),
  0,
);
if (total < 1)
  console.error(
    `total amount of macronutrients in dish ${props.dishTitle} must be greater than 1`,
  );

const macronutrients = props.macronutrients.map((macronut) => ({
  ...macronut,
  rate: Math.round((macronut.amount / total) * 100),
}));
</script>

<template>
  <div
    v-for="macronut in macronutrients"
    :key="macronut.displayName"
    class="bg-card flex flex-1 flex-col gap-2 rounded-lg p-2 shadow-xs"
  >
    <p class="text-xs">
      {{ macronut.displayName }}:
      <b class="text-sm"> {{ macronut.amount }} г </b>
    </p>
    <div
      class="h-1.5 rounded-l-full bg-gradient-to-r from-amber-500 to-amber-200"
      :style="{ width: macronut.rate + '%' }"
      :aria-label="'Співвідношення ' + macronut.displayName + ' в ' + dishTitle"
      :aria-valuemax="total"
      :aria-valuemin="0"
      :aria-valuenow="macronut.rate"
    ></div>
  </div>
</template>
