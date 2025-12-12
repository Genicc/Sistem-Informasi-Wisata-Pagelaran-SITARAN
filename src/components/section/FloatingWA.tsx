// components/FloatingWA.tsx
"use client";

export default function FloatingWA() {
    const phone = "628385878557"; // ganti (pakai kode negara, tanpa +)
    const text = encodeURIComponent("Halo admin, saya mau tanya...");
    const link = `https://wa.me/${phone}?text=${text}`;

    return (
        <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-green-500 px-4 py-3 text-white shadow-lg hover:bg-green-600"
        >
        {/* icon WA simpel (SVG) */}
        <svg width="25" height="25" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
            <path d="M19.11 17.44c-.28-.14-1.66-.82-1.92-.92-.26-.1-.45-.14-.64.14-.19.28-.73.92-.89 1.11-.16.19-.33.21-.61.07-.28-.14-1.17-.43-2.23-1.37-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.33.43-.49.14-.16.19-.28.28-.47.09-.19.05-.35-.02-.49-.07-.14-.64-1.54-.88-2.11-.23-.55-.47-.48-.64-.49h-.55c-.19 0-.49.07-.75.35-.26.28-.98.96-.98 2.34 0 1.38 1 2.71 1.14 2.9.14.19 1.97 3 4.77 4.21.67.29 1.19.46 1.6.59.67.21 1.28.18 1.76.11.54-.08 1.66-.68 1.9-1.34.23-.66.23-1.23.16-1.34-.07-.11-.26-.18-.54-.32z"/>
            <path d="M16.04 3C9.41 3 4 8.36 4 14.95c0 2.32.68 4.47 1.86 6.29L4 29l7.93-1.82c1.75.96 3.76 1.51 5.9 1.51 6.63 0 12.04-5.36 12.04-11.95C29.87 8.36 22.67 3 16.04 3zm0 23.04c-2.03 0-3.91-.59-5.49-1.6l-.39-.25-4.71 1.08 1.02-4.58-.26-.4a10.1 10.1 0 0 1-1.62-5.42c0-5.6 4.62-10.15 10.45-10.15 5.83 0 10.45 4.55 10.45 10.15 0 5.6-4.62 10.17-10.45 10.17z"/>
        </svg>
        {/* <span className="hidden sm:block text-sm font-semibold">WhatsApp</span> */}
        </a>
    );
}
