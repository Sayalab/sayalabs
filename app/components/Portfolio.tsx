"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "./SplitText";
import RevealOnScroll from "./RevealOnScroll";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const featured = {
  image: "/images/proj_2.png",
  badge: "Featured Flagship",
  category: "Full-Stack AI Platform · Career OS",
  title: "CAREER PILOT",
  tagline: "Autonomous Career Intelligence & Real-Time Interview Engine",
  desc: "An open-source AI career ecosystem featuring algorithmic resume tailoring, real-time mock interviews, job pipeline analytics, and autonomous GitHub developer intelligence.",
  stats: "★ 129 Stars · 750+ Community Forks",
  url: "https://github.com/anurag3407/career-pilot",
};

const projects = [
  {
    idx: "01",
    image: "/images/proj_1.png",
    category: "Cloud Infrastructure",
    name: "STORINARY",
    desc: "Self-hosted high-performance media storage & CDN engine engineered for low-latency image delivery and on-the-fly transformations.",
    aspect: "tall" as const,
    url: "https://github.com/anurag3407/storinary",
  },
  {
    idx: "02",
    image: "/images/proj_3.png",
    category: "Developer Tooling · AI Agent",
    name: "BAD CODE POLICE",
    desc: "Autonomous GitHub code review agent monitoring webhooks in real time to catch security flaws and performance regressions.",
    aspect: "wide" as const,
    url: "https://github.com/anurag3407/Code-police",
  },
  {
    idx: "03",
    image: "/images/portfolio_1.png",
    category: "Creative Tech · WebGL / R3F",
    name: "3D STUDIO BUILDER",
    desc: "AI agent architecture for crafting production-ready scroll-driven 3D web experiences with Next.js, R3F, and GSAP.",
    aspect: "square" as const,
    url: "https://github.com/anurag3407/interactive-3d-website-skill",
  },
  {
    idx: "04",
    image: "/images/portfolio_2.png",
    category: "Venture AI · Startup Accelerator",
    name: "GHOSTFOUNDER",
    desc: "All-in-one AI platform transforming rough concepts into validated MVPs, automated investor decks, and product roadmaps.",
    aspect: "tall" as const,
    url: "https://github.com/anurag3407/ghosthunter",
  },
];

export default function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = sectionRef.current?.querySelectorAll<HTMLElement>(
        ".portfolio-card, .portfolio-featured"
      );
      cards?.forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: { trigger: card, start: "top 88%", once: true },
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section portfolio-section" id="work">
      <div className="container">
        <div className="section-header">
          <RevealOnScroll>
            <div className="eyebrow">Selected Work — 2025 / 2026</div>
          </RevealOnScroll>
          <SplitText as="h2" className="section-title" split="chars" stagger={0.025}>
            PORTFOLIO
          </SplitText>
          <RevealOnScroll y={30} delay={0.2}>
            <p className="section-description">
              A deliberately small roster of work — case studies in restraint,
              motion, and brands that earned a second look. Each one a chapter
              in a shared notebook.
            </p>
          </RevealOnScroll>
        </div>

        {/* Featured Project */}
        <div className="portfolio-featured-wrap">
          <a
            className="portfolio-featured"
            href={featured.url}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="text"
            data-cursor-label="GITHUB"
          >
            <div className="portfolio-featured__media">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="portfolio-featured__img"
                style={{ objectFit: "cover" }}
              />
              <div className="portfolio-featured__veil" />
            </div>

            <div className="portfolio-featured__overlay">
              <div className="portfolio-featured__top">
                <div className="portfolio-featured__meta">
                  <span className="portfolio-featured__badge">{featured.badge}</span>
                  <span className="portfolio-featured__sep">/</span>
                  <span className="portfolio-featured__cat">{featured.category}</span>
                </div>
                <span className="portfolio-featured__stats">{featured.stats}</span>
              </div>

              <div className="portfolio-featured__bottom">
                <h3 className="portfolio-featured__title">{featured.title}</h3>
                <div className="portfolio-featured__tagline">{featured.tagline}</div>
                <p className="portfolio-featured__desc">{featured.desc}</p>
                <div className="portfolio-featured__cta">
                  <span>Explore on GitHub</span>
                  <span className="portfolio-featured__arrow">→</span>
                </div>
              </div>
            </div>
          </a>
        </div>

        {/* Archive Divider */}
        <div className="portfolio-divider">
          <span>More From The Archive</span>
        </div>

        {/* Asymmetric Project Grid */}
        <div className="portfolio-asym">
          <div className="portfolio-asym__col">
            {projects.slice(0, 2).map((p) => (
              <a
                key={p.name}
                className={`portfolio-card portfolio-card--${p.aspect}`}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="text"
                data-cursor-label="GITHUB"
              >
                <div className="portfolio-card__media">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="(max-width: 900px) 100vw, 60vw"
                    className="portfolio-card__img"
                    style={{ objectFit: "cover" }}
                  />
                  <div className="portfolio-card__veil" />
                </div>
                <div className="portfolio-card__overlay">
                  <div className="portfolio-card__top">
                    <span className="portfolio-card__cat">{p.category}</span>
                    <span className="portfolio-card__idx">{p.idx}</span>
                  </div>
                  <div className="portfolio-card__bottom">
                    <h4 className="portfolio-card__title">{p.name}</h4>
                    <p className="portfolio-card__desc">{p.desc}</p>
                    <span className="portfolio-card__cta">Explore ↗</span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="portfolio-asym__col">
            {projects.slice(2, 4).map((p) => (
              <a
                key={p.name}
                className={`portfolio-card portfolio-card--${p.aspect}`}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="text"
                data-cursor-label="GITHUB"
              >
                <div className="portfolio-card__media">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="(max-width: 900px) 100vw, 40vw"
                    className="portfolio-card__img"
                    style={{ objectFit: "cover" }}
                  />
                  <div className="portfolio-card__veil" />
                </div>
                <div className="portfolio-card__overlay">
                  <div className="portfolio-card__top">
                    <span className="portfolio-card__cat">{p.category}</span>
                    <span className="portfolio-card__idx">{p.idx}</span>
                  </div>
                  <div className="portfolio-card__bottom">
                    <h4 className="portfolio-card__title">{p.name}</h4>
                    <p className="portfolio-card__desc">{p.desc}</p>
                    <span className="portfolio-card__cta">Explore ↗</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: "64px" }}>
          <RevealOnScroll y={20}>
            <Link href="/projects" className="btn-secondary" data-cursor="link">
              View Complete Archive (8 Projects) →
            </Link>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
