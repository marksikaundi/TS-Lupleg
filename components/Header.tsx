import Link from "next/link";
import { PiChatsTeardropDuotone } from "react-icons/pi";

export default function Header() {
  return (
    <div className="sticky top-0 z-50 bg-white">
      <header className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center">
              {/* FOR A LOGO IMAGE USE THESE */}
              {/* <Image
                src="/xlogo.svg"
                alt="Lupleg Logo"
                width={150}
                height={100}
                className="h-12 w-auto"
              /> */}
              <h2 className="h-12 w-auto text-[#2D1637] font-bold mt-2 text-lg">
                TS-Lupleg
              </h2>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/features"
              className="text-[#2D1637] hover:text-[#2D1637] text-md  hidden md:block"
            >
              Features
            </Link>

            <Link
              href="/typescript-tips"
              className="text-white rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center bg-[#2D1637] hover:bg-[#2D1637] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"

            //   className="inline-flex h-9 items-center justify-center rounded-full bg-black px-4 text-md font-medium text-white hover:bg-black"
            >
              <PiChatsTeardropDuotone className="w-5 h-5 mr-2 " aria-hidden />
              Solve now
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
}
