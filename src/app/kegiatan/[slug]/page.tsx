import { notFound } from "next/navigation";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

const kegiatanData: Record<
  string,
  { title: string; description: string; waktu: string; kontak: string }
> = {
  "bank-sampah": {
    title: "Bank Sampah",
    description:
      "Program pengelolaan sampah berbasis masyarakat yang melibatkan kegiatan seperti penerimaan barang rongsok, penimbangan, pemilahan, pencatatan, penyimpanan, hingga penjualan barang daur ulang. Kegiatan ini bertujuan untuk meningkatkan kesadaran lingkungan dan memberikan nilai ekonomi tambahan kepada warga.",
    waktu: "Setiap minggu ke-2 pukul 10.00",
    kontak: "0821-4723-7850 (Padukuhan Sedayu)",
  },
  "karang-taruna": {
    title: "Karang Taruna Nishtha Aradhana",
    description:
      "Organisasi kepemudaan yang aktif dalam kegiatan sosial seperti sosialisasi, evaluasi program, dan pengelolaan Bank Sampah. Menjadi wadah pembinaan dan pengembangan generasi muda dalam membangun karakter dan kepedulian sosial.",
    waktu: "Setiap akhir bulan",
    kontak: "0821-4723-7850 (Padukuhan Sedayu), Instagram: @karangtaruna_sedayu",
  },
  "pkk": {
    title: "PKK",
    description:
      "Tim Penggerak PKK memiliki peran penting dalam pemberdayaan keluarga melalui kegiatan seperti penyuluhan kesehatan, keuangan, dan penyebaran informasi mengenai padukuhan.",
    waktu: "Minggu ke-4 pukul 10.00",
    kontak: "0821-4723-7850 (Padukuhan Sedayu)",
  },
  "kerja-bakti": {
    title: "Kerja Bakti",
    description:
      "Kegiatan gotong royong warga untuk menjaga kebersihan lingkungan dan mempererat kebersamaan. Dilaksanakan secara berkala atau menjelang hari besar.",
    waktu: "Setiap hari Minggu",
    kontak: "0821-4723-7850 (Padukuhan Sedayu)",
  },
  "posyandu-keliling": {
    title: "Posyandu Balita dan Lansia",
    description:
      "Pelayanan kesehatan terpadu untuk balita dan lansia seperti pencatatan, penimbangan, pengukuran, dan penyuluhan kesehatan.",
    waktu: "Setiap tanggal 12 pukul 09.00 WIB",
    kontak: "0821-4723-7850 (Padukuhan Sedayu)",
  },
  "posyandu-remaja": {
    title: "Posyandu Remaja",
    description:
      "Pelayanan kesehatan terpadu untuk remaja seperti pencatatan, penimbangan, pengukuran, dan penyuluhan kesehatan. Posyandu remaja juga merupakan salah satu bentuk program kerja dari Karang Taruna.",
    waktu: "Setiap tanggal 15 pukul 19.30 WIB",
    kontak: "0821-4723-7850 (Padukuhan Sedayu)",
  },
  "karawitan": {
    title: "Karawitan",
    description:
      "Pelatihan seni gamelan tradisional yang bertujuan melestarikan budaya lokal.",
    waktu: "Setiap Jumat pukul 19.30 WIB",
    kontak: "0821-4723-7850 (Padukuhan Sedayu)",
  },
  "argosari-cup": {
    title: "Argosari Cup VI",
    description:
      "Turnamen bola voli yang diadakan setiap tahun di Kelurahan Argosari, yang melibatkan berbagai padukuhan untuk bertanding dan menjadi tim bola voli padukuhan terbaik. Argosari Cup VI akan di adakan di padukuhan Sedayu dan akan dimulai pada tanggal 23 Agustus 2025.",
    waktu: "23 Agustus 2025 - Selesai",
    kontak: "0821-4723-7850 (Padukuhan Sedayu)",
  },
  "kwt-kinanti": {
    title: "KWT Kinanti",
    description:
      "Kelompok Wanita Tani yang aktif dalam pengolahan, penjualan produk makanan lokal, dan mengatur keuangan penjualan.",
    waktu: "Sabtu minggu ke-4 (tentatif)",
    kontak: "0821-4723-7850 (Padukuhan Sedayu)",
  },
  "gapoktan": {
    title: "Gapoktan",
    description:
      "Gabungan Kelompok Tani yang fokus pada penyuluhan dan pengelolaan pertanian.",
    waktu: "2 kali per bulan (sesuai kesepakatan)",
    kontak: "0821-4723-7850 (Padukuhan Sedayu)",
  },
  "pertemuan-rt-ibu": {
    title: "Pertemuan RT Ibu-ibu",
    description:
      "Pertemuan rutin ibu-ibu RT untuk penyuluhan kesehatan, informasi PKK, dan kas RT.",
    waktu: "Sesuai kesepakatan masing-masing RT",
    kontak: "0821-4723-7850 (Padukuhan Sedayu) / Pengurus RT setempat",
  },
  "pertemuan-rt-bapak": {
    title: "Pertemuan RT Bapak-bapak",
    description:
      "Pertemuan warga pria yang membahas ronda, informasi dusun, dan keuangan RT.",
    waktu: "Sesuai kesepakatan masing-masing RT",
    kontak: "0821-4723-7850 (Padukuhan Sedayu) / Pengurus RT setempat",
  },
  "dasa-wisma": {
    title: "Pertemuan Dasa Wisma",
    description:
      "Kelompok ibu rumah tangga yang membahas kegiatan keluarga, kesehatan, dan pemanfaatan pekarangan.",
    waktu: "Sesuai kesepakaan masing-masing Dasa Wisma",
    kontak: "0821-4723-7850 (Padukuhan Sedayu) / Pengurus Dasa Wisma setempat",
  },
  "sanggar-tari": {
    title: "Sanggar Tari",
    description:
      "Pelatihan tari tradisional anak-anak yang dilaksanakan di padukuhan sedayu.",
    waktu: "Setiap Sabtu pukul 13.00 WIB",
    kontak: "0821-4723-7850 (Padukuhan Sedayu)",
  },
  "jatilan": {
    title: "Sanggar Tari Jatilan",
    description:
      "Pelatihan dan pertunjukan seni Jatilan sebagai pelestarian budaya lokal.",
    waktu: "Tentatif",
    kontak: "0821-4723-7850 (Padukuhan Sedayu)",
  },
};

