/**
 * ---------------------------------------------------------------------------
 * SINGLE SOURCE OF TRUTH FOR ALL SITE COPY
 * ---------------------------------------------------------------------------
 * Every string rendered on the site comes from this file. Swap the placeholder
 * values below for real club content — no component needs editing.
 *
 * Rules (see PRD.md §10):
 *  - Do NOT invent facts, names, numbers, or testimonials.
 *  - Anything marked `TODO` is an unfilled slot. Delete the `TODO` comment
 *    once you supply a real value.
 *  - `null` for a number, an empty array, or `undefined` for a link means the
 *    site hides that element rather than rendering a broken or fake one.
 *
 * The site is informational. It does not accept signups, so there is no join
 * URL, no registration form and no recruitment copy anywhere.
 */

/** Icon-tile accents. Each is a fill behind an icon, never body text. */
export type Tone = "accent" | "red" | "green" | "purple" | "yellow";

export type HackathonImage = {
  /** Path in /public, e.g. "/hackathons/binjas-2026-01.jpg". */
  src: string;
  /** Describe what the photo shows — it is read aloud by screen readers. */
  alt: string;
  caption?: string;
};

export type HackathonStat = {
  label: string;
  /** Verifiable only. Null entries are skipped. */
  value: number | null;
  icon: Tone;
};

export type Hackathon = {
  slug: string;
  /** Short name, overlaid on the collage in uppercase. Second half is accented. */
  name: string;
  /** Formal name, used as the letterspaced subline on the collage. */
  fullName: string;
  /** One line: what it was and who it was for. */
  tagline: string;
  /** ISO 8601, e.g. "2026-03-14". */
  date: string;
  /** The theme or brief, if the hackathon had one. */
  theme?: string;
  /** Two or three sentences. */
  summary: string;
  /** Problem → what was built → what happened. */
  story?: string[];
  stats?: HackathonStat[];
  /** images[0] is the collage cover; the rest stack over its right edge. */
  images?: HackathonImage[];
  /** Only for upcoming events. */
  registerUrl?: string;
  status: "past" | "upcoming";
};

export type ActivityIcon =
  | "code"
  | "trophy"
  | "github"
  | "mentor"
  | "mic"
  | "rocket"
  | "workshop";

export type Activity = {
  icon: ActivityIcon;
  tone: Tone;
  title: string;
  description: string;
};

export type ClubEventCategory = "all" | "workshop" | "tech-talk" | "coding-jam";

export type ClubEvent = {
  id: string;
  title: string;
  /** ISO 8601 date, e.g. "2026-11-18". Rendered as a large day + small month. */
  date: string;
  description: string;
  tags: string[];
  time?: string;
  location?: string;
  category?: ClubEventCategory;
  categoryLabel?: string;
  featured?: boolean;
  highlights?: string[];
  attendeesCount?: number;
  signupUrl?: string;
  status: "upcoming" | "past";
};

export type Member = {
  name: string;
  /** Department / branch, e.g. "Dept. of CSE(IoT)". Shown on every student card. */
  branch?: string;
  /** Faculty and leadership only, e.g. "Coding Club Coordinator". */
  role?: string;
  /** Path in /public, e.g. "/team/anant-prakash.jpg". */
  photo?: string;
  /** Pastel backdrop behind the photo. Cycles automatically if omitted. */
  tone?: "blue" | "yellow" | "pink" | "purple" | "teal";
  /** Short line shown on leadership cards. */
  quote?: string;
  githubUrl?: string;
  linkedinUrl?: string;
};

export type TeamGroup = {
  id: string;
  title: string;
  tone: Tone;
  /** Small chip on each member card, e.g. "Web/App Developer". */
  label?: string;
  members: Member[];
};

export type SocialPlatform = "github" | "linkedin" | "instagram" | "discord";

export type SocialLink = {
  platform: SocialPlatform;
  url: string;
};

export type Faq = {
  id: string;
  question: string;
  answer: string;
};

