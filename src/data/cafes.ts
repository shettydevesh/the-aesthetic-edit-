export interface Cafe {
  id: number;
  name: string;
  location: "Bandra" | "Juhu" | "Versova";
  area: string;
  type: string[];
  price: number;
  aestheticScore: number;
  metrics: [number, number, number, number, number]; // Food, Coffee, Ambiance, Service, Comfort
  description: string;
  bestFor: string;
  mustOrder: string;
  pros: string;
  cons: string;
  noiseLevel?: "Low" | "Moderate" | "High";
  readingComfort?: "Low" | "Moderate" | "High";
  image: string;
  editorsPick?: boolean;
  vibeTag?: string;
}

export const cafes: Cafe[] = [
  {
    id: 1,
    name: "Subko Specialty Coffee",
    location: "Bandra",
    area: "Mary Lodge, Ranwar",
    type: ["Casual", "Work", "Artisanal"],
    price: 1200,
    aestheticScore: 9.5,
    metrics: [9, 10, 9.5, 7, 5],
    description: "Coffee meets heritage — a restored Goan-Portuguese bungalow that treats coffee as a craft. High energy, chaotic, and visually stunning.",
    bestFor: "Coffee connoisseurs & early risers (7-10 AM).",
    mustOrder: "CoCo Nolen Gur Flat White, Twice-Baked Almond Croissant.",
    pros: "World-class coffee program, unparalleled aesthetic.",
    cons: "High noise (Bollywood music at The Loft), 'prison-style' seating uncomfortable for long stays.",
    noiseLevel: "High",
    readingComfort: "Low",
    image: "https://b.zmtcdn.com/data/pictures/7/20696737/12808cafe7ae58ad446f6e6415c6ac1e.jpg",
    editorsPick: true,
    vibeTag: "☕ Coffee Paradise"
  },
  {
    id: 2,
    name: "Fable",
    location: "Juhu",
    area: "Juhu Tara Road",
    type: ["Romantic", "Brunch"],
    price: 2500,
    aestheticScore: 8.8,
    metrics: [9, 7, 9, 8, 9],
    description: "The Curated Whimsy. A storybook-themed bistro where books are decor. It's a social theater, not a library.",
    bestFor: "Romantic dates or a fun day out with friends.",
    mustOrder: "Irish Lamb Stew, Lobster Ravioli.",
    pros: "Plush banquettes, excellent natural light, valet parking.",
    cons: "Expensive, noisy dining atmosphere, books are often just props.",
    noiseLevel: "High",
    readingComfort: "High",
    image: "https://b.zmtcdn.com/data/pictures/9/18223199/2ce738c279f4219143b61d3db96a8a27_featured_v2.jpg",
    vibeTag: "📖 Storybook Date"
  },
  {
    id: 8,
    name: "Leaping Windows",
    location: "Versova",
    area: "Corner View, Yari Road",
    type: ["Cultural", "Quiet"],
    price: 1500,
    aestheticScore: 8.5,
    metrics: [8, 8, 9, 6, 7],
    description: "Half-buzzy cafe, half-silent library — a split-level space with great food above and a pin-drop quiet graphic novel collection below.",
    bestFor: "Focused work, comic book lovers, or just some quiet time.",
    mustOrder: "Egg Kejriwal, Nutella Pancakes, Tenderloin Steak.",
    pros: "Dedicated silence in basement, vast comic collection.",
    cons: "Lighting can be dim (bring a book light), service can be 'relaxed' to a fault.",
    noiseLevel: "Low",
    readingComfort: "Moderate",
    image: "https://b.zmtcdn.com/data/pictures/8/41308/c6ee2190be7fa0711e842bb5a07c625c.jpg",
    vibeTag: "🤫 Hidden Library"
  },
  {
    id: 9,
    name: "Title Waves",
    location: "Bandra",
    area: "Turner Road",
    type: ["Work", "Casual"],
    price: 900,
    aestheticScore: 7.5,
    metrics: [7, 7, 8, 7, 8],
    description: "Mumbai's first large-format boutique bookstore with a cozy in-house cafe. Browse books, grab a coffee, stay a while.",
    bestFor: "Book discovery, browsing, freelancers.",
    mustOrder: "French Onion Grilled Cheese, Rose Cappuccino (Di Bella).",
    pros: "Excellent lighting, massive inventory, ergonomic seating.",
    cons: "Can get noisy from blenders, staff prioritize retail sales.",
    noiseLevel: "Moderate",
    readingComfort: "High",
    image: "https://b.zmtcdn.com/data/pictures/4/47524/698afae5e4f810a7bad5e54a5ac4f62e_featured_v2.jpg",
    vibeTag: "📚 Bookworm's Nest"
  },
  {
    id: 3,
    name: "Veronica's",
    location: "Bandra",
    area: "Ranwar Village",
    type: ["Casual", "Trendy"],
    price: 1500,
    aestheticScore: 9.2,
    metrics: [9.5, 8, 9, 7, 7],
    description: "Vibrant, colorful, and retro — housed in a heritage bakery building. One of the trendiest spots in Bandra right now.",
    bestFor: "Instagram photos & best sandwiches in town.",
    mustOrder: "Pastrami Sandwich, Passion Fruit Iced Tea.",
    pros: "Amazing food quality, very unique colorful vibe.",
    cons: "Hard to get a table, very loud music, chaotic service.",
    noiseLevel: "High",
    readingComfort: "Low",
    image: "https://b.zmtcdn.com/data/pictures/chains/9/22278919/17612066285e9a2a5e-0f82-4d8e-bfb6-d4e485ece543.jpg",
    editorsPick: true,
    vibeTag: "📸 Insta-Worthy"
  },
  {
    id: 4,
    name: "Olive Bar & Kitchen",
    location: "Bandra",
    area: "Union Park",
    type: ["Romantic", "Fancy"],
    price: 4000,
    aestheticScore: 9.8,
    metrics: [9, 8, 10, 9, 9],
    description: "The original Bandra aesthetic spot — a Mediterranean white-walled villa with pebbled pathways and candlelit tables.",
    bestFor: "Anniversaries, proposals, or when you want to impress.",
    mustOrder: "Mezze Platter, Signature Cocktails.",
    pros: "Unbeatable romantic atmosphere, top-tier crowd.",
    cons: "Very expensive, requires reservation well in advance.",
    noiseLevel: "Moderate",
    readingComfort: "High",
    image: "https://b.zmtcdn.com/data/pictures/4/37244/b0c1ac917303250186012bd9ba89d69f.jpg",
    editorsPick: true,
    vibeTag: "✨ Dreamy Date Night"
  },
  {
    id: 5,
    name: "Prithvi Cafe",
    location: "Juhu",
    area: "Juhu Church Rd",
    type: ["Casual", "Cultural"],
    price: 800,
    aestheticScore: 8.5,
    metrics: [8, 7, 9, 6, 6],
    description: "Open-air cafe attached to the famous theatre. Surrounded by trees and hanging lanterns.",
    bestFor: "Evening chai, creative discussions, and a lively vibe.",
    mustOrder: "Irish Coffee, Parathas, Sulemani Chai.",
    pros: "Affordable, great cultural energy, beautiful outdoor setting.",
    cons: "Humid in summer (outdoors), long waiting lines.",
    noiseLevel: "High",
    readingComfort: "Moderate",
    image: "https://b.zmtcdn.com/data/pictures/3/36403/59c1f5d1a07417bf732a64c7344e02a9.jpg",
    vibeTag: "🎭 Artsy Soul"
  },
  {
    id: 6,
    name: "Birdsong Organic Cafe",
    location: "Bandra",
    area: "Hill Road",
    type: ["Casual", "Quiet"],
    price: 1800,
    aestheticScore: 8.0,
    metrics: [8, 8, 8, 8, 8],
    description: "Rustic, exposed brick walls, high ceilings and large windows. Very quiet and peaceful.",
    bestFor: "Reading a book or a quiet intimate conversation.",
    mustOrder: "Hot Chocolate, Gluten-free Pizza.",
    pros: "Healthy options, very calm atmosphere.",
    cons: "Location is a bit tucked away in narrow lanes.",
    noiseLevel: "Low",
    readingComfort: "High",
    image: "https://b.zmtcdn.com/data/reviews_photos/d22/58120452831a6acc0a54f396816f5d22_1557548297.jpg",
    vibeTag: "🌿 Cozy & Calm"
  },
  {
    id: 7,
    name: "Grandmama's Cafe",
    location: "Juhu",
    area: "Juhu Tara Road",
    type: ["Casual", "Cute"],
    price: 1600,
    aestheticScore: 8.2,
    metrics: [7, 7, 8.5, 8, 9],
    description: "Pastel greens, floral prints, and a colonial dollhouse vibe. Very cute and welcoming.",
    bestFor: "A fun day out or a casual comfort meal.",
    mustOrder: "Mac & Cheese, Rajma Chawal (Home style).",
    pros: "Comfort food, very pretty decor, consistent quality.",
    cons: "Can feel a bit generic compared to newer spots.",
    noiseLevel: "Moderate",
    readingComfort: "High",
    image: "https://b.zmtcdn.com/data/pictures/2/18388642/954cd05316a47dad440e288308610d80.jpg",
    vibeTag: "🌸 Day Out Vibes"
  }
];
