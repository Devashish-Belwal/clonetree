import { Category } from "@/types/navigation";
import Image from 'next/image'

interface FeaturedPanelProps {
  category: Category;
}

export default function FeaturedPanel({
  category,
}: FeaturedPanelProps) {
  const featured = category.featured;

  return (
    <div className="flex flex-col p-8">
      <p className="text-sm font-medium text-neutral-500">
        {featured.sectionTitle}
      </p>

      <div className="mt-4 h-52 rounded-2xl bg-neutral-200">
        <Image
          src={featured.image}
          width={640}
          height={328}
          alt=""
        />
      </div>

      <h2 className="mt-6 text-xl font-semibold pt-2">
        {featured.title}
      </h2>

      <p className="mt-3 text-sm leading-6 text-neutral-500">
        {featured.description}
      </p>

    </div>
  );
}