export type Macronutrient = {
  displayName: string;
  amount: number;
};

export type IngridientUnits = "g" | "kg" | "ml" | "l" | "pcs";

export type DishIngridient =
  | {
      title: string;
      amount: number;
      units: Units;
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
  macronutrients: Macronutrient[];
  ingridients: DishIngridient[];
  steps: DishStep[];
};
