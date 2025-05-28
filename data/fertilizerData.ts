export interface FertilizerRecommendation {
    crop: string;
    cowDung: number;
    tsp: number;
    mop: number;
    gypsum: number;
    zns: number;
    boricAcid: number;
    ureaApplication: string;
  }
  
  export const fertilizerRecommendations: FertilizerRecommendation[] = [
    {
      crop: "Radish",
      cowDung: 30,
      tsp: 2250,
      mop: 400,
      gypsum: 30,
      zns: 50,
      boricAcid: 500,
      ureaApplication: "Basal: 200, TD-1: 200, TD-2: 600",
    },
    {
      crop: "Tomato",
      cowDung: 40,
      tsp: 2500,
      mop: 400,
      gypsum: 30,
      zns: 30,
      boricAcid: 50,
      ureaApplication: "Basal: 600, TD-1: 300, TD-2: 300",
    },
    {
      crop: "Brinjal",
      cowDung: 40,
      tsp: 2500,
      mop: 400,
      gypsum: 30,
      zns: 30,
      boricAcid: 50,
      ureaApplication: "Basal: 500, TD-1: 600, TD-2: 600",
    },
    {
      crop: "Cabbage",
      cowDung: 40,
      tsp: 1500,
      mop: 400,
      gypsum: 30,
      zns: 50,
      boricAcid: 600,
      ureaApplication: "Basal: 400, TD-1: 500, TD-2: 500",
    },
    {
      crop: "Bottle Gourd",
      cowDung: 40,
      tsp: 1250,
      mop: 200,
      gypsum: 20,
      zns: 10,
      boricAcid: 300,
      ureaApplication: "Basal: 220, TD-1: 220, TD-2: 220",
    },
    {
      crop: "Bitter Gourd",
      cowDung: 20,
      tsp: 600,
      mop: 200,
      gypsum: 20,
      zns: 30,
      boricAcid: 250,
      ureaApplication: "Basal: 250, TD-1: 250, TD-2: 250",
    },
    {
      crop: "Indian Spinach",
      cowDung: 20,
      tsp: 600,
      mop: 200,
      gypsum: 20,
      zns: 30,
      boricAcid: 250,
      ureaApplication: "Basal: 250, TD-1: 250, TD-2: 250",
    },
    {
      crop: "Ash & Sweet Gourd",
      cowDung: 60,
      tsp: 2700,
      mop: 400,
      gypsum: 30,
      zns: 30,
      boricAcid: 45,
      ureaApplication: "Basal: 50, TD-1: 70, TD-2: 70",
    },
    {
      crop: "Red Amaranth",
      cowDung: 40,
      tsp: 600,
      mop: 200,
      gypsum: 20,
      zns: 30,
      boricAcid: 120,
      ureaApplication: "Basal: 120",
    },
    {
      crop: "Stem Amaranth",
      cowDung: 60,
      tsp: 1000,
      mop: 250,
      gypsum: 20,
      zns: 30,
      boricAcid: 600,
      ureaApplication: "Basal: 400, TD-1: 400",
    },
    {
      crop: "Sponge Gourd",
      cowDung: 10,
      tsp: 400,
      mop: 200,
      gypsum: 20,
      zns: 30,
      boricAcid: 50,
      ureaApplication: "Basal: 100, TD-1: 100",
    },
  ];

  export const fertilizers = [
    {
      type: "🌿 Organic",
      description: "Natural, eco-friendly, improves soil structure",
      examples: ["Cow dung (গোবর)", "Compost", "Vermicompost"],
    },
    {
      type: "🧫 Inorganic",
      description: "Chemical-based, fast-acting nutrients",
      examples: ["Urea", "TSP", "MoP", "Zinc Sulfate"],
    },
    {
      type: "🍌 Biofertilizers",
      description: "Microbes that promote plant growth",
      examples: ["Rhizobium", "Azotobacter"],
    },
    {
      type: "🌾 Green Manure",
      description: "Grown & plowed into soil to improve fertility",
      examples: ["Dhaincha (ঢৈঞ্চা)", "Cowpea"],
    },
  ];
  
  const cropSuggestions = {
    Tomato: "Compost + Urea (50g/plant) + TSP (30g/plant)",
    Paddy: "Urea split dose + Zinc Sulfate",
    Coriander: "Mustard cake + Vermicompost",
  };
  
  