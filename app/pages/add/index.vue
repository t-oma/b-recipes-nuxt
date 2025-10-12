<script lang="ts" setup>
const displayName = ref<string>("");
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
    amount: 0,
  },
  fats: {
    amount: 0,
  },
  carbs: {
    amount: 0,
  },
});

const isSubmitting = ref(false);

const formData = computed(() => ({
  displayName: displayName.value,
  description: description.value,
  ingridients: ingridients.value,
  macronutrients: macronutrients.value,
  image: {
    src: "",
  },
  steps: [],
}));

const { errors, validate, reset } = useValidateForm(formData);

async function handleSubmit() {
  if (!validate()) {
    return;
  }

  isSubmitting.value = true;
  reset();

  try {
    const dish = {
      title: slugify(displayName.value.trim()),
      description: description.value.trim(),
      ingridients: ingridients.value.filter(
        (ing) =>
          ing.title.trim() &&
          (typeof ing.amount === "number" ? ing.amount > 0 : ing.amount.trim()),
      ),
      macronutrients: macronutrients.value,
      image: {
        alt: slugify(displayName.value.trim()),
        src: "/images/chakhokhbili.png", // Default image
      },
      displayName: displayName.value.trim(),
      steps: [],
    };

    const response = await $fetch("/api/dishes", {
      method: "POST",
      body: dish,
    });

    await navigateTo(`/${createLink(response)}`);
  } catch (_error) {
    errors.value.push("Помилка при створенні страви. Спробуйте ще раз.");
  }
}
</script>

<template>
  <main class="flex flex-1 flex-col gap-4 p-4">
    <PageHeading text="Додаваня нової страви" />

    <div class="bg-card space-y-4 rounded-2xl p-4 shadow-xs">
      <Form>
        <FormField label="Назва страви">
          <FormInput
            v-model="displayName"
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

      <div
        v-if="errors.length"
        class="rounded-lg bg-red-50 p-4 text-red-800"
      >
        <ul class="list-inside list-disc">
          <li
            v-for="error in errors"
            :key="error"
          >
            {{ error }}
          </li>
        </ul>
      </div>

      <button
        type="button"
        class="bg-accent-background inline-flex rounded-2xl px-6 py-2 disabled:opacity-50"
        :disabled="isSubmitting"
        @click="handleSubmit"
      >
        {{ isSubmitting ? "Створюється..." : "Відправити" }}
      </button>
    </div>
  </main>
</template>
