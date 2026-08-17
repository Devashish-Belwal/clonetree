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