export function generateStaticParams(): { slug: string }[] {
  return Object.keys(kegiatanData).map((slug) => ({ slug }));
}

// Metadata dinamis untuk SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const kegiatan = kegiatanData[slug];
  if (!kegiatan) return { title: "Kegiatan Tidak Ditemukan" };
  return {
    title: kegiatan.title,
    description: kegiatan.description,
  };
}

// Halaman detail kegiatan
export default async function KegiatanDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const kegiatan = kegiatanData[slug];

  if (!kegiatan) return notFound();

  return (
    <main className="min-h-screen bg-gradient-to-r from-sky-400 to-cyan-300 p-6">
      <div className="bg-white shadow-xl rounded-2xl p-6 md:p-10 max-w-4xl mx-auto border border-cyan-300">
        <h1 className="text-3xl font-bold text-black mb-4">{kegiatan.title}</h1>
        <p className="text-gray-700 mb-6 whitespace-pre-line">{kegiatan.description}</p>
        <div className="text-sm text-gray-600 mb-2">
          <strong>Waktu Pelaksanaan:</strong> {kegiatan.waktu}
        </div>
        <div className="text-sm text-gray-600">
          <strong>Kontak yang Bisa Dihubungi:</strong> {kegiatan.kontak}
        </div>
      </div>
    </main>
  );
}