// src/components/sections/culture-section.tsx
// import Image from "next/image";

type TraditionItem = {
  title: string;
  description: string;
};

type CraftHighlight = {
  title: string;
  description: string;
};

type PerformanceGroup = {
  category: string;
  items: { title: string; description: string }[];
};

const traditions: TraditionItem[] = [
  {
    title: "Selamatan Desa",
    description:
      "Tradisi syukuran agung seluruh warga dengan tumpengan, doa bersama, dan kegiatan adat untuk memohon keselamatan serta kesejahteraan desa.",
  },
  {
    title: "Siklus Kehidupan: Kehamilan & Kelahiran",
    description:
      "Ritual seperti Tingkeban (7 bulan kehamilan), doa keselamatan, dan selamatan kelahiran sebagai ungkapan syukur atas hadirnya anggota keluarga baru.",
  },
  {
    title: "Musim Tanam & Panen",
    description:
      "Doa bersama sebelum musim tanam untuk memohon kesuburan tanah, serta perayaan Panen Raya dengan membawa hasil bumi dan makan bersama.",
  },
  {
    title: "Ritual Petik Sumber",
    description:
      "Warga bergotong royong membersihkan dan mensucikan sumber mata air, membawa sesaji dan doa sebagai wujud syukur dan penjagaan kelestarian.",
  },
  {
    title: "Ruwatan & Hari-Hari Sakral",
    description:
      "Ruwatan warga sebagai ritual tolak bala, sering disertai wayang ruwatan, serta peringatan Suroan dan Nyadran untuk menjaga harmoni dengan para leluhur.",
  },
];

const craftHighlights: CraftHighlight[] = [
  {
    title: "Warisan Desa Geta'an",
    description:
      "Nama lama kawasan ini, 'Desa Geta'an', menjadi penanda kuat bahwa seni gerabah telah mengakar di Pagelaran sejak berabad-abad lalu.",
  },
  {
    title: "Teknik Tradisional",
    description:
      "Perajin tetap setia pada teknik putar miring dan putar datar, menjaga karakter khas gerabah Pagelaran di tengah perkembangan zaman.",
  },
  {
    title: "Ragam Produk",
    description:
      "Dari cobek, kendi, pot bunga, vas, hingga patung terakota dan suvenir khas, setiap karya menyimpan cerita dan sentuhan personal perajin.",
  },
  {
    title: "Pengalaman Eduwisata",
    description:
      "Pengunjung dapat belajar langsung, menyentuh tanah liat, dan mencoba membuat karya sendiri di Kampung Gerabah sebagai lokakarya terbuka.",
  },
];

const performanceGroups: PerformanceGroup[] = [
  {
    category: "Musik Tradisional",
    items: [
      {
        title: "Karawitan (Gamelan)",
        description:
          "Pengiring utama upacara adat, wayang, dan tarian. Dilestarikan lewat sanggar seperti Sanggar Lestari Budaya dan Sanggar Langgeng Irama.",
      },
      {
        title: "Campursari",
        description:
          "Perpaduan gamelan dan instrumen modern, menjadi favorit warga untuk hajatan dan perayaan karena iramanya yang mudah dinikmati.",
      },
    ],
  },
  {
    category: "Seni Tari Khas",
    items: [
      {
        title: "Tari Remo",
        description:
          "Tarian gagah nan ekspresif untuk penyambutan tamu, dengan hentakan kaki kuat dan permainan selendang yang dinamis.",
      },
      {
        title: "Tari Topeng",
        description:
          "Setiap topeng melambangkan karakter berbeda—halus, lucu, hingga gagah—sering dibawakan dalam acara adat sebagai simbol siklus kehidupan.",
      },
      {
        title: "Tari Beskalan",
        description:
          "Tarian khas dari Dusun Mentaraman, lembut namun sarat makna, kerap ditampilkan untuk menyambut tamu kehormatan.",
      },
    ],
  },
  {
    category: "Pertunjukan Rakyat & Teater",
    items: [
      {
        title: "Bantengan",
        description:
          "Pertunjukan energik melambangkan keberanian dan kekuatan, sering tampil pada ruwatan, pesta panen, dan festival desa.",
      },
      {
        title: "Wayang Kulit",
        description:
          "Pagelaran semalam suntuk dengan lakon pewayangan yang sarat nilai moral, menjadi hiburan dan tuntunan warga.",
      },
      {
        title: "Ludruk, Ketoprak & Kentrung",
        description:
          "Teater rakyat dengan humor dan kritik sosial, drama sejarah kerajaan, hingga seni tutur bertempo ritmis yang mengisahkan legenda lokal.",
      },
    ],
  },
];

