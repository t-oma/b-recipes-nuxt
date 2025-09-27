import type { DishIngridient } from "./dish";

export function hasUnits(
  ingr: DishIngridient,
): ingr is DishIngridient & { amount: number; units: string } {
  return typeof ingr.amount === "number";
}