/**
 * Navbar branding, kept separate from the JSX.
 *
 * `mark` is the logo asset rendered in the navbar. It is the real file — never
 * redrawn in CSS.
 *
 * ⚠️ `public/logo.png` is the club's FULL lockup: planet, "BINJAS" wordmark and
 * the "Code. Create. Conquer." tagline. The navbar design calls for a mark-only
 * asset next to a two-line text lockup, so at navbar size the wordmark inside
 * the file duplicates the text beside it.
 *
 * If a mark-only version exists, drop it at `public/mark.png` and change this to
 * "/mark.png". Nothing else needs to change.
 */
export const brand = {
  mark: "/logo.png",
  name: "BINJAS",
  descriptor: "Coding Club",
  /** Where the navbar "Contact" button points. Must be an id that exists. */
  contactHref: "#contact",
} as const;

/** TODO (§10): replace the placeholders below with real club details. */
export const club = {
  name: "Binjas Coding Club",
  shortName: "Binjas",
  /** TODO: one line describing what the club is. */
  tagline: "Building, competing, and creating with technology.",
  institution: "Government Engineering College, Banka",
  location: "Banka, Bihar",
  /** TODO: founding year, as a number or null. */
  foundedYear: null as number | null,
  /** TODO: contact email. */
  email: null as string | null,
  /**
   * Path to the club logo inside /public, e.g. "/logo.png".
   *
   * TO PUT THE BINJAS LOGO ON THE SITE — two files, then one line:
   *   1. save the logo as `public/logo.png`        (nav, footer, share image)
   *   2. save the same file as `src/app/icon.png`  (browser tab favicon)
   *   3. set this field to "/logo.png"
   *
   * The mark is a full square lockup — planet, BINJAS wordmark and the
   * "Code. Create. Conquer." tagline — so the tagline is illegible below about
   * 56px. It is sized 40px in the nav and 64px in the footer.
   *
   * While this is null the site falls back to a neutral `</>` placeholder and
   * the text wordmark stays visible, so the layout is unaffected either way.
   */
  logo: "/logo.png" as string | null,
  /** TODO: production URL. Used for canonical link, OG tags and sitemap. */
  url: "https://binjascodingclub.example",
} as const;

/** TODO: real, verifiable numbers only — omit any you cannot prove. */
export const stats: ReadonlyArray<{
  label: string;
  value: number | null;
  icon: Tone;
}> = [
  { label: "Students reached", value: null, icon: "accent" },
  { label: "College hackathons", value: null, icon: "yellow" },
  { label: "Events & workshops", value: null, icon: "red" },
  { label: "Mentors", value: null, icon: "green" },
];

export const hero = {
  eyebrow: "Government Engineering College, Banka",
  /** TODO: sub-headline under the H1. This is also the meta description. */
  subheading:
    "A student-driven community building, competing, and creating with technology.",
  /** TODO: who the club is for, in the words you would use out loud. */
  audience: "A community of curious builders",
  /** Script-font note beside the avatar cluster, lower-left of the hero. */
  scriptNote: "Ideas into Impact",
  /** Optional photo for the tilted frame, top-right. Omit for a neutral placeholder. */
  image: undefined as string | undefined,
  /** TODO: three real club members, used for the avatar clusters. */
  people: [] as Array<{ name: string; photo?: string }>,
  /** Rotated sticker text, top-right. */
  impactLines: ["Students", "Technology", "Real Impact"],
  primaryAction: { label: "Explore Hackathon", href: "#hackathons" },
  secondaryAction: { label: "What We Do", href: "#about" },
} as const;

