// =============================================================================
// PERSONAL INFORMATION
// =============================================================================

export const PERSONAL_INFO = {
  name: 'Shakeel Ahamad',
  title: 'Senior PHP Laravel Developer | Backend Engineer',
  email: 'shakeel900560@gmail.com',
  phone: '+919005607897',
  phoneFormatted: '+91 (9005) 607-897',
  location: 'Ahmedabad, Gujarat, India',
  bio: 'Software Engineer with 5+ years of experience in backend development specializing in PHP, Laravel, CodeIgniter, Node.js, MySQL, and REST APIs. Hands-on experience with React.js, Next.js, JWT authentication, AWS, third-party integrations, and scalable application architecture. Passionate about writing clean, maintainable code and currently expanding expertise in ASP.NET Core, C#, Entity Framework Core, and SQL Server.',
  longBio:
    'Software Engineer with 5+ years of experience in backend development specializing in PHP, Laravel, CodeIgniter, Node.js, MySQL, and REST APIs. Hands-on experience with React.js, Next.js, JWT authentication, AWS, third-party integrations, and scalable application architecture. Passionate about writing clean, maintainable code and currently expanding expertise in ASP.NET Core, C#, Entity Framework Core, and SQL Server.',
  avatarUrl: '/shakeel_dp.jpeg',
  resumeUrl: 'https://drive.google.com/uc?export=download&id=1kn4PvARs-nUzxj7_m0EkekJcpdiVEwbV',
  socialLinks: {
    github: 'https://github.com/ShakeelAhamad',
    linkedin: 'https://linkedin.com/in/shakeel-ahamad-708828159',
    portfolio: 'https://uzairansari11.github.io',
  },
  yearsOfExperience: '5+',
  availability: {
    status: 'Available for opportunities',
    remote: true,
    onsite: true,
  },
} as const;

// =============================================================================
// NAVIGATION
// =============================================================================

export const NAV_ITEMS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
] as const;

// =============================================================================
// HERO SECTION
// =============================================================================

export const HERO_CONTENT = {
  badge: {
    status: 'Available for opportunities',
    showPulse: true,
  },
  description:
    'Software Engineer with 5+ years of experience in backend development specializing in PHP, Laravel, CodeIgniter, Node.js, MySQL, and REST APIs. Hands-on experience with React.js, Next.js, JWT authentication, AWS, third-party integrations, and scalable application architecture. Passionate about writing clean, maintainable code and currently expanding expertise in ASP.NET Core, C#, Entity Framework Core, and SQL Server.',
  cta: {
    primary: {
      text: 'Get In Touch',
      href: '#contact',
      icon: 'Send',
    },
    secondary: {
      text: 'View Resume',
      href: PERSONAL_INFO.resumeUrl,
      icon: 'Download',
      external: true,
    },
  },
  stats: [
    { icon: 'Rocket', value: '20', label: 'Products Shipped' },
    { icon: 'Code2', value: '20+', label: 'Technologies' },
    { icon: 'Users', value: '2,500+', label: 'Active Users' },
  ],
  coreTechnologies: ['PHP','Laravel','CodeIgniter','ASP.NET Core', 'Node.js', 'TypeScript'],
  achievement: {
    title: 'Key Achievement',
    description:
      'Spearheaded backend development across 10+ enterprise web applications, delivering scalable CRM, ERP, healthcare, and e-commerce solutions using PHP, Laravel, and MySQL.',
  },
  liveProjects: [
    { name: 'AskVoya AI Travel Platform', icon: 'Sparkles' },
    { name: 'iMedSource', icon: 'Phone' },
    { name: 'ProMax Card', icon: 'Users' },
    { name: 'Ridax Technologie', icon: 'Clock' },
  ],
  experienceLabel: {
    years: 'Years',
    experience: 'Experience',
  },
  liveProjectsSection: {
    title: 'Live Projects',
    status: 'Active',
  },
  coreTechLabel: 'Core Technologies',
  socialLinks: [
    { platform: 'GitHub', icon: 'Github' },
    { platform: 'LinkedIn', icon: 'Linkedin' },
    { platform: 'Email', icon: 'Mail' },
  ],
} as const;

