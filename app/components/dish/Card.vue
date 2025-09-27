<script setup lang="ts">
const props = defineProps<{
  dish: AppDish;
}>();

const createLink = (dish: AppDish) => {
  const escapedTitle = dish.title.replaceAll(" ", "-").toLowerCase();

  return `${escapedTitle}-${dish.id}`;
};
</script>

<template>
  <section class="bg-card rounded-lg px-4 shadow-xs">
    <div class="flex items-center justify-center p-3">
      <h2 class="font-caveat text-4xl">
        {{ dish.dislayName }}
      </h2>
    </div>

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

    <div class="flex items-center justify-center p-4">
      <NuxtLink
        :to="createLink(dish)"
        class="border-border rounded-lg border p-2"
      >
        Перейти до приготування
      </NuxtLink>
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
  </section>
</template>
