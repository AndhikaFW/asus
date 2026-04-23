"use client";

import { useState, useEffect } from "react";

const LAYERS = 12;
const LAYER_STEP = 6;

function LayeredCard({
  children,
  edgeColor,
  rotation,
  width,
  height,
  radius = "1.2rem",
}: {
  children: React.ReactNode;
  edgeColor: string;
  rotation: string;
  width: string;
  height?: string;
  radius?: string;
}) {
  const [tilt, setTilt] = useState(rotation);
  const handlers = {
    onMouseEnter: () => setTilt("rotateX(0deg) rotateY(0deg)"),
    onMouseLeave: () => setTilt(rotation),
  };

  if (height) {
    return (
      <div className="card-wrap" style={{ width, height }}>
        <div
          className="card-body"
          style={{ transform: tilt, borderRadius: radius }}
          {...handlers}
        >
          <div className="card-layers">
            {Array.from({ length: LAYERS }).map((_, i) => (
              <div
                key={i}
                className="card-layer"
                style={
                  {
                    "--tz": `${-i * LAYER_STEP}px`,
                    background: edgeColor,
                    borderRadius: radius,
                  } as React.CSSProperties
                }
              >
                {i === 0 && (
                  <div
                    className="card-face"
                    style={{ borderRadius: `calc(${radius} - 0.12em)` }}
                  >
                    {children}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="card-wrap" style={{ width }}>
      <div
        className="card-body"
        style={{ transform: tilt, borderRadius: radius, height: "auto" }}
        {...handlers}
      >
        <div
          style={{
            position: "relative",
            borderRadius: radius,
            background: edgeColor,
            boxShadow: "0 0 0.6em rgba(0,0,0,0.85) inset",
          }}
        >
          <div
            style={{
              margin: "0.12em",
              borderRadius: `calc(${radius} - 0.12em)`,
              background: "#060608",
              overflow: "hidden",
            }}
          >
            {children}
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            inset: 0,
            transformStyle: "preserve-3d",
            zIndex: -1,
            pointerEvents: "none",
          }}
        >
          {Array.from({ length: LAYERS - 1 }).map((_, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: radius,
                background: edgeColor,
                transform: `translateZ(${-(i + 1) * LAYER_STEP}px)`,
                boxShadow:
                  i === LAYERS - 2
                    ? "0 0 0.6em rgba(0,0,0,0.85) inset, 0 0 10px rgba(0,0,0,0.7)"
                    : "0 0 0.6em rgba(0,0,0,0.85) inset",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function AsusLogo({ color = "#00AEEF" }: { color?: string }) {
  return (
    <svg width="110" height="30" viewBox="0 0 110 30" fill="none">
      <text
        x="0"
        y="25"
        fontFamily="Inter,Arial"
        fontWeight="900"
        fontSize="28"
        fill={color}
        letterSpacing="3"
      >
        ASUS
      </text>
    </svg>
  );
}

function RogEmblem() {
  return (
    <div className="flex items-center gap-2">
      <div className="relative w-9 h-9">
        <div className="absolute inset-0 bg-red-600 rotate-45 rounded-sm" />
        <div className="absolute inset-1 bg-black rotate-45 rounded-sm flex items-center justify-center">
          <span
            className="text-red-500 font-black text-xs"
            style={{ transform: "rotate(-45deg)" }}
          >
            R
          </span>
        </div>
      </div>
      <span className="text-red-500 font-black text-xl tracking-widest">
        ROG
      </span>
    </div>
  );
}

function LaptopSVG({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 420 290" fill="none" className="w-full h-full">
      <rect
        x="30"
        y="10"
        width="360"
        height="220"
        rx="14"
        fill="#0D0D1A"
        stroke={color}
        strokeWidth="1.8"
      />
      <rect x="44" y="24" width="332" height="192" rx="8" fill="#08081A" />
      <rect x="56" y="36" width="308" height="168" rx="5" fill="url(#scr)" />
      <rect
        x="72"
        y="52"
        width="90"
        height="9"
        rx="4"
        fill={color}
        opacity="0.9"
      />
      <rect
        x="72"
        y="68"
        width="130"
        height="6"
        rx="3"
        fill="white"
        opacity="0.25"
      />
      <rect
        x="72"
        y="80"
        width="108"
        height="6"
        rx="3"
        fill="white"
        opacity="0.15"
      />
      <rect
        x="72"
        y="110"
        width="20"
        height="68"
        rx="3"
        fill={color}
        opacity="0.55"
      />
      <rect
        x="100"
        y="128"
        width="20"
        height="50"
        rx="3"
        fill={color}
        opacity="0.75"
      />
      <rect
        x="128"
        y="116"
        width="20"
        height="62"
        rx="3"
        fill={color}
        opacity="0.5"
      />
      <rect
        x="156"
        y="102"
        width="20"
        height="76"
        rx="3"
        fill={color}
        opacity="0.9"
      />
      <rect
        x="184"
        y="120"
        width="20"
        height="58"
        rx="3"
        fill={color}
        opacity="0.65"
      />
      <polyline
        points="230,162 252,138 274,150 296,118 318,134 340,108"
        stroke={color}
        strokeWidth="2.2"
        fill="none"
        opacity="0.95"
      />
      <circle cx="230" cy="162" r="3.5" fill={color} />
      <circle cx="296" cy="118" r="3.5" fill={color} />
      <circle cx="340" cy="108" r="3.5" fill={color} />
      <circle cx="210" cy="28" r="3.5" fill="#252525" />
      <circle cx="210" cy="28" r="1.8" fill={color} opacity="0.4" />
      <path
        d="M10 230 L410 230 L430 262 L-10 262 Z"
        fill="#141414"
        stroke={color}
        strokeWidth="1"
        opacity="0.85"
      />
      <rect
        x="155"
        y="230"
        width="110"
        height="10"
        rx="5"
        fill="#0D0D0D"
        stroke={color}
        strokeWidth="1"
        opacity="0.5"
      />
      {[60, 76, 92, 108, 124, 288, 304, 320, 336, 352].map((x, i) => (
        <rect
          key={i}
          x={x}
          y={240}
          width="9"
          height="5"
          rx="1"
          fill="#2a2a2a"
          opacity="0.7"
        />
      ))}
      <defs>
        <linearGradient id="scr" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0C0C28" />
          <stop offset="100%" stopColor="#090920" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function PhoneSVG({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 180 310" fill="none" className="w-full h-full">
      <rect
        x="8"
        y="4"
        width="164"
        height="302"
        rx="26"
        fill="#0D0D1A"
        stroke={color}
        strokeWidth="2"
      />
      <rect x="16" y="14" width="148" height="282" rx="20" fill="#08081A" />
      <rect x="24" y="24" width="132" height="262" rx="15" fill="url(#ph)" />
      <rect x="60" y="14" width="60" height="14" rx="7" fill="#08081A" />
      <circle cx="90" cy="21" r="3.5" fill="#1a1a2e" />
      <rect
        x="32"
        y="44"
        width="116"
        height="7"
        rx="3.5"
        fill={color}
        opacity="0.9"
      />
      <rect
        x="32"
        y="58"
        width="80"
        height="4.5"
        rx="2"
        fill="white"
        opacity="0.25"
      />
      <rect
        x="32"
        y="82"
        width="34"
        height="34"
        rx="10"
        fill={color}
        opacity="0.65"
      />
      <rect
        x="74"
        y="82"
        width="34"
        height="34"
        rx="10"
        fill="#8B5CF6"
        opacity="0.65"
      />
      <rect
        x="116"
        y="82"
        width="34"
        height="34"
        rx="10"
        fill="#10B981"
        opacity="0.65"
      />
      <rect
        x="32"
        y="124"
        width="34"
        height="34"
        rx="10"
        fill="#F59E0B"
        opacity="0.65"
      />
      <rect
        x="74"
        y="124"
        width="34"
        height="34"
        rx="10"
        fill="#EF4444"
        opacity="0.65"
      />
      <rect
        x="116"
        y="124"
        width="34"
        height="34"
        rx="10"
        fill={color}
        opacity="0.35"
      />
      <rect
        x="58"
        y="270"
        width="64"
        height="4.5"
        rx="2.2"
        fill="white"
        opacity="0.25"
      />
      <defs>
        <linearGradient id="ph" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0C0C28" />
          <stop offset="100%" stopColor="#0A1020" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function GpuSVG({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 380 210" fill="none" className="w-full h-full">
      <rect
        x="8"
        y="34"
        width="364"
        height="130"
        rx="10"
        fill="#0A1A0A"
        stroke={color}
        strokeWidth="1.8"
      />
      <rect
        x="8"
        y="34"
        width="364"
        height="7"
        rx="5"
        fill={color}
        opacity="0.7"
      />
      <rect
        x="42"
        y="50"
        width="110"
        height="100"
        rx="7"
        fill="#101820"
        stroke={color}
        strokeWidth="1"
      />
      <rect x="52" y="60" width="90" height="80" rx="4" fill="#0A1010" />
      <text
        x="66"
        y="106"
        fill={color}
        fontSize="15"
        fontFamily="monospace"
        fontWeight="bold"
      >
        GPU
      </text>
      <circle
        cx="232"
        cy="108"
        r="40"
        fill="#0D1A0D"
        stroke={color}
        strokeWidth="1.8"
      />
      <circle
        cx="232"
        cy="108"
        r="14"
        fill="#141414"
        stroke={color}
        strokeWidth="1"
      />
      {[0, 51, 102, 153, 204, 255, 306].map((a) => (
        <path
          key={a}
          d={`M232 108 L${(232 + 32 * Math.cos((a * Math.PI) / 180)).toFixed(1)} ${(108 + 32 * Math.sin((a * Math.PI) / 180)).toFixed(1)}`}
          stroke={color}
          strokeWidth="3.5"
          opacity="0.55"
          strokeLinecap="round"
        />
      ))}
      <circle
        cx="310"
        cy="108"
        r="30"
        fill="#0D1A0D"
        stroke={color}
        strokeWidth="1.8"
      />
      <circle
        cx="310"
        cy="108"
        r="11"
        fill="#141414"
        stroke={color}
        strokeWidth="1"
      />
      {[0, 51, 102, 153, 204, 255, 306].map((a) => (
        <path
          key={a}
          d={`M310 108 L${(310 + 24 * Math.cos((a * Math.PI) / 180)).toFixed(1)} ${(108 + 24 * Math.sin((a * Math.PI) / 180)).toFixed(1)}`}
          stroke={color}
          strokeWidth="2.8"
          opacity="0.55"
          strokeLinecap="round"
        />
      ))}
      {Array.from({ length: 20 }).map((_, i) => (
        <rect
          key={i}
          x={14 + i * 6}
          y={156}
          width="4"
          height="8"
          rx="0.5"
          fill={color}
          opacity="0.6"
        />
      ))}
    </svg>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = [
    { label: "ROG Gaming", href: "https://rog.asus.com/" },
    { label: "Business", href: "https://www.asus.com/business/" },
    { label: "Support", href: "https://www.asus.com/support/" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "navbar-scrolled" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="https://www.asus.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AsusLogo />
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link text-sm text-gray-700 hover:text-gray-900 font-medium tracking-wide"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://www.asus.com/search/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-gray-500 hover:text-gray-900 transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </a>
          <a
            href="https://www.asus.com/#/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded bg-blue-500 hover:bg-blue-400 text-white text-sm font-semibold transition-all duration-200"
          >
            Buy Now
          </a>
        </div>
        <button
          className="md:hidden p-2 text-gray-600"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 px-6">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block py-3 text-gray-700 hover:text-gray-900 border-b border-gray-100 text-sm font-medium"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

function StatCard({
  value,
  suffix,
  label,
}: {
  value: string;
  suffix?: string;
  label: string;
}) {
  return (
    <div className="text-center p-8">
      <div className="text-5xl font-black grad-blue mb-2">
        {value}
        <span className="text-3xl">{suffix}</span>
      </div>
      <div className="text-gray-600 text-sm font-medium">{label}</div>
    </div>
  );
}

function FeatureIcon({ d }: { d: string }) {
  return (
    <svg
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d={d}
      />
    </svg>
  );
}

export default function Home() {
  const products = [
    {
      name: "Zenbook DUO 14",
      cat: "Dual-Screen Ultrabook",
      price: "Rp 28.000.000",
      badge: "NEW",
      edge: "#003366",
      accent: "#00AEEF",
      rot: "rotateX(-10deg) rotateY(22deg)",
      url: "https://www.asus.com/laptops/for-home/zenbook/asus-zenbook-duo-ux8407/",
    },
    {
      name: "ROG Flow Z13-KJP",
      cat: "Gaming Tablet PC",
      price: "Rp 59.999.000",
      badge: "HOT",
      edge: "#330000",
      accent: "#FF0000",
      rot: "rotateX(10deg) rotateY(-20deg)",
      url: "https://rog.asus.com/laptops/rog-flow/rog-flow-z13-kjp/",
    },
    {
      name: "ProArt PX13 GoPro Edition",
      cat: "Creator Workstation",
      price: "Rp 55.999.000",
      badge: "",
      edge: "#1a0033",
      accent: "#8B5CF6",
      rot: "rotateX(-8deg) rotateY(-18deg)",
      url: "https://www.asus.com/laptops/for-creators/proart/proart-gopro-edition-px13-hn7306/",
    },
  ];

  const socials = [
    {
      label: "Facebook",
      href: "https://www.facebook.com/asus/",
      d: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z",
    },
    {
      label: "Twitter",
      href: "https://twitter.com/ASUS/",
      d: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/asus/",
      d: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M6.5 6.5h11a1 1 0 011 1v11a1 1 0 01-1 1h-11a1 1 0 01-1-1v-11a1 1 0 011-1z",
    },
    {
      label: "YouTube",
      href: "https://www.youtube.com/user/asus/",
      d: "M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z",
    },
  ];

  const bottomLinks = [
    {
      label: "Privacy Policy",
      href: "https://www.asus.com/terms_of_use_notice_privacy_policy/privacy_policy/",
    },
    {
      label: "Terms of Use",
      href: "https://www.asus.com/terms_of_use_notice_privacy_policy/official-site/",
    },
  ];

  return (
    <>
      <Navbar />

      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/20 to-black/60" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-10"
          style={{
            background: "radial-gradient(circle, #00AEEF, transparent)",
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full blur-3xl opacity-8"
          style={{
            background: "radial-gradient(circle, #0066CC, transparent)",
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 grid lg:grid-cols-2 gap-12 items-center w-full">
          <div className="anim-l">
            <h1 className="text-6xl lg:text-7xl font-black leading-tight mb-6">
              <span className="text-white">In Search of</span>
              <br />
              <span className="grad-blue">Incredible</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-lg">
              Experience the future of computing. ASUS crafts products that push
              boundaries, combining cutting-edge technology with award-winning
              design.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#products"
                className="px-8 py-4 rounded bg-blue-500 hover:bg-blue-400 text-white font-bold text-base transition-all duration-200"
              >
                Shop Now
              </a>
              <a
                href="#about"
                className="px-8 py-4 rounded border border-white/15 text-white font-bold text-base transition-all duration-200 hover:bg-white/5"
              >
                Learn More
              </a>
            </div>
          </div>

          <div className="anim-r flex flex-col items-center gap-10">
            <div className="relative">
              <LayeredCard
                edgeColor="#003580"
                rotation="rotateX(-12deg) rotateY(28deg)"
                width="400px"
                height="280px"
                radius="0.5rem"
              >
                <div
                  className="w-full h-full p-5 flex flex-col justify-between"
                  style={{
                    background:
                      "linear-gradient(135deg, #07071A 0%, #0A0A20 100%)",
                  }}
                >
                  <div className="flex items-center justify-between">
                    <AsusLogo color="#00AEEF" />
                    <span className="text-xs text-blue-400 font-semibold tracking-widest">
                      ZENBOOK DUO 14{" "}
                    </span>
                  </div>
                  <div className="flex-1 flex items-center justify-center pt-2">
                    <LaptopSVG color="#00AEEF" />
                  </div>
                </div>
              </LayeredCard>
              <div className="absolute -bottom-6 -right-6 anim-float">
                <LayeredCard
                  edgeColor="#002244"
                  rotation="rotateX(8deg) rotateY(-18deg)"
                  width="180px"
                  height="100px"
                  radius="0.35rem"
                >
                  <div
                    className="w-full h-full p-3 flex flex-col justify-center"
                    style={{
                      background:
                        "linear-gradient(135deg, #07071A 0%, #0A0A20 100%)",
                    }}
                  >
                    <div className="text-xs text-blue-400 font-semibold mb-1 tracking-wide">
                      Intel Core Ultra X9
                    </div>
                    <div className="text-white font-black text-lg">
                      Series 3
                    </div>
                    <div className="text-gray-500 text-xs">
                      Dual-Screen AI PC
                    </div>
                  </div>
                </LayeredCard>
              </div>
              <div className="absolute -top-6 -left-6 anim-float-slow">
                <LayeredCard
                  edgeColor="#002244"
                  rotation="rotateX(-8deg) rotateY(18deg)"
                  width="160px"
                  height="90px"
                  radius="0.35rem"
                >
                  <div
                    className="w-full h-full p-3 flex flex-col justify-center"
                    style={{
                      background:
                        "linear-gradient(135deg, #07071A 0%, #0A0A20 100%)",
                    }}
                  >
                    <div className="text-xs text-blue-400 font-semibold mb-1">
                      Dual OLED
                    </div>
                    <div className="text-white font-black text-lg">
                      3K 144Hz
                    </div>
                    <div className="text-gray-500 text-xs">Twin displays</div>
                  </div>
                </LayeredCard>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-gray-100">
            <StatCard value="150" suffix="+" label="Countries Served" />
            <StatCard value="#1" label="Gaming Laptop Brand" />
            <StatCard value="4500" suffix="+" label="Product Awards" />
            <StatCard value="35" suffix="+" label="Years of Innovation" />
          </div>
        </div>
      </section>

      <section id="products" className="py-24 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="text-xs text-blue-500 font-semibold tracking-widest uppercase mb-3">
              Our Lineup
            </div>
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              Engineered for <span className="grad-blue">Excellence</span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              From ultra-thin productivity powerhouses to extreme gaming rigs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 items-start justify-items-center">
            {products.map((p) => (
              <div key={p.name}>
                <LayeredCard
                  edgeColor={p.edge}
                  rotation={p.rot}
                  width="320px"
                  height="410px"
                  radius="0.5rem"
                >
                  <div
                    className="w-full h-full flex flex-col p-5"
                    style={{
                      background: `linear-gradient(160deg, #0A0A0A 0%, ${p.edge}55 100%)`,
                    }}
                  >
                    {p.badge && (
                      <span
                        className="self-end px-3 py-1 rounded-full text-xs font-bold mb-3"
                        style={{
                          background: p.accent,
                          color: p.accent === "#FF0000" ? "white" : "#000",
                        }}
                      >
                        {p.badge}
                      </span>
                    )}
                    <div
                      className="text-xs font-semibold tracking-widest uppercase mb-1"
                      style={{ color: p.accent }}
                    >
                      {p.cat}
                    </div>
                    <h3 className="text-base font-bold text-white mb-3 leading-snug">
                      {p.name}
                    </h3>
                    <div className="flex-1 flex items-center">
                      <LaptopSVG color={p.accent} />
                    </div>
                    <div
                      className="flex items-center justify-between pt-3 border-t"
                      style={{ borderColor: `${p.accent}25` }}
                    >
                      <div>
                        <div className="text-xs text-gray-500 mb-0.5">
                          Starting from
                        </div>
                        <div className="text-xl font-black text-white">
                          {p.price}
                        </div>
                      </div>
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded text-sm font-semibold transition-all duration-200 hover:opacity-80"
                        style={{
                          background: `${p.accent}20`,
                          border: `1px solid ${p.accent}40`,
                          color: p.accent,
                        }}
                      >
                        Explore
                      </a>
                    </div>
                  </div>
                </LayeredCard>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <a
              href="https://www.asus.com/#/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 rounded border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-semibold transition-all duration-200"
            >
              View All Products
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/12 to-black" />
        <div className="absolute inset-0 hex-bg opacity-30" />
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent" />
        <div
          className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl opacity-8"
          style={{
            background: "radial-gradient(circle, #FF0000, transparent)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mb-6">
                <RogEmblem />
              </div>
              <h2 className="text-5xl font-black mb-4 leading-tight">
                <span className="grad-red">Republic</span>
                <br />
                <span className="text-white">of Gamers</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Born from obsession. Built for domination. ROG delivers extreme
                performance with RGB lighting, advanced cooling, and AI-powered
                optimization.
              </p>
              <a
                href="https://rog.asus.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded font-bold text-white transition-all duration-200 anim-glow-red"
                style={{
                  background: "linear-gradient(135deg, #CC0000, #FF0000)",
                }}
              >
                Enter the Republic
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>

            <div className="flex flex-col gap-10 w-full px-8 lg:px-0">
              <LayeredCard
                edgeColor="#FF2200"
                rotation="rotateX(0deg) rotateY(-30deg)"
                width="100%"
                height="300px"
                radius="0.4rem"
              >
                <div
                  className="w-full h-full p-6 flex flex-col justify-between"
                  style={{
                    background:
                      "linear-gradient(135deg, #0D0000 0%, #200000 100%)",
                  }}
                >
                  <div className="flex items-center justify-between">
                    <RogEmblem />
                    <span className="text-xs text-red-400 font-semibold tracking-widest">
                      RTX 5090
                    </span>
                  </div>
                  <GpuSVG color="#FF0000" />
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <div className="text-white font-bold text-sm">
                          ROG Strix RTX 5090
                        </div>
                        <div className="text-red-400 text-xs font-semibold">
                          Graphics Card
                        </div>
                      </div>
                      <div className="text-2xl font-black text-red-500">OC</div>
                    </div>
                    <div className="flex gap-4 border-t border-red-900/40 pt-2">
                      {[
                        ["32GB", "GDDR7"],
                        ["2407MHz", "Boost Clock"],
                        ["575W", "TBP"],
                      ].map(([v, l]) => (
                        <div key={l} className="text-center flex-1">
                          <div className="text-red-400 font-black text-xs">
                            {v}
                          </div>
                          <div className="text-gray-600 text-xs">{l}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </LayeredCard>

              <div className="grid grid-cols-2 gap-6">
                <LayeredCard
                  edgeColor="#AA0000"
                  rotation="rotateX(12deg) rotateY(24deg)"
                  width="100%"
                  height="160px"
                  radius="0.35rem"
                >
                  <div
                    className="w-full h-full p-4 flex flex-col justify-between"
                    style={{
                      background:
                        "linear-gradient(135deg, #0D0000 0%, #1A0000 100%)",
                    }}
                  >
                    <div className="text-xs text-red-400 font-semibold">
                      ROG Cetra II
                    </div>
                    <div className="text-white font-bold text-sm">
                      Gaming Headset
                    </div>
                    <div className="text-red-400 text-xs font-semibold">
                      Rp 1.299.000
                    </div>
                  </div>
                </LayeredCard>

                <div className="glass-dark rounded-lg neon-red p-4 flex flex-col justify-between">
                  <div className="text-xs text-red-400 font-semibold tracking-widest mb-1">
                    ROG ECOSYSTEM
                  </div>
                  {[
                    ["Aura Sync", "RGB Lighting"],
                    ["ROG AI", "Smart Cooling"],
                    ["Armoury Crate", "One-click OC"],
                  ].map(([v, l]) => (
                    <div key={l}>
                      <div className="text-white font-bold text-xs">{v}</div>
                      <div className="text-gray-500 text-xs">{l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-xs text-blue-500 font-semibold tracking-widest uppercase mb-3">
              Why ASUS
            </div>
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              Innovation at Every <span className="grad-blue">Level</span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Every ASUS product is built on a foundation of engineering
              excellence.
            </p>
          </div>

          <div className="px-6 lg:px-0">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {[
              {
                icon: "M13 10V3L4 14h7v7l9-11h-7z",
                title: "AI Performance",
                desc: "AI optimization learns your usage patterns to maximize performance and battery life.",
                color: "#00AEEF",
                edge: "#002244",
              },
              {
                icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2",
                title: "OLED Displays",
                desc: "Pantone-validated panels with 0.2ms response time and 100% DCI-P3 color gamut.",
                color: "#8B5CF6",
                edge: "#1a0033",
              },
              {
                icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
                title: "MIL-STD-810H",
                desc: "Military-grade chassis tested for temperature, humidity, altitude, and drop resistance.",
                color: "#10B981",
                edge: "#003322",
              },
              {
                icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064",
                title: "Wi-Fi 7 Ready",
                desc: "Next-gen wireless with Thunderbolt 4, USB4, and 5G connectivity options.",
                color: "#F59E0B",
                edge: "#332200",
              },
            ].map((f) => (
              <LayeredCard
                key={f.title}
                edgeColor={f.edge}
                rotation="rotateX(-8deg) rotateY(16deg)"
                width="100%"
                radius="0.35rem"
              >
                <div
                  className="w-full h-full p-5 flex flex-col gap-3"
                  style={{
                    background: `linear-gradient(135deg, #0A0A0A 0%, ${f.edge}66 100%)`,
                  }}
                >
                  <div
                    className="p-2.5 rounded-xl inline-block w-fit"
                    style={{ background: `${f.color}20` }}
                  >
                    <FeatureIcon d={f.icon} />
                  </div>
                  <div
                    className="text-white font-bold text-sm"
                    style={{ color: f.color }}
                  >
                    {f.title}
                  </div>
                  <p className="text-gray-400 text-xs leading-relaxed flex-1">
                    {f.desc}
                  </p>
                </div>
              </LayeredCard>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            {[
              {
                icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
                title: "ErgoSense Design",
                desc: "Per-key RGB keyboard with optimized key travel and ergonomic wrist rest for all-day comfort.",
                color: "#EC4899",
                edge: "#33001a",
              },
              {
                icon: "M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11",
                title: "ProArt Calibration",
                desc: "Factory-calibrated Delta-E < 1 accuracy displays, trusted by professionals for color-critical work.",
                color: "#00AEEF",
                edge: "#002244",
              },
            ].map((f) => (
              <LayeredCard
                key={f.title}
                edgeColor={f.edge}
                rotation="rotateX(6deg) rotateY(-14deg)"
                width="100%"
                radius="0.35rem"
              >
                <div
                  className="w-full h-full p-6 flex items-center gap-5"
                  style={{
                    background: `linear-gradient(135deg, #0A0A0A 0%, ${f.edge}66 100%)`,
                  }}
                >
                  <div
                    className="p-3 rounded-xl shrink-0"
                    style={{ background: `${f.color}20` }}
                  >
                    <FeatureIcon d={f.icon} />
                  </div>
                  <div>
                    <div
                      className="font-bold text-white mb-1"
                      style={{ color: f.color }}
                    >
                      {f.title}
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {f.desc}
                    </p>
                  </div>
                </div>
              </LayeredCard>
            ))}
          </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col items-center gap-8">
              <div className="relative">
                <LayeredCard
                  edgeColor="#1a0033"
                  rotation="rotateX(-10deg) rotateY(22deg)"
                  width="220px"
                  height="360px"
                  radius="1rem"
                >
                  <div
                    className="w-full h-full p-4 flex flex-col"
                    style={{
                      background:
                        "linear-gradient(160deg, #0A0A18 0%, #10002A 100%)",
                    }}
                  >
                    <div className="text-xs text-purple-400 font-semibold tracking-widest mb-2">
                      ROG PHONE 9{" "}
                    </div>
                    <div className="flex-1 flex items-center justify-center">
                      <PhoneSVG color="#8B5CF6" />
                    </div>
                  </div>
                </LayeredCard>
                <div className="absolute -right-8 top-1/4 anim-float">
                  <LayeredCard
                    edgeColor="#110022"
                    rotation="rotateX(8deg) rotateY(-18deg)"
                    width="150px"
                    height="80px"
                    radius="0.35rem"
                  >
                    <div
                      className="w-full h-full p-3 flex flex-col justify-center"
                      style={{
                        background: "linear-gradient(135deg, #0A0A18, #10002A)",
                      }}
                    >
                      <div className="text-xs text-purple-400 font-semibold">
                        Snapdragon 8 Elite 2
                      </div>
                      <div className="text-white font-black text-base">
                        185Hz
                      </div>
                      <div className="text-gray-500 text-xs">AMOLED</div>
                    </div>
                  </LayeredCard>
                </div>
              </div>
            </div>

            <div>
              <div className="text-xs text-purple-600 font-semibold tracking-widest uppercase mb-3">
                ASUS ROG Phone
              </div>
              <h2 className="text-5xl font-black leading-tight mb-6">
                <span className="text-gray-900">Gaming Phone.</span>
                <br />
                <span className="grad-blue">Unleashed.</span>
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                The ROG Phone 9 series redefines mobile gaming with Snapdragon 8
                Elite 2, 185Hz AMOLED display, and 65W HyperCharge for non-stop
                action.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  ["185Hz", "Display"],
                  ["5800", "mAh Battery"],
                  ["65W", "HyperCharge"],
                ].map(([v, l]) => (
                  <div
                    key={l as string}
                    className="bg-white border border-gray-100 rounded p-4 text-center shadow-sm"
                  >
                    <div className="text-2xl font-black grad-blue">{v}</div>
                    <div className="text-xs text-gray-400 mt-1">{l}</div>
                  </div>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href="https://rog.asus.com/phones/rog-phone-9/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded bg-purple-600 hover:bg-purple-500 text-white font-bold transition-all duration-200"
                >
                  Buy ROG Phone
                </a>
                <a
                  href="https://rog.asus.com/phones/rog-phone-9/spec/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded text-gray-700 font-bold border border-gray-300 hover:bg-gray-100 transition-all duration-200"
                >
                  Specifications
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="text-xs text-blue-500 font-semibold tracking-widest uppercase mb-3">
                Our Journey
              </div>
              <h2 className="text-4xl font-black text-gray-900 mb-4">
                35 Years of <span className="grad-blue">Pushing Limits</span>
              </h2>
              <p className="text-gray-500 leading-relaxed mb-10">
                From a small Taipei startup to a global technology leader, ASUS
                has always believed that incredible is just the beginning.
              </p>
              {[
                [
                  "1989",
                  "ASUS Founded",
                  "Four engineers in Taipei founded ASUS with a vision to create the world's finest motherboards.",
                ],
                [
                  "2006",
                  "First ROG Motherboard",
                  "Republic of Gamers was born, setting new standards for extreme gaming performance.",
                ],
                [
                  "2013",
                  "ASUS ZenFone Era",
                  "Launched the ZenFone series, making ASUS a major player in the smartphone market.",
                ],
                [
                  "2020",
                  "AI-Powered Computing",
                  "Introduced ASUS Intelligent Performance Technology, revolutionizing adaptive computing.",
                ],
                [
                  "2024",
                  "Next-Gen OLED & AI",
                  "Leading the OLED laptop revolution with AI-native platforms and Copilot+ PC certification.",
                ],
              ].map(([yr, ti, de]) => (
                <div key={yr as string} className="flex gap-6 group mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 border border-blue-500/50 flex items-center justify-center shrink-0 group-hover:bg-blue-500/40 transition-colors">
                      <div className="w-3 h-3 rounded-full bg-blue-400" />
                    </div>
                    <div className="flex-1 w-px bg-gradient-to-b from-blue-500/30 to-transparent mt-2" />
                  </div>
                  <div className="pb-8">
                    <div className="text-xs text-blue-500 font-semibold tracking-widest mb-1">
                      {yr}
                    </div>
                    <div className="text-gray-900 font-bold mb-2">{ti}</div>
                    <div className="text-gray-500 text-sm leading-relaxed">
                      {de}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-6">
              <div className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-yellow-50 flex items-center justify-center text-2xl">
                    🏆
                  </div>
                  <div>
                    <div className="text-gray-900 font-bold">
                      Global Award Winner
                    </div>
                    <div className="text-gray-500 text-sm">
                      4,500+ Product Awards
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    "CES Innovation",
                    "Red Dot Design",
                    "iF Design",
                    "COMPUTEX",
                    "Good Design",
                    "PC Mag",
                  ].map((a) => (
                    <div
                      key={a}
                      className="bg-gray-50 border border-gray-100 rounded-lg p-2 text-center"
                    >
                      <div className="text-xs text-gray-600 font-medium">
                        {a}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white border border-green-100 rounded-lg p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">🌱</span>
                  <div>
                    <div className="text-gray-900 font-bold">Green ASUS</div>
                    <div className="text-green-600 text-sm">
                      Sustainability Commitment
                    </div>
                  </div>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  Committed to carbon neutrality by 2035. Using recycled
                  materials, reducing packaging waste, and building
                  energy-efficient products.
                </p>
                <div className="flex gap-3">
                  {[
                    ["50%", "Recycled Materials"],
                    ["80%", "Energy Star Certified"],
                    ["2035", "Carbon Neutral Goal"],
                  ].map(([v, l]) => (
                    <div
                      key={l as string}
                      className="flex-1 bg-green-50 rounded-xl p-3 text-center"
                    >
                      <div className="text-green-600 font-black text-xl">
                        {v}
                      </div>
                      <div className="text-xs text-gray-500">{l}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm">
                <div className="text-gray-900 font-bold mb-4">
                  Certifications & Standards
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Intel Evo",
                    "Copilot+",
                    "Wi-Fi 7",
                    "Thunderbolt 4",
                    "MIL-STD-810H",
                    "EPEAT Gold",
                    "TCO Certified",
                    "Energy Star",
                  ].map((c) => (
                    <span
                      key={c}
                      className="px-3 py-1 rounded-full text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-100"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-gray-200 pt-12 pb-8 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 mb-10">
            <div>
              <a
                href="https://www.asus.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AsusLogo color="#1a1a1a" />
              </a>
              <p className="text-gray-500 text-sm leading-relaxed mt-4 max-w-xs">
                ASUS is a worldwide technology leader dedicated to making
                computing more accessible and innovative.
              </p>
            </div>
            <div className="flex gap-3">
              {socials.map(({ label, href, d }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded bg-gray-100 flex items-center justify-center text-gray-500 hover:text-blue-500 hover:bg-blue-50 transition-all duration-200"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d={d}
                    />
                  </svg>
                </a>
              ))}
            </div>
          </div>
          <div className="mb-8 flex justify-center">
            <img
              src="https://i.pinimg.com/originals/5b/79/c8/5b79c81933edbf2f1ee45ce16abb5ea1.gif"
              alt=""
              className="w-full max-w-2xl rounded-lg"
            />
          </div>
          <div className="pt-6 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-gray-400 text-xs">© AndhikaFW</div>
            <div className="flex gap-6">
              {bottomLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-700 text-xs transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
