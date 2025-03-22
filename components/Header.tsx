"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";
import { auths, moving } from "@/constants/nav";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white dark:bg-neutral-900 shadow-md">
      <div className="max-w-screen-2xl mx-auto px-6 py-4 flex justify-between items-center">
        <Logo />

        <nav className="hidden md:flex items-center space-x-8">
          {moving.map((mov) => (
            <Link
              key={mov.id}
              href={mov.href}
              className="text-neutral-700 dark:text-neutral-300 hover:text-purple-600 dark:hover:text-purple-400 transition duration-300"
            >
              {mov.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          {auths.map((auth) => (
            <Link
              key={auth.id}
              href={auth.href}
              className={`${auth.className} px-4 py-2 text-neutral-700 dark:text-neutral-300 hover:text-purple-600 dark:hover:text-purple-400 transition duration-300`}
            >
              {auth.label}
            </Link>
          ))}
        </div>

        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-neutral-700 dark:text-neutral-300 hover:text-purple-600 dark:hover:text-purple-400 focus:outline-none"
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isMenuOpen && (
        <div
          className={`md:hidden bg-white dark:bg-neutral-800 shadow-lg overflow-hidden transition-all duration-300 ease-in-out`}
        >
          <nav className="flex flex-col text-center space-y-4 p-6">
            {moving.map((mov) => (
              <Link
                key={mov.id}
                href={mov.href}
                className="text-neutral-700 dark:text-neutral-300 hover:text-purple-600 dark:hover:text-purple-400 transition duration-300"
              >
                {mov.label}
              </Link>
            ))}
          </nav>
          <div className="flex flex-col text-center space-y-4 p-6 border-t border-neutral-200 dark:border-neutral-700">
            {auths.map((auth) => (
              <Link
                key={auth.id}
                href={auth.href}
                className={`${auth.className} px-4 py-2 text-neutral-700 dark:text-neutral-300 hover:text-purple-600 dark:hover:text-purple-400 transition duration-300`}
              >
                {auth.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
