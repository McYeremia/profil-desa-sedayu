export default function LayananPage() {
  return (
    <main className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Layanan Desa Sedayu</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 border rounded-lg shadow">
          <h2 className="font-semibold text-lg">Pembuatan Surat Pengantar</h2>
          <p>Pelayanan untuk surat keterangan domisili, SKCK, pengantar RT/RW, dll.</p>
        </div>

        <div className="p-4 border rounded-lg shadow">
          <h2 className="font-semibold text-lg">Administrasi Kependudukan</h2>
          <p>Pendaftaran KK, KTP, akta kelahiran, dan pindah domisili.</p>
        </div>

        <div className="p-4 border rounded-lg shadow">
          <h2 className="font-semibold text-lg">Informasi Bantuan Sosial</h2>
          <p>Update data penerima bantuan PKH, BLT, dan program sosial lainnya.</p>
        </div>

        <div className="p-4 border rounded-lg shadow">
          <h2 className="font-semibold text-lg">Layanan Posyandu</h2>
          <p>Jadwal dan pelayanan kesehatan ibu dan anak melalui posyandu lokal.</p>
        </div>
      </div>
    </main>
  );
}
