"use client";

import Image from "next/image";
import Link from "next/link";
import RevealOnScroll from "./RevealOnScroll";

const tiers = [
  {
    idx: "I",
    kanji: "城",
    kicker: "Enterprise",
    name: "Full Agency",
    desc: "End-to-end MERN / Next.js builds for funded startups and established brands.",
    list: ["Architecture → launch", "Design systems & SEO", "Dedicated team"],
    price: "By engagement",
    image: "/images/tier_citadel.jpg",
  },
  {
    idx: "II",
    kanji: "刃",
    kicker: "Freelance",
    name: "Sprint",
    desc: "A focused fix, a UI/UX overhaul or a single feature — shipped fast.",
    list: ["Single features", "Rescues & tuning", "Hourly / milestone"],
    price: "Hourly · milestone",
    image: "/images/tier_blade.jpg",
  },
  {
    idx: "III",
    kanji: "種",
    kicker: "Catalyst",
    name: "Partnership",
    desc: "World-changing idea, no capital? We build your early tech for partnership, not cash.",
    list: ["MVP for equity", "No upfront cost", "Founder-first"],
    price: "Shared upside",
    feature: true,
    image: "/images/tier_seed.jpg",
  },
  {
    idx: "IV",
    kanji: "守",
    kicker: "Subscription",
    name: "Maintain",
    desc: "Keep your tech sharp — maintenance, security and iteration on a monthly retainer.",
    list: ["Monitoring & updates", "Continuous iteration", "Priority SLA"],
    price: "Monthly retainer",
    image: "/images/tier_guard.jpg",
  },
];

export default function Engage() {
  return (
    <section className="engage" id="engage">
      <div className="engage__head">
        <RevealOnScroll y={24}>
          <h2 className="engage__title">
            Ways to <span className="accent">work with us.</span>
          </h2>
        </RevealOnScroll>
        <RevealOnScroll y={26}>
          <p className="engage__lede">
            Four distinct paths — from full-agency engagements to a mission-driven
            partnership tier for founders with an idea and no capital. Pick the blade
            that fits.
          </p>
        </RevealOnScroll>
      </div>

      <div className="tier-grid">
        {tiers.map((t, i) => (
          <RevealOnScroll key={t.idx} y={40} delay={i * 0.08}>
            <Link
              href="/work-with-us"
              className={`tier-card${t.feature ? " tier-card--feature" : ""}`}
              data-cursor="link"
            >
              <div className="tier-card__cap">
                <Image
                  src={t.image}
                  alt={t.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="tier-card__cap-img"
                  style={{ objectFit: "cover" }}
                />
                <div className="tier-card__cap-veil" />
                <span className="tier-card__idx">№ {t.idx}</span>
                <span className="kanji">{t.kanji}</span>
              </div>
              <span className="tier-card__kicker">{t.kicker}</span>
              <h3 className="tier-card__name">{t.name}</h3>
              <p className="tier-card__desc">{t.desc}</p>
              <ul className="tier-card__list">
                {t.list.map((li) => (
                  <li key={li}>{li}</li>
                ))}
              </ul>
              <div className="tier-card__foot">
                <span className="tier-card__price">{t.price}</span>
                <span className="tier-card__go">Explore →</span>
              </div>
            </Link>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
