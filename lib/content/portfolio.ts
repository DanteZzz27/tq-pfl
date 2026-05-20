export const site = {
  name: "Lea Hoang",
  title: "Marketing & Brand Events Professional",
  tagline: "Sport, culture, and campaigns that bring people together.",
  email: "hello@leahoang.vn",
  resumeUrl: "/resume.pdf",
  bookingUrl: "https://cal.com/lea-hoang",
  linkedin: "https://linkedin.com/in/leahoang",
  twitter: "https://twitter.com/leahoang",
  instagram: "https://instagram.com/leahoang",
};

export const navSections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "testimonials", label: "Praise" },
  { id: "contact", label: "Contact" },
] as const;

export const hero = {
  headline: ["Move", "people.", "Move", "product."],
  subheadline:
    "Vietnamese marketer, UEL Class of 2025. I build energy around sport brands—through product storytelling, live events, and account-ready execution.",
  kpis: [
    { value: "15+", label: "Events delivered" },
    { value: "3+", label: "Years with Adidas" },
    { value: "2025", label: "UEL graduate" },
  ],
};

export const about = {
  intro:
    "I'm a graduate of The University of Economics and Law (UEL), Class of 2025, with hands-on experience across Adidas sport products and live brand events. I bring local market insight, a sharp eye for detail, and a love for work that lives both on the shelf and in the stadium.",
  philosophy:
    "Sport marketing only works when it feels real. I focus on clear messaging, strong client relationships, and activations people actually want to show up for.",
  expertise: [
    "Sports Brand Marketing",
    "Event Activation",
    "Product Launches",
    "Account Support",
    "Social & Content",
    "Stakeholder Coordination",
  ],
  timeline: [
    { year: "2025", title: "Bachelor of Business (Marketing)", org: "The University of Economics and Law (UEL)" },
    { year: "2024", title: "Brand & Events Marketing", org: "Adidas" },
    { year: "2023", title: "Marketing & Events Coordinator", org: "Adidas" },
    { year: "2022", title: "Brand Ambassador", org: "Adidas Sportswear" },
  ],
};

export type Experience = {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  campaigns: { name: string; result: string }[];
};

export const experience: Experience[] = [
  {
    id: "adidas-events",
    company: "Adidas",
    role: "Brand & Events Marketing",
    period: "2023 — 2025",
    location: "Ho Chi Minh City, Vietnam",
    summary:
      "Supported Adidas sport product campaigns and live activations—from football and running to training—working across marketing, retail partners, and on-ground event teams.",
    highlights: [
      "Coordinated 15+ sport product and event activations across Ho Chi Minh City and regional markets",
      "Managed briefing docs, timelines, and asset delivery for cross-functional campaign teams",
      "Supported retail storytelling for new footwear and apparel drops with in-store POS and social kits",
      "Liaised with agencies and vendors to keep event run-of-shows on time and on brand",
    ],
    campaigns: [
      { name: "Ultraboost City Run Series", result: "2,400+ participants across 4 activations" },
      { name: "Football Season Kick-off", result: "+38% event sign-ups vs. prior year" },
    ],
  },
  {
    id: "adidas-ambassador",
    company: "Adidas",
    role: "Sportswear Brand Ambassador",
    period: "2022 — 2023",
    location: "Ho Chi Minh City, Vietnam",
    summary:
      "Represented Adidas sportswear on campus and at community events, driving product trial and brand affinity among young athletes and fitness communities.",
    highlights: [
      "Led product seeding and try-on moments at 8 university and community sport events",
      "Created social-first content capturing authentic product use in training settings",
      "Collected consumer feedback to inform local marketing and merchandising conversations",
    ],
    campaigns: [
      { name: "Campus Training Series", result: "120K+ organic social impressions" },
      { name: "Women in Sport Pop-up", result: "Sold-through hero SKU in 48 hours" },
    ],
  },
  {
    id: "uel-society",
    company: "The University of Economics and Law (UEL)",
    role: "Marketing Club — Events Lead",
    period: "2023 — 2025",
    location: "Ho Chi Minh City, Vietnam",
    summary:
      "While completing my degree at The University of Economics and Law, I led event programming and brand partnerships for the student marketing club.",
    highlights: [
      "Produced 6 industry networking events with brands and agency guest speakers",
      "Built sponsorship decks and run-of-show documents for partner activations",
      "Mentored first-year members on campaign planning and presentation skills",
    ],
    campaigns: [
      { name: "Sport & Brand Careers Night", result: "180+ student attendees" },
      { name: "Live Brief Challenge", result: "4 student teams pitched to industry judges" },
    ],
  },
  {
    id: "retail-intern",
    company: "Decathlon Vietnam",
    role: "Marketing Intern",
    period: "Summer 2022",
    location: "Ho Chi Minh City, Vietnam",
    summary:
      "Supported seasonal sportswear campaigns and in-store promotional activity for major athletic brands including Adidas.",
    highlights: [
      "Assisted campaign asset distribution to 12 stores across Ho Chi Minh City",
      "Tracked promotional performance and compiled weekly sell-through summaries",
      "Coordinated sample inventory for local influencer and athlete seeding",
    ],
    campaigns: [
      { name: "Back-to-Sport Season", result: "+14% footfall during launch week" },
    ],
  },
];

export type Project = {
  id: string;
  title: string;
  client: string;
  category: string;
  year: string;
  summary: string;
  metric: { value: string; label: string };
  gradient: string;
  challenge: string;
  strategy: string;
  execution: string;
  results: string[];
};

