import "@/app/_styles/globals.css";
import Image from "next/image";
import homepageimage from "@/public/homepage-01.jpg";

export const metadata = {
  title: "Home | Hotel X",
  description: "Home",
};

export default function Home() {
  return (
    <main className="md:mt-24 h-screen w-full">
      <Image
        src={homepageimage}
        className="object-cover"
        fill
        quality={80}
        placeholder="blur"
        alt="home page"
      />

      <div className="relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl text-primary-50 mb-20 tracking-tight font-normal opacity-0 translate-y-10 animate-fadeInUp">
          Discover Your Perfect Stay.
        </h1>
        <a
          href="/suites"
          className="bg-accent-500 px-4 py-4 text-primary-800 text-m font-semibold hover:bg-accent-600 transition-all opacity-0 translate-y-10 animate-fadeInUp delay-200"
        >
          Discover Our Luxury Suites
        </a>
      </div>
    </main>
  );
}
