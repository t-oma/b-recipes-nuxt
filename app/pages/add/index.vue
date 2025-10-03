<script lang="ts" setup>
let lastID = 1;
const ingridients = ref<(DishIngridient & { id: string })[]>([
  {
    id: String(lastID),
    title: "",
    amount: 0,
    units: "g",
  },
]);

const addIngredient = () => {
  ingridients.value.push({
    id: String(++lastID),
    title: "",
    amount: 0,
    units: "g",
  });
};
</script>

<template>
  <main class="flex flex-1 flex-col py-4">
    <PageHeading text="Додаваня нової страви" />

    <div class="p-4">
      <Form>
        <FormField label="Назва страви">
          <FormInput
            type="text"
            name="title"
            placeholder="Чахохбілі"
            required
          />
        </FormField>
        <FormField label="Опис страви">
          <FormTextarea
            type="text"
            name="description"
            placeholder="Грузинское блюдо..."
            required
          />
        </FormField>
        <div class="flex flex-col gap-2">
          <IngridientRow v-model="ingridients[0]!" />

          <button
            type="button"
            class="bg-accent-background inline-flex items-center justify-center rounded-2xl p-2"
            @click="addIngredient"
          >
            Add ingridient
          </button>
        </div>
      </Form>
    </div>
  </main>
</template>
