import heroCanada from "@/assets/hero-quebec.jpg"; // Reusing assets for now
import politique from "@/assets/politique.jpg";
import environnement from "@/assets/environnement.jpg";
import culture from "@/assets/culture.jpg";
import economie from "@/assets/economie.jpg";
import energie from "@/assets/energie.jpg";
import sports from "@/assets/sports.jpg";

export type Category = "politique" | "culture" | "economie" | "environnement";

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "quote"; text: string; cite?: string };

export type Locale = {
  kicker: string;
  title: string;
  dek: string;
  body: Block[];
};

export type Article = {
  slug: string;
  category: Category;
  image: string;
  imageCaption?: { fr: string; en: string };
  author: string;
  readMin: number;
  date: string;
  fr: Locale;
  en: Locale;
};

export const categoryMeta: Record<Category, { fr: string; en: string; path: string; image: string }> = {
  politique: { fr: "Politique", en: "Politics", path: "/politique", image: politique },
  culture: { fr: "Culture", en: "Culture", path: "/culture", image: culture },
  economie: { fr: "Économie", en: "Economy", path: "/economie", image: economie },
  environnement: { fr: "Environnement", en: "Environment", path: "/environnement", image: environnement },
};

export const articles: Article[] = [
  {
    slug: "national-housing-strategy",
    category: "politique",
    image: heroCanada,
    imageCaption: {
      fr: "Nouveaux développements urbains à Toronto. Photo : Canada Daily.",
      en: "New urban developments in Toronto. Photo: Canada Daily.",
    },
    author: "Sarah Johnston",
    readMin: 10,
    date: "2026-05-10",
    en: {
      kicker: "Deep Dive",
      title: "Is the National Housing Strategy Finally Working?",
      dek: "After a decade of rising costs, new data suggests the tide might be turning. We look at the federal policies making an impact in 2026.",
      body: [
        { type: "p", text: "The Canadian housing market has been the subject of countless debates, protests, and policy shifts over the last decade. But as we reach the midpoint of 2026, there's a growing sense that the latest iteration of the National Housing Strategy is finding its footing." },
        { type: "h2", text: "The Supply Surge" },
        { type: "p", text: "In cities like Vancouver and Toronto, housing starts have reached record highs. This isn't just luxury condos; a significant portion of new builds are purpose-built rentals and co-op housing, spurred by federal tax incentives and low-interest financing." },
        { type: "quote", text: "We stopped treating housing as an investment vehicle and started treating it as infrastructure. That was the turning point.", cite: "A senior policy advisor in Ottawa" },
        { type: "h2", text: "The Affordability Gap" },
        { type: "p", text: "While supply is up, affordability remains a challenge for many young Canadians. The 'missing middle'—townhomes and duplexes—is still underrepresented in many suburban areas, despite zoning reforms. The next phase of the strategy will likely focus on these gaps." }
      ],
    },
    fr: {
      kicker: "Analyse",
      title: "La stratégie nationale sur le logement porte-t-elle enfin ses fruits ?",
      dek: "Après une décennie de hausse des prix, de nouvelles données suggèrent un tournant. État des lieux des politiques fédérales en 2026.",
      body: [
        { type: "p", text: "Le marché canadien de l'habitation a fait l'objet d'innombrables débats, manifestations et changements de politique au cours de la dernière décennie. Mais à la mi-2026, on sent que la dernière version de la Stratégie nationale sur le logement commence à porter ses fruits." },
        { type: "h2", text: "L'augmentation de l'offre" },
        { type: "p", text: "Dans des villes comme Vancouver et Toronto, les mises en chantier ont atteint des sommets historiques. Il ne s'agit pas seulement de condos de luxe ; une part importante des nouvelles constructions concerne des logements locatifs et des coopératives d'habitation." }
      ],
    },
  },
  {
    slug: "canada-critical-minerals",
    category: "economie",
    image: energie,
    author: "David Chen",
    readMin: 12,
    date: "2026-05-09",
    en: {
      kicker: "Global Trade",
      title: "Canada's Critical Minerals Strategy: Powering the Green Revolution",
      dek: "As the world pivots to EVs, Canada is positioning itself as a global superpower in lithium, nickel, and rare earth elements.",
      body: [
        { type: "p", text: "The global energy transition is being fought on the ground, literally. From the Ring of Fire in Northern Ontario to the lithium mines of Quebec, Canada is moving fast to secure its place in the green technology supply chain." },
        { type: "h2", text: "A Strategic Advantage" },
        { type: "p", text: "With massive deposits of the 31 minerals deemed 'critical' by the federal government, Canada has a unique opportunity to provide a stable, ethical alternative to traditional suppliers." },
        { type: "quote", text: "This isn't just about mining; it's about national security and the future of our manufacturing sector.", cite: "Minister of Natural Resources" }
      ],
    },
    fr: {
      kicker: "Échanges Mondiaux",
      title: "Minéraux critiques : le Canada au cœur de la révolution verte",
      dek: "Alors que le monde se tourne vers les véhicules électriques, le Canada se positionne comme une superpuissance du lithium et du nickel.",
      body: [
        { type: "p", text: "La transition énergétique mondiale se joue littéralement sur le terrain. Des mines de lithium du Québec au Cercle de feu du Nord de l'Ontario, le Canada accélère pour sécuriser sa place." }
      ],
    },
  },
  {
    slug: "arctic-sovereignty-2026",
    category: "environnement",
    image: environnement,
    author: "James Wilson",
    readMin: 8,
    date: "2026-05-08",
    en: {
      kicker: "The North",
      title: "The Race for the Arctic: Sovereignty in a Warming World",
      dek: "Melting ice is opening new trade routes and exposing vast resources. How Canada is defending its northern borders in 2026.",
      body: [
        { type: "p", text: "The Arctic is no longer a frozen frontier; it's a bustling corridor of geopolitical interest. As the Northwest Passage becomes navigable for longer periods, Canada is reinforcing its presence in the High North." },
        { type: "h2", text: "New Infrastructure" },
        { type: "p", text: "The government has announced a multibillion-dollar investment in dual-use infrastructure—facilities that serve both civilian communities and military defense needs." }
      ],
    },
    fr: {
      kicker: "Le Grand Nord",
      title: "La course à l'Arctique : la souveraineté dans un monde qui se réchauffe",
      dek: "La fonte des glaces ouvre de nouvelles routes commerciales. Comment le Canada défend ses frontières nordiques en 2026.",
      body: [
        { type: "p", text: "L'Arctique n'est plus une frontière gelée ; c'est un corridor d'intérêt géopolitique bouillonnant. Alors que le passage du Nord-Ouest devient navigable plus longtemps, le Canada renforce sa présence." }
      ],
    },
  },
  {
    slug: "indigenous-arts-revival",
    category: "culture",
    image: culture,
    author: "Maya Littlewolf",
    readMin: 7,
    date: "2026-05-07",
    en: {
      kicker: "Spotlight",
      title: "Beyond Tradition: The Modern Indigenous Arts Revival",
      dek: "A new generation of Indigenous artists is blending traditional motifs with digital technology and modern media to reclaim their narratives.",
      body: [
        { type: "p", text: "Walk through any major gallery in Canada today, and you'll see a vibrant explosion of Indigenous creativity that defies simple categorization. From VR installations to high-fashion beadwork, the scene is thriving." }
      ],
    },
    fr: {
      kicker: "Projecteur",
      title: "Au-delà de la tradition : le renouveau des arts autochtones",
      dek: "Une nouvelle génération d'artistes fusionne motifs traditionnels et technologies numériques pour se réapproprier leurs récits.",
      body: [
        { type: "p", text: "Entrez dans n'importe quelle grande galerie au Canada aujourd'hui, et vous verrez une explosion vibrante de créativité autochtone qui défie les catégories simples." }
      ],
    },
  },
];

export function getArticleBySlug(slug: string) {
  return articles.find((a) => a.slug === slug);
}

export function getArticlesByCategory(cat: Category) {
  return articles.filter((a) => a.category === cat);
}
