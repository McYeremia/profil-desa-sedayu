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
    "Argosari Cup",
    "KWT Kinanti",
    "Gapoktan",
    "Pertemuan RT Ibu",
    "Pertemuan RT Bapak",
    "Dasa Wisma",
    "Sanggar Tari",
    "Jatilan",
  ];

  const slugify = (text: string) =>
    text
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");

  return (
    <div className="min-h-screen bg-gradient-to-r from-sky-400 to-cyan-300 p-6">
      <h1 className="text-black text-3xl font-extrabold mb-8 text-center">Kegiatan Padukuhan Sedayu</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
        {kegiatan.map((item) => (
          <Link
            key={item}
            href={`/kegiatan/${slugify(item)}`}
            className="bg-white rounded-xl shadow-md p-6 text-center text-black text-extrabold w-full max-w-[250px] hover:shadow-lg hover:scale-105 transition"
          >
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
}