// =============================================================================
// ABOUT SECTION
// =============================================================================

export const ABOUT_CONTENT = {
  heading: {
    title: 'Who I Am',
    subtitle: 'Senior PHP Laravel Developer building scalable enterprise web applications',
  },
  paragraphs: [
    "I'm a <strong>Senior PHP Laravel Developer | Backend Engineer</strong> with <strong>5+ years of experience</strong> developing enterprise applications and REST APIs. I enjoy building modern, responsive web applications using <strong>PHP, Laravel, CodeIgniter, React.js, ASP.NET Core, Node.js, MySQL, MongoDB, and SQL Server</strong>, while following clean architecture and best development practices.",
    'I build enterprise-grade web applications using <strong>PHP, Laravel, CodeIgniter , ASP.NET Core, React.js, Next.js, Node.js</strong>. I collaborate with Agile teams to deliver scalable, high-performance solutions while optimizing application performance and maintainability.',
  ],
  services: [
     {
      icon: 'Layers',
      title: 'Backend Development',
      desc: 'Scalable REST APIs with PHP, Laravel, ASP.NET, Node.js, MySQL, SQL Server, and MongoDB.',
      num: '01',
    },
    {
      icon: 'Globe',
      title: 'Frontend Engineering',
      desc: 'Enterprise-grade UIs with Bootstrap, HTML5, React, Next.js, modern UI libraries.',
      num: '02',
    },
    {
      icon: 'Code2',
      title: 'Full Stack Solutions',
      desc: 'End-to-end product development with workflow automation and analytics.',
      num: '03',
    },
    {
      icon: 'Radio',
      title: 'Real-Time Applications',
      desc: 'WebRTC, live dashboards, and communication systems.',
      num: '04',
    },
  ],
  cta: {
    primary: { text: 'View My Work', href: '#projects' },
    secondary: { text: 'Get In Touch', href: '#contact' },
  },
} as const;

// =============================================================================
// PROJECTS
// =============================================================================

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
  techStacks?: TechStack[];
}

export interface TechStack {
  id: string;
  title: string;
  src?: string;
}

export const PROJECTS: Project[] = [
  {
    id: 'p6',
    title: 'AskVoya',
    description:
      'Developed a scalable AI-powered travel platform using Next.js, React.js, TypeScript, and Tailwind CSS, featuring an admin dashboard, AI chatbot integration, itinerary management, and REST APIs. Optimized application performance with Server-Side Rendering (SSR) and collaborated with Node.js and MongoDB backend services to deliver secure, scalable, and high-quality solutions in an Agile environment.',
    image: '/askvoya.png',
    tags: ['Next.js', 'React.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB','REST APIs'],
    demoUrl: 'https://askvoya.com/',
    githubUrl: '',
  },
  {
    id: 'p5',
    title: 'ProMax Card',
    description:
      'Developed secure web applications using PHP and Laravel with user authentication, role-based access control, and profile management. Integrated third-party APIs and built responsive, user-friendly interfaces using Bootstrap and JavaScript to deliver scalable and efficient business solutions.',
    image: '/promaxcard.png',
    tags: ['Laravel', 'PHP', 'MySQL', 'Bootstrap', 'JavaScript', 'REST APIs'],
    demoUrl: 'https://promaxcard.com/',
    githubUrl: '',
  },
  {
    id: 'p2', 
    title: 'Khushal Clothing LLP',
    description:
      'Developed a comprehensive ERP Management System for Khushal Clothing LLP featuring secure multi-user authentication, role-based access control, master data management, business reporting, and automated email/WhatsApp notifications. Built scalable modules for financial and operational workflows, enabling efficient business management with Excel/PDF report exports.',
    image: '/khushal_clothing.png',
    tags: ['CodeIgniter 3', 'PHP', 'Bootstrap', 'JavaScript', 'jQuery','AJAX','MySQL'],
    demoUrl: '',
    githubUrl: '',
  },
  {
    id: 'p1',
    title: 'DhartiVikas',
    description:
      'Developed a multi-user business management platform with customer management, coupon management, tiffin services, delivery tracking, and administrative dashboards. Enhanced application performance, streamlined business operations, and improved the overall user experience through optimized reporting and management features.',
    image: '/dhartivikas.png',
    tags: ['Laravel', 'PHP', 'MySQL', 'JavaScript','JQuery', 'Bootstrap','DataTable'],
    demoUrl: 'https://appcodetechnology.com/dhartivikas/',
    githubUrl: 'https://github.com/ShakeelAhamad/dhartivikas',
  },
  {
    id: 'p3',
    title: 'iMedSource⁠',
    description:
      'Developed a healthcare marketing platform with secure authentication, role-based access control, webinar management, and content management features. Integrated third-party APIs and collaborated with cross-functional teams to deliver scalable, efficient, and user-focused healthcare solutions.',
    image: '/imedsource.png',
    tags: ['Laravel','PHP','MySQL', 'HTML', 'CSS', 'Bootstrap', 'JavaScript','JQuery','REST APIs'],
    demoUrl: 'https://www.imedsource.org/',
    githubUrl: 'https://github.com/ShakeelAhamad/imedsource',
  },
  {
    id: 'p4',
    title: 'Security Services Management System',
    description:
      'Developed a secure Attendance Management System with multi-user authentication, role-based access control, employee and client management, duty allocation, and shift scheduling. Built comprehensive attendance, payroll, and operational reporting features while optimizing database performance to ensure scalable, reliable, and efficient business operations.',
    image: '/security-services.png',
    tags: ['Laravel','PHP','MySQL','JavaScript','JQuery','Bootstrap', 'HTML5', 'CSS3'],
    demoUrl: '',
    githubUrl: 'https://github.com/ShakeelAhamad/security-services',
  },
] as const;

