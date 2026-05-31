export type Product = {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  category: string;
  collection: string;
  colors: string[];
  sizes: string[];
  images: string[];
  description: string;
  isHit?: boolean;
  isNew?: boolean;
  discount?: number;
  material: string;
};

export type Collection = {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  color: string;
};

export const collections: Collection[] = [
  {
    id: "1",
    name: "Metal Edition",
    slug: "metal-edition",
    description: "Металлический блеск, холодная сила. Коллекция для тех, кто идёт напролом.",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80",
    color: "#888888",
  },
  {
    id: "2",
    name: "Sport Motion",
    slug: "sport-motion",
    description: "Свобода движения без компромиссов. Технологичный крой для активной жизни.",
    image: "https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=600&q=80",
    color: "#E85D04",
  },
  {
    id: "3",
    name: "Season Shift",
    slug: "season-shift",
    description: "Смена сезона — смена образа. Универсальные вещи на каждый день.",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80",
    color: "#2D6A4F",
  },
  {
    id: "4",
    name: "Warm Stone",
    slug: "warm-stone",
    description: "Тёплые оттенки натурального камня. Уют и стиль в каждой детали.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    color: "#8B6914",
  },
  {
    id: "5",
    name: "Summer Breeze",
    slug: "summer-breeze",
    description: "Лёгкость лета, свежий ветер. Дышащие ткани для жаркого сезона.",
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600&q=80",
    color: "#0096C7",
  },
  {
    id: "6",
    name: "Dragon Basics",
    slug: "dragon-basics",
    description: "Основа гардероба. Классические силуэты с фирменным характером.",
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&q=80",
    color: "#1A1A1A",
  },
];

export const products: Product[] = [
  {
    id: "p1",
    name: "Футболка «Dragon Fire»",
    price: 3490,
    oldPrice: 4990,
    category: "Футболки",
    collection: "Metal Edition",
    colors: ["#1A1A1A", "#888888", "#FFFFFF"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&q=80",
    ],
    description: "Футболка из 100% органического хлопка с авторским принтом дракона. Спортивный крой, не сковывает движений.",
    isHit: true,
    discount: 30,
    material: "100% органический хлопок",
  },
  {
    id: "p2",
    name: "Худи «Steel Wings»",
    price: 6990,
    category: "Худи",
    collection: "Sport Motion",
    colors: ["#1A1A1A", "#E85D04"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [
      "https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=800&q=80",
      "https://images.unsplash.com/photo-1509942774463-acf339cf87d5?w=800&q=80",
    ],
    description: "Премиум-худи с начёсом. Анатомический крой, регулируемый капюшон, скрытые карманы.",
    isHit: true,
    isNew: true,
    material: "80% хлопок, 20% полиэстер",
  },
  {
    id: "p3",
    name: "Лонгслив «Shadow Scale»",
    price: 4290,
    category: "Лонгсливы",
    collection: "Season Shift",
    colors: ["#2D6A4F", "#1A1A1A", "#888888"],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80",
    ],
    description: "Лонгслив с трёхмерным принтом чешуи. Тактильная текстура, плотный хлопок.",
    isHit: true,
    material: "95% хлопок, 5% эластан",
  },
  {
    id: "p4",
    name: "Свитшот «Warm Stone»",
    price: 5490,
    oldPrice: 6990,
    category: "Свитшоты",
    collection: "Warm Stone",
    colors: ["#8B6914", "#D4A017", "#5C4033"],
    sizes: ["S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    ],
    description: "Oversized-свитшот из тёплого флиса с дизайном в тонах натурального камня.",
    isHit: true,
    discount: 21,
    material: "70% хлопок, 30% флис",
  },
  {
    id: "p5",
    name: "Майка «Summer Dragon»",
    price: 2490,
    category: "Майки",
    collection: "Summer Breeze",
    colors: ["#FFFFFF", "#0096C7", "#E85D04"],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800&q=80",
    ],
    description: "Лёгкая майка из дышащего хлопка. Свежий принт, идеально для лета.",
    isNew: true,
    material: "100% хлопок",
  },
  {
    id: "p6",
    name: "Базовая футболка «Core»",
    price: 2990,
    category: "Футболки",
    collection: "Dragon Basics",
    colors: ["#1A1A1A", "#FFFFFF", "#888888", "#2D6A4F"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "3XL"],
    images: [
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80",
    ],
    description: "Классическая футболка с минимальным логотипом. Незаменимая база гардероба.",
    material: "100% органический хлопок",
  },
];
