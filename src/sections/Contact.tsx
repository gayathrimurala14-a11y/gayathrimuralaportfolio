import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Send,
  CheckCircle2,
  ArrowUpRight,
} from 'lucide-react';
import { contactData } from '../data/contactData';
import { SectionHeading } from '../components/SectionHeading';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionError, setSubmissionError] = useState('');

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) {
      newErrors.message = 'Please provide a message or inquiry details';
    } else if (formData.message.length < 15) {
      newErrors.message = 'Message should be at least 15 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmissionError('');

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${encodeURIComponent(contactData.email)}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            ...formData,
            _subject: formData.subject,
          }),
        },
      );
      const result: { success?: boolean | string; message?: string } =
        await response.json();

      if (!response.ok || (result.success !== true && result.success !== 'true')) {
        throw new Error(result.message || 'Unable to send your message right now.');
      }

      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    } catch (error) {
      setSubmissionError(
        error instanceof Error
          ? error.message
          : 'Unable to send your message right now. Please try again.',
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#FAFAF8] border-b border-[#111111]/8 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Heading */}
        <SectionHeading
          kicker={contactData.sectionLabel}
          title={contactData.heading}
          description={contactData.description}
        />

        {/* Two-Column Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Contact Info & CTAs */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Information Card */}
            <div className="p-8 rounded-2xl bg-white border border-[#111111]/8 shadow-xs">
              <h3 className="font-display text-xl font-bold text-[#111111] mb-6">
                Direct Contact Information
              </h3>

              <div className="space-y-6">
                {/* Email Item & Clickable CTA */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FAFAF8] border border-[#111111]/8 flex items-center justify-center text-[#C6A15B] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#777777]">
                      Email Address
                    </div>
                    <a
                      href={`mailto:${contactData.email}`}
                      className="text-sm font-semibold text-[#111111] hover:text-[#C6A15B] transition-colors break-all"
                    >
                      {contactData.email}
                    </a>
                    <div className="mt-2">
                      <a
                        href={`mailto:${contactData.email}?subject=Civil%20Engineering%20Inquiry%20-%20Gayathri%20Murala`}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#FAFAF8] border border-[#111111]/10 rounded-md text-xs font-semibold text-[#111111] hover:border-[#C6A15B] transition-colors"
                      >
                        <span>Send Email</span>
                        <ArrowUpRight className="w-3 h-3 text-[#C6A15B]" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Phone Item & Clickable CTA */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FAFAF8] border border-[#111111]/8 flex items-center justify-center text-[#C6A15B] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#777777]">
                      Telephone / Mobile
                    </div>
                    <a
                      href={`tel:${contactData.phone.replace(/\s+/g, '')}`}
                      className="text-sm font-semibold text-[#111111] hover:text-[#C6A15B] transition-colors font-mono"
                    >
                      {contactData.phone}
                    </a>
                    <div className="mt-2">
                      <a
                        href={`tel:${contactData.phone.replace(/\s+/g, '')}`}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#FAFAF8] border border-[#111111]/10 rounded-md text-xs font-semibold text-[#111111] hover:border-[#C6A15B] transition-colors"
                      >
                        <span>Call Directly</span>
                        <ArrowUpRight className="w-3 h-3 text-[#C6A15B]" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FAFAF8] border border-[#111111]/8 flex items-center justify-center text-[#C6A15B] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#777777]">
                      Location
                    </div>
                    <div className="text-sm font-semibold text-[#111111]">
                      {contactData.location}
                    </div>
                    <div className="text-xs text-[#777777] mt-0.5">
                      {contactData.locationNote}
                    </div>
                  </div>
                </div>

                {/* LinkedIn Profile */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FAFAF8] border border-[#111111]/8 flex items-center justify-center text-[#C6A15B] shrink-0">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#777777]">
                      LinkedIn Profile
                    </div>
                    <a
                      href={contactData.linkedInUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8C6F2D] hover:underline mt-1"
                    >
                      <span>Connect on LinkedIn</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Message Form with Validation */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-white border border-[#111111]/8 shadow-xs">
              
              <h3 className="font-display text-2xl font-bold text-[#111111] mb-2">
                Send a Message
              </h3>
              <p className="text-xs text-[#777777] mb-8">
                Fill out the details below and I will get back to you promptly.
                Messages are delivered to {contactData.email} via FormSubmit.
                Confirm FormSubmit&apos;s one-time activation email to enable delivery.
              </p>

              {isSubmitted ? (
                <div className="p-8 rounded-xl bg-[#FAFAF8] border border-[#C6A15B] text-center space-y-4 animate-in zoom-in-95">
                  <div className="w-12 h-12 rounded-full bg-[#C6A15B] text-white flex items-center justify-center mx-auto shadow-xs">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-display text-xl font-bold text-[#111111]">
                    Message Transmitted Successfully!
                  </h4>
                  <p className="text-xs text-[#555555] max-w-md mx-auto">
                    Thank you for reaching out. Your message has been received and forwarded to Gayathri Murala.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-semibold text-[#111111] bg-[#FAFAF8] border border-[#111111]/15 hover:border-[#C6A15B] rounded-md transition-colors cursor-pointer"
                  >
                    <span>Send Another Message</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {submissionError && (
                    <p role="alert" className="text-sm text-red-600">
                      {submissionError}
                    </p>
                  )}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#555555] mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="e.g. your name"
                        className={`w-full px-4 py-2.5 text-sm bg-[#FAFAF8] border rounded-lg focus:outline-none transition-colors ${
                          errors.name
                            ? 'border-red-500 focus:border-red-500'
                            : 'border-[#111111]/15 focus:border-[#C6A15B]'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-red-600 mt-1">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#555555] mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="e.g. contact@example.com"
                        className={`w-full px-4 py-2.5 text-sm bg-[#FAFAF8] border rounded-lg focus:outline-none transition-colors ${
                          errors.email
                            ? 'border-red-500 focus:border-red-500'
                            : 'border-[#111111]/15 focus:border-[#C6A15B]'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-600 mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#555555] mb-1.5">
                      Subject / Project Context *
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      placeholder="e.g. Opportunity / Project Consultation"
                      className={`w-full px-4 py-2.5 text-sm bg-[#FAFAF8] border rounded-lg focus:outline-none transition-colors ${
                        errors.subject
                          ? 'border-red-500 focus:border-red-500'
                          : 'border-[#111111]/15 focus:border-[#C6A15B]'
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-[11px] text-red-600 mt-1">{errors.subject}</p>
                    )}
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#555555]">
                        Message *
                      </label>
                      <span className="text-[10px] text-[#777777]">
                        {formData.message.length} characters
                      </span>
                    </div>
                    <textarea
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Describe your inquiry, project scope, or opportunity..."
                      className={`w-full px-4 py-3 text-sm bg-[#FAFAF8] border rounded-lg focus:outline-none transition-colors ${
                        errors.message
                          ? 'border-red-500 focus:border-red-500'
                          : 'border-[#111111]/15 focus:border-[#C6A15B]'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-red-600 mt-1">{errors.message}</p>
                    )}
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#111111] bg-[#C6A15B] hover:bg-[#B38E46] transition-all rounded-md shadow-xs cursor-pointer active:scale-[0.98] disabled:opacity-70"
                    >
                      <Send className="w-3.5 h-3.5 stroke-[2.5]" />
                      <span>{isSubmitting ? 'Transmitting...' : 'Send Message'}</span>
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
