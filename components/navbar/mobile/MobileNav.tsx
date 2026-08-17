"use client";

import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import MobileSheetHeader from "./MobileSheetHeader";
import { useState } from "react";
import { Category } from "@/types/navigation";
import MobileMenu from "./MobileMenu";
import MobileCategoryScreen from "./MobileCategoryScreen";


export default function MobileNav() {

  const [openSection, setOpenSection] = useState<
    "products" | "learn" | null
  >(null);

  const [activeCategory, setActiveCategory] =
    useState<Category | null>(null);

  return (
    <Sheet>
      <div className="flex items-center gap-2 lg:hidden">
        <Button
          variant="secondary"
          size="lg"
          className="rounded-full text-black"
        >
          Log in
        </Button>

        <Button
          variant="outline"
          size="lg"
          className="rounded-full"
        >
          Sign up
        </Button>

        <SheetTrigger
          render={
            <Button
              variant="secondary"
              size="icon"
              className="rounded-full text-black"
            />
          }
        >
          <Menu className="size-5" />
        </SheetTrigger>
      </div>

      <SheetContent
        side="right"
        showCloseButton={false}
        className="
          w-screen!
          max-w-none!
          border-none
          rounded-none
          bg-white
          p-0
        "
      >
        <MobileSheetHeader />

        <main className="flex-1 overflow-y-auto text-black">
          {activeCategory ? (
            <MobileCategoryScreen
              category={activeCategory}
              onBack={() => setActiveCategory(null)}
            />
          ) : (
            <MobileMenu
              openSection={openSection}
              setOpenSection={setOpenSection}
              setActiveCategory={setActiveCategory}
            />
          )}
        </main>
      </SheetContent>
    </Sheet>
  );
}