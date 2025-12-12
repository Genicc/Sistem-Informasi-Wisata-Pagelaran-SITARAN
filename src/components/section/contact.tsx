"use client";

import type { LucideIcon } from "lucide-react";
import { Mail, Phone, MapPin, Instagram, Music2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type ContactValue = {
    text: string;
    link?: string;
};

type ContactItem = {
    icon: LucideIcon;
    label: string;
    values: ContactValue[];
};

const contactInfo: ContactItem[] = [
    {
        icon: Phone,
        label: "Telepon / WhatsApp",
        values: [
        {
            text: "+62 838-5878-557 ",
            link: "https://wa.me/628385878557 ",
        },
        {
            text: "+62 812-3414-7497",
            link: "https://wa.me/6281234147497",
        },
        ],
    },
    {
        icon: Mail,
        label: "Email",
        values: [
        {
            text: "sendayamentaraman@gmail.com",
            link: "mailto:sendayamentaraman@gmail.com",
        },
        ],
    },
    {
        icon: Instagram,
        label: "Instagram",
        values: [
        {
            text: "@dusunmentaraman",
            link: "https://www.instagram.com/dusunmentaraman/",
        },
        ],
    },
    {
        icon: Music2,
        label: "TikTok",
        values: [
        {
            text: "dusun.mentaraman",
            link: "https://www.tiktok.com/@dusun.mentaraman?_r=1&_t=ZS-91eyf7Yy0gr",
        },
        ],
    },
    {
        icon: MapPin,
        label: "Alamat",
        values: [
        {
            text: "Pagelaran Kidul, Pagelaran, Kec. Pagelaran, Kabupaten Malang, Jawa Timur 65174",
        },
        ],
    },
];

const ContactSection = () => {
    return (
        <section
        id="contact"
        className="
            w-full 
            bg-gradient-to-b from-[#FFE9D9]/85 via-[#FFF7D6]/55 to-[#FFF7D6]/65
            py-20 lg:py-24 
            min-h-screen
        "
        >
        <div className="mx-auto max-w-6xl px-4 lg:px-0">
            {/* Heading */}
            <div className="mx-auto max-w-3xl text-center">
            <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                <span className="text-[#3b2a20]">Hubungi </span>
                <span className="text-[#D98454]">Kami</span>
            </h2>
            <div className="mt-3 text-md md:text-lg text-[#8a7461]">
                Ada pertanyaan atau ingin berkunjung? Jangan ragu untuk menghubungi
                kami
            </div>
            </div>

            {/* Garis aksen */}
            <div className="mt-8 flex justify-center">
            <div className="h-[3px] w-32 md:w-44 rounded-full bg-gradient-to-r from-[#E6A56E] via-[#D98454] to-[#4A3326]" />
            </div>

            {/* Main Grid */}
            <div className="grid gap-10 lg:grid-cols-[1.1fr_minmax(0,1fr)] items-start mt-7">
            {/* Left: Informasi Kontak */}
            <div>
                <h3 className="mb-5 text-xl md:text-2xl font-semibold text-[#3b2a20]">
                Informasi Kontak
                </h3>

                <div className="space-y-4">
                {contactInfo.map((item, index) => {
                    const Icon = item.icon;

                    return (
                    <Card
                        key={index}
                        className="
                        border-0 
                        rounded-2xl 
                        bg-white/95
                        shadow-[0_12px_30px_rgba(0,0,0,0.05)] 
                        w-full 
                        max-w-[500px] 
                        h-auto
                        transition-all duration-200
                        hover:-translate-y-1
                        hover:shadow-[0_18px_45px_rgba(0,0,0,0.08)]
                        hover:bg-white
                        hover:border hover:border-[#ffe1c5]
                        "
                    >
                        <CardContent className="px-4 flex items-start gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#ffe7d3]">
                            <Icon className="h-5 w-5 md:h-6 md:w-6 text-[#e0863a]" />
                        </div>

                        <div>
                            <div className="text-sm uppercase tracking-[0.12em] text-[#b2967d]">
                            {item.label}
                            </div>

                            <div className="mt-1 space-y-1">
                            {item.values.map((val, i) =>
                                val.link ? (
                                <a
                                    key={i}
                                    href={val.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block text-md md:text-lg font-medium text-[#3b2a20] hover:text-[#e0863a] transition-colors"
                                >
                                    {val.text}
                                </a>
                                ) : (
                                <div
                                    key={i}
                                    className="text-md md:text-lg font-medium text-[#3b2a20]"
                                >
                                    {val.text}
                                </div>
                                )
                            )}
                            </div>
                        </div>
                        </CardContent>
                    </Card>
                    );
                })}
                </div>
            </div>

            {/* Right: Lokasi Kami */}
            <div>
                <h3 className="mb-5 text-xl md:text-2xl font-semibold text-[#3b2a20]">
                Lokasi Kami
                </h3>

                <Card className="border-0 rounded-2xl bg-[#f7e6c3] shadow-[0_24px_60px_rgba(0,0,0,0.06)]">
                <CardContent className="px-3 py-1">
                    {/* MAP */}
                    <div className="w-full rounded-2xl overflow-hidden shadow-md">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126368.83084219976!2d112.52194815583269!3d-8.20013846972813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78a0689c0e20e9%3A0x91131d2361b5aee1!2sKec.%20Pagelaran%2C%20Kabupaten%20Malang%2C%20Jawa%20Timur!5e0!3m2!1sid!2sid!4v1763342054589!5m2!1sid!2sid"
                        className="w-full h-[300px] md:h-[380px]"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                    </div>

                    {/* TEXT INFO */}
                    <div className="mt-2 text-center">
                    <div className="text-lg md:text-xl font-semibold text-[#3b2a20]">
                        Desa Pagelaran
                    </div>

                    <Button
                        asChild
                        className="mt-2 rounded-full bg-[#e0863a] hover:bg-[#c9722c] text-white text-md md:text-md px-6 py-2 shadow-[0_12px_30px_rgba(224,134,58,0.35)]"
                    >
                        <a
                        href="https://maps.app.goo.gl/5w7U4mfhaaWiZgU8A"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        Buka di Google Maps
                        </a>
                    </Button>
                    </div>
                </CardContent>
                </Card>
            </div>
            </div>
        </div>
        </section>
    );
};

export default ContactSection;
