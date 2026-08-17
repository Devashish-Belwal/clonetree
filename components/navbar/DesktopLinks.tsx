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