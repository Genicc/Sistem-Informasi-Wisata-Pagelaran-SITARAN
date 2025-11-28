// src/components/global/Footer.tsx
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-b from-[#FFF7D6]/65 via-[#FFF7D6] to-[#FFF7D6] text-slate-900">
            <div className="mx-auto max-w-6xl px-4 md:px-8 py-10 md:py-12">
                {/* Top: Teks kiri & logo instansi kanan */}
                <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
                    {/* Teks Deskripsi */}
                    <div className="max-w-xl space-y-2">
                        <h2 className="text-3xl md:text-5xl font-extrabold tracking-wide drop-shadow-md text-[#3b2a20]">
                            DESA EDUWISATA 
                            <h2 className="text-[#D98454]" >PAGELARAN</h2>
                        </h2>
                        <p className="text-md md:text-lg leading-relaxed">
                        Portal resmi SITARAN, kampung seni & gerabah Mentaraman di Desa Pagelaran, Malang. 
                        Mewadahi pelestarian seni, budaya, dan kerajinan sebagai identitas Desa Pagelaran.
                        </p>
                        {/* <p className="text-sm md:text-base leading-relaxed">
                            Mewadahi pelestarian seni, budaya, dan kerajinan sebagai identitas Desa Pagelaran.
                        </p> */}
                        <p className="text-md md:text-lg">
                        Desa Pagelaran, Kabupaten Malang, Jawa Timur
                        </p>
                    </div>

                    {/* Logo Instansi (atas) */}
                    <div className="grid grid-cols-3 md:grid-cols-3 gap-4 md:gap-6 place-items-center">
                        {/* Ganti src dengan path logo kamu di /public */}
                        <Image
                        src="/image/logo-pagelaran.png"
                        alt="Logo Desa Pagelaran"
                        width={72}
                        height={72}
                        className="h-14 w-14 md:h-16 md:w-16 object-contain"
                        />
                        <Image
                        src="/image/um.png"
                        alt="Logo Universitas Negeri Malang"
                        width={72}
                        height={72}
                        className="h-14 w-14 md:h-16 md:w-16 object-contain"
                        />
                        <Image
                        src="/image/tut_wuri.svg"
                        alt="Logo Tut Wuri Handayani"
                        width={72}
                        height={72}
                        className="h-14 w-14 md:h-16 md:w-16 object-contain"
                        />
                        <Image
                        src="/image/diktisaintek.png"
                        alt="Logo Dikti Saintek"
                        width={72}
                        height={72}
                        className="h-14 w-14 md:h-16 md:w-16 object-contain"
                        />
                        <Image
                        src="/image/kab-malang.png"
                        alt="Logo Kabupaten Malang"
                        width={72}
                        height={72}
                        className="h-14 w-14 md:h-16 md:w-16 object-contain"
                        />
                        <Image
                        src="/image/pokdarwis-pagelaran.png"
                        alt="Logo Pokdarwis Pagelaran"
                        width={72}
                        height={72}
                        className="h-14 w-14 md:h-16 md:w-16 object-contain"
                        />
                    </div>
                </div>

                {/* Garis pemisah */}
                <div className="mt-12 w-full">
                    <div className="h-[2px] w-full bg-[#79462c]" />
                </div>

                {/* Bottom: copyright & supported by */}
                <div className="mt-4 flex flex-col md:flex-row items-center justify-between w-full">

                {/* Copyright Left */}
                    <p className="text-sm md:text-base text-slate-800">
                        © 2025 Desa Pagelaran. All rights reserved.
                    </p>

                    {/* Supported by Right */}
                    <div className="flex items-center gap-3 mt-4 md:mt-0">
                        <span className="text-xs md:text-sm font-medium uppercase tracking-wide">
                        Supported by
                        </span>

                        {/* Logo */}
                        <div className="flex items-center gap-3">
                        <Image
                            src="/image/um.png"
                            alt="UM Logo"
                            width={80}
                            height={40}
                            className="h-8 w-auto object-contain"
                        />
                        <Image
                            src="/image/berdampak.png"
                            alt="Berdampak Logo"
                            width={80}
                            height={40}
                            className="h-8 w-auto object-contain"
                        />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
