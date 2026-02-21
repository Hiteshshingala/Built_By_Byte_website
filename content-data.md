# BuiltByByte -- Website Content Data

This document contains all content data needed to populate the `/data/` files during development.
Every piece of data maps directly to a data file in `src/data/`.

**Convention:** Items marked with `<!-- TODO: update this with real data -->` are auto-generated placeholders.
Replace them with real data before or after launch.

---

## 1. Site Metadata (`site-metadata.js`)

```js
export const siteMetadata = {
  companyName: "BuiltByByte",
  companyNameAlt: "Built By Byte",
  tagline: "Your startup idea, production-ready in weeks.",
  description: "BuiltByByte helps startup founders ship production-ready MVPs in weeks. 8+ years of JavaScript expertise. 10+ products delivered across 8 industries.",
  domain: "https://builtbybyte.com",
  founder: "Hitesh Shingala",
  founderRole: "Founder & Lead Developer",
  foundedYear: 2017,
  email: "hello@builtbybyte.com", // TODO: update this with real data -- currently using placeholder business email
  phone: "+91 8140823509", // TODO: update this with real data -- consider a US/EU virtual number for trust
  location: "India (serving US & Europe remotely)",
  timezoneOverlap: "Available 9 AM – 2 PM EST / 2 PM – 11 PM CET",
  responseTime: "4-hour response during your business day",
  socialLinks: {
    linkedin: "https://linkedin.com/in/hitesh-shingala", // TODO: update this with real data
    github: "https://github.com/hitesh-shingala", // TODO: update this with real data
    twitter: "https://twitter.com/builtbybyte", // TODO: update this with real data
  },
  stats: {
    yearsExperience: "8+",
    projectsDelivered: "10+",
    industriesServed: "8",
    clientSatisfaction: "98%", // TODO: update this with real data
    onTimeDelivery: "98%", // TODO: update this with real data
  },
};
```

---

## 2. Services (`services.js`)