export const PROJECTS_CONTENT = {
  heading: {
    title: "What I've Built",
    subtitle: 'Side projects and apps crafted from the ground up',
  },
} as const;

// =============================================================================
// EXPERIENCE & PROJECT HIGHLIGHTS
// =============================================================================

export interface ProjectMetric {
  value: string;
  label: string;
}

export interface ProjectHighlight {
  name: string;
  tagline: string;
  techStack: string[];
  description: string;
  metrics: ProjectMetric[];
  keyFeatures: string[];
  contributions: string[];
}

export const PROJECT_HIGHLIGHTS: ProjectHighlight[] = [
  {
    name: 'Nourma',
    tagline: 'Financial ERP & Cashflow Forecasting Platform',
    techStack: [
      'React',
      'Next.js',
      'HeroUI',
      'React Query',
      'React Hook Form',
      'Zod',
      'TanStack Table',
      'Tailwind CSS',
    ],
    description:
      'Independently built major frontend modules from scratch for an AI-powered finance platform with OCR-driven document handling, 90-day cashflow forecasting, and automated vendor email draft generation — reducing up to 60% of manual intervention.',
    metrics: [
      { value: '60%', label: 'Less Manual Work' },
      { value: '1000+', label: 'Data Points Handled' },
      { value: '90-Day', label: 'Cashflow Forecasting' },
    ],
    keyFeatures: [
      '90-day cashflow forecasting with hierarchical grids',
      'OCR-driven document handling & automation',
      'AI-powered chat with real-time streaming responses',
      'Automated vendor email draft generation',
      'High-performance virtualized tables (1000+ rows)',
      'Dynamic forms with Zod schema validation',
    ],
    contributions: [
      'Developed finance automation workflows for OCR-driven document handling, 90-day cashflow forecasting, and automated vendor email draft generation — reducing up to 60% of manual intervention',
      'Built the entire 90-day cashflow forecasting grid system from scratch — hierarchical expandable rows for entities, vendors, and categories with real-time financial data',
      'Designed and implemented high-performance virtualized tables using TanStack Table to handle 1000+ data points with smooth scrolling and no lag',
      'Developed a ChatGPT-like AI chat interface with streaming responses for financial analytics — users can query financial data conversationally',
      'Implemented complex dynamic forms with React Hook Form + Zod validation for transaction entry, vendor management, and financial configurations',
      'Built data visualization dashboards with real-time analytics, charts, and financial summaries for business decision-making',
      'Integrated React Query for server state management with automatic caching, background refetching, and optimistic updates across all financial modules',
      'Created a modular UI system using HeroUI + Tailwind CSS with consistent design patterns, responsive layouts, and reusable financial components',
    ],
  },
  {
    name: 'Lineomatic',
    tagline: 'Enterprise CRM & Supply Chain Management Platform',
    techStack: ['React', 'Next.js', 'React Hook Form', 'SWR', 'Material UI', 'JavaScript'],
    description:
      "Independently built the complete frontend from scratch for a high-level enterprise CRM that digitized the company's entire supply chain. Engineered a quotation workflow that reduced quote creation time from 2 hours to 3 minutes, decreased manual effort by 80%, and supported a 30% increase in revenue.",
    metrics: [
      { value: '2hrs→3min', label: 'Quote Creation Time' },
      { value: '80%', label: 'Less Manual Effort' },
      { value: '30%', label: 'Revenue Increase' },
    ],
    keyFeatures: [
      'End-to-end supply chain workflow management',
      'Dynamic quotation system with multi-machine configuration & pricing',
      'Multi-level work order assignment, tracking & cancellation',
      'Order lifecycle management — creation to fulfillment',
      'Real-time revenue tracking & business analytics',
      'Role-based workflows with multi-level approvals',
    ],
    contributions: [
      'Engineered a highly flexible quotation workflow that reduced quote creation time from 2 hours to 3 minutes, decreased manual effort by 80%, and supported a 30% increase in revenue',
      'Single-handedly architected and built the entire frontend for a company-wide CRM that digitized their complete supply chain operations',
      'Designed a dynamic quotation system supporting multiple machine models, configurable units, conditional pricing logic, optional add-ons, and real-time total calculations',
      'Built a multi-level work order system — order creation, assignment across levels, status tracking, escalation, and multi-level cancellation workflows',
      'Implemented complete order management lifecycle — from quotation approval to order placement, fulfillment tracking, and delivery confirmation',
      'Developed advanced form architecture with React Hook Form — dynamic field arrays, nested structures, conditional rendering, and real-time validation for complex business forms',
      'Built revenue and analytics dashboards that gave management real-time visibility into business performance — directly contributing to 30% revenue growth',
      'Integrated SWR for efficient data fetching with automatic caching, revalidation, and optimistic UI updates across the entire platform',
      'Created a scalable modular component system — reusable form inputs, configuration panels, data tables, dialogs, and summary views used across all modules',
    ],
  },
  {
    name: 'Pulse',
    tagline: 'Unified Communication Platform — Voice, SMS & WhatsApp',
    techStack: ['Next.js', 'SIP.js', 'WebRTC', 'Material UI', 'SWR', 'Redux'],
    description:
      'Built the complete frontend from scratch for a unified communication platform consolidating VoIP calling, SMS, and WhatsApp chat. Delivered low-latency VoIP workflows for 1,500+ active users with call handling, transfers, live transcription, and multi-channel messaging.',
    metrics: [
      { value: '1,500+', label: 'Active Users' },
      { value: 'Real-Time', label: 'Call Transcription' },
      { value: '3-in-1', label: 'Voice, SMS & WhatsApp' },
    ],
    keyFeatures: [
      'Inbound & outbound VoIP calling with SIP.js & WebRTC',
      'Call barge, blind transfer & attended transfer',
      'Real-time call transcription during active calls',
      'SMS & WhatsApp chat with unified inbox',
      'System notifications for incoming calls on inactive tabs',
      'Multi-session calling, conference & DTMF tones',
    ],
    contributions: [
      'Built the complete unified communication frontend from scratch using Next.js — voice, SMS, and WhatsApp all in one platform',
      'Implemented full VoIP calling system with SIP.js & WebRTC — inbound calls, outbound calls, hold/unhold, mute, and multi-session management',
      'Built advanced call controls — call barge (listen/whisper/join), blind transfer, attended transfer, and conference calling with DTMF tone support',
      'Developed real-time call transcription UI that displays live transcripts during active calls',
      'Built SMS and WhatsApp chat interfaces with real-time messaging, conversation history, and unified inbox',
      'Created system notification system — browser notifications for incoming calls even when the tab is inactive, ensuring no calls are missed',
      'Managed complex call state machine with Redux — handling simultaneous sessions, call transfers between agents, and real-time status updates',
      'Integrated SWR for efficient data fetching across all communication modules with caching and real-time sync',
    ],
  },
  {
    name: 'TimeTracker',
    tagline: 'Internal Project Management & Time-Tracking Tool',
    techStack: ['React', 'Next.js', 'Material UI', 'Redux', 'REST APIs'],
    description:
      'Drove frontend development of a project management and time-tracking platform that replaced a paid SaaS solution. Established a shared component library that reduced feature delivery time by 40%.',
    metrics: [
      { value: '40%', label: 'Faster Delivery' },
      { value: 'SaaS', label: 'Replacement' },
      { value: 'Shared', label: 'Component Library' },
    ],
    keyFeatures: [
      'Project and task management workflows',
      'Time tracking with billable hours calculation',
      'Team productivity dashboards and reports',
      'Sprint planning and resource allocation',
      'Shared component library for rapid development',
      'Multi-project time tracking and allocation',
    ],
    contributions: [
      'Drove frontend development of the project management platform, replacing a paid SaaS tool and reducing operational costs',
      'Established a shared component library used across all 4 products, reducing feature delivery time by 40%',
      'Built project and task management workflows with drag-and-drop interfaces for sprint planning',
      'Developed time tracking functionality with billable hours calculation and automated timesheet generation',
      'Created productivity dashboards showing team velocity, burndown charts, and resource utilization',
      'Implemented multi-project time tracking allowing developers to allocate hours across multiple projects',
      'Built reporting system for project managers to track progress, budgets, and team performance',
      'Designed reusable form components, data tables, and UI patterns adopted across all company products',
    ],
  },
] as const;

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string[];
  technologies: string[];
}

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp-1',
    company: 'AppBits Technologies Private Limited',
    position: 'Senior PHP Laravel Developer',
    duration: 'May 2022 - Jun 2026',
    description: [
      'Developed and maintained 10+ scalable web applications, CRM, ERP, and enterprise solutions using PHP, Laravel, CodeIgniter, and MySQL.',
      'Designed and implemented 50+ RESTful APIs for web and mobile applications, enabling seamless third-party integrations.',
      'Built secure authentication and authorization systems using RBAC, JWT, and OAuth, improving application security and user access management.',
      'Developed responsive user interfaces using React.js, Next.js, HTML5, CSS3, Bootstrap, JavaScript, jQuery, and AJAX.',
      'Integrated payment gateways, WhatsApp APIs, email services, SMS APIs, and other third-party services to automate business workflows.',
      'Optimized MySQL queries, indexing, and Redis caching, improving application performance and reducing API response times.',
      'Deployed and maintained production applications on AWS, ensuring application availability and reliable deployments.',
      'Troubleshot production issues, refactored legacy PHP/Laravel code, and improved application performance, stability, and maintainability.',
    ],
    technologies: [
      'PHP',
      'Laravel',
      'CodeIgniter 3',
      'React',
      'Next.js',
      'Node.js',
      'JavaScript',
      'jQuery',
      'AJAX',
      'MySQL',
      'SQL Server',
      'MongoDB',
      'WebRTC',
      'Tailwind CSS',
      'Bootstrap',
      'Git',
      'REST APIs'
    ],
  },
  {
    id: 'exp-2',
    company: 'Fruxinfo Private Limited',
    position: 'Junior PHP Laravel & CodeIgniter Developer',
    duration: 'Jan 2021 - May 2022',
    description: [
      'Developed 5+ business web applications using PHP, Laravel, CodeIgniter, and MySQL following the MVC architecture.',
      'Built RESTful APIs and applied CRUD operations to support business processes and third-party system integrations.',
      'Integrated payment gateways, authentication services, and external APIs to extend application functionality.',
      'Developed responsive web pages using HTML5, CSS3, Bootstrap, JavaScript, jQuery, and AJAX.',
      'Enhanced SQL queries and fixed performance bottlenecks, improving application responsiveness and database efficiency.',
      'Diagnosed and corrected application bugs, ensuring stable production releases and improved user experience.',
    ],
    technologies: ['PHP','Laravel','CodeIgniter 3', 'JavaScript','jQuery','AJAX','MySQL','Bootstrap', 'REST APIs', 'Git'],
  },
  {
    id: 'exp-3',
    company: 'PanchSoft Technologies.',
    position: 'Junior PHP Laravel & CodeIgniter Developer',
    duration: 'Jan 2020 - Jan 2021',
    description: [
      'Developed dynamic web applications using PHP, Laravel, CodeIgniter, and MySQL.',
      'Built RESTful APIs, executed CRUD modules, and integrated third-party APIs and payment gateway solutions.',
      'Developed reusable backend modules and business logic following MVC architecture and coding best practices.',
      'Boosted application performance through SQL query optimization, validation, logging, and error handling.',
      'Investigated and fixed software defects, contributing to stable and reliable production deployments.'
    ],
    technologies: ['PHP','Laravel','CodeIgniter 3', 'JavaScript','jQuery','AJAX','MySQL','Bootstrap', 'REST APIs', 'Git'],
  },
] as const;

