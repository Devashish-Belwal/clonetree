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