export default function KontakPage() {
  return (
    <main className="bg-gray-100 text-gray-800 px-4 py-10 min-h-screen">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 text-green-700">
        Kontak Desa Sedayu
      </h1>

      <p className="text-center text-gray-700 mb-8">
        Anda dapat menghubungi Pemerintah Desa Sedayu melalui informasi di bawah ini.
      </p>

      <div className="bg-white shadow rounded-lg p-6 space-y-4 mb-8 max-w-2xl mx-auto">
        <div>
          <h2 className="font-semibold text-gray-900">Alamat</h2>
          <p>Jl. Raya Sedayu No. 123, Argosari, Bantul, Yogyakarta</p>
        </div>
        <div>
          <h2 className="font-semibold text-gray-900">Email</h2>
          <p>desa.sedayu@example.com</p>
        </div>
        <div>
          <h2 className="font-semibold text-gray-900">Telepon / WhatsApp</h2>
          <p>0812-3456-7890</p>
        </div>
        <div>
          <h2 className="font-semibold text-gray-900">Jam Operasional</h2>
          <p>Senin – Jumat, 08.00 – 15.00 WIB</p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto h-[300px] md:h-[400px] rounded-md overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7905.686455458004!2d110.25429075052077!3d-7.806415691370728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7af9e0b2c1a769%3A0x3c84b2e7e721853d!2sSedayu%2C%20Argosari%2C%20Sedayu%2C%20Bantul%20Regency%2C%20Special%20Region%20of%20Yogyakarta!5e0!3m2!1sen!2sid!4v1752336135813!5m2!1sen!2sid"
          width="100%"
          height="100%"
          className="w-full h-full border-none"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </main>
  );
}