/** TODO: replace with the club's actual story and activities. */
export const about = {
  eyebrow: "What We Do",
  heading: "Learn. Build. Compete. Grow.",
  body: "TODO: one line on the format — hands-on learning, real projects, and a community that backs each other.",
  action: { label: "Explore all activities", href: "#about" },
  activities: [
    {
      icon: "code",
      tone: "accent",
      title: "Workshops",
      description: "TODO: hands-on sessions to learn and build with new technologies.",
    },
    {
      icon: "trophy",
      tone: "red",
      title: "Hackathons",
      description: "TODO: collaborative challenges that turn ideas into working prototypes.",
    },
    {
      icon: "github",
      tone: "green",
      title: "Open Source",
      description: "TODO: contribute, learn and grow through real open-source projects.",
    },
    {
      icon: "mentor",
      tone: "purple",
      title: "Mentorship",
      description: "TODO: learn from peers, seniors and industry experts.",
    },
    {
      icon: "mic",
      tone: "yellow",
      title: "Tech Talks",
      description: "TODO: discover ideas and technologies shaping the future.",
    },
  ] as Activity[],
};

export const hackathonHeading = {
  eyebrow: "College Hackathon",
  heading: "Hackathons",
  body: "TODO: one line on the format — how long, how many people, what gets built.",
} as const;

/**
 * The centrepiece of the site. Lead with the hackathon the club ran at
 * Government Engineering College, then any others.
 */
export const hackathons: Hackathon[] = [
  {
    slug: "todo-hackathon-1",
    name: "TODO: Hackathon name",
    fullName: "TODO: Formal hackathon name",
    tagline: "TODO: one line — what it was and who it was for",
    date: "TODO: 2026-03-14",
    theme: "TODO: theme or brief",
    summary:
      "TODO: two or three sentences. Who turned up, what they built, how it ran.",
    story: [
      "TODO: the problem the brief set, and why it was chosen.",
      "TODO: how the day actually ran — teams, mentors, judging.",
      "TODO: what came out of it, and what you would change next time.",
    ],
    stats: [
      { label: "Participants", value: null, icon: "accent" },
      { label: "Teams", value: null, icon: "green" },
      { label: "Hours", value: null, icon: "red" },
      { label: "Projects", value: null, icon: "yellow" },
    ],
    images: [],
    status: "past",
  },
];

export const eventsHeading = {
  eyebrow: "Events & Workshops",
  heading: "Where ideas turn into action.",
  body: "Practical bootcamps, technical workshops, and coding challenges designed for student builders at Government Engineering College, Banka.",
  action: { label: "View all events", href: "#events" },
} as const;

export const events: ClubEvent[] = [
  {
    id: "bootcamp-nextjs-2026",
    title: "Full-Stack Web & Next.js Bootcamp",
    date: "2026-11-18",
    time: "10:00 AM – 4:00 PM",
    location: "Seminar Hall, GEC Banka",
    description:
      "A comprehensive hands-on workshop building production-grade web applications with Next.js App Router, React 19, and Tailwind CSS from scratch.",
    tags: ["Next.js", "React 19", "Tailwind CSS", "Full Stack"],
    category: "workshop",
    categoryLabel: "Flagship Workshop",
    featured: true,
    highlights: [
      "Server Components & App Router",
      "REST & API Route Handlers",
      "State Management & UI Patterns",
      "Live Deployment to Vercel",
    ],
    attendeesCount: 45,
    status: "upcoming",
  },
  {
    id: "ai-llm-workshop-2026",
    title: "AI & LLMs in Practice: Modern APIs",
    date: "2026-12-05",
    time: "2:00 PM – 5:00 PM",
    location: "Computer Lab 2, GEC Banka",
    description:
      "Hands-on exploration of prompt engineering, function calling, vector search, and building custom agentic workflows on the edge.",
    tags: ["AI / LLM", "Prompt Engineering", "APIs"],
    category: "tech-talk",
    categoryLabel: "Workshop & Demo",
    highlights: ["Prompt Architecture", "Function Calling", "Embeddings"],
    status: "upcoming",
  },
  {
    id: "dsa-sprint-2026",
    title: "DSA Sprint & Competitive Coding Jam",
    date: "2026-12-14",
    time: "3:00 PM – 6:00 PM",
    location: "Coding Club Lab, GEC Banka",
    description:
      "Fast-paced 3-hour problem-solving contest with live leaderboard and peer discussions on optimal trees, graphs, and dynamic programming.",
    tags: ["Algorithms", "Data Structures", "Contest"],
    category: "coding-jam",
    categoryLabel: "Coding Jam",
    highlights: ["Graph Algorithms", "Dynamic Programming", "Live Leaderboard"],
    status: "upcoming",
  },
  {
    id: "open-source-sprint-2026",
    title: "Open Source Git & GitHub Contribution Sprint",
    date: "2026-12-20",
    time: "11:00 AM – 2:00 PM",
    location: "Auditorium / Hybrid",
    description:
      "Learn branching workflows, pull requests, code reviews, and make your first verified contribution to real campus open-source projects.",
    tags: ["Open Source", "Git Flow", "First PR"],
    category: "workshop",
    categoryLabel: "Community Sprint",
    highlights: ["Git Flow", "Pull Requests", "Code Review"],
    status: "upcoming",
  },
];

