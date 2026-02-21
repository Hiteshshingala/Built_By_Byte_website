export const contactConfig = {
  emailjs: {
    serviceId: 'service_builtbybyte',
    templateId: 'template_contact',
    publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'your_emailjs_public_key',
  },
  formFields: [
    { name: 'fullName', label: 'Full Name', type: 'text', required: true, placeholder: 'John Doe' },
    { name: 'email', label: 'Email', type: 'email', required: true, placeholder: 'john@startup.com' },
    { name: 'company', label: 'Company', type: 'text', required: false, placeholder: 'Your Startup Inc.' },
    {
      name: 'service',
      label: 'What do you need?',
      type: 'select',
      required: true,
      options: [
        'Custom Website Development',
        'SaaS Product Development',
        'Frontend Engineering',
        'E-Commerce Development',
        'Software Consulting',
        'Dedicated Development Team',
        'MVP Development',
        "Not sure yet — let's talk",
      ],
    },
    {
      name: 'budget',
      label: 'Project Budget',
      type: 'select',
      required: false,
      options: ['Under $5K', '$5K – $15K', '$15K – $30K', '$30K – $50K', '$50K+', 'Not sure yet'],
    },
    {
      name: 'message',
      label: 'Tell us about your project',
      type: 'textarea',
      required: true,
      placeholder: "What are you building? What's your timeline?",
    },
  ],
  successMessage: "Thanks for reaching out! We'll get back to you within 24 hours.",
  errorMessage: 'Something went wrong. Please try again or email us directly at hello@builtbybyte.com.',
};