export const EXPERIENCE_CONTENT = {
  heading: {
    title: "Where I've Worked",
    subtitle: '5+ years building enterprise-grade web applications — ERP, CRM & more',
  },
  sections: {
    products: 'Products I Built',
    workHistory: 'Work History',
  },
} as const;

// =============================================================================
// SKILLS
// =============================================================================

export interface SkillWithIcon {
  id: string;
  title: string;
  src: string;
}

export interface Tool {
  id: string;
  title: string;
  src: string;
}

export interface SkillCategoryInterface {
  title: string;
  icon: string;
  skills: string[];
}

export const SKILLS_WITH_ICONS: SkillWithIcon[] = [
  {
    id: '1',
    title: 'PHP',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
  },
  {
    id: '2',
    title: 'Laravel',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg',
  },
  {
    id: '3',
    title: 'CodeIgniter',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg',
  },
  {
    id: '4',
    title: 'ASP.NET Core',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg',
  },
  {
    id: '5',
    title: 'React',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    id: '6',
    title: 'Next.js',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  },
  {
    id: '7',
    title: 'TypeScript',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  },
  {
    id: '8',
    title: 'Node.js',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  },
  {
    id: '9',
    title: 'MySQL',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  },
  {
    id: '10',
    title: 'SQL Server',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg',
  },
  {
    id: '11',
    title: 'MongoDB',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  },
  {
    id: '12',
    title: 'Tailwind',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
  },
  {
    id: '13',
    title: 'JavaScript',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  },
  {
    id: '14',
    title: 'HTML5',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  },
  {
    id: '15',
    title: 'CSS3',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  },
  
  
] as const;

