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