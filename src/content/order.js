export const orderContent = {
  banner: {
    heading: "Create a plan",
    body: "Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door.",
    backgroundImages: {
      desktop: "./images/plan/desktop/image-hero-blackcup.jpg",
      tablet: "./images/plan/tablet/image-hero-blackcup.jpg",
      mobile: "./images/plan/mobile/image-hero-blackcup.jpg",
    },
  },
  orderProcess: {
    cards: [
      {
        heading: "Pick your coffee",
        listNumber: "01",
        body: "Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.",
      },
      {
        heading: "Choose the frequency",
        listNumber: "02",
        body: "Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.",
      },
      {
        heading: "Receive and enjoy!",
        listNumber: "03",
        body: "We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.",
      },
    ],
  },
  orderForm: {
    fieldsets: [
      {
        heading: "How do you drink your coffee?",
        altHeading: "Preferences",
        id: "preference",
        cards: [
          {
            heading: "Capsule",
            description:
              "Compatible with Nespresso systems and similar brewers",
          },
          {
            heading: "Filtered",
            description:
              "For pour over or drip methods like Aeropress, Chemex, and V60",
          },
          {
            heading: "Espresso",
            description:
              "Dense and finely ground beans for an intense, flavorful experience",
          },
        ],
      },
      {
        heading: "What type of coffee?",
        altHeading: "Bean Type",
        id: "beanType",
        cards: [
          {
            heading: "Single Origin",
            description:
              "Distinct, high quality coffee from a specific family-owned farm",
          },
          {
            heading: "Decaf",
            description:
              "Just like regular coffee, except the caffeine has been removed",
          },
          {
            heading: "Blended",
            description:
              "Combination of two or three dark roasted beans of organic coffees",
          },
        ],
      },
      {
        heading: "How much would you like?",
        altHeading: "Quantity",
        id: "quantity",
        cards: [
          {
            heading: "250g",
            description:
              "Perfect for the solo drinker. Yields about 12 delicious cups",
          },
          {
            heading: "500g",
            description:
              "Perfect option for a couple. Yields about 40 delectable cups.",
          },
          {
            heading: "1000g",
            description:
              "Perfect for offices and events. Yields about 90 delightful cups.",
          },
        ],
      },
      {
        heading: "Want us to grind them?",
        altHeading: "Grind Option",
        id: "grindOption",
        cards: [
          {
            heading: "Wholebean",
            description:
              "Best choice if you cherish the full sensory experience",
          },
          {
            heading: "Filter",
            description:
              "For drip or pour-over coffee methods such as V60 or Aeropress",
          },
          {
            heading: "Cafetiere",
            description:
              "Course ground beans specially suited for french press coffee",
          },
        ],
      },
      {
        heading: "How often should we deliver?",
        altHeading: "Deliveries",
        id: "delivery",
        cards: [
          {
            heading: "Every week",
            description: "per shipment. Includes free first-class shipping.",
          },
          {
            heading: "Every 2 weeks",
            description: "per shipment. Includes free priority shipping.",
          },
          {
            heading: "Every month",
            description: "per shipment. Includes free priority shipping.",
          },
        ],
      },
    ],
    prices: {
      "250g": {
        "Every week": [7.2, 4],
        "Every 2 weeks": [9.6, 2],
        "Every month": [12.0, 1],
      },
      "500g": {
        "Every week": [13.0, 4],
        "Every 2 weeks": [17.5, 2],
        "Every month": [22.0, 1],
      },
      "1000g": {
        "Every week": [22.0, 4],
        "Every 2 weeks": [32.0, 2],
        "Every month": [42.0, 1],
      },
    },
    summary: {
      heading: "Order Summary",
      body: "",
      confirm:
        "Is this correct? You can proceed to checkout or go back to plan selection if something is off. Subscription discount codes can also be redeemed at the checkout. ",
    },
    buttons: { first: "Create my plan!", second: "This is the second button" },
  },
};
