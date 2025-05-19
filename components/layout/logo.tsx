import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2 select-none">
      <div className="relative w-16 h-16 select-none pointer-events-none">
        <Image
          src="/logo/logo.png"
          alt="Elevenstoic Logo"
          fill
          className="object-contain select-none pointer-events-none"
          draggable="false"
          unselectable="on"
        />
      </div>
      <span className="font-heading font-bold text-3xl tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-gray-100 dark:to-gray-300">
        Elevenstoic
      </span>
    </Link>
  );
}
