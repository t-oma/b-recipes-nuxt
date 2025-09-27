<script setup lang="ts">
const route = useRoute();
const id = useRouteDishID(route.params.id);

const {
  data: dish,
  status,
  error,
} = await useFetch<AppDish>(() => `/api/dishes/${id}`);

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

      <DishCard :dish>
        <hr class="border-border" />

        <div class="flex flex-col py-2">
          <DishStepsProgress :steps />
          <DishTimeProgress :steps />

          <DishSteps :steps />
        </div>
      </DishCard>
    </template>

    <div
      v-else
      class="flex flex-1 items-center justify-center"
    >
      <p class="font-caveat text-4xl font-medium">Рецепт не знайдено.</p>
    </div>
  </main>
</template>
