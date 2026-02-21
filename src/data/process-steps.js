export const processSteps = [
  {
    step: 1,
    name: 'Discover',
    duration: '3–5 days',
    description:
      'We scope your product together. Features, priorities, timeline, budget — everything gets defined before a single line of code is written. No guessing, no surprises.',
    deliverables: [
      'Project brief document',
      'Prioritized feature list',
      'Technical architecture plan',
      'Timeline and cost estimate',
      'Fixed quote (for fixed-price projects)',
    ],
    tools: ['Google Meet', 'Figma', 'Notion'],
    icon: 'Search',
  },
  {
    step: 2,
    name: 'Design',
    duration: '1–2 weeks',
    description:
      "UI/UX wireframes and visual design. You see and approve every screen before development starts. No code is written until you say 'this is exactly what I want.'",
    deliverables: [
      'Wireframes and user flows',
      'Visual mockups (Figma)',
      'Component design system',
      'Design approval sign-off',
    ],
    tools: ['Figma', 'Slack'],
    icon: 'PenTool',
  },
  {
    step: 3,
    name: 'Build',
    duration: '2–8 weeks',
    description:
      'Sprint-based development with weekly demos. You see working software every 7 days. A shared project board gives you full visibility into progress, blockers, and velocity.',
    deliverables: [
      'Working software (weekly builds)',
      'Shared project board access',
      'Weekly demo recordings',
      'Sprint reports',
    ],
    tools: ['GitHub', 'Jira', 'Slack', 'Loom'],
    icon: 'Code',
  },
  {
    step: 4,
    name: 'Launch',
    duration: '3–5 days',
    description:
      'Deployment, QA, performance optimization, and full handoff. You get the source code, documentation, and everything you need to run and maintain the product independently.',
    deliverables: [
      'Production deployment',
      'Source code (full ownership)',
      'Technical documentation',
      'Handoff guide for future developers',
      'Post-launch support plan (30 days)',
    ],
    tools: ['Vercel', 'AWS', 'GitHub Actions'],
    icon: 'Rocket',
  },
];

export const processCommitment =
  'Weekly demos. Shared project board. You\'re always in the loop.';