```js
export const services = [
  {
    id: "custom-website-development",
    title: "Custom Website Development",
    headline: "Launch your product's online presence in 3 weeks.",
    problem: "Your current site looks like it was built in 2015. Visitors bounce before they scroll. You're losing credibility — and customers — every day it stays live.",
    description: "We build modern, fast, conversion-ready websites tailored to your brand and goals. No templates. No page builders. Just clean, custom code that performs.",
    scope: [
      "Marketing websites and landing pages",
      "Corporate platforms and multi-page sites",
      "Portfolio and agency websites",
      "Blog integration (static or CMS-ready)",
      "SEO-ready architecture from day one"
    ],
    deliverables: [
      "Fully responsive custom website",
      "SEO metadata and structured data",
      "Performance-optimized assets",
      "Source code with full documentation",
      "Deployment to your hosting platform"
    ],
    techStack: ["Next.js", "React", "Tailwind CSS", "Node.js", "PostgreSQL"],
    engagement: "Fixed-price",
    timeline: "3–6 weeks",
    budgetRange: "$5K – $15K", // TODO: update this with real data
    icon: "Globe",
    relatedCaseStudy: "vgroup",
  },
  {
    id: "saas-product-development",
    title: "SaaS Product Development",
    headline: "Build your SaaS product without a CTO.",
    problem: "You have a SaaS idea and early validation, but no technical co-founder to build it. Hiring a full engineering team takes months and burns runway before you ship a single feature.",
    description: "We take you from concept to production-ready SaaS — auth, dashboards, billing, multi-tenant architecture, and everything in between. You focus on your users. We build the product.",
    scope: [
      "Product scoping and architecture planning",
      "User authentication and role management",
      "Dashboard and admin panel development",
      "Subscription billing integration (Stripe)",
      "Multi-tenant architecture",
      "API development (REST or GraphQL)",
      "Post-launch support and iteration"
    ],
    deliverables: [
      "Production-ready SaaS application",
      "Admin dashboard",
      "API documentation",
      "Stripe billing integration",
      "Source code with full ownership",
      "Deployment pipeline setup",
      "Handoff documentation"
    ],
    techStack: ["React", "Next.js", "Node.js", "NestJS", "PostgreSQL", "MongoDB", "Stripe", "AWS"],
    engagement: "Milestone-based",
    timeline: "6–12 weeks",
    budgetRange: "$15K – $50K", // TODO: update this with real data
    icon: "Cloud",
    relatedCaseStudy: "filpass",
  },
  {
    id: "frontend-engineering",
    title: "Frontend Engineering / UI Development",
    headline: "Pixel-perfect UI that your users actually enjoy using.",
    problem: "Your backend works, but your frontend doesn't do it justice. The UI feels clunky, inconsistent, or just plain slow. Users leave before they experience your product's real value.",
    description: "We implement design-to-code with obsessive attention to detail. Component libraries, responsive layouts, smooth interactions — all built for performance and maintainability.",
    scope: [
      "Design-to-code implementation (Figma to React)",
      "Reusable component library development",
      "State management architecture",
      "Performance optimization",
      "Cross-browser and responsive QA",
      "Accessibility compliance"
    ],
    deliverables: [
      "Production-ready frontend codebase",
      "Component library with documentation",
      "Responsive implementation across all breakpoints",
      "Performance audit report",
      "Source code with full ownership"
    ],
    techStack: ["React", "Next.js", "Angular", "Redux", "Tailwind CSS", "Material UI", "Ant Design"],
    engagement: "T&M or Dedicated",
    timeline: "2–8 weeks",
    budgetRange: "$3K – $20K", // TODO: update this with real data
    icon: "Layout",
    relatedCaseStudy: "fornova",
  },
  {
    id: "ecommerce-development",
    title: "E-Commerce Development",
    headline: "A store that sells — not just displays.",
    problem: "You're losing sales because your store is slow, looks outdated, or the checkout flow is so painful that customers abandon their carts halfway through.",
    description: "We build custom e-commerce experiences that are fast, beautiful, and optimized to convert. From product catalogs to payment integration, every detail is designed to drive revenue.",
    scope: [
      "Custom storefront development",
      "Product catalog and inventory management",
      "Payment gateway integration (Stripe, PayPal)",
      "Order management system",
      "Customer authentication and profiles",
      "Search and filtering"
    ],
    deliverables: [
      "Custom e-commerce web application",
      "Payment integration (Stripe/PayPal)",
      "Admin panel for product and order management",
      "Responsive mobile-first design",
      "Source code with full ownership"
    ],
    techStack: ["React", "Next.js", "Node.js", "PostgreSQL", "MongoDB", "Stripe", "PayPal"],
    engagement: "Fixed-price",
    timeline: "4–8 weeks",
    budgetRange: "$8K – $25K", // TODO: update this with real data
    icon: "ShoppingCart",
    relatedCaseStudy: "trustclarity",
  },
  {
    id: "software-consulting",
    title: "Software Consulting",
    headline: "Make the right tech decision before spending a dollar on code.",
    problem: "You're about to invest $50K+ in a technology decision. Wrong stack, wrong architecture, wrong vendor — any of these mistakes will cost you 6 months and your entire budget.",
    description: "We provide hands-on architecture reviews, tech stack evaluations, and technical roadmaps. No slides full of buzzwords — just clear, actionable advice from someone who's built 10+ products.",
    scope: [
      "Architecture review and recommendations",
      "Tech stack selection and evaluation",
      "Scalability and performance auditing",
      "Technical roadmap planning",
      "Code quality assessment",
      "Build vs. buy analysis"
    ],
    deliverables: [
      "Architecture review document",
      "Tech stack recommendation report",
      "Technical roadmap with timeline",
      "Risk assessment and mitigation plan",
      "90-minute strategy call recording"
    ],
    techStack: ["Monolith vs. Microservices", "Cloud strategy (AWS)", "Database selection", "API architecture"],
    engagement: "Hourly / Retainer",
    timeline: "1–2 weeks",
    budgetRange: "$2K – $8K", // TODO: update this with real data
    icon: "Compass",
    relatedCaseStudy: null,
  },
  {
    id: "dedicated-development-team",
    title: "Dedicated Development Team",
    headline: "Extend your engineering team overnight. No recruiting.",
    problem: "Hiring takes 3 months. Your investors expect results in 6 weeks. You need reliable engineers embedded in your workflow — not strangers who need 3 months to ramp up.",
    description: "We embed experienced full-stack developers directly into your team. They use your tools, attend your standups, and ship code in your repo. It's like hiring — without the hiring process.",
    scope: [
      "Dedicated full-stack JavaScript developers",
      "Embedded in your tools (Slack, Jira, GitHub)",
      "Sprint-based delivery with your team",
      "Daily standups and weekly demos",
      "Flexible scale-up and scale-down",
      "Full-time or part-time options"
    ],
    deliverables: [
      "Dedicated developer(s) starting within 1 week",
      "Sprint reports and velocity tracking",
      "Code committed to your repository",
      "Weekly progress demos",
      "Knowledge transfer documentation"
    ],
    techStack: ["Your stack — we adapt", "React", "Node.js", "Angular", "Vue.js", "NestJS"],
    engagement: "Monthly retainer",
    timeline: "Start in 1 week",
    budgetRange: "$4K – $8K/month per developer", // TODO: update this with real data
    icon: "Users",
    relatedCaseStudy: "vgroup",
  },
  {
    id: "mvp-development",
    title: "MVP / Startup Product Build",
    headline: "Your idea, live and working in 4 weeks.",
    problem: "You're burning $20K/month in runway and still don't have a working product. Every week without a live MVP is a week your competitors are pulling ahead — and your investors are getting nervous.",
    description: "We specialize in getting startup founders from idea to live product fast. Scoping, design, full-stack build, and deployment — all in a single sprint. You'll have something real to show users, investors, and yourself.",
    scope: [
      "Product scoping workshop (3–5 days)",
      "UI/UX design and prototyping",
      "Full-stack MVP development",
      "User authentication and core features",
      "Deployment to production",
      "1 month post-launch support"
    ],
    deliverables: [
      "Working MVP application",
      "Source code with full ownership",
      "Deployment pipeline",
      "Technical documentation",
      "Handoff guide for future developers",
      "30-day post-launch support"
    ],
    techStack: ["Next.js", "Node.js", "NestJS", "MongoDB", "PostgreSQL", "AWS", "Vercel"],
    engagement: "Fixed-price",
    timeline: "4–6 weeks",
    budgetRange: "$8K – $25K", // TODO: update this with real data
    icon: "Rocket",
    relatedCaseStudy: "filpass",
  },
];
```

---

## 3. Case Studies (`case-studies.js`)

