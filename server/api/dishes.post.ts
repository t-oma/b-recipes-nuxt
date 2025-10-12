import { dishes } from "../data";

export default defineEventHandler(async (event) => {
  const body = await readBody<FormDish>(event);

  const id = Date.now().toString(36) + Math.random().toString(36).substring(2);
  const title = slugify(body.displayName);

  const newDish: AppDish = {
    id,
    title,
    ...body,
    image: {
      src: body.image.src,
      alt: title,
    },
  };

  dishes.push(newDish);

  return newDish;
});
