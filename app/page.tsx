import { ArrowDown, ArrowUpRight, Code2, Layout, RefreshCw, Globe } from "lucide-react";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import Contact from "@/components/Contact";
import { site, skills, services, projects, process } from "@/lib/site";

const icons = { code: Code2, wp: Globe, layout: Layout, refresh: RefreshCw } as const;
const Section = ({ id, children, className = "" }: { id: string; children: React.ReactNode; className?: string }) => (
  <section id={id} className={`mx-auto max-w-6xl px-6 py-24 sm:py-32 ${className}`}>{children}</section>
);
const Head = ({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) => (
  <Reveal className="mb-14 max-w-2xl"><p className="eyebrow">{eyebrow}</p><h2 className="h2 mt-4">{title}</h2>{text && <p className="mt-5 text-mute">{text}</p>}</Reveal>
);

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        {/* HOME */}
        <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden">
          <div className="grid-bg absolute inset-0" aria-hidden />
          <div className="animate-drift absolute -right-32 top-1/4 h-[420px] w-[420px] rounded-full bg-gold/10 blur-[120px]" aria-hidden />
          <div className="relative mx-auto grid w-full max-w-6xl items-center gap-16 px-6 pb-20 pt-32 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Reveal><p className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-mute"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />Available for new projects</p></Reveal>
              <Reveal delay={100}><h1 className="mt-8 font-serif text-5xl leading-[1.02] tracking-tight sm:text-7xl">Abdul Moeed<span className="block text-mute">Web Developer.</span></h1></Reveal>
              <Reveal delay={200}><p className="mt-7 max-w-xl text-lg leading-relaxed text-mute">I design and build clean, responsive websites with close attention to performance, usability and detail.</p></Reveal>
              <Reveal delay={300} className="mt-10 flex flex-wrap gap-3">
                <a href="#projects" className="btn btn-primary">View my work <ArrowUpRight size={16} /></a>
                <a href="#contact" className="btn btn-ghost">Let&apos;s work together</a>
              </Reveal>
            </div>
            <Reveal delay={350} className="hidden lg:col-span-5 lg:block">
              <div className="rounded-xl border border-line bg-panel/80 shadow-2xl shadow-black/50 backdrop-blur">
                <div className="flex items-center gap-1.5 border-b border-line px-4 py-3"><i className="h-2.5 w-2.5 rounded-full bg-white/15" /><i className="h-2.5 w-2.5 rounded-full bg-white/15" /><i className="h-2.5 w-2.5 rounded-full bg-white/15" /><span className="ml-3 font-mono text-[11px] text-mute">portfolio.ts</span></div>
                <pre className="overflow-x-auto p-6 font-mono text-[13px] leading-7 text-mute"><code>{`const developer = {
  name: "Abdul Moeed",
  role: "Web Developer",
  focus: ["Frontend", "WordPress"],
  status: "available",
};

build(developer.focus)
  .then((site) => ship(site));`}</code></pre>
              </div>
            </Reveal>
          </div>
          <a href="#about" aria-label="Scroll to About" className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-mute transition hover:text-gold sm:block"><ArrowDown size={18} /></a>
        </section>

        {/* ABOUT */}
        <Section id="about">
          <div className="grid gap-14 lg:grid-cols-12">
            <Reveal className="lg:col-span-7">
              <p className="eyebrow">About</p>
              <h2 className="h2 mt-4">A developer focused on clean, usable design.</h2>
              <div className="mt-8 space-y-5 text-mute">
                <p>I&apos;m a web developer who builds modern, responsive and user-friendly websites. I keep improving by shipping projects, experimenting with new tools and finding better ways to solve problems.</p>
                <p>I care about fast, accessible interfaces and code that&apos;s easy to maintain. Every project is a chance to learn something new and deliver something genuinely useful.</p>
              </div>
            </Reveal>
            <Reveal delay={150} className="lg:col-span-5">
              <dl className="divide-y divide-line rounded-xl border border-line bg-panel/60">
                {[["Role", "Web Developer"], ["Focus", "Frontend & WordPress"], ["Approach", "Clean, responsive, performant"], ["Status", "Open to new projects"]].map(([k, v]) => (
                  <div key={k} className="flex items-baseline justify-between gap-6 px-6 py-5"><dt className="font-mono text-[11px] uppercase tracking-widest text-mute">{k}</dt><dd className="text-right text-sm">{v}</dd></div>
                ))}
              </dl>
            </Reveal>
          </div>
        </Section>

        {/* SKILLS */}
        <Section id="skills">
          <Head eyebrow="Toolkit" title="What I work with" text="The languages, tools and platforms I use to design and build websites." />
          <div className="grid gap-4 sm:grid-cols-2">
            {skills.map((g, i) => (
              <Reveal key={g.group} delay={i * 80}>
                <div className="card h-full p-7">
                  <h3 className="font-serif text-2xl">{g.group}</h3>
                  <ul className="mt-5 flex flex-wrap gap-2">{g.items.map((s) => <li key={s} className="rounded-full border border-line px-3 py-1 text-xs text-mute transition hover:border-gold/50 hover:text-paper">{s}</li>)}</ul>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* SERVICES */}
        <Section id="services">
          <Head eyebrow="Services" title="What I can build" text="A few of the ways I can help bring a website idea to life." />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => { const Icon = icons[s.icon as keyof typeof icons]; return (
              <Reveal key={s.title} delay={i * 80}>
                <div className="card group h-full p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-lg border border-line text-gold transition duration-500 group-hover:bg-gold group-hover:text-ink"><Icon size={20} /></span>
                  <h3 className="mt-8 text-lg font-medium">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-mute">{s.text}</p>
                </div>
              </Reveal>); })}
          </div>
        </Section>

        {/* PROJECTS */}
        <Section id="projects">
          <Head eyebrow="Selected work" title="Websites & experiments" />
          <div className="divide-y divide-line border-y border-line">
            {projects.map((p, i) => (
              <Reveal key={p.title}>
                <article className="group grid items-center gap-8 py-10 lg:grid-cols-12">
                  <div className={`lg:col-span-6 ${i % 2 ? "lg:order-2" : ""}`}>
                    <div className="overflow-hidden rounded-xl border border-line bg-panel transition duration-700 group-hover:border-gold/40">
                      <div className="flex items-center gap-1.5 border-b border-line px-4 py-2.5"><i className="h-2 w-2 rounded-full bg-white/15" /><i className="h-2 w-2 rounded-full bg-white/15" /><i className="h-2 w-2 rounded-full bg-white/15" /><span className="ml-3 truncate font-mono text-[10px] text-mute">{p.live.replace("https://", "")}</span></div>
                      <div className="relative aspect-[16/10] overflow-hidden p-8 transition duration-700 group-hover:scale-[1.03]">
                        <div className="grid-bg absolute inset-0 opacity-70" />
                        <div className="relative space-y-3"><div className="h-2 w-16 rounded bg-gold/70" /><div className="h-6 w-3/4 rounded bg-paper/80" /><div className="h-6 w-1/2 rounded bg-paper/30" /><div className="mt-6 h-2 w-2/3 rounded bg-white/10" /><div className="h-2 w-1/2 rounded bg-white/10" /><div className="mt-6 flex gap-2"><div className="h-7 w-24 rounded-full bg-paper/90" /><div className="h-7 w-24 rounded-full border border-line" /></div></div>
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-6 lg:px-6">
                    <p className="font-mono text-[11px] uppercase tracking-widest text-mute">0{i + 1} — {p.kind}</p>
                    <h3 className="mt-3 font-serif text-4xl">{p.title}</h3>
                    <p className="mt-4 text-mute">{p.text}</p>
                    <ul className="mt-5 flex flex-wrap gap-2">{p.tech.map((t) => <li key={t} className="rounded-full border border-line px-3 py-1 text-xs text-mute">{t}</li>)}</ul>
                    <div className="mt-7 flex flex-wrap gap-3">
                      <a href={p.live} target="_blank" rel="noreferrer" className="btn btn-primary !py-2.5">Live demo <ArrowUpRight size={15} /></a>
                      {p.repo && <a href={p.repo} target="_blank" rel="noreferrer" className="btn btn-ghost !py-2.5">Source</a>}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* PROCESS */}
        <Section id="process">
          <Head eyebrow="Workflow" title="How I work" text="A simple, repeatable process I follow on every project." />
          <ol className="grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {process.map((s, i) => (
              <li key={s.n} className="bg-ink p-7"><Reveal delay={i * 80}><span className="font-mono text-xs text-gold">{s.n}</span><h3 className="mt-6 font-serif text-2xl">{s.t}</h3><p className="mt-3 text-sm leading-relaxed text-mute">{s.d}</p></Reveal></li>
            ))}
          </ol>
        </Section>

        {/* CONTACT */}
        <Section id="contact"><Reveal><Contact /></Reveal></Section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-mute sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <a href="#home" className="transition hover:text-gold">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}
