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