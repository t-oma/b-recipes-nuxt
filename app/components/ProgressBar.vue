<script lang="ts" setup>
withDefaults(
  defineProps<{
    min?: number;
    max?: number;
    now: number;
    label: string;
    thumbColor?: string;
  }>(),
  {
    min: 0,
    max: 100,
    thumbColor: "bg-emerald-500",
  },
);
</script>

<template>
  <div class="relative h-2 w-full overflow-hidden rounded-md bg-zinc-200">
    <span
      class="absolute inset-y-0 left-0 rounded-md transition-[width] duration-500"
      :class="thumbColor"
      role="progressbar"
      :aria-label="label"
      :aria-valuemin="min"
      :aria-valuemax="max"
      :aria-valuenow="now"
      :style="{ width: now + '%' }"
    ></span>
  </div>
</template>
