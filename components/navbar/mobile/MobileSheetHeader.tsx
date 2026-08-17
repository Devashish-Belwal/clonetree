"use client";

import Logo from "../Logo";

import { Button } from "@/components/ui/button";
import { SheetClose } from "@/components/ui/sheet";

import { X } from "lucide-react";

export default function MobileSheetHeader() {
    return (
        <header className="flex h-16 items-center justify-between border-b px-4">
            <Logo />

            <div className="flex items-center gap-2">
                <Button
                    variant="secondary"
                    size="sm"
                    className="rounded-full text-black"
                >
                    Log in
                </Button>

                <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full"
                >
                    Sign up free
                </Button>

                <SheetClose
                    render={
                        <Button
                            variant="secondary"
                            size="icon"
                            className="rounded-full text-black bg-chartreuse"
                        />
                    }
                >
                    <X className="size-5" />
                </SheetClose>
            </div>
        </header>
    );
}