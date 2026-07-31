import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tayyab Naseer — CS Student & Mobile App Developer" },
      {
        name: "description",
        content:
          "Portfolio of Tayyab Naseer, a Computer Science undergraduate learning C, C++, OOP, Dart and Flutter mobile app development.",
      },
      { property: "og:title", content: "Tayyab Naseer — CS Student & Mobile App Developer" },
      {
        property: "og:description",
        content:
          "Computer Science undergraduate building mobile apps with Dart & Flutter. See my skills and projects.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

/* ---------- content (edit these lists to update the page) ---------- */

const NAV = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const SKILLS = [
  { name: "C", level: 70, note: "Programming Fundamentals" },
  { name: "C++", level: 65, note: "Basics + problem solving" },
  { name: "OOP (C++)", level: 55, note: "Classes, objects, inheritance" },
  { name: "Dart", level: 60, note: "Language for Flutter apps" },
  { name: "Mobile App Dev", level: 45, note: "Currently learning" },
  { name: "HTML & CSS", level: 20, note: "Next on my list" },
];

const JOURNEY = [
  {
    title: "Programming Fundamentals",
    body: "Started with the basics — variables, loops, functions and logic building in C.",
  },
  {
    title: "C++ and OOP",
    body: "Moved to C++ and object oriented thinking: classes, objects and inheritance.",
  },
  {
    title: "Dart & Mobile Apps",
    body: "Now building real mobile applications, starting with a To-Do app.",
  },
  {
    title: "Web: HTML & CSS",
    body: "Learning the web side next so I can design and tweak pages like this one.",
  },
];

function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("about");

  // highlight the nav item of the section currently on screen
  useEffect(() => {
    const sections = NAV.map((n) => document.querySelector(n.href)).filter(
      Boolean,
    ) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      {/* ---------------- NAVBAR ---------------- */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <nav className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4">
          <a href="#top" className="flex min-w-0 items-center gap-3">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[image:var(--gradient-primary)] font-display text-sm font-bold text-primary-foreground">
              TN
            </span>
            <span className="truncate font-display text-base font-semibold">
              Tayyab Naseer
            </span>
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active === item.href.slice(1)
                    ? "bg-secondary text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <button
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-border md:hidden"
          >
            <span className="text-lg">{menuOpen ? "✕" : "☰"}</span>
          </button>
        </nav>

        {menuOpen && (
          <div className="flex flex-col gap-1 border-t border-border px-5 py-3 md:hidden">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* ---------------- HERO ---------------- */}
      <section id="top" className="relative overflow-hidden">
        <img
          src={heroBg}
          alt=""
          width={1920}
          height={1080}
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,var(--background))]" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-[1.2fr_0.8fr] md:py-28">
          <div className="animate-fade-up">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 font-mono text-xs text-primary">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Open to internships & collaboration
            </p>
            <h1 className="font-display text-4xl leading-tight font-extrabold sm:text-5xl md:text-6xl">
              Hi, I'm <span className="text-gradient">Tayyab Naseer</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              A Computer Science undergraduate who loves turning ideas into
              working code. Right now I'm focused on{" "}
              <span className="text-foreground">mobile app development</span>{" "}
              with Dart, after building my foundations in C, C++ and OOP.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="btn-primary">
                View my work →
              </a>
              <a
                href="https://github.com/taib98765432-gif"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* code-card avatar */}
          <div className="animate-float justify-self-center">
            <div className="surface-card w-full max-w-sm p-5 font-mono text-sm">
              <div className="mb-4 flex gap-1.5">
                <span className="h-3 w-3 rounded-full bg-destructive/70" />
                <span className="h-3 w-3 rounded-full bg-accent/70" />
                <span className="h-3 w-3 rounded-full bg-primary/70" />
              </div>
              <pre className="overflow-x-auto leading-relaxed text-muted-foreground">
{`class Developer {
  string name = `}<span className="text-primary">"Tayyab"</span>{`;
  string field = `}<span className="text-primary">"CS"</span>{`;
  string now  = `}<span className="text-primary">"Mobile Apps"</span>{`;

  void build() {
    cout << `}<span className="text-primary">"Hello World"</span>{`;
  }
};`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- ABOUT ---------------- */}
      <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20">
        <SectionTitle kicker="01 — About" title="A student who keeps building" />
        <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
          <div className="surface-card p-7 text-muted-foreground">
            <p className="leading-relaxed">
              I'm currently doing my graduation in Computer Science. My journey
              started with Programming Fundamentals, where I learned how to think
              in logic and structure. From there I picked up C and C++, and got
              comfortable with the core ideas of Object Oriented Programming.
            </p>
            <p className="mt-4 leading-relaxed">
              These days most of my energy goes into mobile app development with
              Dart — I recently shipped my first project, a To-Do app. Next up on
              my learning list is HTML &amp; CSS, so I can shape the web side of
              things too.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { k: "CS", v: "Undergraduate" },
              { k: "4+", v: "Languages touched" },
              { k: "1", v: "Shipped project" },
              { k: "∞", v: "Curiosity" },
            ].map((s) => (
              <div
                key={s.v}
                className="surface-card surface-card-hover grid place-items-center p-6 text-center"
              >
                <span className="font-display text-3xl font-bold text-gradient">
                  {s.k}
                </span>
                <span className="mt-1 text-xs text-muted-foreground">{s.v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- SKILLS ---------------- */}
      <section id="skills" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20">
        <SectionTitle kicker="02 — Skills" title="What I work with" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((s) => (
            <div key={s.name} className="surface-card surface-card-hover p-6">
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
                <h3 className="truncate font-display text-lg font-semibold">
                  {s.name}
                </h3>
                <span className="shrink-0 font-mono text-xs text-primary">
                  {s.level}%
                </span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{s.note}</p>
              <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-secondary">
                <div
                  className="h-full rounded-full bg-[image:var(--gradient-primary)] transition-[width] duration-700"
                  style={{ width: `${s.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* learning journey */}
        <div className="mt-14 grid gap-5 md:grid-cols-4">
          {JOURNEY.map((j, i) => (
            <div key={j.title} className="surface-card surface-card-hover p-6">
              <span className="font-mono text-xs text-primary">
                step {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 font-display text-base font-semibold">
                {j.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {j.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- PROJECTS ---------------- */}
      <section id="projects" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20">
        <SectionTitle kicker="03 — Projects" title="Things I've built" />
        <article className="surface-card surface-card-hover overflow-hidden">
          <div className="grid gap-8 p-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <span className="font-mono text-xs text-primary">
                Mobile app · Dart
              </span>
              <h3 className="mt-2 font-display text-2xl font-bold">To-Do App</h3>
              <p className="mt-3 max-w-xl leading-relaxed text-muted-foreground">
                My first mobile application — a simple, clean task manager where
                you can add, complete and remove daily tasks. Built while learning
                Dart and mobile UI layout, state handling and app structure.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {["Dart", "Mobile", "State handling", "UI layout"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border bg-secondary/60 px-3 py-1 font-mono text-xs text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href="https://github.com/taib98765432-gif/todoApp"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-7"
              >
                View on GitHub ↗
              </a>
            </div>

            {/* tiny phone mockup, pure CSS */}
            <div className="justify-self-center">
              <div className="h-[260px] w-[140px] rounded-[1.75rem] border border-border bg-background p-3 shadow-[var(--shadow-glow)]">
                <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-border" />
                <p className="font-display text-xs font-semibold">My Tasks</p>
                <div className="mt-3 space-y-2">
                  {["Study OOP", "Build UI", "Push to GitHub", "Revise C++"].map(
                    (t, i) => (
                      <div
                        key={t}
                        className="flex items-center gap-2 rounded-lg bg-secondary/70 px-2 py-1.5"
                      >
                        <span
                          className={`grid h-3.5 w-3.5 shrink-0 place-items-center rounded-[4px] text-[8px] ${
                            i < 2
                              ? "bg-primary text-primary-foreground"
                              : "border border-border"
                          }`}
                        >
                          {i < 2 ? "✓" : ""}
                        </span>
                        <span className="truncate text-[10px] text-muted-foreground">
                          {t}
                        </span>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </article>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          More projects on the way as I keep learning. 🚀
        </p>
      </section>

      {/* ---------------- CONTACT ---------------- */}
      <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20">
        <div className="surface-card p-10 text-center">
          <SectionTitle
            kicker="04 — Contact"
            title="Let's build something together"
            center
          />
          <p className="mx-auto max-w-lg text-muted-foreground">
            Whether it's a student project, an internship or just a chat about
            code — I'd love to hear from you.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="mailto:tayyabnaseer@example.com" className="btn-primary">
              Email me
            </a>
            <a
              href="https://github.com/taib98765432-gif"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Tayyab Naseer · Built with curiosity
      </footer>
    </div>
  );
}

/* small reusable heading block */
function SectionTitle({
  kicker,
  title,
  center,
}: {
  kicker: string;
  title: string;
  center?: boolean;
}) {
  return (
    <div className={`mb-10 ${center ? "text-center" : ""}`}>
      <span className="font-mono text-xs tracking-widest text-primary uppercase">
        {kicker}
      </span>
      <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}
