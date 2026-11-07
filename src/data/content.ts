export const firm = {
  name: "Picks and Shovels",
  tagline:
    "Backing the tools every gold rush needs. Infra, dev tools, and financial rails, funded before the rush.",
  secondaryLine: "Non-consensus today. Load-bearing tomorrow.",
  email: "josh@picksandshovelsvc.com",
} as const;

export const backedBy = [
  {
    name: "Ray Tonsing",
    role: "Caffeinated Capital",
    href: "https://www.linkedin.com/in/tonsing/",
    photo: "/backed-by/ray-tonsing.png",
  },
  {
    name: "Varun Gupta",
    role: "Caffeinated Capital",
    href: "https://www.linkedin.com/in/varun-gupta-1b131264/",
    photo: "/backed-by/varun-gupta.png",
  },
  {
    name: "Sumeet Gajri",
    role: "Original Capital",
    href: "https://www.linkedin.com/in/sumeetgajri/",
    photo: "/backed-by/sumeet-gajri.png",
  },
  {
    name: "Lan Xuezhao",
    role: "Basis Set Ventures",
    href: "https://www.linkedin.com/in/lanxuezhao/",
    photo: "/backed-by/lan-xuezhao.png",
  },
  {
    name: "Bobby Lo",
    role: "Vurb",
    href: "https://www.linkedin.com/in/bobbylo/",
    photo: "/backed-by/bobby-lo.png",
  },
  {
    name: "Ricky Horwitz",
    role: "Exponential",
    href: "https://www.linkedin.com/in/rickyhorwitz/",
    photo: "/backed-by/ricky-horwitz.png",
  },
  {
    name: "Brendan Baker",
    role: "Rackhouse VC",
    href: "https://www.linkedin.com/in/brendanbaker/",
    photo: "/backed-by/brendan-baker.png",
  },
  {
    name: "Armaan Ali",
    role: "Seifdune",
    href: "https://www.linkedin.com/in/armaan-syed-ali-808a2072/",
    photo: "/backed-by/armaan-ali.png",
  },
  {
    name: "Marc Bhargava",
    role: "General Catalyst",
    href: "https://www.linkedin.com/in/marc-bhargava-55030311/",
    photo: "/backed-by/marc-bhargava.png",
  },
  {
    name: "Mike Annunziata",
    role: "Also Capital",
    href: "https://www.linkedin.com/in/mike-annunziata-12853bb/",
    photo: "/backed-by/mike-annunziata.png",
  },
  {
    name: "Ellen Chisa",
    role: "Boldstart Ventures",
    href: "https://www.linkedin.com/in/ellenchisa/",
    photo: "/backed-by/ellen-chisa.png",
  },
  {
    name: "Evan Fisher",
    role: "Portal VC",
    href: "https://www.linkedin.com/in/evanfisher1/",
    photo: "/backed-by/evan-fisher.png",
  },
  {
    name: "Brexton Pham",
    role: "Cantor Fitzgerald",
    href: "https://www.linkedin.com/in/brextonpham/",
    photo: "/backed-by/brexton-pham.png",
  },
  {
    name: "Ariana Thacker",
    role: "MoldCo",
    href: "https://www.linkedin.com/in/arianadthacker/",
    photo: "/backed-by/ariana-thacker.png",
  },
  {
    name: "TX Zhuo",
    role: "Fika VC",
    href: "https://www.linkedin.com/in/tianxiangzhuo/",
    photo: "/backed-by/tx-zhuo.png",
  },
] as const;

export type PortfolioCompany = {
  name: string;
  stage: string;
  stealth: boolean;
  logo?: string;
  href?: string;
};

