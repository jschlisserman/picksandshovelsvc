export const firm = {
  name: "Picks and Shovels",
  tagline: "Investing in non-consensus companies before they become consensus",
  email: "josh@picksandshovelsvc.com",
} as const;

export const backedBy = [
  {
    name: "Ray Tonsing",
    role: "Caffeinated Capital",
    href: "https://www.linkedin.com/in/tonsing/",
  },
  { name: "Varun Gupta", role: "Caffeinated Capital", href: "https://www.linkedin.com/in/varun-gupta-1b131264/" },
  { name: "Sumeet Gajri", role: "Original Capital", href: "https://www.linkedin.com/in/sumeetgajri/" },
  { name: "Mark Ghermezian", role: "MXV", href: "https://www.linkedin.com/in/markgher/" },
  { name: "Brendan Baker", role: "Rackhouse VC", href: "https://www.linkedin.com/in/brendanbaker/" },
  { name: "Armaan Ali", role: "Seifdune", href: "https://www.linkedin.com/in/armaan-syed-ali-808a2072/" },
  { name: "Esteban Reyes", role: "Zenda VC", href: "https://www.linkedin.com/in/reyesesteban/" },
  { name: "Tiger Global", role: "Fund", href: "https://www.tigerglobal.com/" },
  { name: "Marc Bhargava", role: "General Catalyst", href: "https://www.linkedin.com/in/marc-bhargava-55030311/" },
  { name: "Josh Kuzon", role: "Reciprocal Ventures", href: "https://www.linkedin.com/in/josh-kuzon-78035a5/" },
  { name: "Evan Fisher", role: "Portal VC", href: "https://www.linkedin.com/in/evanfisher1/" },
  { name: "Max Abram", role: "Scale VP", href: "https://www.linkedin.com/in/maxwellabram/" },
  { name: "Nichole Wischoff", role: "Wischoff Ventures", href: "https://www.linkedin.com/in/nicholewischoff/" },
  { name: "Brexton Pham", role: "Cantor Fitzgerald", href: "https://www.linkedin.com/in/brextonpham/" },
  { name: "Julia Lipton", role: "Awesome People VC", href: "https://www.linkedin.com/in/julialipton/" },
  { name: "Ariana Thacker", role: "MoldCo", href: "https://www.linkedin.com/in/arianadthacker/" },
  { name: "Curtis Cheng", role: "Rubik Ventures", href: "https://www.linkedin.com/in/curtishcheng/" },
  { name: "Jessica Zaltulove", role: "Hannah Grey", href: "https://www.linkedin.com/in/jessicapeltz/" },
  { name: "Luke Girgis", role: "Rolling Stone (AU)", href: "https://www.linkedin.com/in/lukegirgis/" },
  { name: "Tasti Zakarie", role: "Bridge", href: "https://www.linkedin.com/in/tasti/" },
] as const;

export const sourcing = [
  {
    title: "Meet companies because of the market",
    points: [
      "No “arms race” deals — avoid commoditized spaces",
      "Primarily areas investors aren’t focused on right now",
    ],
  },
  {
    title: "Invest in companies because of the founder",
    points: [
      "Truly domain experts",
      "Don’t need hands-on help",
    ],
  },
  {
    title: "Invest before there’s a lead investor",
    points: ["Aim to introduce the lead investor"],
  },
] as const;

export const portfolio = [
  {
    name: "Mastra",
    stage: "Pre-Seed",
    stealth: false,
    logo: "/portfolio/mastra.png",
    href: "https://mastra.ai/",
  },
  {
    name: "Sunbeam",
    stage: "Pre-Seed",
    stealth: false,
    logo: "/portfolio/sunbeam.png",
    href: "https://www.sunbeam.ai/",
  },
  {
    name: "Eventual",
    stage: "Pre-Seed",
    stealth: false,
    logo: "/portfolio/eventual.png",
    href: "https://eventual.com/",
  },
  {
    name: "Slingshot AI",
    stage: "Seed",
    stealth: false,
    logo: "/portfolio/slingshot-ai.png",
    href: "https://slingshotai.com/",
  },
  {
    name: "Concrete Protocol",
    stage: "Pre-Seed",
    stealth: false,
    logo: "/portfolio/concrete-protocol.png",
    href: "https://concrete.xyz/",
  },
  {
    name: "Skip (acq)",
    stage: "Seed",
    stealth: false,
    logo: "/portfolio/skip.png",
    href: "https://www.skip.build/",
  },
  {
    name: "Paxos Labs",
    stage: "Pre-Seed",
    stealth: false,
    logo: "/portfolio/paxos-labs.png",
    href: "https://www.paxoslabs.com/",
  },
  {
    name: "Flux AI",
    stage: "Seed",
    stealth: false,
    logo: "/portfolio/flux-ai.png",
    href: "https://www.flux.ai/p",
  },
  {
    name: "Default",
    stage: "Seed",
    stealth: true,
    logo: "/portfolio/default.png",
    href: "https://www.default.com/",
  },
  { name: "AIHG", stage: "Seed", stealth: true, logo: "/portfolio/aihg.png", href: "https://aihg.com/" },
  { name: "Rivet", stage: "Pre-Seed", stealth: true, logo: "/portfolio/rivet.png", href: "https://www.rivet.tax/" },
  { name: "Silo Markets", stage: "Pre-Seed", stealth: true, logo: "/portfolio/silo-markets.png", href: "https://www.silomarkets.com/" },
  { name: "Biom", stage: "Pre-Seed", stealth: true, logo: "/portfolio/biom.png", href: "https://getbiom.co/" },
  { name: "Aviron", stage: "Pre-Seed", stealth: true, logo: "/portfolio/aviron.png", href: "https://www.avironactive.com/" },
] as const;

export const areasOfInterest = {
  asOf: "August 24, 2026",
  items: [
    "Thoughtful Agentic Harnesses",
    "AI-Enabled Services",
    "AI-Enabled CPGs",
    "AI-Enabled Marketplaces for Public Sector",
  ],
} as const;
