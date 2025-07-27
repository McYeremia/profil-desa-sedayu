"use client";

import Image from "next/image";
import KegiatanGrid from "@/components/Kegiatan";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";


export default function HomePage() {
  const sliderImages = [1, 2, 3, 4, 5, 6];
  
  return (
    <main className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
        <Image
          src="/images/header-img.png"
          alt="Gambar Latar Padukuhan Sedayu"
          fill
          priority
          className="object-cover object-center z-0"
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative z-20 flex flex-col justify-center items-center h-full text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-4">
            Padukuhan Sedayu
          </h1>
          <p className="text-white text-lg drop-shadow mb-6 max-w-xl">
            Informasi dan kegiatan terkini dari Padukuhan Sedayu, Argosari.
          </p>
          <Link
          href="/kegiatan"
          className="bg-gradient-to-r from-blue-500 to-teal-300 text-white font-semibold px-6 py-2 rounded-full hover:opacity-90 transition">
          Lihat Aktivitas
          </Link>
        </div>
      </section>


      {/* Gambaran Umum */}
      <section className="bg-gradient-to-r from-blue-400 to-teal-300 py-16 px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-6 md:p-10 flex flex-col md:flex-row gap-6 items-center shadow-lg">
          {/* Gambar slider */}
          <div className="w-full md:w-1/2">
            <div className="rounded-2xl overflow-hidden shadow">
              <Swiper
                modules={[Autoplay, Pagination]}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                loop
                className="w-full h-full"
              >
                {sliderImages.map((num) => (
                  <SwiperSlide key={num}>
                    <Image
                      src={`/images/slider/${num}.jpg`}
                      alt={`Foto ${num}`}
                      width={600}
                      height={350}
                      className="w-full h-[250px] md:h-[300px] object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          {/* Deskripsi */}
          <div className="text-black w-full md:w-1/2">
            <h2 className="text-2xl font-bold mb-4">Gambaran Umum</h2>
            <p className="text-gray-700 text-justify leading-relaxed">
              Padukuhan Sedayu merupakan bagian dari Desa Argosari. Padukuhan Sedayu berada di sebelah timur Padukuhan Jurug. Dengan luas wilayah 34.68 ha. Secara administrasi wilayah Padukuhan Sedayu terbagi menjadi 4 Rukun Tetangga/RT. Yaitu RT 053, 054, 055 dan 056.
            </p>
          </div>
        </div>
      </section>

      {/* Kegiatan Padukuhan */}
      <section className="bg-gradient-to-r from-blue-400 to-teal-300 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-black text-3xl font-bold mb-4">Kegiatan Padukuhan</h2>
          <KegiatanGrid limit={8} />
          <p className="mt-6">
            <Link href="/kegiatan" className="text-black underline hover:text-blue-800">
              Lihat Seluruh Kegiatan →
            </Link>
          </p>
        </div>
      </section>

      {/* Lokasi Padukuhan */}
      <section className="bg-gradient-to-r from-blue-400 to-teal-300 py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-black mb-6">Lokasi Padukuhan Sedayu</h2>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              title="Lokasi Padukuhan Sedayu"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7905.686455458004!2d110.25429075052077!3d-7.806415691370728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7af9e0b2c1a769%3A0x3c84b2e7e721853d!2sSedayu%2C%20Argosari%2C%20Sedayu%2C%20Bantul%20Regency%2C%20Special%20Region%20of%20Yogyakarta!5e0!3m2!1sen!2sid!4v1752336135813!5m2!1sen!2sid"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}