```js
export const caseStudies = [
  {
    id: "serviceup",
    title: "ServiceUp",
    subtitle: "Connecting Amazon and Goodyear with zero documentation",
    industry: "Automotive / Fleet Management",
    clientName: "ServiceUp", // TODO: update this with real data -- confirm client allows name usage
    clientCountry: "US",
    flagEmoji: "🇺🇸",
    featured: true,
    challenge:
      "Amazon needed a platform to manage their vehicle fleet serviced through Goodyear. The critical problem: Goodyear provided no documented API for third-party integration. No one had successfully connected both systems before, and Amazon's timeline was tight.",
    approach:
      "We reverse-engineered Goodyear's existing workflow, mapped their internal processes to API endpoints, and built a custom integration layer that unified both companies' fleet management processes into a single platform.",
    implementation:
      "Built the integration using Node.js and Express.js with MongoDB for data persistence. Created a middleware layer that translated between Amazon's data format and Goodyear's undocumented endpoints. Implemented error handling and retry logic for reliability.",
    results: [
      { metric: "3 weeks", label: "Integration completed" },
      { metric: "0", label: "API documentation available (built from scratch)" },
      { metric: "2", label: "Fortune-adjacent companies connected" },
      { metric: "100%", label: "Workflow automation achieved" }, // TODO: update this with real data
    ],
    testimonial: {
      quote: "The Goodyear integration had no documentation. Hitesh figured it out in 3 weeks when others said it couldn't be done.", // TODO: update this with real data -- get actual client quote
      author: "Product Manager", // TODO: update this with real data
      role: "Product Manager at ServiceUp", // TODO: update this with real data
      avatar: "/images/testimonials/placeholder.jpg", // TODO: update this with real data
    },
    techStack: ["Node.js", "Express.js", "MongoDB"],
    timeline: "3 weeks",
    imageUrl: "/images/case-studies/serviceup.jpg", // TODO: update this with real data
  },
  {
    id: "vgroup",
    title: "V.Group",
    subtitle: "Microfrontend platform for a 30-country maritime enterprise",
    industry: "Maritime / Enterprise",
    clientName: "V.Group",
    clientCountry: "UK",
    flagEmoji: "🇬🇧",
    featured: true,
    challenge:
      "V.Group operates across 30 countries with 60 offices. They needed a unified platform for purchase order management, internal ticketing, and real-time chat — but a traditional monolith architecture couldn't support independent teams shipping features without breaking each other's work.",
    approach:
      "Pioneered a microfrontend architecture where each application (chat, ticketing, ordering) was a self-contained module. These modules could be composed into a seamless user experience while allowing independent development, testing, and deployment by separate teams.",
    implementation:
      "Built the platform using Next.js and NestJS with MongoDB. Each microfrontend was a standalone React application that exposed core functionalities as modular components. Other apps could dynamically import these components through JavaScript, enabling seamless cross-app interactions — like starting a chat from the ticketing system or filing a ticket from within chat.",
    results: [
      { metric: "60", label: "Offices served across 30 countries" },
      { metric: "3", label: "Independent apps unified into one experience" },
      { metric: "50%", label: "Faster developer onboarding via vertical teams" }, // TODO: update this with real data
      { metric: "Zero", label: "Cross-team deployment conflicts" },
    ],
    testimonial: {
      quote: "The microfrontend approach let us move fast without breaking other teams' work. It's exactly what a global maritime operation needed.", // TODO: update this with real data -- get actual client quote
      author: "Engineering Lead", // TODO: update this with real data
      role: "Engineering Lead at V.Group", // TODO: update this with real data
      avatar: "/images/testimonials/placeholder.jpg", // TODO: update this with real data
    },
    techStack: ["Next.js", "NestJS", "React", "MongoDB", "Microfrontend Architecture"],
    timeline: "Ongoing engagement",
    imageUrl: "/images/case-studies/vgroup.jpg", // TODO: update this with real data
  },
  {
    id: "filpass",
    title: "FilPass",
    subtitle: "Blockchain SaaS for tamper-proof document verification",
    industry: "GovTech / EdTech / Blockchain",
    clientName: "FilPass",
    clientCountry: "SG",
    flagEmoji: "🇸🇬",
    featured: true,
    challenge:
      "FilPass needed a SaaS platform where educational institutions and government agencies could issue tamper-proof digital credentials. Recipients needed to verify these documents instantly via QR codes — all secured by blockchain technology and compliant with GDPR standards.",
    approach:
      "Built a full-stack SaaS platform with blockchain-based verification at its core. Integrated the Open Certificate API standard for interoperability. Designed a digital wallet system where recipients could store and share credentials securely.",
    implementation:
      "Developed the backend using Node.js with NestJS, implementing REST APIs for Open Certificate integration. The frontend was built with Angular for the admin dashboard and credential management interface. Blockchain verification was handled through smart contract integration, with QR code generation for instant document validation.",
    results: [
      { metric: "Production", label: "SaaS platform launched successfully" },
      { metric: "QR code", label: "Instant document verification" },
      { metric: "GDPR", label: "Fully compliant data handling" },
      { metric: "Blockchain", label: "Tamper-proof credential storage" },
    ],
    testimonial: {
      quote: "We launched our blockchain verification SaaS on time and on budget. The code was clean enough that our new team picked it up without a single onboarding call.", // TODO: update this with real data -- get actual client quote
      author: "CTO", // TODO: update this with real data
      role: "CTO at FilPass", // TODO: update this with real data
      avatar: "/images/testimonials/placeholder.jpg", // TODO: update this with real data
    },
    techStack: ["Node.js", "NestJS", "Angular", "Blockchain", "REST API", "Open Certificate"],
    timeline: "12 weeks",
    imageUrl: "/images/case-studies/filpass.jpg", // TODO: update this with real data
  },
  {
    id: "fornova",
    title: "Fornova",
    subtitle: "Real-time data intelligence for the global travel industry",
    industry: "Travel & Hospitality",
    clientName: "Fornova",
    clientCountry: "IL",
    flagEmoji: "🇮🇱",
    featured: false,
    challenge:
      "Fornova, a global leader in travel intelligence, needed a platform that could process massive volumes of mobility data in real-time and deliver actionable insights to hotel chains and travel businesses worldwide.",
    approach:
      "Designed a scalable data pipeline with RabbitMQ for message queuing and Redis for high-performance caching. Built the application layer with Vue.js for the analytics dashboard and Node.js with NestJS for the backend services.",
    implementation:
      "Implemented an event-driven architecture using RabbitMQ to handle high-volume data ingestion without bottlenecks. Redis caching layer reduced response times for frequently accessed analytics. The Vue.js dashboard provided interactive data visualization for mobility trends and patterns.",
    results: [
      { metric: "Real-time", label: "Data processing pipeline" },
      { metric: "Sub-second", label: "Dashboard response times via Redis" }, // TODO: update this with real data
      { metric: "Global", label: "Travel industry coverage" },
      { metric: "Scalable", label: "Event-driven architecture" },
    ],
    testimonial: {
      quote: "The data pipeline handles our scale without breaking a sweat. Real-time insights that our clients actually use to make decisions.", // TODO: update this with real data -- get actual client quote
      author: "Product Lead", // TODO: update this with real data
      role: "Product Lead at Fornova", // TODO: update this with real data
      avatar: "/images/testimonials/placeholder.jpg", // TODO: update this with real data
    },
    techStack: ["Node.js", "NestJS", "Vue.js", "MongoDB", "RabbitMQ", "Redis"],
    timeline: "Ongoing engagement",
    imageUrl: "/images/case-studies/fornova.jpg", // TODO: update this with real data
  },
];
```

