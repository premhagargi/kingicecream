"use client";

import { useState } from "react";

export function FranchiseForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const bodyLines = [
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      `Preferred Location: ${location}`,
      `Investment Budget: ${budget || "Not specified"}`,
      "",
      message || "(no additional message)",
    ].join("\r\n");
    const mailtoLink = `mailto:info@kingicecream.com?subject=${encodeURIComponent(
      `Franchise Enquiry — ${name} (${location})`
    )}&body=${encodeURIComponent(bodyLines)}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
  };

  const inputCls =
    "w-full bg-transparent border-b border-background/30 focus:border-gold py-3 text-background font-serif text-base outline-none transition-colors placeholder:text-background/40 placeholder:italic";

  const labelCls =
    "font-sans text-[10px] uppercase tracking-[0.3em] text-background font-semibold block mb-2";

  if (submitted) {
    return (
      <div className="py-10">
        <span className="font-display text-gold text-4xl block mb-4">&#10003;</span>
        <h3 className="font-sans text-lg font-bold uppercase tracking-normal mb-3 text-background">
          Your mail client should be opening
        </h3>
        <p className="font-serif text-base text-background/80 mb-6 leading-relaxed">
          If nothing happened, reach us directly — our franchise team responds within 48 hours.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href={`https://wa.me/919900255556?text=${encodeURIComponent(
              `Hi, I'm ${name || "[name]"} from ${location || "[city]"} — interested in a King Ice Cream franchise.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-[0.25em] px-5 py-3 border border-gold text-gold hover:bg-gold hover:text-black transition-all"
          >
            WhatsApp us
          </a>
          <a
            href="mailto:info@kingicecream.com"
            className="inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-[0.25em] px-5 py-3 border border-background/40 text-background hover:border-background transition-all"
          >
            info@kingicecream.com
          </a>
          <a
            href="tel:9900255556"
            className="inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-[0.25em] px-5 py-3 border border-background/40 text-background hover:border-background transition-all"
          >
            Call 99002 55556
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className={labelCls}>Full Name *</label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputCls}
            placeholder="e.g. Rohan Desai"
          />
        </div>
        <div>
          <label className={labelCls}>Phone *</label>
          <input
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={inputCls}
            placeholder="+91 98XXX XXXXX"
          />
        </div>
      </div>

      <div>
        <label className={labelCls}>Email *</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputCls}
          placeholder="rohan@example.com"
        />
      </div>

      <div>
        <label className={labelCls}>Preferred City / Location *</label>
        <input
          type="text"
          required
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className={inputCls}
          placeholder="e.g. Hubli, Karnataka"
        />
      </div>

      <div>
        <label className={labelCls}>Investment Budget</label>
        <select
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          className={`${inputCls} appearance-none cursor-pointer`}
        >
          <option value="" className="bg-[#1B4D89] text-background">Select range</option>
          <option value="Rs. 5 – 10 Lakhs" className="bg-[#1B4D89] text-background">Rs. 5 – 10 Lakhs</option>
          <option value="Rs. 10 – 25 Lakhs" className="bg-[#1B4D89] text-background">Rs. 10 – 25 Lakhs</option>
          <option value="Rs. 25 – 50 Lakhs" className="bg-[#1B4D89] text-background">Rs. 25 – 50 Lakhs</option>
          <option value="Rs. 50 Lakhs+" className="bg-[#1B4D89] text-background">Rs. 50 Lakhs+</option>
        </select>
      </div>

      <div>
        <label className={labelCls}>Message (optional)</label>
        <textarea
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`${inputCls} resize-none`}
          placeholder="Tell us about yourself or your business…"
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
