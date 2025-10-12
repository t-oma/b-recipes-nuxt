<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    /** нижняя граница диапазона */
    min?: number;
    /** верхняя граница диапазона */
    max?: number;
    /** текущее значение; если null/undefined — indeterminate */
    now?: number | null;
    /** доступное имя, если нет видимого заголовка рядом */
    label?: string;
    /** id видимого заголовка рядом (предпочтительнее label) */
    labelledby?: string;
    /** человекочитаемый текст для a11y (напр. "35 хв із 60") */
    valuetext?: string;
    /** класс заливки шкалы */
    thumbColor?: string;
  }>(),
  {
    min: 0,
    max: 100,
    now: undefined,
    label: undefined,
    labelledby: undefined,
    valuetext: undefined,
    thumbColor: "bg-emerald-500",
  },
);

// нормализация значений и расчёт процента
const normalized = computed(() => {
  const minValue = Number(props.min);
  const rawMax = Number(props.max);
  const maxValue = rawMax > minValue ? rawMax : minValue + 1;

  const current = props.now;
  const isIndeterminate =
    current === null ||
    current === undefined ||
    !Number.isFinite(current);

  const currentValue = isIndeterminate
    ? NaN
    : Math.min(Math.max(Number(current), minValue), maxValue);

  const percentage = isIndeterminate
    ? 0
    : Math.round(((currentValue - minValue) / (maxValue - minValue)) * 100);

  return { minValue, maxValue, currentValue, percentage, isIndeterminate };
});
</script>

<template>
  <div
    class="relative h-2 w-full overflow-hidden rounded-md bg-zinc-200"
    role="progressbar"
    :aria-labelledby="labelledby"
    :aria-label="!labelledby ? label : undefined"
    :aria-valuemin="normalized.minValue !== 0 ? normalized.minValue : undefined"
    :aria-valuemax="
      normalized.maxValue !== 100 ? normalized.maxValue : undefined
    "
    :aria-valuenow="
      !normalized.isIndeterminate ? normalized.currentValue : undefined
    "
    :aria-valuetext="valuetext"
  >
    <span
      class="absolute inset-y-0 left-0 rounded-md transition-[width] duration-500"
      :class="[
        thumbColor,
        normalized.isIndeterminate && 'animate-progress-indeterminate',
      ]"
      :style="{
        width:
          (normalized.isIndeterminate ? '50' : normalized.percentage) + '%',
      }"
      aria-hidden="true"
    />
  </div>
</template>
