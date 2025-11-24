"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navItems = [
    { label: "Beranda", href: "#hero" },
    { label: "Tentang", href: "#about" },
    { label: "Seni & Budaya", href: "#culture" },
    { label: "Galeri", href: "#gallery" },
    { label: "Produk Lokal", href: "#products" },
    { label: "Wisata", href: "#packages" },
    { label: "Kontak", href: "#contact" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // ambil efek scroll dari Navigation
    useEffect(() => {
        const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
        ${
            isScrolled
            ? "bg-[#fff7f2]/95 backdrop-blur-md shadow-md"
            : "bg-transparent"
        }`}
        >
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8">
            {/* Logo */}
            <Link href="/" className="flex items-center">
            <Image
                src="/image/logo.png"
                alt="SITARAN Logo"
                width={150}
                height={40}
                priority
            />
            </Link>

            {/* DESKTOP MENU */}
            <ul className="hidden md:flex items-center gap-10 text-xl font-medium text-neutral-900">
            {navItems.map((item) => (
                <li key={item.href}>
                <Link
                    href={item.href}
                    className="hover:text-[#b46325] transition-colors"
                >
                    {item.label}
                </Link>
                </li>
            ))}
            </ul>

            {/* MOBILE BUTTON */}
            <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex items-center border rounded-md p-2 bg-white/80"
            >
            {open ? <X size={22} /> : <Menu size={22} />}
            </button>
        </nav>

        {/* MOBILE MENU */}
        {open && (
            <div className="md:hidden bg-[#fff7f2]/95 backdrop-blur-md border-b pb-3">
            <ul className="flex flex-col gap-2 px-6 py-3 text-neutral-900 font-medium">
                {navItems.map((item) => (
                <li key={item.href}>
                    <Link
                    href={item.href}
                    className="block py-1 hover:text-[#b46325]"
                    onClick={() => setOpen(false)}
                    >
                    {item.label}
                    </Link>
                </li>
                ))}
            </ul>
            </div>
        )}
        </header>
    );
}
