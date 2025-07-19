import KegiatanGrid from "@/components/Kegiatan";

export default function HomePage() {
  return (
    <>
      <main className="bg-gray-50">
        {/* Hero Section */}
        <section className="text-center py-20 px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-black mb-6">
            Padukuhan Sedayu
          </h1>
          <button className="bg-gradient-to-r from-blue-500 to-teal-300 text-white font-semibold px-6 py-2 rounded-full hover:opacity-90">
            Lihat Aktivitas
          </button>
        </section>

        {/* Gambaran Umum */}
        <section className="bg-gradient-to-r from-blue-400 to-teal-300 py-16 px-4">
          <div className="max-w-5xl mx-auto bg-white rounded-2xl p-6 md:p-10 flex flex-col md:flex-row gap-6 items-center shadow-md">
            <div className="w-full md:w-1/2">
              <div className="bg-gray-300 w-full h-60 md:h-72 rounded-xl"></div>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl font-bold mb-4">Gambaran Umum</h2>
              <p className="text-gray-700">
                Padukuhan Sedayu merupakan bagian dari Desa Argosari. Padukuhan Sedayu berada di sebelah timur Padukuhan Jurug. Dengan luas wilayah 34.68 ha. Secara administrasi wilayah Padukuhan Sedayu terbagi menjadi 4 Rukun Tetangga/RT. Yaitu RT 053, 054, 055 dan 056.
              </p>
            </div>
          </div>
        </section>

        {/* Kegiatan Padukuhan */}
        <section className="bg-gradient-to-r from-blue-400 to-teal-300 py-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-10">Kegiatan Padukuhan</h2>

            {/* Tampilkan hanya 6 kegiatan */}
            <KegiatanGrid limit={6} />

            <p className="mt-6">
              <a href="/kegiatan" className="text-white underline hover:text-gray-200">
                Lihat Seluruh Kegiatan →
              </a>
            </p>
          </div>
        </section>

        {/* Lokasi Padukuhan */}
        <section className="bg-gradient-to-r from-blue-400 to-teal-300 py-16 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Lokasi Padukuhan</h2>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <iframe
                title="Lokasi Padukuhan Sedayu"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7905.686455458004!2d110.25429075052077!3d-7.806415691370728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7af9e0b2c1a769%3A0x3c84b2e7e721853d!2sSedayu%2C%20Argosari%2C%20Sedayu%2C%20Bantul%20Regency%2C%20Special%20Region%20of%20Yogyakarta!5e0!3m2!1sen!2sid!4v1752336135813!5m2!1sen!2sid"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
