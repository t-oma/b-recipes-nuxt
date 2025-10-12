<script lang="ts" setup>
import { macroDisplayName } from "~/utils/macros";

const model = defineModel<DishMacronutrients>({ required: true });
</script>

<template>
  <section class="flex flex-col gap-2">
    <h2 class="font-bad-script text-lg">Макронутрієнти:</h2>

    <ul class="space-y-2">
      <FormField
        v-for="(_macro, name) in model"
        :key="name"
        :label="macroDisplayName(name)"
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
