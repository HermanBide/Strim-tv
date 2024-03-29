import Image from "next/image";
import { Poppins } from "next/font/google";
//fromt shadcn
import { cn } from "@/lib/utils";
import Link  from 'next/link'

const font = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const Logo = () => {
  return (
    <Link href={""}>
    <div className="hidden lg:flex items-center gap-x-4 hover:opacity-75 transition">
      <div className="bg-white rounded-full p-1">
        <Image src="/smile.svg" alt="strim-tv" height={32} width={32} />
      </div>
      <div className={cn(font.className)}>
        <p className="text-lg font-semibold">
          strim-tv
        </p>
        <p>
          Let&apos;s play
        </p>
      </div>
    </div>
    </Link>
  );
};
