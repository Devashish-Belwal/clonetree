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
