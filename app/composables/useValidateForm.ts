interface useValidateFormReturn {
  errors: Ref<string[]>;
  validate: () => boolean;
  reset: () => void;
}

export function useValidateForm(
  formData: ComputedRef<FormDish>,
): useValidateFormReturn {
  const errors = ref<string[]>([]);

  function validate() {
    reset();

    const data = formData.value;
    let isValid = true;

    if (!data.displayName.trim()) {
      errors.value.push("Назва страви обов'язкова");
      isValid = false;
    }

    if (!data.description.trim()) {
      errors.value.push("Опис страви обов'язковий");
      isValid = false;
    }

    const validIngredients = data.ingridients.filter(
      (ing) =>
        ing.title.trim() &&
        (typeof ing.amount === "number" ? ing.amount > 0 : ing.amount.trim()),
    );
    if (validIngredients.length === 0) {
      errors.value.push("Потрібно додати хоча б один інгрідієнт");
      isValid = false;
    }

    const hasValidMacros = Object.values(data.macronutrients).some(
      (macro) => macro.amount > 0,
    );
    if (!hasValidMacros) {
      errors.value.push("Потрібно вказати хоча б один макронутрієнт");
      isValid = false;
    }

    return isValid;
  }

  function reset() {
    errors.value = [];
  }

  return { errors, validate, reset };
}
