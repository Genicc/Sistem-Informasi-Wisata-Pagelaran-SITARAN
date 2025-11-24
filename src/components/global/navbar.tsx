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
    const [activeSection, setActiveSection] = useState<string>("#hero");;

    // ambil efek scroll dari Navigation
    useEffect(() => {
    const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // scrollspy: tentukan section mana yang sedang aktif
    useEffect(() => {
        const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const offset = 120; // tinggi navbar / margin aman

        let currentSection = "#hero";

        for (const item of navItems) {
            const section = document.querySelector(item.href) as HTMLElement | null;
            if (!section) continue;

            const top = section.offsetTop - offset;
            const bottom = top + section.offsetHeight;

            if (scrollPosition >= top && scrollPosition < bottom) {
            currentSection = item.href;
            }
        }

        setActiveSection(currentSection);
        };

        handleScroll(); // set awal
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // fungsi scroll smooth + offset (biar nggak ketutup navbar)
    const handleNavClick = (href: string) => {
        const section = document.querySelector(href) as HTMLElement | null;
        if (!section) return;

        const navbarOffset = 80; // tinggi navbar kurang lebih
        const y =
        section.getBoundingClientRect().top + window.scrollY - navbarOffset;

        window.scrollTo({
        top: y,
        behavior: "smooth",
        });

        setOpen(false);
    };

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
                {navItems.map((item) => {
                    const isActive = activeSection === item.href;

                return (
                    <li key={item.href}>
                        <button
                            type="button"
                            onClick={() => handleNavClick(item.href)}
                            className={`relative transition-colors ${
                                isActive
                                ? "text-[#b46325]"
                                : "text-neutral-900 hover:text-[#b46325]"
                            }`}
                        >
                            {item.label}
                            {isActive && (
                                <span className="absolute -bottom-1 left-0 right-0 mx-auto h-[2px] w-7 rounded-full bg-[#b46325]" />
                            )}
                        </button>
                    </li>
                );
                })}
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
                    {navItems.map((item) => {
                        const isActive = activeSection === item.href;

                    return (
                        <li key={item.href}>
                            <button
                                type="button"
                                onClick={() => handleNavClick(item.href)}
                                className={`block w-full text-left py-1 transition-colors ${
                                isActive
                                    ? "text-[#b46325]"
                                    : "text-neutral-900 hover:text-[#b46325]"
                                }`}
                            >
                                {item.label}
                            </button>
                        </li>
                    );
                    })}
                </ul>
            </div>
        )}
        </header>
    );
}
