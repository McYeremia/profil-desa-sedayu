import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="bg-green-700 text-white py-4 shadow">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Desa Sedayu</h1>
        <nav className="space-x-4">
          <Link href="/">Beranda</Link>
          <Link href="/tentang">Tentang</Link>
          <Link href="/layanan">Layanan</Link>
          <Link href="/kontak">Kontak</Link>
        </nav>
      </div>
    </header>
  );
}
