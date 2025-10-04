<script lang="ts" setup>
const title = ref<string>("");
const description = ref<string>("");

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

function handleSubmit() {
  const dish = {
    title: title.value,
    description: description.value,
    ingridients: ingridients.value,
    macronutrients: macronutrients.value,
  };

  console.log(dish);
}
</script>

<template>
  <main class="flex flex-1 flex-col gap-4 p-4">
    <PageHeading text="Додаваня нової страви" />

    <div class="bg-card space-y-4 rounded-2xl p-4 shadow-xs">
      <Form>
        <FormField label="Назва страви">
          <FormInput
            v-model="title"
            type="text"
            name="title"
            placeholder="Чахохбілі"
            required
          />
        </FormField>
        <FormField label="Опис страви">
          <FormTextarea
            v-model="description"
            name="description"
            placeholder="Грузинское блюдо..."
            required
          />
        </FormField>
        <FormIngridiens v-model="ingridients" />
        <FormMacronutrients v-model="macronutrients" />
      </Form>

      <button
        type="button"
        class="bg-accent-background inline-flex rounded-2xl px-6 py-2"
        @click="handleSubmit"
      >
        Відправити
      </button>
    </div>
  </main>
</template>
