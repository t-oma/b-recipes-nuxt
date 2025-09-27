export const dishes = [
  {
    id: "123abc456def",
    image: {
      alt: "Чахохбілі",
      src: "/images/chakhokhbili.png",
    },
    title: "Chakhokhbili",
    dislayName: "Чахохбілі",
    description:
      "Классическое грузинское блюдо: тушёная курица с томатами, луком и специями. Высокий белок для мышц, тёплое согревающее блюдо для осени.",
    macronutrients: [
      {
        displayName: "Білки",
        amount: 48,
      },
      {
        displayName: "Жири",
        amount: 20,
      },
      {
        displayName: "Вуглеводи",
        amount: 22,
      },
    ],
    ingridients: [
      {
        title: "Курячі стегна без шкіри",
        amount: 600,
        units: "г.",
      },
      {
        title: "Цибуля ріпчаста",
        amount: 300,
        units: "г.",
      },
      {
        title: "Помідори стиглі (або томати у власному соку)",
        amount: 500,
        units: "г.",
      },
      {
        title: "Перець солодкий",
        amount: 200,
        units: "г.",
      },
      {
        title: "Часник",
        amount: 4,
        units: "зубчики",
      },
      {
        title: "Кінза свіжа",
        amount: 20,
        units: "г.",
      },
      {
        title: "Петрушка свіжа",
        amount: 20,
        units: "г.",
      },
      {
        title: "Олія оливкова",
        amount: 200,
        units: "г.",
      },
      {
        title: "Сіль, перець, хмелі-сунелі",
        amount: "за смаком",
      },
    ],
    steps: [
      {
        durationSec: 10 * 60,
        description:
          "Подготовьте продукты: снимите кожу с бёдер, обсушите, нарежьте лук полукольцами, перец соломкой, помидоры кубиком.",
      },
      {
        durationSec: 8 * 60,
        description: "Обжарьте бёдра до лёгкой румяности на сухой сковороде.",
      },
      {
        durationSec: 5 * 60,
        description: "Добавьте лук, тушите до мягкости.",
      },
      {
        durationSec: 2 * 60,
        description: "Вмешайте помидоры, перец, чеснок и специи.",
      },
      {
        durationSec: 20 * 60,
        description: "Тушите под крышкой до мягкости",
      },
      {
        durationSec: 7 * 60,
        description: "Откройте крышку и выпарите до нужной густоты.",
      },
      {
        durationSec: 3 * 60,
        description: "Вмешайте зелень и дайте настояться. ",
      },
    ],
  },
];
