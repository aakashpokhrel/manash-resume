// All content below is transcribed directly from Manash Pokhrel's resume PDF.
// Nothing here has been invented; brief bullet points were lightly rewritten for web copy.

export const personal = {
  name: 'Manash Pokhrel',
  title: 'SEO Specialist | Digital Marketing Professional',
  location: 'Kathmandu, Nepal',
  phone: '+977 980-334-4000',
  email: 'manashpokhrel@gmail.com',
}

export const about = {
  summary:
    'Digital marketing professional with a Diploma in Digital Marketing and hands-on training in Technical SEO, On-Page Optimization, Keyword Research, and Content Strategy, complemented by 11+ years of business management and operational leadership experience. Practical experience with WordPress website management, Google Analytics, and Google Ads, with a demonstrated record of developing marketing strategies that expanded customer reach and strengthened brand visibility in a competitive manufacturing sector. Brings a distinctive business-management lens to SEO work, comfortable connecting website optimization, content strategy, and search visibility to broader organizational and revenue goals through data-driven decision making. Currently deepening technical capability in Google Search Console, on-site SEO audits, and AI-assisted SEO and content workflows through an ongoing SEO Mastery certification.',
  yearsOfExperience: 11,
}

export const highlights: string[] = [
  'Technical & On-Page SEO',
  'WordPress Website Management',
  'Google Analytics & Ads',
  'Marketing Strategy',
  'Operations Management',
  'Team Leadership',
]

export interface SkillGroup {
  category: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'SEO & Content',
    items: ['Technical SEO', 'Keyword Research', 'On-Page SEO', 'Content Strategy', 'Google Search Console'],
  },
  {
    category: 'Analytics & Advertising',
    items: ['Google Analytics', 'Google Ads', 'Website Optimization'],
  },
  {
    category: 'Web & Design Tools',
    items: ['WordPress', 'Canva', 'Microsoft Office'],
  },
  {
    category: 'Business & Leadership',
    items: ['Marketing Strategy', 'Operations Management', 'Team Leadership'],
  },
]

export const languages: { name: string; level: string }[] = [
  { name: 'English', level: 'Fluent' },
  { name: 'Nepali', level: 'Native' },
  { name: 'Hindi', level: 'Fluent' },
]

export interface ExperienceEntry {
  organization: string
  role: string
  period: string
  bullets: string[]
  achievements?: string[]
}

export const experience: ExperienceEntry[] = [
  {
    organization: 'Rhinopass.com',
    role: 'Data Entry Worker',
    period: '2024 – Present',
    bullets: [
      'High-accuracy data entry and data verification to support business operations and reporting.',
      'Organize and maintain digital databases, improving data accessibility and reliability.',
      'Provide ongoing reporting support for operational decision-making.',
    ],
  },
  {
    organization: 'Everest Killa Udyog',
    role: 'General Manager',
    period: 'April 2016 – April 2024',
    bullets: [
      'Directed end-to-end factory operations, including production planning, quality control, and workflow efficiency.',
      'Led marketing strategy and brand-visibility initiatives to expand customer reach in a competitive manufacturing market.',
      'Provided team leadership across cross-functional teams and coordinated with vendors, distributors, and clients.',
      'Built and sustained long-term client relationships that supported consistent business growth.',
    ],
    achievements: [
      'Expanded customer reach and strengthened brand visibility over an eight-year tenure.',
      'Increased brand visibility through sustained marketing and operational leadership.',
      'Implemented new technologies and process improvements that modernized manufacturing workflows.',
      'Improved operational efficiency through more efficient, technology-enabled processes.',
    ],
  },
  {
    organization: 'Mount Everest Boarding Academy',
    role: 'School Coordinator',
    period: 'April 2013 – April 2016',
    bullets: [
      'Coordinated academic and administrative operations across departments, ensuring smooth day-to-day functioning.',
      'Organized promotional campaigns and community-outreach events that strengthened institutional visibility.',
    ],
  },
]

export interface EducationEntry {
  credential: string
  institution: string
  board?: string
  year: string
}

export const education: EducationEntry[] = [
  {
    credential: 'Diploma in Digital Marketing',
    institution: 'SkillShikshya, Nepal',
    year: '2024',
  },
  {
    credential: 'Bachelor of Business Administration (BBA)',
    institution: 'Purbanchal University, Nepal',
    year: '2007 – 2011',
  },
]

export const certifications: {
  name: string
  issuer: string
  year: string
}[] = [
  { name: 'SEO Mastery Course', issuer: 'Okra Social Academy', year: 'Ongoing' },
  { name: 'Social Media Marketing Certification', issuer: 'HP LIFE', year: '' },
  {
    name: 'Diploma in Digital Marketing',
    issuer: 'SkillShikshya, Nepal — SEO fundamentals, keyword research, on-page optimization, content strategy',
    year: '2024',
  },
]

export const achievements: { title: string; description?: string }[] = [
  { title: 'Winner, Springwood Advertisement Competition (2011)', description: 'Organized by KUSOM.' },
  { title: 'Led manufacturing operations for eight years', description: 'As General Manager at Everest Killa Udyog.' },
  { title: 'Expanded customer reach through marketing initiatives', description: 'Grew visibility in a competitive manufacturing market.' },
  { title: 'Modernized manufacturing workflows', description: 'Implemented new technologies and process improvements.' },
]

// No GitHub / LinkedIn / portfolio links were present on the source resume.
export const links: { label: string; url: string; icon: 'github' | 'linkedin' | 'globe' | 'mail' | 'phone' }[] = [
  { label: 'Email', url: `mailto:${personal.email}`, icon: 'mail' },
  { label: 'Phone', url: `tel:${personal.phone.replace(/\s+/g, '')}`, icon: 'phone' },
]

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
]
