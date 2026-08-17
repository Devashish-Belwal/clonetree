# Project Context

> Generated automatically by project-context.

---

## Project Tree

```text
├── app
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components
│   ├── HomePage
│   │   ├── HeroSection
│   │   │   ├── Content.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   ├── imageData.ts
│   │   │   ├── ImageScroll.module.css
│   │   │   ├── ImageScroll.tsx
│   │   │   ├── ImageSlot.tsx
│   │   │   ├── useImageScroll.ts
│   │   │   └── useInfiniteTrack.ts
│   │   ├── TrustedBy
│   │   │   ├── TbCards.tsx
│   │   │   ├── TbStrip.tsx
│   │   │   ├── TextFlipper.tsx
│   │   │   └── TrustedBy.tsx
│   │   ├── CreateCustomize.tsx
│   │   ├── EngagementAnalyze.tsx
│   │   ├── FAQ.tsx
│   │   ├── FeaturedSection.tsx
│   │   ├── Footer.tsx
│   │   ├── GrowFollowers.tsx
│   │   ├── Plans.tsx
│   │   ├── ShareAnywhere.tsx
│   │   ├── ShareContent.tsx
│   │   └── Testimonials.tsx
│   ├── navbar
│   │   ├── dropdown
│   │   │   ├── CategoryList.tsx
│   │   │   ├── ContentPanel.tsx
│   │   │   ├── Dropdown.tsx
│   │   │   ├── DropdownItem.tsx
│   │   │   ├── FeaturedPanel.tsx
│   │   │   └── icons.tsx
│   │   ├── hooks
│   │   │   └── useNavbarScroll.ts
│   │   ├── mobile
│   │   │   ├── menus
│   │   │   │   ├── LearnMenu.tsx
│   │   │   │   ├── MainMenu.tsx
│   │   │   │   └── ProductsMenu.tsx
│   │   │   ├── MobileAccordionContent.tsx
│   │   │   ├── MobileAccordionItem.tsx
│   │   │   ├── MobileCategoryScreen.tsx
│   │   │   ├── MobileMenu.tsx
│   │   │   ├── MobileMenuItem.tsx
│   │   │   ├── MobileNav.tsx
│   │   │   ├── MobileSheetHeader.tsx
│   │   │   └── types.ts
│   │   ├── DesktopActions.tsx
│   │   ├── DesktopLinks.tsx
│   │   ├── index.ts
│   │   ├── Logo.tsx
│   │   ├── Navbar.tsx
│   │   └── NavLinks.ts
│   ├── ShareAnywhere
│   │   └── HeroAnimation.tsx
│   └── ui
│       ├── accordion.tsx
│       ├── button.tsx
│       ├── separator.tsx
│       └── sheet.tsx
├── data
│   ├── navigation.ts
│   └── TrustedBy.ts
├── lib
│   └── utils.ts
├── public
│   ├── Earn
│   │   └── products-1.avif
│   ├── EngagementAnalyze
│   │   └── analyze-your-audience-and-keep-them-engaged.avif
│   ├── FeaturedSection
│   │   ├── forbes.avif
│   │   ├── fortune.avif
│   │   ├── insider.avif
│   │   ├── mashable.avif
│   │   └── techcrunch.avif
│   ├── Grow
│   │   └── group1597882005.avif
│   ├── navigation
│   │   ├── learn
│   │   │   └── success-stories.avif
│   │   └── products
│   │       ├── booked-and-paid-easily.avif
│   │       ├── featured.avif
│   │       ├── send-contacts-to-email-tools.avif
│   │       ├── social-link-analytics.avif
│   │       └── what.avif
│   ├── ShareContent
│   │   └── all-your-things-1.avif
│   ├── Testimonials
│   │   ├── david-coleman.avif
│   │   ├── luke-kidgell.avif
│   │   ├── patti-chimkire.avif
│   │   ├── riley-lemon.avif
│   │   └── rise-utama.avif
│   └── TrustedBy
│       ├── comedycentral.avif
│       ├── funkynutmeg.avif
│       ├── hbo.avif
│       ├── laclippers.avif
│       ├── pharrell.avif
│       ├── selenagomez.avif
│       └── tonyhawk.avif
├── types
│   └── navigation.ts
├── .gitignore
├── AGENTS.md
├── CLAUDE.md
├── components.json
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── README.md
└── tsconfig.json
```

---

## File: `.gitignore`

**Size:** 480 bytes

```
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.*
.yarn/*
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/versions

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.pnpm-debug.log*

# env files (can opt-in for committing if needed)
.env*

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts

```

---

## File: `AGENTS.md`

**Size:** 327 bytes

```md
<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

```

---

## File: `app/globals.css`

**Size:** 1027 bytes

```css
@import "tailwindcss";

:root {
  --background: #ffffff;
  --foreground: #ffffff;
}

@theme {
  --breakpoint-sm: 30rem;
  --font-sans: var(--font-link-sans);
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-chartreuse: #D2E823;
  --color-section2: #2665D6;
  --color-forest: #1B1B1B;
  --color-marble: #F7F5F2;
  --color-shade: #1B1B1B;
  --color-prefooter:#F3F3F1;
  --font-linksans: var(--font-geist-sans);
  --radius-pill: 999px;
  --text-h1: clamp(2.5rem, 5.4vw, 4.875rem);
  --text-body: 1.125rem;
}
@media (prefers-color-scheme: dark) {
  :root {
    --background: #000000;
    --foreground: #ffffff;
  }
}

body {
  background: #ffffff;
  color: var(--foreground);
  font-family: var(--font-link-sans), sans-serif;
}

@keyframes hero-tower-up {
  from { transform: translateY(0); }
  to   { transform: translateY(calc(-1 * var(--card-step) * 5)); }
}

.makeithover {
  transition: transform 50ms ease;
}

.makeithover:hover {
  transform: translateY(-2px);
}
```

---

## File: `app/layout.tsx`

**Size:** 770 bytes

```tsx
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/navbar/Navbar";

const linkSans = localFont({
  src: "../fonts/LinkSans_LinkSansVF-s.p.0u~s17x8p~h91.woff2",
  variable: "--font-link-sans",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Clone Tree",
  description: "Create your own Clone Tree",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${linkSans.variable} h-full antialiased bg-white`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
```

---

## File: `app/page.tsx`

**Size:** 983 bytes

```tsx
import EngagementAnalyze from "@/components/HomePage/EngagementAnalyze";
import FAQ from "@/components/HomePage/FAQ";
import Footer from "@/components/HomePage/Footer";
import HeroSection from "@/components/HomePage/HeroSection/HeroSection";
import Section2 from "@/components/HomePage/CreateCustomize";
import ShareAnywhere from "@/components/HomePage/ShareAnywhere";
import Testimonials from "@/components/HomePage/Testimonials";
import ShareContent from "@/components/HomePage/ShareContent";
import TrustedBy from "@/components/HomePage/TrustedBy/TrustedBy";
import PlansSection from "@/components/HomePage/Plans";
import FeaturedIn from "@/components/HomePage/FeaturedSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Section2 />
      <ShareAnywhere />
      <EngagementAnalyze />
      <TrustedBy />
      <ShareContent />
      <PlansSection />
      <FeaturedIn />
      <Testimonials />
      <FAQ />
      <Footer />
    </>
  );
}

```

---

## File: `CLAUDE.md`

**Size:** 11 bytes

```md
@AGENTS.md

```

---

## File: `components.json`

**Size:** 516 bytes

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "base-nova",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "app/globals.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "iconLibrary": "lucide",
  "rtl": false,
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "menuColor": "default",
  "menuAccent": "subtle",
  "registries": {}
}

```

---

## File: `components/HomePage/CreateCustomize.tsx`

**Size:** 1953 bytes

```tsx
import { Button } from "../ui/button";

const Section2 = () => {
  return (
    <section className="bg-section2 py-20 md:py-32">
      <div className="mx-auto w-[90vw] max-w-[1504px] grid items-center gap-10 md:grid-cols-2">

        {/* Text - appears second on desktop */}
        <div className="order-1 md:order-2 flex flex-col gap-6 text-center md:text-left md:items-start items-center">
          <h2 className="text-chartreuse text-3xl md:text-5xl font-extrabold tracking-tight text-balance">
            Create and customize your Linktree in minutes
          </h2>

          <p className="max-w-[60ch] text-white">
            Connect all your content across social media, websites, stores and
            more in one link in bio. Customize every detail or let Linktree
            automatically enhance it to match your brand and drive more clicks.
          </p>

          {/* Desktop CTA */}
          <Button className="hidden md:flex rounded-full bg-chartreuse text-[#1f2330] font-bold h-15 min-w-[300px]">
            Get started for free
          </Button>
        </div>

        {/* Video - appears first on desktop */}
        <div className="order-2 md:order-1 w-full">
          <div className="overflow-hidden rounded-2xl">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="block w-full h-auto object-cover"
            >
              <source src="/section2/customise_your_linktree.webm" />
            </video>
          </div>
        </div>

        {/* Mobile CTA */}
        <div className="order-3 flex justify-center md:hidden">
          <Button className="rounded-full bg-chartreuse text-[#1f2330] font-bold h-14 px-7">
            Get started for free
          </Button>
        </div>

      </div>
    </section>
  );
};

export default Section2;
```

---

## File: `components/HomePage/EngagementAnalyze.tsx`

**Size:** 1871 bytes

```tsx
import Image from "next/image";
import { Button } from "../ui/button";

export default function EngagementAnalyze() {
  return (
    <section className="bg-[#e8efd5] py-20 md:py-32">
      <div className="mx-auto w-[90vw] max-w-[1504px] grid items-center gap-10 md:gap-12 lg:gap-16 md:grid-cols-2">

        {/* Text - second on desktop */}
        <div className="order-1 md:order-2 flex flex-col gap-6 items-center text-center md:items-start md:text-left text-[#1f2330]">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-balance">
            Analyze your audience and keep them engaged
          </h2>

          <p className="max-w-[60ch]">
            Track your engagement over time, monitor revenue and learn what’s
            converting your audience. Make informed updates on the fly to keep
            them coming back.
          </p>

          {/* Desktop CTA */}
          <Button className="hidden md:flex rounded-full bg-[#e6c0ea] text-[#1f2330] h-15 min-w-[300px] font-semibold">
            Get started for free
          </Button>
        </div>

        {/* Image - first on desktop */}
        <div className="order-2 md:order-1 w-full">
          <Image
            src="/EngagementAnalyze/analyze-your-audience-and-keep-them-engaged.avif"
            alt="Analyze your audience and keep them engaged"
            width={1392}
            height={1408}
            className="block w-full h-auto"
            sizes="(max-width: 768px) 90vw, 45vw"
          />
        </div>

        {/* Mobile CTA */}
        <div className="order-3 flex justify-center md:hidden">
          <Button className="rounded-full bg-[#e6c0ea] text-[#1f2330] h-14 px-7 font-semibold">
            Get started for free
          </Button>
        </div>

      </div>
    </section>
  );
}
```

---

## File: `components/HomePage/FAQ.tsx`

**Size:** 10075 bytes

```tsx
"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is Linktree the original link in bio tool?",
    answer: `The short answer? Yes!

Back in 2016, we created Linktree as an easy way to link out to all socials and unify digital ecosystems, pioneering the link-in-bio category. Linktree remains the leading, biggest and most popular link-in-bio solution – but that’s just the beginning. You can use your Linktree URL or QR code anywhere your audience is, including on your business cards, in your email signature, on paper-based posters and brochures, and even on your resumé. If you don’t have a website, that’s fine. If you have a Linktree, you don’t need one!`,
  },
  {
    question: "Can you get paid and sell things from a Linktree?",
    answer: `Yes, you can! We offer plenty of ways to sell products and monetize your audience. You can collect revenue from affiliate links, and sell your products right in your Linktree. Monetisation features are only available for selected countries, see this Help Article for more.

A lot of Linktree creators see incredible results with online sales on Linktree, because it removes the extra steps involved in a purchase.

“We love how Linktree has helped us manage our business by having all social media and ways to pay in one location. The QR code has made it easy for customers to access it all!” – Tiffany`,
  },
  {
    question: "Is Linktree safe to use on all of my social media profiles?",
    answer: `Linktree is trusted by all social platforms, and is even used on many of Facebook, Instagram and TikTok’s own social media accounts! Because Linktree is the original and most popular link-in-bio tool, the linktr.ee URL is a trusted, identifiable and familiar link that audiences feel comfy and safe clicking on.`,
  },
  {
    question: "What makes Linktree better than the other link in bio options?",
    answer: `We have our own opinions here, of course, but the stories of the people who use Linktree matter more. Let’s hear what they have to say:

“Four months into creating, someone messaged me like: You need a Linktree. I can’t remember what I was using at the time, but it was one of those ones that were supposed to be easy. Once I got Linktree set up, I was like, oh my god – why did I spend $100 on a website? I don’t need all of that! Now, I can see the monetization of my following becoming a full-time thing.” – David Coleman

It’s so much easier to set up and have all of your links in one place in a well designed format.” – Catie T

“Websites are cool (I have one) but Linktrees just make it so much easier.” – Tan Nguyen

“I love their analytics. Other link-in-bio companies don’t provide extensive data on what’s going on.” – Riley Lemon

Linktree invented the bio link tool in 2016, and it continues to be the world’s most popular bio link to this day – with 50M+ people using it as their trusted place to share, sell and grow online. Join them on Linktree today and see for yourself!`,
  },
  {
    question: "How can I drive more traffic to and through my Linktree?",
    answer: `Sharing your Linktree on every social platform you have makes it easy for your most important content to be seen and engaged with by all of your followers. You can even use QR codes to generate online traffic in offline places, and drive people to your links.

Once visitors arrive on your Linktree, easy-to-understand analytics help you quickly and easily discover where they’re coming from, and what they’re clicking on. You can immediately see what’s working and what’s not and improve your Linktree on the fly with different link placement, prioritized links, subheadings, animation and more to make sure your traffic is landing exactly where you want it!`,
  },
  {
    question: "How many links should I have on my Linktree?",
    answer: `This depends on two things. If your priority is click-throughs and conversion, we recommend having 3-7 links on your Linktree at once (based on our most successful creators). Including too many options for your visitors slows down their course of action.

That said: for certain creators whose priority is display, education and showcasing (e.g. a record label with a library of new releases to promote, or a management company looking to showcase their full roster of clients), including more than seven links fulfils their purpose perfectly.

You can use features on Linktree to add subheadings, sections, animation and other prioritisation methods to your links – so no matter how many things you’ve got to share, you can drive your visitors to what’s most important, first.`,
  },
  {
    question: "Do I need a website to use Linktree?",
    answer: `No, you don’t! Linktree can act as your very own mini-website to share, sell and grow without any of the time and effort it takes to build and maintain a regular website. You can create a design that fully reflects your personality and brand in seconds, with no knowledge, skills or experience needed. If you already have a website, that’s great: you can add it to your Linktree.

“I hardly touch my website any more. I just send people to my Linktree! It’s a good-looking, fresh interface… so much more dynamic. I can take a few minutes, update my links and put my phone away rather than spending 45 struggling on WordPress.” – @ashleyhopeperez`,
  },
  {
    question: "Where can I download the app?",
    answer: "Find it in the App Store, and in the Google Play store!",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      className="
        relative bg-currant text-lavender bg-[#730013]
      "
    >
      <div
        className="
          mx-auto
          flex
          w-full
          flex-col
          items-center
          gap-12
          px-6
          py-24
          max-w-5xl
        "
      >
        <div className="flex flex-col items-center gap-6 text-center">
          <h2
            className="
              max-w-[20ch]
              text-center
              text-balance
              text-[clamp(2.5rem,5vw,3.5rem)]
              font-bold
              leading-[1.06]
              tracking-tight
              text-[#e6c0ea]
            "
          >
            Questions? Answered
          </h2>
        </div>

        <div className="flex w-full flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="
                  overflow-hidden
                  rounded-lg
                  border-2
                  border-transparent
                  bg-black/30
                  outline-2
                  outline-black/30
                  transition-colors
                  hover:border-[#730013]
                  sm:rounded-[28px]
                  md:rounded-xl
                "
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="
                    group
                    flex
                    w-full
                    items-center
                    justify-between
                    gap-6
                    px-6
                    py-6
                    text-left
                    text-lg
                    font-medium
                    leading-7
                    tracking-[-0.01em]
                    text-current
                    transition-opacity
                    hover:opacity-90
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-current
                    focus-visible:ring-offset-2
                    md:px-10
                    md:py-10
                    md:text-xl
                    lg:px-12
                    lg:py-12
                    lg:text-2xl
                    lg:leading-9
                  "
                >
                  <span className="flex-1">{faq.question}</span>

                  <ChevronDown
                    className={`
                      size-6 shrink-0 transition-transform duration-200
                      ${isOpen ? "rotate-180" : ""}
                    `}
                  />
                </button>

                <div
                  className={`
                    grid
                    transition-[grid-template-rows,opacity]
                    duration-200
                    ease-out
                    ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}
                  `}
                >
                  <div className="min-h-0 overflow-hidden">
                    <div
                      className="
                        px-6
                        pb-6
                        text-base
                        leading-7
                        text-current
                        md:px-10
                        md:pb-10
                        md:text-lg
                        lg:px-12
                        lg:pb-12
                      "
                    >
                      {faq.answer.split("\n\n").map((paragraph, i) => (
                        <p key={i} className="mb-4 last:mb-0">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
```

---

## File: `components/HomePage/FeaturedSection.tsx`

**Size:** 2791 bytes

```tsx
import Image from "next/image";

const featuredLogos = [
  {
    name: "TechCrunch",
    src: "/FeaturedSection/techcrunch.avif",
    width: 368,
    height: 54,
    className: "h-5",
  },
  {
    name: "Insider",
    src: "/FeaturedSection/insider.avif",
    width: 199,
    height: 98,
    className: "h-8",
  },
  {
    name: "Forbes",
    src: "/FeaturedSection/forbes.avif",
    width: 156,
    height: 64,
    className: "h-6",
  },
  {
    name: "Mashable",
    src: "/FeaturedSection/mashable.avif",
    width: 214,
    height: 35,
    className: "h-4",
  },
  {
    name: "Fortune",
    src: "/FeaturedSection/fortune.avif",
    width: 272,
    height: 64,
    className: "h-6",
  },
];

export default function FeaturedIn() {
  return (
    <section className="relative bg-marble py-16 text-shade md:py-24">
      <div
        className="
          mx-auto
          flex
          w-[90vw]
          max-w-[1504px]
          flex-col
          gap-8
          max-lg:w-[95vw]
          max-sm:w-[90vw]
          max-sm:max-w-none
          md:gap-12
        "
      >
        <div
          className="
            mx-auto
            flex
            max-w-[960px]
            flex-col
            items-center
            gap-12
            text-center
          "
        >
          <h2 className="max-w-[960px] text-4xl font-black text-balance text-center text-current">
            As featured in…
          </h2>
        </div>

        <div
          className="
            mx-auto
            flex
            max-w-[1045px]
            flex-wrap
            items-stretch
            justify-center
            gap-[13.3px]
          "
        >
          {featuredLogos.map((logo) => (
            <div
              key={logo.name}
              className="
                flex
                h-[72px]
                min-h-[72px]
                max-h-[72px]
                w-[319px]
                items-center
                justify-center
                rounded-pill
                bg-white
                p-[26px]
                transition-transform
                duration-150
                ease-out
                max-sm:w-[calc(50%-6.65px)]
              "
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={logo.width}
                height={logo.height}
                loading="lazy"
                className={`block w-auto max-w-full object-contain ${logo.className}`}
                sizes="(max-width: 479px) 45vw, (max-width: 1023px) 45vw, 100vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

## File: `components/HomePage/Footer.tsx`

**Size:** 15617 bytes

```tsx
"use client";

import Image from "next/image";
import Link from "next/link";

const footerColumns = [
  {
    title: "Company",
    links: [
      { label: "The Linktree Blog", href: "/blog" },
      { label: "Engineering Blog", href: "/blogs/categories/engineering" },
      { label: "Marketplace", href: "/marketplace" },
      { label: "What's New", href: "https://app.getbeamer.com/linktree/en" },
      { label: "About", href: "/s/about" },
      { label: "Press", href: "/s/about/press" },
      { label: "Careers", href: "/s/about/careers" },
      { label: "Link in Bio", href: "/features/link-in-bio" },
      { label: "Social Good", href: "/s/about/social-good" },
      { label: "Contact", href: "/s/about/contact" },
    ],
  },
  {
    title: "Community",
    links: [
      {
        label: "Linktree for Enterprise",
        href: "/s/about/enterprise",
      },
      {
        label: "2023 Creator Report",
        href: "https://linktr.ee/creator-report-23",
      },
      {
        label: "2022 Creator Report",
        href: "https://linktr.ee/creator-report/",
      },
      {
        label: "Charities",
        href: "/s/about/charities",
      },
      {
        label: "Creator Profile Directory",
        href: "https://linktr.ee/discover/profile-directory/",
      },
      {
        label: "Explore Templates",
        href: "/s/templates",
      },
    ],
  },
  {
    title: "Support",
    links: [
      {
        label: "Help Topics",
        href: "https://linktr.ee/help",
      },
      {
        label: "Getting Started",
        href: "https://help.linktr.ee/collections/3020860-getting-started-with-linktree",
      },
      {
        label: "Linktree Pro",
        href: "/s/join-linktree-pro-for-free",
      },
      {
        label: "Features & How-Tos",
        href: "https://help.linktr.ee/collections/7058291-how-to-s",
      },
      {
        label: "FAQs",
        href: "https://linktr.ee/help",
      },
      {
        label: "Report a Violation",
        href: "/s/about/trust-center/report",
      },
    ],
  },
  {
    title: "Trust & Legal",
    links: [
      {
        label: "Terms & Conditions",
        href: "/s/terms",
      },
      {
        label: "Privacy Notice",
        href: "/s/privacy",
      },
      {
        label: "Cookie Notice",
        href: "/s/about/cookie-notice",
      },
      {
        label: "Trust Center",
        href: "/s/about/trust-center",
      },
      {
        label: "Cookies Preferences",
        href: "#",
      },
      {
        label: "Transparency Report",
        href: "/s/transparency-report-hub",
      },
      {
        label: "Law Enforcement Access Policy",
        href: "/s/about/trust-center/law-enforcement-access-request-policy",
      },
      {
        label: "Human Rights",
        href: "/s/human-rights",
      },
    ],
  },
];

const socials = [
  {
    label: "Linktree",
    href: "https://linktr.ee/linktr.ee",
    svg: '/footer/linktree-small.svg',
  },
  {
    label: "Threads",
    href: "https://www.threads.net/@linktr.ee",
    svg: '/footer/threads.svg',
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@linktr.ee",
    svg: '/footer/tiktok.svg',
  },
];

export default function Footer() {
  return (
    <footer
      className="
        relative
        overflow-hidden
        bg-dahlia
        pt-[27vw]
        pb-[5vw]
        xl:pt-[227.27px]
        xl:pb-[29.09px]
        2xl:pt-62.5
        2xl:pb-8
        max-lg:pt-[21.42vw]
        max-lg:pb-[2.736vw]
        bg-[#4e2376]
      "
    >
      <div className="relative mx-auto w-[90vw] max-w-376">
        {/* CTA */}
        <div
          className="
            relative
            z-10
            mb-[27vw]
            flex
            flex-col
            items-center
            gap-[8vw]
            text-center
            xl:mb-[227.27px]
            xl:gap-[36.36px]
            2xl:mb-62.5
            2xl:gap-10
            max-lg:mb-[21.42vw]
          "
        >
          <h2 className="text-balance text-center text-h1 text-lavender">
            Jumpstart your corner of the internet today
          </h2>

          <form
            className="
              flex
              items-stretch
              gap-2
              max-sm:w-full
              max-sm:flex-col
              max-sm:items-center
              max-sm:gap-[3vw]
            "
          >
            <input
              id="username-footer"
              aria-label="Claim your Linktree username"
              placeholder="linktr.ee/yourname"
              type="text"
              defaultValue="linktr.ee/"
              required
              className="
                min-w-72.5
                rounded-sm
                border-none
                bg-white
                px-4
                py-3
                text-base
                font-medium
                text-[#757575]
                outline-none
                focus:ring-2
                focus:ring-white
                max-sm:w-[85vw]
                max-sm:rounded-[1.7vw]
                max-sm:p-[4vw]
                max-sm:text-[4vw]
              "
            />

            <button
              type="submit"
              className="
                inline-flex
                min-h-15
                min-w-75
                items-center
                justify-center
                rounded-pill
                bg-chartreuse
                px-9
                text-base
                font-medium
                text-shade
                transition-[transform,filter]
                duration-150
                hover:-translate-y-px
                hover:brightness-[1.02]
                active:scale-[0.97]
                max-sm:min-w-[80vw]
                max-sm:px-[7vw]
              "
            >
              Claim your Linktree
            </button>
          </form>
        </div>

        {/* Decorative illustrations */}
        <div className="relative">
          <Image
            src="/footer/footer-person-illustration.svg"
            alt=""
            width={616}
            height={953}
            className="
              absolute
              left-0
              top-[-110%]
              z-0
              block
              max-w-none
              rotate-[16.42deg]
              w-[38.2143vw]
              xl:w-121.75
              2xl:w-[535.79px]
              max-lg:w-[45.924vw]
              max-sm:left-[-19.5%]
              max-sm:top-[-16%]
              max-sm:w-[55vw]
            "
            sizes="(max-width: 479px) 100vw, 50vw"
          />

          <Image
            src="/footer/footer-flower.svg"
            alt=""
            width={600}
            height={708}
            className="
              absolute
              right-[-18.9%]
              top-[-17%]
              z-0
              w-[42.85vw]
              xl:w-[545.4px]
              2xl:w-150
              max-lg:w-[51.42vw]
              max-sm:right-[-20.5%]
              max-sm:top-[-9%]
            "
            sizes="(max-width: 479px) 100vw, 50vw"
          />

          {/* White footer panel */}
          <div
            className="
              relative
              z-10
              flex
              flex-col
              gap-12
              overflow-visible
              rounded-[14.5px]
              bg-white
              p-16
              xl:rounded-[14.5px]
              max-lg:rounded-[1.36vw]
              max-sm:rounded-[3.4vw]
              max-sm:p-[10vw_5vw_16vw]
            "
          >
            {/* Navigation columns */}
            <div
              className="
                flex
                w-full
                gap-8
                max-sm:mb-[8vw]
                max-sm:flex-col
                max-sm:gap-[8vw]
              "
            >
              {footerColumns.map((column) => (
                <div
                  key={column.title}
                  className="flex flex-1 flex-col gap-6 max-sm:gap-[5vw]"
                >
                  <h3
                    className="
                      font-medium
                      text-shade
                      text-xl
                      2xl:text-2xl
                    "
                  >
                    {column.title}
                  </h3>

                  <div className="flex flex-col items-start gap-4 max-sm:gap-[3vw]">
                    {column.links.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        className="
                          text-sm
                          leading-body
                          tracking-[-0.013em]
                          text-concrete
                          no-underline
                          transition-opacity
                          duration-150
                          hover:opacity-70
                          max-sm:text-[4vw]
                          text-black
                        "
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom actions */}
            <div
              className="
                flex
                items-center
                justify-between
                gap-8
                max-sm:flex-col
                max-sm:items-start
              "
            >
              {/* Login / signup */}
              <div
                className="
                  flex
                  items-center
                  gap-2
                  max-sm:w-full
                  max-sm:flex-col
                  max-sm:items-stretch
                  max-sm:gap-[3vw]
                "
              >
                <Link
                  href="/login"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    rounded-sm
                    bg-marble
                    px-7
                    py-5
                    font-medium
                    text-shade
                    transition-colors
                    hover:bg-gray-200
                    max-sm:rounded-[2vw]
                    max-sm:px-[7vw]
                    max-sm:py-[6.3vw]
                    max-sm:text-[4vw]
                  "
                >
                  Log in
                </Link>

                <Link
                  href="/register"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    rounded-pill
                    bg-chartreuse
                    px-7
                    py-5
                    font-medium
                    text-shade
                    transition-[transform,filter]
                    hover:-translate-y-px
                    hover:brightness-[1.02]
                    max-sm:px-[7vw]
                    max-sm:py-[6.3vw]
                    max-sm:text-[4vw]
                  "
                >
                  Get started for free
                </Link>
              </div>

              {/* App stores + socials */}
              <div
                className="
                  flex
                  items-center
                  gap-2
                  max-sm:w-full
                  max-sm:flex-col
                  max-sm:gap-[10vw]
                "
              >
                {/* Store buttons */}
                <div className="flex gap-2 max-sm:w-full">
                  <a
                    href="https://apps.apple.com/us/app/linktree-link-in-bio-creator/id1593515263"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Download on the App Store"
                    className="
                      inline-flex
                      h-16
                      items-center
                      justify-center
                      rounded-pill
                      bg-shade
                      px-5
                      text-sm
                      font-medium
                      text-white
                      transition-colors
                      hover:opacity-80
                      max-sm:w-full
                      max-sm:p-[4.6vw_5vw]
                    "
                  >
                    <Image
                      alt=''
                      width={101}
                      height={26}
                      src={'/footer/AppStore.svg'}
                    />
                  </a>

                  <a
                    href="https://play.google.com/store/apps/details?id=ee.linktr.admin&hl=en_US"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Get it on Google Play"
                    className="
                      inline-flex
                      h-16
                      items-center
                      justify-center
                      rounded-pill
                      bg-shade
                      px-5
                      text-sm
                      font-medium
                      text-white
                      transition-colors
                      hover:opacity-80
                      max-sm:w-full
                      max-sm:p-[4.6vw_5vw]
                    "
                  >
                    <Image
                      alt=''
                      width={101}
                      height={26}
                      src={'/footer/PlayStore.svg'}
                    />
                  </a>
                </div>

                {/* Social buttons */}
                <div className="flex gap-2">
                  {socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="
                        inline-flex
                        size-16
                        items-center
                        justify-center
                        rounded-pill
                        bg-shade
                        text-sm
                        font-medium
                        text-white
                        transition-colors
                        hover:opacity-80
                        max-sm:size-[16.5vw]
                      "
                    >
                      <Image
                        alt={`${social.label}`}
                        src={`${social.svg}`}
                        height={50}
                        width={50}
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
```

---

## File: `components/HomePage/GrowFollowers.tsx`

**Size:** 362 bytes

```tsx
function GrowFollowers() {
  return (
    <div
      className="
        p-4 bg-prefooter h-full
      "
    >
      <div
        className="
          h-full
          p-2
          bg-chartreuse
          rounded-4xl
          makeithover
        "
      >
        GrowFollowers
      </div>
    </div>
  )
}

export default GrowFollowers
```

---

## File: `components/HomePage/HeroSection/Content.tsx`

**Size:** 3771 bytes

```tsx
"use client"
import React, { FormEvent, useState } from 'react'

function Content() {

    const [username, setUsername] = useState("");

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        // Route to your actual signup flow, e.g.:
        // router.push(`/signup?username=${encodeURIComponent(username)}`);
    }

    return (
        <div
            className="
            mt-[1.14vw] flex flex-col items-start gap-6
            max-md:items-center max-md:text-center
            max-sm:mt-[5vw] max-lg:mt-[2vw]
            xl:mt-[14.5px] 2xl:mt-0
          "
        >
            <h1 className="text-h1 text-balance text-[#254f1a] max-md:text-center">
                A link in bio built for you.
            </h1>

            <p className="max-w-[60ch] text-body text-[#254f1a] max-md:text-center">
                Join 70M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.
            </p>

            <form
                onSubmit={handleSubmit}
                className="
              flex w-full flex-wrap items-stretch gap-3
              justify-start max-md:justify-center
              max-sm:flex-col max-sm:items-center
              lg:mt-4
            "
            >
                <input
                    id="username-header"
                    aria-label="Claim your Linktree username"
                    placeholder="linktr.ee/yourname"
                    required
                    autoCapitalize="none"
                    autoCorrect="off"
                    spellCheck={false}
                    autoComplete="off"
                    inputMode="text"
                    enterKeyHint="go"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="
                        min-h-[3.75rem] min-w-[280px] flex-1 rounded-sm border-none
                        bg-white px-4 py-2 font-linksans text-base font-medium
                        text-[#757575] transition-all duration-150
                        focus:outline-2 focus:outline-offset-2 focus:outline-white
                        max-sm:min-w-[85vw] max-sm:rounded-[1.7vw] max-sm:p-[4vw]
                        max-sm:text-[4vw]
                    "
                />
                <button
                    type="submit"
                    className="
                inline-flex min-h-[3.75rem] min-w-[18.75rem] cursor-pointer
                select-none items-center justify-center gap-2 whitespace-nowrap
                rounded-pill bg-[#254f1a] px-9 text-center text-base font-medium
                text-marble transition-[background-color,transform,filter,box-shadow]
                duration-150 ease-out
                hover:-translate-y-px hover:brightness-[1.02]
                active:scale-[0.97] active:duration-[80ms]
                focus-visible:outline-none focus-visible:ring-2
                focus-visible:ring-shade focus-visible:ring-offset-2
                disabled:pointer-events-none disabled:opacity-50
                max-sm:min-w-[80vw] max-sm:px-[7vw]
              "
                >
                    Get started for free
                </button>
            </form>
            {/* <div
                className="w-full bg-[#ff0000] sm:bg-[#00ff00]
        md:bg-[#0000ff] lg:bg-[#00ffff]
        xl:bg-[#ff00ff] 2xl:bg-[#ffff00]"
            >
                Content
            </div> */}
        </div>
    )
}

export default Content
```

---

## File: `components/HomePage/HeroSection/HeroSection.tsx`

**Size:** 870 bytes

```tsx
import Content from "./Content";
import ImageScroll from "./ImageScroll";

function HeroSection() {
  return (
    <div>
      <section
        className="
          overflow-x-hidden
          bg-chartreuse
          text-shade
          flex
          items-center
          lg:min-h-screen
        "
      >
        <div
          className="
            mx-auto
            grid
            w-full
            max-w-376
            items-center
            px-4
            md:px-0
            md:w-[90vw]
            md:grid-cols-2
            md:gap-12
            lg:gap-16
            lg:w-[95vw]
            max-md:pt-30
            max-md:gap-4
            max-md:pb-4
          "
        >
          <Content />
          <ImageScroll />
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
```

---

## File: `components/HomePage/HeroSection/imageData.ts`

**Size:** 888 bytes

```ts
export const IMAGE_BATCHES = [
  {
    name: "koy-sun",
    frameCount: 11,
  },
  {
    name: "perfect-person",
    frameCount: 10,
  },
  {
    name: "pistakio",
    frameCount: 11,
  },
  {
    name: "shaep",
    frameCount: 7,
  },
  {
    name: "zay-dante",
    frameCount: 10,
  },
] as const;

export type ImageBatch = (typeof IMAGE_BATCHES)[number];

export type HeroSlot = {
  id: number;
  name: string;
  frameCount: number;
};

export const HERO_IMAGE_ORDER: HeroSlot[] = [
  { id: 0, ...IMAGE_BATCHES[0] },
  { id: 1, ...IMAGE_BATCHES[1] },
  { id: 2, ...IMAGE_BATCHES[2] },
  { id: 3, ...IMAGE_BATCHES[3] },
  { id: 4, ...IMAGE_BATCHES[4] },
];

export const FRAME_INTERVAL = 120;

export const SCROLL_DURATION = 5000;

export const SCROLL_PAUSE = 2000;

export const TRACK = [
  ...HERO_IMAGE_ORDER,
  ...HERO_IMAGE_ORDER,
];
```

---

## File: `components/HomePage/HeroSection/ImageScroll.module.css`

**Size:** 258 bytes

```css
.viewport {
  overflow: hidden;
  width: 100%;
  height: 100%;
}

.track {
  display: flex;
}

@media (min-width: 768px) {
  .track {
    flex-direction: column;
  }
}

@media (max-width: 767px) {
  .track {
    flex-direction: row;
  }
}
```

---

## File: `components/HomePage/HeroSection/ImageScroll.tsx`

**Size:** 4190 bytes

```tsx
"use client";

import { useEffect, useRef, useState } from "react";
import ImageSlot from "./ImageSlot";
import { HERO_IMAGE_ORDER, HeroSlot, SCROLL_DURATION, SCROLL_PAUSE } from "./imageData";

type CarouselState = {
  order: HeroSlot[];
  offset: 0 | 1;
  transition: boolean;
};

const sleep = (ms: number) =>
  new Promise<void>((resolve) => setTimeout(resolve, ms));

export default function ImageScroll() {
  const runningRef = useRef(true);
  const trackRef = useRef<HTMLDivElement>(null);

  const [isDesktop, setIsDesktop] = useState(false);
  const [stepSize, setStepSize] = useState(0);

  const [carousel, setCarousel] = useState<CarouselState>({
    order: HERO_IMAGE_ORDER,
    offset: 0,
    transition: true,
  });

  // Track media query for layout axis (row vs column)
  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");

    const updateMedia = () => {
      setIsDesktop(media.matches);
    };

    updateMedia();
    media.addEventListener("change", updateMedia);

    return () => media.removeEventListener("change", updateMedia);
  }, []);

  // Helper function to measure the exact current card step size
  const measureStep = () => {
    if (trackRef.current && trackRef.current.firstElementChild) {
      const firstCard = trackRef.current.firstElementChild as HTMLElement;
      const rect = firstCard.getBoundingClientRect();
      const gap = 24; // 24px matches gap-6
      const desktop = window.matchMedia("(min-width: 768px)").matches;



      return desktop ? rect.height + gap : rect.width + gap;
    }
    return 0;
  };

  useEffect(() => {
    runningRef.current = true;

    async function loop() {
      while (runningRef.current) {
        await sleep(SCROLL_PAUSE);
        if (!runningRef.current) return;

        // Measure actual pixel size right before triggering transform
        const currentStep = measureStep();
        if (currentStep > 0) {
          setStepSize(currentStep);
        }

        // 1. Slide to next card
        setCarousel((prev) => ({
          ...prev,
          offset: 1,
        }));

        await sleep(SCROLL_DURATION);
        if (!runningRef.current) return;

        // 2. Instantly rotate array & reset offset without transition
        setCarousel((prev) => {
          const rotated = [
            ...prev.order.slice(1),
            prev.order[0],
          ] as typeof HERO_IMAGE_ORDER;

          return {
            order: rotated,
            offset: 0,
            transition: false,
          };
        });

        // Force browser repaint step
        await sleep(30);
        if (!runningRef.current) return;

        // 3. Re-enable transitions for the next cycle
        setCarousel((prev) => ({
          ...prev,
          transition: true,
        }));
      }
    }

    loop();

    return () => {
      runningRef.current = false;
    };
  }, []);

  const transform = isDesktop
    ? `translate3d(0, -${carousel.offset * stepSize}px, 0)`
    : `translate3d(-${carousel.offset * stepSize}px, 0, 0)`;

  return (
    <div
      className="
      relative
      flex
      md:h-[calc(var(--card-height)*2+1.5rem)]
      lg:h-screen
      w-[calc(100%+2rem)]
      -mx-4
      items-center
      justify-center
      overflow-hidden
      md:mx-0
      md:w-full
    "
      style={
        {
          "--card-width": "clamp(18rem, 32vw, 26rem)",
          "--card-height": "clamp(23rem, 42vw, 34rem)",
        } as React.CSSProperties
      }
    >
      <div
        ref={trackRef}
        className="flex shrink-0 will-change-transform flex-row items-center gap-6 md:flex-col md:justify-center"
        style={{
          transform,
          transition: carousel.transition
            ? `transform ${SCROLL_DURATION}ms ease`
            : "none",
        }}
      >
        {carousel.order.map((creator) => (
          <ImageSlot
            key={creator.id}
            creator={creator.name}
            frameCount={creator.frameCount}
          />
        ))}
      </div>
    </div>
  );
}
```

---

## File: `components/HomePage/HeroSection/ImageSlot.tsx`

**Size:** 2136 bytes

```tsx
"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { FRAME_INTERVAL } from "./imageData";

interface ImageSlotProps {
  creator: string;
  frameCount: number;
  className?: string;
}

export default function ImageSlot({
  creator,
  frameCount,
}: ImageSlotProps) {
  const [loaded, setLoaded] = useState(false);

  const [frame, setFrame] = useState(1);

  const thumbnail = `/cards/${creator}.webp`;

  const currentFrame = useMemo(() => {
    return `/cards/${creator}/${creator}-${String(frame).padStart(2, "0")}.webp`;
  }, [creator, frame]);

  useEffect(() => {
    let cancelled = false;

    async function preload() {
      const promises = [];

      for (let i = 1; i <= frameCount; i++) {
        const image = new window.Image();

        image.src = `/cards/${creator}/${creator}-${String(i).padStart(2, "0")}.webp`;

        promises.push(
          new Promise<void>((resolve) => {
            image.onload = () => resolve();
            image.onerror = () => resolve();
          })
        );
      }

      await Promise.all(promises);

      if (!cancelled) {
        setLoaded(true);
      }
    }

    preload();

    return () => {
      cancelled = true;
    };
  }, [creator, frameCount]);

  useEffect(() => {
    if (!loaded) return;

    const interval = window.setInterval(() => {
      setFrame((prev) => (prev % frameCount) + 1);
    }, FRAME_INTERVAL);

    return () => clearInterval(interval);
  }, [loaded, frameCount]);

  return (
    <div
      className="
  relative

  h-[var(--card-height)]
  w-[var(--card-width)]

  shrink-0

  overflow-hidden
  rounded-[2rem]
"
    >
      {/* <Image
        src={loaded ? currentFrame : thumbnail}
        alt={creator}
        fill
        className="object-cover"
        draggable={false}
        priority
      /> */}

      <img
        src={loaded ? currentFrame : thumbnail}
        className="absolute inset-0 h-full w-full object-cover"
        draggable={false}
      />

    </div>
  );
}
```

---

## File: `components/HomePage/HeroSection/useImageScroll.ts`

**Size:** 1266 bytes

```ts
"use client";

import { useEffect, useState } from "react";
import {
  HERO_IMAGE_ORDER,
  SCROLL_DURATION,
  SCROLL_PAUSE,
} from "./imageData";

const LAST_INDEX = HERO_IMAGE_ORDER.length - 1;

export function useImageScroll() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    function scheduleNextMove() {
      timeout = setTimeout(() => {
        if (currentIndex === LAST_INDEX) {
          setCurrentIndex(LAST_INDEX + 1);

          setTimeout(() => {
            setTransitionEnabled(false);
            setCurrentIndex(0);

            requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                setTransitionEnabled(true);
                scheduleNextMove();
              });
            });
          }, SCROLL_DURATION);

          return;
        }

        setCurrentIndex((prev) => prev + 1);

        scheduleNextMove();
      }, SCROLL_DURATION + SCROLL_PAUSE);
    }

    scheduleNextMove();

    return () => clearTimeout(timeout);
  }, [currentIndex]);

  return {
    currentIndex,
    transitionEnabled,
  };
}
```

---

## File: `components/HomePage/HeroSection/useInfiniteTrack.ts`

**Size:** 1636 bytes

```ts
"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { SCROLL_DURATION, SCROLL_PAUSE } from "./imageData";

interface Options {
  axis: "x" | "y";
  step: number;
}

export function useInfiniteTrack({ axis, step }: Options) {
  const trackRef = useRef<HTMLDivElement>(null);

  const [paused, setPaused] = useState(false);

  const animate = useCallback(() => {
    const track = trackRef.current;

    if (!track || paused) return;

    track.style.transition = `transform ${SCROLL_DURATION}ms ease`;

    track.style.transform =
      axis === "y"
        ? `translate3d(0,-${step}px,0)`
        : `translate3d(-${step}px,0,0)`;

    const onEnd = () => {
      track.removeEventListener("transitionend", onEnd);

      const first = track.firstElementChild;

      if (!first) return;

      track.style.transition = "none";

      track.appendChild(first);

      track.style.transform = "translate3d(0,0,0)";

      requestAnimationFrame(() => {
        track.style.transition = "";
      });
    };

    track.addEventListener("transitionend", onEnd);
  }, [axis, paused, step]);

  useEffect(() => {
    if (paused) return;

    const timeout = setTimeout(function tick() {
      animate();

      const id = setTimeout(
        tick,
        SCROLL_DURATION + SCROLL_PAUSE
      );

      return () => clearTimeout(id);
    }, SCROLL_PAUSE);

    return () => clearTimeout(timeout);
  }, [animate, paused]);

  return {
    trackRef,
    paused,
    pause: () => setPaused(true),
    resume: () => setPaused(false),
  };
}
```

---

## File: `components/HomePage/Plans.tsx`

**Size:** 1998 bytes

```tsx
function PlansSection() {
  return (
    <section className="relative bg-marble py-24 text-shade md:py-40">
      <div
        className="
          mx-auto
          flex
          w-[90vw]
          max-w-376
          flex-col
          items-center
          gap-6
          text-center
          max-lg:w-[95vw]
          max-sm:w-[90vw]
          max-sm:max-w-none
          md:gap-8
        "
      >
        <h2
          className="
    max-w-[20ch]
    text-balance
    text-center
    text-4xl
    font-bold
    leading-[1.06]
    tracking-tight
    md:text-6xl
    text-current
  "
        >
          The fast, friendly and powerful link in bio tool.
        </h2>

        <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
          <a
            href="/s/pricing"
            className="
              inline-flex
              h-14
              items-center
              justify-center
              gap-2
              whitespace-nowrap
              rounded-pill
              bg-[#ebc4ef]
              px-7
              text-base
              font-medium
              text-shade
              transition-[background-color,transform,filter,box-shadow]
              duration-150
              ease-out
              hover:-translate-y-px
              hover:brightness-[1.02]
              active:scale-[0.97]
              active:duration-[80ms]
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-shade
              focus-visible:ring-offset-2
              disabled:pointer-events-none
              disabled:opacity-50
              motion-reduce:transition-none
              motion-reduce:hover:transform-none
              motion-reduce:active:transform-none
            "
          >
            Explore all plans
          </a>
        </div>
      </div>
    </section>
  );
}

export default PlansSection;
```

---

## File: `components/HomePage/ShareAnywhere.tsx`

**Size:** 1589 bytes

```tsx
import HeroAnimation from "../ShareAnywhere/HeroAnimation";
import { Button } from "../ui/button";

export default function ShareAnywhere() {
  return (
    <section className="bg-[#730013] py-20 md:py-32">
      <div className="mx-auto w-[90vw] max-w-[1504px] grid items-center gap-10 md:gap-12 lg:gap-16 md:grid-cols-2">

        {/* Text */}
        <div className="flex flex-col gap-6 items-center text-center md:items-start md:text-left">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#e9c0e9] text-balance">
            Share your Linktree anywhere you like!
          </h2>

          <p className="max-w-[60ch] text-white">
            Add your unique Linktree URL to all the platforms and places you
            find your audience. Then use your QR code to drive your offline
            traffic back to your link in bio.
          </p>

          {/* Desktop button */}
          <Button className="hidden md:flex rounded-full bg-[#e9c0e9] text-[#1e2330] h-15 min-w-[300px] font-semibold">
            Get started for free
          </Button>
        </div>

        {/* Animation */}
        <div className="w-full">
          <div className="w-full aspect-square">
            <HeroAnimation />
          </div>
        </div>

        {/* Mobile button */}
        <div className="flex justify-center md:hidden">
          <Button className="rounded-full bg-[#e9c0e9] text-[#1e2330] h-14 px-7 font-semibold">
            Get started for free
          </Button>
        </div>

      </div>
    </section>
  );
}
```

---

## File: `components/HomePage/ShareContent.tsx`

**Size:** 5509 bytes

```tsx
import Image from "next/image";
import Link from "next/link";

export default function SolutionsSection() {
  return (
    <section className="relative overflow-visible bg-marble py-0">
      <div
        className="
          mx-auto
          flex
          w-[90vw]
          max-w-376
          flex-col
          gap-4
          md:flex-row md:gap-4
          max-lg:w-[95vw]
          max-sm:w-[90vw]
          max-sm:max-w-none
        "
      >
        {/* LEFT COLUMN */}
        <div className="flex w-full flex-col justify-between gap-4 max-sm:gap-[4vw]">
          {/* Share Content */}
          <Link
            href="/solutions/share-content"
            className="
              flex h-full w-full flex-col items-start justify-end
              rounded-xl bg-[#ebc4ef] p-[48px_40px]
              text-shade no-underline
              gap-20 max-sm:gap-[5vw]
              transition-[transform,filter] duration-150 ease-out
              hover:-translate-y-[2px] hover:brightness-[1.02]
              motion-reduce:hover:transform-none
            "
          >
            <div className="w-full">
              <Image
                src="/ShareContent/all-your-things-1.avif"
                alt=""
                width={1184}
                height={343}
                className="block h-auto w-full"
                sizes="(max-width: 479px) 80vw, 40vw"
              />
            </div>

            <h3
              className="
                text-balance
                text-[5.25vw]
                leading-[1.3]
                tracking-[-0.01em]
                md:text-[28px]
                md:leading-[36.4px]
              "
              style={{
                fontWeight: 500,
                fontVariationSettings: '"wght" 560',
              }}
            >
              Share every type of content in limitless ways
            </h3>
          </Link>

          {/* Earn */}
          <Link
            href="/solutions/earn"
            className="
              flex h-full w-full flex-col items-start justify-end
              rounded-xl bg-chartreuse p-[48px_40px]
              text-shade no-underline
              gap-[58.18px] 3xl:gap-16
              max-lg:gap-[5.4vw]
              max-sm:gap-[6vw]
              transition-[transform,filter] duration-150 ease-out
              hover:-translate-y-[2px] hover:brightness-[1.02]
              motion-reduce:hover:transform-none
            "
          >
            <div
              className="
                mx-auto w-full
                max-w-[35vw]
                xl:max-w-[445.4px]
                2xl:max-w-[490px]
                3xl:max-w-[539px]
                max-lg:max-w-[49vw]
                max-sm:max-w-[65vw]
              "
            >
              <Image
                src="/Earn/products-1.avif"
                alt=""
                width={980}
                height={446}
                className="block h-auto w-full"
                sizes="(max-width: 479px) 65vw, 35vw"
              />
            </div>

            <h3
              className="
                text-balance
                text-[5.25vw]
                leading-[1.3]
                tracking-[-0.01em]
                md:text-[28px]
                md:leading-[36.4px]
              "
              style={{
                fontWeight: 500,
                fontVariationSettings: '"wght" 560',
              }}
            >
              Sell products, collect payments and make monetization simple
            </h3>
          </Link>
        </div>

        {/* RIGHT COLUMN */}
        <Link
          href="/solutions/grow-followers"
          className="
            flex h-full w-full flex-col items-start justify-end
            rounded-xl bg-[#111798] p-[48px_40px]
            text-white no-underline
            gap-[4.28vw]
            xl:gap-[54.5px]
            2xl:gap-[60px]
            max-lg:gap-[6.0776vw]
            max-sm:gap-[12vw]
            md:max-xl:h-auto md:max-xl:self-stretch
            transition-[transform,filter] duration-150 ease-out
            hover:-translate-y-[2px] hover:brightness-[1.02]
            motion-reduce:hover:transform-none
          "
        >
          <div
            className="
              mx-auto block w-full
              max-w-[34.85vw]
              xl:max-w-[443.6px]
              2xl:max-w-[488px]
              3xl:max-w-[536.8px]
              max-lg:max-w-[41.82vw]
              max-sm:relative max-sm:left-[-1vw] max-sm:max-w-[70vw]
            "
          >
            <Image
              src="/Grow/group1597882005.avif"
              alt=""
              width={934}
              height={1283}
              className="block h-auto w-full"
              sizes="(max-width: 479px) 70vw, 35vw"
            />
          </div>

          <h3
            className="
              text-balance
              text-[5.25vw]
              leading-[1.3]
              tracking-[-0.01em]
              md:text-[28px]
              md:leading-[36.4px]
            "
            style={{
              fontWeight: 500,
              fontVariationSettings: '"wght" 560',
            }}
          >
            Grow, own and engage your audience across all of your channels
          </h3>
        </Link>
      </div>
    </section>
  );
}
```

---

## File: `components/HomePage/Testimonials.tsx`

**Size:** 6588 bytes

```tsx
"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

const testimonials = [
  {
    name: "Riley Lemon",
    role: "Youtuber, Content Creator",
    image: "/Testimonials/riley-lemon.avif",
    quote:
      "Linktree simplifies the process for creators to share multiple parts of themselves in one inclusive link.",
  },
  {
    name: "Patti Chimkire",
    role: "Founder and Pastry Chef, Mali Bakes",
    image: "/Testimonials/patti-chimkire.avif",
    quote:
      "Linktree helps my customers get where they need to go. It’s fast and easy.",
  },
  {
    name: "Luke Kidgell",
    role: "Comedian",
    image: "/Testimonials/luke-kidgell.avif",
    quote:
      "I use Linktree’s analytics to better understand my audience and what converts them.",
  },
  {
    name: "Rise Utama",
    role: "TV Reporter and Producer",
    image: "/Testimonials/rise-utama.avif",
    quote:
      "My Linktree resume stood out from the rest, securing me my first full-time job as a TV reporter!",
  },
  {
    name: "David Coleman",
    role: "Founder, Mechanicallyincleyend",
    image: "/Testimonials/david-coleman.avif",
    quote:
      "With Linktree, I can definitely see the monetization of my following becoming a full-time thing.",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const previous = () => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const testimonial = testimonials[current];

  return (
    <section className="relative bg-marble py-20 pt-12 text-shade md:py-32 md:pt-16">
      <div
        className="
          mx-auto
          flex
          w-[90vw]
          max-w-[1504px]
          flex-col
          gap-10
          max-lg:w-[95vw]
          max-sm:w-[90vw]
          max-sm:max-w-none
          md:gap-14
        "
      >
        {/* Fixed-height carousel viewport */}
        <div
          className="
            relative
            flex
            min-h-100
            items-center
            overflow-hidden
            md:min-h-100
            xl:min-h-275
          "
        >
          <figure
            className="
              mx-auto
              flex
              w-full
              flex-col
              items-center
              gap-[4vw]
              xl:gap-[58.18px]
              2xl:gap-16
              3xl:gap-[50px]
              max-lg:gap-[5.484vw]
              max-sm:gap-[13.7vw]
            "
          >
            {/* Image */}
            <div
              className="
                mx-auto
                overflow-hidden
                rounded-[7.425vw]
                w-[59.28vw]
                max-w-[992px]
                xl:w-[754.5px]
                xl:max-w-[754.5px]
                2xl:w-[830px]
                2xl:max-w-[830px]
                3xl:w-[1092px]
                3xl:max-w-[1092px]
                max-sm:w-full
                max-sm:max-w-[90vw]
              "
            >
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={1280}
                height={647}
                className="block h-auto w-full"
                sizes="
                  (min-width: 1440px) 830px,
                  (min-width: 1280px) 754.5px,
                  59.28vw
                "
              />
            </div>

            {/* Quote */}
            <div
              className="
                mx-auto
                flex
                w-[78vw]
                max-w-[992.727px]
                flex-col
                items-center
                text-center
                2xl:max-w-[992.7px]
                3xl:max-w-[1092px]
                max-sm:w-[85vw]
              "
            >
              <blockquote>
                <p
                  className="
                    text-balance
                    text-[clamp(2rem,4vw,3.5rem)]
                    font-bold
                    leading-[1.06]
                    tracking-tight
                  "
                >
                  “{testimonial.quote}”
                </p>
              </blockquote>

              <figcaption className="mt-8 flex flex-col items-center gap-1">
                <p className="text-body text-gray-500">
                  {testimonial.name},
                </p>

                <p className="text-body text-gray-500">
                  {testimonial.role}
                </p>
              </figcaption>
            </div>
          </figure>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-2">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={previous}
            className="
              inline-flex
              size-12
              items-center
              justify-center
              rounded-sm
              border
              border-current
              bg-transparent
              text-current
              transition-[opacity,transform]
              hover:-translate-y-px
              hover:opacity-80
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-current
              focus-visible:ring-offset-2
            "
          >
            <ArrowRight className="size-5 rotate-180" />
          </button>

          <button
            type="button"
            aria-label="Next testimonial"
            onClick={next}
            className="
              inline-flex
              size-12
              items-center
              justify-center
              rounded-sm
              border
              border-current
              bg-transparent
              text-current
              transition-[opacity,transform]
              hover:-translate-y-px
              hover:opacity-80
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-current
              focus-visible:ring-offset-2
            "
          >
            <ArrowRight className="size-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
```

---

## File: `components/HomePage/TrustedBy/TbCards.tsx`

**Size:** 1747 bytes

```tsx
import Image from 'next/image';

interface TbCardsProps {
  card: {
    id: number;
    name: string;
    tag: string;
    color: string;
    type: string;
    image: string;
  };
}

const TbCards = ({ card }: TbCardsProps) => {
  return (
    <div
      className={`
          ${card.id % 2 !== 0 ? 'h-80 w-80' : 'h-80 w-120' }
          perspective-none
          group
          cursor-pointer
          shrink-0
        `}
    >
      {/* Flipper Container */}
      <div className="relative h-full w-full rounded-[4rem] shadow-lg transition-transform duration-700 transform-3d group-hover:transform-[rotateY(180deg)]">

        {/* FRONT SIDE (Image Card) */}
        <div className="absolute inset-0 h-full w-full rounded-[4rem] backface-hidden overflow-hidden">
          <Image
            alt={card.name || 'Card image'}
            src={card.image}
            fill
            className="h-full w-full object-cover"
            sizes="(max-width: 768px) 320px, 480px"
            loading="eager"
          />
        </div>

        {/* BACK SIDE (Solid Background + Creator Tag) */}
        <div
          style={{ backgroundColor: card.color || '#0f172a' }}
          className="absolute inset-0 h-full w-full rounded-[4rem] backface-hidden transform-[rotateY(180deg)] flex flex-col items-center justify-center p-6 text-white text-center"
        >
          <span className="text-xs uppercase tracking-widest opacity-75 font-semibold">
            Creator
          </span>
          <h3 className="text-2xl font-bold mt-1">{card.tag}</h3>
          <p className="text-sm mt-2 opacity-90">{card.name}</p>
        </div>

      </div>
    </div>
  );
};

export default TbCards;
```

---

## File: `components/HomePage/TrustedBy/TbStrip.tsx`

**Size:** 1494 bytes

```tsx
import React from 'react'
import data from '@/data/TrustedBy'
import TbCards from './TbCards';

const TbStrip = () => {
    return (
        <>
            <style>{`
                @keyframes scrollforever {
                    from {
                        transform: translateX(0%);
                    }
                    to {
                        transform: translateX(-50%);
                    }
                }

                .animate-marquee {
                    display: flex;
                    width: max-content;
                    animation: scrollforever 25s linear infinite;
                }

                .animate-marquee:hover {
                    animation-play-state: paused;
                }
            `}</style>

            <div className="w-full overflow-visible">
                <div className="animate-marquee gap-4 md:gap-6 px-6 md:px-12">
                    <div className="flex gap-4 md:gap-6 shrink-0">
                        {data.map((card, i) => (
                            <TbCards key={i} card={card} />
                        ))}
                    </div>

                    <div className="flex gap-4 md:gap-6 shrink-0">
                        {data.map((card, i) => (
                            <TbCards key={`copy-${i}`} card={card} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default TbStrip
```

---

## File: `components/HomePage/TrustedBy/TextFlipper.tsx`

**Size:** 2306 bytes

```tsx
import React from 'react';

const words = [
  "Retailers",
  "Products",
  "Wellness leaders",
  "Musicians",
  "band",
  "Podcaster",
  "Fashion designer",
  "Merch seller",
  "Writers",
  "Djs",
  "Indie artist",
  "Recording studio",
  "Event spaces",
  "Live events",
  "Brand collaborator",
  "Tastemaker",
  "Global artist",
  "Influencer",
  "Athletes",
  "Models",
  "monetizer",
  "Health educators",
  "Streamers",
  "Fitness coach",
  "Touring company",
  "Manager",
  "Label",
  "Publisher",
  "Small businesses",
  "Producers",
];

// 1. Duplicate the first word at the end for a seamless infinite loop
const extendedWords = [...words, words[0]];
const ITEM_HEIGHT = 72; // must match h-[72px]
const TOTAL_WORDS = words.length;

// 2. Programmatically generate pure CSS keyframes with hold & slide steps
const keyframesCss = `
  @keyframes stepFlip {
    ${words
    .map((_, i) => {
      const startHold = (i / TOTAL_WORDS) * 100;
      const endHold = ((i + 0.9) / TOTAL_WORDS) * 100;

      return `
          ${startHold}% {
            transform: translateY(calc(-${i} * var(--item-h)));
          }
          ${endHold}% {
            transform: translateY(calc(-${i} * var(--item-h)));
          }
        `;
    })
    .join("")}

    100% {
      transform: translateY(calc(-${TOTAL_WORDS} * var(--item-h)));
    }
  }

  .animate-step-flip {
    animation: stepFlip ${TOTAL_WORDS}s cubic-bezier(0.4, 0, 0.2, 1) infinite;
    will-change: transform;
  }
`;

const TextFlipper = () => {

  return (
    <>
      <style>{keyframesCss}</style>

      <div
        className="relative w-full overflow-hidden [--item-h:clamp(48px,5.2vw,72px)] h-[var(--item-h)]"
      >
        <div className="absolute inset-0 flex justify-center">
          <div className="animate-step-flip flex flex-col">
            {extendedWords.map((word, i) => (
              <span
                key={i}
                className="h-[var(--item-h)] flex items-center justify-center whitespace-nowrap text-h1 font-bold leading-none text-[#2665D6]"
              >
                {word}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TextFlipper;
```

---

## File: `components/HomePage/TrustedBy/TrustedBy.tsx`

**Size:** 738 bytes

```tsx
import TbStrip from "./TbStrip";
import TextFlipper from "./TextFlipper";

export default function TrustedBy() {
  return (
    <section className="bg-prefooter overflow-hidden py-20 md:py-32 flex flex-col gap-8 md:gap-12">
      <div className="mx-auto w-[90vw] max-w-[1504px]">
        <div className="mx-auto max-w-[1280px] flex flex-col items-center gap-6 text-center">
          <div className="flex flex-col items-center">
            <h2 className="text-h1 font-bold leading-[1.06] tracking-tight text-[#1F2330] text-balance">
              The only link in bio trusted by 70M+
            </h2>

            <TextFlipper />
          </div>
        </div>
      </div>

      <TbStrip />
    </section>
  );
}
```

---

## File: `components/navbar/DesktopActions.tsx`

**Size:** 485 bytes

```tsx
import { Button } from "@/components/ui/button";

export default function DesktopActions() {
  return (
    <div className="hidden items-center gap-3 lg:flex">
      <Button
        variant="secondary"
        size="lg"
        className="rounded-md px-4 text-black"
      >
        Log in
      </Button>

      <Button
        variant="outline"
        size="lg"
        className="rounded-md px-4"
      >
        Sign up free
      </Button>
    </div>
  );
}
```

---

## File: `components/navbar/DesktopLinks.tsx`

**Size:** 1168 bytes

```tsx
"use client";

import { NAV_LINKS } from "./NavLinks";
import { Button } from "@/components/ui/button";

interface DesktopLinksProps {
  onOpenMenu: (menu: "products" | "learn") => void;
  onKeepOpen: () => void;
  onClose: () => void;
}

export default function DesktopLinks({
  onOpenMenu,
  onKeepOpen,
  onClose,
}: DesktopLinksProps) {
  return (
    <div
      className="hidden text-black items-center gap-1 lg:flex"
      onMouseEnter={onKeepOpen}
      onMouseLeave={onClose}
    >
      {NAV_LINKS.map((link) => {
          if (!("menu" in link)) {
            return (
              <Button
                variant={"ghost"}
                key={link.label}
                className="text-sm font-medium"
              >
                {link.label}
              </Button>
            );
          }

        return (
            <Button
              variant={"ghost"}
              key={link.label}
              className="text-sm font-medium"
              onMouseEnter={() => onOpenMenu(link.menu)}
            >
              {link.label}
            </Button>
          );
      })}
    </div>
  );
}
```

---

## File: `components/navbar/dropdown/CategoryList.tsx`

**Size:** 1873 bytes

```tsx
"use client";

import { Button } from "@/components/ui/button";
import { Category } from "@/types/navigation";
import Icon from "./icons";
import { LuChevronRight } from "react-icons/lu";

interface CategoryListProps {
  categories: Category[];
  activeIndex: number;
  onHover: (index: number) => void;
}

export default function CategoryList({
  categories,
  activeIndex,
  onHover,
}: CategoryListProps) {
  return (
    <div className="border-r border-gray-300/50 bg-[#ffffff] p-6">
      <div className="space-y-2">
        {categories.map((category, index) => (
          <Button
            key={category.id}
            onMouseEnter={() => onHover(index)}
            className={`
              justify-start
              flex
              w-full
              rounded-xl
              px-4
              py-6
              text-left
              transition-colors
              ${activeIndex === index
                ? "bg-gray-200 shadow-sm"
                : "hover:bg-white/60"
              }
            `}
          >
            <span
              className="
              text-lg
                flex items-center justify-between
                w-full
              "
            >
              <span
                className="
                    flex items-center gap-3
                  "
              >
                {/* <span> */}
                <Icon
                  name={category.icon}
                  color="black"
                  className="size-6"
                />
                {/* </span> */}
                <span>
                  {category.title}
                </span>
              </span>
              <LuChevronRight size={18} className="text-[#8e8e93]" />
            </span>
          </Button>
        ))}
      </div>
    </div>
  );
}
```

---

## File: `components/navbar/dropdown/ContentPanel.tsx`

**Size:** 2034 bytes

```tsx
import { Category } from "@/types/navigation";
import Image from 'next/image'

interface ContentPanelProps {
  category: Category;
  // className: string
}

export default function ContentPanel({
  category,
  // className
}: ContentPanelProps) {
  return (
    <div className="flex flex-col border-r p-8">
   {/* <div className={className + ' ' + "flex flex-col border-r p-8"}> */}
      <div className="flex flex-col gap-2">
        {category.subItems.map((item) => (
          <button
            key={item.title}
            className="
              group
              flex
              flex-col
              text-left
              rounded-2xl
              py-3
              px-4
              transition-all
              duration-200
              hover:bg-neutral-100
            "
          >

            <h3 className="font-semibold">
              {item.title}
            </h3>

            <p className="mt-1 text-sm text-neutral-500">
              {item.description}
            </p>
          </button>
        ))}
      </div>

      {category.footer && (
        <div className="pt-6 px-4 mt-8">
          <h4 className="font-semibold">
            {category.footer.title}
          </h4>

          <p className="mt-2 text-sm text-neutral-500">
            {category.footer.description}
          </p>

          <div
            className="flex flex-row flex-wrap gap-3 pt-4"
          >
            {category.footer.socialIcons.map((icon) => (
              <div
                key={icon.platform}
                className="bg-gray-300/40 p-3 rounded-xl"
              >
                <Image
                  alt=""
                  src={icon.icon}
                  // src={"/navigation/socials/instagram.svg"}
                  width={16}
                  height={16}
                />
                {/* {icon.icon} */}
              </div>
            ))}
          </div>

        </div>
      )}
    </div>
  );
}
```

---

## File: `components/navbar/dropdown/Dropdown.tsx`

**Size:** 1965 bytes

```tsx
"use client";

import { Menu } from "@/types/navigation";
import CategoryList from "./CategoryList";
import ContentPanel from "./ContentPanel";
import FeaturedPanel from "./FeaturedPanel";

interface DropdownProps {
    menu: Menu;
    open: boolean;
    activeCategory: number;
    setActiveCategory: (index: number) => void;

    onKeepOpen: () => void;
    onClose: () => void;
}

export default function Dropdown({
    menu,
    open,
    activeCategory,
    setActiveCategory,
    onKeepOpen,
    onClose,
}: DropdownProps) {

    const safeIndex = Math.min(
        activeCategory,
        menu.categories.length - 1
    );

    const category = menu.categories[safeIndex];

    return (
        <div
            onMouseEnter={onKeepOpen}
            onMouseLeave={onClose}
            className={`
                absolute
                left-1/2
                w-[92%]
                h-fit
                -translate-x-1/2
                top-[calc(100%+20px)]
                max-w-7xl
                overflow-hidden
                rounded-4xl
                bg-white
                text-black
                shadow-2xl
                transition-all
                duration-200
                ${open
                    ? "pointer-events-auto translate-y-0 opacity-100"
                    : "pointer-events-none -translate-y-2 opacity-0"
                }
            `}
        >
            <div
                className="
                    grid
                    grid-cols-[31%_1fr_35%]
                "
            >
                <CategoryList
                    categories={menu.categories}
                    activeIndex={safeIndex}
                    onHover={setActiveCategory}
                />

                <ContentPanel category={category} />

                <FeaturedPanel category={category} />
            </div>
        </div>
    );
}
```

---

## File: `components/navbar/dropdown/DropdownItem.tsx`

**Size:** 0 bytes

```tsx

```

---

## File: `components/navbar/dropdown/FeaturedPanel.tsx`

**Size:** 851 bytes

```tsx
import { Category } from "@/types/navigation";
import Image from 'next/image'

interface FeaturedPanelProps {
  category: Category;
}

export default function FeaturedPanel({
  category,
}: FeaturedPanelProps) {
  const featured = category.featured;

  return (
    <div className="flex flex-col p-8">
      <p className="text-sm font-medium text-neutral-500">
        {featured.sectionTitle}
      </p>

      <div className="mt-4 h-52 rounded-2xl bg-neutral-200">
        <Image
          src={featured.image}
          width={640}
          height={328}
          alt=""
        />
      </div>

      <h2 className="mt-6 text-xl font-semibold pt-2">
        {featured.title}
      </h2>

      <p className="mt-3 text-sm leading-6 text-neutral-500">
        {featured.description}
      </p>

    </div>
  );
}
```

---

## File: `components/navbar/dropdown/icons.tsx`

**Size:** 1113 bytes

```tsx
// DynamicIcon.jsx
import React from 'react';
import { type IconType } from 'react-icons'
import {
    LuLayoutGrid,
    LuLightbulb,
    LuLink,
    LuShare2,
    LuUsers,
    LuCircleDollarSign
} from 'react-icons/lu';
import { BsFillBarChartLineFill } from "react-icons/bs";

// 1. Map string names to icon components
const ICON_MAP: Record<string, IconType> = {
    grid: LuLayoutGrid,
    lightbulb: LuLightbulb,
    link: LuLink,
    share: LuShare2,
    users: LuUsers,
    dollar: LuCircleDollarSign,
    chart: BsFillBarChartLineFill,
};

export default function Icon({
    name,
    color = 'currentColor',
    className = '',
    ...props }: {
        name: string,
        color: string,
        className: string
    }) {
    // 2. Lookup the component from the map
    const IconComponent = ICON_MAP[name];

    // 3. Fallback if an invalid name is passed
    if (!IconComponent) {
        console.warn(`Icon "${name}" does not exist in ICON_MAP.`);
        return null;
    }

    return <IconComponent color={color} className={className} {...props} />;
}
```

---

## File: `components/navbar/hooks/useNavbarScroll.ts`

**Size:** 1344 bytes

```ts
"use client";

import { useEffect, useRef, useState } from "react";

const HIDE_THRESHOLD = 60;
const SHOW_THRESHOLD = 20;

export function useNavbarScroll() {
  const [visible, setVisible] = useState(true);

  const lastScrollY = useRef(0);
  const lastTogglePoint = useRef(0);

  useEffect(() => {
    function onScroll() {
      const current = window.scrollY;

      // Always show near the top
      if (current <= 20) {
        setVisible(true);
        lastTogglePoint.current = current;
        lastScrollY.current = current;
        return;
      }

      const scrollingDown = current > lastScrollY.current;
      const distance = Math.abs(current - lastTogglePoint.current);

      if (
        scrollingDown &&
        visible &&
        distance > HIDE_THRESHOLD
      ) {
        setVisible(false);
        lastTogglePoint.current = current;
      }

      if (
        !scrollingDown &&
        !visible &&
        distance > SHOW_THRESHOLD
      ) {
        setVisible(true);
        lastTogglePoint.current = current;
      }

      lastScrollY.current = current;
    }

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [visible]);

  return visible;
}
```

---

## File: `components/navbar/index.ts`

**Size:** 0 bytes

```ts

```

---

## File: `components/navbar/Logo.tsx`

**Size:** 835 bytes

```tsx
import Image from "next/image";
import Link from "next/link";

export default function Logo() {
    return (
        <div className="relative flex h-8 w-36 items-center justify-start max-sm:h-10 max-sm:w-10">
            <Link href="/" className="relative block h-5 w-full text-xl font-bold">
                <Image
                    src={"/linktree-icon-svg.svg"}
                    alt="LOGO"
                    fill
                    className="object-contain max-sm:hidden"
                    priority
                />
                <Image
                    src={"/linktree-small-svg.svg"}
                    alt="LOGO"
                    fill
                    className="object-contain sm:hidden"
                    priority
                />
            </Link>
        </div>
    );
}
```

---

## File: `components/navbar/mobile/menus/LearnMenu.tsx`

**Size:** 136 bytes

```tsx
import React from 'react'

const LearnMenu = () => {
    return (
        <div>LearnMenu</div>
    )
}

export default LearnMenu
```

---

## File: `components/navbar/mobile/menus/MainMenu.tsx`

**Size:** 996 bytes

```tsx
"use client";

import { Dispatch, SetStateAction } from "react";

import { NAV_LINKS } from "../../NavLinks";
import MobileMenuItem from "../MobileMenuItem";
import { MobileScreen } from "../types";

interface MainMenuProps {
  setScreen: Dispatch<SetStateAction<MobileScreen>>;
}

export default function MainMenu({
  setScreen,
}: MainMenuProps) {
  return (
    <div className="py-4">
      {NAV_LINKS.map((link) => (
        <MobileMenuItem
          key={link.label}
          label={link.label}
          hasArrow={"menu" in link}
          onClick={() => {
            if ("menu" in link) {
              if (link.menu === "products") {
                setScreen({ type: "products" });
              } else {
                setScreen({ type: "learn" });
              }

              return;
            }

            // TODO: Navigate to actual pages later
            console.log(link.label);
          }}
        />
      ))}
    </div>
  );
}
```

---

## File: `components/navbar/mobile/menus/ProductsMenu.tsx`

**Size:** 137 bytes

```tsx
import React from 'react'

const ProductsMenu = () => {
  return (
    <div>ProductsMenu</div>
  )
}

export default ProductsMenu
```

---

## File: `components/navbar/mobile/MobileAccordionContent.tsx`

**Size:** 1297 bytes

```tsx
"use client";

import { ChevronRight } from "lucide-react";

import Icon from "../dropdown/icons";

import { Category } from "@/types/navigation";

interface MobileAccordionContentProps {
  categories: Category[];
  onCategoryClick: (category: Category) => void;
}

export default function MobileAccordionContent({
  categories,
  onCategoryClick,
}: MobileAccordionContentProps) {
  return (
    <div className="px-2 pb-2">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryClick(category)}
          className="
            flex
            h-12
            w-full
            items-center
            justify-between
            rounded-md
            px-4
            text-left
            transition-colors
            hover:bg-neutral-100
          "
        >
          <div className="flex items-center gap-3">
            <Icon
              name={category.icon}
              color="black"
              className="size-4"
            />

            <span className="text-sm font-medium">
              {category.title}
            </span>
          </div>

          <ChevronRight className="size-4 text-neutral-400" />
        </button>
      ))}
    </div>
  );
}
```

---

## File: `components/navbar/mobile/MobileAccordionItem.tsx`

**Size:** 1004 bytes

```tsx
"use client";

import { ChevronDown } from "lucide-react";

interface MobileAccordionItemProps {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children?: React.ReactNode;
}

export default function MobileAccordionItem({
  title,
  isOpen,
  onToggle,
  children,
}: MobileAccordionItemProps) {
  return (
    <div className="border-b border-neutral-200">
      <button
        onClick={onToggle}
        className="
          flex
          h-16
          w-full
          items-center
          justify-between
          px-6
          text-left
          text-xl
          font-medium
          text-black
        "
      >
        <span>{title}</span>

        <ChevronDown
          className={`size-5 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="pb-2">
          {children}
        </div>
      )}
    </div>
  );
}

```

---

## File: `components/navbar/mobile/MobileCategoryScreen.tsx`

**Size:** 1329 bytes

```tsx
"use client";

import { ChevronLeft } from "lucide-react";

import { Button } from "@/components/ui/button";

import { Category } from "@/types/navigation";
import ContentPanel from "../dropdown/ContentPanel";
import FeaturedPanel from "../dropdown/FeaturedPanel";

interface MobileCategoryScreenProps {
    category: Category;
    onBack: () => void;
}

export default function MobileCategoryScreen({
    category,
    onBack,
}: MobileCategoryScreenProps) {
    return (
        <div className="flex h-full flex-col">
            <header className="flex h-16 items-center gap-3 px-4">
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={onBack}
                >
                    <ChevronLeft className="size-8 text-black rounded-full p-1" />
                </Button>

                <h2 className="text-lg text-black font-semibold">
                    {category.title}
                </h2>
            </header>

            <div className="overflow-y-auto text-black">
                {/* <ContentPanel category={category} className="mb-1 mb-black" /> */}
                <ContentPanel category={category} />

                <FeaturedPanel category={category} />
            </div>
        </div>
    );
}
```

---

## File: `components/navbar/mobile/MobileMenu.tsx`

**Size:** 1765 bytes

```tsx
"use client";

import { Dispatch, SetStateAction } from "react";

import MobileAccordionItem from "./MobileAccordionItem";
import MobileAccordionContent from "./MobileAccordionContent";
import MobileMenuItem from "./MobileMenuItem";

import { productsMenu, learnMenu } from "@/data/navigation";
import { Category } from "@/types/navigation";

interface MobileMenuProps {
  openSection: "products" | "learn" | null;
  setOpenSection: Dispatch<
    SetStateAction<"products" | "learn" | null>
  >;
  setActiveCategory: Dispatch<
    SetStateAction<Category | null>
  >;
}

export default function MobileMenu({
  openSection,
  setOpenSection,
  setActiveCategory,
}: MobileMenuProps) {
  return (
    <div>
      <MobileAccordionItem
        title="Products"
        isOpen={openSection === "products"}
        onToggle={() =>
          setOpenSection(
            openSection === "products"
              ? null
              : "products"
          )
        }
      >
        <MobileAccordionContent
          categories={productsMenu.categories}
          onCategoryClick={setActiveCategory}
        />
      </MobileAccordionItem>

      <MobileMenuItem label="Templates" />

      <MobileMenuItem label="Marketplace" />

      <MobileAccordionItem
        title="Learn"
        isOpen={openSection === "learn"}
        onToggle={() =>
          setOpenSection(
            openSection === "learn"
              ? null
              : "learn"
          )
        }
      >
        <MobileAccordionContent
          categories={learnMenu.categories}
          onCategoryClick={setActiveCategory}
        />
      </MobileAccordionItem>

      <MobileMenuItem label="Pricing" />
    </div>
  );
}
```

---

## File: `components/navbar/mobile/MobileMenuItem.tsx`

**Size:** 817 bytes

```tsx
"use client";

import { ChevronRight } from "lucide-react";

interface MobileMenuItemProps {
    label: string;
    hasArrow?: boolean;
    onClick?: () => void;
}

export default function MobileMenuItem({
    label,
    hasArrow = false,
    onClick,
}: MobileMenuItemProps) {
    return (
        <button
            onClick={onClick}
            className="
        flex
        h-16
        w-full
        items-center
        justify-between
        px-6
        text-left
        text-xl
        font-medium
        text-black
        transition-colors
        hover:bg-neutral-100
      "
        >
            <span>{label}</span>

            {hasArrow && (
                <ChevronRight className="size-5 text-neutral-500" />
            )}
        </button>
    );
}
```

---

## File: `components/navbar/mobile/MobileNav.tsx`

**Size:** 2153 bytes

```tsx
"use client";

import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import MobileSheetHeader from "./MobileSheetHeader";
import { useState } from "react";
import { Category } from "@/types/navigation";
import MobileMenu from "./MobileMenu";
import MobileCategoryScreen from "./MobileCategoryScreen";


export default function MobileNav() {

  const [openSection, setOpenSection] = useState<
    "products" | "learn" | null
  >(null);

  const [activeCategory, setActiveCategory] =
    useState<Category | null>(null);

  return (
    <Sheet>
      <div className="flex items-center gap-2 lg:hidden">
        <Button
          variant="secondary"
          size="lg"
          className="rounded-full text-black"
        >
          Log in
        </Button>

        <Button
          variant="outline"
          size="lg"
          className="rounded-full"
        >
          Sign up
        </Button>

        <SheetTrigger
          render={
            <Button
              variant="secondary"
              size="icon"
              className="rounded-full text-black"
            />
          }
        >
          <Menu className="size-5" />
        </SheetTrigger>
      </div>

      <SheetContent
        side="right"
        showCloseButton={false}
        className="
          w-screen!
          max-w-none!
          border-none
          rounded-none
          bg-white
          p-0
        "
      >
        <MobileSheetHeader />

        <main className="flex-1 overflow-y-auto text-black">
          {activeCategory ? (
            <MobileCategoryScreen
              category={activeCategory}
              onBack={() => setActiveCategory(null)}
            />
          ) : (
            <MobileMenu
              openSection={openSection}
              setOpenSection={setOpenSection}
              setActiveCategory={setActiveCategory}
            />
          )}
        </main>
      </SheetContent>
    </Sheet>
  );
}
```

---

## File: `components/navbar/mobile/MobileSheetHeader.tsx`

**Size:** 1322 bytes

```tsx
"use client";

import Logo from "../Logo";

import { Button } from "@/components/ui/button";
import { SheetClose } from "@/components/ui/sheet";

import { X } from "lucide-react";

export default function MobileSheetHeader() {
    return (
        <header className="flex h-16 items-center justify-between border-b px-4">
            <Logo />

            <div className="flex items-center gap-2">
                <Button
                    variant="secondary"
                    size="sm"
                    className="rounded-full text-black"
                >
                    Log in
                </Button>

                <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full"
                >
                    Sign up free
                </Button>

                <SheetClose
                    render={
                        <Button
                            variant="secondary"
                            size="icon"
                            className="rounded-full text-black bg-chartreuse"
                        />
                    }
                >
                    <X className="size-5" />
                </SheetClose>
            </div>
        </header>
    );
}
```

---

## File: `components/navbar/mobile/types.ts`

**Size:** 221 bytes

```ts
import { Category } from "@/types/navigation";

export type OpenSection =
  | "products"
  | "learn"
  | null;

export interface MobileMenuState {
  openSection: OpenSection;
  activeCategory: Category | null;
}
```

---

## File: `components/navbar/Navbar.tsx`

**Size:** 2702 bytes

```tsx
"use client"

import Logo from "./Logo";
// import DesktopNav from "./DesktopNav";
import MobileNav from "./mobile/MobileNav";
import { useNavbarScroll } from "./hooks/useNavbarScroll";
import { useRef, useState } from "react";

import Dropdown from "./dropdown/Dropdown";

import {
  productsMenu,
  learnMenu,
} from "@/data/navigation";
import DesktopActions from "./DesktopActions";
import DesktopLinks from "./DesktopLinks";

// import DesktopNavigation from "./DesktopNavigation";

export default function Navbar() {

  const visible = useNavbarScroll()

  const [openMenu, setOpenMenu] = useState<"products" | "learn" | null>(null);
  const [activeCategory, setActiveCategory] = useState(0);

  const closeTimeout = useRef<NodeJS.Timeout | null>(null);

  const currentMenu =
    openMenu === "products"
      ? productsMenu
      : learnMenu;

  const openMenuHandler = (menu: "products" | "learn") => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
    }

    setOpenMenu(menu);
    setActiveCategory(0);
  };

  const keepOpen = () => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
    }
  };

  const scheduleClose = () => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
    }

    closeTimeout.current = setTimeout(() => {
      setOpenMenu(null);
    }, 120);
  };

  return (
    <header
      className={`
        fixed
        inset-x-0
        top-8
        z-50
        flex
        justify-center
        px-6
        xl:px-8
        transition-transform
        duration-300
        ease-out
        ${visible ? "translate-y-0" : "-translate-y-32"}
      `}
    >
      <nav
        className="
          relative
          flex
          h-12
          w-full
          max-w-392
          mx-6
          items-center
          justify-between
          rounded-full
          border
          bg-white/90
          px-6
          backdrop-blur-md
        "
      >

        {/* <DesktopNavigation /> */}

        <div className="flex items-center gap-10">
          <Logo />

          <DesktopLinks
            onOpenMenu={openMenuHandler}
            onKeepOpen={keepOpen}
            onClose={scheduleClose}
          />
        </div>

        <Dropdown
          menu={currentMenu}
          open={openMenu !== null}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          onKeepOpen={keepOpen}
          onClose={scheduleClose}
        />

        <DesktopActions />

        <MobileNav />

      </nav>
    </header>
  );
}
```

---

## File: `components/navbar/NavLinks.ts`

**Size:** 305 bytes

```ts
export const NAV_LINKS = [
    {
        label: "Products",
        menu: "products",
    },
    {
        label: "Templates",
    },
    {
        label: "Marketplace",
    },
    {
        label: "Learn",
        menu: "learn",
    },
    {
        label: "Pricing",
    },
] as const;
```

---

## File: `components/ShareAnywhere/HeroAnimation.tsx`

**Size:** 545 bytes

```tsx
'use client';

import { useRive, Layout, Fit, Alignment } from '@rive-app/react-canvas';

export default function HeroAnimation() {
  const { RiveComponent } = useRive({
    src: '/ShareAnywhere/homepage_image_3.riv', // Path relative to public folder
    autoplay: true,
    layout: new Layout({
      fit: Fit.Contain,      // Options: Cover, Contain, Fill, FitWidth, FitHeight
      alignment: Alignment.Center,
    }),
  });

  return (
    <div className="w-full h-100 relative">
      <RiveComponent />
    </div>
  );
}
```

---

## File: `components/ui/accordion.tsx`

**Size:** 2598 bytes

```tsx
import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion"

import { cn } from "@/lib/utils"
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react"

function Accordion({ className, ...props }: AccordionPrimitive.Root.Props) {
  return (
    <AccordionPrimitive.Root
      data-slot="accordion"
      className={cn("flex w-full flex-col", className)}
      {...props}
    />
  )
}

function AccordionItem({ className, ...props }: AccordionPrimitive.Item.Props) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("not-last:border-b", className)}
      {...props}
    />
  )
}

function AccordionTrigger({
  className,
  children,
  ...props
}: AccordionPrimitive.Trigger.Props) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "group/accordion-trigger relative flex flex-1 items-start justify-between rounded-lg border border-transparent py-2.5 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:after:border-ring aria-disabled:pointer-events-none aria-disabled:opacity-50 **:data-[slot=accordion-trigger-icon]:ml-auto **:data-[slot=accordion-trigger-icon]:size-4 **:data-[slot=accordion-trigger-icon]:text-muted-foreground",
          className
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon data-slot="accordion-trigger-icon" className="pointer-events-none shrink-0 group-aria-expanded/accordion-trigger:hidden" />
        <ChevronUpIcon data-slot="accordion-trigger-icon" className="pointer-events-none hidden shrink-0 group-aria-expanded/accordion-trigger:inline" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({
  className,
  children,
  ...props
}: AccordionPrimitive.Panel.Props) {
  return (
    <AccordionPrimitive.Panel
      data-slot="accordion-content"
      className="overflow-hidden text-sm data-open:animate-accordion-down data-closed:animate-accordion-up"
      {...props}
    >
      <div
        className={cn(
          "h-(--accordion-panel-height) pt-0 pb-2.5 data-ending-style:h-0 data-starting-style:h-0 [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground [&_p:not(:last-child)]:mb-4",
          className
        )}
      >
        {children}
      </div>
    </AccordionPrimitive.Panel>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }

```

---

## File: `components/ui/button.tsx`

**Size:** 3258 bytes

```tsx
import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/80",
        outline:
          "border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] aria-expanded:bg-secondary aria-expanded:text-secondary-foreground bg-gray-300/50",
        ghost:
          "hover:bg-gray-500/10 aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50 border-transparent",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default:
          "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        icon: "size-8",
        "icon-xs":
          "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
        "icon-sm":
          "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
        "icon-lg": "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }

```

---

## File: `components/ui/separator.tsx`

**Size:** 545 bytes

```tsx
"use client"

import { Separator as SeparatorPrimitive } from "@base-ui/react/separator"

import { cn } from "@/lib/utils"

function Separator({
  className,
  orientation = "horizontal",
  ...props
}: SeparatorPrimitive.Props) {
  return (
    <SeparatorPrimitive
      data-slot="separator"
      orientation={orientation}
      className={cn(
        "shrink-0 bg-border data-horizontal:h-px data-horizontal:w-full data-vertical:w-px data-vertical:self-stretch",
        className
      )}
      {...props}
    />
  )
}

export { Separator }

```

---

## File: `components/ui/sheet.tsx`

**Size:** 4420 bytes

```tsx
"use client"

import * as React from "react"
import { Dialog as SheetPrimitive } from "@base-ui/react/dialog"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { XIcon } from "lucide-react"

function Sheet({ ...props }: SheetPrimitive.Root.Props) {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />
}

function SheetTrigger({ ...props }: SheetPrimitive.Trigger.Props) {
  return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />
}

function SheetClose({ ...props }: SheetPrimitive.Close.Props) {
  return <SheetPrimitive.Close data-slot="sheet-close" {...props} />
}

function SheetPortal({ ...props }: SheetPrimitive.Portal.Props) {
  return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />
}

function SheetOverlay({ className, ...props }: SheetPrimitive.Backdrop.Props) {
  return (
    <SheetPrimitive.Backdrop
      data-slot="sheet-overlay"
      className={cn(
        "fixed inset-0 z-50 bg-black/10 transition-opacity duration-150 data-ending-style:opacity-0 data-starting-style:opacity-0 supports-backdrop-filter:backdrop-blur-xs",
        className
      )}
      {...props}
    />
  )
}

function SheetContent({
  className,
  children,
  side = "right",
  showCloseButton = true,
  ...props
}: SheetPrimitive.Popup.Props & {
  side?: "top" | "right" | "bottom" | "left"
  showCloseButton?: boolean
}) {
  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Popup
        data-slot="sheet-content"
        data-side={side}
        className={cn(
          "fixed z-50 flex flex-col gap-4 bg-popover bg-clip-padding text-sm text-popover-foreground shadow-lg transition duration-200 ease-in-out data-ending-style:opacity-0 data-starting-style:opacity-0 data-[side=bottom]:inset-x-0 data-[side=bottom]:bottom-0 data-[side=bottom]:h-auto data-[side=bottom]:border-t data-[side=bottom]:data-ending-style:translate-y-[2.5rem] data-[side=bottom]:data-starting-style:translate-y-[2.5rem] data-[side=left]:inset-y-0 data-[side=left]:left-0 data-[side=left]:h-full data-[side=left]:w-3/4 data-[side=left]:border-r data-[side=left]:data-ending-style:translate-x-[-2.5rem] data-[side=left]:data-starting-style:translate-x-[-2.5rem] data-[side=right]:inset-y-0 data-[side=right]:right-0 data-[side=right]:h-full data-[side=right]:w-3/4 data-[side=right]:border-l data-[side=right]:data-ending-style:translate-x-[2.5rem] data-[side=right]:data-starting-style:translate-x-[2.5rem] data-[side=top]:inset-x-0 data-[side=top]:top-0 data-[side=top]:h-auto data-[side=top]:border-b data-[side=top]:data-ending-style:translate-y-[-2.5rem] data-[side=top]:data-starting-style:translate-y-[-2.5rem] data-[side=left]:sm:max-w-sm data-[side=right]:sm:max-w-sm",
          className
        )}
        {...props}
      >
        {children}
        {showCloseButton && (
          <SheetPrimitive.Close
            data-slot="sheet-close"
            render={
              <Button
                variant="ghost"
                className="absolute top-3 right-3"
                size="icon-sm"
              />
            }
          >
            <XIcon
            />
            <span className="sr-only">Close</span>
          </SheetPrimitive.Close>
        )}
      </SheetPrimitive.Popup>
    </SheetPortal>
  )
}

function SheetHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-header"
      className={cn("flex flex-col gap-0.5 p-4", className)}
      {...props}
    />
  )
}

function SheetFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-footer"
      className={cn("mt-auto flex flex-col gap-2 p-4", className)}
      {...props}
    />
  )
}

function SheetTitle({ className, ...props }: SheetPrimitive.Title.Props) {
  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
      className={cn(
        "text-base font-medium text-foreground",
        className
      )}
      {...props}
    />
  )
}

function SheetDescription({
  className,
  ...props
}: SheetPrimitive.Description.Props) {
  return (
    <SheetPrimitive.Description
      data-slot="sheet-description"
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
}

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}

```

---

## File: `data/navigation.ts`

**Size:** 10225 bytes

```ts
import { Menu } from "@/types/navigation";

export const productsMenu: Menu = {
    "title": "Products",
    "categories": [
        {
            "id": "link-in-bio-and-tools",
            "title": "Link in bio + tools",
            "icon": "link",
            "subItems": [
                {
                    "title": "Link in bio",
                    "description": "Customize your Linktree",
                    "link": "#"
                },
                {
                    "title": "Link shortener",
                    "description": "Create trackable, shareable short links",
                    "link": "#"
                },
                {
                    "title": "QR code generator",
                    "description": "Turn links into scannable QR codes",
                    "link": "#"
                },
                {
                    "title": "Canva Background Editor",
                    "description": "Import your custom designs from Canva into your profile",
                    "link": "#"
                }
            ],
            "footer": {
                "title": "Linktree for every social platform",
                "description": "Grow and engage your audience everywhere",
                "socialIcons": [
                    { "platform": "Instagram", "icon": "/navigation/socials/instagram.svg" },
                    { "platform": "TikTok", "icon": "/navigation/socials/tiktok.svg" },
                    { "platform": "LinkedIn", "icon": "/navigation/socials/alpinelinux.svg" },
                    { "platform": "X / Twitter", "icon": "/navigation/socials/threads.svg" }
                ]
            },
            "featured": {
                "sectionTitle": "Featured",
                "image": "/navigation/products/featured.avif",
                "title": "Join 70M+ using Linktree as their link in bio",
                "description": "One link to share everything you create, curate, and sell across all your socials.",
                "link": "#"
            }
        },
        {
            "id": "manage-your-social-media",
            "title": "Manage your social media",
            "icon": "share",
            "subItems": [
                {
                    "title": "Schedule and auto-post",
                    "description": "Hands-free, hassle-free social media planning",
                    "link": "#"
                },
                {
                    "title": "Instagram auto reply",
                    "description": "Automated replies and DMs triggered by comments",
                    "link": "#"
                },
                {
                    "title": "AI content & caption generator",
                    "description": "Instant AI-powered post ideas and captions",
                    "link": "#"
                },
                {
                    "title": "Hashtag generator",
                    "description": "Trending hashtag suggestions for better reach",
                    "link": "#"
                }
            ],
            "footer": {
                "title": "Social integration for every social platform",
                "description": "Plan, auto post, and share across all platforms",
                "socialIcons": [
                    { "platform": "Instagram", "icon": "/navigation/socials/instagram.svg" },
                    { "platform": "TikTok", "icon": "/navigation/socials/tiktok.svg" },
                    { "platform": "Facebook", "icon": "/navigation/socials/facebook.svg" },
                    { "platform": "Pinterest", "icon": "/navigation/socials/pinterest.svg" },
                    { "platform": "LinkedIn", "icon": "/navigation/socials/alpinelinux.svg" },
                    { "platform": "Threads", "icon": "/navigation/socials/threads.svg" },
                    { "platform": "YouTube", "icon": "/navigation/socials/youtube.svg" }
                ]
            },
            "featured": {
                "sectionTitle": "What's New",
                "image": "/navigation/products/what.avif",
                "title": "Boost sales with Instagram Auto-reply",
                "description": "Instantly reply to comments, send traffic to your offers, and turn engagement into sales—automatically.",
                "link": "#"
            }
        },
        {
            "id": "grow-and-engage-your-audience",
            "title": "Grow and engage your audience",
            "icon": "users",
            "subItems": [
                {
                    "title": "Collect leads with contact forms",
                    "description": "Turn visitors into subscribers",
                    "link": "#"
                },
                {
                    "title": "Manage and activate your audience",
                    "description": "Organize, tag, and track contacts",
                    "link": "#"
                },
                {
                    "title": "Send contacts to email tools",
                    "description": "Sync with Mailchimp, Klaviyo, Kit & more",
                    "link": "#"
                }
            ],
            "featured": {
                "sectionTitle": "Featured",
                "image": "/navigation/products/send-contacts-to-email-tools.avif",
                "title": "Connect your email tools, activate your audience",
                "description": "Send new contacts straight from Linktree to Mailchimp, Klaviyo, Kit and more.",
                "link": "#"
            }
        },
        {
            "id": "monetize-your-following",
            "title": "Monetize your following",
            "icon": "dollar",
            "subItems": [
                {
                    "title": "Earn with a Linktree Shop",
                    "description": "Sell products and earn commission",
                    "link": "#"
                },
                {
                    "title": "Sell an online course",
                    "description": "Create and sell your expertise easily",
                    "link": "#"
                },
                {
                    "title": "Host digital products",
                    "description": "Sell digital products and build your email list",
                    "link": "#"
                },
                {
                    "title": "Earn by hosting sponsored links",
                    "description": "Share brand offers and earn for every sign-up or sale",
                    "link": "#"
                },
                {
                    "title": "Get rewarded for growing your Linktree",
                    "description": "Earn points, level up and unlock cash bonuses",
                    "link": "#"
                },
                {
                    "title": "Booked and paid, easily",
                    "description": "Offer sessions and earn from your expertise",
                    "link": "#"
                }
            ],
            "featured": {
                "sectionTitle": "Featured",
                "image": "/navigation/products/booked-and-paid-easily.avif",
                "title": "Turn Your Linktree into a Storefront That Pays",
                "description": "Add affiliate products, share what you love, and start earning in minutes with industry-leading commissions.",
                "link": "#"
            }
        },
        {
            "id": "measure-your-success",
            "title": "Measure your success",
            "icon": "chart",
            "subItems": [
                {
                    "title": "Social + link analytics",
                    "description": "Track clicks, engagement and audience insights",
                    "link": "#"
                }
            ],
            "featured": {
                "sectionTitle": "Featured",
                "image": "/navigation/products/social-link-analytics.avif",
                "title": "Grow engagement with analytics",
                "description": "Make data-driven decisions for your Linktree and social media platforms with analytics that are easy to understand.",
                "link": "#"
            }
        }
    ]
};

export const learnMenu: Menu = {
    "title": "Learn",
    "categories": [
        {
            "id": "resources",
            "title": "Resources",
            "icon": "grid",
            "subItems": [
                {
                    "title": "Read our blog",
                    "description": "All the latest tips, tricks and growth strategies",
                    "link": "#"
                },
                {
                    "title": "Success Stories",
                    "description": "Real people, real results on Linktree",
                    "link": "#"
                }
            ],
            "featured": {
                "sectionTitle": "Learn with Linktree",
                "image": "/navigation/learn/success-stories.avif",
                "title": "Create & sell your own online Course",
                "description": "If you’ve got something to share, you’ve got something to sell. Easily create and share an online course that...",
                "link": "#"
            }
        },
        {
            "id": "how-to-use-linktree",
            "title": "How to use Linktree",
            "icon": "lightbulb",
            "subItems": [
                {
                    "title": "Linktree Help Centre",
                    "description": "Get answers, guides and support",
                    "link": "#"
                }
            ],
            "featured": {
                "sectionTitle": "Learn with Linktree",
                "image": "/navigation/learn/success-stories.avif",
                "title": "Create & sell your own online Course",
                "description": "If you’ve got something to share, you’ve got something to sell. Easily create and share an online course that...",
                "link": "#"
            }
        }
    ]
}
```

---

## File: `data/TrustedBy.ts`

**Size:** 1323 bytes

```ts
const data = [
    {
        id: 1,
        name: "Salena Gomez",
        tag: "/selenagomez",
        color: "#d1a228",
        type: "square",
        image: '/TrustedBy/selenagomez.avif'
    },
    {
        id: 2,
        name: "Funky Nutmeg",
        tag: "/funkynutmeg",
        color: "#e6c0ea",
        type: "rect",
        image: '/TrustedBy/funkynutmeg.avif'
    },
    {
        id: 3,
        name: "HBO",
        tag: "/hbo",
        color: "#000000",
        type: "square",
        image: '/TrustedBy/hbo.avif'
    },
    {
        id: 4,
        name: "ComedyCentral",
        tag: "/comedycentral",
        color: "#000000",
        type: "rect",
        image: '/TrustedBy/comedycentral.avif'
    },
    {
        id: 5,
        name: "Pharrell",
        tag: "/pharrell",
        color: "#730013",
        type: "square",
        image: '/TrustedBy/pharrell.avif'
    },
    {
        id: 6,
        name: "Tony Hawk",
        tag: "/tonyhawk",
        color: "#111795",
        type: "rect",
        image: '/TrustedBy/tonyhawk.avif'
    },
    {
        id: 7,
        name: "LAclippers",
        tag: "/laclippers",
        color: "#2a4f16",
        type: "sa4fquare",
        image: '/TrustedBy/laclippers.avif'
    }
]

export default data
```

---

## File: `eslint.config.mjs`

**Size:** 465 bytes

```
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;

```

---

## File: `lib/utils.ts`

**Size:** 173 bytes

```ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

---

## File: `next.config.ts`

**Size:** 172 bytes

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ['192.168.0.29'],
};

export default nextConfig;

```

---

## File: `package.json`

**Size:** 963 bytes

```json
{
  "name": "clone-tree",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint"
  },
  "dependencies": {
    "@base-ui/react": "^1.6.0",
    "@icons-pack/react-simple-icons": "^13.13.0",
    "@rive-app/react-canvas": "^4.30.1",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "lucide-react": "^1.28.0",
    "motion": "^12.43.0",
    "next": "16.2.12",
    "react": "19.2.4",
    "react-dom": "19.2.4",
    "react-icons": "^5.7.0",
    "tailwind-merge": "^3.6.0"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "16.2.12",
    "tailwindcss": "^4",
    "typescript": "^5"
  },
  "ignoreScripts": [
    "sharp",
    "unrs-resolver"
  ],
  "trustedDependencies": [
    "sharp",
    "unrs-resolver"
  ]
}

```

---

## File: `postcss.config.mjs`

**Size:** 94 bytes

```
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;

```

---

## File: `public/Earn/products-1.avif`

**Size:** 9361 bytes

```
   ftypavif    mif1avifmiaf  pmeta       !hdlr        pict                pitm        4iloc    D@      �       �      /       b   8iinf        infe      av01    infe      av01    �iprp   �ipco   av1C�     ispe      �   �   pixi       av1C�     pixi       8auxC    urn:mpeg:mpegB:cicp:systems:auxiliary:alpha    ipma        � ��   iref       auxl     #mdat 
	8!��� !��2�=� �@����X��k4�W���a��U��7��@4}!����{���.���D�i~PQ^M`�1�w�[��B;L�s�CH��t�l�;���s�_ƀ���uiE~�V^����c����#��a��a�����k��XGzޗZ�:C�>C�������Z\DA�}�/��gip��\�5����Ld�'�k�ӏE�J(=-2X��&�SX��h�>L�Oh8$�*��^yX-xI��6��	�����)����/4�r���9.��2V��� ��a�VW?��-�W�ƹK䷤�sI{�$.�+����*��A6_���x��H�0_L�^]����Ϭ��-���v�	+�Y;�J��j���U�w����w��-�]��(�
;��t��·�,�9��z$�HEE��l����>�W�8��K�a���使��AF=v�v��w�%f�,�l!`�(7A��LE��7��9O�T��q����1�Ihjf�0���FN����`�;- P���;(�ȼ�h�|��t#<1p�gh)ּ��S�ܙמ~)J�v����F�@�x��e�y �N�L��YFā�qG�PVv����z�)�_��~ѮʴR7��ʉ�� 7�O�B�xP{1�`uiϿv��XZ:��akX��:��6��r��lm��և���>M��|��V�L�c�H���tS�8eQ{����[��TW�>\�N-V~`&(�s�4$�s���J=v�4�����K�z�MZJk;"��,X���,�˚��2��q���~��{��}�>���:���ʩ���~�W���
�=h�<R��]���oj6^*C��_n�^�w���'�@�3%Q�#Y�c��t��YF[3~���F������2���	�BmN�3�nK����j�m�<_�$��>���.�3#���h^��.i���,�G�q��j'�C�����S�N��;�V��F�d>|2���/��:��wْ��b��'B|@��1�΀9����w����˞ѷV$�j`͌��%�J�V2�?�Z[u���y�W��:�*�	��Q�s���	-(ϐ46�Y�d���@RiI���&);�:��hl���>����0*�����pվ�=��"��z+��Su�w��VVU�!Ȍ'��NBEt~�K��#	��ؚ��\�(���j1���������$�k�sZ9���5������nP*��w!��%�Szd����8���(�屌��ͽf�Aa{�"8���������Gϓ�ОD�X�-`������eS~��ꍻ���7ހ(.6�|��/h�ܙ8-�������X%��<J	����Q5s��{o��Q����뉢�o�sѨ��xk�7�
���e���%���X����im�O�b�P~YE�f�UK<B�[U��UW�83kc�.�*ܸ�:�ߛφcgD`��kٚ;Aug���������5�=v7
ể�9�;��}
)\q�L�y"尞� ��������2'/�Bwsި��*�|/�э5�� a�"���HM4���g�ҋ�:�:�B,�R��n���G!�Xuɞㅧ���\��x��ҖA��y�cҏ��c/@���".�!�r&�:{5z�_*wS�:u�qY"#�e�l����\�"h�(ף��9Js�~��+5OvLd�`���LU��o>��%�Kym��z��eq�Z �Z�EM�b�r �����n�����q����c�d�����%Kh�Q/�P�ߤbj��`��|�Ѣ��p�h��ؕ%Xi��!
����ThBޚ�n-	��ꈨ����}�ě��L!N�"��g��� �����c�� u/����t��B�$�e'ieMulE)���1�m0����E�d����c1���]{�#�ȕKvS&�8��
����Ǜ�GK�}��RR�)t��5P��>K<�SY*���G�h�s(�g<�-7w8�0*X��4�) 0��*�VLTo�#ڽ��_��hz�O�-vݏg�pՅ�X+���X��-�2�h��'	��NJqE���IB}m�������J�FrS�[���C̊x�p�; �6��l�n�����fQ�f�#�m��fV6]�RE���D�������J�n�qK�Fl���Z�Ø ��xS*d~U��ci&�
���D�+cCC�=L�M.���D��0��L��]��Ӛ* ��$,��!r�2:��@���	��t%��Fy�Zr�7!�uUWE`-,�?�����|�T�݈��G����SP �K��J��7��Xɱ�D(2^�s`�%3��.l� �<:g�\%�'Њ�~p����.����f_}%�O���ӫ� �j+�h���Z�ź��I5�Bk�
�
�����|�)�}a�ϳ�P�˄q �k��[�üfUv1q@i�5��is�?1Xk�k`�UR	|3�^�������4�5�;�ĆT�*�%�a�9�kp<׬�|(��[j�L�$LPJR/��(듧��/�ji���G��u���7�g��6��{�o,b���!���ko�ے�
�gp�e&�?=F�sP�T���D����oL��k9��M3����q&�&d��ϛ	�Nx�eS����=e��	�'�(`�E��fe`l$���$��U��$I��L�K@�rc��l�>d���^�t��5K[�Jj��yR�A��F�~�g
������9�#2r����Ć�^c4
��DG� uZ���4��nN�x��uA>�V�Mi�Տ�jchD]4&X�y�%4q��0]m�X0��`9h�1���U��ّ�~	}9�e�2���ݝ�(q���ZBj��!�oO~�"��p�;{,�}�1K⩸-�ܫ�>}3��`ˌ�QR�`Qӂ]��5HS��hog�&�|%�LЪSݞ|Q�|�Ny��^��49%8��bH�I�$Ոd�5����R`�j"N|W�̄�C//��mt��H+mX�����W�9�V��Qj^9����
6�,ٺq�n@l�3�q����f<̒�t����sX��c!�L:M�e<Փrjw�h��5�Y�u�����*:(},����\���J��Q�Η����v)�&˨Wq�T$Ǳ���&�TpX �`�RbYp��U�������X^6�7�A�i�m�+2�($�!����ӒXx�dv����ӱk!Q�Z����&[ f�k��7�9�W,��tdVX`(u�^�E0+pE����+����#Z|$S���o���aH�V�k�۪+���뫬��i� ��/�����V��Yݘ�Q�x1���<��
�KR�1�͵��sX�JPcB:Y����9��7� �੄2�� 	��I�U���7q�W�eր��缣�A'�`#�FԺs�&����`� �a�5�����T��S��؇� �&ƣ���p'��0B�R�
�Q[�˷��I�g�����o���:�ѹC�k4W^��)Y���X
�����Z>� ���"��5��I�$,�
�:�4��o�F�+8���)�O���B?�9����-�r�S�6�J�ݙ�4���<�OD�g.�G�)����"��υ�
�J�f�)P�fa�.�Ȯ�{�W��qL�Q<K'�,d�xA�f:T?��3LN~��tJ�։� ���ucoY�Ð̧�Z�O�=�����ҩ���9͇|�UfVJ���)T�_W�w��?B�ʅ���2/e�'��� :oO�i+�1��ݴ�L oȟ�6�85���,��Z
�4\e�L��n�C�j
����xH췢��h k�Ȅ#0s����J�_�I�C[�NQ�i�,f�`2�l����A��ɞ���w�d�C��f��������u�ᳱN�J����EZA�@��G٢�ʪ~|n�9�r8[e��
JjsNr��Y�ھ��ݭ��^�3�W��=�~˻`ph�ܡ��߾qD��W�/Rlȸ�] ����|��Z��L�2����P&�[ǎ`�ep\&n\��I_q�7e�{w�j�Z+$NS/5P�h�g���ɿ�rS��u�r�=}n�
&��L���di�����,�H`!&���=,����y^�?��s�#}��)�L�ۛr>(�O`�5C��|�f�z��]�0l19��ݧ���:��Avv͇o��!}�̓���`� Z���Q���v��ßy%����ZK�Wg�}d��"QXb�:���۶K����l�$�m�{�b��U1i�_~bA6Ë��	S���CSp����B��Сđ�ӻ��^u���WH1�u��=�`g#Xc�K�F-�������i�o�ؓ�<����g��5��023q��D��:���RY��=p^Խ9�-]�M�[�~VC���FL����������~�:��F��������L�^_Ga9[��ƚ+�i��E�	o8�YC���N���6bG��U���5�5��Lv�f�������**�B��'�,����P�wԆ0#[ tZ��� b$��
l���8�Bƀ�
۩��C���� _q�{�O��gz0M���Xb�.iwU�{j_��_ �5{��:,j�סKu�T���[�*���R!�im.i��D���6r���$�}�ʯ]ZHz��ت�[ZD�/G������5�$ޅ�Ad��G����d��ͳt�P�z�m	�3*�	��c���lnk$�>}r�ßbY��z�	��h�����u7��JUy^`�aB��}���躊+3(�D.�9 ��Nxj�J�j������4���೛ܘ��r;)�߂�^a��˱��Q��k'~?ɭ�]n��WX��Ӝ@'�-��5 �	Q�)^�џq��|KR��h���V��O�jo������� �c����@X����wRߪi�=�R��=�n��k��<#��r�+S�R<P�q�c�D�0�AU=T�S�=����r蜰���g�i'��hH�y����HفA���3 ���0��[�3�[�H+���߬1~�����>�CJܵoup� @ͧ�T�S��Ψ%�_� ڤF6�����}���Oo�	�8׹Dkl�'L�SV�����C�*3%K\�Q��Cg�)��pp�em!b,ib�dPH��0��gS�fw�f�\ʄֵN����تHOo�$vf�'���/�i7�+�cD��2����L�j�BwD�Q^_�kZ�r�_֓_s���R������b��@&�!�Ԉqb�(=�X��� �����;BC��Æ	OC��Xmr�������>lR�2�%���SCmc�D-a9=�ȼ�=����[t�ʡ
��� .CX-5yS��zy������)�F?PTi�?��C��z��eaT:�1��2Ns��8�7�}�r���c�]Z������{5�agw�-tR�#0������	%[wW�O�^k�y}Ϭ �?��6ȅ|G_t��#�3�t�/���X�o�ԐH�5���P��}a���u��5�
�hF�"i�j9�Q/��j`�w��1�K���k�h_�hD�+� Ip%�e�Ȭ,#Qunܭ�iEz�a!�K�UP��a �a�ԓ���=Z�!YtP"~�Ґ�"'��%F��C
0v-:��/gk4�ƪ�-R�s���%'� ?����<��r��(������z�$Q;���2��I	�?MgF[��o��,1��:�����^��5oGr42;I��@�6�ܟ���E��xu�?>���R|T�n��R (]�7�Fp��栲u]�H����3�/5�WP����E�!�T���؎��9�a˹輎h����Ve�4t2@����|�k��\yS��N�B�t��Iʆ���ѱ�R\~�o�j���}{��$\g|f����28�"xY"�=e#Q��Ρ>kAh
-�Y�|����ѧq\���s�=� G<���v(���b�]�F������y/�S`V4Wk<$�Ǳo�{<|b֙�OS`��(����@3����A�'T������M�4&bڇ���p�`fTN�6jR����;�s � ��"��@����8��c�S�;�����E�x��BB����k��@��I��O�Iͯ,�V~�b����[c*HI�tmEr�D ����)��I�s<l� Y�@��A�*.*B�5}�d�k07P3���ïޓH�Ro����h@�Zٯu����@���|>�(�(
L�bk�=�.��2@p ���,f51�ڬya<����8qCz�5���Q%m�o����}KB���"~����k	��or�lFz2��k<
�i��-�*�)����ۨQ2�'�*~5$A�w(�{
k0M߭]J����zv0�>Z����G��ͼ��G�m"� ��=�b� L��� ���������1��i-�W=\��9�H��dN�u��u�f)4�ͮ';��t��4�&5���x�rHk9Ӭ��%�dk"T�n�[n�I�5KXG���bj�m��H����#� ��î��YlO��Ѹ�Q��A���za��0��_��w���"��M]3��bJ���s�r����YV�K}�U��Ր�N��,�%:|w��~z�~�n��}�0�!�S�B��"��qv��� I�F����2���6�_�³�豥�K�l�nb��@��(��;�?&S"���'#���?\th[���w6lB&SZ���>S*��%���f��~�;��[�7K $�����R��0�q��h�9��c�4���5��{<���E�����&�'�DP�
���Ι:ɠ��8&-�0�|j �Nk��M`���70�j�he�п5�q�:�q������`�+�u�L�	�~����&{���;��)F�l╸z ��2�K�Bi�������ͫ|���rf�>J����^:��7㧶�~R��
}�	����S���~,pw�'~�ME�ͫA�q�]p���E�3h���Ȼ=�2�W����3S������Ь����0B׹ݚɏ>��s�/f1��p�j%�'r�ԅ_��.��)C���1�dD^bR����uPúg�N�7�}�nOkI��� |c��m�;ߨӎ�K�kQ����f�Y%�w�"�h�z�m�wóZ�{w�86@PI�g)%2˴��"��[R�j7�����T�d�l����(Q�r�?����}~��ƈ���G��pC�>�݂�.4�)�%���g6.��l�N�W�`0�	���NT���ߞf�ɘ˘ތ�{�s��p�b�8�	�%6�ZC�)`�����t�F�Ch�J`���I�V	(��Mu�0����w-��������w��w��f�9nԸ�TJ�s�OMp�4��F8���o��Y�90v9o�:���H���-�����oX��[p�����9�=~B�����V�?=�	ͦh�A��1k,�r��.5�8���I��������w��x@')�oP~M���\?:�g��j�����	�1-����!��_|�_Y���R �����@����De���A��5igA���۳c�������:��;'9qT0����P��l�h�D#��co�� Kݸ�+������M�`���]6�L�X�N^ّ�^Wу�h���d���l�fevY�����"	�n�>ȳ��*�`%��d�Ƃ(�'��)��v��Ik�����{HM�ݸeΌbk����G>��u��z�+���N��"�r�%�iʬJѸ��Z�{�M���"��O;=嵰���9�֮�H�=�ÎGQCՓ<��,�O:Q9�a����/z 
!���*2�� P�z�K[���E/C���R `�$zeC�������u�AǴ�Y��~�=�&rew���"kg�ʨ��!�z��no'�}� 4����/aI'�d�$qJ�_Ō���5;Wz�,�^�=��[��&��9�h��n�X�/���Bk�ǰEI�I�$������]�����ּZ�ޛ+~�<s�2'�6r�>r�o g��o:�� ED����@���� �+g{^�^Pʋ+����;1+��K�`>?Rr��jq]��O�>ʬY��J��+���?*
5�|�����y*J�1A�R����"�JN?:��i��.cd2f���c4��(���hre �,��=Ӱ=��P]�5�����~�&7�,]�iE� ,��cV�ԗN.Ӛ�k�I�s����I�"�#�f�v������d��9ơl���#����sά��^a�����.w&�~���V�Dd���8�nOd>񁞚�p.�<���^��t�����Z�=l�Wm�]��`� �P�5����I���B9��_�kzS�"�����nsB�>$c�N��`�'�7y�<����-6>�太Ӣ͓���9B�+���(`o��&\z�c_�ty� ���t��ߥvO@�J�e���f4T>|��n�!��Z�ե�H��|o{�8J˘��u�
�&tϸ��-�p����d�*��� ��Ҕ_�e0��ɑT�j��w~NB_W�i���}���Sw���z��gYL�֌z�(R�b�"����A]{Q��D�,�3���,���_kZ�=��A9RH����ԬN����jt�Pq�T�QSԠb�e�עk��B?���'n��q�r��b	~�`k��W(��Vȿ*K�M߂F��=�9���\������Ϭ����j&��
�6d(�{Q�)�����>�o�V�U�[1�'OU����i\V�Q:�cd@+�Sn��հ�ÿ�1�7A?d% S���'��;҅��E%�j�+��}]6�S�,V|<L�HB�뺅�V��+HC2����%�A����J V�{A���׼\&Mg �ON�h(�R�GnB��t]4� �CO� �`*�� �Ǹ�
uG�88{�]
```

---

## File: `public/EngagementAnalyze/analyze-your-audience-and-keep-them-engaged.avif`

**Size:** 8086 bytes

```
   ftypavif    mif1avifmiaf  pmeta       !hdlr        pict                pitm        4iloc    D@      �       �     v           8iinf        infe      av01    infe      av01    �iprp   �ipco   av1C�!    ispe      �  �   pixi       av1C�    pixi       8auxC    urn:mpeg:mpegB:cicp:systems:auxiliary:alpha    ipma        � ��   iref       auxl     
mdat 
	8b/�6�i2�3Dp � P�_͘��2`ˮ��¤g_�_g��A�m$xV��-�a>�>�Z�ңL@v�B'y�S��$�W�'�G �(�)��E��F��L�	Eu���jr��EaN\U����مy����΁`D�z(��������^���,�o�y�,\���Q�ߗ�m�-�2g��M�%�?�E�;�<m��&�f���@. T�X����M�7��� �U���O��f���R�������o�[��k*��*!z"�O���<!�r`���^�L�F��Zw$W�T��\�^`��!���B��!��N|�c�|ۆH4i��t���o��#��C�[m�y�u�>v���qBǏ3 �4~ߙ{*Vʅ_�Y�����,�}Y��ރ��t�Kj�S��1�*'�BJ;j2��b���m��U��C���{=�04.�?푣��G`	��m�D,1��"��f6�E�΃��a��G%NK�6�f����X��?*i�+& q�؇i��e�6��0���I^�7)�غ��uȍ��Ԏ�TE
L��u3�� H��s�չ<Hit(j�*R�� Z�<J�Ԍ8	��F�i�,gE)Ȝ8�|�q�V�J��^V�Y�H	Z"�Sp�f�Z��D�>kB�V�%fO���-��vr�Fv�c��p"G�{<Fb�6��`H��](����cVg�殤�>���I�����P.��S��f(� f�)��T}�9bn��������_]3O�ϓz�)"�;
�5�ҟ��"n1�[J�1�q�*U)���$�3��직*x� BE7����_��%�o�p�;Ǚp�F���ym�� �;�)�u�]�،����-����#4T�gB��8�tGA�(�D#܅���c�T�X�㺱���-��]�c·�ok#F���v�3�6��Ȁ�A׌�Sn��S�$yi���異q=Ik�,�D��M@c�8��/h<��e��ؓ���Z֭,ﾧ(�3�	�)�d���p��.8�(��FW�K:�f��#��Z���d
���Q��E���?f��9\��f9C� ��y�� r{XZ��r�`��1�I�g^u�n���E�8a�ݚ,������z(g�p�����YoC���=����e&������p"�Obe8CE��=W=�X#��^+��
dm�;YຨQ�V�oн?p�KJ�)����N.ـ_u�]��]g��F�E��ǜ���o�P'� � �J��}��b^7Z�a�7+�y�	G#����%�����JԀ��Y8ˋ|i�����ek@u��Y��d�j�7qb�d�H�o@0P���:m��b���FD��9[P:��8GOE��S(#p��wl��>ݤ)��4� ��pu���p.����Q@��`�&��Îª[�Bpa*2{���nf�5k����ʁ�ۑeY��1Qc��Ǆ�v�bK���?��g�0~���Nc��1�� v���1�z�
�� �3�s����5�������wG��:]��Z	/{L�o�No^]5�6�����h=���Ey']���Jȭ�q��(��n�Kn
�9���L��嬝��*n?Bk��7p��HT�q��Z�	>:�` 14_`�/aJ:ƞ�*��m��C��,���l�P&,E$��xJ������o�\��lwki]=�-�j��>E��2s��r�(%i�H������t5z4p��oW	���3�=��l��s�ɳ1x���2��5kR�~�y��$ZT')��G��)�U�vb3c�IU���q���԰/|�A����-���Qo��u�wH큒�1%R��P}�(V� 	TϾ�U��'zT��#q}�L~	�����>��Fˣk+4z��Bƌ�tRO���
0��:��]b?���;����i�6�c�A��) m�Yv���b����'��%*t�-�\l$)5 P�"{ϽQ_����5[�h��?�T��y$k^8�N ���Q��y:��e��Z�$�=�_�zK�0K?��Vh������0�\���s�7�,� )W��s�L�/���O��25L�yA���ӟ�l�Љ���kb���E�����ׅ�P�/\����� � 8����T���M=���m
�,L^uc�o5��fطc�9��_�I'b��݄�v#���U�h��WƵT*��]���4L��݉�Z�m������ʶ�T8��v̼�H��ղ�7������sʃt@����А���_;�7�<��	��^�/N:��K�����D����̷��ӛ1�.6|:è�[h�®ٳ	^��������5�iڄA��|�o��I�+�WW��J��.�v��V����;�ʧn<o�e�0�]8U^`Ԋ�@GT�^�	AK�̾D̓�`ū'�Y����@� .:�Ì��[V��D]��:�R�^�Nw���U�2�������,L�/8a��u�����x	�㪲]���G�{�>@r�_��l��,�s٣mYJh�>kX�A��c
��|uER�V$r�����G�	�f����V�W1� fZ����n�
��R�V��s$/��H)���W������DD�J��hϱv������?�:�X�_i��V6cA6�^��}@�0��u�����Չͬ��k�R�^
 ���D7�!P�!���*m��]^wM7I(�q>���<=W�O��G@j ��'�ؚU���w�)��=[:�1@=T@v��R�t� L Ll̜��C�ㄒ�'�U���#���l	���?|{�'{�`҄r��W�Ź������
��\)�5����^��%�m������7Ÿ�)�\�˧<�v0��'�XB��:	���S�����D`��&���t��G��X�퇚����:��C:�W��kN�x*��2�S���^|�W�Ⲑ��bL k��ʹ׀�`���^�̸R�} �<<{�ᓣ� �d~bo�nB#�U['��3�nE����x�lj*��ς���ݚ���Sh��������X�������+�F�F��Խm���)�<pf.qC��+<��YJ�ݹ
b�+�KH��oQ[�&FȂA������U|�/��_��e�,!L�!4�U]�WFe���V0~��G�z������dz�O���E��S��`���e7�u)U=����P�v��$3������0���EZG�&��YD?��x�Rq��x�Y����&`qJn��':�	�t���ˌ�(�[��T�����P���v����v|ʜ�qꆑTu;M�2En�"��n�6�<���c�.��-Û�J�k�6�J][�R�f��5P�z����;����eG�4Ia�sN��i��AOO0��v�ٺN��q�!v}��>ew�/X= ���nPDǱ��<Y��U���'�u��a���_̌�{Q�"�8'��R�(_p/����[h~nlI�1�P��%�B���?�W���u�U4��l�s�1y��C��r�L�o���d� 
�%mn�
)����W�Áf�D��T`Q�Dx��N�5��+:��'�c)��%/��=[���Y~��LI�P��)!��
A�s�o�+mg ��9Რ~�����Y�`uY�X�'�v��ۿp�	3mv^JX�c�� ;�
�j�dS��=�%D������-�k��ow�3#�?��Ѣ���B�^>�<��9�|��a��Y�|
חq����n������ډ�^�ğ�s5~˂���,��]9�!<���5�C��"z\�ٝ��Ώ��(�K���}��-�o�������#��A�e.�})W�/�Xm,*�В��(���P��R�~�A�Hw���������a�u����(A��Pf/	�=ԍd�UPrN�����Gk��@�u;0��׫��������xEg}7��>�@6ςmۊ��8�J�٪�@ӤR�p*��ߝ_}�C���I��e�Iͯ��,
&σP�n�*� ��?��z����C�5��S��0�9;�(�Ǣ�7�Z�h�Z����s�-*�D[��u�M��D���	�}EI�Q�]Va O6i˹��|�[t����������Z.5�vp/,QÄ�l
r��[��E�Y����٦��hnҶx�O�_��i�Rs8k-�J��YUkߑ���"Y4DIN�V҄�h���[�� ����?�w3�����I�;�k*�u��K��e�F(�e���$�P���6ҨTe@[g��˦g��4�%�VR��G�s�'�C���90�Q�ˈ��ۧi�R0��:��.��w�Fݫo�.�������u-�����zz�)U5:;��9X�.�O����B��2�6�Ļ%�M�h'ĵ�ǀj���}�a5�=)��]��J�Q��Bpa.v���pB�}���$�� ��q������yw4I$?å��>�3�|k�7��S��dZ6mA�.&	���q��R8^Xݗ6"�tE����pW7U���M�n_*�DF�����G\";�T�y��0s��|���<.�>YTϩ�	�~h��w�̼AXI�e&���Í௜'=�	Vd�[�\~�7$r?��[J͋��L���d_��E���7�]�?j�tw ���>�z��ݿF��֢Z�|��n���nb���F�x��g��_��s�k=P��B~a�2��Dek'��Xs!A�5.���b�Ǩ%nK�d��8�F�D�+�F{�;��۸xz��W���{����ς}�GN��:������7�Y�HOms	}��-K�����*����?m�+�]��TT~��p�֠���S^�1�~��/���?/#t,�@$���9�^�!&B����o7�x�gכ�˩�8;����˘N��v�e��wg<���ͬ���?ꢊ���p�&��ɕ���j�寁�Xh��=�X*�'�Z��6�<Z�R[a���(Zr�3�la)Ҹ���>r,\�W�WY�|����LPI)��������|�N���\L�"ͧ��o�.�ň`x��J�|��ƽ���z�~��?���Dni䧶��.�>�m[LG�;1`�{�@|3���~��Ԝ�?Բ�;�:�|�k=�YT���5�6��4%���k��3�]
N��d����R����?k�,�"v��>~Z2�#J�$�v��j$R_�Ƥ��=i�ا ���y|�{��H�(�`�ܽ���0��/援$�4��#�^N1Ŵdf|oD���}��y��X%�c_յJ�஽rz\�|����|�hI��<��@H��/n6�4B����ˍѠ�G�z#�Ύi���[C=��{�5l�,���R��Bc:�9�$��3"����Z�YS�l�P�o��f썼]�q��忿2�U��8��啎1mkWEs��������`zv��z�X���l�@����@�M|�3>�,�up��M�r+���x�V���pq���̇u9i�͐i�?ɫ����þ��D�4+�夻�5�2/�P��p�^��iz϶֝�9�n>ؙ4rU/����̀�Ai!y��_�W@��r��W+U�.�#�Z��G҅M��E_��BI�����+���v2R�B��X��uP����C"�/��Җ��p[��u��g!��π�� �B�d��Tg0�Ѵu�!X�����5 �`,8�!�HOc��48�(h	R/w�R#��;
Ъ	���u��M��ɭ��
��!ѣ�x,:{}�'<v��^!��t���#�:pGҫ�<�q�����B!��bq���G��ڈ4�5��ې�7P{�6N0�ޓk����K����#@�5H-J��1�ͼ�l��*�`�M�)�T��ީ4e���c�l�Y�q��<�ױC���6h�-�o�F���EJ�.Z5�k�]v��^|����Rh��w	�k�%��W�4Z�ysT�n��CU�Ǫ_���}j|�{�mF�!�h��e^+���>��!:�n�~B�:|��|��U�f١�Ý�|1zu��lq�}���K�[�nO��v�B��CCʛ>(�l�J���T����gj�sK�]��\��8�Ȓ����9BWk��Qv5����JHy2nh�3��܆u(h�2J,���Dd�FY���DMX��+�NV����g��}�O���ۢT�v;L�yP�'4ŭ��Gh���ο+���TmyMA^�%ȎMi"ݘ� -yp�u?�)!	����~�o�G\�b����,�q��	��}DY{��ч���� ���5U�^�YI �V���ح[����<E�[Er��]�>�+@�(��1B>`�Ҡ�x�`G�8�y�F�M������hi�ҳ��>3,)쉄��<���}���ϋB��c����9"�2����\
���隔~���l�>��e�Z 0Q��'v��C
 i�lב_��e�u���ql.��Ҟ?��&g}�\��Q� �bJ&����x����	c-�z�����.�w`?ѹ<�������L�êx��R�5�<�����������]N�c�rgf���+�D�	�;~c�;d������zQU$����0QV�9��4�/�Bߩ���"ŕl����̧0 
b/�62�� P��7mnHxU)+a/���Gթy!>�z�U*� r�7Z�m�5��D'�l.=�D��b�4���^�A���k�v(z.�'��.���g���As�Y�`�2��Hȵ������ �22��[��9�j������I����4��Fni����)7�f?AK�'�vO�e&� �lWi���+챬5��B%2M�J�ZMR�{�U��	 9��IRk2��h�[�W��`�%�y�ڻ��E�JJ�{�|Ȕ�v8�������3��E�M�M{�@!��Z�anF8��2����~����L����iF�_yE~/�I?JR�k���B��U�|O^�~��2-�֨<��.�-.�!�,��xg����{��ެ���Q�Pm�C5�է,��:B	=�<m������W�2%|#/�֐�d1\�x� ����Q����Aqgb�l΄j����X{*ϣCI�$�7>Ƿ��+ 9��9y0�Wi�L�<����wt�n0PA�5O�c�(�=�g��p�8ñ�E��fu�.4B^�t�wh$VJyP�ګH~�ϭگ7FXx�bVw �֪��t��u��t�{�NrC2��^g&�sy=�٣x()~�P�J��;0J%�?���Úad f�^��Q~<wnj#��5\���E-�����sގ��GH�6qY��E�cd;4�s6��p���P���!�E��㩂Z��� ����0(c��١[we]!H�7'��H�񐯶2�
��R�e��E�j��SY�� �Ve�5���<Ú����靾�2贬n��������1@ljWS�cכN�v�C���V(�"�ݑ��kʩ1 �8���^�Q9��W��'����5I&����K�7кPP� �����W��]Q��憹#x�5�S����u��&��(%�iY��1���9B��4j�G��u��UTeKM���G�B���ñ��:����� ��ʲr�1Qp� �Ѻu���9%eZ�{�Zv�����=.@Hc`n�( (��0�)?���p
```

---

## File: `public/FeaturedSection/forbes.avif`

**Size:** 2128 bytes

```
   ftypavif    mif1avifmiaf  pmeta       !hdlr        pict                pitm        4iloc    D@      �       �     ?          8iinf        infe      av01    infe      av01    �iprp   �ipco   av1C�     ispe       �   @   pixi       av1C�     pixi       8auxC    urn:mpeg:mpegB:cicp:systems:auxiliary:alpha    ipma        � ��   iref       auxl     �mdat 
	8f�a�2�D�@���
��� Yg�c��/~�褠�K-�Epi��~5�Z��['8u�XK�;������C��1tق�@�l�c�A��W8�0��KH;K�>Aż�(��$��s�?~��Ї�'a�>��H���/�M_:v謍X�:�!p�-x�flI�@�4k���]����hy0y`�&��`�|@�#ϳ�좙̕]��]36�?�tIP����H�vۿ'Q`&�N�E�3���g$����^�}‧�="vG��aN�C�C����cÉ�ܡ8�[@�5�<3Ѕ��|�.�i
��"��Ӗ���o���[��G�ԁ%v��Ũ#�
�tz��w0�۷�ܧ�?}�(�HG��?Tj�����s=����,v��$��,E�sI���Y�#��3��g}"FsՔ�.� 
f�aP2�
�@��+�(���6�6�J�:�Àֶ�{�G��橯�����iK(!�i�]Y��o@/U����z����E�|V\Y���#TUq�����+ܿY�EU(h7�x�@Y�H��E�.���G2A4��/@H��>�Ԭ;g�ȭ]o�yo�XW��c���yN0�\1�A�Gn�{ط�� �$��8lᲹqhJ�GؕolZ7W+K���o2|Y����<�%��k��s�C3"��4��h�f�\/P`��|�ԥ�k�����N�|�S�,�i�Љfy�/f�s��u`�Jw��;�H��W��z�rv��
�iU��)��x��8�B=��J0��,Th0�3�0�B�Cy�,�F�g�B�#*� N��0��<[�>��V�v\��#��F��m�M������~`
�B�(���WNN:y[�z&C8r�%��	�YLH�A���5����q�m����^܀0�d����6u�Ŵ�lAұ-��3��?ʅ�s�׮ι���~��Jc���Ǵ��L�G�c��s��ka�߁�>��J�O������G��e���Q����v�˨N�b�Wü�JZ���И�
as��_z����bא]N�������E��Ǝ.����Y[�ĕ����quC]��i@@���		c}��6�ܗ\���`�_hd�҆�n���WD�x��ZW��8Z)�M	�ǄI�\S�MF_dWq�^���pt}�1�8���U!�̐K��Ji��cH-�z���!gYq�W�P��6�jd�, L,�K�\i*GD�Re��n�(��خi���h�P!*�߆^L�z5'�/DJ|z�,�@m<*QW91~�i�������Z:���>�2���a�z���Yߣ�x�"S*?!�H�5�S�)1�oh�QS `%�h�,�I�x��y�e��I����T�ʶ�~y���͍��#��DV�k��*q�E�/��5(�-S��xL�f#�%��k�2����/��_9��u�m��^�-�o�=I��0����vG�^G~�R_���!���Y Z�����k}�+ׁ�[zU*�o��N�Sn���gü��0�W"ӥ��5;l���`�'yvO"1��n�l���� ��N�0p�OC}R1*�f����kT5����*�}u�Cخ�����|��������������x'� C|
ɒkr+�Gʃ����̦�7�����GAla�ZFW�5�Ð�1n\�.đ��e�ad�`�Goϣ�
```

---

## File: `public/FeaturedSection/fortune.avif`

**Size:** 1517 bytes

```
   ftypavif    mif1avifmiaf  pmeta       !hdlr        pict                pitm        4iloc    D@      �       �     8       �   8iinf        infe      av01    infe      av01    �iprp   �ipco   av1C�     ispe         @   pixi       av1C�     pixi       8auxC    urn:mpeg:mpegB:cicp:systems:auxiliary:alpha    ipma        � ��   iref       auxl     amdat 
	8!a�����H2�D�@��_ͨ���ҐGEk����-$����Ah��q.�}m��h �gC��xg�>kY�I�=F�:�� ��Ջ������fϯ\ Ĝ�D$��w��Y�6?#�f�%c�l����,�hT��$5)Щ�l���_��Ɛ�r \Z��t��X�Cj(�{���4D/��8ʸ.�TVW�y4Ӄ���T٪�g�*Z�;�uC���e�vA��؄E���ø�U�?B����"��ڢ�%�a��k�)#��$� �@`��S�X�Y�L����W��%��=�`e����B�TjHk\�v�T+%�,_J�yZ��&v�>A�;Jɑ�
����4>*t@?e�y�����)���	�rm�mC�3���pA %@��'~&�~cc�=LQ�Q�3�w^��c^�i#� 
!a���2�D�(��7H<L��)�ϵ
 l(���m����{�a�ō���А,��,����V��z�;h@�k��Tc1�Ph.��Ɋsۖ�4c�tO8Z?	�&12L-H,c̈́%�/!��"����I�h9��ZA���[�g�ÿx�xb?)9n�o��d�	\pke�ݎb:>����Y�>�f��^��4c���)e.A	�D(({���)�W��ܿM����1@���s UK�p9T�	 ��U�*ЁN&V#>Q���If���v�K�4Q�+����8χp�J)p�NQ�d��ٌ�1ČG+���		/i1�co��T���{��:4�o�S�FO#�r�_ �D}��o)�$5hO���@����e�D3Q�E�̎\ݻ9l�!�J�Q�@ �ڃ�|׿�����}@s�$Z�CF�]��@��}��J�t{��0�&�p?d%��y�B�0�|6f���T�K�'�
��6�<ϥ́�ٯ�����1c};ϕJ��.�'o��������{�Wza̔j�*�]B�Ps�c
)a�O�B��F���Dy�@|r��i�q�G�/����+	�f����Ik��~O����,�7���'�(�Ɨ�ֺ�nL�DDt��������s�������'1��	�"'%��l	&\�m޾I����"%����Lٚ�7f��
```

---

## File: `public/FeaturedSection/insider.avif`

**Size:** 2699 bytes

```
   ftypavif    mif1avifmiaf  pmeta       !hdlr        pict                pitm        4iloc    D@      �       o            �   8iinf        infe      av01    infe      av01    �iprp   �ipco   av1C�     ispe       �   b   pixi       av1C�     pixi       8auxC    urn:mpeg:mpegB:cicp:systems:auxiliary:alpha    ipma        � ��   iref       auxl     �mdat 
	8������H2�Dp � Pٵ���q	��r[�F@�C�z�\�R��x"r���I��V��-My�%�(�f��ȱ�R���!mz�|������Hd'���Y���]9�Wn!������l�Z�]�?*�����#*j���](%��~����]��Ұ+C%�D����g�3�j,|3���<��7���{�D�%G\1��|&�z��ѳ��]�a4��X1�`ۿ�[қ�Ì+>*fb�\V� ���4|������,�d��(�p�!�	+u�Ɣ�gq��ee}�U�[kĄ���Ȥ�����w��X�����md���b �@�3��y��ݠ��@]\"[Xc|�a(�O2tg�}��E����҆����V���ۿw�c5���!�i�J�� RWo(��h.c�����1��!yOR9�~�DP����.�����W�=|Ϙ�T�h������ >&��A��q�Xcc���	t<B>� p�\w�O�����	΁�:�1�*�Iq�+���2|G!	"*�m��S��c��c3���zj�q�w�i��a�>�՗��I�?��,Q�s��3E=�-6{�y�-��o�(`#�1�X3���_@ 
����2�� P�z�B��I��V��Ѽ��c2��dm�d�VP����eA��J�O�Z%����@�A �s�v��|���Jm�n�]�C<2RA��pQ�(�T�
`\��N���B��VG��U8w_��mȌ�X�3J_D*B.Z��aq��N��i$f�>�>�t���l�[oȍ�}�G�6� F�{B�%y�R�)�L�/�	�~�
�R'gn�f���h=Ԧ\���7��¢h��M�l=��D'������4
_��F�]�[|4��<�%=�S.��*�'��D�]K?~Clc6�Z1A�r����p9����43���t�vI���]N{i���i�3�ѧD����r�Un�7E&25׾¸I �d|'���d:�L��7*W�	���3[tnIf�5���)|ՠւ˔��17Մ8+�U����^��K��Ņ�U��T�a1��>���}�7��'���j��DS��E���?E��Ϛ�]n��ˁI���+�H������u�1Р ��{�`!3�)%�a$i /|s!�(XM�O_
Do�1����R�cg���'�7s d�RO�Q����D��@JM��sH?���L�u�@��4b��k����%K�ض�Q���>yq�JH�7L|T�z�M�\��?�:��9�0Q��խ G�L�R�7��F��$ڿX��&�52�I�!z�ݓ�0u��AXV���m�Uk��^x��*�,v{Y�Z��+H�$������,~��a��REJ��hȈ1��K@�7P��,����j\*��ˌ$O���T_>Ng�R|���]J�\�T�Cq�8bd�m�����@�A���`����	�T��.�i[��D�c�,�?и����L���v�v��7[���u��7��)�k*Yy��~�X�����<�]�N(�3a��h����d���$�Ӭq�����*	��}wr':5W�����"x$S�7%���H(L±�\ݎ��z�-H����A�Y�PM�8�n�]��N��=='����R?��E*�Bm�v��P�N�`������c�);�/:�ݗ��{����ͷ������2�Y⡂;�vU�8�'"�K�::8J��?�� Z�� �� W-c|,�z_�&"&O��S�o���Dպ��uL�`o�R��y��f�,=^$ۓ��v���t>��٨+���<=� ÐMo�lz���p$�ۂl}���8��ۃ!?y����]F|�����GZ�.������wb@V����V;zܔ����pӓ�x_�\cg�Տ1���(��y*����d������N\^��}j�Vt�`�Hy����1�4]�<�v� ���#�z�}5��M0y�,��:��N���F:�K|�vl��s�A\{�t�I�CgF�f*�~ޞ �� �`E%�(��}#"v,��L
�i�����8Q�e���X:)��cV��/ep�����ܱ��l�-�G�������R&Oȣ�J�&���BbS��P�ol�A�x.�SeԢ�6i�=��q{:��N�62t��Cd�4VyEW"V��&���MZezNr+������?��Ӧ�]��-��7�o������[���N_�q���"����K�PQd l.�_U������ߊ
```

---

## File: `public/FeaturedSection/mashable.avif`

**Size:** 2143 bytes

```
   ftypavif    mif1avifmiaf  pmeta       !hdlr        pict                pitm        4iloc    D@      �       �     Z          8iinf        infe      av01    infe      av01    �iprp   �ipco   av1C�     ispe       �   #   pixi       av1C�     pixi       8auxC    urn:mpeg:mpegB:cicp:systems:auxiliary:alpha    ipma        � ��   iref       auxl     �mdat 
	8uba�2�D�@���"��rTeƟI�cR���cje��n�V�䏹���]���>���F��=��꜖F	f��҆��V�h�L��O����,�l(C7Y��Ě���5~^Q�(����xy��e�D6_�|!+��A�7W�`��ȣ��}<�O���"7��$��p�4�s]z�'��%���g�Z
���M+�K�*�g��w�ܰ�C<���DmPo��"믈��K�{6���Z9���.'B���:�E�k��R�_�´,��x\�l ח�х;�D���S�O��01�~[2���:�\�L�����q����6B(l�U�ڧ�V�-fLa�C.��,Y6��QU�q�+.S�|�Q�>������Qos.�^"�BA����6J�X��
�ޛȅ���$�S�7��e���+���1d�ćH�����z�SX�O��\�F� 
ubaP2�	�@�ݘO�_�Fy��YkEL��yt�u~q��)�C��[`�/ذ����M����2>�
��RVF�Q+�H�9m"�6db<���>tE!i��>��G&hN�Uvrx�_��٣8�;P�5�A\�8�x�DQ`%�2�.~�US�dFs��� ���v�8�����*&�~	��*�A[�>!ZQBF�~��N^j�q�.@W�%��n��$���,A8!��5%7�֡5\��<�;G�9x�j�rh]B��sEi���HA_˿�J�tcP)��v@�)�����T�CL�� #�<Z�;��E����B��5�\x=�)$�\�ݩ�!w{���%r*z(�ƺx��
 D�V+O�9�X���G�ᧈn<Qtr�����`���ј��5*�`�� f{����	�����#���&P��	� �fs�1��&P���I@p �S������-���P9�� X�y����a[<<�F��Y��UGJ�T
�FϨ�"5��A`��
-��[2��n���;�f�˘b�s��UU���e���I�����K�3,�	OG���6W/Z�?�����=�>c�>�_���Z[��Jhw��Q��/�%�z�N�ʓ\Q�x�y�W&�.@q�ߦ��H�(���'�7dL�Y���"�-�I~<��!gp�Yh�s��uf��k�A�"t�ە��p����� ���i����o�y �nΜě��xԦ����a�`
Q��� h�osT�Yy	�2$���#`���Y�µ��<�m@}���/�\��:��"\��*J�#{��%�s������j(G�Ԕ|g8{]lB0����l5Q)��^�C�<��l��BeX��8��<�
y��)X8hܗ:�,bƵ��h�1X�~jDY��KU��.��O=v��963JZ�����j/e��SK�A��=�"_͢w�����,��W��xW��N��B�1��R���EI���P8%����2�EFQt�Qzm�ZY��x� �A^��'5�sG��Iۣ���a���"@��F����H��G=���;n�{k���S+��i�1u@�����{�L��@.�pa��2/�VӮ'v�J���U�����!�.#��`������_�\��sÆ�ni,�NI+Ac�
y7O7��v��4y��4Ʃ'��{����Xp�.�0ۇ6�zp�!
�`Ƃ
�\��0�۔ӌ���Ĳ�b����L�Q �(M���-��`:�w�,u��}*ߙ�h�[�����|�T9�V���j
```

---

## File: `public/FeaturedSection/techcrunch.avif`

**Size:** 2092 bytes

```
   ftypavif    mif1avifmiaf  pmeta       !hdlr        pict                pitm        4iloc    D@      �       @     �       X   8iinf        infe      av01    infe      av01    �iprp   �ipco   av1C�     ispe      p   6   pixi       av1C�     pixi       8auxC    urn:mpeg:mpegB:cicp:systems:auxiliary:alpha    ipma        � ��   iref       auxl     �mdat 
	8!m�����H2�D�@�܅&�$n������>�?L$5�eP�3v}9�����շV��K��ֆ컸Mq��jE��ž����ȵjc��-(	6bN3��?"	�9 ���vJ$Z�,�HA�zm3JHФG@%�fF�j#�t�f^�Nv2�#Q�F�EyC@#Y��LR#&��\�Ɋ�,��
=�X�7
NJ�8�x	������y�1�s%�z��_�����`�i�R�����6rD�/�(��^Cw�����V�!K�a(���G�����-��zJ�㉵��F��hbv�����Q�[�D���]g���^�R�O��`>��EJ�s7��'�����ˋ�T�q��� �U_RϚΙ��̂��ЭÍ{lY�cs�����/d�qIt�\�j�Ѡ�R�w��I��Eo��3��LG�4��١b����6���n�^��D�"�����tYv�ܞ/k�G�v�h���"���0z��d�f����x�A@�"�I6R��&�?{1�wu+��|��H?�u/~(c>�R42�w�Z`�>���0Bw����� 
!m���2�D�(��ܾ�H���h�Qَ1k���+��[����϶U@�e4�G:�+���r��o��RQ���FYfky}(�̇�4��	R�_���(�LD͟έ`{谵��$ќ�a�I#����B����ꡥhh���.�!�a�3T�y.�j?�㭊ㅍ�=�MvWD��3\�W���}7%d�D��m�p�^�=G�o ����N��g����ɡ���U��t)�?R������C��&E�	u������s�V�3V��a��[� lI��mT�EM�R�T׿���9�,���L��A�\��TW��eg��Ǥ-�!ұ�=��C#A��Jk`xPp3+k͠��w�5 wZg��+bM��Ղ����O!o�������m�=|�.
�ķ���$��(J���c��m��e���^,������?��9޲ݽw;LJ�o�ie&�j���Pb���}�	�|(Z]� r�׮����I*�i�R����e+o�j�E��wc��- �^�e�Ƽ�����Z1W1Zq�-w|����F�������
����}�����/�6Z�7։��Ga�aV�t�3yoU�u�H!b��%���i]��I9��b���J=M�xD��+h����=��Lv��:�h󓽈㶈��vӥ�H1k顷���P�`�v1ˁ�1�J9 �)"tު��i�E[tg<����dj�������n2�����?��f�b��-�$�q���UTp��k�_�w(6�og�1{^ �Q��q�R3r�b�l�� !OWYE�r ;��S�BV��+��Ny�OK#W�z�%�f���7A�)]x�R��΅��qJ1%���-�E��1/�@
Ͷ�l�����6҆u? ���X��iq��bR_!���y�~�g����K7�i��]�P��Su���F�~u�mU�X�[�1�|�f����t9��nG[\#L5����Z�{��w���<=�֛C�۹=���ffLC46�1���=�G΋)���rK��
��KKx�Wv�G�E�-��#�>�;(�g>��u#��vm"iO��^�s
4>;���_(
```

---

## File: `public/Grow/group1597882005.avif`

**Size:** 21507 bytes

```
   ftypavif    mif1avifmiaf  pmeta       !hdlr        pict                pitm        4iloc    D@      �       L�     N       �   8iinf        infe      av01    infe      av01    �iprp   �ipco   av1C�!    ispe      �     pixi       av1C�    pixi       8auxC    urn:mpeg:mpegB:cicp:systems:auxiliary:alpha    ipma        � ��   iref       auxl     Rwmdat 

8bo�sh4�2�� �@����n�?�`�>i����%�����"6��ЕTo� mCL�*��=���L!CNS|f����7���nn�u�l�C��+�ey�2�p-w�����i�,�˶e�Ħ�F�K
��/[�XGS0:��[8���f(�_uo�P�Hl��C7Krx��R����x�ia��~��	����>��qY"�$d���B��A,Iȥ��tn�7��Q���zjJ ��7����#��4�� ���s�5�19��U���6á~��È6`�.�Ā�lP��Y���%Zmk:����d��=:�c�Z�7%}�o�:�x�͗5��-f�5�����k���OƵ�5Wrj����+I�*���w�]��,'��=y�ܺբ��ˎ
�^D��CeH���s�dj?�M%u�jkġpO'��.����0���"�:k��n��Z<�s4���w�
�)ޞ�{kni#� 5&�9�wlD�o�r��n�/A��#|/`x���T�~:kBA�lY� #��S�gN��n�w�i��u՗�fH��w��&n��ۤP�+q��	E\��Y�v񝧉��j �J�Ȼ�nq�ކ�F��:����#��!<��I�\pUO}<Cy[X�[�:;���K/x��h�H[^E	F��>��j�#�ɷ��p2�3����p5�VfM$���^ǌ �I�5Y7�[|-�k�P'A��\�I�$7�G�����!�?�,���JtC�~R���DX<�!��ۆz5�����$i犩i����k\̯F�O@�u&�����,�W�!�[6����|>���EG)�'ޔ����T�^�}��ݖ�`Q������%G{�փ��W�B�Io������e�~����^��R✹��q�V/#�R˹:��(PeK���[���E:�a�)������=� �r�y���I�[C�@��aW$�f	m�x5,<�e�98}�Ch�H�i�����9�p���_�(ԑ8Ș�d��o?��Q�ŋ�˷&17]�0�au��6��(��'��� �:�	\B%e 
�Md�M�z�ϴē+�+�Λ"��]ͥ�k�f �T��c�`䣗��&��l6�Bn߁7~�1t�Ŵ�������ê���Ϲ�J�=��k�7���, >��.��� ���|�1����g4hp�E|ն���l�=9��M�t�yWT;6����PPd�� D!K�ow�F��d�Ɯ!$1,���� 1D�F��9���:QxC��'�*�T���m^�����?L�a2M-�]�K�+�&h}�=��By�\Ku?&|1�i�X�P�II�����3�c���G�4�����V���]�'`��}����zͻ�� տT	V�m$��V�ڸL�e�6�z�p,�������M��>��>�>�_�]u�M�Gl������'�� �i��L�����:��^���K�si��L�5�t��&xM������'��VE�W����V�R�E�����H���$����c�>c�C�5&Tİ��}�4^g���,��łK �GhI[�U6�����k$b��9b���ڝ��4���5L�!�@	���kB[�f<~�QA�*f�T`��ۼ3y���F�T3�o�Ɔ��g(�ʚL�o6��+�F�x��vא��,����~�U`�z�  s���*��=zZ%q����ϥ7�L��Ģ�Rj"��h��GhyC��pӅ�����%���S��m�45ﳍ��Ҿ��g��
���.�l�b�f�T�;"2H�l��vӺE�9���"�p�y^}���ǎ<
>�X��$�8����h��ɓ>ɍ�?�C��sn��h�����T%]���/�з��!�ܑ����N.��V�}xv�7�c�?!��6Dr212�22`���G�zD[2Y%���u<�hy��[Щ�<_��]��i���m@ß�����yD�e��Q��M�z=N:��v�F}�`��qK]�o1J|;*	�J,�H��OR�I����0�5c�>�Q:�~b@\����p��D�好���V��ܓZ,8Ǿ��jd!>��i�=��lvVJ�a��'�k�an굳�&�`���K�a#2i+nA1-Ԥ�e�D>3m*\Y;���k�h���,	\�|�Qj��b��,O�"u
���ɰ�i_��8,�)F����+�L�7��igm�{?���IO¿P��\���������[�i��J����P���q�_Di`��`��[m֤�t�0|[����՗�p\��z24�P�Sc}Æ����mTx���D�ݱ�H�f�w��������1&�?��p1��ƃ"D�����\AW5�n��
��`��\�I�`�s�f����d��>P�@��v�Q)��������R�_G}�ч[��Er�ǵ��CGC��co�ɮ~�w�?��z�H���l��Μ�w(|�ґ����� K�!�3�2��]��PI20��t���M ��ʄz*&I����H�g� �xK'�ܳH9���vlu�G؞f�֔���a�J��#1v$!���}Qȼ��EV�#l,���W��Ӻed#k��
D��N��ocl|�#�8;��sԑ�.Q)��d�	��ۻ�5"*V��1%ʳӊ\�#����������<'���}>��pp�h}�G��*�:C��h=��Q:B�c��O[S]*��`	��Y�_7i����쑾S迠�(-��wK6�ބ٭����{ ��[����%��	�!_��Ǆ5ˎR����|+��dۋ?�
��@6���]G"J��ؘ�Z��m��B������nh#�9]��!_�j�Uo�@(�d��f. ��ٗ�DmTn?'��S�XI~]��%S
)V�^���2+'��4�Su�{�!���Ru�`,̙��aE.��]��?}l��*�7��C%��^E��8V��5���Sq�C)M����a'����F���׋�����W�>)#����يW��<����ss����Ϋ�n(vB�/ Z�/������GLBc�r1E��|,gB0���R�]=�����o\�*U���{'7o/
}��g�־�b�+u"#Ȣ���������Yݸ���B�1aa�"�+�����)����M]ʋ:�`K~�Bʕfɠ4:�r�^��Bw�;�%Y���M��7��҂ؙ�K[㚰�\3���s�`��y�ƒ��r�k]����%����*����Ǿ�Q��U�Wb�WM�|�gު�WBg§;$��P
l�`�[�P�b���� ,{�]3}�4���#��-���^&�C�q[�ª����w͘(�FQkXЙLg�2�� 3e���[{�.�0��YOJ��9%bX4"�zJ�5�eͯ��O.�6&�6f#&L���u���iܶ�A���X^��t���UU\H�[�L���,�B{���lֽv��,������,3��-�h��H��~)��9u[L�#�X8D`�3����Q�/-�T	�?��K��I98t�����tC�R]��˂J	�;5����ͩʄA�:���m^A������B�������x̡���%��(�Z�Ѝ5��S�M׫!۝?��k� S����@dU���HEi���+�h��a��8"���O	�͇��;��t�4/&9I�g���_���=�<Whԓ}^4��v�����q/�S�c�j[��##�M|&�䎨�6/���0ǀͮ������R��*|����\�,M�f��Z�@�s� �٫�=����Z¦A)�~�r#�0�Mq<6��MՔ��_�,�,��k=soi�W�<a��E�~7眙?u/q����n�;�g��Js�Wa��%���Ρ0߼���A�_��rҠa�`q��.�[�T�vBVԃVX-;f;�U���i��:����2�̫���
��z�"�8X�|�?��2��Ŝ�� �`1�$��M�"��I�����#d�9�$����!;�T$�_쵦��f�ԡ���^��i��UoJf���FE bHߒ��泻	=ud�Ȣq���kX����_%���	�?1ݭ�
3�D�M+� ���wmWO�K|r�MW�#��6$C�o�`��h��]iq��9�2\,��|ܰ*�9KUIt�}���H�K2�DT�x�QB)���o��ҀN^��#�Ȁ�?3�C�F�+�W���'�Q^+���7chjP�C6Ǣ�5ԃkq��R���,}fE�M0��d���S��K��6� �&ոK�G:�xv��T�\�����'t�2,R��0����:��8~\�g��%��D��ɴ����_��4;
[��f�?��zFz:�S�!��R�)��x��x�(��e���G��һ6�zÔwJ�����Hp�� ��[S��nl���N��������>7'^�)a�c�`WDLj7sd�>��;yH����}B�s[��I�"oI���_gasA!��}�qs�a/s��ퟺ����X��Q~���_�	hiw��BH�|L��H��1�\���p3����2ya�z��P�[2KeVi1/��&��M(��&�.GA�5I��ѫ�>b�Mj�Îx�p#�o�>�U�e�yX���`	�g*�T�2��p�A��$��o�)�N��Mc���Np� V���f�M���ݵcU��{��[/��I���O�����z�yVlQ����:H�䘃��Y#�w��6vc��!�tx�\-��jy�#�l�Ot�Ne���]ݓBP�w:w�hTD��L�P�uB�h	V��9�����j��icm��[�^���:*�0�]]�x'	E�(ӽ����Ė%(���'>{xPQ�OnP���n�����~���q��|H���݃"/ho?��AL�N%H�heq��\���z�-��z�>�ô��ς��%X�T������������r��eJ��ϱ�Z��s��_�G���}Z���J��12(�`��i��aSh���ZX���Q����:S��g#�{�~���07%ػp�i1�i��ɘeA�1��Ox��Ť�&W�����FB�����&�6H��R�Շ�w+�mv�!H��^OMm���,@h��"��9|Wu�� ���D���C'�-;q��)�EE��Oԗ�oˬXpBMpvL����g���Y�>WF��u��o3�}i]�ʂ�_EO˓���}'�٤��P��ֺ{;�򏶃u������F��f���}�I�D+Z?6�D�/P�V2�⵬hky\xh���Z��t[�h&�.,HÏpoE�t�zI�>9Ot������������x���Y[0�ͻ �biCw�mq����H�Ѵ���,���'x�cL�G
�RZ4�A���<� �Yi�]��}Y���g�����b��#&z��F ]�J��DR�AkB�/Q�c���6i�i%x�j[,��}�x�#ݞyUo�Ѱ��FS���:��T)�~�L5�c0vE���[��~9�o1J�W�Npf%)�_#�pp��_�	�̿�c���nf��$E\:15��v�jG���ݢ{�u "P��o����� �vp[�uW6��0���Wӝ�G�	$�6��suy	`��%1_��T����dw��e܇�/�� O�P�Mީ���.g�AR���np�<X��ލ�=��j
K�׶7"`fs4����ө�d?��k��le86�Z$E��	.���R��Z�|�a)������d�����&o�,���>�&o39z��Ӈ#��S���aœ%����q�G^���S����q�8�G�N̐�/�Y,L:�� (�s�+�X��Q%��T/��<:qͥ`m<@��΋&"�lu���nUX൛�u������!G���I�L�H5xCD����"�'P�2��"���0���;�^ ӕ�Аב��\s��gQP�G/ߌd�	A��[U#U�$& dC.��k�r]r)����e�>k.���Dv�h�m7憉C��z�3���m6�la�߸�7����W&_ө����7	H�.O�d�M�˲��
z{#�Y�!̲�X1C�D�(����G���O�m�F[,n��l�>�'�`���̀^��Z�^�94���L<lͩ&��Xk�L��w�?#Ү7�p��m\�G_CS���q�$�8��f��e�{lojȺC��ܹ����KךN��d��H��k��,�I��,�t����GTHΪ��*E&%���@P�u&��)c;/���NB���8^���*2A�%������j�Y����B������+5�bѾ������l��JΌ?e;��E`��{!�O9���	�R�C��G��~��6Q��ި�"Ƨ�p@x���w��"�$��Y`b�k�<�uJ�K��QTLT,;��y��L|�$��8�͌�|� ���N/Tۡ�Ȓ+�A������ <�*���R d=�K�5��I�G���Hj���U��J�����*	�a`�$�C?�I�>��D�l۾�[9LT0,0�I?O���0�k�b����Z&Mi��;[r��Ԭ6l���%*�]
�j�뀪��y�h�LZ��N����m��C!��>M�)o#=%䪻�� �f'7�z��U0�Sq(p's��bt{❾$��
n�%�U�&�8��q�I�5�N7��7ݙ��tPd#0���6/ 2�CQ,�'�ER�%hl;��*_�|)F�BϟCH!8k-��&(��J���� zH>�t��@hr�X�DeT�׮G|u!��A,����-K�:�"Y�fS��ܕ5�/��cLrh�F8{
�H]��F4����$ǒ�7I�GZ_���hC5��*�^���/����g�E��g\m��22}p3Q1����ڝݰ�cn1�������YSf�&p�f�E<0��7��/u��j��0�����i����ol��@��2/��/*��ƣ�e�O�Ql��#�>��Z�D��}Ɖ���M?������=��y�x%g��4k����ߥ��Cߏo���x~�TT�:�.}��O�3Cb���͘s��4��T>�V�+�����U����ȓa�_����\�R8m�BO����Ai`�_3
h�] +MI�S�C���^hH�]�R�d7�m$�on�ԡo�e�$�����}JQF�-zψ�{z��-�`CΞH���d�5Km�$��vj�E%�gʤ�����f�2�S� ��:��C02��������T"�vr���?/7ĉk*��I:x��4�Vv��k�������?twFG�n�8钼����}�xWF4��F�b�W.��)L��F�b��^���-�xk��.��8;����ۤ��5��s��g��o�A2ݤ&u*��g|#�|�,Ѽӡ!�$+,�gM�ߐ�%Wm��i�y,��v�;ZA,<��9e�+��Cޖ?�4��+@:�F�x��E~G~]�;�gi,�S� }SÍߪ�Ά�����ea��Pe*4D�ŰR	MG^w�
�eB����`�o�`��6�w��
�>������uYh�|�Y�6P��&�K�;iU�Lͷ�%��ꩉ��N%���������z!h��t��j�&�$ �����\��)�y�Q�ֿg�˦�Z�����mbJQs�:{�9*��Q�mfS#iɉ8hZ�t����v04Y�Ҙ'x�ʥ�|'�Jә� �k�>ݲ/{��	@�P�]�=��4bA�ۈJp�&/�qb����|�Tb���6�a�_w�!��%��UK��[����uY��|Bpy"a�+U�N�o����Q��G�֏�9]�����4�/�<�&���bѬ;��6/�+u'����~�z'ՠQ.x����E���x.`�5�	ed-�����O�&"�kD;���<�I�R+}����&�(oB����<ީDA*���^E#(�"�� �)'�#�����[=�T��d0�IP��Jf�˿�U��XӶ��ѱ7i~i8b�$5&܊��"�!߶�C����$�I�u���tR���(Юp��BJiu��e�3�)�V�hV���T��H��\n<Uq���$\������������ס;��+G<�^�! `�]΁�""�'@JNʘ�ZD\	LD/R��Q�D�@"�[����Ѷ)B��e�%�0��{�X6���Fa:J'Aէ�*|cA�'����|�Ѿ���G��|��*"j�¦�!0� ��W&Rx{���wԜ�2���¨�y��eۈ`����,[H��%�*�x��i|S��̽\�6�,�jy�����C�g��œߊp5�R��e�Qt�ɲ�-�N��+����<��`Xdth$���Ɍ*!��x؊n^�]uSx-��f�8���ʈr��(vGq��	Ë��h'�6\�X�0�6@�r)����E��]�I�v�����I�Q	�~���Ci�.E�.������(����&��xh�T��U�@i���
���c�T��Txdr����i�Tq��c��%�~U!Ԓ����|��o�{��p�,�W?��B5��77�i����tڸ�X�y���sF&���q���(�����ä�w�\��S3^w���}~Хp�����#���]ַ�w��-~[�*0fh[c��V�V��7����d����r��$N*MuѦ�5�({�ea<�J/�WAW5���{�e��-��lB��Lb"NĦ�C^G�	p@ܬS�Z��qߟ�R�)���n�����^��,�L�'2�9�	$_x�`>QMz�ʙN��X`���Ib���J�]6���%�w���Ow��S@�+�X��0�=I�S����cɚ_�i,�W#3$}���K&Yj����]Uc?i����F�'yX�
	a�DZ�6lc��&��u�D�R�:(�y��8bY(SFu�n?��}�iSi}��pu��V��Go>愷Yە��Ύ-2�?n[,����҃a"��
���!�n�,r*�u���`əH)ab��;��[[ �)��l�x��[-��A���fl��!FCEΚV��
#�0���n�a��ʽ~Q����)4z%�ĝD^^R��<~�f�3ۋ�;�m�� ���0m��Y�+6�����)�p�J��?�e���21V����dF�t�k^Du���Ene�!�\�_{&��8����J\�F�m�n�/B�Џ��|"�4ǲT�T��]G"�$�����<@}�W�ݠ"������D15��m��X~��a�X���C���~o���7��?ଛz��?�I\�l~.�%�vX�{l��i!>����T�H~���5����D��ȱXցMf�l&�e.�S�M��w/�v�Si�W;�GHY�vU�a%(�i�x_��
�%g�3�+���̱�#Fm~9/�g�j�qΝ�	��Y��\��V�p�Ǚ� I���=5Y�*�R�dH���Pc6�lq��4�8��L|3o�%`�w������ço�1��F���Cc�%#h�q��p� _?r
�2d9%�^��&�|(����?�Vv���,-c�e����>Y�׽�c��A�/�'@�G��gG�n���?R5eqh���L��z|��V�~�(\dY�XS���;�X�=p�Ymľ��\QW�]"j�^�U�e���!��k��pߓ6ߓH0 ��^O���c�Б<�L�nӆ$�l+�6�2�	:Q#v�����yK�֖�9�5�f\�@��yWd&2i1U�'<����N�X�8t^j>D�|�t�d�c��y�hdխ��4��P��F��Uт3\�d����A.��©�]/x]J��(\4Tȍ�%�(�(7e�F*�[���Mf��C�xh�.˭d*P�0���X�R��-[��7��R�z��M��՛��H6j�$ljS����͎B�,�М�b�:E�jJT쟉��|��~l"�	��~~A�x��R�U�>�)��L�i�c�.!�P��%v��*ju��_�����fQt7
%+M"E���Z��k\�w�(�li�U��~��"�ߨ`�d�&X8����B[�����zIHե�&����tM�#J%`����CW���ǥVzD,+��V�M�����lҋZ�|�?:."3���A|����+!����~
�D)X;K��l;��3�tY�o��b���w��0l��0&S]ei����~54ٲ9�eCpvL�/�\��߂d�&44~�jz��\�(Ar������$�4�w���r��tUd]�sMf��ĆQ�����n��p��J��r{U�@|�����ײ{���c��[y>������%�&���+p��;n��#��{����<�.	v�K���	 R����X�RK~���L��'�jn��H���2n3[��m!a���_�TH���R�6�Z��\Q�+�]�H0Z���J.�G����ɋ�r+#��P�_֕F�P�Z>�C
��J`O,����1��`O�U���ۋ{��H����>8:��0y߾av�ق��#�o�-�Sٽ�iȧ�]��]z
�=��&�C���9	��k�4�qi�x^���
bRpD�s��vW)2FL�,����Ǟ�Ep��R7��z#w�}X Sz` !،,�G��և��!� N���{&��9���̩ѝ�9���V���x.8r�&+��3�bI�UG���c��U�2�C} ��-#�!-$=��nV��M�7�2�0c�������S����]|��;H��n�t��юYIc�K��A2a=�}�>����I]v�[m�=��w��GS���ܵ=݊!�C��e*BPsSY�	L
=���G�[ͳq�$M=�� �ܝa��3�-e���
�)l���(I�_�y<AD~.�CTa��3Tk���@����Dj�����N�{1
sb�iEP� �;"�
fC�? &��k6c>���7��5oe�m=�X�tߝ@�q�~��C�*��B���]LhǩBU���[r_t�����/��V���1A�CfIJ�I؋�	Q���3=��Ռ�m�H�:.���a?e۞g�w�#�'�*>y�:�;���oL��k��
�$�m� ˶;�Z�����������!��6n=�W
v���je(��D%�y�٫,����L��c�5��H����B�vi �����z|��毂%g�����ξ�m)o���!a�������W�Eҭ�煡�@y $�?&��{�~ó��x�aif4P��7�M���ULY��������S0����ރ��z��������O�̏��Tb�����W�Y��W�UD5�u�.3���xĆ2��[˹��vy��#�tDt�*�Sf<1�u<��ߏ-��g��Gy����4"yS��+͠]��!:%�y8+n t�4��(~AD��ż����\��SV��-���Xp�yؔ�~H&�#hK9�+�Ϊ����;dS!�\�������x�
�����1.۷�_�:���ݴ,�����ɵE��P[�y���$ Z�E�)�2�M�x*u�_�,t7C�-���臉Gj�/�7}�d�&���åJļ�_���/~��M����
�[�ۉ�	��=Y"��59��F~��5k���2X;Y|>�|5�,� }WN�W��P��l�_���-����E��zŻ6~WH#�@�1\6��VV]>�P<�U���cB_(�,&!I��߫J�7I��u�'��E	KQGBs�	�aʱ$��iU4��N!�����˕i��|T.�͟us��Pd�����9��T�����Q^��ה�0���<X���(r�H"���B����Ԑ��-�q�N�݁n��:��I�߉r�m��-��2���u`�n����	l�wB$����0����)�B���t[Ŝˁį�iL�3fh��9G(+��&�P����fE�����׋3J`��a�6��h���3����Z�]���^XB��v1ˠ2K���J���nE�`j�s�k?E���O�^�M�����KO*Yl�=��Q�<�$o�R�<6��%TT�i8{�3�ƥ����{Ԃ�mѥR�w���`�֓�K$wn]Ŏ��]:���r��i"���ۿ��bs��y]�����A�2k��� ��o�b���2;+/��0��D���@� �#���A���i�e���r��>�Բ�@�������L��& V�G�#f ǍT��g#]t3^I5���Ԋ]|��!%z.�ou�^X�Jd�]Ș�����
ߛJ��H���TN��K�uGRʊ�����,�w��_�-�F^�*a �'�$rP���~TߚU�I��q�1�)iv�ƻwP�Li���.�̩����77\h)nO��J�ſ����92�i_�Yh�=��c�0�qlA4�����|E�>�'N�� ����َ���Yo���M�8#��D�ZV�y�)y���صogARd�J=�Ikq%�_Ը��P��0g��H�q�5!���t�����A�oqm�%8@A�7������ٽF%$�y=p�>F%��G�3��=� ��5��<�D�e{g��xsV���F��C�=c��$���,���c��c�.���a�S%�$�1;���K� U��F�Ů��9n8�Q!Dd��b;a�������_�Ļ)wr_u�@��#�X�[�(����M��7_���ߑٴ��{Z���~��/+��m7	~��옾�}W=����\�΄�2X�	a m�|��(�C�X�_d&����nX�Py\��z,G7+(�o��aS��)拶���ݡ����L FFś�}���d�K�lzVͰ�0�?զ�[ɾ��ht�9�й�j��S���T.�"���J��{p�o9`葠t<ܚ߇�0Ş��4���R/�ѐ�Ue�Er+Oɢ�MӇ����YW47J0hz,"L>��Q\OC�#n%k�Ҟ[��~�,��߽W���k���ȋ�UJ%V����Z��+<c)*�0���s�7^=B�V]�J(ZG��+���x;_��FÊr���A��mfA��3%�
��b��v�͝���:�]F]:g��տ�����rj���v�o�G��^V���dhP%V6�����
ɼ�"���ؿR|g���Cܰm��3���$�|�D6�lrrA��g2�i|u���:���9N�RsS�;%X�T�RR�z�sU"�d̿����{T��X�1qڪ�7�|��.���z��Q�o`�Og��S6f�q?�ˡ�YL����	Gv^*��:��=�����	a Y�3d;���n6�X�HiW*�9����ͷ��-i��@u�PiX�]�Y0z�uL�ܝ>93]���C�������z�5���Q��2f@c]. x�% i!�j_x�}�]�$x��FA�������[�����6R�L���>sL�d� �L^~U:n�,c*�<肫�{e�%;���I�m���it�oN��,2v��߷=� {����L�P��P��� q�(]�M��Ў�Xa9~S�ñ[$P��IΣ6���p̜�\�Ę�2�
e���z���k͒E�O����)�4lm)�C��S�x��U����NB�gl���m���z*�,/�JN�!:�n�����܊&���[�[��$�Es==\)}p�A��uUGk�R<>���ĵF��fz�lN�Y��l�#����j��m1Lx+�b|��z�۱r�EH��b���oWB��RR�r�d?��3+���@�Vu�S�kt��?s#��^�����Wg���oŚ9�]�^�d��Ie�0�o7���V=^���x�t�ǩ��m���'^b�Ɇ���ėb�1�����9�;׭�>'m;	�����0�O�;�+B2<���1'>���W4r_�0�Q�̀}�I�GɄVp�����sx�u���cq�uL3�S�1̀G�h�e���}�L� ��}�F�ٔ�e�8��Zj��/�0U�[՝����9���ʽ�do���V/���-2�ޡ�c�dHH_L3�-��u�da�"��}�}�o��si���E��!iE���1�	o��5U������4��HOpq)���R�ċ��["kI�{����_fe�H���h�͢G�������eq"~l�N�-�R��9��%n����h�O"oѤ��@i�%�a�/՟v��/.ђ���}j��t765�y���7�+<�!��˲r�]�"I�7�����5��F� ��	���������+�*:�\^�(j���Z%�-��b'	[���T)]�'TC>?R�#����|��V�c��cZC����k�s�{��Ml��G�yb���=���27�ࠆ@x�F��6x��gL��jX>J
�!X�|N�C)�sF'��ql��<�g'�!�V�T�1\ɷ.sx_])�&#�"��`��]	G+$|d�z6���r�e�ﺭS߆�V�<�C,��f�!� L��Y�H��T���`ȂEc�����m���^zWa��i�������R����<���Wh�[��R~�����kZ�Gb�&���6�z����k�d�����7�?	��-���g0rx�Ƹ�z�z�@cU2��X)��G#�d�"��F���#?���P��L�b.�i~~�RwY�zl��oݼ�������?��c~�����n�	K�}���M���x�%��ߛ$��i��� �gY+�T�Q����$:e��%����0�iv�L.Se�4��iySA2�>�m!/?/�d��]�H6k���K�4���;�1֎S��|�̦�����]=݆2��g%�'{6|Gڀ}�l�`�����(��;P�y(Q�y�y6��'�.����u����#(��� D-���h�6�E�Iɰ4�cZ�r�_�>��*��&Ba����l��Kw�3x/��n@2bv��%��D�����
Q�����Gkyv{�q�?S+�������e�C}O(pX��'
e�#+������]���E}��}�*S��8N�@�6eM#��j��o�k��F��V��V�}	��o�!kx	3�+L�����<�eX3��g���M��)!���3�5�G��TTڴ>�׹Lr4@>^&��Ű�)�_E���/R�ߚ2d�Q�7 �6ȋ�v꾽�w���Ϯ�V �ƻ@VD������B-O:�x�l�O�h��5�z8h��d��ָ�����]���H��.�۠��?1$�|���OI�5�U�>TbS��h)�o��	k��=_�OmtP�;��Day��R�kDʐ-X�6[H��W����) Ⱥe������y��y�\�W�Ho�f�Ӣ�ڤT{�d��d�>[��9�m�b��ںAIB�� <(�UB�lޜs 3��͘�-��.Rp"Y�{��DIȰ�Y�9d���NL�A�}�8Eu����	r��R�m*xMv�.^�io3��|R��Y���-��j�%���}g>�5%�YD.W�?+�W�w�F�0�5�*�,D����^��s���"�\�iV���jCvt����Q��KľZ{1�뱞���C�~���Wo����IW�@h�xG�^�n�{�}6���Q���j� �+gkTeBg��<�E�3L~_w?�G-~_�����Qc����l�f�8��c���n/����`��8Բ���J4���Rt�O�D��80LzDW�~��F*�Se��������A雡�_%�c��ak��CZ�DL��΍����n��Ws*��=¬�(A���u�Ժ�,:����s��Չ&M:K-��פ�%̶&� M��_��-˸�ʡy�%�6#l�r��&?)_�ͻ���2���c��)���%/��d�4:re�T���7kD�����4�3?��؟����ϩ���b8������ �10[�P��a�.�xߥ�V$t��qf�6B�M�BjQ���#�L6�	$��L��(XI��
�*�Ŭ]��A4�j���;�j��SLs���dg�ݡXw��F��L�B;Ӂ�Q���Zܯ��ov6_�%�6��7����°`��9'a.����m�#��G��Y<	AE��\yO;��vA�����d��׎�w�p��,�dXݳ���<	6x�v|2��Z㔑3kZ"*��+�:��˭���P 4m��ʑc�*-zG�	X˗��Hn��B_�Q�k���Ƭ��@Jj�_S�z�����V��K7�Ӕ�= �A<G��2��	�s�C�����U�¿���8�:��i�P� �7
�[�������;�bQ��TU�+ܳG�TJ�R���s��;�� ������H�I��*"�+�Οr~U�ȧĄ�k�ɤ�#�f�����7�N3��ngs2���\�Bؾ��`0#�=��E`ϻ��;����D���������_P�
ǩG�҇��"��-Q1MPU����a��h�B7��FI+ ��@*b��{I~��3��ZTah��2g�*��z�)ϵpB�F�}_�����<�1Զ�X�x6:�D�}C�gu�.��)en�p�)�'~R,�+`�d^�gL�U�+s qu�^?�`sF��f$���?�X��E8 (0���1����9���0����ҟ)|��b2�d�|4��#�Ԕ����*9QR��4���̳��Sc�=�奎��AK������]V���a-���7�5�2��VUr�n�o�8u=S��/Č�t��o��b���~o�H��g��V>Ru�3�g`Vv��즐���B�#S�Oo WܸRYi���E���=�(K�eTG`�ԩ��H}6JjzD�����/��e��4F��z�O���s�s�?0>��Id��v'��T��*T'k��
����ta�)zR� �	`��b�-Ҟ97f��'4����N\Q�&�)#����7z;�^'�$������Y&���> y|c�\ !�d��n�}'r�v�RDB����r���K�A����Xy��h؈�����/�Ħ�)鞜��tQ��/8�k�;�"���tĢW��/�Fp����DG��餿J�8G�ۮ����ƏX\� ·5=���h����@B���/�Z��N����,L�H�m�9!�-�P:���G�ˆ+o�ǈ�]����>、+�a��'�XO�ME�w��I�Vt�Z����2K<`������bzv���*	:U*�Υ�j�,<j֔�V�-N����T����;jf�÷��Z�Q(�`��e�L�p-T���%��wX�2WZ��f@.�[6 �Q3�,��)���f��|��� g%���.Z������s��Ǒ�� �վ�ٝ�UM�q�+���x ᭲�B���zo�BW�/F�!vb��,�^u�"`\�'
'������I*iL�	����֑Xj3�׬�A�.S%�Z�2�#���ش�4c^����IρrrC�z�=��Lt!�:��ȑ�e.�]�ڥ��)��C��wmYAA�Q��j5.G��w[��6sn��s�Wn⚋j6����q�8�U]u����:�:c8�9.�g�S�c�V=�u�K�%|���BkGH>͹�7�z��̖����t�R�J�����!R`��� ���C�EDDb�Ʃ�<���<��?S��t��ֽ��FS�I*e�y�P��c��$���b`�0z3������y�כ�Cӗ�8��2�}x �1������u��x���B�8z��ɬ����2U�o.
,����&�$w�Q�'d���Ί��H����+�[��R�I��N1 ��L����g~�,�_��J��fb�M���i�B�9NcIj\��$ A~@a� 
|č��@�G��W�?��c�Tz�W��pWM�����������s]b�խ��y�spܾ��#x&�b�>*��"I>�v:���FY �w��h!\��SZƝ��P3j���rƃ�'��.�x�NŴ��)�����P�I9� G�pJ'N�E��L#�1TMaq�5P�u�4���4��-j$��a�͇7����#�i�LR9��#:Q�LcK��S�Ø�E�a:Hp�kZ���T�Yt�^��{��w5�r���`��+҆����B�k�^�h/�E�&���6��4�O�ͼ��@�mё�Jc�)�&؇���:+lq�V��c�5�|A��Xu&8v��t@��(>�j����l��$�ƨJ��fJI:~������������J���7p�	��E��>)o"��JZ	Ų�x��h�
�B�{򜠖'~P�Ɵ�!�B͜]��}��n�T\ ��� �K��S�D�>�� AQK�����ZG���=-�mx-�m�ht�ғUáxe�29��jd�/<�� ��T�ɍP��/����8ct�4�P����ׂgg_��ثpwo
����-J8!rѮuW���� C��C7�Ǥ�\lL2�?�j٭�/�[���T��(�T�ʽ�~�Tn�C���]���Riv���g|�>�H�<�E}��~"NϚ8F��&�w�B�1snw&�1rO�B���x�3)]t�5�"�0�����sl��@=�Q�����q�/~���   >-鸦�[�wl ��YǦn:��:�J*��ex��h�ش�""������	(ـ�.$�Q�W�v�p�����Oؠ���(,k���-��|ZO9V�8�e�rN����@n�%�ަ�w��N�VmH�x_
��O��GF��S�[Q!$p��D��8v�;���_�=[ƪ�=c�|���c����	$xZ�K1,3I9�.�F ��sґ'��m�ⓡ�8-ћ�K�IS�LahnU��i'�X��8��
�v��k�u���Mʬ[��ka+M�l(:�5"��l�mՖ늄�� �{@M�q'��j��bVU�~�Qgw)�0}!s�<jR�y�#/)מ�5�1��	o2�=��V�]�7z�{�j��r�S�A���P�miպ��N�Oc�\+��B�7c�ʱ����z.G���$(h��;Ago|� D,����z��������NI��1P�a� y�EWC"�*ij-r�!G$v������&"��I����8����C"Q�1s�^{���,pL�Sct���4w�a�W*?�cOq�d
�y�y��6�ц����+����w-n�~��$v���Qr��M��Q� ��]UJỷ4U�p������h��S��s��(9������w%%CR���18���r.�E���Y$=OR���s�B�V���`_4���y�[fmhtx˞�ݩkS*j�~&Cq�cxA��
_=>⻗@`�,-sǲN�ؗ�Yw�j��3_�c��%���]|�QW#p䭩����$�2�ч�Wc��B���j�̅ ����}G;�T�'=߀�M����Jh���i�p库�`+�q��/������i ����Ϥ<��a��+�-���+'�MeI�o��4� �������-�3�p3p�{�p�7[n�N߼<T�*��� �#� P-�{��bB���+�բ�m�(��d����L 4�yL�~�� 1+dT�>n�e�-��p@j� 
bo�s
�2�� P�z�z / �Y�\��iU�=��c�s��p{���z�Yu���u
3��/��d�E����(�c*ý8v��{؊[o��ݞM�|j6�������۔�Km�,#����WFƌ�^���#VDqg L910	6v����'�y��D"H��y=�-e���HH��Ų�mҳΒ����N�"`�R��!Uwf���K�Ὧ�XD��2B'?���rN��B�
�����aZ��~#��fs��<�H�������J+n�.ƶd:1�2�ҡ��n�V�@��b��Q���v7�J�$�(?�+����D�Y��Xm��o��X�'�E��o"�r��Y�5G�LF�ڴ�WպtN���q��D�y44W7�j�nel����V�T��8��-K-+��Q��_��Fٸ��s'���}lU0���P2{�*<5,�=�~�
b�`x/��-����*31H�A=���ɫʇ�T9������ی>Ƨ��������I�2��3Y��U,ì?��|财�w&U���F�	��mI�P��e\� �����@�)�"�����I����
JUt�<�yI�1�=I�{w`�Ŏ[ƃx�X��%��s/�1�3�J�liSv���,cU
<��X�,ԎWu�<ЖעQ��!c.Dssas:����Υ&B�#S��Φ��d�|��c�;*�ʹU^��#d�M��!"9	�����d���;��y�R�OtG\&���^e&�����?��f����n�H����R��T�^�L�d�s�N� ����v��)?�Xi����M���� �t������+�u�V�U*y�6涉~qH�%���ݳV�\cm�4�o�	Y�G!8�D[������n�?V�̌�*ǜehe�D̎�,L\���&n��H�!_��ݳ��b��GB}��"��B�H��w�;Tv�"�P���X��H�R���$ш�#m�h�L��J�1h�C~P� ��h�Rƥ�a���#��I�d_�O�jJ`���$�Y�Y�x7���n��+��D�obU�!��^�(m���d24����3�O5^wp	iU�D ���0�������6W ����>�)zF(���0L"o��b8*�����UzK��Cm	��ObȲ�Y�"a:���b�h�C���m���+���̾`���w��G��>:��[�92Z��E�E��Q\�>���6_E!�|4E��X�xk岈 ���Fiz�B�����g{n?�$`��8��!J�0z��E��7�D��bE-vf�<g���p0��'w�o:�����䯝�]_/R�7��mxw�kC�a�İA,�&s����۳��&�R����{��X"^}!Q��nn�� �����뱅9�N�DZ��+s���M�B�`+� M�C���M�]�ޝ$R?w�v���py��dH���D5��L�c`(�o���g�
```

---

## File: `public/navigation/learn/success-stories.avif`

**Size:** 6574 bytes

```
   ftypavif    mif1avifmiaf  pmeta       !hdlr        pict                pitm        4iloc    D@      �       �     _       O   8iinf        infe      av01    infe      av01    �iprp   �ipco   av1C�!    ispe      �  H   pixi       av1C�    pixi       8auxC    urn:mpeg:mpegB:cicp:systems:auxiliary:alpha    ipma        � ��   iref       auxl     "mdat 

8f'�;h4�2�-� �@�53Q��]W�Y��?�����z�^��u�[�����Ka�ɩ��� �&�����k�%��.K��)8�I���~Li��8L�jc�*��v���  ��:0:�r�Y3�?�o�}X�f��,N�ޑSZ��Kﲢ������5���;�K���I��g��Elh@�����o���}��a�
��?x4�ӱ�H�_٘'P��,��.�X�~���Ur{Z��57���|HIG�QgO.��A�s3"�ׯiFB/5�{�]����H�{
g.�VޏQ�Tȶ������TX����R`V�*%e]�N�a�o�+���@Wjп7&}%pU��ƚ������ę���'-PХ}0�ot�Mt�
9=_�!�Q���+��/�kI�nx'�.����P)[��]�0�OW�h�,�͗Xiwg<��k<��5iv��a� �sA�3�!a�=�FPO�!�n�c�pG��$�� [���Rc����ۓ��G�O�]��� �X���y����j��e�	��Ϗ�؊J0e��Ԣ���G���B�Љ��)�/?7\H���`��x|$�����9��b�d��O,=0�=nꇉt�P�����l��h��;����Qim�| �f�l�\�R� �d:k��s�pt�(�j���[#�t #6�9i_�.�Е�m� e���W����^�ZOR�w��11�o���3��$2��񈙄o�
җ�ڧ���s��4r������E�}@ŭ3�Vh���QA~�بЋe>F���	�GF}�0���t�lb�aX��#��V��8���!�c�,���o�����B$^�yT�M�־��N���.��ǶL-��-f���o�g}���)�:o0����3.�(��5�5���q�w�9	�`��Ѵ��FS}�	�9w����zs)�Ӥ|PE�3�F��k��$�n�Ʈ�.h��˳�@r"9PvNmL]�����?D�UJ�����,27*�T{������[��K��;�l�4�^Y��d���ZQ�3s��~*�34YY����I�j�i0~P %��W^fϷ�K�f��O���Z}�_�Kvn��6fԶO���2l5Uv��gמ;'4����m3t&��药�m<�o��nZ���9K"'��A�ɉK�)�������� �W�����6��I���:G37V��Y�ME~��wgE1��Ct)��𝱩��Wa��ě_�%���Ｃ]�E�$gI|F'�M��y�h��4��f�9ޜ���U�7�],��9��<�|�������\�Ѫ�b�&L[�%"�X��V2B@{�[,�(9�Y�g���R�lͺ6cΠY�1�ฬ�TW������Ł��� �RH�0��ҀyWߺ�ۢ_��~-~�C�!ghUJ���v�7	�1�hV�V�[����5 _�i��8@6��%!h\���M8i�bj�/�ʇw��2}��lR�%0~r6/:��]�Sކ:�Mv�`�%����@S���fノ�,^�Lz�!���P�b���d2G�n��[�[�ǥ�����A�$�G�I�n930=&��&j)��m+��	a�~���PW�.�i�Ѽ����§����*Q��� +�Y��˹k�F��Tz�g���l�P��N��(���NW$u�)�j�-��Ө����:��Me���=��H^�ltP��,�Oa^���/n��~:�f8וp��葼�n��#r���zৢkw�Yu"��W剩�
� �n
%
��27f���)�<.���9W?�xB�v����`9��;h d�Ţ��~K^���L�s�.�V;mD���0\#��š��r��As(�Au����g�Y�ls�	so6��WL�q j�.��&�1���{��N: �f�DF�ѿ�(iO&���,j�f�[��VBǔn;�P=u0ưT��J2 �X�G�%��*�
{��df����-�GBak֥z�}��T]圔��_®��4�
Im�F]���/�2�������VI���=ϓ�if�q��8��<�*c���#��/�D+j�l�z>
�����L�TG����_�V��(�4L�an����c jq�÷���P�������[�������╔�ǆ��W�x��A�%'�-���XD��3!J�ѳ�T>*���Wq/pn�6]�=	���W�F ����/����i8�{�'����=�|��Ǣ���~�ގL�F�=,��n��/�bY|�^&���n�ǩ�g(0���v8����T��T>G]��C��=43%!��5H��+�Y�cDN��2ԓa��sL��ڛ���;�~rj/��5��o1n�<�`)��)��G���f��be��$�0��b��kB!`��f�ʭ�9�d��*�	ͱ�0��%������̟��c2�M9v�a޴8�p\\4�n�R��^]���ۗK�`6��P >
�j�e�M�w�I߰�8�"�}j��'f�ͼ�e��TZ0��1�tȠ)_�=�*6�8p?��#����Bā�F�J�dh�I�Ӯ �ŧ/���`:�cd�S���M���KP�G���t�R�7q2��ʐa�����&�8p-ow6	���w��2���S��+��OOi4����U�YP�S��!�<��F��+@��K i�������)S� �����rցQ�}T�JN1����Ѽ����$���@���kGw�4Pf��	��4D�|X��Ɛ�{?�Y�z4��E�[�y��6CJxd�)�E������� �_m }4����iq��aE����i�(��� �����������Wq���z���M��h"��y+����0��v���x0&O�ǣ�;�ѥ��@�>�\� gA���D`��� $�����-t���q��8��	*���o �xIƟ�lc�-J	�?<��F[��~��X+��p&#_V4�﫿e�gUUhO}0�����
�����a�ċ�3� A1M�io8�B��t�Ȋ저�=�)�_y���Ĺ(���V�  =�\�����;�C���i��p���c��oOq������co&���!fT�������!-Xw֟�gp� >�
"�WI��-�0�HM`�,Dܴ��%�п����fFU\==�/�x���'{NJ�w^]ZMJ!�]ǆ͞�mH�X:1~��PF��rcF��8��J����5�R�|�7��.�'�����x���-�J1ղ�A~|�5�K)�'9$��X��B9<��=m`���`��@�N?F����r	�&�L*�.ԏ�1{�0D"<�
�������
&K���i�T
����U0^�'UIj��-ҷ)��^ �iJϰ��/E����;�n�s����W�f�m�q˪��5ȃ�Ȣ��/�^�I�x+���e=�  [��>�������W  �0l�`���F_��?h�{�\�:@7����i�<YX�:�At_�~{O�&��]��ǳ�;6#E�ֈV�3b�"�oO����r�N���bN2h��� 8�U{T_pק�?��A��׸{���`k�2|�=I���d"y��EQV���˿�6�V$��B�k��\��`q����%������hƲ<iH�$���5���U��N�C��VȖU4Zj�܉���Vjr�#�!ҿ�޼��S-����Pp*�zLR�k�o]w���"Ll[����Bp�������9A�3��T���F<5&�d�ﲡ���~�F�S�/I�0oبR�l�̆�:�Xci2$���Q�ݭ�LA
�!a���N	��|+~3q��_:�ߗ#�to��㟲+��LK.��G��$������h�C��:ˌ,�@ST��xO����X�*�9*ߑw�d �Q=�TKr���S�0���hKET(@,	������b���_�s�؉ÿ�}�cB���m�y�SI&M[lo�`
(�����|���C�\i�����?���F� �[C90��Gw�V��k���D�H-y=2JK�D��D8ݓ��F�Gc��]�����3"ꊤ=��ˊJ�������$���A{Hs��nZ����6�eܥ�Hd�@��97*W˞5ϩm�V.k9��ƌ	�S��I^ax���Dr*佼�#�6s=�uZ�+�k���E����V�-�)j�۔rE�(3:*��	�hLK��[1�y;��63��ewL���Kp�`;N{���o�k<~��_n�);S9�M���U�gtC�!��R�B�QB[��M��G�7�o�=r�{ˬT6����M���/m��6���X['x�_˚ qqi"��jg���q����Ci��϶	��\;�$\�|I�M�ч2F�+��® �j���ځ����9�#cTb�n��!'��¤H�Ȫ�/uަHO���%�����oq{1����� oŉ]�s6Zmǚ��R�B�a�%��fa��'�5�k���_���t�)~|������X{�0�P5��!���x������,���:|�H�#'"g����*���Ђ!�]��'3J'���.T)t��3K�@֧��ÜY5��\�	�0C�ǽ���B ���y7w:j�kX
�a�%O.�Qq��zx mH��20���U�g(��1Dˈ�i�+Z.�᰻C_)ֳ�*�B9��Μ���"�fB� ����!Ӓ2z���fC�d�S����7�\�a������+)�s$<��ϋc��w&�߇��e��Oش�����
}3�7F���Ko�"��2��<�o��t����|�큫���L1���V�V}�'���u�͂_���JF�M��+�+GB,�4�h��ܓ�i�D���Ͷq\a a8�������g?��������	�md��2C8���k�,JX�ݴ<�/с5Q�'����2�ڝ䉫}7��0�"����ܾ˕*���@0d����8�g�h��g���p#���`���lrk�)�0u�A$�f���O�Fӆ�K�@���C�����D�SD
ͨ赁xwUŗnEm��s���_U<�Q
ŝ�r��LB�a�Q�����6�	1<��Co5��%� �i�W�,��)g)�'�}� ���w[����@�A�hj{\�,%U��&�%����]poQV����|ߩ&�Z�<xS�0&��O+ �Ī�o �!M�x�IW�@�i�"9��|�.��^����IrJ���F�\~@*%�"'%)����}Un.�����
�����^���*�]bp��1�g	U;����uo��q
�/�@2IY�^W��!���}���+�"���4d�������ٵ��?e�4��"3/~� ��} 7
'�Z̊�U�ئ'�j��8?��c��TƧ����Y��^6���
v7Ͱ kܝ�tM�S!>�|9��L�o�2]k�PƗ���ӥ���ܰ��)�
�j�����a9��o�hŦN�3~�.�#�l ����S��gO�]~+���5�ܸ�k��2	�TB#���-,�p�26h� =�'����T��-��Z���l�Y*�=<=������,	{2j�%���	լ��x&���+���H��n�#�����@�����`�姬�4���j���L�-0�I�%^�������­h��E��.�ۜ�����f��0�'�l�J#4 �@n[�L�����C'���g($�gZ|cdRasOm9�/з!���-5�c���W�\� 
f'�;
�2�� P�+�(���%^-yt�R����A]'~�7��-�7`+�yOL�v������,��ٱ�&�� t����<���O7۠C,�����/+)�֞�D&y�>?O#"0Q��d&&�3�֭� Χ#�J#�h E!�z�+�_s��R��V�K�,������)�g4��*�� �D�R�����Y�m1�=�����ؽ���y�]"(�s���g��{��w��w+�AT�@w1z�F0�kY��W�l��*�N�>�1B�	� r��z��5���:-�D��^f��쥫�Ǫ�È� ��-��؊
```

---

## File: `public/navigation/products/booked-and-paid-easily.avif`

**Size:** 6924 bytes

```
   ftypavif    mif1avifmiaf  pmeta       !hdlr        pict                pitm        4iloc    D@      �            �       e   8iinf        infe      av01    infe      av01    �iprp   �ipco   av1C�!    ispe      �  k   pixi       av1C�    pixi       8auxC    urn:mpeg:mpegB:cicp:systems:auxiliary:alpha    ipma        � ��   iref       auxl     �mdat 

8f'�Sh4�2�0Dp � P��sV_�\�)�C����P<g٭Wǿ��/;�3��n�0��:�;C�2K C���np�μ��̴y�L���mne:
�j���L6����.��Wa��Q� %t�Tx3��`�8�7�4ˎ@�S�2��1"��v�E�熌��e��V�p)��eۣo�Er�Z���K^�4!Nv��W�����c��U�t{])^����5�,��\���
{���V�/���9�i	i����W	(�E���~S�=��.+�FGL�n6����dk�A#�'��Ȩ��Os�,L���AM�$��c�T@?Dݓ{��DI&d��H$�W��].L��"��{����w�+�=�K�0�(1���5@g?���$�g����ք�m�d��E���U��:���L��L��A����K"<����-�{��s]��!��BԨ�D�����.�0����ʩY��C�������}Wak��nf|/d�9saʼ�a��u�p�>\cUeo�mX�\��b�9��J��)�K\"�ͭ[��)d-���<��@:�#*m	����xc��~ָ4�K|r����K���*�V��~�y�J�(��H�<����VȐ��Y��}{e� �!���rEDk��]�)_�S�p��X9�!���k�1RR۹��d[y�Gd#p�����)�Q����!�{�MW}�~��х���[] �mo�\�88e|��0��G�
gM-7
g��َ�)n{ߒ����6��%�0�W��*)|Y��}�r誒��Ll@�u��j�Յh�Be��e��x2���UJ�R�8�ռ�+-�%wj�T
^��K�� qvG��*���q��~��סP���ؒr� JM݂V#�<T���Lw"��0���l��d���޺������آ�=w�$�ED^�,`���Ҁ4M�m�'4��Ei����P���A�xi��"��)mx`�i6lȣ1
����P�;���BO�����o4�~��<w��#{L��]Lb����>�xa�X@j�T�6��*���ɅgH5��̐� F0����:����p�BB��M���4�LI��^��֌i�U�ͦ�O�b��ͧҼ���k"N���������v�Z�orܣ5��:9¥�T
��u6����3��GN��=q�,JC�����q�i>�$���,��"���D��է(��q^%mN��b1;��U����[ڐ����_��Op��>�δ�5��ޟg��T���{W��:�Q��A��b�E�(Z���q������ �"*��٧��?x5���)�#��#��"��N`Cu�S�?#n�m���c��+��)Yl���x/� ��+{�q+ZL5IV��;�sT� U�����n������������İG��@�-�\�!��)�I,,�1��������'i�{�p�!�^l�lq2,hOq���������[^C}��\uO�Ζ�!���0���[��ְ�@��4UK���K) �
�k�j��[4^(tsJBg+�uMG�0�?5�q8��-�"'m�~5��B��O��(ъވ�.I�[��L��}+݆u=�p��%6��<��#�d���J�mL%Jkb��'����S�Y���"=�]1.���a5ǩ�������H�C"�4;�7�* �c�?*����U惻g�����!r�;O�Z�yh*�}�����Q�U�3���}l
Zg������P�{�{0ǜ�c�n'�e�;�J[3�D�X����cr��
ŵz�AZ1�	�9aGF��d\��	����~��͎�2]N?�$��ÕP�-2�t&�Y����+s����6�Y���y�u�8� ��&uԈ�L�S͗�z+'�����(�����NB�;�y�)�l2A)���`ax��/�ނ�\��l!Y���d)��i=�:�K�#�@+
u�G~n*��~�.y���f�+�g%87��C��$S?��E��e�Ŧ�`���Lq��`v��m�<�/�	���`��J����E���� �pS'�eH��K�!��Q-C[7�M3�X�~����g0p��ŝI�6�����)�k&Y���o���p��:�͆�h�RAp3)F��w�`��.pI̉�:)��Ff�g�������}�,�U�]�:�G{�+��΀��$�K�j8�5R�Wy�S�؞���'�u��8.g�:�A�����KNa3g����1���RS�$���om��:�ł�L��e�a�D���=\З�n�t�Nް~k�c2��#��ɞ�X��C,�+s�|"DU�4��.N��~���Z��$�m�2R�FNu#�;Ŋ+�2� ��|-�d@n!�+@���|q�NX�K��	�Gds����-�F�@yԩ��`���5*L�S���Z��	ԏFL��9�Yy'��L�Ԝ|���A�q����~��Bi���L�Wa!3�y0V��
^�5���E�5�1��<��WG1�8&��S��vw���(?�����q�PW����r�_�J���/N�(�	�E����At�������l�Y����9ٛa��lVe��$����9����	/g�����!<@�_����ʀQaݑ���i!\j"�5[�/2�y���@��:�7��4��]�k�P80�Pl�x�]E(�
�ycZLjP*#��	�5)�k���4B$��{�r�O��3�S�d���X�p#O�0$��޷@�
'�h%����tn� ��@"?��)��TM�p�lYG�w�S���x�Z�Q8j�?f�>����Sɹ!�n8�:��T)��g >M�d�C&��J!+ҪIi�0���)Ī6)G�������r7��vb2�S+Wʀ��P?5o\>6p�ߤ�	�]���'��BV���39!�U3��3�<�/��F}d+�#,�N�.3(ի,6DT���f%�lT+�'}��)Ɵ�t�B��_�����765�v����o
W�;��CR�W�8@<D����X�1��9b7mYH`pmu3|mR�7J���������ϲl�����5�V��x{�Hi���ܢ��2��b�LP-؅r��t�D��f�ȕڎbn<y9~��s϶L ����ɯnƌ���q���nD]"��1�N˼�L��Z�)DH3I^Ȍ������|ŏǵ�e�Z���g����Z�EeWb������v�e�:&w1�H���-྇�wF�'�*�Q(R����a[������|�������� �1��zכ7���j�Yf�2"�E�B�}�#p��+�P	�ڝU��T<�lX�B[y &I�U�ar�u?��?���8�*DX-
F�"�<�DwhBES�M{#��$��y����$neUCb�XN|��Hdk���,=T�\+d>��b��`���N���Im�ϐ�fq�q@����@�Y ����V��o|��Q�vM�K*�z�7�*ݍE��Z!�JЌ��u�
�o�ZZ���Q����=tRQ`�b}}_3Ls.E9 R��O7�|�����L En��l���!�K!���(�z=5����B҉���w�Y���� ��N�4t�yۡ�clz9D䯖s�+LY_S���&K+��1L���M�FSR�>�V�E�"rD���>��J�fC"�L}�H�R 	�W@��� ���&��v�D��$�5h�˖�ۼ��]^`�X�݌Pk>�%�{Y��� W�;��c��������[�dPoe�{�"�/���l���V�C/�Ӏ�H�ه�{�ޭ�"�����r���w�Y� �����DŬ4�@=?Py!E�������Ӽ����lKy��*(
df��_��� 6QQ�ѭ�%8K�����kD^>����d�^��M��O$a�)��b�#�2�U:FT$L��,9�H�K)[�EA+V+߁��O��a jj�p���,?�=�"�U���N1F`�lVrr/�讯a�i�������"�´�n��"E*,���\��-��/��ύ0�J��'9����0�%��ɆT��.i�?j\z�U�HQt��-�������JlDZ����V�i~��Q���t�كW%��`�gk�u�,,q)<a���*����=k�f��_�T:�>:BN�����BNO�k���j��3S��$`����|����:� ��x��t�緷pҜ�*�pv6m��,3 	2�mMPA��忭M�콊?�Q(�b��;:��Y�*z��j�G������rI�.?I"&v�&��xo�\}�;�v������B�����8��g5>�vK�b��"+����f�|��U��#D���Qf��K��xb�S�k�DLZ�ڞ��B\ILF�RxG�%t��<!�V�{�5y��Y��Ƀ�y"dNX���Dv}�����as�q�,b{m�nfY�G吺@����c�3��AjꞯTL[��S�\
�Úe��|B1�|P��6��o�"�mD���Bl���VRNa�)��b��U�>e���R�rՂ0y�O���q4o�@�{O�!jH�8�K�^ t����Y#N�ONu[�OZ���olZz�',V�:���|�'��o�� �����H������dZ�F�w ����#�?U�fіrj���$-c�N��~���5z@�b0��<i`�8����0� RC2��on?� �*�����a-����W})ƛap�n���2�x�u�:p� b�N����A�d�������(S4�_��"���	��|Sp�KSM㗇d�)�G�����p����wq�j�V�`���$i'n�&�(��/������P(j��~(���2Z��t�!��=�����uܐ+m�	ۥŽ�l��RW��U}HnT�� ����4i�YR����A�d��]&}��6QP�R�{m[V��� ��F^p�?2���-��$/e�l�9g9+p�L �z9�X���K��7��b�J!�-#���<'f�\;�Nex(�xwZ�X���=D��@@���ȏ�X^m��,T�t����xZܜ7�-F^��O�_�+��1?��������|������FP�Yup
7� o&�5~U��s�2��#%�z�o͆�r��7�E��>����u5&b�dJ�.�eh�y�/�3"�a�x��k�H�l�m��8Sl��N�q2�q�S𯇙�5�4��l��H�,�ln��-1������V�8��S���-���v3{�W~L{�̍~bYiT[����RX�iY	R�C��k���e��p�y)<&�4���U���ɧP]_1h�8��3�6
=��W���gc��f�v5�P\L��h!�(;L���]�x1��� ���硋���0:`�@ ��w���d�p���� b�Ig��h$�2� ���������aN͠��IѰ�!������
4!���+�)�K�zA�0��T>���D���D�*�����^	�u�����<�u�;���K�u'p�YI�*�l<�8V�^�9�V5��z(�]��)��O�q%cSh�z?�>%k�F� �.�&�G�[b[�[Ty�3��K��Y�D��<�bZAMM7���G6s����"�u럍h�h�Ii;�����/� '������=���3J�i�b9��k⢾B~��mF]���^阗d��SS��V՟�c�?��fl�m�����V�!�()�9���p(�i��CiT��
��.��]j�p��r����5�A�(K]�	�l#6]��NB��a�Y�*!:|ƅf�e}����� �<7J]�e��9ϳ�5P"q�{�ΣB�|���Jz�i���1�tr�:}�$��e�i�爆$�-����p�)��j�����c+?5j�a�[{ݒY8}3���>��$�VÐ����V����d����f�BCƐK���ֵ�}՜�h������X��ؕ�ϳk�˛��_��)�){��0s���s�O	%U�9�jI��s�d���^VU�)M��R��1
����Ժ6�Hh�'%�������!�e������T�~x�y�*� 'S�8�cd\P� �����ru#X"f� 
f'�S
�2�� P�+�(���%^-yt�R����E}g~�7��-�7`+�/D�^I@��h�]�Qn�_�:�MG� N/��2ߗ)k��+bh�9�"���yf�rG7(�<M\֏�݅����f1�ɯɤ:��W�9D�_��2�P)����"�uw���9�`/zl1t�84�;w��a�=���F�`_1������>/s,�Wf�����i,����/z�� b�̭ڏ:q�]=��Zq# h�Ύ�РEdL)+��r��ߐ�V���_xE�	�!b�|��8!l{��3�|̒�i\�}?����ȭJ+$/�AO�:">Վ������65��К��@	��߭%�Lr���5���
```

---

## File: `public/navigation/products/featured.avif`

**Size:** 13058 bytes

```
   ftypavif    mif1avifmiaf  pmeta       !hdlr        pict                pitm        4iloc    D@      �       0	     1�       e   8iinf        infe      av01    infe      av01    �iprp   �ipco   av1C�!    ispe      �  k   pixi       av1C�    pixi       8auxC    urn:mpeg:mpegB:cicp:systems:auxiliary:alpha    ipma        � ��   iref       auxl     1vmdat 

8f'�Sh4�2�_� �@�+@���F�ܑ�h���u5UK��	�5�2.Ҝ���I l�=Ȟ��W{t4w/�!N%�h�z	6u�L�c^�Fp�{��ϸ�l)z�A�Bf��4I�^�T3T����!�-^/d�IL� �Ȇ-�Xy9O�.N�7�'Vf`r�rdA����fآ�X^֯�Ҩ"��=�Z�Օ���d:b��!'��% ����mM��{fo��L?9�I���,
�7�$�N�H.:�Ȳ}�vO������s��l�!z�qTDԪw�	m'�e]�1�~7Z�^?^�r
��uSњ<f���I�p���&�s6�N�F���]D��A0�BWCcY��D��*n70��)��=g�A���ȵE�4[��̓9�Ħ�#�U���7"sV���BY�whs:e��̐D��SFn�.cxw_��T�4�%&�rG)qk{ho�86�R9Co���JS�w���*���yj�AS���[�<�g���L3SS������8w��� V�b��� �A������J�#t�2^�1*���/�2q���
QJ�6zu<Is�`z��\ {�/�����Vܳ4�#R �i�揍��v�u"�x��~��.z�Q��0k�K�|]��T!���d��3��$��f��!t�2�������C�X��IAްƏ�ybB��miU���o�_�y��g�`�7��Ec$*ȴ�H�-}���h2�Y��D�X�!��c--�׸��=�f2�T���c>��V�>�����f˲�]g&c��֪��m�t�~�6.g�pDn�0�X�t�#���a�p�:��ć	t')~������� �?�qt��w�����:1}H�`�L�j7����ȦFheP�����!_Fr`Ay���x*�V�f���bʡl3������8j���x�G1��}C=�q�~�I�vitјB연��D=	e��M�G�FCp'^�O��ޗ�Ne��%�Lu�C���rL\�* >j3j�W����W�x��d�,y�D5�+e�Ȃ�J��:�o@H1��`Q�v��0Cw�ީ�į��������A���]�@������֎�X^�N�|�s_+�/��&7� l	=������3TR��ҏ&�k���t�sg���
$��F�嘄��H���C���,#bJd"l��n��c��2(V ���]���ra���p|j~`M*5bS�/��2��̼�����ةy	& �Ү׀f���qԀ�����}V����&��V�������q�ˇ�]�C�>�l�i�+2��wp#�є䊳�����f���ԝ� �~P�6Db"m�!H� �^���5��~�����$���^D�ݦ%��k�ҿW;�,��f�_R�\E���<�c{��!���u�G��A+`Vw�9E��M�1㫺���d�W�#�=��O� &ۚ�M� ��������K8�Hu�^���36�$���q��Xz&k�ҭ�7�5�:S�k��U ����˰>�sP�{�e?Й�����Ć� 4ٞZ�c���U	����E4Ǿ��m�����9�e�\S�8�0�
�c���B�u/�2�U��;W�m��m���!�]{�N�\;'V@P��k�H��:��qNμ�m^�7C��S#���Z�'s�H8i���\Q�oS��,H�� ��Re��y�M,��6q�7�9_GBKwL�m����>�W�x�2AeC��������߈���Θ���Eڨ䮠!�٣�ˋEѴ�м�#,���p1Z[ʚ�LǰU፮�x�7j�pg�T�Ըk6�0�T5�eH�����7F� &mҔ�ȕ�S�8�[_�SI�fё#����f� ����z��4舿ь�u�6�ײ�"��W4J�o�s���z�v��f���i�qFEQ)�C�k�\Ʃ�O��F�/�Ě���<���X��Y�/�T`�81�h�U���n�B��?փv;�-)�'������
ޢvՀiTD�N$��_��V���҉�X4V���qᦚ^�h��Q]7�(Y�4�F>�b��xa��S��AiCa�_��Z��so*H�42���*���Jph��{[)�~� � �G����J��l*�H+�{���Ő'٘.x\Q{�iG�͒�ƈяҘ�hҕ���C��j�%������3�ĪI)sKA1zXz��6�R$�����vk���ǯR$�R@�Φ�Ȩ�y�J��q���I�i������99#�n�8�!�c�3NɎ�����"i��-��&ӺS̫��'(��
DڠWXr�T:)����Z�M?�.�0MX�3M�Ul�tz�}G��%��8C�ff���˓d !������Ȋ��0��|�� z��Cn%��3��z�\��W�,��5�e�J�
ߩ��x'��A0 J8>&Z)��-�ӫ�9�8`�c_B��u�_b��5��.�����r�R���'M؜n��� ����+Ɂ[���W��/���=���~�iu��.���v�P-ᅫh�V�s����!iyuŬ��>�雽�L)�?َ$S��{U'�)�W�SO!{u�LX�J]�7h�BY�I8���Z���z��WX����o��6(�Nƀ����l�H
��eJ�P�ѝ���_�T���H�蔙��K����Fʤ��du$��[_f���*Բ0����Tq8�I-�ԷU�J�\�Y'&F��*�=�����>�9E�d�,��P�M�X$��M\T��,��nK7�HĠe!Xؕc���2���M�#�WZ�d2�G����wEZ�|��n�-�m_p�k���Mu�(p��Z�
�IoNk[���ÅL�*��Q5�<Gq�����.��w�l�1MTc�����`SzG�L��.�F�`�h9`�%E�%���vj�Ȥ�q&�&R�=���߸pS!ƇFj��LG���ډȡ��!-h�0�\��j�.}ہyS��)|Xt3�f��]�I�)Ւ�n��q� ���a�|)�;&��A���Y(����}z��3Y��?�
����-Vê��67�	~N�T��;ݭ(r�~�?%.ޫ;����xZ���C�6�`�а� �j�_ܭ�A�� ��.���%X��VHO�<홷��m�3X����9z�%�4:F����#����9��̽u�,R't�$�4�zv�Ĳ�Eh=!��΀ТʤXѡTo�Ʈ�q^����|�.��90>Rg�v�E4z̹�tK��
�lUL1|(O��aix�b j��)�����I<]�3��I[���P�q�z����͜���Eg��z�}'w���wH��ź�X�Ӥ+T����=�q;G�'؅~��D����Q!-i$J��X�(o|���u�9�w�i�h����`d|�`���N�Jç�����^`��V��[N��.;����t?��W^ċ+��d��+j������Q>�e)`������i�iR$��p̱f��kQ�d#SaQ�H��Zd�v��̦�d8t�j�(6A��G��Ԗ���d�-d��r!c��G߽
�+�	ނ�?�['v��d=�.�Σ���۵k�@TOr�V$��O-3���:���� W��� DQ�F�[9(:��/����tH��idK��\�x���.2�+�I`.ou<i��} FmG���;x��"W�#�+me-��!�����]����������?a�e��%"��.G��<
?�k�ɑ~���K�m|a�hq��|�d���1�r�t]Q�MH`.��֩�l�n϶y���*W�#�=-x	�GQ|]���룠��0��Axl�Ä�D���'�#Wu�t0]�u~��<#!J�S�4^s4H�am�ɨ(�oF�'��G�J�Ӻ�_J�IE�_~�Ѷ�*��vK\�P�p�+�)���ޱ�j�x��fh�n�����}�/\����)���瑾�����������ֆ� ���
\h4���������@�$�!.}������%���i�Y9�UBZJ�A�Kf�G��1�v[��^�t*t��7�a vr����sɻ#�>�}�>��K��D%�SA��b�W�	�N�V�MMg�kB���JM&��~9��-�š��-�б<�(�;=����R9�Nb��#������� Cы�D��c]�h[ঊ|߂��9sŮn��:QM�[!3�ry���ƍ��f���ԏ�%�U���o�-�-��!(�$;�O�h����|(b�1� ꞝ߱��8��\����)�3��4#�X�a�+A��b�N�?o��f���(�b�"�cQ�v�E���+4��?����37.t �"��C�܆�Og=.�T��S��;����M��~uƿqE$��q�b+*l�ze��r��@���0ړ���f���pC2E����б�PmYU�^j<�{7P#O���HH��p\[F�:�{���0���
���0`��v���|���V]1�i�XHr�v��I�3��X瞁��Iրh���$���e�6��"�>ٍ�:��ojݺ( q��1Jrc ���+2�2&���t�� �KJa�}'bs��y�����9�܇�J��!��#q�o��z�*���b3�=�`���Q)�@��@gL�q^���!A;�{*�Y��m�`�E�%�	02�x���얱�����=@"�M�K���U�f�&iI'��R��	 =��В8�C���v1�U�
��\�{h��E���&�wj�]&t���}� �@5$�>0f��v�ќ%nj�G��)��Hsy+��C6PV��7��D�F��l0��Cv1s~:mz۠?�a�~�ql�UG��Qa��l?�%o}��tJ�E"�+m����!����Ґ\d[ހE���S��
6LoX;|�;��� �f���γ�th���m���(V����L�Te"~�٭I��$�=<j��)ݧ~��pB풡�cN�\��4�����ܡiZB��,��w�xod��Q��aJԥ�ܶ�3����1ӌ��<����L�E������������ȽS�myb�;���ZtK�S��4b�\i�eQ�k(�&p[�X)�ǰ��3ۡ������p��W2�OBv}�a��A�����x�}|贗zJ"�~g�C�˫��nmw0GN���'�����Q�6�M��븚�ƅU���X���[�R��rn�k���<>q�T�C���ձ�����|�#+Z�QO� f�p�:2]����#��%��Nb�yne�'��c��}��GY��e�W��\��Lt��9�u�$�uP�Vc4w��&>��Y�fѵ��qV1�͏4��e�{��y�����2�-�!��6h�z:�?�ر�V�Q�*�@M���ӌe�
c��!��	^��#�	Iu��ʵe�?���ڟs@C��=��L;�1RF<�h�Bb� &kDlO%����1������_��A{4�_S�o���@3���_K��Nc�	���]�q���x�G̳�(�{k5z����HڸK�j���F4��YL|��+�k�Ap�Whx���4<��~���i�Zό%
�ij\]�/0軭$�[����������G��$!�v��ǈ����)HB��x����(�'P�6�|J̫�ߩ��_5J��N�o \i���
�ʿ"�lZ��NrE�ؑ^ד�a�j��i�	���dv�w�M��%)���0�V��.��p=d��B������:T&ɌR��U9Z2F\��r��Ҝ'o�y����U��Gu��a1i��P�؄a�)����Ԓ��(�f�W��8��3m�W{�6�ZM1���K@�n��-��q9*t9CK���&f���E�yH�����f��	�����R� k��������|�x���b������+%���ԭt�4&���kK*����se�@�6��K�� 0S�`BF�#��nה�a��A����z��H!����A����sŧe��@_%��[�eQ����%UB43t�q2 Q#�&W@�'*5����-j>h�:2�o�hO�7!*$����^�yI��ˠ�bK�]7��>5}p���ײr��K��Ӱ��Ć�O��+���h��T�S�ߍ�e��"�`f9}�q��\/q-��aU+��fIFۺF�d%�Z��U�/2��|")e��|;���5��'H���{z����Nu�(��������%��O���@U��Q�:£-��~Ï�cd$\>�#|����!f��e~�PY�2��x�$�cC��%��s�J��Q����j��2�Ж�x^� ���5�~<��е��� |�B��-�|��/�@1�R���*�b��Ś�w�zb��_��������W��\��~e��O��֛Wj(a�b�Y�ao��$@mHXݣ�yy������;�BI��Ky"�E�[��f�G�L�Za.�Tu�JC�@�~�ꙥL�H�(� ��u�5�Cs��Dnkxv��*ף%d�	��u�@Q�̈��7i� X��,�mat�j��B֛�FZY����@q�q���d�N�A.贷����߷�v�%ϳ���:� 98 �rf z�RYH�.O��u��T�R��.>9��"�)E6?-�&��_8�	ZMú�ya36�&z�����H&�=}$���q�(�h^��H�G�G	�c=H[��#�I�;��C���AW���	.�[�]����O��:��m�Ή��s��7:�m}�']�K���}B`��,D`�����c>�ze�o�����nLx��y|���h4�O�Lp�0��+!MěJ�L��I�?<�����e7̛��0#�OC-��5Ub�.��OYw��q�z�Y<j�ȡ����(�������(l�����
�,�ׇ$9�YMo�w~5s��ܻKJ�|��q�6mη�]��U�@�q��&��)�3�/��:do�������a��G2��aG.Usu�bI��lX�.i-�E ��&��Fe�^�
m ��)H1\��a�+��7�{�6�g;M
`�)�@���ɂi�y[c��.���1z_�� �6Y��E�F����6A!�B&��]���K�e�v��Ro�A�,��I���$���gA^�u�`Ģgj�3�.f50r�c�JE(�ű'�٨��N�J�\�P��J���m�J�#Z�F˳��Y��C�J��M�Nk�����[9����Q#{��^�BѮ�(&Q�U���[��u:{=-����-U�hv�1sM���[�M �W��_R�.��jX;��A���h ���>����6�@�#��J��pž��R�gՠ�h�ٷZ���8��u���|Dg��+Q�����1��ͼ-bÂ�j6�9/K�O�t�P% 1�$��@=�T�kȎvj7!x���k&��3�ֳ�1p���%��W1Ci��'�M�]�x��OQ����0����f�����H./��Z�OZZ���A
��>������ĝ+,#aY(����]`�����%[BK���H��7�*i�3��/~�RZ��)=��à�^�����,37Sy{��c���ײ���LG�Qq͞x���+��e��W�!�~���^3�f����*����T��/�,Ї���BK|'&�$���8M�B�1c�.[h3A3
����5M�2 ���D�����:�]� ����v��=�n�Y���.�p����M~�NTöp��
g@�[֯��a��
�d�}��H���c�/Nr���V�;����	ALf��m(_G7�6����g&)��|o&�O�h���
������a�>����~��JAvv�����&H$��N6R	�t��&P@-���`!Fb�zug_�/��P�Ɠ��!���q�i�Q���͐�_�`D���0	[w�n��p$�˿K��ͭa��@#���C�N�/ɋP"%R�+��9�������f�
��@���č��P��6��v@5W��=8���x�X�I�FN��X�>��\a]�	�`ZɑJy|����cU%��:�Y��uխ����;	fC� Nړʃ�������xa�ϲ�=|�H�p�0�{Bm.xϸ�����4���}�^�ʱR��VGc셞0���龡���=�}�����`��>�ל�G���OSX-Ӣ##���E�1�T���=x��(�4�%���"������t&��f���М|ݦ�U�q5�����n������/����q5=[+l�=�E.K��A����ڣӀ�L���\����UTXޖ�,�솫R��LX#�TB/���Wh�!i�9f�T���h>���*o��k����o��)E@�w����ݨ@�Uy�ԏ�&���lb�-we�X.@�[�.��F�j,�.6Jf�'�>��`��|z���ޠ��)㌎�n����Ls��05I�(
�O�}��� pJԭ�ZI��T������/3�/,�D�a�<�w���Jwfؕ�o o��� �l�w�o[�����m�r���eFQ��n�1<��9�����
!�s�~�#�("���#�Pr@@�Cvj���*%[h� au��~�H�3�MJ�@8wر�Q�JY:c,}�KQ�|2�o��|�o݉k䜩]tI���ѯ:��`������֣	W�^|[�|��[pkcU�����Tu�΋�-�8� d��J�&��ԓ5�V/1g��2rDf��E���_����:�7��1n_����5�������s��ȍs�b'�L��t��3��Y��rUA�Z �U�{����xu>�pj�O</q��
+rt�7Қ�z�zw�]m2Ʈn�RtRb�ivs �e��K��t.��T1M���̜sq��Z<�������-
*)x*�E�ZY������&�*@��u*!�s���$��s3~�}DrR�6���EY(�2�Z)��I�fi!Z��\1��f��h�s�n;*����f|��^�=�S_	�y�.ԇ�#S ,����/���0�,@8�~*������^�9�?K�Fd�0Z�̜��y�dr��8�?E�	�h�:��u��bp�"m&%x�B�y������h����¿�~�ؒ�%�<C{:1�poRҋ�b/�ഗ�4'4��D����84�\��9g��و&I}�Ia<���(�Tk2��7�U+�����$z����-��L�b��PB|�~��� �$�G%�	�b!������K㪶�4;^�J��PDZi�f��3���fĵ�?8kL|?���������4���z��8J���4W�_];��0jh$���`�����ܱ���3t�HJ�����d]~Mp\uDh$��A�c����/p�\�X3Z��67AM߱8�h��Nd����ࣈG#��9>����>�NʒY
�"~�0�pҔ(����&�`:�#��#��i�1;V��%-Cd�;O�x�&�
����.1��M*>��[�B��/��fx��ƛ\~��	�� ?�I�	�@�g�b���j,Һ@ �\i�ٔ�rYA�w-��ԭ�]�
~V��������i���`5�i����:KɈn~�]I�|mK�9�]���Ԉ�ӊ}A�3j%baܚ���+m�S?�I[�8_FtPM�	g|�h� 5-�J6?�v�̹�Q�65VIA�D�M��x�H���:�	�^6v���:xg.���C� Q���������{J�n�L��,~��N�Y�b���o�6e��&�k�eN�n�?-�ãA��l���2�N����/+L�1��l\���&q@0���w6�oH	@M�����d�
5͆.�K�{F "�z?����E�R���n�x	ʱz��MG��L��c��:c���P���m�=WFn�;�Et�GH�P��fT����Yo��pI*�ܳ��9��u���jd�KF�^�ޭ�%��#���oڂYMu�y�H���mYv�3r$�j�4�����?1��^k
�<�-���;o,��O����j�qa+b����+�> v��p��Jc+���`�'����)�-�$x0�=��-:wFo�m���t��A���mK��
�w��Rӌ�^�����=1�>��Uͧ1�u�o;�j�?����HU�|!���8��,z�Mp�8C�uA���������C��)6z���P܉�C<�~K:Yy�$���k�nDo��1x�x`�y�V�k(>[���FF����� ��pu"QxM��Î�����u4�k؏�ހr�Uu�����9��|ژ�@���:�4<��m���a�!��/E-����dx ���RyM҃��.�E�Y��`z�p�+1!�f�d�P�
=nQu\����*a�
G-oE:�١��'K��U�{z5�(y�/䩮'��܎�.q� �$k ����o��������6�lzܡ=ʍ9A����<^���}*�d�P
���4:��-�gH$�������>yn��S�SߝB  �KY �!�9�QfK��dUgd�V`N�N�\C���۹�8���K�F��@��<t���I��@R^�2M)�9����N�-68i�
�M�?��MUM��'fQK�f3ǆ4�<��PRh��K֌�vn��G����7#�qZ� `8C�3������BiT�kB�L�T������;�٠~V�D��B�cw�ʓ;�*��,���k͝C���QA��~:o���eK�?��*<jT^��ҙb��q�}�D>�w����k�v�`��8l��`ft�������0�V1Ȋ�_�@[���WSB�[�W�E$�{��8N�(J�/���G�HRꍩ¦�hQg��L6A����
'��J���n*���F-_�J"����3�^�B�$����䐫�k�qN�M��<���`U��6S��8Ƅ�}������}Mߪ���JeZ`�d�㳰��5]K�2q�Zm_�u�n?$H��.��v�eκ��u�_,,���WG"�ddf��%���W��?�(Ѯra�s�ɹ��F���%/t�ZM��/��Ұ
o&�E�Qb�-o:�L4�GӅn�v=�m�4F(��5��	I�c\bm���ǐ85���4���2<�����Zc~t!��}�{o,�@"�.��1��{�w?h^��,�P�Y�w��Ye�/��	a�yK�,~�_�jg�����V�����ϏG#Uɘ:�X����zP��h�v���V��� 5��9�[t2>��Y�z��2�d��>�<�#߾���h�D<���`��������fڐl�0��<��z�G�'*��Ho[b��J�!�|Ma�׶F
uԵ����}���'$6��
�1C�oA�+��m��A���Б����dr�~H�&:�E�h�0��r�$��ٿv6����e��^l��tܮ�6�Scz�<gQ���,��2��b�0� ���! =R\��
2 ԛt�}kY'����_}jH�|������v�=E���$ ���3�����0�~�X��#�9�o� \��L������Zb���O����Q�N�ZҒ_ʊ��}�����5���)gmKH�[�Y�=^k�$��T�hw9=�� �����-?Bk�+-�	�QUO���@}���O;�z���ϲP-w������Az-]�F�� �Cs��s��2h%SX�r�H@�]y�/�
��U�]xN�ӫ^ɔ�B�Y�����:���;9���	�d&��Q�s�C	S����}�.͵h�{��M=��1.�k�X�j�?0� �����g�Æ�!f%��z�_���qv�dq.'���M.�r"��.ve8�}�(d���'Q�k"��
�[w4 TR�T_�m�?���g��N\3�(����ZtmN���.��;����~ �M��p)c��k���a�Ǫ��n��)|sa�J5��W�F��q��n�Z7,��W\�0�0�D��=�.'&���FQ4#�l��L(��l{�l~��y�CG��/�Iy$e͔x���ˣ����e�w�a$�k�|hY A�#Y��t�}�5�v��56��H�ŬF��az�e�m���T��'%�"�p�j�\�n5�vm;�9���K#��r����sӵ6w+�
:w���da�:�M�;x���;�N� 3�Z�������=̅]h6�
�oK�^ǭV!����+�ʷ��0| 
f'�S
�2�� P�+�(���%^-yt�R����E}g~�7��-�7`+�/D�^I@��h�]�Qn�_�:�MG� N/��2ߗ)k��+bh�9�"���yf�rG7(�<M\֏�݅����f1�ɯɤ:��W�9D�_��2�P)����"�uw���9�`/zl1t�84�;w��a�=���F�`_1������>/s,�Wf�����i,����/z�� b�̭ڏ:q�]=��Zq# h�Ύ�РEdL)+��r��ߐ�V���_xE�	�!b�|��8!l{��3�|̒�i\�}?����ȭJ+$/�AO�:">Վ������65��К��@	��߭%�Lr���5���
```

---

## File: `public/navigation/products/send-contacts-to-email-tools.avif`

**Size:** 9916 bytes

```
   ftypavif    mif1avifmiaf  pmeta       !hdlr        pict                pitm        4iloc    D@      �       #�     %^       ^   8iinf        infe      av01    infe      av01    �iprp   �ipco   av1C�!    ispe      �  k   pixi       av1C�    pixi       8auxC    urn:mpeg:mpegB:cicp:systems:auxiliary:alpha    ipma        � ��   iref       auxl     %0mdat 

8f'�Sh4�2�G� �@�G�y�(�mԜͽ��n^�6���%�MMEȼ�i5#h��٧��[�tbtl�+��d�"�6���H���W�?��Pܠ"bŅ;�ޏ��u�RPhӠ_�Y� ��/ߖλ�͘�&��[ǳCo��`��g�īT�����\2'!����r��N8�a��������h���`]x�UN��4��6��*n���_�����`V�.���Ȩ�gD���PQ��b1��.�O��8~8���OM$��Y�	����T���p�V�n�kB��n3���,lLqy��	.���2�O��'��Ш�E���YS�V�5����.�J�V�0#Msi��Z�bD=6�������Y�2�'�ȝ�����9�d�+@'C��DND��E����3�Wbu2H9���&���*uX�Ĺ�^VIPgv��'�<�RE'c���8��G�i8��ó�L�SmԬ:�g���A����*���U��/�wa9PC�0~o]�de`�5�������Pw�K��<���Y2��p�Y�>��~�eVH�|�/��6�C7���.�H�����jl�/W�`��dБOs�W�GX����GƁ���9���#̢���И��#����0��u�S�φ�L��kWX����	٤C��r�����)�&��T��+��z����f�EU�K\��=�.0�����Z�55��u�T��!�ٞ�G0;����rβ܂�j{C�B����?��1c�����-I�I//M:A-�uo�1TY�E2�`�W@�\kgQ2D�QF�s�аy�P`�ߛT]��h_c�_o�@�W\��h��x� ǖi{3�*$;�߃}�^��<��?�/cq�Z�6�H�@��o����]������/g�����v,��LvOp����ܰ_[>;��٩o���T��-u�G���&}7ؘ��6��՚,��٧}�)s��5о�e�JO��5��_�|�N�vk:b�]��*C�d��հ	�����_:P7-����t�܎�[�VJ��I��4%?/��^�c��ۗ� 0�2�S��j ]��R��st-5i#��w�x�Q�G�>�H�(��+o{���2��#�BO�2�]�9��o �����)���h�ɲKk�ڤ)P��Fy�<p�hQ���t�q������OQAs�Z��y'��8����čU�Et ��^|�n�ƷE�YKP�r9�N���
�M7�鋰d2ļ�ԛ@h|�]g<A^��2e���~H*pb#xU����20O���Y����RS��ql,��#s��6P?S
����@@���V�P�k�<?y�?�OΆ)Z!yV��>8a�!�<��cɫ���n�X�籵c��#`��j��V*<'�Iy���f����?��v�t�m��/�R=�E�[�U��)�����	0yn�՗�&�a7d~m7{�	�In�֩!%UJb�������b��P�&Q~T"�/KR��22�Y�@5�����D5�Қ�G/^t���#�wpfr����țaF��*�7��GNK���_���>����-��=���ұvb�L�F�v��8����W�9�#��t!d#.V�x9�����VU2d��iB\�?zjWD�-^�y�jq��ZMaa���t�	SJP^38Y���L�R>��QDM�
9�D\�I��-���O�'w��T�{;�����b�纖2�#Ie�͑�2�=���E�/�cS��$� ��{躾����za�uc��|d����6���=�K��?�gؑ1"�{���o�V��w�ita����g���z�탈��?�5��&&D�8I� f^ʧnEW�3X��������M��Ȇ6rY$p�(_����f�M����j�t���P˦��R���&��QjQ��Î���ї�ä�]U��:����eE�q���"䇂���~t���ݴQA��WB[������� �]�p��D^�/�����)y6x�ʘi�/�܄���2�x��r��\�3�ħp���;7;�hM��E$U��O��0
n���zi�	�gW�V�e���O�q�4�@�&x��z���s�O���d�����簧���Y�;��5R�螱�+2ݪ�G�h�ճw�,O%��؄᾽����7Ͼ]�,�0��Ɓ�,F��)e���o����Tx��mrH@��4�oj)P������
�"N��Ŭ�6�)�JG��
��p>*�j�
��x��x�����љLEb�+H�#5�[]8˖������[��vf>f� /Ǻ�>;u��T{�K�H����������j]���(@Av��D����Ɏ�����x�iz���ݽ���B�&��������J�b;H���52�o��L��ƺ���z�bQy�(�S���d�ɜ�~"ˎ5tmO1NBܸU���R.��X(�^�(�g1+�q�,e�`��(&�9m�3�rk}���ĕ����S�����F���nh�A#F���"��c4�ت8��Ne�	؊�?�ɊfG2ʖd�$vH�בb��Osi����Z8a]�Ul�=�~�/�_g8r^Y;�^dHq���lA����T�
EFk��o2�)�E�QV���=��L���(�c2���Mej���-����W� �3�q� C:fB됿���Y��y�W�e2����=�Bs��.���`�5/�Q�i�#�h�Z��L�_�B�7���L[!0������_#�����
Nq}�D^�Y�s��D��
�Ax�"C�|�Y���]�d�eT��D�	�Į�:e�^c�9&}MQ�kM�[�$�L|��K�g�3`?T���>Fnl�� �w$8	��9d_z˓t���ۺm�~U��V��P�4���"�L��� s������m���F��q�*Ey�7��˿���m��G��
����K̶�e;0@���6��:R�% ��(@*'�9ٖ�&f9A�ޜ�-Ձ�!i����*%��z3��Zx���*���~V/4���AN����ܼ��A���mt�n9�U��@�ݿ_2���h��@�53���c���2��hRȯ Wh�$��X`�12�qo��� +������+��Ӄ0��/�ǯ^�o}��Ӣ]W�uPF�W�Xa'��y}T�O�����~p�P�m����Y��Zp��٤Y(���0����nV���bU�ᢴ;-��#�wǪ�:��XN��^�?#_�c�h��*�n�+?J-Nt��b\�U->eU"��uL�c�������rx>�"�GJ7�adV  
͖�̎��-��m?�4��/JQg�Y�G���d��|�<�`B����g@�h0G��'O����9t8���F$(�Q�O���?��|�NETΙ�r�La�)9�Nyt�@��t�������~u�Qau����*�����b���������#�h4~� Ux&�H�}d��s']ڴ߈1���&�F՟J��l4�VBԕ���O��4$p"��91��w�"���A�o����?+J�"�Ƒ��+�F�O=�퇶�Z�~�� �/2�p��k�z쵋j*��G��6�<�	�}�NB<Jm����\���`��TŠ	"��Q4S��������K�����Q٫j�0_� (�LfG@؀��,^
�>��ݾ&k�P0P�]L�_��M�tj�`�0��w�Lm1��}na.+��q�J2�0���@4�#���	@ASa'7|84��Fr�~�����!��40p(����G]�`h�K�_'ib<��W��D���b�:mE��$4���W+t�خ(��"�Պ�G���L�����:vn-�/��C��Uk�=~��+ic�X��Є�~�z�[28C���˼�zͷ���b���+�|J� ��`��=�O6ʹ�B��8.RNK�٠l��E�a�1��^��g+.ޑ�r�`�>��j�0����sS&�Gr��"H�ܮ��s:��_�����-}00���%zb���D� '#Q <�ٲ�xb|�)�x(�b�ٓ��Z�*�V5ު�_ע�
���+/s/�D�U�["�.�2ܢ���4}��O����l��yC{cy���X����;IZ��L(��W��hLgR�9�bGF�!ݺ0)7`"�z^���#Z�O������D�&��)�u�7����&U��"��*(z��	�����㕤�t����o���+��v�A���+	ؠt�#*��xS�38��l��
:��2"{�kG��[<��S"�큉,��B	������w1�'u�U7�hA�t}ϲ����`�$�+�
O�i�#C\�ף�ʡ���\ʜ�Ƚ%]b����\Uk�������K�M���cx�6P�i��x&��;}M
�,T����4����7�E�_�>D�:����V�>�ٕ��D���`�����}-��e�ps9/��Z��L�K��	��>R�� ��9Z�U�P;�֙�jDJ)��������D.��a�N*�{f��Ie=�mJ`�E�1��W���YrH
���:�EZ��p@�<��������"�����`3��8~�xG������jp��L��jC�Z%��\�#��|�j��_�H����l_��7����=27.����?Q(�\v�Y?ȉͨ�k�E���||��2Y|N�����yn�{Z���Wӹ�`���%ML�^�����������9f�-��Ng���҈Unx26��~�/Ώ��K��*&���v����;��߯ga-�+K���o��6�ðNQ�k�?�7W�)�#y.�2�h��#�*���@��̩�>^�|.�ω0�5w���
[�Z����r��3��)խld����(�@�kW�uO^�t/�U���d^�.�4�>坑L!�J��d�>���ا�J�c1v�
�'�������huF�[�P�"c�%k?+�O��E��
��ܼ/2H�.@�	�����0:��r:��(�^i�f<��J,�)�$���<��N�,{���b�{����(��{[�����ƽ���e~�f���P6��R��1͠W�A����1��&D���Ӣ,.u���ۃ�0�csƘ�-���'����z�>�=+�t���E��M���-�E
����6��%�_&����g����Aǅ��,9���%b�!7J���H�!yO�'MhV|�Mq�A&��`�A�[�E'kȚ����/���*_C�T�H,�\
t�}�k��挐�$]�P���(9+#<9���ەB[]EVA0RAݘ&���	�[��b<ߍ6��o��j�������7 PI���!�`�w�����&/cf�+:'��[^����m�S4w�[u߰ڏTM�*��yp)���D�(��|%F8}��EAa#�O�y-�v���.~�;�uh�=�{bi��!c`�AT�e����*	}�Ň$���3��� $MpwitR�I�ȽJ�uL�ۛo%�[�����5���u��өA�k�R�H�Y��E��Qb�.�:0�����1���(�VS�*iF���$ e�����"�j����af�/���n	�2�4��~���HF���=1���݄�J�k�ɨ�-������ò~�+\���b�&�����J1xt����M�A��c(�t��fᚗ�8(�'�yq�Y�FA�멸fɡ�Z%�^�3���[�q;���ܖ�Q~W�V�Y��[Hp�����4�Z�d���.Y���+(��ͱ�ᇷ�тr�\�����x,���S	�
8�_D@З���
���VZ�����a��d�ҏdez1�K�J�8-j�t��h������(Zm6(�_��t�3��iz��7|��G&��c]��i���z�q�H����8��/Ow�HJ���<��b���08/\U��<�_�U�M9����!�E~�G�j�<p4BY�Ye<;��&yJ���z�5�Y�5��[��꼰������>� 2���H_��WKu�$�[��i���A��̜Z��߸�^,A�@���(�*W��U{��EtϾ�@a܋��9�f�a?�x���t��_�����o`,Ľx֥k����l�����FL�LM�o-�2��H��u�YQzR�MpC��62��$�l���C�Ƀ3vl��b���([�r~.���eU&��z~p4ge�j1�	�c��-�g����k.`"Q�_�����)st��<�V�a���Z8N�|cݔ�.�a?-B1�%�ac9,�����7">a��|W�.��[�,����D��(0�:�[P)�l�/6�� L��a -���v;����@��R���b��c?���a�
J�7�l+AL�6�3��a���<	&s�h�DX�&߀�q6_z>�Ai���н��c��C���[�F�����?K\W��m��óՄC�X�J��|�GA�#�x<�;x�����Lj[�B�á�=�<}���?F-"A��iP����c+�:�Hќ1�mb�l��kچ8�ͅ��~�9#S�x*��OFO`9���V[�M�������]�L�s�➂-G���<>5X��G������O�]Ҥ�ނ�L[���bke��#b�/P�O��t	�daH��( &���Py��v,�a�w4�N�>�
��[T�����{b���ځ��!D�2��~�A��ep;�@JoP��
���e��NO���L:A:������	���)76E �oϑM/-	�Iav`��E��Ҽw�	nm����x��HsY7X-���QQ1OJP`I��dǂ��gMJ�-�[V�����)�����،6\X��ϗ�k��S�+�㨿��1��t��c+��� ��@�~q���BB^�c����UP޺�� ��o-�Ȉ(@V`��=�LM�|Y��/z����ِEW���Ӈ�E�&������8P�*_��r5M���hT��"(�c��	������0�	���p�V�-< �u-%Q���X�G�HPO���KJ� ��F>wo�_�?$���]�2XC�[�shk�h0<��d�yW��_%�7f~B�����+7)��ƾu5��G�I�bW�Y�kӇjV[�Q������\�v7�d��T�p�AP��=/I� )>�3�Y2�Y��E.�����y6�jkWR*kZI�������#�bR�[5��$�}*=�F#����:���d��Ǆ,��m�d ������v�5�Z�N���p�������0ahj�kxbh?nK~�c6m��D޾'�DRy��5�m��M�afJz?U��k$������Л�*���Srs@0WM���X��6���	P�����h��wg�-��	�4�����%���;�Ü�'9��&nW��^P��r��A�NOǢ�;��C2
�$q5F9	���rd`���j�u��y���c�<_}�U#��{�3"M�@���8�Z��1W0~�.�^Zp�ڔ���C,�{gc���N����D]�N͝�ͯ��u���T,(��1�퉚:��s|j�rn�(��eޘ��n�wS��� Ψ,I�C���R�l^�)]/�%N�Ɲq!ʼ�y�,9Q�,=}��T���y��ҷU���r˼���̱nh�����!,G�~�ٜ�1���+��o�P�4jD�ߴՈ��s
�@���I�c!����}	kn,,a��?�VS%� >e����q�_�
X��a�h��~��$G�Z��bŋ���<j�X�D>a['d}���\�Vo�o�٥J�KX� ��\R��N�� ���)�Β���N���	栿��l'[�����ö\8v@��[�z	��� �t�>�S�T=6)�YI9��]쒸k�����2��^�h�����1��ue�eX���Α�^�"��C��Ql���.�yB�]�Ӹs^Ï�j I:Z�Y��LxP��;��3/%�K��:M�U�C/�R�o����lQ��w6�{�Ȕ���f)>+n�� ��+K<��u!5���䰚����9;��5�D� �Ơ>"T#pb7�.����\<ǚ�-���XThhRR�F:�xH9l�
t6��C1��쳺�(�2s��=��ɪ1��n���Ymt����xٕ����G��L��b��(��
��<W>����}��HiLzd�Ri^P+��yv�|�͉�D���ܖ䤊}�w�/��S��߀��N�t�l��`�\I�ƷC���{
�+0��\QTv�-��&g��	)���ڣ��UR�dH�9��sG{��z�Ib���~�t�2��"��W��m��ٿ��	��	��N�Hj���=�K�<}��G���<[}R�f��RE������Yb��9�Kg`Ӫn�WE"Y�Oѐ���}�e{��5I-tU���AW[̝v�6����L�^[�����P�D��}��@=���C�'6����al���~.�!���}/�Y"{�L6����Q7�_<��a�W۸_yNn����N����PB���!�*� �j��Y�����?θژJ����_5`J��� w��Ml���D%T���������P������I�aoL�m��Wo�eݪ��N�2�� T�6���1�JK����6�&�x� 	�����X|���Ϲ�L�1��]B5b���~♦��2���4F�𽧼��-�	(�v"]_�(J٨�J���)=�	Vn�o	&�k�v�L����^K:b5g��D��.[C�:��sO略�3T�鏌���R��?�iu�#��������iN6f?Ż<�g�gC�?2:"��sU/i3l��{ ��� 5,^��^��V(Cк��0�\���[�oN��ѵwx���!Z�H�I]`��rO��l���� TC�w�]^La�����!2>[�ZE��U���F3�4DA%�#�sx��4��,�գ8p�J2-�c��+��~QycQ4/o8 �Tý���s����Ϣ@�҈�<YՏ�L<ani�t$�A��L(D�E���B��+��wU3H,�&�ߧp�t�_�cO��q�ш���E��ϕ��xn���2ĕ<�c� {5��:0�9�Q�nRl 
f'�S
�2�� P�+�(���%^-yt�R����E}g~�7��-�7`+�/D�^I@��h�]�Qn�_�:�MG� N/��2ߗ)k��+bh�9�"���yf�rG7(�<M\֏�݅����f1��O5���|���o�SM��R�Ј��5j�7��Ѻ�Nӆi��p�3
~'>[B�?�;8��e��o�>�_�G����>�oV�	������
�k�԰��b�~��>�o�zRu6�������n�7�� ��F���	��JkA��ɳ6�	FaMi�^y�
�m�'ZSd��*&�)-}�\j�i��� ���A�JNm�z �����\*S�J(8�	g����`@
```

---

## File: `public/navigation/products/social-link-analytics.avif`

**Size:** 4684 bytes

```
   ftypavif    mif1avifmiaf  pmeta       !hdlr        pict                pitm        4iloc    D@      �       S     �       e   8iinf        infe      av01    infe      av01    �iprp   �ipco   av1C�!    ispe      �  k   pixi       av1C�    pixi       8auxC    urn:mpeg:mpegB:cicp:systems:auxiliary:alpha    ipma        � ��   iref       auxl     �mdat 

8f'�Sh4�2�� �@�J��;��
����)~�K�
����ڊ3�U���J�R�H�ޖ�e��KV<Bp����c��d����㞆-G`{��-��
Q+��U�ԶN]ů��C�-K�p�����<��l���Ev���7�L?b5���$��F�
8Ĥp�n��=,$��`�QD��#��_�(�a��'�����v�S�]�]���w�U�� ����o�Q���zT����&�%��̬��ČOǭ�d�H���6�Dn*�T�氺.�>g�k�]����Y$�����`_�bWcR� r�'s���|?i^r9�\��kB�͘D}CnF�xm��_��#��t�wQ���zU=��aD�¥fŁ��y��Ŗ)D�]�|V�L³�7�>����?� ��#tޖ?)s������hh%�I�~�_�+]"��=S:�k�ܻ��f�ά�s���+��w���X~ߙv�f�ۘ��AŪ0�����~~��}�ɍn�Q[�n%Pණl��e���zfE��x���ϵ[Un-J�|/]u-�B�z��'�Wx��m��cj�Z)"M��qT\�DLX�����,U1~��$ZZ%,ߡ}e|_
�U|6�o�ȉo�"���`}���\	�9���o�{��D�PY��>^�3  !�)�Ar��*bG���-��S��1�l<��Y6s�/����+�k�?���+�'Ṋ�nX�1�$��>��#��^uw��.x��:�FƔ+4�6e��N���r�׎�v��6W\� o��w~z9���H]���&��x+���"�m�Z�"xo�=2�V����s�Ȃ���A���|/m>�GArl�ER�&4RH�.M�դ�����(f�m.9�8�+�s՚�.u��f�X>��zԩ����+�)�:�g]g���M�M�jO��O0h�v�rvn`3,��Pۈ�z/����c�
���� L�L�C� KYLb=�%Y����r�	^�y\p�C�X"y����i�����-����`���4e�]�7�4C|?�,c�뛙 7��]��V�j��.��؅�d�Oo>9�Ӻu��Wi��Q�@՞��Rk�?�p�}�S�t�:4��Hm�?[�+�&h�o�t�8�+������F���Ƹ��E+M�_D|C(�y��[���@_�_.p�>��YD���Q�1����#$<�R)7䋼b_Y�v]���wjh��b����w��{���fJ�t�92f�E���Y
e�hu`̥-���TR�8髳䏔��G6����7dk�$D6/N�T`���"O-[��j�F�{�>�ٲ���w�� ¸�@����c췺M�UIi�3�4���t�Mf���*�t3aQ��>|� \�~�Ǧ�� n�4� ���������oL�u��g�S�:�Qrm��A}mzDoj��?��U��MS ��,�8��]�8�5p¦��*.�f��R@���F)�5�L�!YA�1���t�`5�e3�Ny#~y+4_sIh�h�įʻ���p�'\`�����aY������+�m�3m��#7�;�Ɯ}��IuYO�����[mjA6�m �7M��%�P4����������Ū<̑0�[6w$\��Q������ӛ`���M{�~lv���	2$6OցQ��~JrEGc]��|�G��Y�&޳�Is7����D��==�Tv{�#i����ew�`��1�8��sh)�U�8���v��n��ɒ���ǳj�l׻��Q��G�p�J��O;���RtT^Hgo���G
	g��6��앹k�`��J���}�؛k�W�з�8����f5�1���/������W	\���J�ס]7a�ա.Y �g�:�ʻ��q������Z���7R�z*Bc��|@;r�m��O���(����Ö��a�"a?t�G�����R�?UН�*��D�s�;zD���%^;Pm�Y�	���h�>%�Mh/���D��`�B�\b���Z�+�顣.��s�u��"`�Ӛ��;��B�^�$�])�D������C�|yL��]�&>��_N}��!�4EA��̨H�["��Ϝ��m`�^���
� ��h�����h-;9��-��w�:7,��#iS9!�I�����?��Ohc���;����s�����)z���@�j�x����Y+^�q.�	���(����5�(�Օ�o�n= �p��`N�;��25�&ӎ��G�|���r�ɾx���<R��AW���_��D���\��z�~�C� ��ꐊ�aг�C���y����}l'���j	̰O����:�6���䘭��k#�lۄ�����W'p+���4���s��qY����Ɋ����H{��!�%�!T7F/���#�|J۵��?�#��1�:�u�����h�c�+-�z7HzY���)3�L��Ѽ�F|��aP^U�{��}(�_�F�y������l"(m���9���9���]��E��Rd3��כ����Vvڥ��Lk��Om�]Ƽ&�<:+��wƤн*�Qʵ��%�����@�GΔ��ߞ��>&����X�fg��/���m�2�E6R`�}��1�xyj��ϵa��yi�Yy�5Õ=$��u�Y�)�]�i��>�*�>��
�@���S�C�T��D�]�T��;х���lE=�\Q3�!7X3z��7����%�0������LaK�����P:	=��Ο��O{��H��{a��&������賟�\F�4���a�h79�ۣ�]V���i����r����Y��z��`��	q�[���E+���T��֊�Su��kb@��t�`��I/�L�#1"X�Ϋ�u�:/����*
�pFd.,��+տf������f
`������b�k�(;zG�^�yY� r�s�w��T���,M����Aɋ��zY�M�b����izf@q�C�E��q�x��{������@�S���ݫ��5��[��.
�״��G��߯���B�\�]��妔ѻ�t���^��u����%��E�M
�/�/��`Y:c�m��yr*jQ�x�m6��AV1�u�2�� �_�=�'.��8��t�kv���n+�'&+���r~��W0`_򰼓��
�̪*�d�'��EjO�r��̧Oj��+tO��krL&�&�~�54g0�P2p��KJ�6����/���
`|2S]ֹ����ꜴV��ko0/ϑ����3��.]߳�!y��</%�B�3:�}O"&h��=Xk�%��D)ɯG=����\��W©E�}�|�mZ�qzhNc�I~K��m��3:�nZkC@���4���E;�ޑ�U��̒�s��<�~�k l7[z�0�ST�ll>�^S�AA��a��yITa��G����&��L0�����}�I�i�ۄsT�`�����+����� ��*t1�9�N�%%4�9Ou�Z�C��N���u�u���rD�;x�zr�]����D�)��fxr�/��#�Ahޥ�+�e��*#S��PSL��99g�!wo�L6���O�A��^�i�[�K�3���oW�:�E6����3;˹�/��ʯ�E�Z��+r�uM�d�c�;>���cs����癞!F�D?���eb$�����--Y��Q� ꣱e޺d�s��%���bT`t�5���\�)GА��V���z�Q�XF�����g�2�}d);�-��ER%��D.8+��e���N\%�+�{�8r��w�3HQ+�^¥���~��B�{[6ZI��ᆆ��5���2���TH��}�ݥv�˯��-����j�ޜОs��:�L�S��b 
f'�S
�2�� P�+�(���%^-yt�R����E}g~�7��-�7`+�/D�^I@��h�]�Qn�_�:�MG� N/��2ߗ)k��+bh�9�"���yf�rG7(�<M\֏�݅����f1�ɯɤ:��W�9D�_��2�P)����"�uw���9�`/zl1t�84�;w��a�=���F�`_1������>/s,�Wf�����i,����/z�� b�̭ڏ:q�]=��Zq# h�Ύ�РEdL)+��r��ߐ�V���_xE�	�!b�|��8!l{��3�|̒�i\�}?����ȭJ+$/�AO�:">Վ������65��К��@	��߭%�Lr���5���
```

---

## File: `public/navigation/products/what.avif`

**Size:** 10073 bytes

```
   ftypavif    mif1avifmiaf  pmeta       !hdlr        pict                pitm        4iloc    D@      �       $_     %�       f   8iinf        infe      av01    infe      av01    �iprp   �ipco   av1C�!    ispe      �  k   pixi       av1C�    pixi       8auxC    urn:mpeg:mpegB:cicp:systems:auxiliary:alpha    ipma        � ��   iref       auxl     %�mdat 

8f'�Sh4�2�H� �@�+@��SX���tm��/OU�T~ 9���=v`fg��~c�ʉ��b�َ�� g��+�b��%�?A��fS���=�����F���u����	y0'B��7���L�)q�#��O��׵�[��m��X3�	*�A0~�z��:%6mf���F�����M�fh���:�ɀ \k���A?R<�S㙆���EbA]])�.��<�dG����6�f���:L:=�&?^	��w��P�46 E�|4���Üy��Q�)�K������é�����󄡶m�6��:=�"R
����X�2�{�9�Mu�������ѷ"�t��}E���,��Hs%h�.��@n�.Άw�H���r�쟩�;�:|�$���0Q�!�]����0���W�����_k���ʑ
��*�nml0����Q��W�GFs[���囋a6dٛ��j�˚P�=�y����#"�y(�j�����6Q�%��l���~��j��0�U0�B�,l�}G��(�H��T�ݓ������7������L����u�qYE�b���i�9v�]��Mɯ�Čч������l+x�/?X�`��~X��YӦaq	����ى�� �Z[-��Y�]P��q'B��/ƥ��a��;��z�@ը�q�>So�W_��a <��#��d��U"����z>��gmyO{ހ���_xN��Z
b2��!��)-=�H�p9^�/��F�ԍh��m��;k�;��Fg�����P�S���i��'����w��peˇ}�b#�����U8j�⟈S��Dp������'e�u���'����>=�VI����-i|�(ɯd�������^Mw��i������oQ��V�_(F(�N��zH�m��z\Q�Je+M,�#j'2f^��$"��!�cQ�󊻮��5���gwv����v	ZB�!�{y����ka�fl�y��ZI-��um�z����k��0�(T�1X)�=.(E�=jsi�闙���z��P7y)>���U$!����{/���=(��-�6v1�y���j��͹��S0�?�<����Vm��O�	Z��0�_�u��^��� }D eW&��ƿҿu�mAg_����hQ�vp�~d2.�̰0ף�/#�J��Qx@��f��I��4�}za���<�nX�>�n}Z��7�I�M:��
�����V^ds ���~�1�� v�⿷����=f_�z`����{�fs��Y&*y�RL9��-�|퀠�)�;}G(�� ��ؤ]\X�c��w���_��P.�ɂ�3���g'��ӕ�.��0��8�w���̈́���}���=�z�u�Ⱥ\��;�� �������
���Y>|�X�"3T�g j6�����z{������$*�u�3���{c�=��l�\��<��Mg�7�)�f�42��J��+'ز/_l�F�wvWX�q���| ��T�s�4$��C�1��Ήgv�XL]k?��ym��"wA��D8�O#����nV���j�orfp�v\+�tI��4�@��ہ��ct�B�y������[���4V�<�J:bB
�sN^\�=�Rk�E�@��d�`-�Q�Ljd�xG���m��6��x����V$�8Ė�];���[Œþ�4+>�~B?ޜ1�0�V��,|մBl������)��WW�	��87�m�̚��(��l����N�HX���$zd�<-����N
/�r���vj���R�4Ԃ�!ϙ@��in%�T�������.�!^���8����	�q<���A�����{���@�s��5xֆ��:d����W�]�;0��͸��_���6c&W�x�GRG�E��Q=')��)���Y�{7+���`Sn�ԯ��^��Mmlt�w7��Y�-f�h%5�e�v�%Wm��!�y5��c&�!�� �4o�f}�\�t!C���;?�Xul����P�}vW�m��G��H(.Dǋ��b)���I�����Z6T�"s �`=֌Z��i��0, ���BW��D���K�g�C�� �|�[c!�;��)����[��0W���՛�r��(�5{�|�43�9�Y�P�E'�,�$\�6�h!3 ��&���d1�j�)�e�f{��#k��9���Gǒ�?×�o����=xi�Q��\��~E���DS��Q��x���n�:J,���絛������!ρ��n��d~3��/����=���<�IC+e�ޤ#JÆuJ��:pR�������7�j��vA#���̈́�LF��lBo3��mɺ<�	�R�6q?��PvHk�±�	�j�[),�d��vaȶ)0����5�A���`/�b�x�~�������v�?-F\�盈�5�11�ٺ�28M�[�F=$�pLeaα��j����婰,����['K��L������pm \�(��i⿛��y�˻w�U�8OᶫB?&$���Y�`ĭ��͸2;ݭ?����E6=���Q��)�G�Bl�⮖�7șG�[׵?����;k&,[��7A��qc4{z0>�,Y<�LU�ͺ��t����G�Mq�9�=a��O���;����k������z~[d�>�}k͏;���[�(V�v2�g�S=���"�o��T ���p��t<�����<'�N--��CD�;*2$��!��g{�n���i����/$�	�{�W��ՄNx��S���=�06	x���i���	zCy)����A_���t9��a*ۅ���BN~��Fn���A�} >�KQ�^���*����Q�-ՄF�m0h�F�}n�k�K�A�g����QEE�/�."^;I�@���V`��K�m���K����F�����k2�l��*�Be,܌LQj��yn:�ܪNR>5F��wK�hM9iׯg¼���7���<ޫ�@�X8T>���ԃ}��8�G��3��C�����RDF��,�U5)����:�ʷ{�h8w��kP ��^�o%3�M�D��tt������;��+9���I���)h�ʆ�j�p�ց(	��3��ɚ�G ���i2����!��Z�2��ʰ��8��e(7	PQ�~�,����ҳ}��R0�UnN�&	N$���h��>��</!���/�`�$�?�:N�L�����ţ��?rv�c��ny�HL�Or6#�;�,<H4��G���F���t�V ��:��SB?L����>�3�ӻ38��lĊ��٠��� �/�?���J��7�l�L\�}�B��?�'r������e1��fC�z��9d��
u.��2��]�آ�o��5x��M����V�`k#��>�����݊b��h2��a�K��g��l��؉�i������sF�}r�9~�7�fX����=� �]��l;���س:F��t[�%"BE.��
���"\�u%4P~��&�a��G �jlu����B��Ț������o5I��0�6Iw��uK���{��A����~7I�s��3�9�h���=�R.�%�����Ye|��)��L$w��K,��´������W[Ŧ�$��@t.oF�A���A�!6`� �]L�� ����s⚥0��,�e��˵�L���d�Ox*��I�Pܞ�j#zz>~Rm໎3���/�ʛ�wZ�� [�?�=jя�*���&��|?#y�l��x3�Ĺ����"��;��>�s�uuSY�1 �\/|#O��-���K��7Q���Km>VݢDR��Z��v���{�[�ތ9���B+y�]���fA)�E6�~�?��Wx2C���&o�pװ�w�bY֪r��M���� �����!b 3d�0(��jy���I.�6�v�e]��pT+Q�/�0��Y硧0Sg��Q�Z�@�}�����dT:+�s�p�K����ټ�(,Z�gt�z0S�|���C�$,�$��4hw٪JX�^W?����=���DýEB���|�DU�eC�t�@��;#�Z(?�A��<lw������#j%#u���8S-�����i����(��k�8�J� [�`\�hV������n����5 l�C��5s�I�HM�����hr;��و׻�BR�I����uJ����C�kk�W��6���s�uj|�0���7�L�<lR c����./���s�����E>�)�s�wX�c���X!Q��ra0���(���k�j�D^} �XL��eAx��m�e�s�Tc���hA��a Q�!���H6NXT��<�-u��55���E��<+��N%{�<��ߛ���vs����o�d~!)}Qw�Re����3,�����5�h����m�.�j�	'%ӰE��^��"{��i��Ub�W9�U(L(7�-�G3y�ty�&�/%+E��A��� ]R�C�.�E'�t��c�s�zU}����k�cD�i@���t������Ԕk�s�A�'�o��M�6Z�����V�>l֭��D�$G��M�-����F��W�����B�<Ũ�<D�N V=�lN��D U�NrJ[��D�ݴ�� ����O�3A�\��1f�Q�(�c��V�I�D��6�d8DJ�.��ԏ.5�bOc��v��Je/�F��y��GP�u*��+��d*�i}��*
n�U)��7Mϭ�x���b[�L���0���_!8i���G�?gW��O�ܝ�a`�k]�h�v���Pp�lQ4�k~�d��&�Q0,��9U��2R6Wk �V��H�Cu�AR+\Y��s��wa��A1��լ7��6'�����Ė�_s���V�[��]>J�zvOה�����A�.|1,�:k���"��ľ|������JCA��I.��Z�%��wl��c~ƅ����ݷ���h�R�����s�����a ��?�V)�� Z���dԭ���V?��գ�^j�%��)�K�c�h����!�6$!��fX٫g7��Ǆx�6��K���5�(�d���;�_�����X3wHԣzeY!?�R����F���L:Ai��޹L�D ]{籘�����gn.�RAIW��9^�U���J��{�j����P�/I6*<�{���z��NǁP���z����&�a'�<q���`͝��j�s���B} �	���^���O뤀>� ����\@ WC��e����9)��u�s%CE%��|mC�p�$�����*��N�p5E�P=/v�����ؿ6=����TD�A'�ܲ�#���δ j��!��B֌��SXz�� i���5ߓb��
I�K&�u��>� �G�u��$�#x!�
�<�0/Nfڵ�_�uދ�+�*{��K��i^���[I�������2ԋ��� =����:�<P����Vrm,h���V"Yq&[�3��n�)ŒK�⌀T��+��K$�X����(�+���Q�P� ��yI�b�On&L�'[M5Y�x��Vq�6�7�mn���D[�
"��x���'0퐲I����|b�]؄�5&�#�;�@�d��r�z �S;K 0V<h>��Ln���w�,$���z�p}f
u��L�V}c���0���Y���Y�jC�����[�w#��C_���{9���9V~�|��/W���p	f��������wA�iⲀe��\m��	'f�_A���U>N=���!X ��`�A8Ϝ%��#�����G�.6��8�)�~y���]f��^�-d�c���6�ŭ� �yՖC9�2].i�\��b��h��}'ѪO�0�����e,�Y�	+�����|���bd���+y���=dB��[�wv%a�⿳�P^P�fPFc�F�"�G;�=Za��b�:n���X�9�6�A�Le�����e�Kr�㘐����j�{�a���$o�v��Y��z���}�qO�F�_ȷC�,�l��aU�F���.���e9}ߺ����R?�Z��}rq� �ֳ�����1���2Qz�X�y��h��j�_ko��J�|;L�D�i����;[A���s������m"v`��}h�Е�v��j�#:���F�����ü�W�����i�q�c>�C)ӉA7T�C��]墖Xu�	�����ȫ:�9���t�r�H�r�'֐I���.���"{�t8a�_��H^_��O�+�]�(u]M� �tbr�BcA2#5�{'�'Y �WJ���<�ˇ��7�w֊�FdEc���8�g����]V6�o=�ů!���{8����â��
;�yx�CP��D��\��:H"��Kޠ��0�� �z�� �ܯ���0���k���%g���P��b�ț9�(��Ek.h�\EZM�����d�˗I�>�B@�Exp$
#��+����d��"pa
�I3�t5zr
V� �$[�qŇŭ���v�>�:C��o���/�o^T�KɫV{�EM(�o��Eʼ#z҇]%6�@�= 9��!g����$܋��Tv����%x7�qC�w��g;6���,d�Czs�{�����J? 4��l��=�FG�<'n���'�����j�!BV3�i�K�Y����#h 2 �w������?Җż�>/��#aW�s��z�����F{�<�@�:8��m�}����Eɯ��(����3:�dCݷ����k��/H�dv����6���E�{B����-���s,�|��KF�T�C+'��=�����q�������������׌\h8`�����dځnH�����g�Z?Nd��E�'閻��6U���v��"�g�s$cm2&��Ф'9X\w|f��]y���{tE�QM�E%�gx��1_U��th�����@����� ��{�9�BU�	H�Z2�r���9G=�W�@�ť
���8��-�rr�/NO�:5�$m#(�ͻ#q.��I#�ӻN+J�pe�ř� ε�����~��D��=1]���%{F]�0"@p�k^�`~g�*t~���y��k!�u��R��}l�%�(�/?֫��� ��7��vUf��6�#�X�u�+v�̊d�� �U���(+�-�Ԇ3��4M��ҿ��c���㜐�d����a��B��d��J��Li�\��l�|��7L[w �Sk�HVT�Eڍ�7��8��*�.~���a'p�(�!�'��B���<����J��oM��i�]��_�ʦ-0u+�5�ڣ�Ë�\ar�Zs��׶�nJi(��
X����:����ީ��^����	;8G������kD�N~�oM�7p23��rn���m��4:l�@Ĳ��Y����I\M0��'{�Mz��'�^�>*Hg;�����l����-�P'p�B��3�J���8^�Z���J��~�VC�4-�"K٭\X�I��\���^���>�|0��m*��	�M�7Wt����aQ�(j�
���1?�/*�2�`#��A"�~� <2��M^˶�أ��l��m�uZ�����t�jb_B[�Y�#��h�9�-��9�W���}��c a���_O0�0M�h?Y�)�Ĳ�r��`�nUJl�p�غ�2��S�i�G�T?)$���Q�BK�Q9�f�X/���ª��[XX�C����PT�=6ɏ���x���P�̓8'#ʽI���7���͕�c�!���`e��qB,L��7S��9#  �_�5�e���gS#qW�2�*��zQ9e��E D�	���^AN{R�L�o8���=�<v��h:2w7*Q}��e�������Pq?}���J���*�n]�:Z��L:�g�y�`���� ?r~|�?;={`����:��i��v2l��/��Ӧ`������V3U��
y\��H�p�	�w'�U\U��!�F�g|nS�����q���4N;�� ���@E�\>�HS�y����zc"��������gT�i:s�m�+���J��p��������l��ac܏�%�L����0C��f�����و�tA�(΀B�W��cv	�{P����	4r �����1ޠ̼���>t3
�n�w������|��x�D�W�C]́��tQB��`f�vk��s-3�P�#��P]R��c(�j����ceQk��F�z�<fX��d��t�� ��|Y�mDe �hE�z�:Thy{I��0q�/@=H���*��	�9k ��Qu�2�GR�-z��iz��5��H �gU{֋�#����Ϲ8���푲$�G��ʀ�/����ɠ���Qp!�{0d���y�ex�"W���w%�'�q �?�a�J�?���{�����J�Џr�i�K:=�3Ea�f�>⯼>A*���� /��[ڠI�<dj���*�������zp<s�,�a��m� 3���~�J�[c�kg)�5A�v�#J����|EV#�����RO�2��b�o��P�#���g�ܵ\�}�mֆ��=�-�}N(h�`���<��;_�*�* 2�����e�´����hV"�]j�]��s���J�s�`5f��3�:��fȉ���{�U����%1�!�ߓ5;^k�p��^��2�mo�-!]�X���lx3PP���O�z�$J�f���h\�����f�P"��!D+�*r��/
�ö
�c�a8:��W�x�C��jg�|�znD!g�]����K����nx�X!��[�y2��F�\?D�̬cQ�"ϵϑFO��N�5��&�[o��i������}C�B�}~�Sas��ߛ4k�p������e5<\qf=�qe6��l8O�ťw<x2���o��.0�?��_9,3�/m��v�4������;���T�c9�k�4{��
����Ů��>,}-P��4	�1Z8������l
: 0�`TP#sh�x�n'g� �ݩ��f���
$�h�TRM��/T�{���ʍz�c��;�����:�y��|>�H�)֊s\I{櫟+������Y�r�j�6�A3��a����/�lpȎ���Ьs�(�r�kɳGK�r����2 �Or*EAۜh�/H�no��6'�ǁ�$��SC��j@V�#��o��e�����  .���N��jf���ќέ ��&���]'\��l��(í���OT��"���I`�-Y��eyge2�a�q�3�D�V�օ� �
�LH��w-�іQVG���S�C�bF�0k�o3�=tID��j�
$W�ΰ�9=7�o�s�'@ 
f'�S
�2�� P�+�(���%^-\��� �r�K��4�芸�o@ĕ���%��+���sY,F[/ǆ���Y����RF��Ǫ�A{��O	%�`����U�zZI�qbV����si@�ʸH���/w*%�э��N��䦙���\�UDs��(!���,�V�.������Πr�p��,s΢g���yCY���K�r8[{���+K�od��k\�?,�G
��B�/�j
�����)��m~Q?7��F#��*�O��YgMԟ�`��Բ�ٶi���{�7W8.^��Lj�G�һ�@��VX{ر�DK��-A��$��fGrr�V>}�b�x�dK������
```

---

## File: `public/ShareContent/all-your-things-1.avif`

**Size:** 9230 bytes

```
   ftypavif    mif1avifmiaf  pmeta       !hdlr        pict                pitm        4iloc    D@      �        Q     !�       )   8iinf        infe      av01    infe      av01    �iprp   �ipco   av1C�     ispe      �   o   pixi       av1C�     pixi       8auxC    urn:mpeg:mpegB:cicp:systems:auxiliary:alpha    ipma        � ��   iref       auxl     "�mdat 
	8!���@CA�2�@� �@�:���v\@ɪ?{� �� P˙�����÷q�#+�2��{Y�h9G��Igy���1>�p��O?0,���0���o��+�)�x�PM>h�O��_+����O/>-k��'�}����+Ò�{OQ{����"������*���X�A��в^jK���I!�Zm��
Fױ�����7~�0s�3�^�``��s�`��ϲ'v'P5�#
��9n��*�,ߛZe�c�$f�"r~E_9������	̟N�g<��<W�Ħ�X��?	u��3j2J�C�
RKclv�*��p��!��C\�1\����`Lo��������[�(F�ivȷ���	�4�6z����T�(��y��VC���i%x���c��"��Wa/���m��G�+��O��4٨�6-����
>>� b�w+A%���t�N��\�C���P_����
�o�!g��J1s��T��e��Y���֞rLYA��^�^�F�")��k�W�]�e�h�~Y=�9��ǟ^��z��Fu��ʯ|-�sB]�M�^�N�w׊��nZ�P�j��&�m��G���a�g�|[�w�s�¥��N�Wl��/>a�("�H����� �Soo��5|�����]-��ш�k�b��m��]N$O���`�aq:ڧ�Q�Y�����T��>g=IǙ?���n�g?�>��4��5�|��AS-"����;�G������:���˘|���	V��p{���p���ÆL�Eh`{부۞�W_��].	] ��<Fpy����HP&,���"b�!��z{<��&��}�a��( n7U�E����ks�X{P��]"���<�h����+�y �ӷ�H*�1��-^���=ſBw�#��k���v{���)%�B�����_�PLD����!Gw��\�Eʔh��?���h�*���΍���'�網������I�!V��e4����`�״��V�.��*�դF��^�5�h�oq�\�u�!��	�փ׿�_Z�x�r�`�����-/��
���(������ �$�?2KV��i��Ja�~_Ӂ��!'M*t!�����Wwv�eg_��%�����~2U�X�l��+hH�?֭I����ͺ{���K����<��%���6��vp�)h�
��O�J�(N�ʒs�Z�K�늜K ~�ڟ�Yb�u�3g'�D���w��d'��b�����
9���CE�V��3�=C)�dL~C�ږ&Cd|��ϗ�?[v�ȁ�|��=��d��9K�\��&vo���N���aV���{�nu5��)���d��G[�Y�$��A*q"y���e.��T���F�1�a��Z�P�iS����A���9�v��QS�a�דj����C�3�|I�/J�&Zy�go�+�u�1�%��@u�P�s���@��+��jIu}2L�^4!�|�ⳕ�d[D�FkYc���W<ɜ���@�MV�F�4��j���Syw��"��翥���m3��f�������$����/���S�t�#*��r�+�?�;���.��ܼ�&�`����6��Jq���	�\�ZR��>4��۳�����Ym�����~��p�l��b^y�u��D��� �|N�u]���,B'����)im;�e���-�e��/��"�g7vD�%�}��H�F�윧����.�x�ثT����B�hI0�|{uK�a��!P\�����B�+|T��5�z�5�03���r{;��x8˿l�:��N�k
K@J�&��?,b�4��X��ؤ�fX�4!�p����q�="��	
(��,v0PX�܉k�'�f��v�����k���9.��J�w��������c8ў�χ��?�Ӯ ����e�'�(|�
&f�jM���<�O�[s�۬̏�Yq���+�W��t�-5vR��ϖq��*�}�Ƙ8��<��iI�B�2 D�+����� D����\�{�}v�p�]۟�k��d�����E�l<��X��xnD\��@�fR��������La�n�#�����q���I��R+��?��*�������e���v��#j-�p[P�X���ě����0'b2�hcӺ�q���5�i��22�/,�F�9�v�1ˢʬj�A}s]�o�As�˩}��FNmA]��F\9	�;��#�?�fP��>zW�	��Շkz�,�s"
���$@�5_�|�����i�D�L�h��[����7�	��"H������bYM�p��/{�D�<&���&DW��.8�\+*[����Ie�`���#	�	����$�7��t�޶�"^TӇ����@���E;&��B7�5�����c��r������~�E����}@>#-��-��g�Un�nD��_��8����/e�"u@���.�d���F����P��!2��2���������*6y	�@�&r��S��/�����g��b|���ؘZ9���4d��a�^v&�1_60�?;t �E��!=�B #"6�:\*����}r�1"x`�z2z�		2��[0��,<�ǟ���H��<n�$B_#�45�^G�������z�od�ҝ$J�ϊ��X�^�H!�2�Y�'�P�iE������;q�U-����g�s�_ʤQ�uuI�$�=A���,�J�1�;~N �c7�ۍO�$�1��'���@�l���p��HT���IT������\N"=A�^�t�
����J�Gh+w�ݦ�O��D1��'Q]�W�7*ǜUOȭ�!�h�����#�,�ϔ$�������F�4���V��k(�(2'$��.ҩeenBD��Z��{���9vmT��A�1ˎD�,��3�1�R5�-u��` ��[q�ze2L��
{c�s��I�A�@(��R�����w���0ꯌ{���4q!�_�֑�IB��d�̘{���J�*���Ua�oz�з�V�vNA�l�9��Z�gd��.�j[Buҙ�`TqkJE�؉�ח��A��$�] ���N���ZR��#{%� ĊB�W��!�����S"�<��83��a�S��4��P��ɦ~"84QH[������� �%.�!��8��=8�^�g�׮�+��ۇkn@�{q G 1���S��v�q��=�9���<�Xy�������N�eR� �F~���{���Ge��"X
:����}4O��� mI	���\������j�����R��@��8�G�}���Z�E�L���B%�0�a��?b%	"��w%.z��K ��w6�z�Hd�� h�mc��o���3J�x[J���=��N���-0M�f ��C��5|B�S;/s�>ŕ V��A�3����o�ݰ���x'!Q%E�Ñj����H��hӜJ:��z$�z�����䑈��3��۴L<�y���+�4�7R:�y�ӤZ�`-�jM;֫��{,u��)�$���-�?��J(�S������i�t��b�@�<A45�J߀�(ߐc�O�lnSئ���mYR�3O���d��~*O2v����+���6���WȺ@��.�(�����<+��Y�~R��n�[��}`��z� RǭTt��r�+O�'|J��n�J���a������}t�p,�AH[�]���߭��'Y�~By8�x�����y����^W��&
��"�6a7�]�X��Xэ�A� �����'�^�4��hC`�������Kb��E����e��]A�i3�=�v7�^*����[xvaj�f�Md����}=� $�q`ۆQ'`�q�LV$0�	�5�"��
(ѓ���(^���-�f�+Q=3ٽc4���ͺF݈�1c��FL�ǥ�'<����
 Bڴ9#z]"^?ES�OG��@G|���������xd ���1i��Rf7G����ǱJ=�k��{Y���C �+a�>�~����=�h8��T���Q�gV�����@�ӹm�Y_�&�mk߂�"�5�#6���r��|���a�f���yym���a���̍N� KDR�BZ�ۘ��-����'�6��S�L���E�����_�#�ILX*D��Ȉ�L�	W~�"�����cѭCv�������j]K�Ĵ����K��� �u"Q˯�������G����dKõ�L,�+�tq]"�ၐ#U���4q~r=�:�
���Mul��yx/�%�&nr��Y��]KE��X2`�a��cBh�K?6T�51��ox�����0D�����eP(&��H�k�=&�� �����3� ������,�ɟQ������]��!v!m<D��d���!�R=�[|���k�L�'-��M��>`RwۼA��m�e���@�-�S�>+�=����hT9����2t]�qz�-׋��K�������n{Ε��aV�zg+�gHZ� �+ƫל����
�S)JM�<���x�){���\�.��׳R��[u�['�$]m�݇�e\���tě����Ѣ~h�=�!J���� Cd�C�l�C0��V������t�!	������y����b�W��-�0,g���<�.wJ�s���p����r\$�썫FQ���xu�{�b��z ���r �=�c���N3yY���wƝ��hv�*T��f5-Äڹ��C��2<� ��^gzD=��i�L6�w�o��$�g���d�3{7C#E�_gS�F�>�XB�")'����9���ԡ�~{6O�X��
�}��z�FH�I@V�	JiD�JD+�����$3�;b�V��#뷸����:�D�Z���ף/I�fňذ�9����6���ip,G��Oy� ����%�S�4��:��l�񶣌#�6t �zR��f��Uͬj���Cdzv��	�C�ʯ�� �}�#��¬�OŴmp	=m��^����  HA�2�s��Cƭ�-M��gzDX��@�}]�#&����`��f��|ץD)6@��A��)ɿ��ԙI�ܩ��~q���������,ɢ���%�H��>;V0�bw]�j���ӣ�p��W�0�ϋ%KT�I�R�}%o�������f�h0��j���(�wb\7Fk�S1�ܧ�P]B������5���
.�N�!/H��B�,����&j��A�1�,��!�_T�^sr>K��^.gTT)�1Y�XB���2/�֠�<T��^9"������������o�m���U�|�a<�h��{?xU[{�_�5E����&��D͆�<�ic������&�G�����*�:� ���Y��$w#�������-��B�|�9i�bA�~����㥈�٦=l�N�I�X�U8!'FF��$��� OtWr�<����0�3�D$���Pri�a�I���K�� �����<��st�!/sDs�� W�E�;����Mn��f�J��=ꪦ��Z� �d��H�N�Q����"�\��H�1���nZ�S����(��H8*�V-[.��g݉_��f��6�R�徟����Z��n�4�j���tfF���3�s��4g������H�֚��z�� ��M���6^��!���A3]��Ə� ʲ�tB��6�@/h���{�P�0�:��e1u���\��=�I�I��g�#N�d��l"SĚ�E�i��nյ:�μ��4��7��)��˙#����uE �l�6�a��J̝鞏�.��=Û>��]� 5�x���x�/�Iw��E�������C�~\�71H�
��� ���7T$���yr_��9��}n�YЩ�YҠ�F���#���>s�(���0�F7��z�ɹV���`6��s����=�SH�#�ĉza1�V~�R/��(�����W�}�Y�sU�F?����� E�ͱj���Cn�nǸw�?�6f6j8�L�����1�k��LGfv�uX�^$�������4dur�Y�k�;t0���F���0j= ��! K�z��D*��-�[ٰ��@�_��^�D_Ց-����\?j���}x�e�^yK��>ngel��=����H҆ަym�ELl�{�\��EjF􅭕*���k�D�lH�6o�}hbw��`���|2jٴbx�#���V7�gMoDt+��/�aln٩�!)�ʾ(�dTT]��Q-F��U.��f��d�F�'��"^�������+�Is��)֥��uF"3���<��	�i/c��:�!wk1����]���iM+ S�^���n"%���b�����E(���"���[��䣏b�H��o Ɛ����qf�_%]h?�vqnD��+]J)DZ�����v L���^W��׍<&yI0�(��L&�U;�)UΟq���]7��][)��!�X?����4�]@$�?5k �ԎM�{�f��g-�,\���P��+�_���9���we1r$5� ;f����D�Ѓ��R�LZ�7����Ŋ����"��&k~ 4��Zz�X�z�vӍmwk���#����*��}'�Ow�C
RF:Β����	���H~��6����Y 舩������ ꙝs��>���+&�,��x�0�d�+��/KpA����o�L*�>�������6q���XҶ*0
,N;.ɮ�I��O����^���א?	�6M���{�=e�@���:�Y��������2̅����9�V�_l'4��[�X����Wr����s�к��nS=~۪F൝S���2�XA[!H���E�.�C�jrU�X.`Hz-��$kR����t��c=8��� z�[�����k4���?�`�_��s_���Fnr�0��)s�m�l�����:�$}��}4*�� Mə��F��1�}��n�k�J�����%=���,�0����驌�ɴŗE�a�ˉn����	�cCM{N�e[�`�93�6�3���Y�g�Jp��n3v}Jo펢��u!�}�X�ڛז��>g�tÌQ����<�P��x<fr��3�;�Œ���o��������y?��Y�� )��:�y)���(#$�I:�	�9�C�[.����1�H���@5LH��G ���2���#�P��3d�s�B��;}����{{�V�nos�m��PM�v����ŲEi�l���N�P�k-'���"�
]�w�M�4ݰ_�G
����"�����d�98qg�T����w���"�{�کg�?�kw{П�7�AZ[�y��
�����/U-�u���3gr����������6�`�pU�앥æ�k~D�ս��ua�M��l:�y/M{F���G����в��%�C���R|4C��Ԓn�1va<V>d���(�x_HeY���O�C�$k�g�YZ���_��������pwn���݈���?�FFW����讉!%��T
�mv�J��c��l�0G��5˥�޶$����:@-�<N@M���`�-�}����2N������8�A�EXlD�a����Km��"kQ�U���_U��@�}��	�f�ف/U�.������f ��ʯA��8�e܇i��x��q�9�lԢ�*Z~�R�L�Gg��x��=��%��b�u��^惖/�L4Z���N��p��0;�)^Ьۿ�ݰ��L�nd�Q�K����9_>&�/]�����BV��C�GylչSP/7B�ڪ�ț��pn�dl��Ñ�'2H�5��Non�ڂxP��?,|=�ᡶ8\�W�����5
!1!x^^ՠ��A(1�z���kp܈�*�!ᅓ�	(�;��WMu��g\����'k�5�����LA���ׄ-y�?o�Ώ{<o��-u}���׍���	�����Yb����4P�hq����ʝԋ�6�����A<�ĵ�c�t�]����6T+90J��θ$���[�5]Kp���n���i���8h�X��G�X���
#k#�A��P��2>>W����_��s�$z�� �u�_7�Y
� ?��pg��E���� �����)�̘nam�hwM4/=N�o�,�G�Q��	(�s��59�%7.R@�������l��ç� ]bƮ�Sn1<�w;+ޛ�7����Hh���P~4A����m��ˍ@cj6ĭ������h}�-��Q�b�>��g�{\� 1 �v\�Q��6W����3�:�5�{�}������/ʲ�j��CSf6 
!���T2�Dp�˫2��"��FnK�}�4�ꣴw�B�f�x���E�%[l����<B9�t%?�yd"W��"'��@�}�!���w�5�!C��>�~#�������W��?���� �{艢.���./+,	#�IlD����쮄vx�J+���;Ql��w],��\�b���sG����q؂�X^l�J7�w��j�����Mi&�0���"�;��&���P�L��U���I�&-@̦�'�PTג�Hպ�]���:�}�[=~��@ۻ���5y�e`�b���-�D]��d(����LL�ͻ��}4�ⅈcV&����3#C)�+���F���W6�~�K�����B���z��ߴ-ZE�YC��|<	�ص�$��������� �=2_z;���*���:Ϣ��2�4\q1��$\��>�����
hWxF�zO��[HU�"��R����jT)�I@��&ɳ ����!����B!e�2~����	��`��k1��o.F��=��an-y֠ت�M�K��v78����
```

---

## File: `public/Testimonials/david-coleman.avif`

**Size:** 9965 bytes

```
   ftypavif    mif1avifmiaf  pmeta       !hdlr        pict                pitm        4iloc    D@      �        �     "I       �   8iinf        infe      av01    infe      av01    �iprp   �ipco   av1C�!    ispe      �  D   pixi       av1C�    pixi       8auxC    urn:mpeg:mpegB:cicp:systems:auxiliary:alpha    ipma        � ��   iref       auxl     %amdat 

8f'�h4�2�A� �@�^�P������/��L5�¢�e��   �?�X|��B9s�%m��4�˥����
Iz&��=��kۨ�Ef��۲K��Ʀ+��5�@�Ҏ�m�D���� C��\ ;�8�A�j@�K��v��La�+�J�6z�d�Ȋ18Џٕ�@(vRE����!�箒�5���+�+�x�_�o�8k��S�����DP(��:X�mL0��P��VV�~`H��*�����P��蒹�� �H��������#X�c|YH!��	=���<��h�Xl��Їú��e䏂��Е>� ��`�4�}Yn��U!(\�GTP�x�.�y�	G�N
w�X�~��<��\` �o�Xd~g�~�M�ʫe����]_��2)�/L��=NQ�{�H��^�w�Uv�A Tc�v*T&j�q-?�?�t�$Eܟ��/s��i*�z�o po�u��qB8p�ɞI�O��3�j��R�5�C��Y@��ː�Ǭ�v��6��w�aL�^��h��(;(���hB�Qh�݈���ۃ��3ݬ~�`��c�����97�Ys@1����Y��W��?����O>9����C�֜�lIi����x�Y Ϋ��m��tB�7]q?JU�|nuՠѥk̃�El��n��m��A�4��2�=ar������I�M#�jEe����q&���epo�\Zu����U&uX�8��O>@$���>&m�R�<��Y1�0�������`fru��m�������%[p��r\�T�y��p��͙��(%	�\3CߖopH�#]Pi,]�vQu�g����!�nsd�tA,�_�Dy���{�.�}��"�<�Դ�<*��d���@<ir�U/IlJN	��"m���1`��K6�o��`����o��)��j�]	Ɣ��P<P�5��/G?���o��9M`UP,�-q�4&��&~D��Βϭ��޻T⋟�n�5�	K!�X�KG/�K퓮
]����h	mM6����M��q.�L�[�Y'F@͓��n�vA�*�ݘ����2/�jd���kq�mz]濒���x!�PΙ�Ex��_��is����8���A �(;;*8��d�S棹�8s�h����4��p�����ڠAb�_x
a�æ���
Ċ��}�ׁu�h��k7���UW�`�s{�%�c�ì�Qtz��@�Ǜ�7�	8�|�-����8���)woM��d�'Tҏ���rb�h�Vo�[��,�ň8�ka�����'K��A��쮏�����ZL[�g�JgfxI�#{ �@�>�U2��	�M�W��=�MT�ь��zGe1��/�n��X>����e�Hť����́�&e�MP�!P�"��l�N�'�{�*g�KL�RF�u�*�V��NΪb)�ݗ�4���=�fkx�9�*k����J�������6�!��GE�\R^�fr��.��8�I�'n�5yc��2�D �D��T(�=#�2p�f��X=�:|r��l�(x(���I>�^)���$t]"��,�8�����:?�M��,�"I����>�4n��3T��_����uC<��
	c��r?%���v�I� XRP�)�Ȁ�'E� ��m���i���C~�ˌ���l}S��"���+a=W�jÈʅ��'o��
륝ی����[9�Ab�l�h.����P!$��~~��ʷ�toh�a�F�uv��%̌��.�.ܳk!|qE[	���TxU��-���d�jWGOՉ�C��ط��_��}%�?�ձ�`h�Lv.*�Y'�l��4�ͱ��F$�����+[y��"����Y(	�"&�V5�V���믬w�C��Xi�-et�MG��x��~T������R��<Q
V��s���k��:�V�8^���+��S�Q#!z��������tΘ�e�~�_��6��	��^�J)V�d���Ϫ�۹�I����ߝ�8�@'��
E��/ӿo�#�n:�_" �qӭ:��~��Y%˯��06��Mu��?����Y�d�>=�6Av��,ru��hs�� ����n�AtUcW>0�KD��m�>�	K09u^%�R� �Wι> ʲ3��Ɛu<�F�]�Gbetel����Q�ء��~���V7��/�o_�O�]��6O��Ħf�ȧCW�3�����W�11�q�Rҍ��Y����
�b%�y�s�<g�E��v !�^�QX:{sd�ɞ��SnrQ=�����+�3O�2;'�U��3��g?Pk�:�LL_�W�Y��[cZ~�hmF��hR��Ƙ�*KO@� 4,��q�p[=�W�&�_*�п�,නgS�6d��$���e-ԉE�X	�y�n�;aܪ���닸`�-G��V�a����跿�Јʙ��� �\@�y��z[�aF)\\|������x���\!bU�w�#�L�<�GZ���>��߬��vt����x4�̕����Hk��$	.�~��L���?�c.��y��=`��q]f�"�Ύ��DN&���;�V ��"B��2��p�e?*Ǖ�ij�K���=���5	g[��أ��{<����|C��i��1�@�i+3��~�,
�ѫ���<W7��Z�~U��U�o��؛Ր���b��>#�}Ǒ#Q��N�4����l*�G���KM���0j���Z6�s�-|]z�HN3� �#�C���4��U|�Fw�'�����1WXV�kɂ���dF����GPN�WhB���A�j�UU��� S�iQ�.m�g
��N�u5�>�w匿W�����������e��4�nB��\�����G/� �� 4ݡ&̙�SXm�=,|\>��^�N��c`�d����Tx8RR�����%�y��}Λ_UӴݱO��N���ɪ�~�Ϡ�98%�ڡu;��>�j÷�cft+�L���X�	��c��
:�n�>Eh�����ח������f��1p������]FH%=�#U!�����a��h�W/-!:}�⾉g*�Ft���W�'=l��T.����n��y`��ý�����Էnt;˜3��A�W%m:
	0,���,_�0�.yy��cd#����	� ��HtVg���6�Kz;��W�l��Q�p�H��(9�bЌ̄&���wNl�-N�)j�&/'��I�c�X*xKW'JhP俁��:UJo_�@/O��΅]6+} ݵ
����!'�]��Q�:�~m1X��(����ZmE����q!6N��M\�������������YnL*�1�����m\De��O.���.�h�N-���V���D�_�{�W��1|E=h.���{�A�l�S�Y�¯��w�����8F��g�A�<�~���9���`���"�n��*��uCqA�|ˮ���h� �(�]26jD����eHNoйx����OM�)����X+�����ej�Qy.+ur?�^����Z��c�!O�� פ~��GW�*����k�(v�Ψ9É� 0����D�T��dK|���4TI��ƴ���`r曠����"��B��%�?��$ͼF��$͛~��d��S֕�X,=����N=�+�C:IQ�����u���\N_����W���u5��y?T�	~�_��+�l(��U^���?�J����3�7�r�^v��ŰՆk��9���P���򲫹<�?�/~��I���Oz��ϐrW������[!�Wu���H���n冃g.��
ٕn4��[e˲ʰF�+���:�d6���[g����y��K�R^�KQ�3�x����|�U�?5�).@[b�T���Hغ�5�t�00`I+�>���}:����gwV��/Q����_�C���� VȽޯ�<[�Bǭ�ꗱW�<��5gm�>>�����/���.zZ�#�@���,�)8����r��Am�9(�y�U.�y�(��Q�[#�P|����o���+=|D�p
�&
}�"�ؑ��\�?u�-� ���i4�9GȨ�����Vc�WƑ��+A����R}����}D���.�Ёh����M2�vC�cL�g8��S�x��׳�O�N�ݳ(���� V=|�O����r� �Q��ߴ6� �˚��S&>IS<�����e&o�UQ�c�<�F_u��O� gV%���5C�'�/!rB�D�9��/��]�ɗ8��A��g����kYPU��;���P(�<�_O�6�f��Ĭ�;k�fݹ��K���3���:?v̎P^��pH�c��S�!�a����ŷ7x��/��PW�V����g�U+׼?!���{�x�_'4�k�\a8m8��ޜ�� ����%��ҍ�qL��QY��t�^&�yE`�0��F� �,��d[p�?�MI��gζ?Ӂ-�|�Vu������'u^�"�~����f���-%���j�v$�*ӽ�&����ՠ�J�ˮK���w༕Lº��+�*��.7}��#δ(fyR�D��~�J��]�aUU`Y{�IwT
�Sݰ�{�Y�	���rd��*����2�<�7No+i��%�(yq��i��n�$h+��/���~�@1�ݪ�<�a��<������tC�MYFf:�^�)Ů��X�U�v2�3�b�e �5Q٘^�$ :��d��ӿ&��fS�6~�F����{k�Po�+�ꎺB-h�irr�� ��,xo"���\��K��v����fCu�õ�IN�5����BX���X���Lh�:�#��N� {�v��dmb��x����Oyf���5�sM�H�K2�<�����W�*S
����>ٖ]��(;�껉�ߪ���������L�C��d�ݪ��&B���wn� �P�;��-n���s��K�(��l���p8b�)��ڼ�}��:O�0%Cz�.�c�DE���S�P�=�0�H���6'�$���^�s�I��03{.���ZZ �e[�8�U�i���Ę�,br�l$��君cs�_feQGҖ#xLa\�~2-ڢֺ|����d���:��N��F����M�����a����'��YJ7徘�$O�����Y�Z�O�d 0wR�"�>���Bc�&ah��_���;~�̪�����5���/����7�����r��`[F�{A��BDIa���R�ű|@T�*�\�ه�B��Fq�ӹu�R�0ͣ��0�ZFN";a�ݷr�C�2M����0�㤏�b&���S`��N�����3��2�¯��vP���h�^:�P�x])T���o�u??v�W9)���X9!Ƴ �q�%a
h*�pk��h�����e�A�4�l��&�#����~D����my~�\��GF�x�\����Gu��ג��x5Wݮq�,2[13�;��F]i�Q��`4t�|����y�z�o�¬0D�-��t�N�P\�~+n�)$:�À��њ*�wi�ޓ����6
I���`c�c�V�i�4�ׄ�5�|PxI��{��R��2x��������{�n4�|���u�3`�jba���VaXͅaT "�y�v	ӃP�/�ށ>-�"S'J�a��E�G���m��(�hŻ�h��up�y
��� � $|"ғ>�l	%$���s>��-E@b����g���筽I��Î�B�Z7b}����]�g��Hݫ�b��b��<�>J��Ǳ}�vh3K5��9aK7��RF W8����g4��&��ypm0�fB{� �^�/"g0�ȷsj�YF��-�_E��%<�Zd�f}��t��o��"^�� 4��s�M@u�����+zT�gȷ��Ԯ��f@!M�Ԉr�u�)���j�g���E!:0���ܼ�G���Lt�!��`�5�u�O�7�4�xφ7;���� ��q1m��3��x²�#���p»�-��TĐ'%<��5W���Jp�#���ӆX��� ����w\�h%]���j��A�ي!����0f7@��t<ËK6��b@T�7�z��2��y%ٴX��ƭv�t��̯�Ka�H��ɵ�j^A����n ��Xq�7ܕ��R®0KC>+izef�V�pB����o��
İ�ڳ�$�����dW��Jڮ�=|V�6��&5��ɭ��=�5���#j�"ЫO8`�۠��K䩙|uU1�)���<���&Dbji���yi1���Z�A��lAZ!-� �| W��>�A);�ǅ�Ӎ�f�T\��W�g_�g&~ϗTTTc�._��N�A�MͰ���.F�h�mAuL�^s���/�3�3��2��]��.�ل$M��&�o$��7�����	ٸi� �Pb�j\X����c�%��Gbj�\�����
��ȕ��i�>s���֦5G�P����;�p��`#;'�C�P���.�R��^��Y�7Q��R����c�zY^�mc㠃�)q�p^T���Ƚ;Pd�$�#T>�F��a41����N��G�N�8Br�#����U���`����?U�����DqX'Al���7�2��,�{y�I+ D�.9V��.פ2��Pʛ� D��Pz�3#!)5���J�N%.�YH�W�G�w9(Y��BY���v��.��Z2�O����@�u���3S񏎲�=փ�J�$�Ǎ�X=籬��G:w���ZO/%E1تE#�Q�u���σF,�vˊq\
���vG<B#��9/�6�N}�G`�蹛a3�ki��ft(�cg9��(�6��E|��1{Θ4ݱNM�%-���U��o@fr�����؁iQ�L��$��H.r9�wA����R�q���C`'Zf�{�T�r������} ��+)2��
�ӈ�N=-[��h�|��1���]�A����z�bq��6�{�1�`��v�<;��l��]r[����l������|3��C�N��!~�l0��)"����+Wp�����e�ܖIT /T~�T?�/��	��㲺R��q�Ϝ�x�)�{OW�(R��tH�u���v[���kJ�1� Dvz7�H�}cU�L��V�( ��D���)��e�k�;Zl
�0v�a�De�������8��TwaU��*���Й�а�ǅ�ߛ	 ǫ�r$Qޯ�`�¼d�>aГQ�u
ܗ?����$�Ջ\H*q���/�"ї��a��^�~]<�ע�c�X,x� �U�������Sto̃Z#�5�B�(m�&i��Er
+'���h�8�F+S�S�������������}�Σ
;L�>���C��Z�ʌZ|�>�pK��p��"�a��;H��9Cn'ڒ�'�Z\]!j;|����GE!ωP�>�!�HV��&j�~FQ�" ��s������˺�����Ї1�ny���˦L�*�P��cf�]Q3/�$S��f�ٚ?�4�@h&!Q/,W�[��禽�?�^\s����M�9Ll�~.�ݬ1�MR���Y&߁)�PƐ�)� ����=��3�,�!�����)i>�ot����y��[JH����Q�ş�~�z6=�=W��-A�6���,�u��ң��~��
#��"�G�X*��g�ߚh���wh� ���+	�݋�T���(N,RP-�މ�r���{Gc�Bl���|���%Vq��b�d9���՚���6b�0�/�i�Ƅ����l���<�����_��2|KSY�����?&�H^��S9����5]F���~�%VB��m�j@dm���3y��C��Elc?=rq5�z��E	��������uxD�	|E�a��g�'�w�i�Io0���T�9i�[Z+���ʻ&`߽_��Z��ԓ5���L�Y$a&�u��Y��
��u\�zc�[�q�S�9��~�~.�O�u�}L&4����8\�f�&��ͬ;��X�M=����/�wq�wM�Ԯ&j{��6�۬�-d�n�H�q������x�5+xq(��a~�[�a�tM@�l����~���ƔJ��9�,�Lovͨ�� 1b8r�N`z�!$�w)3o�å+�?B������V0?ͨ�uA��	F{�a����3r\��<nVzt?����X��� onMU����k��*�cWY��([YdzX�����0G�F����8
���X c��E�p�&�-p��4w���W����(���U���y�	C���:
Y���h�z�f2MmVw:����D���$k�gb�{��R��.���ǐ@Ś:��>4���0z�N����B	�6AՆ|�X�񌉑��I��SŴ���&��
�� 
f'�
�2�	� P��7(�[��ߢ[
��.S�V[���D��	J�l��1I�F$� �K���>� ��Iڃ�b��r�\ٍ��kt[7���ڎy��JzF�$E�I�0!�����F����g�{�M���N�9
 /�^�6
��"��Sϟ!�P�@���H�Aa�_�!�����2sw.���k8�"8ay�}磣3�~ڦ�Y��/��f((�AP�>K[��=��޾({L}�-��K%@v�&�q��lK��ͷL��@/a��'ӝ��)6K���%:�iH�_5�l� oͥ�G���3k�;�m_Bي;��p�4'{��,W��	_K���p1Z�6��@�rՏ�͒v�Z��%;�L��C����43֐??(6\��3�32�=�V0�����Ї�����"1��b�Y�d�`p"�qF��uKWp����Վ��f��==�!��<�K�~�n.6� Y��yi,�r=q�#�9@���L�?���϶0�7�k��dKԠ4���m�eu������IKc��7�NB�T+�[dx�Y��&���:r��l��Iq.Fv5�a(}@����6���VP�+��b��\��:I�$Z^�D�%���u՟��&�ۖ�S&�,�b2\$c�jjg�ʌ��D^m���w���M�|�M������ϝ/9�]���
=#ԝ`�)w�J�8�o��l�����Qǥ.���H�/�\�u]1���,�po�q�[(���X5����H��,�$� ]X�!�A�;Ǹ�s�	�R�3��i�.wQ+�N�����@Pqg^�㜎��l��"��?s-�"b&��a�g��
��`!o$��x��~�%3	T�y�l0��\<�F"Kv��BޫTź7I��\ؗ[�k��Y4)�9N#:/3��-^�i��0�ȑ�ea���uc��=}8lD �ڮ�ʾ
J���. ��\���>���w�A {��,S  ͖�tW_2yO�ǼDY�IH�s,�XI=��=�k7'L�IəT�vIἼ8� t����q�m��~�:l���@�O�������N����`x�lrKn��+��D��	2��l����#Ђ5�+��=�h��."n�'������?��-�S�����R�v�S�|P`������D��%��pK���b�'���s�Vzm�
```

---

## File: `public/Testimonials/luke-kidgell.avif`

**Size:** 12390 bytes

```
   ftypavif    mif1avifmiaf  pmeta       !hdlr        pict                pitm        4iloc    D@      �       *.     +�       �   8iinf        infe      av01    infe      av01    �iprp   �ipco   av1C�!    ispe      �  D   pixi       av1C�    pixi       8auxC    urn:mpeg:mpegB:cicp:systems:auxiliary:alpha    ipma        � ��   iref       auxl     .�mdat 

8f'�h4�2�T� �@�^�P�������Y�,��6�\���h�   ��_�H�\B�X*�y��xU����[�E�Ψ[ְ@����e�/��Z �T��e�˼�;4�w�z.�T�+��16̖��D��� �e=<9u|�ў�Vc�묜Ȼ�A_�L�5,Q�@�A�>VY���206�%9}!4��P��������7]�V��:rփ��?d�eN2)՞����{e�\m��q�q�G��v��N����q_'���a���+���<��_���^������3�r���H}�?*��W̮�6[��o�]��<C����S2z�0����B���C�$����������#p� !XeruRUZ��Di\�x�Z'�Me�_R�*���4q#?�K�x���N�iC&�;ٖ�����B�6_��N��XS�U�� �N�4��j��c%��i��v�B�`?Ar�)��{`��i������Iu���t�
�L����Ζ��q� ���{��d�gxe�&���Ul*���P&��K$��`e@[�9�$���ZLќ<8L`e��`��tK�y��ͼ^��wr#q�U?Ek�|�T���G��$2�H�~+�����=�fuϗܡ��|2�EoJ��}2$'��Y�&�+4���b�րk��ZB"G�gMR���r�ick8	`}�WPc����0����F:��Y�����2���alf���/F��H���ghfG*�V2%�u��e�c�h��P�"��W�cq?�b��Y���:�c�ّ�R�m�bO��Ef{��I��>A�G�d		.ߨ,_��u7�ﰾp"��ۡ�}��U���smB���=;Ptܑ?��ă4����, A-���M'$`{[�{����J5�ǫ�T��-qQ�P�};z�|��n����O���t�x�g�p��`M���O�sOړ��Eǰ^̫Kub�/�����t)p�le"5�,?��� ֮"�zhͤ��l���(mŠV��>�qRB�4�RRLsu�l�˒@�j�9!��k���L��Tov���c9������N����pb�e
�!7U�Pf�Fn��8�r+�����m`ev-�m"I8�>�wn<U�\���4þ!R�������Lg���r�m�*r���cu�����&����hN(Q�Q)=�'X>�I�9�2Sa��meHK�{&��w:�d�(�^_�gI^?w�%E�>1��^�a��}��9��B�F˘{t%�*2��������e09r6�W�E���6���%XL5 ���d�'������VT羌-��D�#ep��@f�*��҈��^i����I7!�D%�cw��wq&��0`�P�a�ni?�Ye]��O�N��+�J�u����,�Z�B[^UϾ�u�6�W<�+����1
8��m��	��2fi�"�Le�����Tc
=zV�X6����~��	�yHE�_	��Ozg���kT�RN�i.��Yp��gTFG����\��B�?G��(��S��N�a.(t%�����ι1��l���?M�?��a���b#Xp�=���)��6|���v/�WV�ы���:���#��������lU.��̽w�U @8�A̦��4�҉ʰ��h�D�O'�pmst�[��e�OϨ��NT��rƻ��#p�)��G#�v*�b&K�������
!��	�.�E;�ʸ�`��g$�Ā��v 
��>MaPe�C)��f��"�0� ��<e%jz61�$����)�S���R`%ݤo'�	�A��q忻�bgX&o^lƳ<ܶ�p����C��k���gP �MV5�%����MŘ>̝.YFg��up���υ}D��M�e��^�'�/a;���J7�{S�b!=���^A]���B�ÿ�N��T(9&��lR%)����-&��'zK@���q��RH?����T�%��G{w��ʀ�t���S��'�L�~���٘	Ѕux��"���+B�-%����uQH~�]��h?�7S�OU2]��"M7ۛ��.�v�����@����h|lz�aW�}#�}�f�#�z���ߌ��]����_�/8�bgw`;�0HO������h>m}-V&VJH��>C->tҙ�y��9{s�2P��i��x/��q�Ir� �D�w�#�'������5�|={l��Q&_��Ǻ+�DI�d�83*��u�c�g☶hɇ�NL[EE�ަ)�7e_�����3
����ur��I�IA�e�.h��1��B�x0"?	�F���@G �ڣKv5ٱB��ېk��
*��B���̨|T��=�UC�#q�x��K�J��c~�j�+�u�Q���>ȋ���UD��a]� ����ib����*q9@Qނ�sJ�\��9�I���ZlF/���u��fF� ����L��w�:N�=U��-]<�D��k�lSyВ����O�<1mCZ%ݐGiĹ,,f,mW�f^�*$d��nc:�b᫪�	j��`!��������k��V�I�6�b^A� Y
����m,b#�����J�p�ʡ�����JE�~p�����+9��q
w2�އ�-�����vL�$u�zj���6Y��݌B�p����k�,R,˻T�+�8���ԫ)������k�m���AP�e$\�=_@�$	��"���q���> 6�J?F����)fjp^
� �&��\V�f0u�7<�v���z�&+9VW+5�c�l�n��7��/DDH�&W�w.�V�Hx����l5/�!�F�N���5x�o5���϶��M���OJ^X\t��M�3~�Q� �JWe�=�R��!�4�Ȏ&)�g?���Zϊ���X4�)\��g���L]G� <7  ��c�q�㜁?s�S`{�	E	��[��1o��@xw�vQD�cw}eɛ�Ԏte�5�{�(����'I�<I�)Du�Ƞ�@M'�_��:C1Ħ�r��l�@�3I$��\W�qܸ>L8���H0w|��8������x%��J����I.A'��ؕt#n��#p'�,jg�B%�}���*����b�t�k�:�F�܆=�9�v�V���S����Ǫ�\�&98ꗁ7 �h�5�
} vU�߿���e����Ry�>�Z��Z����H��#��)�7�x�l�-�E�<�?��Oގ�X*O���;q9N([U��gn#9rʕ��N�l���g�������X�N�HR�h�h�W`�C>S�N��ġS:䞂��rX<��bhS?tv?�c�N�����*�++"�a���s�O|��3��(œ�JE�1n������4*�ʕ|�>����gy���'>�]�o���m����w^���v�/�	5���ޚb��)�� �X�����q"���K���O;@7��b��U�t�|=���y勫�"o��s�9�}�����gU�һE��/��9~��A@�M�>X-H���7G����ߣ��l�I���>���	?�-N�ؕ��MC<ؿg�'��A��r6=�~m�����5�O�{�N��P�uj��G�l̩Hт�������mg]��(�=iE�mq�P�no��������*\P�fW�ǗQ�#�?�j�`\�I�	��7-�n������5�`pn�Y�FEy�6���1%�����kuIˊ�M�|E����Y�����\[]����, �L��{0��Es�sU��Xr@���Q���>R�0��sϸFu�j�҃��9ȵr�(�"^[j��
&��>���=��T#���]@�����3S��XlM�]'�F���� �NgN*���+��^]M�a��=�}�zP%�jJ�s��'�Eψ�u���u��G��q�e�Y���q �~Sx��]�����6��p�h�y�nO ��y��h5`7RE�{c�(��2^�H��~�w�?�d�|9��4�"������YUZq�7`����17{�;���m7�cUڔ;'�39_��In�C;�J�����y@k��g >[����CP���,A����&X��i�����ss�w3�+������Ը�j�a�}�*�H�`�q�#��rj�P�:UI�����0����Tq	r��!F��b��x��Ff,�Z3P��z�l����J��zc騲���� �Z���h�T�8m"��5s�6�~�]�D'꭪�2���k�{���3��&l�GN��� ^���Z�b��2��f�3]g�@����i`|�P��d0_%ⱦ&R�SS��N�0�|(�R-��y��M6��@�a�'�&�9E�f���Ax�6��1��,q�>?�^���J�'0�������p�P$��9�U��:����>G&�reg�Q�Z��\�ʋ���>�t��{h�}��-D+����K�Đ����/��5����n��zfV ���#`���f�٠�a�WV�'����ey��'��}E��  ��S
��5J��^��������N�'9�dve�4a�������ltim�ˑ�-��a�n�H"�5s
b�$�� 
Hܞ��MAf���h��j�k��W��kR���{$R�*�.�cƭ�n�@���a�q�G�gg[�-0��T�gڮ��ȃ��.�:1�����      t�����rUP�ykI��'�.�1"��R��B�4�g�ڕ�/!�LY
h�R�����J��A��2]���׳��B�W�L���K0��L��1L��ON�:��V\tx���+~8*�c�+��3K����x���G��$!�O�������=C_]IgQw�ٛ9���$iY�3�\��v��QK�"���B�q���٬��SG�Ĕ�Ҍ��pb�������_W�%�i-NM*f9�c�Q2�,�"D�K(r��tP�(�z�
�������5n�A����^#��L'&:� �;S��I�}{��eJ81R���(Ql���6Ļ�QVJ,����)��qw�N���S���T�{�2��������� �p�ݹ��y\����1rsm[�[d��!�~Dة����`��K��A��O���J�릚X%�M��L�3���s�ρx�Nt��-���g���Y����0bʤm��~�hry��pZFqHA��h!�F$���y3�5	&[k,�`��>�)9���V֦>�X8VS�@��6�����
bYzR���7���>:82�b���ר�g��CV���(�a`��Gw��&����MQ>V��÷pd��B�$��}�C�Cd\ѝ���C-���P�a�lmi���R�a�;yA�R���By��"/�$̷�k0࣠A�����+YF˟h/Ly��^�IDXpRr5�殺/��Q�#d�;!�9����T�S���v�B��W���&�O@Y�5�#ӑ�=j�LR��8io�U,�B�Ph�&��K7���NZ��)I��!��.�~(
I*�'!�[�@���lT�A��1$����ьֺ�,N���#���(*�E&�Y62���@��"�f�V��&R��`���5���^N]��]yw�54`���_mz#|��ė�C4��:G�yv�̼�����m�>�D����e�}�ujQ�&Þ�.�J�
���Q����%�,�;�ih�-�T*�S�����@���O��"��3}s��{ޑ�RMұ9�"�1yZg�'n|�e�i�{�&��q*m�U$�R�b�z٘���9ks�X@5�TaG����p�;b�E�C	>9Mܪ�	B���S������9�î�Ʌ���7�Ŭ��ʪ��̜��@3��XL;�����`�y��7�?c�Yp%9���0�c���ފm�5lz�VC��_�J��ַPp���&��"�ܰ
#�Ӄ���0+�$⛝� ��3�+h��ta��'嶦af�YlJ��hc�E�G�U�ж幬��k/��ŏ� ��^S�@���Dg�yzAh'��\6����~����
������(�~��=U3�=(T"w�����qx�@l?S��s���\��wkqW>E������"6!C�|h�Yx��	�x�K��y�H%��׏�����Yr�bu�5J�h� �������o֔��6��bI^�_q��`��E���)�[�-#�9}Z4��zf��~���γ?�����ZV�Һ��W;�}�@��#��$�x���K��¨��c]
�~`$����|ʒ���^�p,���v�K��>�fy�OW��L�N�jpG �$V)��p#r�Ҿ�d5LȪf`	K�rE�^WrF/,HJ�]�RLŤ�w}P�P�C�&��y�z��թ���ڛ$��4m�.��� O�0G�֎���2k�-��լ	�Rw�%&�6�B���܏U7?�1U!�GE�@A�?�?���bw��,��P��&�9��o��N����,�u�yR��'� �"��,�������<�cڭ�^�l��bf�5&Zn6z��J+�y�Oj{*z:��������b(�D����vk?�k8W�`���X%�Ւ�jN$p�D�}#�(���lI�
&�M���,�W�����Cr[�U\���̦d������bP֧5����������h	8�W"���
 D���Y0�͸��9��wf�z���b	���c�
�$�3N��ߨFd��ë��cl������T	T��D3l�&���Kb�A��<���^�D�b��
�ډ1��?����N�ӑX]�eR)��!��案��]_���un8���[�F%����=.��,>S���+(�HAL�A9��K��s��t@�Y�1W�KԢ2�쇕�+ຆФb��Y=j��L{,�Pxp��ns��6O��7�)���{�g,G�-Lֆ
A*�kl���-�*w�`BYW��UH?z�B�P�lx�����dll�e@"�<r#���> ��ВLhB5�+'z��7w�e����ͻ�%�r�$��0��8��4�[!���F�*�=���K�N�t�1�ލL@o5��&��-���W#�˥��	�͚�ң�uM霞#i�㭖Ʉ�n�*x������a�6��3���~�#�xkv�ɴ�Cq
��j�f:9��e|���7�����T��R��f��'���m&��%������>&��Wˇ��s�� {�����Q��*a[�1�Լkt�P��C�������Nl�.��E���ަ�Qnё��w�s{�="�;����*�A%r��ڲ��]7��n�P��.�A�&��,\�o��P��%���퇠j��[�m���c�S���	M��Y,���ö��Ώ�~��x y���FZ��<Y����퍿0|%���@�'��O}H�&C�"{(���e����)S~�׌a��Y�$%7	�z	f�||=�6�!�V~)����iD�����)�����/�]L�������ʃ�Q��vy��C(n��9f�H�ۀޞ���h��p2�@�tfT�U��n	��W��]zղ�$Q��~��c��Z�� ����η�GkV�J�{yNIS��%��g	�c��T�;��}]l��8�	��V5�d����O�������@Z��ؽƯ�q6�5?MT���7�z��H�%�@��%1D<�'9�"�֥%��ͬ@Pv�w���$`����:[�.4�/��%�q�6��)-��S�����Wۺ�>�o����ӊB\d /Mzh�V��󟴴�?\�Wn^��A�D*e�-����>��������\9�$T���$U��>F�dޭ�u=/	��)��{ݖ0�m)3*ؓ�ƍ%R����"P����oIsok�E�����],�M ��~�g<`�db�O�:h�p���ιmu��b���6������'7Ů8�Kq���B��BN���;����,\�W�t��)m���)�[�U[�^�F(��$D�8Hc4s���!�8E},
ޚ�4k��5Uͧ��?�I�u�(bz�)�4���m��/���,eZK�L�r�]$��!�����n��L �m2x�=,�݊%m�?�������{��x��,��JI���'��g�T5��~'�H�ǚ�^�j��KH~�gu�Ymg�E��z�����zS���䏣����3�c��+�L���'߸��h��!���6¹r6����s�=�}}�L�9��cD-�3"���#�#�0�K�P�j%����m�:RQ�ߑ�+oc4q�������У���4�t���'�?2@�<����Y��]D��KLK_�s����g}��JW��FH���_Ό�������d�}�H��yC���*�K�!�=�W�̙�}+�R��#���u�vs,  ։Wh>x��C^�=A�=�p��5}���E�r�Y�
���O B��R:�"����Fܴ�V��v��H��r}I���`FsZ5�3���3\Ǔ
a�-�?�6�]�@*-K4buǼp1��uK�ȧ+Y��&�:Q;��ە�[��^�%�0;4�"��~�cAAS��k��=�Cgg#l8��"B���cĬꀥ����\?���Z�3c�}��еJHPN�ӛ�X�~A��Bh(֜2��ڡj�:���{��k�>��^�2o1`����6��sW{�}4�kL��P+��?c��-2S8�߈e�W��>ܢ,����]�(�4�Q�N�c�&�g�ۣ%���E=DY�5$�{�
]����ܛV�A絅&<�t���k�2,�q���O�IS����-9����6�VK�JN�%s��,k���2����?�%^c�\
HD�����X}�DU��G�Ju�y��ds ��-"�ߖ-���$/跔���1V�F�H�bR�~���m��m�BG�@�l���Og�}�m>m�'�\x�+����d��V�{V��9�b��
�xۃ����e����k��rj2���M��������}'�%�H���	�w�5�N᠕�d:t�@S��nTېL�if iX��UI�8-���β�t�_7��5Ga�fM�[�y�y��]�+ v:3�*��W-��o�KqT�Jn�å�z�sNo��/�gK̾�r���>��d6�����^�u��~���*�r����72xR7�Mi��O�Ճ��k�r��m�k[���t�͏
�T	ǊƏ�> �hEJ������H
��B?㶦�;pK�(8��uf�(������q=&@8��x�T��-�~@J쯧x[�����6�s<gU��;oLMĬ̂�/,x�4��x��!��;U%bp�#?L�w�*tW&��(: �c�j7�
Q	6|&Ob��uM�����W�<��>��bZ21���D&c6D&�@5yßn�"0��Y��'�|i�ᘏ��� �YU,hڥ��[+E���5�wdo�X��Z*|t��j~e�l��Ddo������0�Zs	�<R��(;��s�F��PT���X���Jg�����mu��q����Ron��[�E|��￿����~ڂY`�,̸�i��U=_#�i|��ȡ���n�3�ҍ��%x�5J)����j�3����yP7P8���W�6h��H�5�i��f���j�[�<��t+v��S�j5=ˁ�d���3�I��=p�5�f�_�:YPǎ]���'���*��D��4c�����$ ��n�4���jko��a����l����J��jZ�@U����7�ك�L���o?^��|!�;��Lާ�������^�+��$C�rJ�;�cT��lkX`�"�K�PM����)��<�H&q��3����A�w��I�)o�k�K�&u&��=��|�+��f~}"��6UX�|�1Zs���NgN6b�o�n�^gd�ј��`Z�g�pL��w.ǻ
"����7!!]<p�ڠ:��%[�GYyT�;��&�J�N��ů��d��*��{Z��W5TCZa���������������Q������{�O���c�|A*�~W�P��C\z~�UyW��5��L���Z<����<|�R)ճ�ĒaS^]�I-����������쌳^� 4�Y,��VU7O%}oaY+�'�"Ln*�P���"
�`J��&W�uEr{��s6����W���\����5�e��p�oq(
;����xm�%�9�὎�$�qpM }��r�E@9����ъX�����p�xL�#r9�������TT���w�mM�UJ&��������S��߹��'���E�=7۽�c�P@�����Q?�������#8x,��1!��%��蹚��/Sx׋<���f���3��'ݒ%:�! sF�,�>D����b�xaT��S��GQ�;��>s��S|���?�E2�luWI[9���76Yv��݁��ߝ�����X�l`l�X�y�mS�Z_4��b���S���;p�!7�}�Y�h��E�.�x�Hf��N�F�N�I<�Wa�:��G��3z8N�շa�[݉�:�[�̊���6�����@k�镙)��=c��85��t�ř��M������{������i�A2s^z����E�ϝX�2]�se��0dȮ�d;��1G���-ח����
�R�*�j*:�^�@K�w�uMM�o��$���kã�+�<�U4h~Y;9?��ǈ]G�lO��`/�P�6o�I�²�����J� 
f'�
�2�	� P��7(�[��ߢ[
��.S�V[���D��	J�l��1I�F$� �K���>� ��Iڃ�b��r�\ٍ��kt[7���ڎy��JzF�$E�I�0!�����F����g�{�M���N�9
 /�^�6
��"��Sϟ!�P�@���H�Aa�_�!�����2sw.���k8�"8ay�}磣3�~ڦ�Y��/��f((�AP�>K[��=��޾({L}�-��K%@v�&�q��lK��ͷL��@/a��'ӝ��)6K���%:�iH�_5�l� oͥ�G���3k�;�m_Bي;��p�4'{��,W��	_K���p1Z�6��@�rՏ�͒v�Z��%;�L��C����43֐??(6\��3�32�=�V0�����Ї�����"1��b�Y�d�`p"�qF��uKWp����Վ��f��==�!��<�K�~�n.6� Y��yi,�r=q�#�9@���L�?���϶0�7�k��dKԠ4���m�eu������IKc��7�NB�T+�[dx�Y��&���:r��l��Iq.Fv5�a(}@����6���VP�+��b��\��:I�$Z^�D�%���u՟��&�ۖ�S&�,�b2\$c�jjg�ʌ��D^m���w���M�|�M������ϝ/9�]���
=#ԝ`�)w�J�8�o��l�����Qǥ.���H�/�\�u]1���,�po�q�[(���X5����H��,�$� ]X�!�A�;Ǹ�s�	�R�3��i�.wQ+�N�����@Pqg^�㜎��l��"��?s-�"b&��a�g��
��`!o$��x��~�%3	T�y�l0��\<�F"Kv��BޫTź7I��\ؗ[�k��Y4)�9N#:/3��-^�i��0�ȑ�ea���uc��=}8lD �ڮ�ʾ
J���. ��\���>���w�A {��,S  ͖�tW_2yO�ǼDY�IH�s,�XI=��=�k7'L�IəT�vIἼ8� t����q�m��~�:l���@�O�������N����`x�lrKn��+��D��	2��l����#Ђ5�+��=�h��."n�'������?��-�S�����R�v�S�|P`������D��%��pK���b�'���s�Vzm�
```

---

## File: `public/Testimonials/patti-chimkire.avif`

**Size:** 14081 bytes

```
   ftypavif    mif1avifmiaf  pmeta       !hdlr        pict                pitm        4iloc    D@      �       0�     2]       �   8iinf        infe      av01    infe      av01    �iprp   �ipco   av1C�!    ispe      �  D   pixi       av1C�    pixi       8auxC    urn:mpeg:mpegB:cicp:systems:auxiliary:alpha    ipma        � ��   iref       auxl     5umdat 

8f'�h4�2�a� �@�^�P������/��L5����Ԯ��   I�j\�d����H�\/�6��j����P��Q���z�V��#�Xŋ�m�������-~h,����E2�k��$�
o3�q<��h7�i����4^al�����́@�'b����2��]�O8)��`9���>��v	���XN�ޟه�tZu����z�<L��:�w�>���8�UW9��   Մ�F��ƌ���c�	�A�
����	�CXL��I;�T���,��2+�u-ES��*�R>Y*�����e<6�T�K¡V���1���]*u~GY���(�.^E�u����|zmd���<�:��>L�==��]b�����V���э�2$�]��4Y33����v��{�ԍs��Z�q�E��k%<�pi4_�����H�2:�Wk
�'�_�r�Ĕm�z[;��4����^\)�B�?|�qPgfv�	˾��2^�z�ᱚ3	�ǻe��=��,w�G�+Y)I?�CvS�d�ː}�+�A��&AΎ?P����ޗ�<|�0]TX�Й�D��"	Ǘv��AY�*o��PY(xd&)x�x+*�,�W�:�>E��Dӧ}{� o3�:�R����MT�����s�XS'�zƱ^��L�z�~���Z�{}({/X!���Whm�Ї����|e��uwm/
� h�
��uWa5���^���:q�i���{��{z�S�����k�{�H|�1��݆,g��wF
"��4g�����yh/��#O��7�N��e�~�&p0�%�z�[K1=�����JD�./�T��l�9�d��S���ߙ�������__��kp�k,`|NL�t87m�N�y)[���BU���˿��A��_"�[���U��M�=ofʔ���v�]-��B�d��/���^<G$TGeD+M�����n��_G�E,�y��B�������5�hK��h�Ѡ S��E�/;���!S1K�"Ud�|P�~C=�ǎ�y����i#�7Xn)Ӭ�̕��"Z��=_����v����0�ӎ8�!\IeS�^U���Q�E���V�O[Ð��`�=� 	�I�ɼ{Z2(?�,Ĭ�W����p�d�LzIɪ˘G��?���&�2y�bU���uvq�	��K��H�"+Ɂ�e�Mr�F�J���&�0+3Ћ>��}��O�#w�X�������Ka�K�:����"�6�����p��,�OM�Kȅah �=�)Ñ>�A"��T�g^�j�x0�stοe�[�z��i*�,�שJz�\@A�����L�?3'���{�2�V}M�#�8+�\]�.y��G�oc�СI���9��:�N��^�����Y��\M.��`.�V�ˑƨ�"bΜ詓E��B��T쳈�^�"�;����n�z���*����<|&��~�Inؔ�M��ǘ2�t7�u�hZ��>7���`�t�)J}��h^wՕ]߃p}J��1NO�M�ȹ�
���1���
߂Ϻ��)��2o�� ��\�7�b\�܎��l:��֧�������)������z���W��v��Smn�G�������q'���xe�z���p����9���zp���aA���E�8b�m|������#�u�F5?M�VXWk�-�tj�pN�)�x�uI�n�8>"<�fI������}�f�w��~*��f��>�5�E��g�:o��A_­���_��;�tg�p��i�57dG�����O���I�{樹wm|�\����<|�6�����5K?��D�'���.�3\&]#��+0��zs��[�\2��;Rl�,����JЩJ��-��T{%"L��~��ktV���,��
oBù!]ӴG��OB�����Gm�#$s��slL��:oǚ�����h:��̮Iy��/�+V��7��8��~1j��Cj�;	��u^eN��9d��?e��Mi���fwC�	��Ȏ�7{��zK<�f�(�j.����5:	�]�P0(���K.~>}��T7�O�J����V�O�;�?z��?�4�"wt��]��E����T���h��u���d.Mɼ�/��[ډp��/�9���d+
��8@?�J��������B+K���g�[�d�c&g��w��4�A2�5w$�jR�@��䰓�; ��e���0Kk������
P'�u 5���E�ޫ�(��Wì�K�R�`ľ����<�=����;�{E)�nވ�1�.!�0����ef�CS޼f|�;��"a��}V���A�ɷ�A�T)�uw:`J38c�-Kƺ�f��*�,'*���eu�&�ݾ������8s�0-��i���G�'l|�YQЃ�%Cѿ��U��:F=p�u9���Vdޱ�=W��r��ǌ���o;Z1�~C~��}�6u���m��)Pq�X���|ǥ�r���厵s��u��� 9�0ԅ���ݚ�\Vs���;�ҟ*��YK����L�L0�R֍�7/#ǲ7�v�=��j�� �c3�]��V��Ea��Y�#F�j������{�|�kx\��>+]Zs�=�ir>?n*h�G{;��'5��1�Y8x���7����r��"����:�T k�|��o_��1��R��o�/Si���N\����	��W�&{�𱖧pB�p�Qp��m-�0=e�m*˵ʌm��J�t:m�fÎtn�*��犃h���:綽���E�S���XY|�g!���.�űU.��)�H� Ñ�"�ܕ�__B�7̇5C��G�(*t{��Fl���8��N�z��qT���z&��9�k0KF�lِH�� Q6V�k� ���-2�=�J�5fG<G|&��R��ɗ`�g�as���dޓo #�^���g��J�e����������&����o*����1�#{�:�7?+��qFMK�"�IH���$���`�]�&=��X'�!����8�z%x�?)��3�{)�=�I������I�k1iv��D�w���}�������^�ٹ�~��.��ldQ�]�(�z*4yÍQ�Kx
s�Fo�9��un���%�WeZ��t� M�c����_��K04�X�=|��O��tܬM,�bt[._r9˛����7=��[~IT���-�T� g�pMC�9�3��
F�]׿��H��*+������:]��G~��v �g��!r8/�q7h����F?8�t�����i��W�l��*CH)�{x�jU��kŞ��4GN2:/�1}3ܾ��>+�;�v�z��Ί}a�	�:"Sk�M(��7O�4fK	�!�c
t�b�!Ɋ�k��<ۓq����1��>��\��i�$kR\R�����q9d$i����EC����%��{-S����']�(��&�1o�<\&�����v�����d� ��Q�B�fu�T��K���h5[�u+�ſ�Zx���ފS�6�/S���ډq#�)竸�a�^7h \�}���WUꄄ^����1u�P1�)$j#U��1����}�Μ����}/m���e{"y��_��<E��!�o�T��j�U����Ѕ(�' [�R� �
�u��&4��(�X��d*�d�h`6|O�mn������C�y��ӏV�Pz�^�F�p�y��q]}�����~�4[�ȘAK���<��+������5���Fxc������ʀ/�k:�{_�G�a�R�	sLؤ�#�\|�7�#qZ�=1����#3��S���q��Iٶ��N�ͲNZ�-�f���p9��~�UN
�ٵwg6Ӆ�@i�g����jj�7d��iP�`�tZ����@x�{���� r�h�|9�	���e��
`a9��!񟠱"P�y���"Gf�l�Zk��.���
��	9��A�1Ȝ��7
2Ʈ���A�����}Д���Nl���V���K\�"�T5_�%n��%؋s������C�ʿ)6�#�����] n����"��22c�٧.��h#<V�$���a0���H����з8q;>E ��_�{R����X[�"}|��3;�Zv��ڔj�\U\���[�JV�	����T�+]h�&�͐0F��i:r_�K�w� �RR lv�����:����
nٝf'� |��T���ʅw���Q�� eV�H���o>^�I�7(�w����If���+z�uc�<�t�:@X�>�NN@����Wzm�T�
�:��1��I۬��'n�H�܊j�g��e����Zfd#��6�b
'���"q
Q���#�Á �xQ���֜чq��K��Fݼ��<j-\�y�,�ĜL�$ORC�בLQ[�>�����H_���.�	��zU(|����b�t ��LU�~�Z���V����{�H�Ӥv�o�#�i�a���(��	�4P�̊���q�@:y����X z��N���8�k��'��)�@��w$���b��7���a�--L���X,���цO�P+SWy�����E��8�4c1��>���|���_���@hc~�����Y�Ljs4-�z]B��k0M��*�}��B��2��4�jM^ny�4Шϡ@�N��)��4�ȏ����FX��p���C؃
W@y�U��p8�f��n�쑤�'	�s'zwӔ��� /��I_'e
S���⼫ߵ>��MS�N�꯶ҟ��W���gu�kI/�u��Y�
6��i�fY�e�=��uS��l��E�>.X�����K��dډ��F$�D��(\oNR�n�#w	�)�̠S�"K}��56��4�"L`���r�yR9�F��`ˣ�^m.P��"���s�iw�0U��Ow�d�Ҿ;�-�(�s����B>YJZM�ͭ�^c��T7���m��ϡ��&�&}E�_�A�.�p��0���]h(55�UX��H�%�N�x�[���A��$�Phi�>*����a"������ǃ$�.((h��2���q��o�}�,ú������&YB�� t� 3ʇg
��3)׎1�a,�������Po7��e0n(�O|�� ��%��Ȝaku�S1��,s�:��v�G9�h�'&��!�� RLىC��V2�����9�EjgجuQ�9I��8�`��Vb�V�5^e�$+���qD�y^��HX+_Q���V�+3�H�AHA��	�9I�OYHYѷ�TjxG�#��j�ו%
�h�HD)F����ŀ�ZJ�V%6�"�,bf�P��MԤ\Xd�5f��yBER��d_<��M��K�3K
qx���L�B���O5�'�K�^���1��^7B�p�������E=cc�֖��]h#At~���V(F��E�Ewzc�Nc��\�LV���k�ջ��t��>}�g�� +���u5梟a�7ŷ�u6�%�Z	����f��F�uq.r�'KRLJ�,���<'^^�)���D&.bW��V��il���L�S��`��P�9h'�H�[\�:�<��{�������g�����qլs&���Tj��߫DX����{N��1�ʛ��x���l|˓�	��(����+��
͇�ca��G��]�6�T3���7�t\;i�h��Y��ST@�V��H"��3F��cH�*����F�/�{�z�9'�%|*�����II��JE���|�c*�3E�0m�1����y����P9� ~�-[!���~\�J���Q-�4��+C�0�l� N�{px���/�a7t�H���,ǌ]�F��',����١��59"�"^)���77��j���Z����Y%�@������%�,/u<V#�6c$�7א�fc���?��eH�>��:Ӏ�zGg6���.'mR#��z�X�:껎���r�wF�3=܋}q@H�i ��KĲ��Բŏp|�yC4�O�=ĎDZ����8�����ec))�Y��^+�ֲG2ఔ�B0q�o/v@��/Ip��W"h��N��:�>2�C�ѱpr���k�I<�(��}��䝟L�*y\̍�^h���c��La�LOF�Y��ߞ��x*��wp���j6�g���eaW}���6HY}P���ݦ!����0%g�ꠡV k�Sj���X�"��u^��cw��z���7�O�rzT��xѾ��l�I�4���;`��~ʐ�!�C9K�`�pǈ}cm���'�Z4��)���Π�{E%G�U4�|d0��&�'6M?Q��z����K;��^k'�c&��Nb�-FyG�g�]v�0�]�@"2qVdz}e!B�Q�3�)$jM�Z�殈�۔��aܶ���v��;�<QҟN��u!Qʏ���K��z�oC�r�]	Hة�/u?ǆ���b152\�V��a�纰�=��|�wp���N��$,M�z_A=\E�X�[]�-%h3�l
5�.po�
���쑁R��t�-A�/�$��0$�q���8�!"�#�/��B��R`����[���{ޜ��J�<PS j�%�F)���c�X���U�M��ѨV����"��Z�,4����=|��t�躗Ӡ\���,�$�J{��UnQ`Ț�1��3H e��ەES�I���+����l	-;�auZ��k�ec�]���bH"醬��Útܿ�_���jZm�1�5�xb����o���Ϫ���Ni^��԰��t�dA,a��׸���y���X�M����͇������^����;�Z�9�="���t����2kS�JQ���/1�[���3G�����W��:���w����"�!��|��xO0	o(�㬕�������R�ҙ9���Z<�b�p}�pFV,���@��55]�ı��+W��Ͼ3�LW�>(�!B��Kῖ6��� $W?}��ꉎ)��cM��vﭩ�/�s�;Tq��V���YT�������{^��/���Э�ohk�H���-�4�1"�CZ�!P��m��@��I�oHž���˲��A 	������00@1q ��AAF��݇Å?��&�B�rS|5g稺�*��]U>b!3kgc����|\�_���hd����F�B^r4Gf{(=z]W'��|N=�M*��8/�D4Փ��O@�rMZiW�֮��F��lY��2ݨgI�;D�DI��&�ι�������KF��G��p:����z����B>�)�g)�8�3枺�6��l�4�c���!S�To��Q�U�)���,��[m�._O���2�=q~,��h}��=�u�G6�`Y��B?�� -��y����ć.��������Z�^����l������X�ʋ7�<Y�T��L�`jN�	��m�v� ȟ�;���+��Ǳ���Oe����K�����qr��:e�0WV7�)g�"0�j�ڬ�C�A$T�\�wk��]T؇�!��,��Α�,<�1��.�윸��_KYpr�~χ����|w��֑�y'���}s�q�B���Vc/V�ǎ�����6�]9��g~/!���"�J��
�_��s����=������UP*�z1��N�� ���EX���hW�* }$����@nݚ"_}[��(E��T��=�C{Q�#A��qs���[7����eK�&�3g�� >3�-�M�l:;)�G�3Y	����]�@��L�UQf[H��1^a;և<��xA{Ɗ�]��GF@C-�yj��x���T���|zk���;/>��;���+�!Z�H���/,�v�u,���d��b���S��)�'��Ŝ�e.��e���v4���
�F���W��F4j��G�M�ُ#ա &P�f5��r0E�3nX�8)�S�R@���<,�Ɣ�oIȮa�Q$M�I o$p��X����|k���ZJ��=AZw &[A_���kq}x�n�~��ۆ� RB-M�ʣ���5�1p�,Na�f�E���^�p�|�rx@)I�� �����ZFM��5i���|J������:��D��8�G<��	��%n�����-�s�f���51�xtS���i)��=]���[�0ks �e�w&��(�v��?��*�et��8�
����4K#R'j߼7�TAχ��&��I�ĭ爏/Hx[��d����x�:Ck�o��n�̳!�	{��۷�K�.Uo�xj��(5(���-�w��\m���Pq�ڴɢ!.-F�	�-�]���{��ic��=
����s�>��r����J�։����������D�@�b���(_�	pk{����<�+뚲�_p�!��`����L�c�3ϲ0�68M#[*J��� ��UA���Mzp�΋í0���cJ^9�q3�$�$Ȯ|��c6�Z7ΪYX���Vq`����G�l�l1��UYkl�/p.���������~ �����v`A�0!ύ����S��z�붷����=O$�?S��B�;u��$m�m��!�r!����S��ʄs:Y\�nq^�[hT#��{�V��*���q*��|2��Χ��E/�K��}d ��,��5��Ն�ğ8F �Āct��B��M�^�"Q��ĩ�S)�QP�R�G���lH�)2�bƣY�D�BuKKrlv$�r-���w�{���͔�R�k�n�g�4�"��IR��0�ON���)C&��o��C���l��RzK o�h�|��U�)��&�<���"M�t�.���8������e��㚫j%�	��t�N�OfL���ԓ2�=��ߋz�+H,��ĵ�\;w�����z����ya�����|Ȯ�9�������0z�iLq呂Q�?z�>H�;~��Բ��Ԇ	/aG� B�BS��ٌ��+h�[��H��f'v�8�	�!޶r�|fV�E��g!C��
Ϭ��������샷؅^��d��nv��]Uζ��B�)�_,k{�ӄH�9EWQgʂG�3	������0N���Mޣ[ݢ|- ���6���r�����ޥ�\X2>�^��s ��@tN�Z����dB��SQ�/WM�����8� ڰ������:���A�}m��G�s2^.����дa�VC�y\I��E�:i�QCEFc��JM�������ߙ���uV�����i�a�l]>��T])o�w;�.<Vs�Ƌ����B�RD|o��ݭ9�br�}<jA�F>*V�>��T��e�{&�xI�����v�6q�P�r>�WGoFz���3�z����\��"�OK��-q��8̰��ɽ�����@E���ݶ��9'���v����?������-G��>��ޒ�&��W͒>���p�`�Q*�>jnx&cK�[��j��~�1f����E�m�Όy���^W3)�������ۖ̅���,�	@Չv�s긃���/6�l��������E�9��Tnx:��ŝ���̴J��V���\����8����vl����fY@6}�$_Q�h$�&�3�~x��{h0p:�0��z7q�g�`֑ͨ������{n�.�׳�.;x�'���!�Һ�"[.���j��% �j�_ӊ'h��H$U󌂣�vg�GG��C�7�&�
��5�����[̡�Q�JX�ɀ�7Ć,0z_�90�6不L��=h���������ߴ����#�1���Ʀ���pKD��!��03�>f�&N�T.�����EH�E�(�� �Θ!�����q�#�
 ��r���{�GF?m&��u%:,�^VnՏ�E�vM�����mvѨ?��l��G}[=����� �I���16�U[���0����6������L�b��HԯB�:u��Q��� �} )k��#h?����H��^��{����UlZ��]oR&oxX�|�\����������x�� j�6{���./�hnW2Ao
�1R1��kq�܈�)�A��H5?\�ߊ����HP@�i<����*�Im�5����kYY���ʫ��a1��Ul�O �v����z�li�G��qM=�уE/0
�i�����J�=���by)M�/'d�[��B�_(���1]�<O�3��\����<#�k�  �#s{-|ϯ�Ƅ7|w^W.h�ϖ���B�Mb��� �˾�-�ڛx%�q��q�)}���I��\a���h7Ճ4Isod����~^AO�S�K#��&��\00mm�x�s zL6�[#O�P��݉ҟs�#F�z��3�!��p�c�+��Ma���O�������p�hc�8��Q����{�/�+5!X,E!]WgJ:�v/�H� �����[K�6�6�X>a1{t��
�f��Z�
��;�E�>h�E����솲ˑ����y�R�n�
�$�5nWM�C��Y��쵐Ac��ѝA����[۹��b� �(��g��x@�t�Ҷ-E����Z��D�g��FI)�s�|h'��@`�S����VR���P]�QU��'Ê58R3M?q�{��̑�k��IjH���%�76P�TB��tG���>�8GY*���hWr��W|Bu��ʿ.QfƮ������꩜����;���yY��:��B�#J"�ǁ��,O>�h��]���]@��tW�R��l�K!e��Y��2#�5k~"%g���оC�
��&�
�9p1A"��N�7Q�&_�����b�4a�5=�2�/n�u*^{MKs����o�Y�t�=�V��V�����tep�z��y�Z�`���OǷ�� dˌ�e�����\J������"�Ǒ�]�΍��ΩC,H:� 5��&4NQ*�~����OP����%C�$�@�5��l����&�O�0�D<�����!^5�w�M5�i[@�|Ae�~��'8ʽ��ٵ���%8�8-��"����K3���Z� �Ĩ{�l������wsq��D͌�　�l�����z�(Ք�MQ���ܛ2o>TkE!�ʬ�݆Y!�-t��щD��Y5��<.�>�FӍj�I�lz�ʉv��so��%!�^V8�-B�W12��{�� �e�g�����~!�	��������6�3�e'B����S;|�#@RgG�Ư�r������4���@,�-�曄8S�{����AW\��r��Dd
�
D���Xp������E-{���D�t�R~�ʹ��x�9�*�5 X�����{�W�n�Y[�9�c�����\(G��))���8{]�#� ���2G�@�٣�T�H^,gkq~4Wut���Ey�_e�\V`* ���ZH��-V�"kp�iB)ٮ�0�i�-����!���"�7c��A[�.]@�Y�L��ڢכ;t	ۉ'�P�uE>L��{�}���5��M�P2q�0fw6�h�i`��:��;�-6/2��fd�+h|�+:�hg�<ҥ�k�BA	I��p�_�0�&�B��qA��d��rfϺ�~�~�.\��y��\ �
ja F�;n#W��|Y�����\�\��a���mݠ�($*�4AM���së�$��M��u+"�)�d3��ZmE�O����5+�=]��eBn�C�S��m�����Nq����&�T}�T���;�}Jl��+lP]��������tp�E��TX= $Ag���:tZ8K<��d�m������>���z�T��#Q(�@���,��
�b�P��3����)_T�)��U��t\ܿ�_�?oAi"������w�����lt�^��rk�r��ٯ'�`��\�qpjq65�*a��C��p��6�D��E�|I0���R��$����,_O�ɵ[�X
�_lC�����4G]��>xl�Yq\j3(�;���T����B�9?o����<�Lf�9�^��V+:�(����h�ZY�j[ѱ��tp]5:��/�������x���3�rfD�8�Ƒ�uO�%� t�8mc�km�:+��Lj?�tZ̕O|��ܿ2�,YϵԜڑA�4�c�򐚦������{ớ`�u�^Ն?��N"@�&�������W��i"�&
jw��1��U���n�E�v,�Lw��.����%]�����6
�{*�5���ѷ�ےRQG@Rj,
rzr;��^A�;r`�)��lR��0�d�[������I�`��b�TP?��,BK=~`�Qjw�sn)ʾ��y���Z5b��@�sX)/�F�*r�#h~l��,�;��lE
�H�
��Y���2��H����vR����\3h��J1�F��e�V�ퟳ�E&�-�ߦ�Se����٪<!������*58������'["#��}�a>��6�S@7j r@E*��ԃ��7�.��:�w��I�- �3��]�
{���׉Xi� 
f'�
�2�	� P��7(�[��ߢ[
��.S�V[���D��	J�l��1I�F$� �K���>� ��Iڃ�b��r�\ٍ��kt[7���ڎy��JzF�$E�I�0!�����F����g�{�M���N�9
 /�^�6
��"��Sϟ!�P�@���H�Aa�_�!�����2sw.���k8�"8ay�}磣3�~ڦ�Y��/��f((�AP�>K[��=��޾({L}�-��K%@v�&�q��lK��ͷL��@/a��'ӝ��)6K���%:�iH�_5�l� oͥ�G���3k�;�m_Bي;��p�4'{��,W��	_K���p1Z�6��@�rՏ�͒v�Z��%;�L��C����43֐??(6\��3�32�=�V0�����Ї�����"1��b�Y�d�`p"�qF��uKWp����Վ��f��==�!��<�K�~�n.6� Y��yi,�r=q�#�9@���L�?���϶0�7�k��dKԠ4���m�eu������IKc��7�NB�T+�[dx�Y��&���:r��l��Iq.Fv5�a(}@����6���VP�+��b��\��:I�$Z^�D�%���u՟��&�ۖ�S&�,�b2\$c�jjg�ʌ��D^m���w���M�|�M������ϝ/9�]���
=#ԝ`�)w�J�8�o��l�����Qǥ.���H�/�\�u]1���,�po�q�[(���X5����H��,�$� ]X�!�A�;Ǹ�s�	�R�3��i�.wQ+�N�����@Pqg^�㜎��l��"��?s-�"b&��a�g��
��`!o$��x��~�%3	T�y�l0��\<�F"Kv��BޫTź7I��\ؗ[�k��Y4)�9N#:/3��-^�i��0�ȑ�ea���uc��=}8lD �ڮ�ʾ
J���. ��\���>���w�A {��,S  ͖�tW_2yO�ǼDY�IH�s,�XI=��=�k7'L�IəT�vIἼ8� t����q�m��~�:l���@�O�������N����`x�lrKn��+��D��	2��l����#Ђ5�+��=�h��."n�'������?��-�S�����R�v�S�|P`������D��%��pK���b�'���s�Vzm�
```

---

## File: `public/Testimonials/riley-lemon.avif`

**Size:** 10801 bytes

```
   ftypavif    mif1avifmiaf  pmeta       !hdlr        pict                pitm        4iloc    D@      �       #�     %�       �   8iinf        infe      av01    infe      av01    �iprp   �ipco   av1C�!    ispe      �  D   pixi       av1C�    pixi       8auxC    urn:mpeg:mpegB:cicp:systems:auxiliary:alpha    ipma        � ��   iref       auxl     (�mdat 

8f'�h4�2�G� �@�^�P���������noD   Q	{�Z�V�6x����~>�K^��q�X�T"�s,����)�a��Nբ���p~0A�!�zq�e�0.���f �Z
C����=�D�a76$�g9/����3���M x���4�Y��5	�.���2.'��*�uP�h@�M��tH�8^�ޮ�*颜��#a!d���.��Mv7����]lq�h��ã��pP]0rM�����
��JImD�'�TP����x����p��M
"[��|~oќ���3y�(�|_*���P�z�Jr��RХZRؓ��=J�l6Z�Gy��lB�af���A�`�%���)i��"���agk�#�+���K1��1��#�Oۜ'�,W�Ѷ�      �����IT���\�]�X����8�窳��������.����ɤ<�_��1��cA�n-���L"wW��wSWe��bZ3���,f+ФX�Z�t3\���r��Z���M�?/Zә�n4Og��簙�~cLk`��	�*u=�٪�5���(e�W���w�����/I���
��Rrb�w������>��QՆ��'��� �-[{� ���N�&T��f��bپ�L��z;��1�lbki�g��ɤt+����+1���(O��|CfP
�k�%��w/)&�Ms�{�[��f_�f-��'�"֠u�����/́��\��Sᦗ8��N�6IyI�&0+�g���#�xZ�6�5��qkeS�&a)\�y1���Ȁ���iH�3�|�71���pW(r4����z�ʼ�$�����k�>}@�}���M�2C�r� ��p!��Cqu�n�O,Laum�J�o��E�8^"~�8��σkR��i�$7���2D�$Fj�`�޲5Z�bmyl�43�c���j`��5��"�N�E�Y����OU�'lUuW�z0X ?���y��?�#dέٿ���c��A��v���=,�j/<��p��.}��k#}�gV��*S�S��\e`��|�S2w�D�/�:��L�`��U�
Ӗ�^�Ec���N���0�=�s�XթKBL@��d�K��`�̯�y�!���bI�;�8�f��ݮ�8���3F�fgk�_{g�a|W;x�*�F����{�@h?�d&����G������i�|�:KP� ��`4]���Qu��V�ȋ��3t-��+)Ra�f�I*�v�aP��ʱ ���j³�!� Ju�7�+���Ν챟k�x��\neJ
�K\x��:�2�k����{�d6��w���P�p��q���I�C4ƭm2����d�증��Y�s��=�[�id�-��$f���y�U��0���B�~!x�{���Z?���3=셀��ں&"�֥���vL�[�����RahG6a���W,��|���K;��P P�KA1�=#i��� ����\1#]��p��s/�1�:��������z0���&vD������MTޞs�B{�Ed`��� ���2s.%c��p���fpK�#���bl�Ya�r{�ϋBv���k�Ǯ�H�)��Ȃj^f�|���gR _�1�3����0m�-u*AS�~�$[L���V��)}��N�_F�!e<"�{ͦ���mw�����8�¼�7i��X�믃YUQ�o9��lV]�⑾͠^�`�n��Sl�]�Vty*�������g����?��g��#�z�����0� }�MZ�HH���=�wPy�Nl��M�->�&ߤ�N�y���o2�w�*#��Frҋ��{d��
����W��;2�j��Mi�}�)ɱ$9� *�!΂��^ʝ���Z�9v��Nh�n�0�z�uTB �����@ Nb����nr�ʗ��m
�������(3g3�W�����;��cC������9V�ʒ�=�l�Y��6�N
�>�����2+��H�.����S=;��l��ql�OL�����yB"m� �Q&��8��N&|3x�<&'��R���sȱ)Wy��ݱ�AKjE����d�Q�.��1�ɖQm?H9�WrL�_�J�x�)��\�:e�z��P��6Q@�b(��*���iuw�H־Y?�NHI>�i?fz�����O�)��Y0���u,}��6����%U(hc����X+�İ�/�OP��[�%�x��0�����$�#3��xH����"9�D�#%���� �����Z H���-5Y 3�F�::�5E���!�炥�M�U�7!�O�����i����=o�lRT��er�U��C��	"H ^tn�=�mfj�[ݕ��)N	���gL>��e>�pxl܍��\(ٽ��P��~�ʄ�ޖ�Y|�Q�sp���0%���2���Z�;P�J���	n�)�wcU2L�B���W�iZm�J- P��6��@���nR�aFR#�e�ˁ�p�6��S�?"��8�i;��m]�'޷�Ne'�`���9��)�v�l�t/�|�&oV�­�#BM�$� �7O��Q'�df�%kA����NJ�b`5��N �a�~d�z����s���ˬ�:ᡣt��$��5n쨵d�+���h����%&PMhj2|�ﱖ'O�iaH,�*�q��B��|S�gz3[
��Y{B�`	�Q�v���R����}���Ic��(���	�u,��b�OZ�s�@�X����/:0�eϵ��KCu�s�lo��p���3�[&P!E�N$�b[ݒ``�Ϛ���~c[">���A��`��	cy�P����j`!ʥ��G�\V��>��L���&<��
n�5qLi��E�ГL�*^�|Rſ`9&g�9!�"M���뷝#^9�p�7Yn���.s����D0Ԟpw�D�p�����d�/Mx��X;MEf��ء�1��Xi���}?�剋�6���w^^R��6H? ����H�-���n5���.Z�i�#�M�H��p�?�c�'��V�in],�vT��;^��]2�b�+IBI�h�c�_�uJ���J��S5����/�*8��ʍ�C*)� =��ʭ��f� t������^�pϣt0'"fzkT �R��ɀ<P8{)�^�]"w
��@���^
Q�/����d�z�ZSsn.�\N�|&f�?�ItE�Wm���$2������%������[_ǳ=SuG�C���ħT���e�z�;�2�~�`��5��g��V�>)Q(_�3�B2%m� �z=�Fa f�Sߕ�)q
:Jj" .)��e-4��ۃs���ۛj�H����.F�J�@W(;��|t�D�娹z��2��D���t��ԟ>��g�1;�3MR���0\�߳�O�v��%��0VM�h	f���J��v�T{�`n�̈��3˪�3���|=�������To�O���Gȝ��&߶��\@8�Q�L*�p�m2�=�?]A{�78�ZxW"j���'�)瘥ʯp�m��JS�-Ɩ�j.�Ud����x��w!4x��W�uv\�,#
wB�#��7�D�e�*�a)���3U���|VCLn���QJ�i9^�`o�C�;ƫ�zN\����P^�);�S�9�1��E3&�DN�0����+&���RI�\��0�k��uM��p;r�]�-�·�INfrU�N��U��w��?q}v<E`
㟘��U�H�e���Ɔ0D��YGM,%B��B������a��D����V��{N�{��
�O��/�2SُH�%�]R�3�
�O�j���qu�b�-Ż�O����p)�նI�4Z�*#��$�9�/��|�ˍ7�$ǉn��5��T(bAfw�l̗��
I��g�z||GA+��
�_���d&�b-�R���m/�(� ���h]B'-�)=忬�:��\�>%�>�8MN?�:i��O�;�� &RGW�a�oq
&�#�xI���u��α�\X��8�B�־%����r\k������cn!�J�R<�w�� �?dOdp�>�&P����,dp�}�b�B.Guc6�aj��-B0r���mp������!��jg�}zz	bC�����bEJ�;��F@��皮`��i��[A�#w��g1ϸqź����� )K�b���5��<ܦB�k�3�?��p��H`�L��ꮷ�j΅e�qT��'��Vʢ�5�`-m,#,�`ȧ��!�ZuE)���BJ��F�$߰DfHF �}M4�g���<��	-�bf
@��~O����d���а�~�ҘK��'Q��ɺ�=!����x��2��w�*�2<�eI�m�\:��}�ٽ��"Wse���<B����+�/��q]�>!~2��b��7�[)�@�4M�a��)�x��6���TJ���ݒ�E���#��<]��7-����
(�:��6�*ߥ|9���D�|3.���Ǥ8��)d?���Dv����5������̧$`t��D�O��p����@� pꞪy�V�A|>�(uAV)�9�XR��TB;j�&`�fD��nt@/��~#A_�xn���Zϖ�sqgG.����c7C:&�����܆R'|چ�T����g�<���Ò-(���y��5�<��0����g���|��,rj�����ᚖ��ݗfR	�U1S��LإOQ�O̞x�Z(%yZ�rY�?A�%&�1Z��e�7֏���Ք���.,�ɸ���C�
�մ�Di_*V���4������H�UM�G�q�.Xo9:\w��T�f9D����q]�<1���?�r�#xr��u#cJO����RA=�X�t�ҩ�Ƌ�����0VarJ��J�?�����|�����w��I�{5�ௗP�s��Kd��P4-�'u��ϸ�CHe!\�pga�m.̺�0=D�vR_٩�"�7]G|=!�D�x���.�+Jjk��:�7�N��FR���&mO�Zx�8�	ŏޗd�ϵ0��$wA�B!����
���i�*ɯ���p��	慆o��g�/���[z��nM,k�C��f��T!���S:�Lh��F�g���+�!4��N��nX�4xBt�"����
�I�ܮ�ŋntZp��i^�������w�}6��ݘL�>[���EXr��U���#��1��,�o�X�W�bAw74�r�#��nO�y%2qe�z⏊��N����Hª���5D���.��\����><F�;)ƒ�'3�����[�g����h���T���]e몥���dL�T�絥�罞U�FR��%�=��a����	|�&Zhɂ!&O�s@��KI����:b����uf��ǷּD�L�<CqY����(��'�ͨY���me*��ó�}���B��h�E&�ɺ�2��R����U��K5Qy�u*�?�g�TP�j_f����ۓri�8H5���!�@԰+��Z�Oc���?��n��eUD�6h��V��L~�H۳|R6���y���jO��,�$����o�,s�ģ��芘ξ������t��ȏ܅_G�:�7�֧�o�	�*��Q�4�ݶn�kؘ���<|���ү3:q{�%6�8fFG7Tۗ�e�,��π��#�P�^w͉ ?ֲ&j��hҮM��O�
V���8+�m�C�i��0r��/�e���0J��k�D��ETNyh�]αa����Ң���*�xF��>����8��ǩOʳ~E��%!E*�~�윰��/�������[���>�2�r�5�އ����3XAμ��\�Ap���$��K�>�f,���[���u�]Q�����{�r�a��^�gg�6�σK��"?��@3���,�v�Š�"��[턞J�R�w!�h� β�?�`�~0���Q�w:,��P�E�i�&����d�i��N�TQ������I���:x�[4��l��հ� �1"�������H)9Tѽ��������;��6�I����5 ���3%�Yq�U�^����fty��z��hT��(8�G�l*B�!�΢�-��Md��ԁc2%�i�����zv��4������<�F#&��{8[ٚ�JNU|�^Ud�߹5���oC[�*�?� !0xn�3�I�WC֟��y�h;o�C�ƭA��d�8��XkX��z�/0���S�������frXU>sX�$c3�^}tR�K��1z}k��H�����ך����p\Q݋e�-6&ᕠ�B����57��kdcQ+���e�pU�]Fx�i���z�-��'�4ϗ�����T��cD�G�
m
�h����pF�#6뒧�w)���ׯ閭`,8��X������]/xaB�^嫉]"I���O�/DE����]R���X�OGw���7���}��[A��OM�u\�A�����??@��^�»������P"�S���_�{��	gn���Ms�� $-�7ʪ�*����r�7=�"@Y�zN������ñ�2�ӝ�!���t���Y��ـ���IH����Q/�g�|e����F���?��f���p.�����(��W�Xy-5�QI�Ĩ��+�@�� ~?;��C��zX!e�Q�LL.^�
�ڒ��Z|�ㄟ�J]�������sD�0�a}6|�2;�Z5����ic�?6�֣h���f�T�.m�`��);�F?}5 Te�v�V���B�)���E�ooF��Y��c�m�wA�Ѵ���Hm�=���2-5��᷑S}��غ��m��=p�}嚯Wl�8<�Y���<�7N0�l�D[�L/j��G��Wccjz4�w����r��/x��"�s�n���G�}a��][lbX�a��c��:�4���?|D�qF	��@O��cw�ަ+�L�F��I�y�ө�JIBz�r�73a�[o�i��ƙ�5N5�����oI��Z�\C�m�gu�����FA�"��]���.�ߍU�[�H7�*������� o��\�d!�de�.�T��l3xvI�3�O�:E2���sr`�}g&J`�㇨E����eRH�DE!����w�Я�	���ѹB�VE�l�#��:�����Hy�z3N� FWev�P��Hn�D�e��T9N�&��E��9q֠�J�
~*�֐��M#K�&6��l26-ba$^����Ջ��7�����2c���n'����'R�Z��oX��l	b\��@��q���H����Bz�o�O�R�Z�Z�~r3�b���ݏ'���X��둟��$.��\
tX��+	�ᜣf�)M��8I���S_o�ʖ�5��bbT�GH�CA�=׼�+�SA�΀3��Ղ����o�=Z�>�4, �[�ʞ9ۃ�;�z�ɾ~�K� ��-ȉ�.)
4��LVf��<�I�gfP�,�GyQu�2�3W��:d��>�s�n����@c�o��
$E�W�����K����@���ya�4-�[��GE�����s�����:����B��֗^�t�qV��7Ɨ��i
�]
��\E�d�?�{im�;Ï4ge|��`�X�S���D���(lkJX����p�T CT��N폨`��2\Amb���w�J���5
I)ޞu����>��_��@��@��O{re���}����������3�E��_�W�X�*L?5W�lM��͒��P�kƇ�«<}V5+��]´���앪)K��е�6�q��{���aa�� ������1ޭ ��@*U�"�î�D����������3G ��Q~�H3�ʜ8�Ù��m�N<�Ө��k�<dE]�*H��tv(�v:��Ė��_�������E����z���
��l�Phx�i7�q=I>7]��#����SP�p���3�s>̋X��Jd�)U�aR[��mbP�ā�g�0��*��7��ib���,#�yq�K��hK^Sa�yJ#pb%�2�
}��#�{��'��s�j�����	p�Y.ilH&ڋPg���6, 	n�z�D���<��Le�ә�Km���z��u�Iw�"'�4O�e����;���F�{��B�`��F���cGW�+�M�b����b�s�4E�E`�����Ox��B?��l��8�l�~wYu9>듕�X�<��XꗿGB<��
�SA�K�&g�v��ZF��H��������؜�SȢ��cO�'��ԡ�1n�i��t�,'R �UOFh;.��$�8�&��隿���x��
�ޖ��m~2qnU����ӆhF�(@�q����ۗ6m�k��^?� y,����o�G�P�[ck0��p���ű�`�ʃ��s~���8A8���4������y;�M�Qr�^0��Ҡy�k{vp���]0}�.�L�L䍅�i\/ �ݯ^����	����B��f�S�c�`��� �����c��*�ɽ�A� @�k~����j��<����C�ږ��\���ۤn^�b+I��I`������:�e``�
M���F���v�kM�"�4�p� MY+j��uϗ��0��`�2����Zt�7�X�=��o��5�qi���!= ["751����c�P+65G��Kfޓg�Qr���p��rM�,5nvDK-�<b<�2��	�+�d1v �	��E���K'f��0��ꦁ'�[A�N.)� L[��
h�lF�L�o�@)�T銇���ۻݦ�#&����X�Z�{���%x\/�	�׺Ŋ`�w�v�h���^�՚��ݭk�$*�˨k#�S#z �����n䟭��8N��z��H\TT�R�^���)-��-V�ʨ���6�H*!�ߡ*ܖЕ-�p	�ъ#�w�/-
�- c�W�ڸ*��B��~�����/� �Ļ��A���`ʦ�kJ� �\�&�:���tى�
O�-�-g��#�Ip�*N�/���eQD��	0U����w�Ù-��kj.�F*��P�e�����X���K[}�阮��%<nq���;��e����-`�Ϳq��-��~m<�Ƈ���ۆAЪ��E}��4�����sFX������E�6�¯��������Xu6�Er�r~�u�'�	�����
�~MB�[���!t����<�a�Rd�e���惱�_M���L1H��]�E��H��)�z_JQ�w�¿1/7B���� ���ln�}K1�l���wدV�(m�fE(����^�DԣӍ�O�� cL���� 
f'�
�2�	� P��7(�[��ߢ[
��.S�V[���D��	J�l��1I�F$� �K���>� ��Iڃ�b��r�\ٍ��kt[7���ڎy��JzF�$E�I�0!�����F����g�{�M���N�9
 /�^�6
��"��Sϟ!�P�@���H�Aa�_�!�����2sw.���k8�"8ay�}磣3�~ڦ�Y��/��f((�AP�>K[��=��޾({L}�-��K%@v�&�q��lK��ͷL��@/a��'ӝ��)6K���%:�iH�_5�l� oͥ�G���3k�;�m_Bي;��p�4'{��,W��	_K���p1Z�6��@�rՏ�͒v�Z��%;�L��C����43֐??(6\��3�32�=�V0�����Ї�����"1��b�Y�d�`p"�qF��uKWp����Վ��f��==�!��<�K�~�n.6� Y��yi,�r=q�#�9@���L�?���϶0�7�k��dKԠ4���m�eu������IKc��7�NB�T+�[dx�Y��&���:r��l��Iq.Fv5�a(}@����6���VP�+��b��\��:I�$Z^�D�%���u՟��&�ۖ�S&�,�b2\$c�jjg�ʌ��D^m���w���M�|�M������ϝ/9�]���
=#ԝ`�)w�J�8�o��l�����Qǥ.���H�/�\�u]1���,�po�q�[(���X5����H��,�$� ]X�!�A�;Ǹ�s�	�R�3��i�.wQ+�N�����@Pqg^�㜎��l��"��?s-�"b&��a�g��
��`!o$��x��~�%3	T�y�l0��\<�F"Kv��BޫTź7I��\ؗ[�k��Y4)�9N#:/3��-^�i��0�ȑ�ea���uc��=}8lD �ڮ�ʾ
J���. ��\���>���w�A {��,S  ͖�tW_2yO�ǼDY�IH�s,�XI=��=�k7'L�IəT�vIἼ8� t����q�m��~�:l���@�O�������N����`x�lrKn��+��D��	2��l����#Ђ5�+��=�h��."n�'������?��-�S�����R�v�S�|P`������D��%��pK���b�'���s�Vzm�
```

---

## File: `public/Testimonials/rise-utama.avif`

**Size:** 11867 bytes

```
   ftypavif    mif1avifmiaf  pmeta       !hdlr        pict                pitm        4iloc    D@      �       (#     )�       �   8iinf        infe      av01    infe      av01    �iprp   �ipco   av1C�!    ispe      �  D   pixi       av1C�    pixi       8auxC    urn:mpeg:mpegB:cicp:systems:auxiliary:alpha    ipma        � ��   iref       auxl     ,�mdat 

8f'�h4�2�P� �@�^�P�������Y�,��6�r6��ʲ�   󄹓̣*	&$��]��Rrz�y%ϕ�O�A{��<8/�*��Ւ�?�{�	��N�^m�*�z��� hGD��Y�
�qef�R�N�OcI�
!6���i@-�v��>$�ٺ*aUݙ�*����n�!�g�M�{�\��6��4���ĳ<�,9sCǖ�,RCrD�Цb���G����Y���ttҜ��& �,�4�Nb2/�&M���^߱R�]�6���'j��ƹ��+@!m�jc5�DUW��z�8��iԏ�ʮq1� ����cV�E��̋.��Еա��i�
�i�ɯc����Z��;����V���H��a� 0k���VePy��d��lnB���u�� �a�x߬JyN�a������4i_�Px�����@v�-a�/}�֏��O����h��$��^�c�jP��3<T�1��~��GXR7�xNp<�}�es]�i�S_I�� ��r�+��nA��]57k�!6l̳�[:��.�b�뿱��߈��q��+h��-w�Y�8P������c+٥B�y�����t%F�.�ꉡ��|�DZ\�c�
.��R�6 �9�zX�:��G��t;2{�����^�y���Z�SK
�V�#�O��br4�=!�dJ�����\屙���U^�=�_�fqzAL��T,�L����0�Hz�{+�?���:��b���M4�绔D��Ģ�-��ȳJ����ܛa���������vƧkTL]8��R+ՑS�[�10M��{���Ql.Q��L��p��*�C�m���z�YB��v�+cZ���<Z�k����w8���{K�lu������Ź�ɫу�+���pIa�q�a���¯NX�ӧ`B�֤
VW� 7�� @�,�N`ױ�_�A�f.��,p �1��` O�\��\"K��U�ǐ�Kr/��aY��g>M���N-���F#޴#��<j[x��)�Ǝ�-PB	�?t����[�D��g�T�������V�|b8�L����O�ּ�1���7�QxC@5�u,�*IP�b��S�oj<4,���P�ƞY�1^`�FY���W�^���sn���P�Qno^e��$���}�yڮ�rb��M�_��	P���=xM������8I^7�kU=6\h[��������|�90���E����cLE�� qZ'pi��uܴp�K+d��}��E��u�>ި)أ���v\�_y���4Y�m.ٔ��ɪO��Y�P����} Cw���z�� ^A�Mh�:���@b�6~�<�,ҋ2S��Ⱆ#5�_e[�_O�ڥv8vާ'"��uAea���	�6+Wqp/Zݢ�Cd�,}�P��e��$>ZS�EƝ��^��.��m��P;\p�+f���V.�j8nd��"d�*l��`w+!�(f��C"98�ϔ����|����	��G�L�T���E6<�%8����T��xJ�r)�g	�{�y�^#`��B��ǽuF��i���0�$M�;�$-���!�F��U��=䋥�B�P�1{�D�F�ls�E�ΒB��m��M�3`��'Ø��̏���-��n��(5s�=[���P�-�u�t0����S��)u����2\G*�k(���h���	M�^�A��J~���ci���l��cyǙM�����j���]��/���~�[����g��b��<�R�b: <f<���"o�$F�1��}��rZ�i��ǚ6��*����2�7lj�#8u�Ќ�\>>y4b���ۢ4>��M�9�J/<�A����u�Ic�X9*��s&H����b�~h������lA�]��eX��=g.������y���=4�4�C�lS���n��A�(mӎ�8ԛv���8G
 m�D���a��b	��OH�ͱ�gB�j7bimc�dIn��I��:�@Uk_,C0�OT��?^�9�Mg�Ao��Jc��u.�4��O�<�X�[w9�\�M]�Y�_�eqݡz֝�`�:��~�|d0��FϦ���䃨�ǈD��qo����s��Jͣ���������?���������-<������h���LR�A�Z�p�v����يnM�!�#��b1ɑ���q ��H�����ԡ6���A�LY���v���.x�Ɠ
	�,��o�[2}y�Z�VT��Wp�&k� rF�C�p3 �5��Jh�F{7Jk�q����I�U��ۂ��p[�.�Y֏#��z`�nT)��Ws ���9oV�p��?闻�4eH�i6R5,������|�� ��^źb�]�ts���4�����f�EiTAc����is�+g��-��{o�=���%�!l �}��@wg���/��
��#�hU�z�Ѻ���]3g��Z��x��D6�s��e�w*<�ۆ�+"�������x7��zA�[f���wY��m�mD/�|���C7s6��D��2���%c�qC�] !M^�Y3|��=C��$,�QgР0p	��]��������ʹ�Q�v~V��\��gN�s�z[a����x�d�szܸ�(��͍;�t�<u��)-N��lkp\��4������|����n��r�$.�9�]��l�S)�����*sb41�t*���Yd�5��	�`�T:~]����o��+�A���"�ȑ��@sB���Uʢ�ZO|�>�rU���1h�hGX]��wU�� �(��V�r�9�����g�(@�:�����T��������B��>��e�
Dʃ��t�����O���;7�ӆ���m_,�[�CI냸��~��Z8���䋵�A��&u1X�3���Fr��5�����U}�[D���ӧ�іS!46��{��f� 8I �P�n\+J�}�7��>&���6��Y
Y��x�w�B�Z�4s:5�V�:�>9'�����A9�qPoJ}��*��)�פ��$��b8^��I���x#�k�N�U����hYh��S]K3�0�v��d^]
��MI��
�CLQ�`v��ZE��*��Or+Y[�}�Zt,Ȼ3n�~v�(�}��[�k_8>r��ɏ�����c��h��0�87�Bf���s3��*\j���4�x���H��,ӣW�4�j���60�H��$w?uZ�������a���?W5e��'8,�{{�&|�J|5p��1ls2��(OC��A��poN�럏�|�q
����r��K��תB��C�2���$W8RF��^#|�ճP���"��;NWa���?���7�m�C�C�c�1��:n����,�zCh-	����LRV��uiB^���� Ti���VY%�S�ֳ^	ᡥ,pJU�=��$�9���~)3���Pv �T��Dp��JH��������g�*�vn���QN��{=:+c�m��+"��yv!���.ݬ2Am�,ߤ�mKa�B��������	���a$�L���?��4+��>�4xt^��Ɲ2��F%�֪nM]�i�����X�
;"H��cf+�٤7� y�Y��Q�c�T���&Hp�O*EUu7�.�Ih����:��6�P����Ö9?-�7��ʉ����r�h �y˴_��1�rV��b���KQ����Ip���&����l ��j+}��A�5����_���m�EH&�ћwλ����x��M��W~-Ƥ�mh6�RH���F���!�׷U�[�)z��a)���<��[33^��e�_�g���u�
��܎�X'wf�Q�5;��6�����;�9�A���u�h1�@�ψF��C��G�^5����*���,k�|J�N\/�9!*��/�[��Z�x�#���d
�T�sI���"���aX���5P=rP/�/7��v��Da[r���@=c7Y��?�ȷ$X:E��Pk���M
RJ@0�y<�h'�������%�Muw#6�|�QK�01�!*�����B���vN���~�-�k���A�}�w���>�C{���+9�r��ؘ2�|˷�U���q [�P���/Da�Yndq��TQ��ꈿ�R�c��jR3!r>�:Nd�Ń4Q��dɢ�3��fY�a�ݡ�����dD���`E�"dlpT6���cNI��l-#�(k\x��k>���⯎���@]�J1v�����=�Oۧ�? ��m���v�	1/���Vó��s,P�[�q8�L��G�]Q8�&��w'��Z�ދ���|�Q��m)~RQZ��K�h��x~�Y���,EV�ވ#)���j��ɑ�l�zk�A��#�O��O�j4��GYB~�Y�2g&�"S��Z���`R7�+&�r��������v�9�;�}������p��.-��R_�6,�]lL�����S�cK������NpM&]�p����i�M
�R1B��rܞ�� s��y<O�nE���7,8q��E��@v�yU��W��2�*5��g[���3�+�Վ{�0�	�`q���p�Z�yԧb��w#,�az�m�*�b����������+�N-����g��*�l�����D�6)����8�e��ƅ	�<��~�`;��QѤX6�17D�,C:�*ʡ�t��*��$�\�E���qR�7z�a�vuX�S�ZE�f|�z��D?�,�~�����1�V�7�[#}�69�2E��,�DQ��D��(�;�l\��,9��	p�]�C�:�>�\w=��^�)��H��b�f~���[J�cU;���fXY�0ۧ��C?'��pؤ`�7S_�0�|~�V�>y#N>��O �]ј�-�|��ӎ���A(�Rg�\���S��y�]_Ӿ���:O����Ŋ���B5�2� �,t/2L�D)�����n�:��b5�I˩��F6 g���	��:�m������[��O�&����x;�x*B��Vթ�_Iܫw�S�n�c޿,>µq��&�D7:I�-GZW�9%md)���VS��szp���D7Sᓷ2�x�+��6$���-�; ז�D	
�(���?eF�Jmz%a�D�"��*]��EL��35�X O�W�o|+��xf>�B$+�iR�y�2�Q�j4���3��-Z;�&�[�'�W��	S-L�_��T�l��������b�ܹ��5%�v���G�e�O�j#9-YR
5s~���4vؤ?G�'W��Yv�##��~�Gwt�f�`�{��q�/{3����w������\��c����B�N�i0�����Q\�V��t�.S��W��?�1�P�3�%�?��-}���P���M5�h���L�{E�U���|k0j��.�n&X��RΡ����w} �%���z�ӯ�
p+��k�y�^`��p9��%j���eI��6�OH���D�ڊ���M�b��3ʋ��&��(��Ƈ%�.�����p��A��cl�k�r�=�@�&�Ѣ��-��O����ͳF��1��{��W�;'j�ü� ��$Ѥ�a���x{�Ѱ��� ~�^	����R+�ה�O�0W�cVi�D��6�!�HjB� o̚�Z�czn��8vֆF� �����5�R�9��!�Ӆ��j��E��kM٬�@Ę��+����l��:��a�"�l'T7��D`�
'9�}�R?V.l���x7KG�&�y��&��$W�=y�gdtF�ʑ�[�����v-}�m�u����R�o)��@W/=��pS�jc���lP
�b%ڻ"���Ll.��f(�M�/���5����|Jm��n��'����*�@r�S�{ �ggw�D�?R���]��Vzf
fB��	�n�*I_b��V��I��:D`wr�D�NWk+L���,��b��e?=us���s���h{Ί�nnik�/U@m�j e})1���W�Wo��$�B/WA�����j�b�m�\��K��!`[��(��#uPt�be�@���4�F��J�)NSw��i��3QЂK:#??NI��ɘ_�dv���{" Yi j�3���lm�TG���������Ǧ�Gӥ�6��칡ù9u:v�wà-̍&
�n2M�m`1�S&�`M4��
��$�����W}�kOj�iy�i�m9'�F��]@�BI$9c\�=dB�}Ƕ���s�QGYָ~��.5;�֊��P��ھAǑWF+M�rx} ����v ��4��M���K���8�����j���׵f��z�6�����I'��#�.Յx0�L\����݇�7h�WG�x�F\r�E!��������P���l�������������%��ĲJ�j��~�Y��O��X}^�`0�:V��y����,�3o��U���||��>������7V滰ӹ�����v�(eQ�CB'���SH�{<���t��V��a�A��pJ��Sҩ�;�oXњ��)�5Ul�&<��H����Dm2V)��j�*�u?��@�A���C͖z�`3����~t�rN�V�8L ?��~#��`����R-��k։q�2�o+�F�7�����A�_0��x�7���[��\;kA�x#f�����i�8�j^G����ڵ,\�?b�����+=Q�:{(R�e�q�
xn�f��XXn�K��#�0\����	����j~�6�x�TД�k��zT���1V���N!c�J���vV7b����Q:U͉��st$�ɣ2I�Lp��'��ĭ�"-V��fQY5q�p�W� ��FIuor[�7�D�)�!ά|��O#�iK�����Uڹ���U�q�t�2�7T�o���x--��������~H���̷n�#GcTC�J�2�eH�i��j���xt��&����G��2&���<h��<��-����lό��&nj��_Μ�4����g��Ra���3i�DW���@-C9ŗ��w�^�������C��e�C�r�z31^�[�U�������:[�ܓ�j��E%x�l.6�+����Qu��˿��R!��S[C��wL��8~�_���f��x?��3T]qu`�\�<�����h5�q�N!C�Z������	k@�0<��m������'=P�.(���R�$�s���*�_���W�>��.��Wߛ��-a�$��4�-+֩\��ڌ7���8�\�U��K����pIή��]��v��%��N��N-��A� {��J%�|cC��[��
O0N�OX"P4׸�����%x�(��DV��&�C��|� �� ��jU��&��q�1w�G�)D�����bɨ��!�^)Q�ptI	�ہՐ;{v��礢�P|Dp��b�A&UcG��&C{�t�ً\�#�n8�Q7��5\{�5Ƽj�I�Ե��ZXP'�2|x�=m�O^�"LIF��=���ː� �}"�=n/�~���cH�+l0�ǝ4����l;0�dj��؜^�5`�hqY��]�Ю�l ��
oGǊ'<��p���83�06d��Xf��{�Ԉ�\�͒4CMI,£�yK�V��g�0��J�����WO�����C6N�%zl`�+����<���ܺ��>4�63w�ܣ�$d��\:���.
1�K��_���=�o�5���|������?�D�C�37�e
/�'����o$˿wg���nb&�b�����S<*�v7F�@'M�O��L�u����ql~�`���p�bP�sv��ˀ�ک��h���T������A�P�SOU�G n
^̼cS�	�pg~c�M���`��&���bt��Y�!:�)M�T�=PW۩V���(�� W�9MC�ҰA��M�Z~�)���<��j��qޒm�A���3Q�wɓ�J
<�{�#
3���6�S�c���z@���0����zL�8��8芰P` ��<���������y��Y��,��������kx"�7R~��$Z�Q|4mAFn{b� �W�@4�`��;L�"|ڲֺ��O#ە��%�T�(�4qX��w�'��2��;]�N���Wg{���X�{��Bw��iPT���O9  M��{�l��ef~�� p�ZIj��~o�%��[����D��p�ZC�o��e%�"l-�iOB")�v9�jA��Q+��MB����À���S4Bw'fm�<<V%䠶`ؓJ���X`�F�3!@p��O��`&o�m�8*B�y�r�|$2v�]y!�2k9�ˣ�V�SG'?����	��8Pj%�2n]��(�W�@� �W�3�!�^0'�Eԏ�5|�.�x�����KL*0:B�&���W�0��|����[�l�]����K�����\���|0l����"w�#�N�2�l}qB_���Rv߿M�EC�d�S��>�k��P�h�u��+ƙ(���(��m�+�=��D�n�Μh��{�Ji&0��� ���:ݻ�B�TT�Sr�>��s�֟��VQ�-��� W��FBO�4���3E��"�,?�.&�	�."���7��{�ʜ�c_u�t��X�-u鲱���.�BƠku���z�Ȳ(VG�$��b䂥Џ�v��`>)�t�IY/'����FH���J��([�C�S�~	#K���CȏK����ơ����8����r�7s½�L�ߒ6��:�yd�n����Y�����C�4��i�����+O8ĵ2���*�-�VmJ<�����^��M|l猂�6/%���	��;�v7L�����X|��,�M����uWbH�˱�c�+э]�<� iAj�-u�؃"��ٔ��ҡ��;�����h��O�q0��=�b�����^z9��"g71}�ĝ���O�s�a��r�
�ɂc\Y�.��7�a�7��j�$E7������k��64e�ڔ���oؿD��7��k��!�02|�� ���
��ށ�(ncH�Z!���03���h\,�cZH:��~{&�t+���Qw�i�꘯���{��ݫ�<��Vʅ�K��R��P�q#�+҆��?~-JM�~dX��}�2��'��*�B��,H2.���'� Cf���D�^�w�����cG�����V�HF��Ą	݃8�~��R]-j�im���I�O����J��lg^(3�&%���TZ��ͧgL�K_Z�U��8��dy��;oS����V�$tv�w��c�9���3Z�I�H:�g�2� ('�Uz����q�*��.Lz't���o��v4g�#��[q�����'�DMa�5�	i�bֲ
ŵgN��Zi4�=�
�?�~�E���P��q�%) Č�p\S�<��fa�yHd�h*0�_�����2�����J�/��qfe�n��A$��S�J�tX����i��;�a�>b���\C�+>sF�c�jcYl sk�AqS���vL����vPR?�,Ե��Y�wB�^�_a���\��a���9F�D��Y �9�_C\�ڏ�:�ɤ�c���|��v���]��Je0��j�餀��ˤeye��[*3�d:��y��ax^�,P��*��]rf�2�rf���)��2]�B�C�%�}Y#�d�1��38��0 �1�ͨF�_ "�n�<Pv2���C%Ώ��S'Z3b�0��
�7�:�P�a,��	Ւ�Єj$�%>�&����4�.��_Le�f:�l3)�"C��o&�t^=<�YM�^�L�P�V�Rd�yY8Xn�;�ڕk�:,��G8Zi<&-�D�A_1�lM��ow}k>���"��6
�~x��k� b@$���'B5���C��R�ȫ�+�nx�&멽:�a�����Q<���z�"�IQ����j���W������qG�")��U9�����P�\�:����p�	�y��N���z���i�$K@I&�w��i>�g�wEc�H9K�g���JL3����LQ��/�٤��t?���|�Z1�\;Pp�讀\���\��;g �"�x�`_�h��:���浊�R5"��w����{��d���b�<�`�b[{�e����� �r�A��R��ANL�q!%8@�E�t�2�gj #�I�DXPO�i��g��l��?Xz|�8��%Z�J�����0-��iRԾ��Ҍɺɦ�{S���f��� 
f'�
�2�	� P��7(�[��ߢ[
��.S�V[���D��	J�l��1I�F$� �K���>� ��Iڃ�b��r�\ٍ��kt[7���ڎy��JzF�$E�I�0!�����F����g�{�M���N�9
 /�^�6
��"��Sϟ!�P�@���H�Aa�_�!�����2sw.���k8�"8ay�}磣3�~ڦ�Y��/��f((�AP�>K[��=��޾({L}�-��K%@v�&�q��lK��ͷL��@/a��'ӝ��)6K���%:�iH�_5�l� oͥ�G���3k�;�m_Bي;��p�4'{��,W��	_K���p1Z�6��@�rՏ�͒v�Z��%;�L��C����43֐??(6\��3�32�=�V0�����Ї�����"1��b�Y�d�`p"�qF��uKWp����Վ��f��==�!��<�K�~�n.6� Y��yi,�r=q�#�9@���L�?���϶0�7�k��dKԠ4���m�eu������IKc��7�NB�T+�[dx�Y��&���:r��l��Iq.Fv5�a(}@����6���VP�+��b��\��:I�$Z^�D�%���u՟��&�ۖ�S&�,�b2\$c�jjg�ʌ��D^m���w���M�|�M������ϝ/9�]���
=#ԝ`�)w�J�8�o��l�����Qǥ.���H�/�\�u]1���,�po�q�[(���X5����H��,�$� ]X�!�A�;Ǹ�s�	�R�3��i�.wQ+�N�����@Pqg^�㜎��l��"��?s-�"b&��a�g��
��`!o$��x��~�%3	T�y�l0��\<�F"Kv��BޫTź7I��\ؗ[�k��Y4)�9N#:/3��-^�i��0�ȑ�ea���uc��=}8lD �ڮ�ʾ
J���. ��\���>���w�A {��,S  ͖�tW_2yO�ǼDY�IH�s,�XI=��=�k7'L�IəT�vIἼ8� t����q�m��~�:l���@�O�������N����`x�lrKn��+��D��	2��l����#Ђ5�+��=�h��."n�'������?��-�S�����R�v�S�|P`������D��%��pK���b�'���s�Vzm�
```

---

## File: `public/TrustedBy/comedycentral.avif`

**Size:** 1995 bytes

```
   ftypavif    mif1avifmiaf   �meta       !hdlr        pict                pitm        "iloc    D@       �       �   #iinf        infe      av01    Viprp   8ipco   av1C�     ispe      @  @   pixi       ipma        �  �mdat 
	8"'���i2�� �@�^�P����w��n ���@����&_�NHr���^���<�z��k )'I�����J0HQbO7�:3(�("�C�-U�����Kﱕ݈���}�
��!�5L�'-�dSc6+�Ѕ7~ E��Q�tT��6��C�B��;B-��j��N�o��A�9Bk���y�!��3Ɔ�RR�޴ߧ/�b�g���x��E��X%�~��o��2բﶥd�Җ3��P�� Q�ҧ���+� ��߹߷��/|�Ҫ�A���t`?�i�j���q�y�W��7̸�����]��I �i�#���$��Qh�!�Թ�AH<C���(�X�4��Y�0�7'9g��q�"Y�����l@L��|?c����{H�:��)9=��w4G,�^a>�:Y)wо`R�W�?�#��\�R��"��co�� %8��2�O)M)=��(лrp��r,E	�W��m<$�̬�I�/�9a�#�@���fT���h�(�����=q�ȸ�UH��V��zqT������󺳓p]oȰWB�+BR���jt��/xB��'�hx�H�1�4�B7o\��DF�%>���;i���N*q��%�[[5b��%�r�%��o��P"��M@���`i<��v�u�?�"��cݰh���F�ia�=v��M��х$�Xr0��c��|B�t��:�g�!L݉��k9�7/7���
��n��	-�0x=�y�ZifP��]��b�s���H�;(�n��?���V�)#V�*0������Z��@�WY�,�.0�
��*T�IEo8{�߹w�w��P�n��k�ױ����y5�-��H�� N�Eq&��ۡ�4�\�q�(��3,�� �@��YK����6ɬ���#R���~�s!�4NK�R5�$H�1�&�쯛-�v1{�r�^�+tbcW1������%J�� q�\��N�)�<�3� f��0�bXlk�0��ܙ]J�Q��D���^P��*� S��$iΠa�ӥۊ��Еjhz�t�ڇ�w��4�"nw��p�6(Z�?���v�ʲh$+��drC�����q*�O�z��1��\*fmH^I_���V�|KV��1ai4��!��pw�
���$���Cѷ������9�r��L
Zָ�'�i�1��`ʪ�L���:4FRRM���[@��&�me[[�o�WEe��{f@�*�&��qƬ+�s��z��9T�=Ac�/���������5��Ia*;�s���X�<Ծ�	�n1�.C�_'iQF��*�=�&���)��	(`�A3��>xz�ue�@ܸ����JP�(�����Gl/;�~*���/�m�Ib&�ה����\2�c��0�X��
�9�f_G� �� 
��p��a��2�]�Xɨ�9L��۷�a���-!��\fVY_ S���#AmK@f�)������j���l,_�ŀ�T��쟸�������B�Ŗ�MB���O��S�#�x�t7�{r	� ��{�o�I�ֈ`��7H�{菬�>�#���k[~��U0��o�vñN�e�I�&�����5e�����'X.��"8�WzY��)�C�`��銡���8��I)8<ꔿ\����K��2x��;O�]yd=�<[ViYn2�}��� ��)��	x�qR�6��Z6�!x���%��mC\����=�Se_�2���_�{���\l�W�B�L���o��cg�$x�q]���
```

---

## File: `public/TrustedBy/funkynutmeg.avif`

**Size:** 6018 bytes

```
   ftypavif    mif1avifmiaf   �meta       !hdlr        pict                pitm        "iloc    D@       �       �   #iinf        infe      av01    Viprp   8ipco   av1C�     ispe             pixi       ipma        �  �mdat 
	8���@CA�2�,� �@���� Y���I� �����m|T"Ȼ����g;�h�b�x<� L+kZ�B�,�f뫞�5�������k�]Iؒ�{{�ܤ�k1D#A��]�(�Ң���[P̠�S!��J��hlc��@��^���h�u�w(U��)��6=Y�Ķv�O���&Tڦ�8��9aue����S��ֿ��:-���>m����/x�9G�Y�u"����(���)��!9��J��"c���k;|�ź?�h(�;��8[3�&�'Kc�3Tς������BE�N2�ZK}����	]^Rt�����־�(�(��w�j������=��y�06�J�Z%\]�Pb����#T�9%5�~�f��������3��Ƃ`����p�����bӯL�2�	D�ҸK�X�p��4o'r�v�k�޿�s��5uڊ��*l^d�(4l5+��44��hS�v"C76+	���_�{8��I�;+a^Z@����V�^����^]av�r��C�>L��`�u�Ų�,m���9��q�Ĵ<}�H6����ˇLw��2�?��l=w]
�q^m�� �����x�C�/0�#**/Q:�]�R>@�P�/�ʻ�K��q(�gz9�V��Iv 7?�\�0]GUB�Ͷ��W|�Kfş������#�Ϻ8�۰�zF�l�5̤��î�X��Вk�	��kB�HW��%/=�z�]����$-iT�i�����L}z0�约}Jr�Dӻ~�\�LeN�C��&��!�v�z���a�M�~#���b�
���7�6�fi I��B�r�I�ӿ�M*�1�=�; ���4t�H��XDgn��|`�8	�*���E&Qȉ�k�d��(���|����'��7t'�N��突��4#��ڋ���_�rce�p�6�^�f���s�l����=��j�ò��M�,ehu�-�߷��� ڻaA�������� ����1����uN�¢�X�T�y�6�	�3���wQ��0��l��PQ ��9U!�����/%��	wۏ���o/c�G�'�y܉9!O��S*��5�3#��������.F���������D�N翑����O �ܳ��u>���D(t��c=o�i�#<R^�M:n�ؒ��=�~��`Y���Y_�v���&z��$���w
�=������R�°���3��YO�a۟Ϋ��R�b��{�\وm��:"fz��p;�9�0z���2G�#�3�x����H*��k�H�sFhK�G���]����	>5�6�4 �;�5a�v�u�M�)�3� �3>��n2�t�]O����BzG����#���Ej��NY��w���z#�i$M�1�;'��Ap,Rp��\58�r�L!��������g^�+%�LΧmW��Ԝ����_X�x|��V����Jо�e�a�C�s}s��D� �@$Y��ԯ��t�1d9�&͢8�F���Ρ"&��w��?H ����6���T(k���Lw_�v�pJC���ѺG�8��eZIn==P<|�Ұ���֪�I� �dﳽ�ޫ�(d�E��lp(��d1'��&XI�f�����71jԢ�`z�=�#�E�X�=r乑^΋M*��ay���]t�!&e�~<��ʉ�HKߡ-J��@!�`��u��u�=e���7
�\���]Skp�>��D�{]�Y�^A�.�bϥ���F�h�!��5}$f͜V��\��܁l|����/�eƃ!�	Sgګ�J跀���"��z���G����
pD�P(o����[v�3"��C?��nL�~���q�� ��VY��8�s;6��=�X�cd�3�e�����k�l�oӷ=�����X��)u0�3�ި-�SM2��ZC�%4P�Urˏ4�olt�x5	�0��Z,��ۄ��_���~�5�/Oa4�ζ�9�`��|FGa7}@��J�۹1�C��W��Q����Rb�[�E��]lq�0L��(�_���ebI`N�Ҩ�̑]1��7ؚauczv��$�#���:�g���:2f��d��f�2ލ0���ۡ�$W#��쾑$�?�w��C���J�V�Z0^�۵�4�D�I�������K��G��mg�onX%����C�e��Ed�3Z��)-�M�}�W����[�KE��B�o���*דw_��6��|{��U���x���'
�9��t��B�Bמ���䎗��b�s&%���s��ث�'qe����.��M%���i��/v�W1=<��{���U�#�;M8�_9����"F�!�``��~��ޢ:�f�b��i�¢~�0l��Hœ���܇�ޗRy�-����v�.ױ3��P'՟A�84�iIRK؏8<s?�W�>�t��J�v��u�����I�td����%#Ʂs�r�YΠË0�賕{�tQN��Ԧ���8�n]\`�J��eo�;D�0���D�$�q��r򺢗�bG�ş�� �.9�h�|oG/�=_f�\��O�^�W�=�0)+��ЯA��<��7f������e�dԢ�\<�в�b�	�a�
��2Z�Ίl�g�9�o�r��K&:5I���tt��~r�����J�c�����d �9n�&
���r��CNk\l�Ôvz�e~�P�g�&P�G�Ic��]yۖ���ҩ���=�q��+q)G}nĆ�G�'���P >wh�9���d�� �|cl��xBn�_�b���ok~����Ծ��ˬ1!���>a\o��E	��cUN�-�n,C\^�&P��7�����3���
Ì*��X	���8�+_�DD������E�o5R��:�$#��թD�C��6!`qLC8���d��#��͇�f���D�ܭ�����8+���y2'��w;L����Ђ�5Kv��n��+�b���ΖS��~B�N�e�O[�����<��*�o��M�P�m�P�Z���U�"Ԥ�,RBK֛�'@�W�k�{E%4��~�"*{~ح�j�w�a����N�������ƌ�2��
���7��8�{�q,��r�ǋb��e5�a�[�`��������^�ͧ�O2��ک9�#Q�K��L�O��`��>í6��5���p	��]�ۤ)�6r���l�f����jkCi8��i�&�sFӲ0��D_�,�($F����hY���������&DP���P�r�[�`y;=Bf�p��Dsn��<)sU�;Ë.� V8�:�:L��9���븀t?߽��Ö>H��25R/5K-�I1����Ck�Vϡ�%�����	��z��ؕ۳tf���Xl�U�e�%��ζmPv�Eu��7h����+ګ��唍]��&mݎ:�ʕD]�֣l9S�y�� �ʸx�
�.J포�������.��	�d�~���]I9u!~����A��W�M�� F��0cAa0��kG�GG��'�,�;f�����B����q��l�8��7�S�Y'�ƹؑ-��q�e8�Pp�*T�R:�
�.�Rt${���T�
�LڵgOC�o�ዼDk5��.�/q�(��4S�0ߙ
ΪI�0���.��8mfV���9|a�\�O�q��WϖK����ق׈�N��
�����_]/�#����CIWE�N}v��( É��<��,�S���9�}�E��#2����q8��h�������/5�Hrl2�V;��|������"�0r��+A�B�\=���@NvJ%@ۼ(�7�%WyU�B�X@��5�0�}n�#��N����z�����5P��a ���n�n>�)�pZ:�����|���9_	��u���T<J�x���U
�]�n�b֕�1�D# l/d��CBv\��&j4�9��p53�~"�|���bJ�~z�3�I;�_�&VUЇ+#!?��0�J�טɯ��_#*���@uح�J�i��e$NGB=u��>#����c(V�C���3���o����o���ٶ�I`�*y���z(�ؾ���0����Bإ���B��t����ɻ�, 0�`�j��F�-=������P���� �����k�/S��
��������p���FK�U�vμ�����rL�9�_��:cT/'ӆ�h�}�0�ݣ��Im���LEԕ6��"�Gz�����4l�#�X�DmN��>JXa����̽�l�T�fv�W$�߆����jul�W��.�۬MIN�$�>u�51�<-q�S08���Z��y�v���$/�ȱ(���A8(n�o����7���=���O����3b��	0l���U��!�8#�!�<�jI�5;LUerM<N�p�0FPC��'�_Ր�ą##k�j����uG�8F	oE}R���Ý�Q�^�M��l��Ԩ�?��ܔ+wҺ;��|�(�H��w�!�/��� KtpOȼ�\䀶�$h�0k:ŉ�C}������E����`U-
��uеJ֮S�*qг�ʌ�\��'=+ND�R�������gQ��]�p�8$��^&/�F1n��m���6��V���E>5	&�����9����,Ǯ��ZD�$��4��6�^�7�1�/��U�p�bnϫ�� 7�Wu��q��7��>t}�߀ب��EĊ��<%%d��W�0��-�M�D�F�ry��ޒUHp����[�)�ki� ~`<N	{Ȼr�G��&,%�2��%�̎��]��c3��us@Ƅ_?9]��ц�&�\��GD�u��hQ-s�R�[�\��V�W1�6�p-CD���[t��a!6���cɅP�;�x�ssLH�k6�`ؘ
���>U������?���ݱ;����ȕCN�ۃ],�pJ�,˥�sf����0�����|B1`4�� �64i'�7���Ncצy�ծ+"$�KQ&�9��j�*�����ׄ;a�W�g�M���tʑ� ��[�v
���^�߉�[	Aux[}D$p��4�MdB$�N7�^2X�1�(a&�t��k��L+	�/��;\�����b�4�
���
w��p����0���d�_��r�v0R��i�wX�� (����2-0�^� ��V�6̴O�-ZK�+�+C��F�;Zb���X�^��w���K��cԒ%r�E�/i\�I#��t���%�bp����,��NHއ>�L�=�<=8��č\Ŝ��ۆ��e����e�D���6�1P�n�^[�����\�,�)mS?)����.u�q/)��8F�B�*���!�Z2�?_麭 "�PO'<�Kk�R��y.g.�*Kp�Pe 1�ө�V(P'3?�mr�zv#?��Ϯ��:��E�}eDҕ¥�/��}+�Q�l�mt������Hq���N�KsÚ��b,cG�DN��^�IJ�K�G@To��	~�i�Rw-��S�*�����3.7ۿ�Rg@�Q�M<S�(@�QN*�w˧�T%�ܬ0���?Ѣ��igi冱��G��P��4H��8Ë4�����Q�L�@�:=��9�n9�����&�s�MhA���G����>ݎ��w��Z���z��������v5/�#�0��Q�5�a�2Z�����a�1@��2�i�O�ڞF
n���lf��e#1f�w����~{IE�n�=�_f�g��W�DCl�'��X�8���&����p7�{�E�p嫠��S�:FA��R�� �o��W���xGSi�i�6עw��=�����Va%R�6�2�i������
```

---

## File: `public/TrustedBy/hbo.avif`

**Size:** 1184 bytes

```
   ftypavif    mif1avifmiaf   �meta       !hdlr        pict                pitm        "iloc    D@       �       �   #iinf        infe      av01    Viprp   8ipco   av1C�     ispe             pixi       ipma        �  �mdat 
	8���@CA�2�� �@�^�²�Xe�����9�v��%jP�4J:�~q��������D�ѫ}W|�[u�$��Jr�O�\�"�=��7�Z��>U(+ٗ���֞�y(��P����g5z��uˁ�e�HSr��Z
Ҡ�ϾM O��A�4I�6��[
�'Df��g	��R�o>^?��m���E)B�{n�M�X�V�TI�K_H���	��]׻�*�Қ6Z����'gwT�J�Z�7�Jii`/�Ѐ�����Up���e^ݜ$�ke�s�~J���t���Zj�u��M���ɞ��Ou_@�6����r�$��d�gS�4�*uM� e�����T�*}B{����ͺ���q���R���*��Sz�S�b�ֶ��C��kh�oz��5�~��i��r\m���&���s�$�'����A��t/&��i/��*�W'��q�S�v���?��s����n��AP3���?J�S�hiSIB�V���6V�4v�~�:��?ʐ	��=���.�{�c�
ϵ��Eh=������sXN*�gll'�zˇ�ٖ��vJ_F J֝6��6*��LI�S���l������n���]	N_�&.�/n����~2E���]kS3ю����&�b�N���F�p ȵ�1���BWP|� �~M:�.��-�6����gLO���c׀�P3�;"Y��S�Ng
r��ϯ��>��3F"h��T�-�N��ӊՀ��\��i ̸�y	߉�-��)�\-����ld�	.��s�@��tq������5�R�d\)*9+vS���0��w����ݘ�u��f�����M["�3M�ֳ�ʤ�GM5]�T����,��� 
���dY }}F=%��*�������K���ͪ�}S �# �;׋��F�w����$�҂
```

---

## File: `public/TrustedBy/laclippers.avif`

**Size:** 2213 bytes

```
   ftypavif    mif1avifmiaf   �meta       !hdlr        pict                pitm        "iloc    D@       �       �   #iinf        infe      av01    Viprp   8ipco   av1C�     ispe             pixi       ipma        �  �mdat 
	8���@CA�2�� �@�^��Gʢ-/�f�Y��Z��w)�̌�L[=!��!�����1�q�GG��8��\��F(��
���m�+��;}�c(��je��,`��)�Kv�m�a*U���pG�6r����U<u�����\FT�aP��s+    *j�ƿ������k���q��ɡ �~�҂Pʤ.���t�$�=����;5�?f���%8�0�/q�9Pr����$��{��;�J4�d9]G\qC�
+d���O5�9g3!�u�}��b����<����p�|����j�.���,��N$��c8ãA�4�?�Pͩ�+�u1�z۞���/݉h}g/���K��hۦ}؜��a��㬔3�,K	�<�s������&�� W@x��ʯ�Kr�i��kˋ�W���q*O��F������i�WB�
�NvF�2L�mVP~�)�N�Ȭ���h3�䱏)7?��
Ⱥ/5O���2#���Ds�����	QM���)ެ�f�S���Z�:Q� �zEDU�		�D^��H0`x��?y�:x���Y��>�-4�ˉ;_1bR�~��S4)���ϗާlEXƃv���!�Ƿs��4[�c��9�̏ڄ�@�P�gDϐL�8=Fn��[��ts���=҈Y `]<usb���P���∖�L��]`�aدji>�����Z��߾Q�z��?�f�#5���Gj�e�l�z���Y� �A�"z�Bu���y��Gv��@��=�Uf��x�tf�tq�Iq�Q�r0�3��l˸ckv�����ĮT���Ѿ���i[+v� �1�=�F�6����j�t�ر���ֆ��2.�����d	����f Uȳ�Im����:�]su�+�Q�G{�#��S�Τ�Z�B�B��}���F�
���q��^9OX�<%�j��� ��	����Y{�T��4T���](�F.�
8���Dܺ ��?�-�;;���䙉8�H�f�?����l.��s=��.�t}��΍X���ϗ�羜Ѕ�n��m��A�2�G��y�����~G�j~�!���b�)�B���Ӊ<x;	�~��lL3��ㆶ��3p߰�݀O^k9���(ׄ5��QY5x��O�b�'�j��7pMP�mY��X�3YC��wD#[�UÅ���7 �?�U^m�7�9�s0a���[ � \�&��x�����x�Sln?�;M?��C�R��_�S����,`/6G�0bFau1����r��&��Z����	#��%�)�Q��az���|~
l�Vj"c�ojR�"�°�����ҦP:��� dUY=�i,�襰k��Rc�?���ngô�Tc�k��Ýhh�n`����%��6�H��>���6�b���šT�����>�c�^����Pc��iz�Sӈ)2�āi'����.�j�W{��r$;������ihv��`�eZ�f����R4y�U�?h��p���2k/�h31z37�����NW4��_3�y�I���A�����M��8�~d���'�
q��*wGhPm��t����+Ȥsµ5_)�A�ԁq��_p�d�y�ȟ�M�{��;PG�]՛��8��\�d����C����;��,���h%f6���?�����X!��p� ������,�����o��)�����%!Bv1�w<�U�_l$�ʿ�(<U8�߯�*��r�����e����k'�v±F�j���V"�G�����AԖ��^�N"W�2�����~8_f#�zd����{�<��G� �E��;��@ԕ3��M�i������z�+ Mု
B���1�b��}��V%��*X�9�_��0jI��~cGO�jQ��\�:��P�+^����Ĳ�q�/p���5e� �y�[�k >C���A����ff���
```

---

## File: `public/TrustedBy/pharrell.avif`

**Size:** 5027 bytes

```
   ftypavif    mif1avifmiaf   �meta       !hdlr        pict                pitm        "iloc    D@       �       �   #iinf        infe      av01    Viprp   8ipco   av1C�     ispe             pixi       ipma        �  �mdat 
	8���@CA�2�%Dp � P�z������t\�L^a��I4]��w�o�tL`P���GEզ�}F��|)�5<�K;�b���|6���z﯂���&,(S(�������P��ǉ����(nm7�dgW]e@N���yA��W��.Iד�J�؊��# �����n�y�7VI� =�P��O=�wHF���-�CVC4,K�,Q���'�(�!;���ܝ~�;�z�P�e8TɠV��nґ3EB��R_��s�5�P�K�[��Q��F�{k^L4��p[��2lQ��8���x��?�opu�=�0(�*�5VP��d&�x�Z���Z,|�O�S��=�,'�REP+}�Z�<�7��Gd�P>iEP���ϘAՀq���#x��\;k�>���*"$c�����hv��H�.�G!��ƥ�ܙ̢�(�w6��絫����Kvc0S�-���	��!��Fq���^�Bx���݀\D^U-��5L9�e����8�S,���c�*r�;��Ѡ�\�t!n>F�F���KZ\p'��q]��TOX����������[3ٽ��|M�,H�b�CM���[Ǉ.
b�ϐ~�Z���C5Nk�Q2 T��(<c�Pv>����𠡓2�)@�z^t�A��������ϐz;U�.+����
�G8="X�C�n�m�����+�4�������J�4条�pD�dDC;p�~��
�z�5Գ�T�BR_G���2�w;7t[��!�\I;�������m���|���$�"2�z���`�
ofT1�7`qtO����;���vy�ּP�ƾ�n�iJ�2�.O7o����V#S{�
�v��
;���	`��o�CS
��^�+9�쎖{��,�hQ;AZK�ދg�(������LO���Xc5��[ ;�K\��.��A�tf샇�w���J���<�$*��}��W :C�R�����i_��W��\��,�+5{ѧ�H�*U���"���_Z�������d+��8�X�[|џ���&i��������${��ri����³�j|�����?�����V+�c$_G�'Yu�I�/�D�L��'T�v�� �?ۅ���EBw�D̀x&�]��YvYvѧ�]�ғ<"Z�d�R�~Y�Dm�wޞe��qSؗ�p��@ߓ2�m�~1��m/�����%��'c��^ܻ �JN�&AR��FG�S|[������{�[r�8Ɵ�	C-��'�"�e����l ׋�f�_/��`�i�Ab�F5�}G�S@�
�G#�\G�PS���P%nIك�i1�A�}�����ޟ��z>�uj͊G�v����V�&zK��=Sڪ4�<>'A(��v�TND���j�V-&�]#�p��5��{�ي�u�f�F!��;�[��o��0�Ž,J�w�o�n���������sPE%c�����Ҥ�gvF�F�yZ�H��uk��x�yK<%���Tmg��L��F9�<ԎHW.�~h��w�#V���6.)�23 �zqtfֳ�,�d���v�?iN3��Y�q|��ȝ�
s+�l��+1��w"6�ڃH[u��6J'���k���3���j� �)��IR�*���^:�N�_�7e�-�hbUlj1x6UP6M������y�ݕ�5�^���C��c"E�+;��ᓐ��:`C��u"^��Z������U�I���y��c=������'���on}����ykϏ�ݵ�F��*���R1=���kmOAcv�ȭ21�-)N���߂�@vf�N���W�L� Np���	�5.���j������C�����R���]zrT�[�T��^��zS郣�;����(�S-���}��6�y�W�.���J��Ν�qt'�L����i-o��\���������P�ԏM)P��v��8�����Q�d:`�$��H�f�K{H���r��N+��zB7
O_Z`I�<��������?���QF���U��^�C���^}�7p���SFv��Y�\���W
*Y_Qg��9�!#����YR�A�>Y���-{�����zO�MN����b�O��=w.)t�ta��������QހmN�\Wϑ��(���!�_>E���:�Y9lWl����;l��|���ݳ{�%�q�����x���ƺ	S'4�*���z�Qx��,�'��Ą/6�;��FGEb�BsM��r�{�ZJs��p��%�{
� ��]�"h�窤~B�02$hM��5]�!�|3zX�+��+lF��nLu�7JnxU����`��1E�����Y�_|�"T�%	g�
�,��n;��ȸ���W�w	�n��$8	у1�l-�݄!�x�4
�����f��՞� �����G-��W��ƅ�(���;�әf����q���x�����=��=d��?c]�R���d�l�W�a�j������1l�0Vx����q`�U�]J�1�t%õ�7�~g��;�6��¨�d�v� ��G�'IT���0	+�Ԃn���j��z8���ߧט�'�S����a��ʭ�J�S����9����*��t�? N]f��)��R���a��}���z`�D$?�gy*)k�%:֖͢�&�!�2!A�I�K�A�z����;���N{0�����B�J�R�=��P�;��P�{]݇.���N�hXFW�w]���>n�i��FO�:築q]A�*�U�1��B���#sMڃ�Lm����b�d�\�]S�'CPD��nvI����o�`�<s7n{^�`ѾBA���s��>F���K�'�Z4����������b�/J�,��㎢N%��V<�c<�i2��zRzڤ�Gb�RU+5�ľ�}"���'D
Ԃ���ݾ�)�!�,���۞�]lˇr�uI�6��vr�vڈ�-mP�
#��b��c��A6�{��5s�@S5'3�a�|��#�%���:3_,�����n|��v#A�����ӒB�tKg��F�ˑ,�B4��m]�f�&������Je�3�S��}� �ٌ�9ē�l��9q�#z;r�xu ��,Z�,a-���mxX�PJ|BB<�J��ו�f�\��\�"�	Δĕ!�/ֹ�5�-�@`�P)����}!��WL!���̜�<r�I;�#L�0?�t��\����-��0�	�j����P� o�w8Ζ���_���P���}ۗ4���g�-�Y�Q9j-Ϯ����$��l �!G4Fq�w�BF���+>�N�����]jbҺ�?�;�WK*�]zZ����r�o��w�h=�BV�*ʢ�ޟ����h���U��j/d�R����m�#Àf�ڠ��ݳaV�d"=�_J-x�.J��)��#�He�p��,�}����w:k�ڡ@�aI�`���W�6Zc"0��{��/ye
�=���~l]�5�Yh�w�$�E/n�&����C�#�*I�"�[�дl�.�vw�c�r���.��;잃��N��~>)5{�������5���E�a�5�"zӾZ�[��h�c���3��:�؈�#$�x�����٢�8�ը�ҍ`U�4`&�b����|UaXƓ���L|zz���$t��.�+��s�nRA���bH�(��\��+cd�;���p��d��C�N�`ۭkV�x�Ʉ�m�uJ�)�癟��H�$��m �\{|O�4��H=[e���:��q�����ܔ��6����t}!�Lﳿ�n�G}���<\�J�zP1����Z9�S?9�(���1*��y�a	�-���X�:���~U7��O�e%y����s�ɶWA��@\VP1��~���4 �V�a�+�%I�L^9��T�F����l<^o���T~��-�$nfthBˬ�k��R�  \^�ψ��;����/����?�2�ul�p����?YK1�_�m���GOs(l������K/��{&��R��@�ߦ�����`3#�Ʀ=�u��.ñCCe7�؈�w1�!��WSb��{7W�<�s�]j�L��J;�5�jx$$]�D 	�o�r��t�ZC���O8�2y����^��WZo:i�4�UHv�=b�DUB�	��7oIJAp��&uP���kO�#1:u-k�h�Uw)��������3�ڏR�r���a���ǹ��<�,�׵ԴW0����T�h���M��qH�b[���n"����b'N�j��J��k�����?�`Ӓ8���q��:ϑ�И��+��������S�іQ&��ez@H�=�ɉ�spľ�.�~@��ӿ�6^�i�����!�����˼m����YAU��]��km%L��S��e��Ў�+�V��tp��5���Z5�XGp�37�_9�B&��#V7�E���B)��܎�M*۾󉞸Sy���!�O�6�Юg���l����ϟ� ִ����%�GC�͡�8���z+�� 9Qט*Z��-j����S�5��#�r�/�<���a��ޯ���v��f*����m�,bpˋ]?��Հ%�0Qe/��r��K���ʶ�V!Q��˛ lW��O'�bр�a�vH'߹N���{sG=����{�b���D-*q��,�tu��M��G�lUCW3i�Q�[1�&��~��w�xڝ(0��"�F"�mݷ����QeG��@|P��R�Jl�`��!ɖ���C�W�L[AטM� T<BjӔ`�D�ŖP�u�`�3���"�3H����g��!n�u�wU�ڼ�w�J�{�z!��c��߸�������R�x��6��@�7u�
```

---

## File: `public/TrustedBy/selenagomez.avif`

**Size:** 4191 bytes

```
   ftypavif    mif1avifmiaf   �meta       !hdlr        pict                pitm        "iloc    D@       �       e   #iinf        infe      av01    Viprp   8ipco   av1C�     ispe             pixi       ipma        �  mmdat 
	8���@CA�2�Dp � P�g`��՘%P�¾�5P�V+��m���
eP��u�����E���lJ�c��$6�so}�/�J�j�&�7&�p���sU{�o.ǭ݅J�	�H�����,C��� ���s8v4�vZ� ��oI+�֏ه ��IK
�9��m��μx��D��(#x!��_e`�Mj�	�WTg�B�o\���/ͦ2Yp2����"^a��\�������s@�4kH�������������]�� mgc�G�n$))��U��E��CU^8sY�j��]T�%��'5oeYq|�n��F�]�ȏgp:e�.�	�p^3��u�zSLH���1q�V.���**DL�K���gu�B�V����h���/��X�t]�VG��qBvJ���*��`��ӣw迆e8�"j�X�����79 ���;>�g���lS��o��p��ydDX����t�ke�����l�9�iu�"��|����W��|�$-���~�����b�T���ӓe����S�{���Vm�^�kp�a�<�T�]I�����W�Mq�1,^b��p�"Gr5�J�<�ix�[Kv{���w���}$4H�	`3�^�kwKs��B|�ݟ}�zz,����-���ZI�S��G�.);U������,t��gZL����a�c�%�xDk��9K��&�tPZ#W�^ܐo��P�����B,T�K�WEai�w��q�6��M��&,�T��
���p߯`o��9��~��L��T3��VSygF��|����M"��ݺk��pL�|v���t>�Rh���j��'U��ˀ���*�:�j�B�|�_؜t��U
V�������#b����^o�P�O�_+��ko|��&G���Y���7�6�NR������ۇ��f�%�$�	8!��raA����*�ˀW�����+m&�z��[��;��hpws&�
�k�YZ�F�1<4Ca2O��X�o�s�m_L��*�տ�������L��ʟ���%
\I�0�A�4zZ���w�h���br��t���)����V4#$�G��N��T=U��j�'xtX�!�U|�`�J0$�V��W�Mn���{7U����7嗕��h勢���Ý��$��pVn�+*A�n���Ō�}Y��Jk�*B�{;���Djɾ�B���S�Px���7���X�%.ރ�DN��r�t�U��0X�,�	�Ovx�ѡ���v�S�pI3��xۑ/.24���;r�JY�Y�꒫JD�,�"F�#�.!?�|���2S�-����X����-�N���I���Y�Nf@:�٧�4g*KJ�:3) &�.*6�mQ��nऒP����k���,S��p�pn���eD�n�,�.�J��~��I�h|c)�C�>�Ҥأ�����K��RX�;��+�1Ņ!�M��������2���܇R��/��~�z��Q>������M#�+�zr_�*4�-+�0{c���`r;�ŤS��yqKw6�=$w�?1�A�!�Hn�S������0��,�xL�D������d+_��{e<B���B����;��ʐ��˖���E�*�4�`��CJ��y��/&A����_�r����^��ue�
߽$�ͼ�<�:1����Wv}�:��"�F�4��j��WQ3�I��z/�A�V�i����S���Ob�b�3� ˂n% 0]qY��*^kr����#7�WN���b���<��"\k��1:�*��ӂ��Q܅�I�ır���D7��m$�f�&N���4�E삍�D���u���+��6i�^P��2Hxx6�՞ء`��2�A7UBN;�:l�-Bgz��O�h�o=~�5�F��BGmY���Dͫ@�<�J�
�ڌ�QѸH�Ṳ�d9��~���[��S���2�f�� a)��8�*6.M������k��4}x!k�H�����"�F��������e��U�����0by�ha|ٳ�V�4V��c��m�����I��v���'l
�f���C�_)j�`<�9���	�D1���V����R�$�=
��H$�.#<-E�)������h�t!�{"�z���z~u�50Z��vy�ץw�V2��@���~���S�&��[��.����V4B�Q�đ0���/���a��j�H�U�;�+���YQW�w�w�L�L.�Rc��w�/�V2�^�k�k�������@���,хš#��Fb;c���3���1ȡ�j�Sj:�P917�n�$��`'����D������\}_$�7�Q���?�����9>�\���\��YN�;�*}��Ů�����`�a�qP�{P/!`�IVՌ�Rm���7],~�)�7�+b� ���v�b��K|���H��da"\r��a����L�B��u�3��~.�����o��>�6�¦�i��n�̐cM3�;i��:]L6�?���_�g��e�*rؿ�-hIfW��L}}�EB�."�2�S�w���'3�kh��l�#��,L�}8���O�H���������"�jUb2�Fʸ�Kr���x���"q��o;{�Xk"�7���?B�E�����X�u�l�:�)[6���� L�i��L
B4	���2��(�W:�!�cu��!`N�M��&b	q�NL���� `Fu�f�Id^���
��e�_����Rܦ7Xz�C" p!���$+	�k��
�������i7+/3� �7��*R��nK~�8j����v\�]��ͯ^����������Y���ak�'s�r���gT�z�I��*�sQ�pWQ���{�Xu�O��\�8`Đ�?nk"|�������Z��T>L����W���m�N AO	B;�C�N��ҧt�gs�KL�LVwR5m?EQ��p7^����W"��;r�(�/���r=�E*�2G�٘W���^Z4i��{�N�P�W��$��b�
���1�򭱫i�y��5�Ԉʯc�n�}t:j{9uB/�'F��=��Xlm��9?�'>q_8���s�t"bck�F��E�A��zd�q�����c�JmԊ �h���ח8�5u�&��K�ܶ��p�N�y�����˻�g2��B��*�K��?mrd��"�A�K3��t����V��ő���{,'B��򐶒n���\�~<����<7{{�hZ��7�]pޱqK�Ҡ�)]�4�O�< �NR��;�E,|P״���J��|1�*g�[���^3��+MA=��Ţ�H��uL���uW`T]YޕY���T#C��D�@�[lp|S_vt���B��[���T������h�-�<��?I��S|����g�]x���!a�'��8o�xV��@nQ��9�,%��,���#�
C!�@�,nF�0S���Z��,��M�k�.*~�p�>��/�,'��g��UW�t��z�z�M� �Za�i2���|�Qɕ��U������z&@B��:�W!-R��@�%���De�2W�ǥeOL���W�M��_A��$$�̃@��oH-�� �	K�W��ʵh�U
#���3B�K�bX����QE�@FZ��B��3�?��R=�g]c�b*�GO�y��1-�����4c�y~���p�_|U-+�vX��1C#�#�����7��U峽j��U �_
��
@M���e\U9�Jg=ѭ#�͞(ř�YfN����f���ή�Q,��i��s@=��7�W�m�!.g��y��2�ƥ�S�I�'��6�Ew}���>�,Ō�%§Oٟ,��2�ܟkxM;�aHJ������*O˄l{í&�.��-�Y�w���S��s��\*,����{8N@p�J^��@
```

---

## File: `public/TrustedBy/tonyhawk.avif`

**Size:** 8170 bytes

```
   ftypavif    mif1avifmiaf   �meta       !hdlr        pict                pitm        "iloc    D@       �       �   #iinf        infe      av01    Viprp   8ipco   av1C�     ispe      @  @   pixi       ipma        �  �mdat 
	8"'���i2�=� �@ȿ����P_�{.��)k�BUD�L�	:�WƖQ�#���E��6��<���I�Q��QX}�A�q��ݱ,���S���D���L�U)��P���	S�huG�?�N~�L�� �I��u���&������~���NK��ߣ�.���Ю�pƊy#ap�q%8��F�Q[z����gm�Sݝqr�ِ�B��D'��p�O�j�x��<�Y5��S��5:a���b:���D��>�X�O�� ��{&u;@��S"�mm:���ʫ�����V���i�nd��H1���G0�����}�`�9Q�nF�c���)u�<�$V<{g����
6$e�/��2!�rt�y�iŔ1��&hj|���A�w7̽��Kh.�m*l�0��s [�{�6� O!A�*"c�Ҭ���%|5���Q������7�t�MS�c��KF]ڌ�!��K���{�������$N�l��؈��!�j�<���8��s���rMv�0/��fwT9x�DN���fU�KU���p��$T�ui�O������qm�>}f�VH&Fg��?�T����� �����k���$�d
������E9�S�g�Dqw\��(��%m2�����e}0�G��]�Ǵ$����@�WRO�)���2����{��˭�?k���S�be(+�#y����t)�����<�,�	��M�7�dE���;����� f�.�f'F�,`�%�g����T�a\A�u4־��S=��"X./2����IC�;�p/^�)�l����wn���Vى!�Q7{�t�)ы�׌���M}��n}G"���)��i���/��)n��ӿ]���)r��0�/�����Vp��X=Js,j˟�k߃�'9Y;���n�ǰ��;�%	m�n���3Q�r����Va�"|��E�o�ͅSYem�}��\�C̩w_�h�a�*�A$H@��-,$�e��B��Vj`@#���7�hl����;D�Z��o�
�Ih:��M	��J'�S�>Fd�Y������G�(�s~~�����>��Ѐ'@� *�Wo$�D<|6J�c#Zb��1��Y�Q��nl{���UG���_���~��}[�����R÷�J��έ����J������q壵��$������Cޭ�т 8���.����I�A4�8�f��c���X�G�2+�=<}vʍݡg��#�"b&{e~���}ɡџ�zk��U?��}�oȽWI�=2��,J����gL�Z�q�d�x����������.�g�+m1�e�a�^o��Y��SU�$��@UO�nϒN���e�K,�XA��*$�"���@���>Ư���x�?K�T���lr,�V��WQ��is|>�Q���\s��]�@�e9 ���+!��j��\��6���R$s�<S~(��1-9��ZI�Lii��KPy�ЩA�@�V	�`z���v� 9�'V�Tn3?Kg����g�]���=c�!s���UP]����az�V�wv���ma'��{�3�_�
�z3��G��@V��H;s�U!���!V�)Mg�-a����]�\������\�]�Z�|ձ�Ig��������C���Z��Jl�̹��;'qP�-�s��*^U�y�ٻ�j2����3���Q�~3\�C[5םM��6�(��<*�ն�5�wg,վ=E����̰�E!�p����)�g��WK��	��W�0��Aeq,Iu2��-����$�^���}��B�Qʆ�%FF$�3~���u\ǡR}�_�;R�����M:%��
�{���$�?����&K�p�.�X�L�9�����D��6���$<���?E�A�tD��7�F�[k�|R��� M�J�S	*w��]�� ��k�!�셢v0��*Я�Ös������n�?EEM��5e`>$�eE�u���ss��u,m�K����H_�Wf��B�7~Z�?=�!J�� m-�kj�+�f�L7�7�򡵮�E���f%�m���.�9T�)r��4�8���(�Z��Lb���0�ˣܤ�*#5T��c%�;��H؊N�3��.75���m5q�0�H�,"����F�*�fQ���5/����i��ՆE�o��:�t:Z�������'QZWv��Q�~��p�j�[}�S����7��tټV}�ꈗ(WJX���j���t�05>TDhj��'�q�Ns���[-��j�G��K�E��9n���F$U�Y?}sζM�aȢYzK�������T?�dy����򣉜��Vj�ԧ��<�����UF��b\�ڵ�q��S&K�����g�d��I���M	�T�(����?;���i~����% ~8gr�?������PD���O�M�~^����0<1:Hz/:QO��u�*�]�1;E�����]p�f9"b~��K��ܝe��ZXI���EdU�W_̇��Jn�����B_�|��fz���0C�N���Z|3�����1��e|��16��/�ۧ5ĭ>r���*�ߵ��5�F�>�w5qR�{�I�-)?Sڱ�Qy�3���w�eT�q��+P�t��Z�iQ�G��3ڞ�>q#��X�:�I9{_/*b��tC�r#���"��n�qku�����X��3*�\����3OD>��5y�Ƣ�S���cu�{n��T�M�����4�񎢤BVv�a9��v��������:fe��C>�[$��8+��z�zL�� xg�@_��d�_s]��2��!�@��N;�ޛ<,4�o&dJ<'�=kt�p�F>Y��!%��%ɘ�p����XF��ь��!�t*"����!R�r+=7�y����U����n�9������⩣�b���^�v?c�C/]c�(h.vuY�Y���u��]��;�xs����������n�r@�����V�rn'}����7$1�)�2����&�Iδ�8�~Gl�B�����ҕSx*�nϫk�_m�)���<�d�+}�ڿ�{n��2�z��Ih�6"��Q���%�0�E��W=��ѽS�A�<wLW�]��A���C}J���Ff^�q��Zn�1DP��#�j0��ڄ'ux���v�'&�y�"���\���p����}��T�W����\)�-!g�Ei_����l+��^��O�L�2��4�n��דd�A��o-�%��Dς�m��Z�����	���ŋ��~ևJg�(X�6l�2�sM-؋U�>�E޸tp dvZ��v�&樕���YM�.�
��ڌ@�I���1n3�6�cX�Z�ԛ/�;��d��2�w3GM����_iF@2��%b �y�; �#)R�^]�j��ϑ�=�����I���v��W�'Ej�k��8���Ɏٜ��1(���P��{�������~&�<Sm޺wtz�&���+Z)q��q`�;��5����X�aa�;�\�/3�,(�FiI��ާi��Wv���jv�&]�=TrwTJc ���A�U\2�!ǘ� %��ǅMtPl��(G}�N�F6�I?�l73�r�,b���=��~r&��̢Q}��:	'��+>��<x�Vt"�dj�O�u��G��V��:�&�De�a8k�כ��hu��Nu�TP���	;���Q��1�k��0����XdhF���w���ו��y�ç��L�fp�������U�F�ٿ�B�$�#���Pg�?�nB3w�Vs��4t���)�[v_�bw$�_hC��H`�,�v��Wn+�܁f=�Z���ռ��JU��ݷIcd����4� !Y �0+A�a�h{���p��B��ʃ_Ae��+� lKbI�-wc\��N�~��~@-rc�M�$z�Ƹkش���*�dQ �>�r8[�҆������Ie*f��mj3���]�@BS9٧G���� 8�[Y3��q6
��yS� �E^G��t]�̸����I�����X�r��\�q J��<���q�s��@��a1���Barn������{k/"�k��:-���|�Ggi#���)+KzdV+�����\`�xBcp���j]�M�-ye�wj$\c���IU����Q�9�������됥�����|�'�B�>g�4s�H��L/W���m��|��S��R�3�}�����g�A�����2[��&�/	��ie��A$�U�!�zͦ>�k�)}�o�3s>6��!�ǝ�/~�O2y:3kc5��Y3���yt�{Hb�uo�COM-iY�6jf�:]�!^�����������"@G��٩�S��_`�*�/�΋�5Qd�O�x�S�I
.UXQ9C�P9_]�eCF6�9Ys������F���t�hI���'��pxY���߽�c{ 5�F�Ƭ/�o��@6���F1݊�!ZgY�,������hb����H��rwH���َ"Qչ9l��ɦ���W0Z����v3tV|�_��8�K�dP�9��]\K�b�c63�$��dk4�(���f�pi���mv'BO��8��[��[-�.�.ɑx3A���\�V�y���;Vf�mP���Q�qi�`�(��[��snѧQ �Z�T�,y��@�d��/9�YK�s�X�2��a�Wŗ�n�aۯ�H}xi����*��V�J 0Ox9�x����~��l	X�`��Q����[�oq���>�Epd� o�36?��WØ�KY��JB/Q�cD��u�k�x��4����S�d��dɸ����׺���bx��Z�@�t��htM��#U�|��}%]X�����k��ؗ�����O��g�v���~���a��
�4@�.9x�@��� ���^���U�C��N��h�dD�+ �t�#y��=?�����0n��<��w@�U�c�'e�Y�I��0���r\�	���%�wA��e��X��4;*J{�>����EN�X����	�_��9f�%/��8u��� acc��^'.�|� �������A#֩�s���Q�?�f��t�i�V/=c��W�"y�rzN�ǁ���A�o�AW�]�F�F�Ԟ������w(�u|�W�M0��:$�!oV8R�\|XI/{�j���"9�]��I�R��'��'5�_g�Rl$�	ٷľ-���]|D=
��W����H]Ռג ��,�#�V2P��Z�*�o�9�X�����{�[@��v��ذD�I���[�xtj욶
�G�����YW�����j��?�
�����]�������`~�;�����	Ѐ�>��(ё�����>ώ*�l<���¹-k�I�d�_	�h� ʈ�$�~�{PI͚2��
,+w�/�Y��_}Ƃg�X,��� ��1����>w�Y���IA�7�]*l�=��t����2
�o�rI��mM��M�lY:�v��c.G�J*�|�Qm��W ��B~��[�N��1$���X�T�`��~ۊ�O���Ǽ�M��!��A�����u�!�9�щ۰3��g�mh��;=p�氈���t��85���	�xyl���68�})�uϢ���x��MUԲ�BT���w��m��`�,B�=�l�%��V(i���c*͢�8De�_��MkL��:1H�����F�i?�����շ� J�R�w΀��\�@դT�G޸��������e}��m6ڂ�ʅ�j,�a�[��sE�>�?f����f�~�|V�VM��H�]��c�*����P��Q�!���W|��:�D�}L��/!P���Y`��}�|��n����-2�3K�!���d}i�t�e�ƚ?�MQO��v�*��m1�,�.a�R-�-�=���@>�3��|@}p�@�nV��������:�7	����b�-|N?��d���GC��U?����k*X��p��ςM�0��BB��������6m��]�	��H�c���z�4�o�q�8۝�TH[��������gԬp�%�����mt����->v+�oN�ն�:�ė�;�2�Ӏ�_HOx�ڮ�@n��pF�oUE�������7����f�>(E@�W���
��ll���?�*-��OZք`?���JԄ�P��r֐%q�{x�����1��qNx��:���s��h�C5��ۢ�|p�����V�N��V��Tأ�r�:�1�u�S��IGY���ۏ�+��`+�JKM8,��C�1�D�AQ�I�ɴ�߆̨<*&9�j�?����:TX���~*�]���T ��^X�u>506`���Ձj��;�p������qh/�k���k�HA7�����˞4�?h����īK�Î/1� ��%�#[�q��01V�V��6���8�&/XT|�2�tg'9�U��ռ��#{^���i��TN�"w0�!���<�Ca�{��_�:�%b��	��*��:�qք�]����������G����Q������� W���+�?�"Y+I��=��<�P:�>�����BG����WC����3ec�؏:������i�%&i il��!��%�E0��g�@W�^��2·J��!�ф�]e�ƺ�0p�q,ܜ���,CZ�$�٣G�=���6ô;�{�f����0ap+䵖�r�����-�'�y��������O��� w�J����V rC>��'G
���s{@�V�q�"��2#Z����J��_b�/7Y��g�u���d5#��rfV	{��{��39�NԜ�ݍ|��(l���8���SҠ�� ��ihz#��oļaiW���_˺Fw��Vi�Cf���[S��b8�aΗr��DJ�a��:<���='<,�dY]��e��KI�G�>e����߇n����m�r�^f]�}�H(���ЭƄ��a�K5R<�9t���~MP��#�X(��eQ]d�L˼�N0Ov������c�*�Dd�	��NY2F*�M��Rc�g�`%*ݾ�t��^��SOD�5=r~#x]�R�CF��H����ae\|��M}�TԳ/Vܲ��T!��[��ڗ(�^HO	�}�k�CRy-�T�<T��*D����[�J�ڵ�Wa:� p�����Š&��:���zL�0!}L]F�\���<�hh^w#(0r=#tC��1��>��_1�(�Ȫ�o}��*y�u���q��&�#�QI�]Y�'d�ɷ����)���	~n ��9��P��	����n��c��iw��H=��O����Mq�2C��B܄8�]Ҝ�E���
�0�� -:F��:���f[���3P<�qZn�]I����v���fs�����1,�*6ˈQ��9�:M�wtP��� �qq����C Bl�wx_��]���5]ð�=�Tɾ�����0�ڞ3�䭂\�?ĥ�ے8�;F��}��"e�3���NhW4���Z]���*��^�{5,>�&��U�z�[�|K��6Sz� �������V}V�`����B�b�o�����vr�9��>¸���ę�@�k1(��]�9���`.R�0�gE�}����?��U�k���$~�m.�n#������`)|;V��C�;y"sÊ�N�Q\�����wR�FohFd��"��&�'���aRы���2���1^�Ꙇk��U�n�:��h�ѱ̶�V�H4dl����lUu�Ƶ}���5F������Q�G�J��#<�ݞ �S�%�!�2XL�%i�8gO����f��5�S�NU#��+��0�����0�"@��y����X~�s��� ����H\E?)���h�,�&�%����%B��1$���n�2�ר��b&���<�^V/������܊�m	[�
```

---

## File: `README.md`

**Size:** 1450 bytes

```md
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

```

---

## File: `tsconfig.json`

**Size:** 666 bytes

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    ".next/dev/types/**/*.ts",
    "**/*.mts"
  ],
  "exclude": ["node_modules"]
}

```

---

## File: `types/navigation.ts`

**Size:** 634 bytes

```ts
export interface SocialIcon {
  platform: string;
  icon: string;
}

export interface Footer {
  title: string;
  description: string;
  socialIcons: SocialIcon[];
}

export interface Featured {
  sectionTitle: string;
  image: string;
  title: string;
  description: string;
  link: string;
}

export interface SubItem {
  title: string;
  description: string;
  link: string;
}

export interface Category {
  id: string;
  title: string;
  icon: string;

  subItems: SubItem[];

  footer?: Footer;

  featured: Featured;
}

export interface Menu {
  title: string;
  categories: Category[];
}
```
