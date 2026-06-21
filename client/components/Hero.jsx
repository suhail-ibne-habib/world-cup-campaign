'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

/* ── Icons ─────────────────────────────────────────────────── */
const PeopleIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
    strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const TargetIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
    strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
  </svg>
);

const TrophyIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
    strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M6 9H4a2 2 0 0 1-2-2V5h4" />
    <path d="M18 9h2a2 2 0 0 0 2-2V5h-4" />
    <path d="M4 5h16v5a8 8 0 0 1-16 0Z" />
    <path d="M12 17v4" /><path d="M8 21h8" />
  </svg>
);

const ChevronRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3.5}
    strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <path d="M9 18l6-6-6-6" />
  </svg>
);

/* ── Feature card ───────────────────────────────────────────── */
function FeatureCard({ icon: Icon, title, desc }) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white shadow-md"
        style={{ background: 'linear-gradient(135deg,#f97b6e,#f88379)' }}>
        <Icon />
      </div>
      <div>
        <p className="font-bold text-gray-900 text-sm leading-snug">{title}</p>
        <p className="text-gray-500 text-xs leading-snug mt-0.5 max-w-[150px]">{desc}</p>
      </div>
    </div>
  );
}

/* ── Hero ───────────────────────────────────────────────────── */
export default function Hero() {
  const STADIUM = "/references/ChatGPT Image Jun 19, 2026, 12_25_27 PM.png";
  const TROPHY  = "/references/ChatGPT Image Jun 19, 2026, 12_20_04 PM.png";

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden"
      style={{ minHeight: '100vh', background: '#ffffff' }}
    >
      {/* ══════════════════════════════════════════════════════
          LAYER 1 — Stadium background (full section)
      ══════════════════════════════════════════════════════ */}
      <div className="absolute inset-0" style={{ zIndex: 0 }}>
        <img
          src={STADIUM}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center center' }}
        />
        {/* White-to-transparent gradient: covers left half so text area stays white */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, #ffffff 0%, #ffffff 40%, rgba(255,255,255,0.75) 50%, rgba(255,255,255,0.2) 62%, transparent 75%)',
          }}
        />
        {/* Subtle top-to-transparent so top of section doesn't look harsh */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, transparent 12%)',
          }}
        />
      </div>

      {/* ══════════════════════════════════════════════════════
          LAYER 2 — Trophy (white-bg PNG, blended via multiply)
          Positioned right, overflows top so it's very large
      ══════════════════════════════════════════════════════ */}
      <div
        className="absolute"
        style={{
          /* right column: start from ~42% of width */
          right: 0,
          top: 0,
          bottom: 0,
          width: '55%',
          zIndex: 2,
          pointerEvents: 'none',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'flex-end',
        }}
      >
        <img
          src={TROPHY}
          alt="FIFA World Cup Trophy"
          className="select-none"
          style={{
            height: '92%',
            width: 'auto',
            maxWidth: '100%',
            objectFit: 'contain',
            objectPosition: 'right center',
            /* mix-blend-mode: multiply makes white background disappear into the stadium */
            mixBlendMode: 'multiply',
            filter: 'drop-shadow(-30px 0 50px rgba(0,0,0,0.15))',
          }}
        />
      </div>

      {/* ══════════════════════════════════════════════════════
          LAYER 3 — Text content (left ~50%)
      ══════════════════════════════════════════════════════ */}
      <div
        className="relative"
        style={{
          zIndex: 10,
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="max-w-7xl mx-auto w-full px-6 sm:px-10 lg:px-16">
          {/* Constrain text to left ~48% on desktop */}
          <div className="w-full lg:max-w-[48%] py-20 lg:py-0">

            {/* Logo */}
            <div className="mb-8">
              <Link href="/">
                <Image src="/logo1.png" alt="Deal 360 Logo" width={180} height={55} className="object-contain" priority />
              </Link>
            </div>

            {/* Headline */}
            <h1
              className="font-black leading-[1.0] tracking-tight mb-6"
              style={{ fontSize: 'clamp(2.6rem, 5vw, 4.6rem)' }}
            >
              <span className="block text-gray-900">Join the</span>
              <span className="block" style={{ color: '#F88379' }}>World Cup</span>
              <span className="block text-gray-900">Challenge.</span>
            </h1>

            {/* Sub-description */}
            <p
              className="text-gray-600 font-medium leading-relaxed mb-8"
              style={{ fontSize: 'clamp(0.9rem, 1.3vw, 1.1rem)', maxWidth: '400px' }}
            >
              Exclusive to Agents &amp; Brokerages.<br />
              Pick your teams, follow the tournament,<br />
              earn points and compete for amazing prizes.
            </p>

            {/* Feature grid */}
            <div className="grid grid-cols-2 gap-x-5 gap-y-5 mb-9" style={{ maxWidth: '400px' }}>
              <FeatureCard icon={PeopleIcon} title="48 Teams"       desc="All World Cup teams included." />
              <FeatureCard icon={TargetIcon} title="Follow & Track" desc="The further your team progresses, the more points you get." />
              <FeatureCard icon={TrophyIcon} title="Win Big"        desc="Top performers win up to 12 months free membership" />
            </div>

            {/* JOIN NOW arrow button */}
            <div className="flex items-center mb-10" style={{ gap: 0 }}>
              <a
                href="/join"
                id="hero-join-btn"
                className="inline-flex items-center justify-center font-black tracking-widest text-white transition-all duration-200 hover:brightness-110 active:scale-[0.97]"
                style={{
                  background: '#3ecfbe',
                  fontSize: '0.88rem',
                  padding: '1rem 2rem 1rem 1.5rem',
                  clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 50%, calc(100% - 16px) 100%, 0 100%)',
                  minWidth: '165px',
                  letterSpacing: '0.13em',
                }}
              >
                Join Now
              </a>
              <div className="flex -ml-1" style={{ color: '#3ecfbe' }}>
                <ChevronRight />
                <ChevronRight />
              </div>
            </div>

            {/* Register Now */}
            <div>
              <p className="font-extrabold text-gray-900 text-sm mb-3 tracking-wide">
                Register Now!
              </p>
              <ul className="flex flex-col gap-2.5">
                {['Priority visibility', 'Founding-only benefits', 'Early feature access'].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm font-medium text-gray-700">
                    <span
                      className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                      style={{ background: '#F88379' }}
                    >
                      <svg viewBox="0 0 14 14" className="w-3 h-3" fill="none">
                        <path d="M3 7l2.8 3L11 4" stroke="white" strokeWidth={2}
                          strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* App store badges */}
            <div className="flex flex-col gap-2.5 mt-8" style={{ maxWidth: '158px' }}>
              {[
                {
                  id: 'hero-google-play',
                  label: 'GET IT ON',
                  name: 'Google Play',
                  icon: (
                    <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0" fill="currentColor">
                      <path d="M3.18 23.76c.37.2.8.24 1.2.1l12.12-7.02-2.67-2.67-10.65 9.59zm-1.06-1.6A2 2 0 0 1 2 21V3c0-.44.13-.85.36-1.19L13.9 12 2.12 22.16zM21.68 10.7l-2.64-1.53-2.97 2.97 2.97 2.97 2.67-1.55A2 2 0 0 0 21.68 10.7zm-18.5-8.46 10.65 9.59 2.67-2.67L4.38.16c-.4-.14-.83-.1-1.2.08z" />
                    </svg>
                  ),
                },
                {
                  id: 'hero-app-store',
                  label: 'Download on the',
                  name: 'App Store',
                  icon: (
                    <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.15-2.19 1.3-2.17 3.86.03 3.05 2.64 4.06 2.67 4.07l-.05.19zM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                    </svg>
                  ),
                },
              ].map(({ id, label, name, icon }) => (
                <div className="relative" key={id}>
                  <a href="#" id={id}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl bg-black text-white hover:opacity-80 transition-opacity">
                    {icon}
                    <div>
                      <div className="text-[9px] text-gray-400 leading-none">{label}</div>
                      <div className="text-xs font-bold leading-tight">{name}</div>
                    </div>
                  </a>
                  <span
                    className="absolute -top-1.5 -right-1.5 text-[9px] font-black text-white px-1.5 py-0.5 rounded-md shadow"
                    style={{ background: '#3ecfbe', transform: 'rotate(6deg)' }}
                  >
                    SOON
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>



    </section>
  );
}
