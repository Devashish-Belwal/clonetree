import { Category } from "@/types/navigation";
import Image from 'next/image'

interface ContentPanelProps {
  category: Category;
  // className: string
}

export default function ContentPanel({
  category,
  // className
}: ContentPanelProps) {
  return (
    <div className="flex flex-col border-r p-8">
   {/* <div className={className + ' ' + "flex flex-col border-r p-8"}> */}
      <div className="flex flex-col gap-2">
        {category.subItems.map((item) => (
          <button
            key={item.title}
            className="
              group
              flex
              flex-col
              text-left
              rounded-2xl
              py-3
              px-4
              transition-all
              duration-200
              hover:bg-neutral-100
            "
          >

            <h3 className="font-semibold">
              {item.title}
            </h3>

            <p className="mt-1 text-sm text-neutral-500">
              {item.description}
            </p>
          </button>
        ))}
      </div>

      {category.footer && (
        <div className="pt-6 px-4 mt-8">
          <h4 className="font-semibold">
            {category.footer.title}
          </h4>

          <p className="mt-2 text-sm text-neutral-500">
            {category.footer.description}
          </p>

          <div
            className="flex flex-row flex-wrap gap-3 pt-4"
          >
            {category.footer.socialIcons.map((icon) => (
              <div
                key={icon.platform}
                className="bg-gray-300/40 p-3 rounded-xl"
              >
                <Image
                  alt=""
                  src={icon.icon}
                  // src={"/navigation/socials/instagram.svg"}
                  width={16}
                  height={16}
                />
                {/* {icon.icon} */}
              </div>
            ))}
          </div>

        </div>
      )}
    </div>
  );
}