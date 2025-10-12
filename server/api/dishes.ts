import { dishes } from "../data";

export default defineEventHandler(async (_event) => {
  return dishes;
});