export const projects: Project[] = [
  {
    id: "ultraboost-run",
    title: "Ultraboost City Run Series",
    client: "Adidas",
    category: "Event Activation",
    year: "2024",
    summary:
      "A multi-city running series built to launch new Ultraboost product lines through community experience, not just advertising.",
    metric: { value: "2.4K+", label: "Runners activated" },
    gradient: "from-[#141414] to-[#6B6560]",
    challenge:
      "Adidas needed to cut through a crowded running market and connect the new Ultraboost story to real runners—not just performance specs.",
    strategy:
      "Designed a city-run format pairing product trial zones with local run clubs, creator hosts, and post-run retail moments.",
    execution:
      "Built event timelines, vendor briefs, and on-site content capture plans; coordinated staffing, product seeding, and social live coverage.",
    results: [
      "2,400+ participants across four city activations in Vietnam",
      "68% of attendees visited retail partner within 7 days",
      "1.2M social impressions from event content",
    ],
  },
  {
    id: "football-kickoff",
    title: "Football Season Kick-off",
    client: "Adidas",
    category: "Product & Retail",
    year: "2024",
    summary:
      "Season-opening campaign aligning football footwear, kit, and in-store storytelling for the autumn sports calendar.",
    metric: { value: "+38%", label: "Event sign-ups" },
    gradient: "from-[#8B3A2E] to-[#E8D5D0]",
    challenge:
      "Multiple football product lines were launching simultaneously with inconsistent messaging across retail and digital touchpoints.",
    strategy:
      "Unified campaign narrative around 'first touch' moments—linking product benefits to pre-match rituals and community play.",
    execution:
      "Produced retail toolkit, event registration flows, and ambassador talking points; supported pitch-side activations on launch weekend.",
    results: [
      "38% increase in event sign-ups vs. prior season",
      "22% uplift in hero boot SKU sell-through at key doors",
      "Featured in regional retail partner newsletter",
    ],
  },
  {
    id: "women-sport-popup",
    title: "Women in Sport Pop-up",
    client: "Adidas",
    category: "Brand Experience",
    year: "2023",
    summary:
      "A one-day pop-up celebrating women in sport with product trial, panel talks, and community training sessions.",
    metric: { value: "48hr", label: "Hero SKU sell-out" },
    gradient: "from-[#D4846F] to-[#3d2a26]",
    challenge:
      "Engage a younger female audience with authentic sport culture—not generic lifestyle imagery.",
    strategy:
      "Partnered with local athletes and trainers for live sessions, with product zones focused on fit, function, and story.",
    execution:
      "Managed vendor bookings, run-of-show, influencer arrivals, and real-time social coverage from the event floor.",
    results: [
      "Sold out hero SKU within 48 hours",
      "350+ on-site attendees",
      "4.9/5 average attendee satisfaction score",
    ],
  },
  {
    id: "campus-training",
    title: "Campus Training Series",
    client: "Adidas Sportswear",
    category: "Community Marketing",
    year: "2023",
    summary:
      "University roadshow bringing Adidas training product to student athletes through coached sessions and social content.",
    metric: { value: "120K", label: "Social impressions" },
    gradient: "from-[#6B6560] to-[#F7F5F2]",
    challenge:
      "Build brand preference among Gen Z athletes who discover product through peers and short-form video, not traditional ads.",
    strategy:
      "Micro-event format: 90-minute training sessions, product try-on, and student creator capture kits at each stop.",
    execution:
      "Recruited campus reps, distributed product samples, and coordinated TikTok/Reels content with consistent brand tags.",
    results: [
      "120K+ organic social impressions",
      "8 events across universities in Ho Chi Minh City",
      "32 pieces of UGC submitted for brand channels",
    ],
  },
];

export type Skill = {
  name: string;
  level: number;
  category: string;
};

export const skills: Skill[] = [
  { name: "Sports Brand Marketing", level: 88, category: "Strategy" },
  { name: "Event Planning & Activation", level: 90, category: "Execution" },
  { name: "Account & Client Support", level: 85, category: "Leadership" },
  { name: "Product Launch Support", level: 87, category: "Execution" },
  { name: "Social Media & Content", level: 86, category: "Channels" },
  { name: "Retail & POS Campaigns", level: 82, category: "Channels" },
  { name: "Campaign Reporting", level: 80, category: "Data" },
  { name: "Stakeholder Communication", level: 89, category: "Leadership" },
  { name: "Microsoft Office & Canva", level: 88, category: "Tools" },
  { name: "Presentation & Pitching", level: 84, category: "Leadership" },
];

export const testimonials = [
  {
    quote:
      "Lea is the person you want running point on an activation—calm on event day, sharp in the brief, and always thinking about the brand story.",
    author: "Tom Fletcher",
    role: "Events Producer",
    company: "Adidas",
  },
  {
    quote:
      "She brought genuine energy to our sport product campaigns and understood how to connect retail, social, and live experience in one plan.",
    author: "Nina Okoro",
    role: "Brand Marketing Manager",
    company: "Adidas",
  },
  {
    quote:
      "One of our strongest UEL marketing graduates—organized, creative, and ready for client-facing work from day one.",
    author: "Dr. Nguyễn Minh Anh",
    role: "Senior Lecturer, Marketing",
    company: "The University of Economics and Law (UEL)",
  },
  {
    quote:
      "Lea's understanding of Vietnamese youth culture and local sport communities helped us reach audiences with much more authenticity.",
    author: "James Reid",
    role: "Community Partnerships Lead",
    company: "Adidas",
  },
];
