import type { Macronutrients } from "~~/shared/types/dish";

export function macroDisplayName(name: Macronutrients | string): string {
  const macros = {
    fats: "Жири",
    carbs: "Вуглеводи",
    proteins: "Білки",
  };

  return macros[name as Macronutrients];
}
