export default function Home() {
  return (
    <main className="p-6 text-center">
      <h2 className="text-4xl font-bold mb-4">Selamat Datang di Desa Sedayu</h2>
      <p className="text-lg mb-6 max-w-xl mx-auto">
        Ini adalah website resmi Desa Sedayu yang menyediakan informasi pemerintahan, layanan warga, dan potensi desa.
      </p>
      <a href="#tentang" className="bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800 transition">
        Lihat Profil Desa
      </a>
    </main>
  );
}