export const teamHeading = {
  eyebrow: "Members",
  heading: "The People Behind Binjas",
  body: "The faculty and students who run Binjas Coding Club, team by team.",
} as const;

const m = (slug: string) => `/team/${slug}.jpg`;

/** Student card: photo is /public/team/<name-as-slug>.jpg, e.g. "Niraj Kumar" -> niraj-kumar.jpg */
const student = (name: string, branch: string): Member => ({
  name,
  branch,
  photo: m(name.toLowerCase().replace(/[^a-z0-9]+/g, "-")),
});

const COORDINATOR: Member = {
  name: "Prof. Nadiya Zafar",
  role: "Coding Club Coordinator",
  photo: m("nadiya-zafar"),
};

/**
 * Order here is the order on the page. Only people who have agreed to appear by
 * name and photo should be listed. Photos live in `public/team/`.
 */
export const teamGroups: TeamGroup[] = [
  {
    id: "leadership",
    title: "Leadership",
    tone: "purple",
    members: [
      {
        name: "Dr. Shabbiruddin",
        role: "Principal",
        photo: m("dr-shabbiruddin"),
        quote: "Vision today, a brighter tomorrow.",
      },
      { ...COORDINATOR, quote: "Turning ideas into impact." },
    ],
  },
  {
    id: "web-app",
    title: "Web / App Developers",
    tone: "accent",
    label: "Web/App Developer",
    members: [
      student("Niraj Kumar", "CSE(IoT)"),
      student("Vivek Kumar", "CSE(IoT)"),
      student("Prince Kumar", "CSE"),
      student("Skanda Kumari", "CSE"),
    ],
  },
  {
    id: "social-media",
    title: "Social Media Team",
    tone: "red",
    label: "Social Media Team",
    members: [
      student("Rohit Kumar", "CSE(IoT)"),
      student("Shabnam Kumari", "CSE(IoT)"),
      student("Jyoti Sharma", "CSE"),
      student("Soumya", "CSE"),
      student("Tejaswini Kumari", "CSE"),
    ],
  },
  {
    id: "content-writers",
    title: "Content Writers",
    tone: "yellow",
    label: "Content Writer",
    members: [
      student("Shubham Saurav", "CSE"),
      student("Ravi Raj", "CSE"),
      student("Prerna Kumari", "CSE"),
      student("Skanda Kumari", "CSE"),
    ],
  },
  {
    id: "graphics",
    title: "Graphics Designing Team",
    tone: "purple",
    label: "Graphic Designer",
    members: [
      student("Aryan Kumar", "CSE"),
      student("Prerna Kumari", "CSE"),
      student("Skanda Kumari", "CSE"),
      student("Shiwani Kumari", "CSE(IoT)"),
      student("Rohit Kumar", "CSE(IoT)"),
      student("Shabnam Kumari", "CSE(IoT)"),
      student("Jyoti Sharma", "CSE"),
      student("Soumya", "CSE"),
      student("Tejaswini Kumari", "CSE"),
    ],
  },
  {
    id: "event-outreach",
    title: "Event Coordinator & Outreach",
    tone: "green",
    label: "Event & Outreach",
    members: [
      student("Rohit Chaubey", "CSE(IoT)"),
      student("Shiwani Kumari", "CSE(IoT)"),
      student("Vivek Kumar", "CSE(IoT)"),
      student("Prince Kumar", "CSE"),
      student("Ravi Raj", "CSE"),
      student("Prerna Kumari", "CSE"),
      student("Niraj Kumar", "CSE(IoT)"),
      student("Chandan Kumar", "CSE"),
    ],
  },
  {
    id: "query-events",
    title: "Query & Event Handler",
    tone: "accent",
    label: "Query & Event Handler",
    members: [
      COORDINATOR,
      student("Rohit Chaubey", "CSE(IoT)"),
      student("Shubham Saurav", "CSE"),
      student("Prerna Kumari", "CSE"),
      student("Soumya", "CSE"),
    ],
  },
  {
    id: "marketing",
    title: "Marketing & Sponsorship",
    tone: "yellow",
    label: "Marketing & Sponsorship",
    members: [
      COORDINATOR,
      student("Rohit Chaubey", "CSE(IoT)"),
      student("Niraj Kumar", "CSE(IoT)"),
      student("Chandan Kumar", "CSE"),
      student("Prerna Kumari", "CSE"),
    ],
  },
  {
    id: "finance",
    title: "Finance & Budget Team",
    tone: "green",
    label: "Finance & Budget",
    members: [
      COORDINATOR,
      student("Rohit Chaubey", "CSE(IoT)"),
      student("Aryan Kumar", "CSE"),
      student("Jyoti Sharma", "CSE"),
      student("Prince Kumar", "CSE"),
    ],
  },
];

