"use client";
import { useState } from "react";
import { ArrowUpRight, Mail } from "lucide-react";
import { site } from "@/lib/site";
const types = ["Website Development", "WordPress Website", "Landing Page", "Website Redesign", "Other"];
export default function Contact() {
  const [err, setErr] = useState<Record<string, string>>({});
  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget); const v = (k: string) => String(f.get(k) ?? "").trim();
    const er: Record<string, string> = {};
    if (!v("name")) er.name = "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(v("email"))) er.email = "Please enter a valid email.";
    if (v("message").length < 10) er.message = "Please add a short message.";
    setErr(er); if (Object.keys(er).length) return;
    const body = `Name: ${v("name")}\nEmail: ${v("email")}\nProject: ${v("type")}\n\n${v("message")}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent("Project enquiry — " + v("name"))}&body=${encodeURIComponent(body)}`;
  }
  const field = "w-full rounded-lg border border-line bg-ink/60 px-4 py-3 text-sm outline-none transition focus:border-gold/70";
  const E = ({ k }: { k: string }) => err[k] ? <p className="mt-1 text-xs text-red-400">{err[k]}</p> : null;
  return (
    <div className="grid gap-12 lg:grid-cols-5">
      <div className="lg:col-span-2">
        <p className="eyebrow">Get in touch</p>
        <h2 className="h2 mt-4">Have a project in mind?</h2>
        <p className="mt-5 text-mute">Tell me about your idea and I&apos;ll get back to you with next steps.</p>
        <a href={`mailto:${site.email}`} className="group mt-8 flex items-center gap-3 text-lg"><Mail size={18} className="text-gold" />{site.email}<ArrowUpRight size={16} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></a>
        {site.socials.length > 0 && <ul className="mt-6 flex gap-5 text-sm text-mute">{site.socials.map((s) => <li key={s.label}><a className="hover:text-gold" href={s.href} target="_blank" rel="noreferrer">{s.label}</a></li>)}</ul>}
      </div>
      <form onSubmit={submit} noValidate className="space-y-5 rounded-xl border border-line bg-panel/60 p-6 sm:p-8 lg:col-span-3">
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block text-sm"><span className="mb-2 block text-mute">Name</span><input name="name" className={field} /><E k="name" /></label>
          <label className="block text-sm"><span className="mb-2 block text-mute">Email</span><input name="email" type="email" className={field} /><E k="email" /></label>
        </div>
        <label className="block text-sm"><span className="mb-2 block text-mute">Project type</span><select name="type" className={field}>{types.map((t) => <option key={t}>{t}</option>)}</select></label>
        <label className="block text-sm"><span className="mb-2 block text-mute">Message</span><textarea name="message" rows={5} className={field} /><E k="message" /></label>
        <div className="flex flex-wrap items-center gap-4"><button className="btn btn-primary">Send message <ArrowUpRight size={16} /></button><p className="text-xs text-mute">Opens your email client with the message ready to send.</p></div>
      </form>
    </div>
  );
}
