<script lang="ts" setup>
import { InstagramIcon, YouTubeIcon } from "vue3-simple-icons";
import { computed } from "vue";

export type BadgeSources = "youtube" | "instagram";

// Деструктурируем props, можно задать дефолты прямо здесь (Vue 3.3+)
const {
  sourceName,
  link,
  newTab = true,
} = defineProps<{
  sourceName: BadgeSources;
  link: string;
  /** Открывать в новой вкладке (по умолчанию — да) */
  newTab?: boolean;
}>();

// Мапы меток и компонентов-иконок
const LABEL: Record<BadgeSources, string> = {
  youtube: "YouTube",
  instagram: "Instagram",
};
const ICON = {
  youtube: YouTubeIcon,
  instagram: InstagramIcon,
} as const;

const IconComponent = computed(() => ICON[sourceName]);

// Простейшая «санитизация» href: разрешим только http/https
const sanitizedHref = computed(() => (/^https?:\/\//i.test(link) ? link : "#"));

// Для target=_blank добавляем rel=noopener noreferrer (безопасность)
const relValue = computed(() =>
  newTab ? "noopener noreferrer external" : "external",
);
</script>

<template>
  <a
    :href="sanitizedHref"
    class="bg-accent-background hover:bg-muted-background inline-flex w-full items-center justify-center gap-4 truncate rounded-2xl px-2 py-1"
    :target="newTab ? '_blank' : undefined"
    :rel="relValue"
    :title="LABEL[sourceName]"
  >
    <component
      :is="IconComponent"
      size="20"
      aria-hidden="true"
    />
    <span class="truncate">{{ LABEL[sourceName] }}</span>
  </a>
</template>