---

## 4. Testimonials (`testimonials.js`)

```js
// TODO: update this with real data -- reach out to past clients for actual quotes
// These are realistic placeholders based on actual project outcomes.
// Replace with real testimonials ASAP -- even 1 real quote outweighs 10 placeholders.

export const testimonials = [
  {
    id: 1,
    quote: "We needed someone to integrate Goodyear's undocumented API with Amazon's workflow. Hitesh delivered it in 3 weeks. No one else even wanted to try.",
    author: "Product Manager", // TODO: update this with real data
    role: "Product Manager", // TODO: update this with real data
    company: "ServiceUp", // TODO: update this with real data -- confirm permission
    country: "US",
    flagEmoji: "🇺🇸",
    avatar: "/images/testimonials/placeholder-1.jpg", // TODO: update this with real data
    featured: true,
  },
  {
    id: 2,
    quote: "The microfrontend architecture serves our 60 offices across 30 countries. Each team ships independently without stepping on each other. It changed how we build software.",
    author: "Engineering Lead", // TODO: update this with real data
    role: "Engineering Lead", // TODO: update this with real data
    company: "V.Group", // TODO: update this with real data -- confirm permission
    country: "UK",
    flagEmoji: "🇬🇧",
    avatar: "/images/testimonials/placeholder-2.jpg", // TODO: update this with real data
    featured: true,
  },
  {
    id: 3,
    quote: "We launched our blockchain verification SaaS on time and on budget. The code was clean enough that our new team picked it up without a single onboarding call.",
    author: "CTO", // TODO: update this with real data
    role: "CTO", // TODO: update this with real data
    company: "FilPass", // TODO: update this with real data -- confirm permission
    country: "SG",
    flagEmoji: "🇸🇬",
    avatar: "/images/testimonials/placeholder-3.jpg", // TODO: update this with real data
    featured: true,
  },
  {
    id: 4,
    quote: "Real-time data processing at global scale. The pipeline handles millions of data points and our dashboard stays fast. Exactly what we needed.",
    author: "Product Lead", // TODO: update this with real data
    role: "Product Lead", // TODO: update this with real data
    company: "Fornova", // TODO: update this with real data -- confirm permission
    country: "IL",
    flagEmoji: "🇮🇱",
    avatar: "/images/testimonials/placeholder-4.jpg", // TODO: update this with real data
    featured: false,
  },
];
```

---

## 5. Tech Stack (`tech-stack.js`)

