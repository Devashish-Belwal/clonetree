import Image from "next/image";
import Link from "next/link";

export default function Logo() {
    return (
        <div className="relative flex h-8 w-36 items-center justify-start max-sm:h-10 max-sm:w-10">
            <Link href="/" className="relative block h-5 w-full text-xl font-bold">
                <Image
                    src={"/linktree-icon-svg.svg"}
                    alt="LOGO"
                    fill
                    className="object-contain max-sm:hidden"
                    priority
                />
                <Image
                    src={"/linktree-small-svg.svg"}
                    alt="LOGO"
                    fill
                    className="object-contain sm:hidden"
                    priority
                />
            </Link>
        </div>
    );
}