export default function CultureSection() {
  return (
    <section
      id="culture"
      className="relative bg-gradient-to-b from-[#DDEBF5]/65 via-[#DDEBF5]/75 to-[#DDEBF5]/85 py-16 md:py-24"
    >
      {/* Dekorasi background lembut */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 right-[-40px] h-64 w-64 rounded-full bg-[#E6A56E]/14 blur-3xl" />
        <div className="absolute bottom-[-40px] left-[-60px] h-72 w-72 rounded-full bg-[#D98454]/14 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Header Section */}
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge atas */}
          <p className="inline-flex items-center gap-2 rounded-full bg-[#FFF3E7] px-4 py-1 text-xs md:text-sm font-semibold uppercase tracking-[0.16em] text-[#D98454]">
            Seni & Budaya • Desa Pagelaran
          </p>
          <h2 className="mt-4 text-4xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-[#3b2a20]">
            Jiwa{" "}
            <span className="text-[#D98454]">
              Seni & Budaya Pagelaran
            </span>
          </h2>
          <p className="mt-4 text-md md:text-base leading-relaxed text-[#8a7461]">
            Selamat datang di jantung budaya Desa Pagelaran, tempat di mana
            warisan leluhur tidak sekadar dikenang, tetapi hidup dalam
            aktivitas sehari-hari. Di sini, seni bukan hanya tontonan,
            melainkan denyut nadi yang menggerakkan komunitas—dari ritual
            sakral, seni kriya, hingga panggung pertunjukan yang semarak.
          </p>
        </div>

        {/* Garis aksen */}
        <div className="mt-8 flex justify-center">
          <div className="h-[3px] w-32 md:w-44 rounded-full bg-gradient-to-r from-[#E6A56E] via-[#D98454] to-[#4A3326]" />
        </div>

        {/* 1. Tradisi & Ritual */}
        <div className="relative mt-12 grid gap-10 md:grid-cols-[1.1fr,1fr] items-start">

          {/* === DESKTOP ILLUSTRATION (DI KIRI) === */}
          <div
            className="
              hidden md:block
              absolute 
              -left-95 
              top-1/2 
              -translate-y-1/2 
              w-[32%] 
              h-[75%] 
              overflow-hidden 
              pointer-events-none 
              opacity-90
            "
          >
            <img
              src="/image/tumpeng.png"
              className="w-full h-full object-cover object-left"
            />
          </div>

          {/* === CARD UTAMA === */}
          <div className="relative rounded-3xl bg-white/90 shadow-[0_20px_55px_rgba(0,0,0,0.06)] border border-[#FFE6D2] px-6 py-7 md:px-8 md:py-9 overflow-hidden">

          {/* === MOBILE BACKGROUND (DI BELAKANG CARD) === */}
          <div className="absolute inset-0 md:hidden opacity-25 pointer-events-none">
            <img
              src="/image/tumpeng.png"
              className="w-[100%] h-[25%] object-cover items-center mx-auto mt-30"
            />
          </div>

          {/* === ISI CARD === */}
          <div className="relative z-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#b2967d]">
              1 • Tradisi dan Ritual Kehidupan
            </p>

            <h3 className="mt-2 text-2xl md:text-3xl font-bold text-[#3b2a20]">
              Nadi Budaya Pagelaran
            </h3>

            <p className="mt-2 text-base md:text-base text-[#8a7461]">
              Di Pagelaran, budaya adalah tuntunan. Ritual-ritual yang
              mengiringi siklus kehidupan dan alam menjadi fondasi harmoni
              antara manusia, alam, dan Sang Pencipta.
            </p>

            <ul className="mt-6 space-y-4">
              {traditions.map((item) => (
                <li key={item.title} className="flex gap-3">
                  <div className="mt-2 h-2.5 w-2.5 flex-none rounded-full bg-gradient-to-br from-[#E6A56E] to-[#D98454]" />
                  <div>
                    <p className="text-base md:text-base font-semibold text-[#3b2a20]">
                      {item.title}
                    </p>
                    <p className="mt-1 text-base md:text-base text-[#8a7461]">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

        {/* 2. Kampung Gerabah */}
        <div className="relative mt-14 grid gap-10 md:grid-cols-[1fr,1.1fr] items-start">

          {/* === DESKTOP ILLUSTRATION (KANAN) === */}
          <div
            className="
              hidden md:block
              absolute 
              -right-80        /* tinggal kamu sesuaikan dengan minus value yang kamu mau */
              top-1/2 
              -translate-y-1/2 
              w-[32%] 
              h-[75%] 
              overflow-hidden 
              pointer-events-none 
              opacity-90
            "
          >
            <img
              src="/image/gerabah.png"
              alt="Ilustrasi Gerabah"
              className="w-full h-full object-cover object-right"
            />
          </div>

          {/* === CARD (Konten Gerabah) === */}
          <div className="relative rounded-3xl bg-white/90 shadow-[0_20px_55px_rgba(0,0,0,0.06)] border border-[#FFE6D2] px-6 py-7 md:px-8 md:py-9 overflow-hidden">

            {/* === MOBILE ILLUSTRATION (DI BELAKANG CARD) === */}
            <div className="absolute inset-0 md:hidden opacity-25 pointer-events-none">
              <img
                src="/image/gerabah.png"
                alt="Ilustrasi Gerabah"
                className="w-full h-auto object-cover items-center mx-auto mt-30"
              />
            </div>

            {/* === ISI CARD === */}
            <div className="relative z-10">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#b2967d]">
                2 • Pusat Seni Kriya
              </p>

              <h3 className="mt-2 text-2xl md:text-3xl font-bold text-[#3b2a20]">
                Kampung Gerabah – Alkimia Tanah dan Tangan
              </h3>

              <p className="mt-2 text-base md:text-base text-[#8a7461]">
                Jauh sebelum dikenal luas, kawasan ini bernama{" "}
                <span className="font-semibold">“Desa Geta&apos;an”</span>, yang
                mencerminkan kuatnya tradisi gerabah. Di sini, seni membentuk
                tanah liat diwariskan turun-temurun dari generasi ke generasi.
              </p>

              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {craftHighlights.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl bg-[#FFF8F3] px-4 py-3 border border-[#FFE6D2]"
                  >
                    <p className="text-base font-semibold uppercase tracking-[0.12em] text-[#D98454]">
                      {item.title}
                    </p>
                    <p className="mt-1 text-base md:text-base text-[#8a7461]">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-2xl bg-gradient-to-r from-[#F6D9BE] via-[#E9B493] to-[#D99E7D] px-4 py-4 text-base md:text-lg text-[#4A3326]">
                <p className="font-semibold text-base md:text-lg">
                  Pengalaman Eduwisata: Dari Tanah Menjadi Karya
                </p>
                <p className="mt-1 text-base md:text-sm">
                  Pengunjung dapat belajar langsung dari perajin, merasakan
                  tekstur tanah liat, dan mencoba menciptakan karya sendiri
                  menjadikan Kampung Gerabah sebagai kelas seni terbuka yang
                  hidup.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Panggung Budaya */}
          <div className="relative mt-14">
            {/* === DESKTOP ILLUSTRATION (DI KIRI) === */}
            <div
              className="
                hidden md:block
                absolute 
                -left-80
                top-1/2 
                -translate-y-1/2 
                w-[25%] 
                h-[65%] 
                overflow-hidden 
                pointer-events-none 
                opacity-90
                z-0
              "
            >
              <img
                src="/image/wyg.png"
                alt="Ilustrasi Panggung Budaya"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* === CARD GRADIENT UTAMA === */}
            <div className="relative rounded-3xl bg-gradient-to-br from-[#FFF3E7] via-[#FFE6D2] to-[#F9D5B5] px-6 py-8 md:px-9 md:py-10 text-[#4A3326] overflow-hidden">

              {/* === MOBILE BACKGROUND (DI BELAKANG KONTEN) === */}
              <div className="absolute inset-0 md:hidden opacity-20 pointer-events-none">
                <img
                  src="/image/wyg.png"
                  alt="Ilustrasi Panggung Budaya"
                  className="w-full h-auto object-cover mx-auto mt-10"
                />
              </div>

              {/* === ISI KONTEN (DIBUAT DI ATAS BACKGROUND) === */}
              <div className="relative z-10">
                <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#D98454]">
                      3 • Panggung Budaya Pagelaran
                    </p>
                    <h3 className="mt-2 text-2xl md:text-3xl font-bold text-[#4A3326]">
                      Gema Seni Pertunjukan dari Mentaraman
                    </h3>
                    <p className="mt-2 text-base md:text-base text-[#7A5A45] max-w-2.5xl">
                      Jantung seni pertunjukan berdetak di Dusun Mentaraman, tempat
                      para maestro melatih generasi muda. Dari gamelan, tari, hingga
                      teater rakyat, seluruh desa menjadi panggung terbuka bagi
                      kreativitas.
                    </p>
                  </div>
                  <div className="mt-2 text-xs md:text-base text-right text-[#7A5A45]">
                    <p className="text-sm md:text-sm font-medium italic">
                      &quot;Seni bukan hanya hiburan, tapi cara Pagelaran bercerita
                      pada dunia.&quot;
                    </p>
                  </div>
                </div>

                <div className="mt-7 grid gap-6 md:grid-cols-3">
                  {performanceGroups.map((group) => (
                    <div
                      key={group.category}
                      className="rounded-2xl bg-white/80 border border-[#F0CFB0] px-4 py-4 md:px-5 md:py-5 backdrop-blur-sm"
                    >
                      <p className="text-xl font-bold uppercase tracking-[0.14em] text-[#D98454] text-center">
                        {group.category}
                      </p>
                      <div className="mt-3 space-y-3">
                        {group.items.map((item) => (
                          <div key={item.title}>
                            <p className="text-lg md:text-lg font-semibold text-[#4A3326]">
                              {item.title}
                            </p>
                            <p className="mt-1 text-base md:text-sm leading-relaxed text-[#7A5A45]">
                              {item.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Catatan lokasi / highlight */}
                <div className="mt-7 flex flex-col items-start gap-3 border-t border-[#F0CFB0] pt-5 text-sm md:text-base text-[#7A5A45] md:flex-row md:items-center md:justify-between">
                  <p>
                    Banyak pertunjukan digelar pada momen khusus seperti ruwatan,
                    selamatan desa, pesta panen, dan festival budaya tahunan.
                  </p>
                  <p className="font-semibold text-[#D98454]">
                    Pusat kegiatan: Dusun Mentaraman • Sanggar Lestari Budaya •
                    Sanggar Langgeng Irama
                  </p>
                </div>
              </div>
            </div>
          </div>

      </div>
    </section>
  );
}
