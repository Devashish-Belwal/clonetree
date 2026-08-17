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