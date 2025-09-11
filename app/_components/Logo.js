import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";
function Logo() {
  return (
    <Link
      href="/"
      className="flex flex-col md:flex-row items-center md:gap-2 z-10"
    >
      <Image src={logo} height={40} width={40} alt="Hotel X Logo" />
      <span className="text-m md:text-xl font-semibold text-primary-100">Hotel X</span>
    </Link>
  );
}

export default Logo;
