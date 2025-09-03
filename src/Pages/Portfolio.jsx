import React, { useEffect, useRef, useState } from "react";

const Portfolio = () => {
  const rootRef = useRef(null);
  const [loading, setLoading] = useState(true);

  // Fake preloader
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(t);
  }, []);

  // Scroll reveal
  useEffect(() => {
    const el = rootRef.current;
    if (!el || typeof window === "undefined") return;

    const items = el.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    items.forEach((i) => observer.observe(i));
    return () => observer.disconnect();
  }, []);

  const projects = Array.from({ length: 9 }).map((_, idx) => ({
    id: idx + 1,
    title: `Project ${idx + 1}`,
    short: "Elegant UI, performant frontend, thoughtful UX and robust backend.",
    img: `https://picsum.photos/800/500?random=${idx + 10}`,
    badges: ["React", "Tailwind", idx % 2 ? "Node.js" : "Design"],
  }));

  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      role: "CTO, TechCorp",
      text: "Alsadir doesn't just deliver code — he crafts solutions that scale and delight users.",
      img: "https://randomuser.me/api/portraits/men/10.jpg",
    },
    {
      id: 2,
      name: "Sarah Smith",
      role: "Product Manager",
      text: "We shipped faster and with fewer bugs thanks to Alsadir's architecture and attention to detail.",
      img: "https://randomuser.me/api/portraits/women/11.jpg",
    },
    {
      id: 3,
      name: "Michael Johnson",
      role: "CEO, StartupHub",
      text: "From idea to MVP, Alsadir made the experience frictionless and productive.",
      img: "https://randomuser.me/api/portraits/men/12.jpg",
    },
  ];

  return (
    <div
      ref={rootRef}
      className="relative bg-gradient-to-r from-violet-100 via-pink-100 to-orange-100 dark:from-gray-900 dark:via-gray-800 dark:to-black text-gray-900 dark:text-gray-100 overflow-x-hidden"
    >
      {/* Preloader */}
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-r from-violet-600 to-pink-600 z-50">
          <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* Custom animations */}
      <style>{`
        .animate-pulse-slow { animation: pulse 6s ease-in-out infinite; }
        .animate-spin-slow { animation: spin 20s linear infinite; }
        .animate-bounce-slow { animation: bounce 6s ease-in-out infinite; }
        @keyframes spin { from { transform: rotate(0deg);} to { transform: rotate(360deg);} }
        @keyframes pulse { 0%{opacity:.55}50%{opacity:.95}100%{opacity:.55} }
        @keyframes bounce { 0%{transform: translateY(0)}50%{transform: translateY(-10px)}100%{transform: translateY(0)} }
        [data-reveal] { opacity: 0; transform: translateY(24px) scale(0.99); transition: all 700ms cubic-bezier(.2,.9,.2,1); }
        [data-reveal].is-revealed { opacity: 1; transform: none; }
        .bar-grow { transition: width 1200ms cubic-bezier(.2,.9,.2,1); }
        .glass-glow { box-shadow: 0 10px 30px rgba(139,92,246,0.12); border: 1px solid rgba(255,255,255,0.06); backdrop-filter: blur(6px); }
        .stacked-mobile > * { margin-bottom: -48px; }
        .snap-row { scroll-snap-type: x mandatory; -webkit-overflow-scrolling: touch; overflow-x: auto; display: flex; gap: 1rem; padding-bottom: 1rem;}
        .snap-item { scroll-snap-align: center; flex: 0 0 84%; max-width: 84%; }
        .neon-cta { box-shadow: 0 6px 30px rgba(139,92,246,0.18), 0 0 18px rgba(99,102,241,0.12) inset; }
      `}</style>

      {/* HERO */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-6">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400 opacity-30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        <img
          src="https://picsum.photos/300/300"
          alt="Profile"
          className="rounded-full w-40 h-40 object-cover border-4 border-white dark:border-gray-700 shadow-2xl mb-6"
        />
        <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 text-transparent bg-clip-text animate-bounce">
          Alsadir Ebrahim
        </h1>
        <p className="mt-4 text-lg md:text-2xl font-light max-w-2xl">
          🚀 Software Engineer | Problem Solver | Builder of Elegant & Scalable Systems
        </p>
        <div className="flex gap-4 mt-6">
          <a href="#contact" className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg hover:scale-105 transition neon-cta">Download CV</a>
          <a href="#contact" className="px-6 py-3 rounded-xl bg-gradient-to-r from-orange-400 to-red-400 text-white shadow-lg hover:scale-105 transition neon-cta">Hire Me</a>
        </div>
      </section>

      <section className="relative py-20 px-6 md:px-20">
        {/* decorative morph blobs */}
        <div className="absolute -left-20 top-10 w-72 h-72 bg-pink-300 opacity-30 rounded-full blur-3xl mix-blend-multiply animate-pulse-slow"></div>
        <div className="absolute right-10 -bottom-16 w-80 h-80 bg-orange-300 opacity-25 rounded-full blur-3xl mix-blend-multiply animate-spin-slow"></div>

        <h2 className="text-4xl font-bold text-center mb-12" data-reveal>
          About Me
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div data-reveal className="relative">
            <div className="absolute -left-6 -top-6 w-40 h-40 bg-gradient-to-tr from-violet-300 to-pink-300 rounded-full opacity-40 blur-xl animate-pulse-slow"></div>
            <img src="https://picsum.photos/500/420" alt="About" className="rounded-3xl shadow-2xl transform hover:scale-105 transition" />
          </div>

          <div data-reveal className="space-y-6">
            <div className="glass-glow p-6 rounded-2xl">
              <p className="text-lg leading-relaxed">
                Hi, I’m <strong>Alsadir Ebrahim</strong>. I build elegant software
                solutions that solve measurable problems. I design with humans in mind —
                fast, accessible, and delightful.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-gradient-to-r from-purple-200 to-pink-200 shadow-lg flex flex-col items-center" data-reveal>
                <div className="text-2xl font-bold">10+</div>
                <div className="text-sm opacity-80">Projects</div>
              </div>
              <div className="p-4 rounded-xl bg-gradient-to-r from-pink-200 to-orange-200 shadow-lg flex flex-col items-center" data-reveal>
                <div className="text-2xl font-bold">5+</div>
                <div className="text-sm opacity-80">Years</div>
              </div>
              <div className="p-4 rounded-xl bg-gradient-to-r from-orange-200 to-violet-200 shadow-lg flex flex-col items-center" data-reveal>
                <div className="text-2xl font-bold">20+</div>
                <div className="text-sm opacity-80">Clients</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SKILLS SECTION (animated bars + floating badges + reveal) ===== */}
      <section className="relative py-20 px-6 md:px-20 bg-white dark:bg-gray-900 rounded-t-3xl shadow-lg">
        <h2 className="text-4xl font-bold text-center mb-12" data-reveal>Skills</h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Skill group */}
          <div data-reveal className="space-y-6 p-6 rounded-2xl glass-glow">
            <h3 className="text-2xl font-semibold mb-2">Frontend & Animation</h3>
            {[
              { name: "React", pct: 95 },
              { name: "Tailwind & CSS", pct: 92 },
              { name: "Motion UI", pct: 88 },
            ].map((s, i) => (
              <div key={i} className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span>{s.name}</span>
                  <span className="opacity-70">{s.pct}%</span>
                </div>
                <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div className="bar-grow bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full"
                    style={{ width: `${s.pct}%`, transitionDelay: `${i * 120}ms` }} />
                </div>
              </div>
            ))}
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-purple-50 rounded-full text-sm">JSX</span>
              <span className="px-3 py-1 bg-pink-50 rounded-full text-sm">ARIA</span>
              <span className="px-3 py-1 bg-orange-50 rounded-full text-sm">SVG</span>
            </div>
          </div>

          {/* Backend group */}
          <div data-reveal className="space-y-6 p-6 rounded-2xl glass-glow">
            <h3 className="text-2xl font-semibold mb-2">Backend & Systems</h3>
            {[
              { name: "Node.js", pct: 90 },
              { name: "Express / APIs", pct: 88 },
              { name: "DB Design", pct: 85 },
            ].map((s, i) => (
              <div key={i} className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span>{s.name}</span>
                  <span className="opacity-70">{s.pct}%</span>
                </div>
                <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div className="bar-grow bg-gradient-to-r from-pink-500 to-orange-500 h-3 rounded-full"
                    style={{ width: `${s.pct}%`, transitionDelay: `${i * 120}ms` }} />
                </div>
              </div>
            ))}
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-purple-50 rounded-full text-sm">REST</span>
              <span className="px-3 py-1 bg-pink-50 rounded-full text-sm">Auth</span>
              <span className="px-3 py-1 bg-orange-50 rounded-full text-sm">Scaling</span>
            </div>
          </div>

          {/* DevOps group */}
          <div data-reveal className="space-y-6 p-6 rounded-2xl glass-glow">
            <h3 className="text-2xl font-semibold mb-2">DevOps & Tools</h3>
            {[
              { name: "CI/CD", pct: 85 },
              { name: "Docker", pct: 82 },
              { name: "Monitoring", pct: 78 },
            ].map((s, i) => (
              <div key={i} className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span>{s.name}</span>
                  <span className="opacity-70">{s.pct}%</span>
                </div>
                <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div className="bar-grow bg-gradient-to-r from-orange-500 to-violet-500 h-3 rounded-full"
                    style={{ width: `${s.pct}%`, transitionDelay: `${i * 120}ms` }} />
                </div>
              </div>
            ))}
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-purple-50 rounded-full text-sm">Docker</span>
              <span className="px-3 py-1 bg-pink-50 rounded-full text-sm">AW S</span>
              <span className="px-3 py-1 bg-orange-50 rounded-full text-sm">CI</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROJECTS SECTION (desktop grid + mobile snap & stacked feel) ===== */}
      <section className="relative py-20 px-6 md:px-20" id="projects">
        <h2 className="text-4xl font-bold text-center mb-12" data-reveal>Projects</h2>

        {/* Desktop grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 max-w-7xl mx-auto" data-reveal>
          {projects.map((p) => (
            <article key={p.id} className="rounded-2xl shadow-xl overflow-hidden transform hover:-translate-y-2 transition duration-400 bg-white dark:bg-gray-800">
              <div className="relative h-44 overflow-hidden">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                <p className="text-sm opacity-75 mb-4">{p.short}</p>
                <div className="flex gap-2 flex-wrap mb-4">
                  {p.badges.map((b, i) => (
                    <span key={i} className="px-3 py-1 rounded-full text-xs bg-violet-100 dark:bg-violet-700">{b}</span>
                  ))}
                </div>
                <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 text-white hover:scale-105 transition neon-cta">View Project</button>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile horizontal snap + stacked look */}
        <div className="md:hidden mt-6 snap-row px-4">
          {projects.map((p) => (
            <article key={p.id} className="snap-item rounded-2xl shadow-2xl overflow-hidden bg-white dark:bg-gray-800 p-4">
              <div className="h-40 overflow-hidden rounded-xl mb-3">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
              </div>
              <h3 className="font-semibold mb-1">{p.title}</h3>
              <p className="text-sm opacity-75 mb-3">{p.short}</p>
              <div className="flex gap-2 flex-wrap mb-3">
                {p.badges.map((b,i)=> <span key={i} className="text-xs px-2 py-1 bg-purple-50 rounded-full">{b}</span>)}
              </div>
              <button className="px-4 py-2 bg-purple-600 text-white rounded-full w-full">View</button>
            </article>
          ))}
        </div>
      </section>

      {/* ===== TESTIMONIALS (sticky stack on large screens & mobile stacked cards) ===== */}
      <section className="relative py-20 px-6 md:px-20 bg-gradient-to-r from-orange-100 via-pink-100 to-violet-100 dark:from-gray-800 dark:via-gray-900 dark:to-black">
        <h2 className="text-4xl font-bold text-center mb-12" data-reveal>Testimonials</h2>

        {/* Desktop: three sticky stacked cards */}
        <div className="hidden md:flex max-w-6xl mx-auto gap-8">
          {testimonials.map((t, i) => (
            <div key={t.id} className="sticky top-36 bg-white/60 dark:bg-black/40 backdrop-blur-lg rounded-2xl p-6 shadow-xl transform hover:-translate-y-2 transition" data-reveal>
              <div className="flex items-center gap-4 mb-4">
                <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-xs opacity-70">{t.role}</div>
                </div>
              </div>
              <p className="italic">“{t.text}”</p>
              <div className="mt-4 text-right">
                <span className="text-xs opacity-60">Verified Client</span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile stacked/overlapping list for tactile scrolling */}
        <div className="md:hidden max-w-md mx-auto mt-6 stacked-mobile">
          {testimonials.map((t, idx) => (
            <div key={t.id} className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg mb-10 transform hover:scale-105 transition" data-reveal>
              <div className="flex items-center gap-3">
                <img src={t.img} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-xs opacity-70">{t.role}</div>
                </div>
              </div>
              <p className="mt-3 italic text-sm">"{t.text}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== AWARDS (animated card grid) ===== */}
      <section className="relative py-20 px-6 md:px-20">
        <h2 className="text-4xl font-bold text-center mb-12" data-reveal>Awards & Recognition</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {[
            { title: "Best Developer 2022", desc: "Recognized for product excellence."},
            { title: "UI/UX Hack Winner", desc: "Design & usability award."},
            { title: "Open Source Contributor", desc: "Top contributors list."},
          ].map((a, idx) => (
            <div key={idx} className="p-6 rounded-2xl glass-glow hover:scale-105 transition" data-reveal>
              <h4 className="font-semibold text-lg mb-1">{a.title}</h4>
              <p className="text-sm opacity-80">{a.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== FUN FACTS (animated counters feel) ===== */}
      <section className="relative py-20 px-6 md:px-20 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800 rounded-t-3xl shadow-lg">
        <h2 className="text-4xl font-bold text-center mb-12" data-reveal>Fun Facts</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6 text-center">
          {[
            { label: "Projects", value: 120 },
            { label: "Clients", value: 30 },
            { label: "Hours", value: 10000 },
            { label: "Coffee", value: 2000 },
          ].map((f, i) => (
            <div key={i} className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg" data-reveal>
              <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">{f.value}+</div>
              <div className="mt-2 text-sm opacity-70">{f.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CONTACT (floating cards & CTA) ===== */}
      <section id="contact" className="relative py-20 px-6 md:px-20">
        <div className="absolute left-6 top-6 w-44 h-44 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full opacity-30 blur-3xl"></div>
        <h2 className="text-4xl font-bold text-center mb-12" data-reveal>Contact Me</h2>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <form className="bg-white/20 dark:bg-black/30 backdrop-blur-lg p-6 rounded-2xl shadow-xl space-y-4" data-reveal>
            <input className="w-full p-3 rounded-xl border border-gray-200 dark:border-gray-700" placeholder="Your name" />
            <input className="w-full p-3 rounded-xl border border-gray-200 dark:border-gray-700" placeholder="Your email" />
            <textarea className="w-full p-3 rounded-xl border border-gray-200 dark:border-gray-700" rows="5" placeholder="Message" />
            <div className="flex gap-4">
              <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white neon-cta">Send Message</button>
              <button className="px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-700">Schedule Call</button>
            </div>
          </form>

          <div className="space-y-6" data-reveal>
            <div className="p-6 rounded-2xl bg-gradient-to-r from-pink-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 shadow-lg glass-glow">
              <h4 className="font-semibold">Why work with me?</h4>
              <ul className="mt-3 list-disc list-inside text-sm opacity-90">
                <li>Problem-first approach</li>
                <li>High-quality, maintainable code</li>
                <li>Fast iterations & dependable delivery</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-white/30 dark:bg-black/30 backdrop-blur-lg shadow-lg">
              <h4 className="font-semibold">Contact</h4>
              <p className="text-sm opacity-80 mt-2">alsadir@example.com</p>
              <p className="text-sm opacity-80">+251 9xx xxx xxx</p>
              <div className="flex gap-3 mt-4">
                <a className="px-3 py-2 rounded-lg bg-violet-600 text-white" href="#">GitHub</a>
                <a className="px-3 py-2 rounded-lg bg-pink-600 text-white" href="#">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative py-20 px-6 md:px-20 bg-gradient-to-r from-pink-50 to-orange-50 dark:from-gray-900 dark:to-gray-800">
        <h2 className="text-4xl font-bold text-center mb-12" data-reveal>Services</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { title: "Web Development", desc: "Custom web apps with clean, scalable code." },
            { title: "UI/UX Design", desc: "Human-centered designs that feel natural." },
            { title: "Consulting", desc: "Strategic tech guidance for scaling teams." },
          ].map((s, i) => (
            <div key={i} className="glass-glow p-8 rounded-2xl hover:scale-105 transition transform" data-reveal>
              <h3 className="text-2xl font-semibold mb-3">{s.title}</h3>
              <p className="opacity-80">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* === NEW TIMELINE SECTION === */}
      <section className="relative py-20 px-6 md:px-20">
        <h2 className="text-4xl font-bold text-center mb-12" data-reveal>My Journey</h2>
        <div className="max-w-3xl mx-auto border-l-2 border-purple-500 pl-8 space-y-8">
          {[
            { year: "2018", text: "Started as a self-taught developer, building side projects." },
            { year: "2020", text: "Joined TechCorp as Frontend Engineer." },
            { year: "2022", text: "Led a team of 5 engineers to deliver SaaS platform." },
            { year: "2024", text: "Freelance consultant helping startups go to market faster." },
          ].map((t, i) => (
            <div key={i} className="relative" data-reveal>
              <div className="absolute -left-10 top-1.5 w-5 h-5 rounded-full bg-purple-500"></div>
              <h4 className="text-xl font-semibold">{t.year}</h4>
              <p className="opacity-80">{t.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* === BLOG PREVIEW SECTION === */}
      <section className="relative py-20 px-6 md:px-20 bg-gradient-to-r from-violet-50 to-pink-50 dark:from-gray-800 dark:to-gray-900">
        <h2 className="text-4xl font-bold text-center mb-12" data-reveal>Latest Insights</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[1, 2, 3].map((b) => (
            <article key={b} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:-translate-y-2 transition" data-reveal>
              <img src={`https://picsum.photos/400/200?random=${b+40}`} alt="blog" className="rounded-xl mb-4" />
              <h4 className="font-semibold text-lg mb-2">Blog Post {b}</h4>
              <p className="text-sm opacity-80 mb-4">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do.</p>
              <a href="#" className="text-purple-600 dark:text-purple-400 text-sm">Read more →</a>
            </article>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      {/* === keeps your existing CONTACT section === */}

      {/* FOOTER */}
      <footer className="py-10 text-center bg-white dark:bg-gray-900 border-t dark:border-gray-700 relative">
        <p>© {new Date().getFullYear()} Alsadir Ebrahim — crafted with ❤️ using React + TailwindCSS</p>
        {/* Back to top floating button */}
        <a
          href="#top"
          className="fixed bottom-6 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg hover:scale-110 transition"
        >
          ↑
        </a>
      </footer>
    </div>
  );
};

export default Portfolio;
