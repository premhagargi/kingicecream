"use client";

import { useState } from "react";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0APhone: ${phone}%0D%0A%0D%0A${encodeURIComponent(message)}`;
    const mailtoLink = `mailto:info@kingicecream.com?subject=${encodeURIComponent(subject || `Contact from ${name}`)}&body=${body}`;
    window.location.href = mailtoLink;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="font-sans text-[10px] uppercase tracking-[0.3em] text-muted-foreground block mb-2">
            Full Name *
          </label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-transparent border-b border-foreground/20 focus:border-gold py-3 text-foreground font-serif outline-none transition-colors"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="font-sans text-[10px] uppercase tracking-[0.3em] text-muted-foreground block mb-2">
            Phone
          </label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full bg-transparent border-b border-foreground/20 focus:border-gold py-3 text-foreground font-serif outline-none transition-colors"
            placeholder="+91"
          />
        </div>
      </div>

      <div>
        <label className="font-sans text-[10px] uppercase tracking-[0.3em] text-muted-foreground block mb-2">
          Email *
        </label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-transparent border-b border-foreground/20 focus:border-gold py-3 text-foreground font-serif outline-none transition-colors"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label className="font-sans text-[10px] uppercase tracking-[0.3em] text-muted-foreground block mb-2">
          Subject
        </label>
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="w-full bg-transparent border-b border-foreground/20 focus:border-gold py-3 text-foreground font-serif outline-none transition-colors"
          placeholder="What's this about?"
        />
      </div>

      <div>
        <label className="font-sans text-[10px] uppercase tracking-[0.3em] text-muted-foreground block mb-2">
          Message *
        </label>
        <textarea
          required
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full bg-transparent border-b border-foreground/20 focus:border-gold py-3 text-foreground font-serif outline-none transition-colors resize-none"
          placeholder="Tell us what's on your mind..."
        />
      </div>

      <button
        type="submit"
        className="mt-4 inline-flex items-center gap-3 font-sans text-xs uppercase tracking-[0.3em] px-8 py-4 border border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
      >
        Send Message
        <span className="h-[1px] w-6 bg-current" />
      </button>
    </form>
  );
}
