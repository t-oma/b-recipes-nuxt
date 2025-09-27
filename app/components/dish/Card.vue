<script setup lang="ts">
const props = defineProps<{
  dish: AppDish;
}>();
</script>

<template>
  <section class="bg-card rounded-lg px-4 shadow-xs">
    <slot name="header" />

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

    <slot />

    <DishActions />
  </section>
</template>