/** Flat registry — reassign companies via portfolioGroups below. */
export const portfolioCompanies: Record<string, PortfolioCompany> = {
  Mastra: {
    name: "Mastra",
    stage: "Pre-Seed",
    stealth: false,
    logo: "/portfolio/mastra.png",
    href: "https://mastra.ai/",
  },
  "Flux AI": {
    name: "Flux AI",
    stage: "Seed",
    stealth: false,
    logo: "/portfolio/flux-ai.png",
    href: "https://www.flux.ai/p",
  },
  GitCafe: {
    name: "GitCafe",
    stage: "Seed",
    stealth: true,
    logo: "/portfolio/gitcafe.png",
    href: "https://www.git.cafe",
  },
  "Paralign Labs": {
    name: "Paralign Labs",
    stage: "Seed",
    stealth: false,
    logo: "/portfolio/paralign-labs.png",
    href: "https://paralignlabs.com/",
  },
  "Olympix AI": {
    name: "Olympix AI",
    stage: "Seed",
    stealth: false,
    logo: "/portfolio/olympix-ai.png",
    href: "https://olympix.security/",
  },
  Baselayer: {
    name: "Baselayer",
    stage: "Seed",
    stealth: false,
    logo: "/portfolio/baselayer.png",
    href: "https://baselayer.com/",
  },
  "Paxos Labs": {
    name: "Paxos Labs",
    stage: "Pre-Seed",
    stealth: false,
    logo: "/portfolio/paxos-labs.png",
    href: "https://www.paxoslabs.com/",
  },
  "Concrete Protocol": {
    name: "Concrete Protocol",
    stage: "Pre-Seed",
    stealth: false,
    logo: "/portfolio/concrete-protocol.png",
    href: "https://concrete.xyz/",
  },
  "Skip (acq)": {
    name: "Skip (acq)",
    stage: "Seed",
    stealth: false,
    logo: "/portfolio/skip.png",
    href: "https://www.skip.build/",
  },
  "Silo Markets": {
    name: "Silo Markets",
    stage: "Pre-Seed",
    stealth: true,
    logo: "/portfolio/silo-markets.png",
    href: "https://www.silomarkets.com/",
  },
  Sunbeam: {
    name: "Sunbeam",
    stage: "Pre-Seed",
    stealth: false,
    logo: "/portfolio/sunbeam.png",
    href: "https://www.sunbeam.ai/",
  },
  "Slingshot AI": {
    name: "Slingshot AI",
    stage: "Seed",
    stealth: false,
    logo: "/portfolio/slingshot-ai.png",
    href: "https://slingshotai.com/",
  },
  Eventual: {
    name: "Eventual",
    stage: "Pre-Seed",
    stealth: false,
    logo: "/portfolio/eventual.png",
    href: "https://eventual.com/",
  },
  AIHG: {
    name: "AIHG",
    stage: "Seed",
    stealth: true,
    logo: "/portfolio/aihg.png",
    href: "https://aihg.com/",
  },
  Rivet: {
    name: "Rivet",
    stage: "Pre-Seed",
    stealth: true,
    logo: "/portfolio/rivet.png",
    href: "https://www.rivet.tax/",
  },
  Default: {
    name: "Default",
    stage: "Seed",
    stealth: true,
    logo: "/portfolio/default.png",
    href: "https://www.default.com/",
  },
  Biom: {
    name: "Biom",
    stage: "Pre-Seed",
    stealth: true,
    logo: "/portfolio/biom.png",
    href: "https://getbiom.co/",
  },
  Aviron: {
    name: "Aviron",
    stage: "Pre-Seed",
    stealth: true,
    logo: "/portfolio/aviron.png",
    href: "https://www.avironactive.com/",
  },
};

/**
 * Display order and grouping. Reassign by moving company keys between groups.
 * Keys must match portfolioCompanies.
 */
export const portfolioGroups = [
  {
    label: "AI Infra & Dev Tools",
    companies: ["Mastra", "Flux AI", "GitCafe", "Paralign Labs", "Olympix AI"],
  },
  {
    label: "Financial Rails",
    companies: [
      "Baselayer",
      "Paxos Labs",
      "Concrete Protocol",
      "Skip (acq)",
      "Silo Markets",
    ],
  },
  {
    label: "Applied AI and Apps",
    companies: ["Sunbeam", "Slingshot AI", "Eventual", "Default"],
  },
  {
    label: "AI Native Services",
    companies: ["Rivet", "AIHG"],
  },
] as const;

export const about = {
  summary:
    "We specialize in taking companies from $0 to $10M+ in ARR, finding problem-market fit, and intentionally scaling an organization. We plan to share those learnings with the next generation of picks-and-shovels founders.",
  people: [
    {
      name: "Joshua Schlisserman",
      title: "GP, Operator-Investor",
      email: "josh@picksandshovelsvc.com",
      portrait: "/about/portrait.png",
      href: "https://www.linkedin.com/in/joshua-schlisserman/",
      timeline: [
        {
          label: "Now — Mastra (Port Co)",
          body: "Chief of Staff at Mastra, the leading TypeScript framework for building AI agents, backed by Spark Capital, Gradient VC, SV Angel and Basecase VC. My role centers on sales, GTM, and customer support/success.",
        },
        {
          label: "Before — Preside (Co-Founder)",
          body: "Workflow automation for public safety and government, backed by Caffeinated Capital, Basecase VC, Banter Capital and Basis Set Ventures. We never found product-market fit — but I learned how to invest in the next generation of public-sector founders.",
        },
        {
          label: "Before — Series (Employee #1)",
          body: "Chief of Staff at Series, which builds tools for institutional allocators. I helped scale to our first $1B in AUM, ran all enterprise sales, and built the GTM organization. Backed by 776, Fin VC, Caffeinated Capital and Basis Set Ventures.",
        },
      ],
    },
    {
      name: "Janet Lee",
      title: "Venture Partner, Operator-Investor",
      email: "janet@picksandshovelsvc.com",
      portrait: "/about/janet-lee.png",
      href: "https://www.linkedin.com/in/jayleejanet/",
      timeline: [
        {
          label: "Now — Daydream (Port Co)",
          body: "Head of GTM at Daydream, a full-stack organic search partner handling strategy and execution across SEO and AI search, including keyword research, content, technical SEO, authority building, and AI citation optimization.",
        },
        {
          label: "Before — EarnIn (EIR)",
          body: "Entrepreneur in Residence at EarnIn, which provides tools like credit monitoring, automated savings accounts, and low-balance protection. All with no interest, no credit checks, and no mandatory fees.",
        },
        {
          label: "Before — Series (Head of Operations)",
          body: "Head of Operations at Series, which builds tools for institutional allocators. Oversaw and built our Business Development, Customer Support/Success, and Ops Functions. Backed by 776, Fin VC, Caffeinated Capital and Basis Set Ventures.",
        },
      ],
    },
  ],
} as const;
