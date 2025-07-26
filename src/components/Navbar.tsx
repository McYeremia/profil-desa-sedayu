"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { href: "/", label: "Beranda" },
    { href: "/kegiatan", label: "Kegiatan" },
    { href: "/kontak", label: "Kontak" },
    { href: "/tentang", label: "Tentang" },
  ];

  return (
    <header className="bg-white shadow-md py-4 px-6 sticky top-0 z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo (image) */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo.png" // Pastikan file logo kamu ada di public/logo.png
            alt="Logo Sedayu"
            width={80}
            height={60}
            priority
          />
          <span className="sr-only">Beranda</span>
        </Link>

        {/* Hamburger menu for mobile */}
        <button
          className="md:hidden text-2xl text-black focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? "✖" : "☰"}
        </button>

        {/* Menu for desktop */}
        <nav className="hidden md:flex space-x-6">
          {menuItems.map((item, i) => (
            <Link key={i} href={item.href} className="text-gray-800 hover:text-blue-500">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Menu for mobile */}
      {menuOpen && (
        <nav className="md:hidden flex flex-col space-y-4 mt-4 px-6">
          {menuItems.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className="text-gray-800 hover:text-blue-500"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
