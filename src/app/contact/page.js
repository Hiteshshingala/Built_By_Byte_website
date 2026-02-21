'use client';

import { useState } from 'react';
import Hero from '@/components/sections/Hero';
import Container from '@/components/layout/Container';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { contactConfig } from '@/data/contact-config';
import { footer } from '@/data/navigation';

export default function ContactPage() {
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errors, setErrors] = useState({});

  const validate = (formData) => {
    const e = {};
    if (!formData.get('fullName')?.trim() || formData.get('fullName').trim().length < 2) {
      e.fullName = 'Please enter your name (at least 2 characters).';
    }
    const email = formData.get('email');
    if (!email?.trim()) e.email = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = 'Please enter a valid email.';
    if (!formData.get('service')?.trim()) e.service = 'Please select a service.';
    const msg = formData.get('message')?.trim();
    if (!msg || msg.length < 10) e.message = 'Message must be at least 10 characters.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    if (!validate(formData)) return;

    setStatus('loading');
    try {
      const emailjs = (await import('@emailjs/browser')).default;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || contactConfig.emailjs.publicKey;
      if (!publicKey || publicKey === 'your_emailjs_public_key') {
        setStatus('success');
        return;
      }
      await emailjs.send(
        contactConfig.emailjs.serviceId,
        contactConfig.emailjs.templateId,
        {
          fullName: formData.get('fullName'),
          email: formData.get('email'),
          company: formData.get('company'),
          service: formData.get('service'),
          budget: formData.get('budget'),
          message: formData.get('message'),
        },
        publicKey
      );
      setStatus('success');
      form.reset();
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <>
      <Hero
        headline="Get a project estimate"
        subheadline="Tell us what you're building. We'll respond within 24 hours."
        primaryCta="Book a Free 20-Min Intro Call"
        primaryCtaHref="#form"
        secondaryCta="See Case Studies"
        secondaryCtaHref="/case-studies"
        subtext={footer.responseTime}
      />
      <section id="form" className="py-16 md:py-24 bg-white scroll-mt-24">
        <Container>
          <div className="max-w-xl mx-auto">
            {status === 'success' && (
              <div
                className="mb-6 rounded-lg bg-green-50 border border-green-200 p-4 text-green-800"
                role="alert"
              >
                {contactConfig.successMessage}
              </div>
            )}
            {status === 'error' && (
              <div
                className="mb-6 rounded-lg bg-red-50 border border-red-200 p-4 text-red-800"
                role="alert"
              >
                {contactConfig.errorMessage}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                label="Full Name"
                name="fullName"
                required
                placeholder="John Doe"
                error={errors.fullName}
                disabled={status === 'loading'}
              />
              <Input
                label="Email"
                name="email"
                type="email"
                required
                placeholder="john@startup.com"
                error={errors.email}
                disabled={status === 'loading'}
              />
              <Input
                label="Company"
                name="company"
                placeholder="Your Startup Inc."
                disabled={status === 'loading'}
              />
              <div>
                <label htmlFor="contact-service" className="block text-sm font-medium text-neutral-700 mb-1">
                  What do you need? <span className="text-error">*</span>
                </label>
                <select
                  id="contact-service"
                  name="service"
                  required
                  disabled={status === 'loading'}
                  className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Select a service</option>
                  {contactConfig.formFields
                    .find((f) => f.name === 'service')
                    ?.options?.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                </select>
                {errors.service && (
                  <p className="mt-1 text-sm text-error">{errors.service}</p>
                )}
              </div>
              <div>
                <label htmlFor="contact-budget" className="block text-sm font-medium text-neutral-700 mb-1">
                  Project Budget
                </label>
                <select
                  id="contact-budget"
                  name="budget"
                  disabled={status === 'loading'}
                  className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Select budget range</option>
                  {contactConfig.formFields
                    .find((f) => f.name === 'budget')
                    ?.options?.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                </select>
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-neutral-700 mb-1">
                  Tell us about your project <span className="text-error">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  placeholder="What are you building? What's your timeline?"
                  disabled={status === 'loading'}
                  className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-error">{errors.message}</p>
                )}
              </div>
              <Button type="submit" disabled={status === 'loading'} className="w-full">
                {status === 'loading' ? 'Sending…' : 'Send message'}
              </Button>
            </form>
          </div>
        </Container>
      </section>
    </>
  );
}