```js
export const techStack = {
  categories: [
    {
      name: "Frontend",
      technologies: [
        { name: "React.js", icon: "react", proficiency: "Expert", description: "Our primary UI library for building interactive interfaces." },
        { name: "Next.js", icon: "nextjs", proficiency: "Expert", description: "Full-stack React framework for SEO-ready, fast applications." },
        { name: "Angular", icon: "angular", proficiency: "Advanced", description: "Enterprise-grade frontend framework for complex applications." },
        { name: "Vue.js", icon: "vuejs", proficiency: "Advanced", description: "Progressive framework for data-driven dashboards." },
      ],
    },
    {
      name: "Backend",
      technologies: [
        { name: "Node.js", icon: "nodejs", proficiency: "Expert", description: "JavaScript runtime powering all our backend services." },
        { name: "Express.js", icon: "express", proficiency: "Expert", description: "Fast, minimal web framework for APIs and servers." },
        { name: "NestJS", icon: "nestjs", proficiency: "Expert", description: "Enterprise Node.js framework with TypeScript-first architecture." },
        { name: "Sails.js", icon: "sailsjs", proficiency: "Advanced", description: "MVC framework for data-driven APIs." },
      ],
    },
    {
      name: "Databases",
      technologies: [
        { name: "MongoDB", icon: "mongodb", proficiency: "Expert", description: "NoSQL database for flexible, document-based storage." },
        { name: "PostgreSQL", icon: "postgresql", proficiency: "Expert", description: "Relational database for structured, ACID-compliant data." },
        { name: "MySQL", icon: "mysql", proficiency: "Advanced", description: "Widely-used relational database." },
        { name: "Redis", icon: "redis", proficiency: "Advanced", description: "In-memory data store for caching and real-time performance." },
      ],
    },
    {
      name: "Cloud & DevOps",
      technologies: [
        { name: "AWS EC2", icon: "aws", proficiency: "Advanced", description: "Scalable cloud compute for production deployments." },
        { name: "AWS S3", icon: "aws-s3", proficiency: "Advanced", description: "Object storage for assets, backups, and file uploads." },
        { name: "AWS Lambda", icon: "aws-lambda", proficiency: "Advanced", description: "Serverless functions for event-driven architecture." },
        { name: "Docker", icon: "docker", proficiency: "Advanced", description: "Containerization for consistent deployments." },
        { name: "Vercel", icon: "vercel", proficiency: "Advanced", description: "Zero-config deployment for Next.js applications." },
        { name: "GitHub Actions", icon: "github", proficiency: "Advanced", description: "CI/CD pipelines for automated testing and deployment." },
      ],
    },
    {
      name: "APIs & Architecture",
      technologies: [
        { name: "REST API", icon: "api", proficiency: "Expert", description: "Standard API design for interoperable services." },
        { name: "GraphQL", icon: "graphql", proficiency: "Advanced", description: "Flexible query language for efficient data fetching." },
        { name: "Microservices", icon: "microservices", proficiency: "Advanced", description: "Distributed architecture for scalable systems." },
        { name: "Microfrontends", icon: "microfrontend", proficiency: "Advanced", description: "Modular frontend architecture for large-scale apps." },
        { name: "RabbitMQ", icon: "rabbitmq", proficiency: "Advanced", description: "Message broker for event-driven data processing." },
      ],
    },
    {
      name: "Payments",
      technologies: [
        { name: "Stripe", icon: "stripe", proficiency: "Advanced", description: "Payment processing for subscriptions and one-time charges." },
        { name: "PayPal", icon: "paypal", proficiency: "Advanced", description: "Global payment platform integration." },
      ],
    },
    {
      name: "Tools & Workflow",
      technologies: [
        { name: "GitHub", icon: "github", proficiency: "Expert", description: "Version control and code collaboration." },
        { name: "Jira", icon: "jira", proficiency: "Advanced", description: "Sprint planning and project management." },
        { name: "Slack", icon: "slack", proficiency: "Expert", description: "Real-time team communication." },
        { name: "Figma", icon: "figma", proficiency: "Intermediate", description: "Design collaboration and handoff." },
      ],
    },
  ],
};
```

---

## 6. Industries (`industries.js`)

```js
export const industries = [
  {
    id: "automotive-fleet",
    name: "Automotive & Fleet Management",
    icon: "Truck",
    description: "Fleet management platforms, vehicle service integration, and enterprise logistics systems for the automotive industry.",
    exampleProject: "Built the integration platform connecting Amazon and Goodyear's fleet management workflows — with zero API documentation available.",
    relatedServices: ["custom-website-development", "software-consulting", "dedicated-development-team"],
    relatedCaseStudy: "serviceup",
  },
  {
    id: "maritime-shipping",
    name: "Maritime & Shipping",
    icon: "Ship",
    description: "Global maritime operations platforms, supply chain management, and cross-office collaboration systems serving multinational fleets.",
    exampleProject: "Delivered a microfrontend platform for V.Group — a maritime company operating across 30 countries with 60 offices.",
    relatedServices: ["saas-product-development", "dedicated-development-team", "frontend-engineering"],
    relatedCaseStudy: "vgroup",
  },
  {
    id: "travel-hospitality",
    name: "Travel & Hospitality",
    icon: "Plane",
    description: "Data intelligence platforms, mobility analytics, and real-time decision-support tools for hotels, airlines, and travel businesses.",
    exampleProject: "Built a real-time data intelligence platform for Fornova, processing massive volumes of mobility data for global travel clients.",
    relatedServices: ["saas-product-development", "software-consulting"],
    relatedCaseStudy: "fornova",
  },
  {
    id: "fintech-blockchain",
    name: "FinTech & Blockchain",
    icon: "Shield",
    description: "Tamper-proof verification systems, blockchain-based SaaS platforms, and secure credential management for financial and government institutions.",
    exampleProject: "Built FilPass — a blockchain-based SaaS for issuing and verifying tamper-proof digital credentials via QR codes.",
    relatedServices: ["saas-product-development", "mvp-development"],
    relatedCaseStudy: "filpass",
  },
  {
    id: "ecommerce",
    name: "E-Commerce & Retail",
    icon: "ShoppingCart",
    description: "Custom storefronts, sustainable commerce platforms, and inventory management systems built for conversion and scale.",
    exampleProject: "Developed TrustClarity — a sustainable e-commerce SaaS using blockchain-secured data for trusted product lifecycle management.",
    relatedServices: ["ecommerce-development", "custom-website-development"],
    relatedCaseStudy: null,
  },
  {
    id: "healthcare-wellness",
    name: "Healthcare & Wellness",
    icon: "Heart",
    description: "Enterprise wellness platforms, health-tech applications, and compliant systems built with patient data security in mind.",
    exampleProject: "Built the WellnessCoach platform — an enterprise wellness solution with referral systems and performance-optimized backend.",
    relatedServices: ["saas-product-development", "mvp-development"],
    relatedCaseStudy: null,
  },
  {
    id: "education-govtech",
    name: "Education & GovTech",
    icon: "GraduationCap",
    description: "Digital credential systems, e-learning platforms, and government compliance tools with GDPR and HIPAA awareness.",
    exampleProject: "Built EPD (Edufied) — a blockchain-based credential storage and verification system with GDPR/HIPAA compliance.",
    relatedServices: ["saas-product-development", "software-consulting"],
    relatedCaseStudy: "filpass",
  },
  {
    id: "cybersecurity",
    name: "Cybersecurity",
    icon: "Lock",
    description: "Blockchain-secured data platforms, immutable audit trails, and secure authentication systems.",
    exampleProject: "Implemented FlureeDB — a blockchain-secured immutable graph database — for secure e-commerce data management at TrustClarity.",
    relatedServices: ["software-consulting", "saas-product-development"],
    relatedCaseStudy: null,
  },
];
```

