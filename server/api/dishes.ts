import { dishes } from "../data";

export default defineEventHandler((_event) => {
  return dishes;
});
