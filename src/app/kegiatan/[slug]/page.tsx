import { notFound } from "next/navigation";

type Params = {
  params: {
    slug: string;
  };
};

// Data kegiatan
const kegiatanData: Record<string, { title: string; description: string }> = {
  "bank-sampah": {
    title: "Bank Sampah",
    description:
      "Program pengelolaan sampah berbasis masyarakat yang memungkinkan warga menabung sampah dan mendapatkan nilai ekonomi. Meningkatkan kesadaran lingkungan dan kemandirian ekonomi.",
  },
  "karang-taruna": {
    title: "Karang Taruna",
    description:
      "Organisasi kepemudaan di desa yang berperan aktif dalam kegiatan sosial, pelatihan, olahraga, dan pemberdayaan masyarakat.",
  },
  pkk: {
    title: "PKK (Pemberdayaan Kesejahteraan Keluarga)",
    description:
      "Kelompok ibu-ibu yang aktif dalam kegiatan pemberdayaan perempuan, kesehatan keluarga, pelatihan keterampilan, dan peningkatan kesejahteraan keluarga.",
  },
  "kerja-bakti": {
    title: "Kerja Bakti",
    description:
      "Kegiatan gotong royong warga desa untuk membersihkan lingkungan, memperbaiki fasilitas umum, dan menjaga kebersihan desa secara rutin.",
  },
  "posyandu-keliling": {
    title: "Posyandu Keliling",
    description:
      "Pelayanan kesehatan bagi ibu hamil dan balita yang dilaksanakan secara mobile oleh petugas kesehatan dan kader desa ke wilayah-wilayah terpencil.",
  },
  "posyandu-remaja": {
    title: "Posyandu Remaja",
    description:
      "Program layanan kesehatan dan penyuluhan bagi remaja desa untuk meningkatkan pengetahuan tentang kesehatan reproduksi dan gaya hidup sehat.",
  },
  karawitan: {
    title: "Karawitan",
    description:
      "Kegiatan pelestarian budaya tradisional melalui seni gamelan dan tembang Jawa. Diikuti oleh warga lintas generasi untuk menjaga warisan budaya.",
  },
};

export default function KegiatanDetailPage({ params }: Params) {
  const kegiatan = kegiatanData[params.slug];

  if (!kegiatan) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gradient-to-r from-blue-400 to-teal-300 px-6 py-12">
      <div className="max-w-3xl mx-auto bg-white bg-opacity-90 rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{kegiatan.title}</h1>
        <p className="text-lg text-gray-800">{kegiatan.description}</p>
      </div>
    </main>
  );
}