---

## 7. FAQ (`faq.js`)

```js
export const faq = {
  homepage: [
    {
      question: "What timezone do you work in?",
      answer: "We're based in IST but overlap with US East Coast from 9 AM – 2 PM EST and European time zones from 2 PM – 11 PM CET. All communication is async-first via Slack and Loom, with weekly video syncs scheduled on your calendar. We respond within 4 hours during your business day.",
    },
    {
      question: "Will I get stuck with code I can't maintain?",
      answer: "Never. You own 100% of the code, IP, and all assets from day one. We write clean, documented code with a full handoff guide. Your next team — whether it's an internal hire or another agency — can pick up where we left off in a day, not a month.",
    },
    {
      question: "How much does it cost?",
      answer: "It depends on scope. MVPs typically range from $8K–$25K. SaaS products from $15K–$50K. We're not the cheapest option — we're the smart option. Agency-quality execution at startup-friendly pricing. Every project starts with a free scoping call so you know the exact cost before committing.",
    },
    {
      question: "Who owns the code and IP?",
      answer: "You do. 100%. From day one. No proprietary frameworks, no lock-in, no surprises. It's in the contract. We use open-source technologies so your code runs anywhere and any developer can work with it.",
    },
    {
      question: "I've been burned by outsourcing before. Why should I trust you?",
      answer: "We get it — and that's exactly why we offer a 1-week paid trial sprint. See our code quality, communication style, and delivery speed before making any commitment. No long-term contracts required upfront. Plus, this website you're looking at? We built it — and it's the quality standard we hold for every project.",
    },
    {
      question: "How fast can you start?",
      answer: "Most projects kick off within 1 week of signing. We start with a 3–5 day scoping and planning phase, then move into sprint-based development with weekly demos. You'll see working software every 7 days.",
    },
  ],
  services: [
    {
      question: "What if my project scope changes mid-build?",
      answer: "It happens — startups evolve fast. We use milestone-based billing so scope changes are handled transparently. We'll discuss the impact on timeline and budget before writing a single line of new code.",
    },
    {
      question: "Do you handle design or just development?",
      answer: "We do both. We can work from your existing Figma designs, or we can handle UI/UX design in-house. For MVPs and full-product builds, design is included in the scope.",
    },
    {
      question: "What happens after launch?",
      answer: "Every project includes a handoff documentation package. We also offer post-launch support packages (typically 30 days included). After that, your team takes over with full documentation — or we continue on a retainer basis.",
    },
  ],
  process: [
    {
      question: "How do we communicate during the project?",
      answer: "Slack for daily async communication. Loom for video updates and walkthroughs. Weekly video calls for demos and planning. A shared project board (Jira or Linear) for full transparency. You'll never wonder what's happening.",
    },
    {
      question: "What if I'm not happy with the work?",
      answer: "We demo working software every week. If something isn't right, we catch it in 7 days — not 7 weeks. Milestone billing means you only pay for completed, approved work. And the trial sprint lets you evaluate us before committing to a full project.",
    },
    {
      question: "Do you work in sprints?",
      answer: "Yes. We follow agile methodology with 1–2 week sprints. Each sprint has a clear goal, demo at the end, and your approval before we move to the next. You're in control at every step.",
    },
  ],
};
```

---

## 8. About Page Content

```js
export const aboutContent = {
  headline: "Built by developers who've shipped. For founders who need to.",
  subheadline: "BuiltByByte is a JavaScript-focused development studio that helps startup founders turn ideas into production-ready products.",

  story: [
    "BuiltByByte was founded by Hitesh Shingala — a full-stack JavaScript developer with 8+ years of experience building production software for companies across 8 industries and 4 continents.",
    "After delivering 10+ products — from Amazon's fleet management integrations to blockchain-based SaaS platforms for government agencies — Hitesh saw the same pattern: startup founders struggling to find development partners who actually understood their pace, their constraints, and their need for clean, maintainable code.",
    "BuiltByByte exists to solve that problem. We're not a body shop that throws developers at a project. We're a small, focused team that treats every product like our own — because the fastest way to earn your trust is to ship something you're proud of.",
  ],

  mission: "To give startup founders the technical execution they need to ship, raise, and scale — without the overhead of building an in-house team.",

  values: [
    {
      title: "Ship fast, ship right",
      description: "Speed without cutting corners. We hit deadlines because we scope honestly and execute efficiently.",
      icon: "Zap",
    },
    {
      title: "Own every byte",
      description: "You own 100% of the code, always. No lock-in. No proprietary frameworks. Your code, your terms.",
      icon: "Key",
    },
    {
      title: "Communicate like a co-founder",
      description: "Proactive updates, weekly demos, 4-hour response times. You'll never chase us for a status update.",
      icon: "MessageSquare",
    },
    {
      title: "Solve hard problems",
      description: "Undocumented APIs, blockchain databases, microfrontend architecture. We thrive where others hesitate.",
      icon: "Puzzle",
    },
    {
      title: "Stay transparent",
      description: "Fixed scopes, milestone billing, shared project boards. You see everything — budget, progress, and risks.",
      icon: "Eye",
    },
  ],

  founder: {
    name: "Hitesh Shingala",
    role: "Founder & Lead Developer",
    bio: "8+ years building production JavaScript applications. From enterprise maritime platforms to startup MVPs — Hitesh has shipped software that serves 60 offices across 30 countries, connects Fortune 500 workflows, and verifies credentials on the blockchain. When he's not coding, he's probably researching the next tool that'll ship your product faster.",
    photo: "/images/team/hitesh.jpg", // TODO: update this with real data -- add professional headshot
    linkedin: "https://linkedin.com/in/hitesh-shingala", // TODO: update this with real data
    github: "https://github.com/hitesh-shingala", // TODO: update this with real data
  },

  // TODO: update this with real data -- add team members if applicable
  team: [],

  communicationTools: [
    { name: "Slack", icon: "slack", purpose: "Daily async communication" },
    { name: "Loom", icon: "loom", purpose: "Video updates and walkthroughs" },
    { name: "GitHub", icon: "github", purpose: "Code collaboration" },
    { name: "Jira", icon: "jira", purpose: "Sprint planning and tracking" },
    { name: "Google Meet", icon: "google-meet", purpose: "Weekly video demos" },
    { name: "Figma", icon: "figma", purpose: "Design collaboration" },
  ],

  englishStatement: "All communication, documentation, and code comments in English. Always.",
};
```

