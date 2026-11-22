export interface ProjectStat {
  value: string;
  label: string;
}

export interface Project {
  id: number;
  slug: string;
  title: string;
  type: string;
  role: string;
  tech: string[];
  description: string;
  overview: string;
  architecture: string;
  implementation: string;
  stats: ProjectStat[];
  myRole: string[];
  images: string[];
  hoverImage: string;
  github: string;
  liveUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    slug: 'expenseos',
    title: 'ExpenseOS',
    type: 'Offline-first Expense Management',
    role: 'Product & Development',
    tech: [
      'Offline-first',
      'Receipt OCR',
      'SMS Import',
      'Monthly Analytics',
      'Wallets & Cash',
    ],
    description:
      'A personal money app that keeps working with no connection. Expenses, income, wallets, bills and transfers are tracked in one place, and receipts can be pulled in from a photo or an SMS instead of typed by hand.',
    overview:
      'ExpenseOS is an offline-first expense management application. It covers the whole loop of everyday money tracking: recording expenses and income, keeping separate wallets and cash balances, grouping spending into categories, and reviewing monthly analytics. Bills, transfers and receipt imports are part of the same flow rather than separate tools.',
    architecture:
      'The product is built offline-first: the app is designed to stay usable without a connection, so recording an expense never depends on a round trip to a server. Money movement is modelled across wallets and cash, with expenses, income, bills and transfers each affecting the right balance. Categories give the analytics a consistent structure, which is what makes a monthly view meaningful instead of a raw list of transactions.',
    implementation:
      'Receipt totals can be captured with OCR, so a photographed receipt becomes a starting point for an entry rather than manual typing. SMS-based import turns bank or payment messages into expenses that can be reviewed and saved. Monthly analytics summarise spending by category so patterns are visible over time rather than buried in individual entries.',
    stats: [
      { value: 'Offline', label: 'Works without a connection' },
      { value: 'OCR', label: 'Receipt total capture' },
      { value: 'SMS', label: 'Expense import' },
    ],
    myRole: [
      'Designed the product around offline-first use, so core tracking keeps working without a connection.',
      'Built expense and income tracking across separate wallets and cash balances, with a shared category structure.',
      'Implemented bills and transfers so balances stay consistent across accounts.',
      'Added receipt-total OCR and SMS import to replace manual entry with something to review and confirm.',
      'Built monthly analytics that group spending by category over time.',
    ],
    images: ['/Projects/expenseos/expenseos-01.png'],
    hoverImage: '/Projects/expenseos/expenseos-01.png',
    github: '',
    liveUrl: '',
  },
  {
    id: 2,
    slug: 'pixelsense',
    title: 'PixelSense',
    type: 'Perception Game',
    role: 'Product & Development',
    tech: ['Color Matching', 'Sound', 'Timing', 'Reaction', 'Daily Challenge'],
    description:
      'A small set of browser games that test your designer eye: rebuild a colour, recall a sound, judge a duration and test your reaction. Play solo, with a second player, or take the same daily challenge everyone else gets.',
    overview:
      'PixelSense is a perception game built around four kinds of judgement — colour, sound, time and reaction. Each mode asks you to trust your own eye and ear instead of a scoreboard: rebuild a shade you were just shown, recall a sound, judge how long something lasted, or react as quickly as you can. A daily challenge gives every player the same test.',
    architecture:
      'The game is organised as four independent modes that share one shell: a mode picker, difficulty settings, and a results screen. Each mode is a short, self-contained round, which keeps sessions fast and makes the game easy to replay. Solo, multi and daily entries sit on top of the same modes rather than duplicating them, so the daily challenge plays exactly like the practice version.',
    implementation:
      'Colour asks you to rebuild a shade you were just shown using hue, saturation and brightness sliders, with a four-second or two-second look depending on difficulty. Sound tests audio memory, time asks you to judge how long something lasted, and reaction is a straight speed test. Each round ends with one readable result, so it is obvious whether you were close. Multi plays the same round with two people, and the daily challenge fixes the round for everyone.',
    stats: [
      { value: '04', label: 'Perception modes' },
      { value: 'Daily', label: 'Shared challenge' },
      { value: 'Multi', label: 'Two-player mode' },
    ],
    myRole: [
      'Built the four perception modes — colour, sound, time and reaction — behind a single game shell.',
      'Designed the round flow so each mode is quick to play and easy to replay.',
      'Added easy and hard difficulties, with a shorter look on hard.',
      'Implemented solo, multiplayer and daily challenge entry points on the same game modes.',
      'Scored results by distance from the correct answer so the feedback stays readable.',
    ],
    images: [
      '/Projects/pixelsense/pixelsense-01.png',
      '/Projects/pixelsense/pixelsense-02.png',
    ],
    hoverImage: '/Projects/pixelsense/pixelsense-01.png',
    github: '',
    liveUrl: 'https://pixelsense-eight.vercel.app/',
  },
];

export function getAllProjects(): Project[] {
  return projects;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAdjacentProjects(slug: string): { prev?: Project; next?: Project } {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1) return {};
  return {
    prev: index > 0 ? projects[index - 1] : undefined,
    next: index < projects.length - 1 ? projects[index + 1] : undefined,
  };
}
