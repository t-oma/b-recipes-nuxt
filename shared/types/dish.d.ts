export type Macronutrient = {
  displayName: string;
  amount: number;
};

export type DishMacronutrients = {
  [key in ["proteins", "fats", "carbs"][number]]: Macronutrient;
};

export type IngridientUnits = "g" | "kg" | "ml" | "l" | "pcs" | "зубчики";

export type DishIngridient =
  | {
      title: string;
      amount: number;
      units: IngridientUnits;
    }
  | {
      title: string;
      amount: string;
    };

export type DishStep = {
  durationSec: number;
  description: string;
};

export type DishStepWithCompleted = DishStep & {
  completed?: boolean;
  id?: string;
};

export type AppDish = {
  id: string;
  image: {
    alt: string;
    src: string;
  };
  title: string;
  displayName: string;
  description: string;
  macronutrients: DishMacronutrients;
  ingridients: DishIngridient[];
  steps: DishStep[];
};
