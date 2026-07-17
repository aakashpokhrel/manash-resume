export interface ContactInfo {
  name: string;
  title: string;
  location: string;
  availability: string;
  phone: string;
  email: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface ExperienceEntry {
  role: string;
  company: string;
  dates: string;
  bullets?: string[];
  sections?: { heading: string; bullets: string[] }[];
}

export interface EducationEntry {
  degree: string;
  school: string;
  dates: string;
}

export interface CertificationEntry {
  name: string;
  issuer: string;
}

export const contact: ContactInfo = {
  name: "Manash Pokhrel",
  title: "SEO Specialist | Digital Marketing Professional",
  location: "Kathmandu, Nepal",
  availability: "Open to Remote / International Opportunities",
  phone: "+977 980-334-4000",
  email: "manashpokhrel@gmail.com",
};

export const summary: string =
  "Digital marketing professional with a Diploma in Digital Marketing and hands-on training in Technical SEO, On-Page Optimization, Keyword Research, and Content Strategy, complemented by 11+ years of business management and operational leadership experience. Practical experience with WordPress website management, Google Analytics, and Google Ads, with a demonstrated record of developing marketing strategies that expanded customer reach and strengthened brand visibility in a competitive manufacturing sector. Brings a distinctive business-management lens to SEO work — comfortable connecting website optimization, content strategy, and search visibility to broader organizational and revenue goals. Currently deepening technical capability in Google Search Console, on-site SEO audits, and AI-assisted SEO and content workflows through an ongoing SEO Mastery certification. Seeking to apply analytical rigor, operational discipline, and marketing execution skill to grow organic traffic and search performance for a growth-focused organization.";

export const skillGroups: SkillGroup[] = [
  {
    category: "Technical & On-Page SEO",
    items: [
      "Keyword Research",
      "On-Page Optimization",
      "Content Strategy",
      "Website Optimization",
      "Foundational SEO Audits",
      "Landing Page Management",
    ],
  },
  {
    category: "Website Management & CMS",
    items: ["WordPress", "Website Content Management", "Basic Crawlability & Indexing Awareness"],
  },
  {
    category: "Analytics & Reporting",
    items: ["Google Analytics", "Google Ads", "Data Management", "Performance Reporting"],
  },
  {
    category: "Digital Marketing & Design",
    items: ["Content Strategy", "Brand Visibility Campaigns", "Canva", "Microsoft Office"],
  },
  {
    category: "Business & Leadership",
    items: [
      "Marketing Strategy",
      "Operations Management",
      "Team Leadership",
      "Cross-Functional Coordination",
      "Stakeholder Relationship Management",
    ],
  },
];

export const currentlyDeveloping: string[] = [
  "Google Search Console",
  "Core Web Vitals",
  "Schema Markup",
  "XML Sitemaps & Robots.txt",
  "AI-Assisted SEO & Content Tools",
];

export const experience: ExperienceEntry[] = [
  {
    role: "Data Entry Worker",
    company: "Rhinopass.com — Remote",
    dates: "2024 – Present",
    bullets: [
      "Perform high-accuracy data entry and data verification to support business operations and reporting.",
      "Organize and maintain digital databases, improving data accessibility and reliability for operational decision-making.",
    ],
  },
  {
    role: "General Manager",
    company: "Everest Killa Udyog — Kathmandu, Nepal",
    dates: "April 2016 – April 2024",
    sections: [
      {
        heading: "Responsibilities",
        bullets: [
          "Directed end-to-end factory operations, including production planning, quality control, and workflow efficiency.",
          "Led marketing strategy and brand-visibility initiatives to expand customer reach in a competitive manufacturing market.",
          "Managed cross-functional teams and coordinated with vendors, distributors, and clients to sustain business performance.",
        ],
      },
      {
        heading: "Achievements",
        bullets: [
          "Developed and executed marketing strategies that increased customer reach and strengthened brand visibility over an eight-year tenure.",
          "Implemented new technologies and process improvements that modernized and streamlined manufacturing workflows.",
          "Built and sustained long-term client and vendor relationships that supported consistent business growth.",
        ],
      },
      {
        heading: "Business Impact",
        bullets: [
          "Strengthened the company's market position and brand recognition through sustained marketing and operational leadership.",
          "Established more efficient, technology-enabled operational processes that supported the business through eight years of continuous activity.",
        ],
      },
    ],
  },
  {
    role: "School Coordinator",
    company: "Mount Everest Boarding Academy Pvt. Ltd. — Kathmandu, Nepal",
    dates: "April 2013 – April 2016",
    bullets: [
      "Coordinated academic and administrative operations across departments, ensuring smooth day-to-day functioning.",
      "Organized promotional events and outreach campaigns that strengthened the institution's community reputation and visibility.",
    ],
  },
];

export const education: EducationEntry[] = [
  {
    degree: "Diploma in Digital Marketing",
    school: "SkillShikshya, Nepal",
    dates: "August 2024",
  },
  {
    degree: "Bachelor of Business Administration (BBA)",
    school: "Purbanchal University, Nepal",
    dates: "2007 – 2011",
  },
];

export const certifications: CertificationEntry[] = [
  { name: "SEO Mastery Course", issuer: "Okra Social Academy (Ongoing)" },
  { name: "Social Media Marketing Certification", issuer: "HP LIFE" },
  {
    name: "Diploma in Digital Marketing",
    issuer:
      "SkillShikshya, Nepal (coursework included SEO fundamentals, keyword research, on-page optimization, and content strategy)",
  },
];

export const achievements: string[] = [
  "First Position, Springwood Advertisement Competition (2011), organized by KUSOM.",
];

export const languages: { name: string; level: string }[] = [
  { name: "English", level: "Fluent" },
  { name: "Nepali", level: "Native" },
  { name: "Hindi", level: "Fluent" },
];
