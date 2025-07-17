"use client";

import { useState } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just simulate submission
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold font-inter text-center mb-16">
          <span className="bg-gradient-to-r from-aurora-cyan to-aurora-green bg-clip-text text-transparent">
            Contact & Socials
          </span>
        </h2>

        {submitted ? (
          <div className="text-center text-aurora-green text-xl font-semibold">
            Thank you for reaching out! I will get back to you soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8 max-w-xl mx-auto">
            <div>
              <label htmlFor="name" className="block text-white font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-cosmic-blue border border-aurora-cyan focus:outline-none focus:ring-2 focus:ring-aurora-cyan text-white"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-white font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-cosmic-blue border border-aurora-cyan focus:outline-none focus:ring-2 focus:ring-aurora-cyan text-white"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-white font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-cosmic-blue border border-aurora-cyan focus:outline-none focus:ring-2 focus:ring-aurora-cyan text-white resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-aurora-cyan to-aurora-green rounded-full font-semibold text-cosmic-blue hover:scale-105 transition-transform duration-300"
            >
              Send Message
            </button>
          </form>
        )}

        <div className="mt-16 flex justify-center space-x-8">
          <a
            href="https://github.com/sahilsingh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-aurora-cyan hover:text-aurora-green transition-colors duration-300 underline"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/sahilsingh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-aurora-cyan hover:text-aurora-green transition-colors duration-300 underline"
          >
            LinkedIn
          </a>
          <a
            href="mailto:sahil@example.com"
            className="text-aurora-cyan hover:text-aurora-green transition-colors duration-300 underline"
          >
            Email
          </a>
        </div>
      </div>
    </section>
  );
}
