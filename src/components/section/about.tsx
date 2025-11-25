export default function AboutSection() {
    const villages = [
        {
        title: "KAMPUNG SENI DAN BUDAYA MENTARAMAN",
        description:
            "Kampung Seni dan Budaya Mentaraman, sebuah permata tersembunyi di Desa Pagelaran, Kabupaten Malang, menawarkan pesona budaya yang memikat. Dengan akar sejarah yang kuat dan warisan Kerajaan Mataram, dusun ini menjadi rumah bagi beragam kesenian tradisional yang masih hidup hingga kini. Dari alunan merdu karawitan hingga tarian-tarian klasik, Mentaraman adalah surga bagi para pencinta seni dan budaya Jawa. Keindahan alam yang masih asri semakin melengkapi pesona dusun ini, menjadikannya destinasi yang sempurna bagi mereka yang ingin melarikan diri dari hiruk pikuk kota.",
        },
        {
        title: "KAMPUNG GERABAH KRAJAN",
        description:
            "Kampung Gerabah Krajan di Kabupaten Malang merupakan sentra kerajinan tradisional yang masih mempertahankan warisan budaya pembuatan gerabah secara turun-temurun. Di tempat ini, pengunjung dapat melihat langsung proses pembentukan tanah liat menjadi karya seni bernilai tinggi—mulai dari kendi, vas, pot bunga, hingga hiasan rumah. Suasana kampung yang khas, dipenuhi deretan pengrajin aktif, menciptakan pengalaman edukatif sekaligus wisata budaya yang autentik. Selain membeli produk, pengunjung juga dapat mengikuti workshop membuat gerabah sendiri, menjadikannya destinasi menarik bagi pecinta seni, keluarga, dan pelajar.",
        },
    ];

    return (
        <section
        id="about"
        className="
            relative 
            bg-gradient-to-b 
            from-white/70 
            via-[#DDEBF5]/35 
            to-[#DDEBF5]/65
            py-20 md:py-24
        "
        >
        <div className="mx-auto max-w-6xl px-4 md:px-8">
            {/* Header Section */}
                <div className="mx-auto max-w-5xl text-center">
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
                    <div className="mt-4 md:mt-6 mx-auto max-w-5xl text-sm md:text-base leading-relaxed text-[#3b2a20] text-justify space-y-5">
                        <p>
                            <span className="inline-block text-4xl md:text-5xl font-extrabold text-[#D98454] mr-0.5 align-bottom">
                            D
                            </span>
                            esa Pagelaran merupakan salah satu desa di Kabupaten Malang yang memiliki 
                            posisi strategis sebagai jalur penghubung menuju kawasan wisata pantai selatan seperti 
                            Balekambang, Kondang Merak, dan Ngliyep. Memiliki luas wilayah sekitar 4,24 km² dan terdiri atas empat dusun, 
                            desa ini dikenal sebagai wilayah yang kaya akan seni dan budaya tradisional, seperti karawitan, 
                            wayang, kentrung, ludruk, campursari, ketoprak, dan tari. 
                            Desa ini berjarak sekitar 12 Km dari Ibu Kota Kabupaten Malang ke arah tenggara 
                            melalui Gondanglegi yang memiliki Pusat Pemerintahan di Desa Pagelaran.
                            Salah satu kampungnya, yaitu Kampung Seni dan Budaya Mentaraman menjadi pusat aktivitas seni dengan lebih dari 300 pelaku seni lintas generasi. 
                            Kekayaan seni dan budaya tersebut menjadikan Desa Pagelaran diresmikan sebagai “Kampung Eduwisata Seni dan Budaya”.
                        </p>

                        <p>
                            Selain potensi seni, desa ini juga memiliki daya tarik berupa rumah-rumah berarsitektur Jawa kuno yang masih terawat, 
                            serta kehidupan masyarakat yang menjunjung tinggi adat dan tradisi lokal.
                            Keharmonisan sosial, lingkungan yang bersih, serta ikatan kekeluargaan yang kuat menjadi modal penting dalam pengembangan desa 
                            sebagai destinasi wisata berbasis budaya dan kearifan lokal.
                        </p>
                    </div>


                </div>

                {/* Garis aksen */}
                <div className="mt-8 flex justify-center">
                <div className="h-[3px] w-32 md:w-44 rounded-full bg-gradient-to-r from-[#E6A56E] via-[#D98454] to-[#4A3326]" />
                </div>


            {/* Cards */}
            <div className="mt-12 grid md:grid-cols-2 gap-8 items-stretch">
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
