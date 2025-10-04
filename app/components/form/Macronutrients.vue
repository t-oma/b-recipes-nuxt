<script lang="ts" setup>
const model = defineModel<DishMacronutrients>({ required: true });
</script>

<template>
  <section class="flex flex-col gap-2">
    <h2 class="font-bad-script text-lg">Макронутрієнти:</h2>

    <ul class="space-y-2">
      <FormField
        v-for="(macro, name) in model"
        :key="name"
        :label="macro.displayName"
        as="li"
      >
        <FormInput
          v-model="model[name].amount"
          type="number"
          placeholder="0"
          :name="name"
        />
      </FormField>
    </ul>
  </section>
</template>
