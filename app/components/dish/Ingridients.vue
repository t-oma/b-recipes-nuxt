<script setup lang="ts">
import gsap from "gsap";

const props = defineProps<{
  ingridients: DishIngridient[];
}>();

const formatIngridient = (ingr: DishIngridient) => {
  if (hasUnits(ingr)) {
    return `${ingr.title} - ${ingr.amount} ${ingr.units}`;
  } else {
    return `${ingr.title} - ${ingr.amount}`;
  }
};

const isOpen = ref(false);
const detailsEl = ref<HTMLDetailsElement | null>(null);
const panel = ref<HTMLDivElement | null>(null);

// let ctx: gsap.Context;

// onMounted(() => {
//     ctx = gsap.context(() => {
//         if (panel.value) gsap.set(panel.value, { height: 0, opacity: 0 });
//     }, panel);
// });

// onUnmounted(() => {
//     ctx?.revert();
// });

async function openPanel() {
  isOpen.value = true;
  await nextTick();
  const el = panel.value!;

  gsap.fromTo(
    el,
    { height: 0, opacity: 0 },
    {
      height: el.scrollHeight,
      opacity: 1,
      ease: "power2.out",
      duration: 0.28,
      onComplete: () => {
        gsap.set(el, { height: "auto" });
      },
    },
  );
}

function closePanel() {
  const el = panel.value!;
  gsap.to(el, {
    height: 0,
    opacity: 0,
    ease: "power2.in",
    duration: 0.24,
    onComplete: () => {
      isOpen.value = false;
    },
  });
}

function toggle() {
  if (isOpen.value) closePanel();
  else openPanel();
}
</script>

<template>
  <details
    ref="detailsEl"
    :open="isOpen"
  >
    <summary
      class="flex cursor-pointer items-center gap-2 py-4 font-medium"
      @click.prevent="toggle"
    >
      <Icon
        name="lucide:arrow-right"
        class="transition-transform duration-[250ms]"
        :class="{ 'rotate-90': isOpen }"
      />
      <span> Інгрідієнти </span>
    </summary>

    <ul
      ref="panel"
      class="list-disc overflow-hidden pb-4 pl-10 will-change-[height,opacity]"
    >
      <li
        v-for="ingridient in ingridients"
        :key="ingridient.title"
      >
        <p>{{ formatIngridient(ingridient) }}</p>
      </li>
    </ul>
  </details>
</template>
