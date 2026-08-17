import { Category } from "@/types/navigation";

export type OpenSection =
  | "products"
  | "learn"
  | null;

export interface MobileMenuState {
  openSection: OpenSection;
  activeCategory: Category | null;
}