/** Flat list, kept so the nav can tell whether the section has any content. */
export const team: Member[] = teamGroups.flatMap((group) => group.members);

export type RequestKind = {
  icon: ActivityIcon;
  tone: Tone;
  title: string;
  description: string;
};

export const requestHeading = {
  eyebrow: "Request",
  heading: "Have an idea or need something from us?",
  body: "Ask for a workshop topic, propose a collaboration, support an event, or send the club a question.",
} as const;

/** The three cards beside the form. Empty array hides the whole section. */
export const requestKinds: RequestKind[] = [
  {
    icon: "code",
    tone: "accent",
    title: "Workshop or session",
    description: "Ask for a session on a topic you want to learn.",
  },
  {
    icon: "mentor",
    tone: "green",
    title: "Collaboration",
    description: "Propose a joint event, project or contest.",
  },
  {
    icon: "rocket",
    tone: "yellow",
    title: "Sponsorship",
    description: "Support a club event or hackathon.",
  },
];

/** Choices in the "Request type" selector. The first one is selected by default. */
export const requestTypes = ["Workshop", "Collaboration", "Sponsorship", "Question"] as const;

export type RoadmapLink = {
  /** Two-letter badge shown in the coloured tile, e.g. "FE". */
  badge: string;
  tone: Tone;
  title: string;
  description: string;
  /** Full roadmap.sh address. Opens in a new tab. */
  url: string;
};

export const roadmapHeading = {
  eyebrow: "Roadmap.sh",
  heading: "Pick a path and start learning",
  body: "roadmap.sh has free, community-made roadmaps that show what to learn and in what order. Here are a few good places to start.",
  action: { label: "Browse all roadmaps", href: "https://roadmap.sh" },
} as const;

