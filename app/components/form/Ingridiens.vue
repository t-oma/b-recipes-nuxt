<script lang="ts" setup>
const model = defineModel<DishIngridient[]>({ required: true });

const addIngredient = () => {
  model.value.push({
    title: "",
    amount: 0,
    units: "g",
  });
};

const deleteIngredient = (index: number) => {
  if (model.value.length > 1) {
    model.value.splice(index, 1);
  }
};
</script>

<template>
  <section class="flex flex-col gap-2">
    <h2 class="font-bad-script text-lg">Інгрідієнти:</h2>
    <ul class="space-y-2">
      <IngridientRow
        v-for="(_ingridient, idx) in model"
        :key="idx"
        v-model="model[idx]!"
        @delete="deleteIngredient(idx)"
      />
    </ul>

    <button
      type="button"
      class="bg-accent-background inline-flex items-center justify-center rounded-2xl p-2"
      @click="addIngredient"
    >
      Add ingridient
    </button>
  </section>
</template>