export const TOOLS: Tool[] = [
  {
    id: 't1',
    title: 'Git',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  },
  {
    id: 't2',
    title: 'GitHub',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
  },
  {
    id: 't3',
    title: 'Postman',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg',
  },
  {
    id: 't4',
    title: 'Figma',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
  },
  {
    id: 't5',
    title: 'Vercel',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg',
  },
  {
    id: 't6',
    title: 'VS Code',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
  },
] as const;

export const SOFT_SKILL: SkillCategoryInterface[] = [
  {
    title: 'Professional Skills',
    icon: 'Users',
    skills: [
      'Communication',
      'Team Collaboration',
      'Problem Solving',
      'Leadership',
      'Mentoring',
      'Adaptability',
      'Time Management',
      'Attention to Detail',
    ],
  },
];
export const SKILL_CATEGORIES: SkillCategoryInterface[] = [
  {
    title: 'Backend',
    icon: 'Server',
    skills: ['PHP','ASP.NET Core','Node.js', 'Express.js', 'REST APIs', 'JWT', 'RBAC', 'MySQL', 'MongoDB', 'SQL Server'],
  },
  {
    title: 'Frontend',
    icon: 'Code2',
    skills: [
      'React.js',
      'Next.js',
      'HTML5',
      'CSS3',
      'Bootstrap',
      'TypeScript',
      'JavaScript',
      'Tailwind CSS',
    ],
  },
  
  {
    title: 'Tools & Methodologies',
    icon: 'Wrench',
    skills: [
      'Git',
      'GitHub',
      'Postman',
      'Claude Code',
      'Code Reviews',
    ],
  },
  {
    title: 'Expanding Into',
    icon: 'Brain',
    skills: ['ASP.NET Core', 'ASP.NET Web API', 'Entity Framework Core', 'System Design', 'AI-Powered Applications'],
  },
] as const;

