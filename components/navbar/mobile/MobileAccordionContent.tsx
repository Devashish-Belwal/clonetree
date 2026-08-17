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