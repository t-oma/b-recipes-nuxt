<script setup lang="ts">
const route = useRoute();
const id = computed(() => {
  const link = route.params.id;
  if (!link) return undefined;

  if (Array.isArray(link)) return undefined;

  const linkParts = link.split("-");
  const idFromlink = linkParts[linkParts.length - 1]!;
  return idFromlink;
});

const {
  data: dish,
  status,
  error,
} = await useFetch<AppDish>(() => `/api/dishes/${id.value}`);

const steps = ref<DishStepWithCompleted[]>(
  dish.value!.steps.map((step, index) => ({
    ...step,
    id: `step-${index}`,
    completed: false,
  })),
);
</script>

<template>
  <main class="flex flex-1 flex-col space-y-4 py-4">
    <div
      v-if="status === 'pending'"
      class="flex flex-1 items-center justify-center"
    >
      <p>Loading...</p>
    </div>

    <div
      v-else-if="error"
      class="flex flex-1 items-center justify-center"
    >
      <p>{{ error.message || "Не вдалося завантажити рецепт" }}</p>
    </div>

    <template v-else-if="dish">
      <div
        class="bg-card mx-4 flex items-center justify-center rounded-xl p-2 shadow-xs"
      >
        <h1 class="font-caveat text-4xl">{{ dish.dislayName }}</h1>
      </div>
      <div class="bg-card mx-4 rounded-lg p-4 shadow-xs">
        <DishImgFigure :dish />

        <div class="flex py-2">
          <p>{{ dish.description }}</p>
        </div>

        <div class="flex gap-1">
          <DishMacros
            :dish-title="dish.dislayName"
            :macronutrients="dish.macronutrients"
          />
        </div>

        <DishIngridients :ingridients="dish.ingridients" />
        <hr class="border-border" />

        <div class="flex flex-col py-2">
          <DishStepsProgress :steps />
          <DishTimeProgress :steps />

          <DishSteps :steps />
        </div>

        <div class="flex gap-2 py-4">
          <button
            type="button"
            class="border-border inline-flex items-center justify-center gap-2 rounded-md border px-4 py-2"
          >
            <Icon
              name="lucide:printer"
              class=""
              size="16"
            />
            <span>PDF</span>
          </button>
          <button
            type="button"
            class="border-border inline-flex items-center justify-center gap-2 rounded-md border px-4 py-2"
          >
            <Icon
              name="lucide:clipboard-list"
              class=""
              size="16"
            />
            <span>Інструкція</span>
          </button>
        </div>
      </div>
    </template>

    <div
      v-else
      class="flex flex-1 items-center justify-center"
    >
      <p class="font-caveat text-4xl font-medium">Рецепт не знайдено.</p>
    </div>
  </main>
</template>
