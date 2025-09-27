<script lang="ts" setup>
const { steps } = defineProps<{
  steps: DishStepWithCompleted[];
}>();

const totalSec = computed(() =>
  steps.reduce((sum, step) => sum + (step.durationSec || 0), 0),
);

const spentSec = computed(() =>
  steps.reduce(
    (sum, step) => sum + (step.completed ? step.durationSec || 0 : 0),
    0,
  ),
);

const timePct = computed(() =>
  totalSec.value ? Math.round((spentSec.value / totalSec.value) * 100) : 0,
);

const remainingSec = computed(() =>
  Math.max(0, totalSec.value - spentSec.value),
);

function fmt(sec?: number) {
  const s = Math.max(0, sec ?? 0);
  const h = Math.floor(s / 3600);
  const m = Math.round((s % 3600) / 60);
  if (h > 0) return `${h}:${String(m).padStart(2, "0")} год`;
  return `${m} хв`;
}

const eta = computed(() => {
  return new Date(Date.now() + remainingSec.value * 1000);
});
</script>

<template>
  <div class="flex items-center gap-4 p-2">
    <span class="text-sm whitespace-nowrap">
      {{ fmt(spentSec) }} / {{ fmt(totalSec) }}
    </span>

    <ProgressBar
      :now="timePct"
      label="Прогресс по времени приготовления"
    />

    <span
      class="text-xs whitespace-nowrap text-zinc-500"
      :title="`Залишилось ~ ${fmt(totalSec - spentSec)}`"
    >
      ETA
      <ClientOnly>
        {{ eta.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) }}
      </ClientOnly>
    </span>
  </div>
</template>
