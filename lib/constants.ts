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
  resumeUrl: 'https://drive.google.com/uc?export=download&id=1sH05h6nHKn_SHgBV9cXapLQ2_0Pjg4QM',
  socialLinks: {
    github: 'https://github.com/ShakeelAhamad',
    linkedin: 'https://linkedin.com/in/shakeel-ahamad-708828159',
    portfolio: 'https://shakeelahamad.github.io',
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
    name: 'AskVoya',
    tagline: 'AI-Powered Travel Platform',
    techStack: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Node.js',
      'MongoDB',
      'REST APIs',
      'TanStack Table',
    ],
    description:
      'Built major frontend modules for an AI-powered travel platform that automates travel planning through WhatsApp. Developed features for AI-driven customer interactions, tour and flight management, itinerary generation, and WhatsApp API integration, enabling users to receive travel details and automated responses directly on WhatsApp.',
    metrics: [
      // { value: '60%', label: 'Less Manual Work' },
      // { value: '1000+', label: 'Data Points Handled' },
      // { value: '90-Day', label: 'Cashflow Forecasting' },
    ],
    keyFeatures: [
      'AI-powered WhatsApp travel assistant',
      'Flight, tour, and itinerary management with real-time updates',
      'Automated customer communication via WhatsApp API',
      'Dynamic booking and travel information management',
      'Responsive admin dashboard with modern UI components',
      'Secure and scalable application architecture',
    ],
    contributions: [
      'Developed core frontend modules using Next.js, React.js, TypeScript, and Tailwind CSS. Implemented dynamic forms, data tables, and real-time updates for travel management workflows',
      'Integrated the WhatsApp API to automate customer communication, allowing users to receive tour details, flight information, booking updates, and AI-generated responses directly on WhatsApp.',
      'Built admin modules to manage travelers, tours, flights, itineraries, and customer interactions from a centralized dashboard.',
      'Developed reusable UI components and dynamic forms to improve maintainability and user experience.',
      'Integrated REST APIs for travel bookings, customer management, and AI-powered chatbot workflows.',
      'Collaborated with backend services built using Node.js and MongoDB to deliver secure, scalable, and high-performance travel solutions.',
      'Optimized application performance, responsive design, and overall user experience while working within an Agile development environment.',
      'Implemented real-time data handling and state management for travel workflows, ensuring accurate and up-to-date information for both administrators and travelers.',
    ],
  },
  {
    name: 'Khushal Clothing LLP',
    tagline: 'ERP Management System for Business Operations',
    techStack: ['CodeIgniter 3', 'PHP', 'MySQL', 'Bootstrap', 'JavaScript', 'jQuery','AJAX','REST APIs','HTML5','CSS3'],
    description:
      "Built a comprehensive ERP Management System for Khushal Clothing LLP to streamline business operations, financial management, user administration, and reporting. Developed secure authentication, master data management, business reporting, and automated communication features to improve operational efficiency.",
    metrics: [
      // { value: '2hrs→3min', label: 'Quote Creation Time' },
      // { value: '80%', label: 'Less Manual Effort' },
      // { value: '30%', label: 'Revenue Increase' },
    ],
    keyFeatures: [
      'End-to-end supply chain workflow management',
      'Comprehensive ERP Management System.',
      'Multi-user authentication & role-based access control',
      'Financial reporting with Excel/PDF export and View Print functionality',
      'Master management (Group, Ledger, Business Masters)',
      'Secure user permission management',
    ],
    contributions: [
      'Developed a complete ERP Management System using CodeIgniter 3, PHP, MySQL, Bootstrap, JavaScript, jQuery, and AJAX. Implemented secure authentication, role-based access control, and master data management for efficient business operations.',
      'Designed and implemented comprehensive Master Management modules, including Groups, Subgroups, Sub-Sub Groups, Ledgers, and multiple business master records.',
      'Built a secure multi-user authentication system with role-based access control and user permission management.',
      'Developed detailed business reporting modules, including ledger reports, transaction reports, account summaries, and master reports with Excel/PDF export and View Print functionality.',
      'Integrated email notifications and WhatsApp messaging for automated communication, document sharing, and business notifications.',
      'Optimized application performance, database queries, and user workflows to deliver a secure, scalable, and efficient ERP solution.',
      'Built revenue and analytics dashboards that gave management real-time visibility into business performance — directly contributing to 30% revenue growth',
      'Implemented a secure and scalable architecture that allowed for future expansion and integration with other business systems.',
      'Collaborated with cross-functional teams to gather requirements, design workflows, and deliver a user-friendly ERP solution that improved operational efficiency and reduced manual effort.',
    ],
  },
  {
    name: 'Expense Manager',
    tagline: 'Multi-User Expense & Financial Management System',
    techStack: ['PHP', 'Laravel', 'MySQL', 'Bootstrap', 'JavaScript', 'jQuery','AJAX','REST APIs','HTML5','CSS3','DataTables'],
    description:
      'Developed a comprehensive multi-user Expense Management System to streamline financial operations, customer management, and business reporting. Built secure role-based access, master management modules, and accounting features for tracking income, expenses, loans, and financial transactions.',
    metrics: [
      // { value: '1,500+', label: 'Active Users' },
      // { value: 'Real-Time', label: 'Call Transcription' },
      // { value: '3-in-1', label: 'Voice, SMS & WhatsApp' },
    ],
    keyFeatures: [
      'Multi-user authentication with role-based access control',
      'Expense entry and approval workflows',
      'Financial reporting and analytics',
      'Customer management and invoicing',
      'Loan management and tracking',
      'Accounting features for income and expense tracking',
    ],
    contributions: [
      'Developed a complete Expense Management System using PHP, Laravel, MySQL, Bootstrap, JavaScript, jQuery, AJAX, and DataTables. Implemented secure multi-user authentication, role-based access control, and master management modules for efficient financial operations.',
      'Implemented multi-user authentication with role-based access for Admin, Partner, and Site Manager users.',
      'Built comprehensive master modules including Partner, Land, Site, Plot, Customer, and Account Management.',
      'Developed Income Management, Expense Management, Loan Given, and Loan Taken modules for tracking financial transactions.',
      'Created advanced reporting dashboards with search, filtering, sorting, and financial summaries using DataTables.',
      'Optimized database queries and application performance to deliver a secure, scalable, and user-friendly financial management solution.',
      'Implemented automated email notifications and alerts for expense approvals, loan tracking, and financial reporting.',
      'Collaborated with cross-functional teams to gather requirements, design workflows, and deliver a comprehensive financial management system that improved operational efficiency and reduced manual effort.',
    ],
  },
  {
    name: 'PromaxCard',
    tagline: 'Digital NFC Business Card Platform',
    techStack: ['PHP', 'Laravel', 'MySQL', 'Bootstrap', 'JavaScript', 'jQuery','AJAX','REST APIs','HTML5','CSS3','DataTables'],
    description:
      'Developed a scalable multi-user platform for creating and managing Digital NFC Business Cards, enabling professionals and businesses to instantly share contact information, social media profiles, and business details with a single NFC tap or QR code. Built comprehensive product management, customer management, order processing, and admin modules to support multiple NFC product variants and streamline digital networking.',
    metrics: [
      // { value: '40%', label: 'Faster Delivery' },
      // { value: 'SaaS', label: 'Replacement' },
      // { value: 'Shared', label: 'Component Library' },
    ],
    keyFeatures: [
      'Digital NFC Business Card Platform with multi-user support',
      'Instant Contact & Social Profile Sharing.',
      'Multi-user Authentication & Role-Based Access Control.',
      'Product & Order Management with Admin Dashboard.',
      'Admin Dashboard & Reporting.',
      'Responsive & Mobile-Friendly Interface.',
    ],
    contributions: [
      'Developed a complete Digital NFC Business Card Platform using PHP, Laravel, MySQL, Bootstrap, JavaScript, jQuery, AJAX, and DataTables.',
      'Built secure multi-user authentication with role-based access control for administrators, business users, and customers.',
      'Developed modules for customer management, business profile management, product management, order management, and digital card management.',
      'Implemented features for instantly sharing contact information, social media links, business details, websites, and digital profiles using NFC technology and QR codes.',
      'Developed product management for multiple NFC card variants, including PVC Digital NFC Cards, Metal NFC Cards, Pre-Printed NFC Cards, NFC Standees, Child Secure NFC Cards, and Black Matte NFC Cards.',
      'Created responsive admin dashboards with search, filtering, reporting, and DataTables to efficiently manage customers, products, and business operations.',
      'Optimized application performance, database queries, and user experience to deliver a secure, scalable, and high-performance digital networking platform.',
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