export const SKILLS_CONTENT = {
  heading: {
    title: 'Skills',
    subtitle: 'Technologies and tools I use to bring ideas to life',
  },
} as const;

// =============================================================================
// CONTACT
// =============================================================================

export const CONTACT_CONTENT = {
  heading: {
    title: 'Get In Touch',
    subtitle: "Have a project in mind or want to collaborate? Let's make it happen",
  },
  form: {
    title: 'Send me a message',
    description: "Fill out the form and I'll get back to you as soon as possible.",
    fields: {
      name: {
        label: 'Name',
        placeholder: 'John Doe',
        required: true,
        minLength: 2,
        errorMessage: 'Name must be at least 2 characters',
      },
      email: {
        label: 'Email',
        placeholder: 'john@example.com',
        required: true,
        errorMessage: 'Please enter a valid email address',
      },
      subject: {
        label: 'Subject',
        placeholder: 'Project collaboration',
        required: true,
        minLength: 3,
        errorMessage: 'Subject must be at least 3 characters',
      },
      message: {
        label: 'Message',
        placeholder: 'Tell me about your project...',
        required: true,
        minLength: 10,
        rows: 5,
        errorMessage: 'Message must be at least 10 characters',
      },
    },
    submitButton: {
      default: 'Send Message',
      sending: 'Sending...',
      success: 'Message Sent!',
    },
    toast: {
      success: {
        title: 'Message Sent!',
        description: "I'll get back to you as soon as possible.",
      },
      error: {
        title: 'Failed to Send',
        description: 'Please try again or email me directly.',
      },
      validation: {
        title: 'Validation Error',
        description: 'Please fix the errors before submitting.',
      },
      missingConfig: {
        title: 'Email setup missing',
        description: 'EmailJS environment variables are not configured.',
      },
    },
  },
  contactInfo: [
    {
      icon: 'Mail',
      label: 'Email',
      value: PERSONAL_INFO.email,
      href: `mailto:${PERSONAL_INFO.email}`,
      clickable: true,
    },
    {
      icon: 'MapPin',
      label: 'Location',
      value: PERSONAL_INFO.location,
      clickable: false,
    },
    {
      icon: 'Phone',
      label: 'Phone',
      value: PERSONAL_INFO.phoneFormatted,
      href: `tel:${PERSONAL_INFO.phone}`,
      clickable: true,
    },
  ],
} as const;

// =============================================================================
// FOOTER
// =============================================================================

export const FOOTER_CONTENT = {
  branding: {
    name: 'Shakeel Ahamad',
    shortName: 'SA',
    role: 'Full Stack Developer',
  },
  copyright: {
    text: 'Shakeel Ahamad',
  },
  social: [
    { icon: 'Github', href: PERSONAL_INFO.socialLinks.github, label: 'GitHub' },
    { icon: 'Linkedin', href: PERSONAL_INFO.socialLinks.linkedin, label: 'LinkedIn' },
    { icon: 'Mail', href: `mailto:${PERSONAL_INFO.email}`, label: 'Email' },
  ],
} as const;
