import React from "react";
import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="z-10 my-5 text-xl">
      <ul className="flex gap-16 items-center">
        <li>
          <Link href="/" className="hover:text-accent-400 transition-colors">
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/suites"
            className="hover:text-accent-400 transition-colors"
          >
            Rooms & Suites
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover:text-accent-400 transition-colors"
          >
            About Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}
