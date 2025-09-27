import type { AppDish } from "../types/dish";

export const createLink = (dish: AppDish) => {
  const escapedTitle = dish.title.replaceAll(" ", "-").toLowerCase();

  return `${escapedTitle}-${dish.id}`;
};
