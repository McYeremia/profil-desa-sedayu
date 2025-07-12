export default function TentangPage() {
  return (
    <main className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Tentang Desa Sedayu</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Sejarah Singkat</h2>
        <p>
          Desa Sedayu berdiri sejak tahun 1950 dan merupakan salah satu desa tertua di Kecamatan Banyurejo. Desa ini dikenal karena kekayaan alam, tradisi gotong royong, dan komunitas yang erat.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Visi & Misi</h2>
        <p><strong>Visi:</strong> Mewujudkan Desa Sedayu yang mandiri, berdaya saing, dan berbudaya.</p>
        <p><strong>Misi:</strong></p>
        <ul className="list-disc list-inside">
          <li>Meningkatkan kualitas pelayanan publik</li>
          <li>Mendorong potensi ekonomi dan pertanian</li>
          <li>Menjaga kelestarian budaya lokal</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Letak Geografis</h2>
        <p>Desa Sedayu terletak di Kecamatan Banyurejo, Kabupaten Bantul, Yogyakarta. Berbatasan langsung dengan Sungai Progo di barat.</p>
      </section>
    </main>
  );
}
