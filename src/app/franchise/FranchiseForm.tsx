"use client";

import { useState } from "react";

export function FranchiseForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="py-12 text-center">
        <span className="font-display text-gold text-4xl block mb-4">&#10003;</span>
        <h3 className="font-sans text-base font-semibold uppercase tracking-normal mb-2">
          Thank You
        </h3>
        <p className="font-serif italic text-background/50">
          Our franchise team will reach out within 48 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="font-sans text-[10px] uppercase tracking-[0.3em] text-background/50 block mb-2">
            Full Name *
          </label>
          <input
            type="text"
            required
            className="w-full bg-transparent border-b border-background/20 focus:border-gold py-3 text-background font-serif outline-none transition-colors"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="font-sans text-[10px] uppercase tracking-[0.3em] text-background/50 block mb-2">
            Phone *
          </label>
          <input
            type="tel"
            required
            className="w-full bg-transparent border-b border-background/20 focus:border-gold py-3 text-background font-serif outline-none transition-colors"
            placeholder="+91"
          />
        </div>
      </div>

      <div>
        <label className="font-sans text-[10px] uppercase tracking-[0.3em] text-background/50 block mb-2">
          Email *
        </label>
        <input
          type="email"
          required
          className="w-full bg-transparent border-b border-background/20 focus:border-gold py-3 text-background font-serif outline-none transition-colors"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label className="font-sans text-[10px] uppercase tracking-[0.3em] text-background/50 block mb-2">
          Preferred City / Location *
        </label>
        <input
          type="text"
          required
          className="w-full bg-transparent border-b border-background/20 focus:border-gold py-3 text-background font-serif outline-none transition-colors"
          placeholder="e.g., Hubli, Karnataka"
        />
      </div>

      <div>
        <label className="font-sans text-[10px] uppercase tracking-[0.3em] text-background/50 block mb-2">
          Investment Budget
        </label>
        <select className="w-full bg-transparent border-b border-background/20 focus:border-gold py-3 text-background font-serif outline-none transition-colors appearance-none">
          <option value="" className="bg-black">Select range</option>
          <option value="5-10" className="bg-black">Rs. 5 – 10 Lakhs</option>
          <option value="10-25" className="bg-black">Rs. 10 – 25 Lakhs</option>
          <option value="25-50" className="bg-black">Rs. 25 – 50 Lakhs</option>
          <option value="50+" className="bg-black">Rs. 50 Lakhs+</option>
        </select>
      </div>

      <div>
        <label className="font-sans text-[10px] uppercase tracking-[0.3em] text-background/50 block mb-2">
          Message (optional)
        </label>
        <textarea
          rows={3}
          className="w-full bg-transparent border-b border-background/20 focus:border-gold py-3 text-background font-serif outline-none transition-colors resize-none"
          placeholder="Tell us about yourself or your business..."
        />
      </div>

      <button
        type="submit"
        className="mt-4 inline-flex items-center gap-3 font-sans text-xs uppercase tracking-[0.3em] px-8 py-4 border border-gold text-gold hover:bg-gold hover:text-black transition-all duration-300"
      >
        Submit Enquiry
        <span className="h-[1px] w-6 bg-current" />
      </button>
    </form>
  );
}
