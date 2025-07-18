"use client";

import React from "react";

// Komponen Card dan CardContent
function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-md">
      {children}
    </div>
  );
}

type CardContentProps = {
  children: React.ReactNode;
  className?: string;
};

function CardContent({ children, className = "" }: CardContentProps) {
  return <div className={`text-gray-700 ${className}`}>{children}</div>;
}

export default function TentangPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-teal-300 p-6 space-y-6">
      <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-10 text-black">
        Tentang Padukuhan Sedayu
      </h1>

      <Card>
        <CardContent className="pt-4">
          <h2 className="text-xl font-semibold mb-2">Gambaran Umum</h2>
          <p>
            Padukuhan Sedayu merupakan bagian dari Desa Argosari, terletak di timur Padukuhan Jurug,
            dengan luas wilayah 34.68 ha dan terbagi menjadi 4 RT: RT 053, 054, 055, dan 056.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-4">
          <h2 className="text-xl font-semibold mb-2">Tata Guna Lahan</h2>
          <p>
            Sekitar 46.25% (16.04 ha) wilayah Padukuhan Sedayu merupakan lahan pertanian,
            sementara 40.80% (14.15 ha) juga berupa lahan pertanian lainnya. Lahan pertanian mendominasi wilayah ini.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-4">
          <h2 className="text-xl font-semibold mb-2">Kependudukan</h2>
          <p>
            Jumlah penduduk berdasarkan pemetaan swadaya tahun 2014 mencapai 429 jiwa dengan 135 KK.
            Terdiri dari berbagai latar belakang pendidikan, pekerjaan, dan usia.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-4 space-y-4">
          <h2 className="text-xl font-semibold">Perekonomian</h2>

          <div>
            <h3 className="font-medium">a. Pertanian</h3>
            <p>
              Lahan pertanian 16.04 ha berupa sawah tadah hujan hanya bisa panen sekali setahun karena bergantung pada curah hujan.
            </p>
          </div>

          <div>
            <h3 className="font-medium">b. Perikanan</h3>
            <p>
              Luas lahan 0.75 ha, terkendala air saat kemarau karena distribusi PAM dan sumur belum merata.
            </p>
          </div>

          <div>
            <h3 className="font-medium">c. Industri Rumah Tangga</h3>
            <p>
              Ada dua industri utama yaitu tenun dan sangkar burung yang menunjang ekonomi lokal.
            </p>
          </div>

          <div>
            <h3 className="font-medium">d. Perdagangan dan Jasa</h3>
            <p>
              Kegiatan perdagangan menyatu dengan permukiman, toko/warung berperan penting dalam pemenuhan kebutuhan harian.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-4">
          <h2 className="text-xl font-semibold mb-2">Permukiman</h2>
          <p>
            Permukiman belum tertata, mayoritas rumah satu lantai dengan material bata/batako. Beberapa rumah tidak layak huni.
            Masih banyak yang menggunakan anyaman bambu dan tidak memiliki fasilitas MCK memadai.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-4 space-y-4">
          <h2 className="text-xl font-semibold">Sarana dan Prasarana</h2>

          <ul className="list-disc list-inside space-y-2">
            <li><strong>Fasilitas Pendidikan:</strong> Terdapat SD yang berada di kawasan lahan pertanian.</li>
            <li><strong>Ruang Terbuka:</strong> Memadai berupa RTH umum (makam) dan privat (pekarangan).</li>
            <li><strong>Fasilitas Ibadah:</strong> Tersedia 1 masjid/mushola di RT 54 dalam kondisi baik.</li>
            <li><strong>Jaringan Jalan:</strong> Umumnya aspal/rabat beton, sebagian masih tanah & licin saat hujan.</li>
            <li><strong>Drainase:</strong> Belum memadai, sebagian besar masih tanah, menyebabkan genangan dan kerusakan jalan.</li>
            <li><strong>Air Bersih:</strong> Mengandalkan sumur bor dan PAM, terkendala saat musim kemarau.</li>
            <li><strong>Sanitasi:</strong> Beberapa rumah sudah menggunakan resapan sederhana.</li>
            <li><strong>Sampah:</strong> Perlu edukasi pengelolaan dan pemilahan, banyak dibakar atau dibuang sembarangan.</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