---

## 9. Process Steps

```js
export const processSteps = [
  {
    step: 1,
    name: "Discover",
    duration: "3–5 days",
    description: "We scope your product together. Features, priorities, timeline, budget — everything gets defined before a single line of code is written. No guessing, no surprises.",
    deliverables: [
      "Project brief document",
      "Prioritized feature list",
      "Technical architecture plan",
      "Timeline and cost estimate",
      "Fixed quote (for fixed-price projects)"
    ],
    tools: ["Google Meet", "Figma", "Notion"],
    icon: "Search",
  },
  {
    step: 2,
    name: "Design",
    duration: "1–2 weeks",
    description: "UI/UX wireframes and visual design. You see and approve every screen before development starts. No code is written until you say 'this is exactly what I want.'",
    deliverables: [
      "Wireframes and user flows",
      "Visual mockups (Figma)",
      "Component design system",
      "Design approval sign-off"
    ],
    tools: ["Figma", "Slack"],
    icon: "PenTool",
  },
  {
    step: 3,
    name: "Build",
    duration: "2–8 weeks",
    description: "Sprint-based development with weekly demos. You see working software every 7 days. A shared project board gives you full visibility into progress, blockers, and velocity.",
    deliverables: [
      "Working software (weekly builds)",
      "Shared project board access",
      "Weekly demo recordings",
      "Sprint reports"
    ],
    tools: ["GitHub", "Jira", "Slack", "Loom"],
    icon: "Code",
  },
  {
    step: 4,
    name: "Launch",
    duration: "3–5 days",
    description: "Deployment, QA, performance optimization, and full handoff. You get the source code, documentation, and everything you need to run and maintain the product independently.",
    deliverables: [
      "Production deployment",
      "Source code (full ownership)",
      "Technical documentation",
      "Handoff guide for future developers",
      "Post-launch support plan (30 days)"
    ],
    tools: ["Vercel", "AWS", "GitHub Actions"],
    icon: "Rocket",
  },
];
```

---

## 10. Navigation & Footer

```js
export const navigation = {
  mainNav: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Industries", href: "/industries" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Process", href: "/process" },
    { label: "Tech Stack", href: "/tech-stack" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
  ],
  ctaButton: { label: "Book a Free Intro Call", href: "/contact" },
};

export const footer = {
  columns: [
    {
      title: "Services",
      links: [
        { label: "Custom Website Development", href: "/services#custom-website-development" },
        { label: "SaaS Product Development", href: "/services#saas-product-development" },
        { label: "Frontend Engineering", href: "/services#frontend-engineering" },
        { label: "E-Commerce Development", href: "/services#ecommerce-development" },
        { label: "Software Consulting", href: "/services#software-consulting" },
        { label: "Dedicated Development Team", href: "/services#dedicated-development-team" },
        { label: "MVP Development", href: "/services#mvp-development" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Process", href: "/process" },
        { label: "Case Studies", href: "/case-studies" },
        { label: "Tech Stack", href: "/tech-stack" },
        { label: "Blog", href: "/blog" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "How to Build an MVP in 4 Weeks", href: "/blog/how-to-build-mvp-in-4-weeks" },
        { label: "Hiring vs. Outsourcing", href: "/blog/hiring-vs-outsourcing" },
        { label: "SaaS Development Cost Guide", href: "/blog/saas-development-cost" },
      ],
    },
  ],
  bottomBar: {
    copyright: "© 2025 BuiltByByte. All rights reserved.",
    legalLinks: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
  codeOwnership: "You own 100% of the code. Always.",
  timezone: "Available 9 AM – 2 PM EST / 2 PM – 11 PM CET",
  responseTime: "We respond within 4 hours during your business day.",
  socialLinks: {
    linkedin: "https://linkedin.com/in/hitesh-shingala", // TODO: update this with real data
    github: "https://github.com/hitesh-shingala", // TODO: update this with real data
    twitter: "https://twitter.com/builtbybyte", // TODO: update this with real data
  },
};
```

---

## 11. Trust Stats (Homepage)

```js
export const trustStats = [
  { value: "8+", label: "Years Building Software" },
  { value: "10+", label: "Products Shipped" },
  { value: "8", label: "Industries Served" },
  { value: "98%", label: "On-Time Delivery" }, // TODO: update this with real data
];
```

---

## 12. Client Logos (Trust Bar)

