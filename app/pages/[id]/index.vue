<script setup lang="ts">
definePageMeta({
  // верни true — страница валидна; false — Nuxt вернёт 404
  // можно вернуть объект со statusCode/statusMessage
  validate(route) {
    const routeIdParamRaw = route.params.id; // string | string[] | undefined

    // Приводим к строке-«слагу»: если массив (repeatable/catch-all) — берём последний сегмент
    let slug = "";
    if (typeof routeIdParamRaw === "string") {
      slug = routeIdParamRaw;
    } else if (Array.isArray(routeIdParamRaw)) {
      if (routeIdParamRaw.length === 0) return false;
      const last = routeIdParamRaw[routeIdParamRaw.length - 1];
      if (typeof last !== "string" || last.length === 0) return false;
      slug = last;
    } else {
      return false;
    }

    // Требуем форму: что-то (буквы/цифры/дефисы), затем дефис, затем алфанумерик-хвост
    // ^...$ ограничивает всю строку, .test(...) — быстрый boolean
    return /^[A-Za-z0-9-]+-[A-Za-z0-9]+$/.test(slug);
  },
});

// 2) Реактивное и кэширующееся вычисление ID-хвоста
const route = useRoute();

// 1) Берём URL текущего запроса ОДИН раз
const requestURL = useRequestURL(); // возвращает instance URL и работает на SSR/CSR
// 2) Считаем канонический href (origin из requestURL, путь из маршрута)
const canonicalHref = computed(
  () => new URL(route.path, requestURL.origin).href,
);

const absoluteOgImage = computed(() => {
  const src = dish.value?.image?.src;
  if (!src) return undefined;
  // если src уже абсолютный — new URL его не ломает; если относительный — превратит в абсолютный
  return new URL(src, requestURL.origin).href;
});

// 3) Вставляем <link rel="canonical"> в <head>
useHead(() => ({
  link: [{ rel: "canonical", href: canonicalHref.value }],
}));

const id = useRouteDishID();

// данные блюда
const {
  data: dish,
  status,
  error,
} = await useFetch<AppDish>(() => `/api/dishes/${id.value}`, {
  key: () => `dish-${id.value}`, // раздельный кэш/рефетч
  immediate: !!id.value, // не стартуем, пока id не определён
  watch: [id], // повторный запрос при смене id
  // дополнительные опции, если нужно:
  // watch: false, // если не хотим автоматического повторного запроса
  // dedupe: 'cancel', // чтобы отменять дубликаты
  // server: true, lazy: false и др.
});

// шаги (UI-слой: добавляем completed/id)
const { steps } = useDishSteps(dish); // композабл собирает безопасно в watchEffect. :contentReference[oaicite:5]{index=5}

// (по желанию) базовый SEO
// оставляем твои имена полей (displayName и т.п.)

useSeoMeta({
  title: () => dish.value?.displayName ?? "Рецепт",
  description: () => dish.value?.description ?? "Опис рецепту",

  ogTitle: () => dish.value?.displayName ?? "Рецепт",
  ogDescription: () => dish.value?.description ?? "Опис рецепту",
  ogType: "article",
  ogUrl: () => canonicalHref.value, // <— используем каноникал

  twitterCard: "summary_large_image",
  twitterTitle: () => dish.value?.displayName ?? "Рецепт",
  twitterDescription: () => dish.value?.description ?? "Опис рецепту",

  // только абсолютные ссылки на изображения
  ogImage: () => absoluteOgImage.value,
  twitterImage: () => absoluteOgImage.value,
});
</script>

<template>
  <main class="flex flex-1 flex-col space-y-4 p-4">
    <div
      v-if="status === 'pending'"
      class="flex flex-1 items-center justify-center"
    >
      <p>Loading...</p>
    </div>

    <div
      v-else-if="error"
      class="flex flex-1 items-center justify-center"
    >
      <p>{{ error.message || "Не вдалося завантажити рецепт" }}</p>
    </div>

    <template v-else-if="dish">
      <PageHeading :text="dish.displayName" />

      <DishCard :dish>
        <hr class="border-border" />
        <div class="flex flex-col py-2">
          <DishStepsProgress :steps />
          <DishTimeProgress
            :steps
            label-mode="both"
          />
          <DishSteps v-model:steps="steps" />
        </div>
      </DishCard>
    </template>

    <div
      v-else
      class="flex flex-1 items-center justify-center"
    >
      <p class="font-caveat text-4xl font-medium">Рецепт не знайдено.</p>
    </div>
  </main>
</template>
