import { Button } from "@/components/ui/button";

export default function DesktopActions() {
  return (
    <div className="hidden items-center gap-3 lg:flex">
      <Button
        variant="secondary"
        size="lg"
        className="rounded-md px-4 text-black"
      >
        Log in
      </Button>

      <Button
        variant="outline"
        size="lg"
        className="rounded-md px-4"
      >
        Sign up free
      </Button>
    </div>
  );
}