<script lang="ts" setup>
import { hasUnits } from "#imports";

const model = defineModel<DishIngridient>({ required: true });

type UnitRule = { units: IngridientUnits; lock: boolean };

const UNIT_RULES: Readonly<Record<string, UnitRule>> = {
  петрушка: { units: "g", lock: true },
  петрушки: { units: "g", lock: true },

  мясо: { units: "kg", lock: true },
} as const;

const ALL_UNITS = ["g", "kg", "ml", "l", "pcs"] as const;

const rule = computed(() => UNIT_RULES[norm(model.value?.title || "")] || null);

watch(rule, (newRule) => {
  if (!newRule) return;
  if (!hasUnits(model.value)) return;

  if (model.value.units !== newRule.units) model.value.units = newRule.units;
});
</script>

<template>
  <DeletableRow as="li">
    <FormInput
      v-model="model.title"
      placeholder="Назва інгредієнта"
      name="title"
      class="col-span-5"
    />
    <FormInput
      v-model="model.amount"
      :type="hasUnits(model) ? 'number' : 'text'"
      :min="hasUnits(model) ? '0' : undefined"
      :placeholder="hasUnits(model) ? '0' : 'за смаком'"
      name="amount"
      :class="hasUnits(model) ? 'col-span-1' : 'col-span-2'"
    />
    <!--  eslint-disable-next-line -->
    <select
      v-if="hasUnits(model)"
      v-model="model.units"
      :disabled="!!rule?.lock"
    >
      <option
        v-for="unit in ALL_UNITS"
        :key="unit"
        :value="unit"
      >
        {{ unit }}
      </option>
    </select>
  </DeletableRow>
</template>
