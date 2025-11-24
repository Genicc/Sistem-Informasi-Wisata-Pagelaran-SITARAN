export default function AboutSection() {
    const villages = [
        {
        title: "Kampung Mentaraman",
        description:
            "Kampung Mentaraman, sebuah permata tersembunyi di Desa Pagelaran, Kabupaten Malang, menawarkan pesona budaya yang memikat. Dengan akar sejarah yang kuat dan warisan Kerajaan Mataram, dusun ini menjadi rumah bagi beragam kesenian tradisional yang masih hidup hingga kini. Dari alunan merdu karawitan hingga tarian-tarian klasik, Mentaraman adalah surga bagi para pencinta seni dan budaya Jawa. Keindahan alam yang masih asri semakin melengkapi pesona dusun ini, menjadikannya destinasi yang sempurna bagi mereka yang ingin melarikan diri dari hiruk pikuk kota.",
        },
        {
        title: "Kampung Gerabah",
        description:
            "Kampung Gerabah di Kabupaten Malang merupakan sentra kerajinan tradisional yang masih mempertahankan warisan budaya pembuatan gerabah secara turun-temurun. Di tempat ini, pengunjung dapat melihat langsung proses pembentukan tanah liat menjadi karya seni bernilai tinggi—mulai dari kendi, vas, pot bunga, hingga hiasan rumah. Suasana kampung yang khas, dipenuhi deretan pengrajin aktif, menciptakan pengalaman edukatif sekaligus wisata budaya yang autentik. Selain membeli produk, pengunjung juga dapat mengikuti workshop membuat gerabah sendiri, menjadikannya destinasi menarik bagi pecinta seni, keluarga, dan pelajar.",
        },
    ];

    return (
        <section
        id="about"
        className="
            relative 
            bg-gradient-to-b 
            from-white/70 
            via-[#fff8f3] 
            to-[#fff2ea]
            py-20 md:py-24
        "
        >
        <div className="mx-auto max-w-6xl px-4 md:px-8">
            {/* Header Section */}
                <div className="mx-auto max-w-3xl text-center">
                    {/* Badge atas */}
                    <p className="
                        inline-flex items-center gap-2 rounded-full bg-[#FFF3E7] px-4 py-1 text-xs md:text-sm font-semibold uppercase tracking-[0.16em] text-[#D98454]">
                        DESA PAGELARAN
                    </p>

                    {/* Judul */}
                    <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
                        <span className="text-[#3b2a20]">Tentang </span>
                        <span className="text-[#D98454]">Desa Pagelaran</span>
                    </h2>

                    {/* Paragraf */}
                    <p className="mt-4 text-sm md:text-base leading-relaxed text-[#8a7461]">
                        Pagelaran adalah sebuah kecamatan di Kabupaten Malang, Provinsi Jawa Timur, Indonesia. 
                        Kecamatan ini berjarak sekitar 12 Km dari Ibu Kota Kabupaten Malang ke arah tenggara 
                        melalui Gondanglegi yang memiliki Pusat Pemerintahan di Desa Pagelaran.
                        Desa Pagelaran mengadaptasi seni dan budaya dari Yogyakarta, hal ini berawal pembabatan 
                        hutan glagah yang dilakukan oleh penduduk migrasi dari Mentaram, Yogyakarta.
                    </p>
                </div>

                {/* Garis aksen */}
                <div className="mt-8 flex justify-center">
                <div className="h-[3px] w-32 md:w-44 rounded-full bg-gradient-to-r from-[#E6A56E] via-[#D98454] to-[#4A3326]" />
                </div>


            {/* Cards */}
            <div className="mt-12 grid md:grid-cols-2 gap 8 items-stretch">
                {villages.map((item, index) => (
                    <article
                        key={index}
                        className="
                            w-full 
                            h-full
                            md:w-[95%] 
                            lg:w-[95%]
                            rounded-3xl
                            bg-white
                            shadow-[0_22px_50px_rgba(0,0,0,0.06)]
                            border border-orange-50
                            px-6 py-6 md:px-10 md:py-24 pt-4 md:pt-10
                            flex flex-col
                        "
                        >
                        <h3 className="text-xl md:text-2xl font-bold text-[#4b2b16] mb-6 text-center">
                            {item.title}
                        </h3>

                        <p className="text-sm md:text-base leading-relaxed text-slate-700 text-justify flex-1">
                            {item.description}
                        </p>
                    </article>
                ))}
            </div>

        </div>
        </section>
    );
}
