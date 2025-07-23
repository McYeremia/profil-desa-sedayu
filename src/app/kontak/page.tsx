export default function KontakPage() {
  return (
    <main className="bg-gradient-to-r from-blue-400 to-teal-300 px-4 py-16 min-h-screen">
      <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-10 text-black">
        Kontak Padukuhan Sedayu
      </h1>

      <div className="bg-white rounded-2xl p-6 md:p-10 max-w-2xl mx-auto text-gray-800 shadow">
        <div className="mb-6">
          <h2 className="font-semibold">Alamat</h2>
          <p>Jl. Raya Sedayu No. 123, Argosari, Bantul, Yogyakarta</p>
        </div>
        <div className="mb-6">
          <h2 className="font-semibold">Email</h2>
          <p>desa.sedayu@example.com</p>
        </div>
        <div className="mb-6">
          <h2 className="font-semibold">Telepon / WhatsApp</h2>
          <p>0812-3456-7890</p>
        </div>
        <div>
          <h2 className="font-semibold">Jam Operasional</h2>
          <p>Senin – Jumat, 08.00 – 15.00 WIB</p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto mt-10 h-[300px] md:h-[400px] rounded-lg overflow-hidden border border-gray-300">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1976.418531180444!2d110.25891967339!3d-7.807067508789605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7af90068f84727%3A0x7078ff53a088c5ef!2sPadukuhan%20Sedayu!5e0!3m2!1sen!2sid!4v1753260308009!5m2!1sen!2sid"
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
