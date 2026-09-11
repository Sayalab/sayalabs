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
  category: "Featured Project · Open Source",
  client: "CAREER PILOT",
  title: "AI-powered career operating system with 120+ stars & 750+ forks",
  desc: "Full-stack career acceleration platform featuring resume optimization, real-time mock interviews, job pipeline analytics, and autonomous GitHub developer intelligence.",
  url: "https://github.com/anurag3407/career-pilot",
};

const projects = [
  {
    image: "/images/proj_1.png",
    category: "Cloud Infrastructure",
    name: "STORINARY",
    desc: "Self-hosted high-performance media storage & CDN engine engineered for low-latency delivery.",
    aspect: "tall" as const,
    url: "https://github.com/anurag3407/storinary",
  },
  {
    image: "/images/proj_3.png",
    category: "Developer Tooling",
    name: "BAD CODE POLICE",
    desc: "Autonomous AI reviewer monitoring GitHub repositories to catch vulnerabilities and bugs.",
    aspect: "wide" as const,
    url: "https://github.com/anurag3407/Code-police",
  },
  {
    image: "/images/portfolio_1.png",
    category: "Creative Tech · 3D",
    name: "3D STUDIO BUILDER",
    desc: "AI agent architecture for building immersive scroll-driven 3D web experiences.",
    aspect: "square" as const,
    url: "https://github.com/anurag3407/interactive-3d-website-skill",
  },
  {
    image: "/images/portfolio_2.png",
    category: "Venture AI",
    name: "GHOSTFOUNDER",
    desc: "All-in-one AI platform transforming startup ideas into validated MVPs and roadmaps.",
    aspect: "tall" as const,
    url: "https://github.com/anurag3407/ghosthunter",
  },
];

export default function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = sectionRef.current?.querySelectorAll<HTMLElement>(".portfolio-card");
      cards?.forEach((card) => {
        gsap.fromTo(
          card,
          { clipPath: "inset(15% 15% 15% 15%)", opacity: 0 },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            opacity: 1,
            duration: 1.6,
            ease: "expo.out",
            scrollTrigger: { trigger: card, start: "top 85%", once: true },
          }
        );
      });

      const featuredEl = sectionRef.current?.querySelector<HTMLElement>(".portfolio-featured-img");
      if (featuredEl) {
        gsap.fromTo(
          featuredEl,
          { scale: 1.3 },
          {
            scale: 1.08,
            duration: 1.8,
            ease: "expo.out",
            scrollTrigger: { trigger: featuredEl, start: "top 85%", once: true },
          }
        );
      }
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

        <div className="portfolio-divider">— Featured engagement —</div>

        <a
          className="portfolio-featured"
          href={featured.url}
          target="_blank"
          rel="noopener noreferrer"
          data-cursor="text"
          data-cursor-label="GITHUB"
        >
          <Image
            src={featured.image}
            alt={featured.client}
            fill
            sizes="100vw"
            className="portfolio-featured-img"
            style={{ objectFit: "cover" }}
          />
          <div className="portfolio-featured-overlay">
            <div className="portfolio-featured-meta">
              <span className="gold">{featured.category}</span>
              <span>{featured.client}</span>
            </div>
            <h3 className="portfolio-featured-title">{featured.title}</h3>
            <p className="portfolio-featured-desc">{featured.desc}</p>
          </div>
        </a>

        <div className="portfolio-divider">— More from the archive —</div>

        <div className="portfolio-asym">
          <div className="portfolio-asym__col">
            <a
              className={`portfolio-card portfolio-card--${projects[0].aspect}`}
              href={projects[0].url}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="text"
              data-cursor-label="GITHUB"
            >
              <Image
                src={projects[0].image}
                alt={projects[0].name}
                fill
                sizes="(max-width: 900px) 100vw, 60vw"
                style={{ objectFit: "cover" }}
              />
              <div className="portfolio-card-overlay">
                <span className="portfolio-card-category">{projects[0].category}</span>
                <h4 className="portfolio-card-title">{projects[0].name}</h4>
                <p className="portfolio-card-desc">{projects[0].desc}</p>
              </div>
            </a>
            <a
              className={`portfolio-card portfolio-card--${projects[1].aspect}`}
              href={projects[1].url}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="text"
              data-cursor-label="GITHUB"
            >
              <Image
                src={projects[1].image}
                alt={projects[1].name}
                fill
                sizes="(max-width: 900px) 100vw, 60vw"
                style={{ objectFit: "cover" }}
              />
              <div className="portfolio-card-overlay">
                <span className="portfolio-card-category">{projects[1].category}</span>
                <h4 className="portfolio-card-title">{projects[1].name}</h4>
                <p className="portfolio-card-desc">{projects[1].desc}</p>
              </div>
            </a>
          </div>
          <div className="portfolio-asym__col">
            <a
              className={`portfolio-card portfolio-card--${projects[2].aspect}`}
              href={projects[2].url}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="text"
              data-cursor-label="GITHUB"
            >
              <Image
                src={projects[2].image}
                alt={projects[2].name}
                fill
                sizes="(max-width: 900px) 100vw, 40vw"
                style={{ objectFit: "cover" }}
              />
              <div className="portfolio-card-overlay">
                <span className="portfolio-card-category">{projects[2].category}</span>
                <h4 className="portfolio-card-title">{projects[2].name}</h4>
                <p className="portfolio-card-desc">{projects[2].desc}</p>
              </div>
            </a>
            <a
              className={`portfolio-card portfolio-card--${projects[3].aspect}`}
              href={projects[3].url}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="text"
              data-cursor-label="GITHUB"
            >
              <Image
                src={projects[3].image}
                alt={projects[3].name}
                fill
                sizes="(max-width: 900px) 100vw, 40vw"
                style={{ objectFit: "cover" }}
              />
              <div className="portfolio-card-overlay">
                <span className="portfolio-card-category">{projects[3].category}</span>
                <h4 className="portfolio-card-title">{projects[3].name}</h4>
                <p className="portfolio-card-desc">{projects[3].desc}</p>
              </div>
            </a>
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
