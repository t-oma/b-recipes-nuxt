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

const deleteIngredient = (index: number) => {
  if (ingridients.value.length > 1) {
    ingridients.value.splice(index, 1);
  }
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
        <section class="flex flex-col gap-2">
          <h2 class="font-bad-script text-lg">Інгрідієнти:</h2>
          <ul class="space-y-2">
            <IngridientRow
              v-for="(ingridient, idx) in ingridients"
              :key="ingridient.id"
              v-model="ingridients[idx]!"
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
        <section class="flex flex-col gap-2">
          <h2 class="font-bad-script text-lg">Макронутрієнти:</h2>
          <ul class="space-y-2">
            <li>
              <FormField label="Білки">
                <FormInput
                  type="number"
                  placeholder="0"
                  name="proteins"
                />
              </FormField>
            </li>
            <li>
              <FormField label="Жири">
                <FormInput
                  type="number"
                  placeholder="0"
                  name="fats"
                />
              </FormField>
            </li>
            <li>
              <FormField label="Вуглеводи">
                <FormInput
                  type="number"
                  placeholder="0"
                  name="carbs"
                />
              </FormField>
            </li>
          </ul>
        </section>
      </Form>
    </div>
  </main>
</template>
