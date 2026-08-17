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