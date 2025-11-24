"use client";

import { useEffect, useState } from "react";

/**
 * Hook sederhana untuk cek apakah layar sekarang termasuk mobile.
 * Default breakpoint: < 768px
 */
export function useIsMobile(breakpoint = 768) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // cegah error saat SSR
        if (typeof window === "undefined") return;

        const check = () => {
        setIsMobile(window.innerWidth < breakpoint);
        };

        check(); // cek saat pertama kali jalan
        window.addEventListener("resize", check);

        return () => {
        window.removeEventListener("resize", check);
        };
    }, [breakpoint]);

    return isMobile;
}
