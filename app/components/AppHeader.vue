<script setup lang="ts">
const links: { href: string; label: string }[] = [
  {
    label: "Страви",
    href: "/",
  },
  {
    label: "Нова страва",
    href: "/add",
  },
];
</script>

<template>
  <header class="flex flex-col">
    <div class="flex items-center justify-between p-2">
      <NuxtLink
        to="/"
        class="inline-flex items-center gap-1"
      >
        <Icon
          name="lucide:beef"
          size="24"
        />
        <span class="text-lg font-bold"> My recipes </span>
      </NuxtLink>
      <button
        class="active:bg-muted-background hover:bg-accent-background inline-flex items-center rounded-xl p-2"
      >
        <Icon
          name="lucide:user"
          size="24"
        />
      </button>
    </div>

    <hr class="border-border" />

    <nav class="p-2">
      <ul class="font-caveat flex justify-evenly">
        <li
          v-for="link in links"
          :key="link.href"
          class="text-2xl font-medium transition-transform hover:scale-110"
        >
          <NuxtLink :to="'#' + link.href">{{ link.label }}</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
