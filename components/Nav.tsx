"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, site } from "@/lib/site";
export default function Nav() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: "-45% 0px -50% 0px" });
    nav.forEach((n) => { const el = document.getElementById(n.id); if (el) io.observe(el); });
    return () => { window.removeEventListener("scroll", onScroll); io.disconnect(); };
  }, []);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; }, [open]);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition duration-500 ${scrolled || open ? "border-b border-line bg-ink/80 backdrop-blur-xl" : ""}`}>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#home" className="font-serif text-xl tracking-tight">Abdul<span className="text-gold">.</span>Moeed</a>
        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {nav.filter((n) => n.id !== "home").map((n) => (
            <a key={n.id} href={`#${n.id}`} className={`relative px-3 py-2 text-sm transition ${active === n.id ? "text-paper" : "text-mute hover:text-paper"}`}>
              {n.label}
              <span className={`absolute inset-x-3 -bottom-px h-px bg-gold transition-transform duration-500 ${active === n.id ? "scale-x-100" : "scale-x-0"}`} />
            </a>
          ))}
        </nav>
        <a href="#contact" className="btn btn-ghost hidden !py-2 md:inline-flex">Let&apos;s talk</a>
        <button className="p-2 md:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>{open ? <X size={22} /> : <Menu size={22} />}</button>
      </div>
      <div className={`fixed inset-0 top-16 bg-ink transition duration-500 md:hidden ${open ? "visible opacity-100" : "invisible opacity-0"}`}>
        <nav className="flex h-full flex-col justify-between px-6 pb-10 pt-8">
          <ul>{nav.map((n, i) => (
            <li key={n.id} className="border-b border-line" style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}>
              <a href={`#${n.id}`} onClick={() => setOpen(false)} className={`flex items-baseline justify-between py-4 font-serif text-3xl ${active === n.id ? "text-gold" : ""}`}>
                {n.label}<span className="font-mono text-xs text-mute">0{i + 1}</span>
              </a>
            </li>))}
          </ul>
          <a href={`mailto:${site.email}`} className="text-sm text-mute">{site.email}</a>
        </nav>
      </div>
    </header>
  );
}
