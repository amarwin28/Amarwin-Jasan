import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Copy, Check, ArrowUpRight, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { SectionHeading } from './SectionHeading';
import { profileData } from '../data/profile';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [statusNotice, setStatusNotice] = useState<string | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!form.name.trim()) {
      newErrors.name = 'Please provide your name.';
    } else if (form.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    if (!form.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please provide a valid email address.';
    }

    if (!form.message.trim()) {
      newErrors.message = 'Please enter your message.';
    } else if (form.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    // Prepare mailto link with prefilled subject and message body
    const emailSubject = encodeURIComponent(
      form.subject.trim()
        ? `[Portfolio Contact] ${form.subject.trim()} - from ${form.name.trim()}`
        : `[Portfolio Contact] Project Inquiry from ${form.name.trim()}`
    );

    const emailBody = encodeURIComponent(
      `Hi Amarwin,\n\n${form.message.trim()}\n\nBest regards,\n${form.name.trim()}\nEmail: ${form.email.trim()}`
    );

    const mailtoUrl = `mailto:${profileData.email}?subject=${emailSubject}&body=${emailBody}`;

    // Trigger the client email application
    window.location.href = mailtoUrl;

    // Display clear, honest instructions to the user
    setStatusNotice(
      `Launching your mail client to send to ${profileData.email}. If your mail app didn't open automatically, feel free to write directly to ${profileData.email}.`
    );
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#F8FAFC] border-t border-[#DCE7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badge="GET IN TOUCH"
          title="Have an Idea? Let's Build Something."
          subtitle={profileData.shortIntro}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Left Column: Direct Contact Info & Socials */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-6"
          >
            <div>
              <p className="text-base text-[#64748B] leading-relaxed mb-6">
                I'm always interested in collaborating on meaningful projects, exploring innovative ideas, and connecting with people who love building technology.
              </p>

              {/* Direct Info Cards */}
              <div className="space-y-4">
                {/* Email Box */}
                <div className="p-4 rounded-xl bg-white border border-[#DCE7F2] card-shadow flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-10 h-10 rounded-lg bg-[#DCE7F2]/60 text-[#087BFF] flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="truncate">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[#64748B] block">
                        Email Address
                      </span>
                      <a
                        href={`mailto:${profileData.email}`}
                        className="text-sm sm:text-base font-bold text-[#102C4E] hover:text-[#087BFF] truncate transition-colors block"
                      >
                        {profileData.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-[#F8FAFC] hover:bg-[#DCE7F2] text-[#64748B] hover:text-[#102C4E] transition-colors shrink-0 cursor-pointer"
                    title="Copy email to clipboard"
                    aria-label="Copy email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location Box */}
                <div className="p-4 rounded-xl bg-white border border-[#DCE7F2] card-shadow flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#DCE7F2]/60 text-[#087BFF] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#64748B] block">
                      Location
                    </span>
                    <span className="text-sm sm:text-base font-bold text-[#102C4E]">
                      {profileData.location}
                    </span>
                  </div>
                </div>

                {/* Availability status */}
                <div className="p-4 rounded-xl bg-white border border-[#DCE7F2] card-shadow flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100">
                    <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#64748B] block">
                      Availability
                    </span>
                    <span className="text-sm sm:text-base font-bold text-[#102C4E]">
                      {profileData.availability}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links Banner */}
            <div className="p-5 rounded-2xl bg-[#071B35] text-white">
              <h4 className="text-sm font-bold text-white mb-1">Professional Profiles</h4>
              <p className="text-xs text-[#DCE7F2]/75 mb-3">Check my open-source code and professional network.</p>
              
              <div className="flex flex-wrap gap-2">
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-lg bg-[#102C4E] hover:bg-[#153863] text-white text-xs font-semibold inline-flex items-center gap-1.5 transition-colors border border-white/10"
                >
                  <LinkedinIcon className="w-3.5 h-3.5 text-[#087BFF]" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>

                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-lg bg-[#102C4E] hover:bg-[#153863] text-white text-xs font-semibold inline-flex items-center gap-1.5 transition-colors border border-white/10"
                >
                  <GithubIcon className="w-3.5 h-3.5 text-[#087BFF]" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="p-6 sm:p-8 md:p-10 rounded-2xl bg-white border border-[#DCE7F2] card-shadow">
              <h3 className="text-xl font-bold text-[#102C4E] mb-1">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] mb-6">
                Fill in the details below to launch a direct email to Amarwin Jasan.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-bold text-[#102C4E] uppercase tracking-wider mb-1.5 font-mono">
                      Your Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm text-[#102C4E] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#087BFF] transition-all ${
                        errors.name ? 'border-red-500 bg-red-50/20' : 'border-[#DCE7F2] bg-[#F8FAFC]'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-xs text-red-600 mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Email field */}
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-bold text-[#102C4E] uppercase tracking-wider mb-1.5 font-mono">
                      Your Email *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="name@example.com"
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm text-[#102C4E] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#087BFF] transition-all ${
                        errors.email ? 'border-red-500 bg-red-50/20' : 'border-[#DCE7F2] bg-[#F8FAFC]'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-600 mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Subject field */}
                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-bold text-[#102C4E] uppercase tracking-wider mb-1.5 font-mono">
                    Subject / Topic (Optional)
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    placeholder="Project Inquiry, Collaboration, or Freelance"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#DCE7F2] bg-[#F8FAFC] text-sm text-[#102C4E] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#087BFF] transition-all"
                  />
                </div>

                {/* Message field */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-bold text-[#102C4E] uppercase tracking-wider mb-1.5 font-mono">
                    Your Message *
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about your project, idea, or questions..."
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm text-[#102C4E] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#087BFF] transition-all resize-y ${
                      errors.message ? 'border-red-500 bg-red-50/20' : 'border-[#DCE7F2] bg-[#F8FAFC]'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-red-600 mt-1">{errors.message}</p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-[#087BFF] hover:bg-[#0069e0] text-white font-semibold text-sm sm:text-base flex items-center justify-center gap-2 shadow-md shadow-[#087BFF]/25 hover:shadow-[#087BFF]/40 transition-all cursor-pointer active:scale-[0.99]"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>

              {/* Status explanation notice */}
              {statusNotice && (
                <div className="mt-5 p-4 rounded-xl bg-[#DCE7F2]/60 border border-[#087BFF]/30 text-xs sm:text-sm text-[#102C4E] leading-relaxed">
                  <p className="font-semibold text-[#087BFF] mb-1">Submission Dispatch Notice:</p>
                  <p>{statusNotice}</p>
                </div>
              )}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
