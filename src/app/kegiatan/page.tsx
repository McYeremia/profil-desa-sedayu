import Link from "next/link";

export default function KegiatanPage() {
  const kegiatan = [
    "Bank Sampah",
    "Karang Taruna",
    "PKK",
    "Kerja Bakti",
    "Posyandu Keliling",
    "Posyandu Remaja",
    "Karawitan",
  ];

  // Fungsi bantu: ubah nama kegiatan jadi slug (path-url)
  const slugify = (text: string) =>
    text.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "");

  return (
    <main className="min-h-screen bg-gradient-to-r from-blue-400 to-teal-300 px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-extrabold text-center text-black mb-10">
          Kegiatan Padukuhan Sedayu
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {kegiatan.map((item, index) => (
            <Link href={`/kegiatan/${slugify(item)}`} key={index}>
              <div className="bg-white rounded-2xl shadow-md p-6 text-center font-semibold text-lg text-black hover:shadow-xl transition duration-300 hover:bg-blue-100 cursor-pointer">
                {item}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
