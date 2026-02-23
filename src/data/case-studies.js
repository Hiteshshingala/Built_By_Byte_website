export const caseStudies = [
  // {
  //   id: 'serviceup',
  //   title: 'ServiceUp',
  //   subtitle: 'Connecting Amazon and Goodyear with zero documentation',
  //   industry: 'Automotive / Fleet Management',
  //   clientName: 'ServiceUp',
  //   clientCountry: 'US',
  //   flagEmoji: '🇺🇸',
  //   featured: true,
  //   challenge:
  //     "Amazon needed a platform to manage their vehicle fleet serviced through Goodyear. The critical problem: Goodyear provided no documented API for third-party integration. No one had successfully connected both systems before, and Amazon's timeline was tight.",
  //   approach:
  //     "We reverse-engineered Goodyear's existing workflow, mapped their internal processes to API endpoints, and built a custom integration layer that unified both companies' fleet management processes into a single platform.",
  //   implementation:
  //     "Built the integration using Node.js and Express.js with MongoDB for data persistence. Created a middleware layer that translated between Amazon's data format and Goodyear's undocumented endpoints. Implemented error handling and retry logic for reliability.",
  //   results: [
  //     { metric: '3 weeks', label: 'Integration completed' },
  //     { metric: '0', label: 'API documentation available (built from scratch)' },
  //     { metric: '2', label: 'Fortune-adjacent companies connected' },
  //     { metric: '100%', label: 'Workflow automation achieved' },
  //   ],
  //   testimonial: {
  //     quote:
  //       "The Goodyear integration had no documentation. Hitesh figured it out in 3 weeks when others said it couldn't be done.",
  //     author: 'Product Manager',
  //     role: 'Product Manager at ServiceUp',
  //     avatar: '/images/testimonials/placeholder.jpg',
  //   },
  //   techStack: ['Node.js', 'Express.js', 'MongoDB'],
  //   timeline: '3 weeks',
  //   imageUrl: '/images/case-studies/serviceup.jpg',
  // },
  {
    id: 'vgroup',
    title: 'V.Group',
    subtitle: 'Microfrontend platform for a 30-country maritime enterprise',
    industry: 'Maritime / Enterprise',
    clientName: 'V.Group',
    clientCountry: 'UK',
    flagEmoji: '🇬🇧',
    featured: true,
    challenge:
      'V.Group operates across 30 countries with 60 offices. They needed a unified platform for purchase order management, internal ticketing, and real-time chat — but a traditional monolith architecture couldn\'t support independent teams shipping features without breaking each other\'s work.',
    approach:
      'Pioneered a microfrontend architecture where each application (chat, ticketing, ordering) was a self-contained module. These modules could be composed into a seamless user experience while allowing independent development, testing, and deployment by separate teams.',
    implementation:
      'Built the platform using Next.js and NestJS with MongoDB. Each microfrontend was a standalone React application that exposed core functionalities as modular components. Other apps could dynamically import these components through JavaScript, enabling seamless cross-app interactions.',
    results: [
      { metric: '60', label: 'Offices served across 30 countries' },
      { metric: '3', label: 'Independent apps unified into one experience' },
      { metric: '50%', label: 'Faster developer onboarding via vertical teams' },
      { metric: 'Zero', label: 'Cross-team deployment conflicts' },
    ],
    testimonial: {
      quote:
        "The microfrontend approach let us move fast without breaking other teams' work. It's exactly what a global maritime operation needed.",
      author: 'Engineering Lead',
      role: 'Engineering Lead at V.Group',
      avatar: '/images/testimonials/placeholder.jpg',
    },
    techStack: ['Next.js', 'NestJS', 'React', 'MongoDB', 'Microfrontend Architecture'],
    timeline: 'Ongoing engagement',
    imageUrl: '/images/case-studies/vgroup.jpg',
  },
  {
    id: 'filpass',
    title: 'FilPass',
    subtitle: 'Blockchain SaaS for tamper-proof document verification',
    industry: 'GovTech / EdTech / Blockchain',
    clientName: 'FilPass',
    clientCountry: 'SG',
    flagEmoji: '🇸🇬',
    featured: true,
    challenge:
      'FilPass needed a SaaS platform where educational institutions and government agencies could issue tamper-proof digital credentials. Recipients needed to verify these documents instantly via QR codes — all secured by blockchain technology and compliant with GDPR standards.',
    approach:
      'Built a full-stack SaaS platform with blockchain-based verification at its core. Integrated the Open Certificate API standard for interoperability. Designed a digital wallet system where recipients could store and share credentials securely.',
    implementation:
      'Developed the backend using Node.js with NestJS, implementing REST APIs for Open Certificate integration. The frontend was built with Angular for the admin dashboard and credential management interface. Blockchain verification was handled through smart contract integration.',
    results: [
      { metric: 'Production', label: 'SaaS platform launched successfully' },
      { metric: 'QR code', label: 'Instant document verification' },
      { metric: 'GDPR', label: 'Fully compliant data handling' },
      { metric: 'Blockchain', label: 'Tamper-proof credential storage' },
    ],
    testimonial: {
      quote:
        "We launched our blockchain verification SaaS on time and on budget. The code was clean enough that our new team picked it up without a single onboarding call.",
      author: 'CTO',
      role: 'CTO at FilPass',
      avatar: '/images/testimonials/placeholder.jpg',
    },
    techStack: ['Node.js', 'NestJS', 'Angular', 'Blockchain', 'REST API', 'Open Certificate'],
    timeline: '12 weeks',
    imageUrl: '/images/case-studies/filpass.jpg',
  },
  {
    id: 'fornova',
    title: 'Fornova',
    subtitle: 'Real-time data intelligence for the global travel industry',
    industry: 'Travel & Hospitality',
    clientName: 'Fornova',
    clientCountry: 'IL',
    flagEmoji: '🇮🇱',
    featured: false,
    challenge:
      'Fornova, a global leader in travel intelligence, needed a platform that could process massive volumes of mobility data in real-time and deliver actionable insights to hotel chains and travel businesses worldwide.',
    approach:
      'Designed a scalable data pipeline with RabbitMQ for message queuing and Redis for high-performance caching. Built the application layer with Vue.js for the analytics dashboard and Node.js with NestJS for the backend services.',
    implementation:
      'Implemented an event-driven architecture using RabbitMQ to handle high-volume data ingestion without bottlenecks. Redis caching layer reduced response times for frequently accessed analytics. The Vue.js dashboard provided interactive data visualization.',
    results: [
      { metric: 'Real-time', label: 'Data processing pipeline' },
      { metric: 'Sub-second', label: 'Dashboard response times via Redis' },
      { metric: 'Global', label: 'Travel industry coverage' },
      { metric: 'Scalable', label: 'Event-driven architecture' },
    ],
    testimonial: {
      quote:
        'The data pipeline handles our scale without breaking a sweat. Real-time insights that our clients actually use to make decisions.',
      author: 'Product Lead',
      role: 'Product Lead at Fornova',
      avatar: '/images/testimonials/placeholder.jpg',
    },
    techStack: ['Node.js', 'NestJS', 'Vue.js', 'MongoDB', 'RabbitMQ', 'Redis'],
    timeline: 'Ongoing engagement',
    imageUrl: '/images/case-studies/fornova.jpg',
  },
];
