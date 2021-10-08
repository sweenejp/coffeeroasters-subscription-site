export const orderContent = {
  banner: {
    heading: "Create a plan",
    body: "Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door.",
    backgroundImages: {
      desktop: "./images/plan/desktop/image-hero-blackcup.svg",
      tablet: "./images/plan/tablet/image-hero-blackcup.svg",
      mobile: "./images/plan/mobile/image-hero-blackcup.svg",
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
        cards: [
          {
            id: "capusle",
            heading: "Capsule",
            description:
              "Compatible with Nespresso systems and similar brewers",
          },
          {
            id: "filter",
            heading: "Filter",
            description:
              "For pour over or drip methods like Aeropress, Chemex, and V60",
          },
          {
            id: "espresso",
            heading: "Espresso",
            description:
              "Dense and finely ground beans for an intense, flavorful experience",
          },
        ],
      },
      {
        heading: "What type of coffee?",
        altHeading: "Bean Types",
        cards: [
          {
            id: "single-origin",
            heading: "Single Origin",
            description:
              "Distinct, high quality coffee from a specific family-owned farm",
          },
          {
            id: "decaf",
            heading: "Decaf",
            description:
              "Just like regular coffee, except the caffeine has been removed",
          },
          {
            id: "blended",
            heading: "Blended",
            description:
              "Combination of two or three dark roasted beans of organic coffees",
          },
        ],
      },
      {
        heading: "How much would you like?",
        altHeading: "Quantity",
        cards: [
          {
            id: "250g",
            heading: "250g",
            description:
              "Perfect for the solo drinker. Yields about 12 delicious cups",
          },
          {
            id: "500g",
            heading: "500g",
            description:
              "Perfect option for a couple. Yields about 40 delectable cups.",
          },
          {
            id: "1000g",
            heading: "1000g",
            description:
              "Perfect for offices and events. Yields about 90 delightful cups.",
          },
        ],
      },
      {
        heading: "Want us to grind them?",
        altHeading: "Grind Options",
        cards: [
          {
            id: "wholebean",
            heading: "Wholebean",
            description:
              "Best choice if you cherish the full sensory experience",
          },
          {
            id: "filter",
            heading: "Filter",
            description:
              "For drip or pour-over coffee methods such as V60 or Aeropress",
          },
        ],
      },
      {
        heading: "How often should we deliver?",
        altHeading: "Deliveries",
        cards: [
          {
            id: "every-week",
            heading: "Every week",
            description:
              "$7.20 per shipment. Includes free first-class shipping.",
          },
          {
            id: "every-2-weeks",
            heading: "Every 2 weeks",
            description: "$9.60 per shipment. Includes free priority shipping.",
          },
          {
            id: "every-month",
            heading: "Every month",
            description:
              "$12.00 per shipment. Includes free priority shipping.",
          },
        ],
      },
    ],
    summary: {
      heading: "Order Summary",
      body: "",
      confirm:
        "Is this correct? You can proceed to checkout or go back to plan selection if something is off. Subscription discount codes can also be redeemed at the checkout. ",
    },
    buttons: { first: "Create my plan!", second: "This is the second button" },
  },
};