/** Cards in the Roadmap section. Empty array hides the section and its nav link. */
export const roadmaps: RoadmapLink[] = [
  {
    badge: "FE",
    tone: "accent",
    title: "Frontend",
    description: "HTML, CSS, JavaScript and frameworks.",
    url: "https://roadmap.sh/frontend",
  },
  {
    badge: "BE",
    tone: "green",
    title: "Backend",
    description: "Servers, databases and APIs.",
    url: "https://roadmap.sh/backend",
  },
  {
    badge: "FS",
    tone: "purple",
    title: "Full Stack",
    description: "Frontend and backend together.",
    url: "https://roadmap.sh/full-stack",
  },
  {
    badge: "DO",
    tone: "yellow",
    title: "DevOps",
    description: "Deploy, automate and run software.",
    url: "https://roadmap.sh/devops",
  },
  {
    badge: "DS",
    tone: "red",
    title: "Data Structures & Algorithms",
    description: "Problem solving for coding rounds and contests.",
    url: "https://roadmap.sh/datastructures-and-algorithms",
  },
  {
    badge: "Py",
    tone: "accent",
    title: "Python",
    description: "A language path from basics onward.",
    url: "https://roadmap.sh/python",
  },
  {
    badge: "An",
    tone: "green",
    title: "Android",
    description: "Build apps for Android phones.",
    url: "https://roadmap.sh/android",
  },
  {
    badge: "Gi",
    tone: "purple",
    title: "Git & GitHub",
    description: "Version control and teamwork.",
    url: "https://roadmap.sh/git-github",
  },
];

export const faqHeading = {
  eyebrow: "FAQ",
  heading: "Frequently Asked Questions",
  body: "TODO: one line — answers to common questions about the club.",
  action: { label: "View all FAQs", href: "#faq" },
} as const;

/**
 * Informational only — the site does not accept signups, so nothing here asks
 * the visitor to join. Questions about joining and fees were removed.
 */
export const faqs: Faq[] = [
  {
    id: "what",
    question: "What does Binjas Coding Club do?",
    answer: "TODO: the plainest possible answer, in two or three sentences.",
  },
  {
    id: "when",
    question: "When and where does the club meet?",
    answer: "TODO: the real schedule — day, time and room or venue.",
  },
  {
    id: "events",
    question: "What kind of events are organised?",
    answer: "TODO: list the formats the club actually runs, with a real example of each.",
  },
  {
    id: "updates",
    question: "How can I stay updated?",
    answer: "TODO: where the club posts — Instagram, WhatsApp group, notice board, or all three.",
  },
];

/**
 * Nav links, derived from what actually renders. Sections with no content are
 * dropped so the navbar can never point at an anchor that is not on the page.
 *
 * Declared after every section's data so those arrays are already initialised.
 */
export const navLinks = [
  { label: "About", href: "#about" },
  ...(hackathons.length > 0 ? [{ label: "Hackathons", href: "#hackathons" }] : []),
  ...(events.length > 0 ? [{ label: "Events", href: "#events" }] : []),
  ...(team.length > 0 ? [{ label: "Members", href: "#members" }] : []),
  ...(requestKinds.length > 0 ? [{ label: "Request", href: "#request" }] : []),
  ...(roadmaps.length > 0 ? [{ label: "Roadmap.sh", href: "#roadmap" }] : []),
  ...(faqs.length > 0 ? [{ label: "FAQ", href: "#faq" }] : []),
];

/**
 * Navbar / footer social links. Order matches the design: GitHub, LinkedIn,
 * Instagram.
 *
 * ⚠️ The URLs below are deliberate placeholders and **must** be replaced before
 * launch. They are spelled `REPLACE_ME` so they are greppable and cannot
 * silently resolve to somebody else's account. An empty array hides the icons
 * and the divider entirely.
 */
export const socials: SocialLink[] = [
  { platform: "github", url: "https://github.com/REPLACE_ME" },
  { platform: "linkedin", url: "https://linkedin.com/company/REPLACE_ME" },
  { platform: "instagram", url: "https://instagram.com/REPLACE_ME" },
];

/** Display names for `aria-label`, since the platform keys are lowercase. */
export const socialLabels: Record<SocialPlatform, string> = {
  github: "GitHub",
  linkedin: "LinkedIn",
  instagram: "Instagram",
  discord: "Discord",
};

export const footer = {
  heading: "Government Engineering College, Banka",
  tagline: "Building a stronger tech community, one idea at a time.",
  credit: "Made with ♥ by the Binjas community",
} as const;
