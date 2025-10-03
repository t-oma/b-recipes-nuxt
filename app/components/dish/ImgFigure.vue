<script lang="ts" setup>
defineProps<{
  dish: AppDish;
}>();
</script>

<template>
  <figure>
    <img
      :src="dish.image.src"
      :alt="dish.image.alt"
      class="w-full rounded-lg object-contain"
    />
    <figcaption class="sr-only">{{ dish.dislayName }}</figcaption>
  </figure>
</template>
