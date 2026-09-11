"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LenisProvider from "../components/LenisProvider";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CustomCursor from "../components/CustomCursor";
import ScrollProgress from "../components/ScrollProgress";
import SplitText from "../components/SplitText";
import RevealOnScroll from "../components/RevealOnScroll";
import MagneticButton from "../components/MagneticButton";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type Project = {
  image: string;
  cat: string;
  year: string;
  name: string;
  desc: string;
  span: "wide" | "half" | "third";
  url?: string;
  stats?: string;
};

const projects: Project[] = [
  {
    image: "/images/proj_2.png",
    cat: "Full-Stack AI Platform · Career OS",
    year: "2026",
    name: "CAREER PILOT",
    desc: "An open-source AI-powered career OS — resume optimization, real-time mock interviews, job tracking, and GitHub developer intelligence.",
    span: "wide",
    url: "https://github.com/anurag3407/career-pilot",
    stats: "★ 129 · 750+ Forks",
  },
  {
    image: "/images/proj_1.png",
    cat: "Cloud Infrastructure · Media CDN",
    year: "2026",
    name: "STORINARY",
    desc: "High-performance, self-hosted media storage & CDN engine engineered for low-latency image delivery, on-the-fly transformations, and enterprise asset caching.",
    span: "half",
    url: "https://github.com/anurag3407/storinary",
  },
  {
    image: "/images/proj_3.png",
    cat: "Developer Tooling · AI Agent",
    year: "2026",
    name: "BAD CODE POLICE",
    desc: "Autonomous GitHub code review agent that continuously monitors repositories via webhooks to detect security flaws, performance degradation, and style regressions.",
    span: "half",
    url: "https://github.com/anurag3407/Code-police",
  },
  {
    image: "/images/portfolio_1.png",
    cat: "Creative Tech · WebGL / R3F",
    year: "2026",
    name: "3D STUDIO BUILDER",
    desc: "An AI agent skill architecture for generating production-ready scroll-driven 3D web experiences using Next.js, React Three Fiber, and GSAP ScrollTrigger.",
    span: "third",
    url: "https://github.com/anurag3407/interactive-3d-website-skill",
  },
  {
    image: "/images/portfolio_2.png",
    cat: "Venture AI · Startup Accelerator",
    year: "2026",
    name: "GHOSTFOUNDER",
    desc: "All-in-one AI platform for startup teams — transforming rough concepts into validated MVPs, automated investor pitch decks, and actionable product roadmaps.",
    span: "third",
    url: "https://github.com/anurag3407/ghosthunter",
  },
  {
    image: "/images/portfolio_3.png",
    cat: "Design System · UI Library",
    year: "2026",
    name: "VENGEANCE UI",
    desc: "Curated collection of high-performance animated React & Tailwind components designed to make modern landing pages subtle, tasteful, and memorable.",
    span: "third",
    url: "https://github.com/anurag3407/VengenceUI",
  },
  {
    image: "/images/proj_4.png",
    cat: "Systems Engineering · Rust",
    year: "2026",
    name: "CLAURST",
    desc: "Blazing-fast agentic coding platform built in Rust for builders who ship — zero-overhead execution, memory safety, and autonomous task orchestration.",
    span: "half",
    url: "https://github.com/anurag3407/claurst",
  },
  {
    image: "/images/about_bg.png",
    cat: "Civic Tech · Decentralized",
    year: "2025",
    name: "JUSTICE TRACK",
    desc: "Modern legal navigation platform addressing judicial backlog and case transparency through accessible digital interfaces and decentralized audit trails.",
    span: "half",
    url: "https://github.com/anurag3407/Justice",
  },
];

export default function ProjectsPage() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gridRef.current
        ?.querySelectorAll<HTMLElement>(".project-card")
        .forEach((card) => {
          gsap.fromTo(
            card,
            { clipPath: "inset(12% 12% 12% 12%)", opacity: 0, y: 30 },
            {
              clipPath: "inset(0% 0% 0% 0%)",
              opacity: 1,
              y: 0,
              duration: 1.4,
              ease: "expo.out",
              scrollTrigger: { trigger: card, start: "top 88%", once: true },
            }
          );
        });
    }, gridRef);
    return () => ctx.revert();
  }, []);

  return (
    <LenisProvider>
      <CustomCursor />
      <ScrollProgress />
      <Navbar />

      <main className="projects-page">
        <section className="projects-hero mesh-gradient mesh-gradient--crimson mesh-gradient--animated">
          <span
            className="bg-dot-grid bg-field-mask"
            style={{ position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none", opacity: 0.5 }}
          />
          <div className="projects-hero__inner">
            <SplitText as="div" className="projects-hero__eyebrow" split="words" stagger={0.05} duration={1} triggerOnScroll={false} delay={0.15}>
              Selected Work · 2025 — 2026
            </SplitText>
            <h1 className="projects-hero__title">
              <SplitText as="span" split="chars" stagger={0.04} duration={1.1} triggerOnScroll={false} delay={0.3}>
                The
              </SplitText>{" "}
              <span className="accent">
                <SplitText as="span" split="chars" stagger={0.04} duration={1.1} triggerOnScroll={false} delay={0.42}>
                  archive.
                </SplitText>
              </span>
            </h1>
            <SplitText as="p" className="projects-hero__lede" split="words" stagger={0.02} duration={0.9} triggerOnScroll={false} delay={0.75}>
              A deliberately small roster — case studies in restraint, motion and brands that earned a second look. Every one a blade with a signature.
            </SplitText>
          </div>
        </section>

        <div ref={gridRef} className="projects-grid">
          {projects.map((p, i) => (
            <a
              key={p.name}
              href={p.url || "/#contact"}
              target={p.url ? "_blank" : undefined}
              rel={p.url ? "noopener noreferrer" : undefined}
              className={`project-card project-card--${p.span}`}
              data-cursor="text"
              data-cursor-label={p.url ? "GITHUB" : "VIEW"}
            >
              <Image
                src={p.image}
                alt={p.name}
                fill
                sizes={p.span === "wide" ? "100vw" : p.span === "half" ? "(max-width: 900px) 100vw, 50vw" : "(max-width: 900px) 100vw, 33vw"}
                className="project-card__img"
                style={{ objectFit: "cover" }}
              />
              <div className="project-card__overlay">
                <div className="project-card__top">
                  <span className="project-card__cat">{p.cat}</span>
                  <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                    {p.stats && (
                      <span style={{ fontFamily: "var(--font-heading)", fontSize: "0.82rem", color: "var(--gold)", letterSpacing: "1px" }}>
                        {p.stats}
                      </span>
                    )}
                    <span className="project-card__idx">№ {String(i + 1).padStart(2, "0")}</span>
                  </div>
                </div>
                <div className="project-card__bottom">
                  <span className="project-card__year">{p.year}</span>
                  <h3 className="project-card__name">{p.name}</h3>
                  <p className="project-card__desc">{p.desc}</p>
                </div>
              </div>
            </a>
          ))}
        </div>

        <section className="projects-cta">
          <RevealOnScroll y={24}>
            <h2 className="projects-cta__title">
              Your project, <span className="accent">next in the archive.</span>
            </h2>
          </RevealOnScroll>
          <RevealOnScroll y={18} delay={0.1}>
            <MagneticButton href="/#contact" className="btn-primary">
              Start a Project
            </MagneticButton>
          </RevealOnScroll>
        </section>
      </main>

      <Footer />
    </LenisProvider>
  );
}
