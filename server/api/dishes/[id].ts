import { dishes } from "~~/server/data";

export default defineEventHandler((event) => {
  const id = getRouterParam(event, "id");

  return dishes.find((dish) => dish.id === id);
});
