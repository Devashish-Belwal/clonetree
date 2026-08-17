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
                      src="/footer/AppStore.svg"
                      alt=""
                      width={101}
                      height={26}
                      className="h-[26px] w-auto"
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
                      src="/footer/PlayStore.svg"
                      alt=""
                      width={101}
                      height={26}
                      className="h-[26px] w-auto"
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
                        src={social.svg}
                        alt={social.label}
                        width={50}
                        height={50}
                        className="h-7.5 w-auto"
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