export type Macronutrient = {
  displayName: string;
  amount: number;
};

export type DishIngridient = {
  title: string;
} & (
  | {
      amount: number;
      units: string;
    }
  | {
      amount: string;
    }
);

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
  dislayName: string;
  description: string;
  macronutrients: Macronutrient[];
  ingridients: DishIngridient[];
  steps: DishStep[];
};
