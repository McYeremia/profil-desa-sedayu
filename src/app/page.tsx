export default function HomePage() {
  return (
    <>

      <main className="bg-gray-50 font-poppins">
        {/* Hero Section */}
        <section className="text-center py-20 px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-black mb-4">
            Padukuhan Sedayu
          </h1>
          <button className="bg-gradient-to-r from-blue-500 to-teal-300 text-white font-semibold px-6 py-2 rounded-full hover:opacity-90">
            Lihat Aktivitas
          </button>
        </section>

        {/* Gambaran Umum */}
        <section className="bg-gradient-to-r from-blue-400 to-teal-300 py-16 px-4">
          <div className="max-w-5xl mx-auto bg-white rounded-2xl p-6 md:p-10 flex flex-col md:flex-row gap-6 items-center">
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
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">Kegiatan Padukuhan</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { title: "Kerja Bakti", subtitle: "Minggu, 08.00 – Selesai" },
                { title: "Bank Sampah", subtitle: "Minggu ke 2, 10.00 – Selesai" },
                { title: "Karang Taruna", subtitle: "Setiap tanggal 15 dan 30" },
                { title: "Posyandu Keliling", subtitle: "1x per bulan" },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-2xl p-4 text-center shadow">
                  <div className="bg-gray-300 w-full h-40 rounded-xl mb-4"></div>
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
