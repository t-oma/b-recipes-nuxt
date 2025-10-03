import type { DishIngridient, IngridientUnits } from "./dish";

export function hasUnits(
  ingr: DishIngridient,
): ingr is DishIngridient & { amount: number; units: IngridientUnits } {
  return typeof ingr.amount === "number";
}
