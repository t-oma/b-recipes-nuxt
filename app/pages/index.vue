<script setup lang="ts">
useHead({
  titleTemplate(title) {
    return `${title} | Home`;
  },
});

const { data, error, status } = await useFetch<AppDish[]>("/api/dishes");

const dishes = computed(() => {
  return data.value;
});
</script>

<template>
  <main class="flex flex-1 flex-col py-4">
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
      <p>{{ error.message || "Не вдалося завантажити рецепти" }}</p>
    </div>

    <template v-else-if="dishes">
      <div
        class="bg-card mx-4 flex items-center justify-center rounded-xl p-2 shadow-xs"
      >
        <h1 class="font-caveat text-4xl">Найсмачніші страви</h1>
      </div>

      <div class="grid flex-1 grid-cols-1 gap-4 p-4">
        <DishCard
          v-for="dish in dishes"
          :key="dish.id"
          :dish
        />
      </div>
    </template>

    <div
      v-else
      class="flex flex-1 items-center justify-center"
    >
      <p class="font-caveat text-4xl font-medium">Рецепти не знайдено.</p>
    </div>
  </main>
</template>
