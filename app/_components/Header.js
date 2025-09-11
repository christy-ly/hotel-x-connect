import React from "react";
import Navigation from "./Navigation";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="border-b border-primary-900 px-8 py-5 ">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}
