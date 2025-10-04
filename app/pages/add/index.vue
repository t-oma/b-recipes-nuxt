<script lang="ts" setup>
const ingridients = ref<DishIngridient[]>([
  {
    title: "",
    amount: 0,
    units: "g",
  },
]);

const macronutrients = ref<DishMacronutrients>({
  proteins: {
    displayName: "Білки",
    amount: 0,
  },
  fats: {
    displayName: "Жири",
    amount: 0,
  },
  carbs: {
    displayName: "Вуглеводи",
    amount: 0,
  },
});
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
        <FormIngridiens v-model="ingridients" />
        <FormMacronutrients v-model="macronutrients" />
      </Form>
    </div>
  </main>
</template>