```js
// TODO: update this with real data -- confirm permission to use each client's logo
// Contact past clients and ask for written permission to display their logo.

export const clientLogos = [
  { name: "ServiceUp", logo: "/images/clients/serviceup.svg", url: null }, // TODO: update this with real data
  { name: "V.Group", logo: "/images/clients/vgroup.svg", url: "https://vgrouplimited.com" },
  { name: "Fornova", logo: "/images/clients/fornova.svg", url: "https://fornova.com" },
  { name: "FilPass", logo: "/images/clients/filpass.svg", url: null }, // TODO: update this with real data
  { name: "TrustClarity", logo: "/images/clients/trustclarity.svg", url: null }, // TODO: update this with real data
  { name: "Brixstory", logo: "/images/clients/brixstory.svg", url: null }, // TODO: update this with real data
];
```

---

## 13. Blog Articles (Static Starter Content)

```js
export const blogPosts = [
  {
    id: "how-to-build-mvp-in-4-weeks",
    title: "How to Build an MVP in 4 Weeks: A Startup Founder's Guide",
    slug: "how-to-build-mvp-in-4-weeks",
    excerpt: "You don't need 6 months and $100K to launch your product. Here's the exact process we use to take startup founders from idea to live MVP in 4 weeks.",
    author: "Hitesh Shingala",
    date: "2025-02-15", // TODO: update this with real data
    readTime: "8 min read",
    category: "Startup",
    targetKeyword: "how to build MVP fast",
    // TODO: update this with real data -- write full 1500-2500 word article
    body: null,
    cta: { label: "Need help building your MVP?", href: "/contact" },
  },
  {
    id: "hiring-vs-outsourcing",
    title: "Hiring Developers vs. Outsourcing: What Startup Founders Get Wrong",
    slug: "hiring-vs-outsourcing",
    excerpt: "The real cost of hiring isn't the salary — it's the 3 months of recruiting, onboarding, and ramp-up while your product sits unbuilt. Here's when outsourcing makes more sense.",
    author: "Hitesh Shingala",
    date: "2025-02-20", // TODO: update this with real data
    readTime: "10 min read",
    category: "Startup",
    targetKeyword: "hire developers for startup",
    // TODO: update this with real data -- write full 1500-2500 word article
    body: null,
    cta: { label: "Looking for a development partner?", href: "/contact" },
  },
  {
    id: "saas-development-cost",
    title: "How Much Does It Cost to Build a SaaS Product in 2026?",
    slug: "saas-development-cost",
    excerpt: "Spoiler: it depends. But here's a transparent breakdown of real costs — from MVP to full platform — based on 10+ SaaS products we've actually built.",
    author: "Hitesh Shingala",
    date: "2025-03-01", // TODO: update this with real data
    readTime: "12 min read",
    category: "SaaS",
    targetKeyword: "SaaS development cost",
    // TODO: update this with real data -- write full 1500-2500 word article
    body: null,
    cta: { label: "Get a cost estimate for your SaaS", href: "/contact" },
  },
];
```

---

## 14. Contact Form Config

```js
export const contactConfig = {
  emailjs: {
    serviceId: "service_builtbybyte", // TODO: update this with real data
    templateId: "template_contact", // TODO: update this with real data
    publicKey: "your_emailjs_public_key", // TODO: update this with real data
  },
  formFields: [
    { name: "fullName", label: "Full Name", type: "text", required: true, placeholder: "John Doe" },
    { name: "email", label: "Email", type: "email", required: true, placeholder: "john@startup.com" },
    { name: "company", label: "Company", type: "text", required: false, placeholder: "Your Startup Inc." },
    {
      name: "service",
      label: "What do you need?",
      type: "select",
      required: true,
      options: [
        "Custom Website Development",
        "SaaS Product Development",
        "Frontend Engineering",
        "E-Commerce Development",
        "Software Consulting",
        "Dedicated Development Team",
        "MVP Development",
        "Not sure yet — let's talk",
      ],
    },
    {
      name: "budget",
      label: "Project Budget",
      type: "select",
      required: false,
      options: [
        "Under $5K",
        "$5K – $15K",
        "$15K – $30K",
        "$30K – $50K",
        "$50K+",
        "Not sure yet",
      ],
    },
    { name: "message", label: "Tell us about your project", type: "textarea", required: true, placeholder: "What are you building? What's your timeline?" },
  ],
  successMessage: "Thanks for reaching out! We'll get back to you within 24 hours.",
  errorMessage: "Something went wrong. Please try again or email us directly at hello@builtbybyte.com.", // TODO: update this with real data -- use real email
};
```

---

## TODO Checklist: Items Needing Real Data

- [ ] **Business email** — Replace `hello@builtbybyte.com` with real email
- [ ] **Phone number** — Consider US/EU virtual number for trust (e.g., Google Voice, OpenPhone)
- [ ] **Social links** — Add real LinkedIn, GitHub, Twitter/X URLs
- [ ] **Founder photo** — Add professional headshot at `/images/team/hitesh.jpg`
- [ ] **Client testimonials** — Email past clients (ServiceUp, V.Group, FilPass, Fornova) for 2-sentence quotes
- [ ] **Client logo permission** — Confirm you can display each client's logo publicly
- [ ] **Client logo files** — Obtain or create SVG logos for the trust bar
- [ ] **Case study images** — Screenshots or mockups for each project
- [ ] **Project metrics** — Get specific numbers (delivery time, performance improvements, user counts)
- [ ] **Budget ranges** — Confirm actual pricing for each service
- [ ] **On-time delivery %** — Calculate real percentage from project history
- [ ] **Blog article bodies** — Write full 1500-2500 word articles for 3 blog posts
- [ ] **EmailJS credentials** — Create EmailJS account and get service ID, template ID, public key
- [ ] **OG share image** — Create branded 1200x630 image
- [ ] **Team members** — Add team bios if applicable
