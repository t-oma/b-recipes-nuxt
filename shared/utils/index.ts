import type { AppDish } from "../types/dish";

export const createLink = (dish: AppDish) => {
  const escapedTitle = dish.title.replaceAll(" ", "-").toLowerCase();

  return `${escapedTitle}-${dish.id}`;
};

export const extractIdFromLink = (link: string) => {
  const linkParts = link.split("-");
  const idFromlink = linkParts[linkParts.length - 1]!;
  return idFromlink;
};
