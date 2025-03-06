"use client";

import Image from "next/image";
import HeroImage from "./../../../public/hero.png";

const Hero = () => {

  return (
    <section className="py-32 md:py-40 lg:py-48 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {/* Bagian Kiri - Teks & Gambar */}
          <div className="flex flex-col justify-center">
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900">
              Ragam Kebaikan Bisa Ditunaikan
            </h3>
            <p className="mt-4 text-lg md:text-xl text-gray-700">
              Bazma siap menyambungkan kebaikan dengan para penerima manfaat
              agar mereka bisa berdaya.
            </p>
            <div className="mt-6">
              <a
                href="/donasi"
                className="inline-flex items-center gap-2 bg-green-600 px-6 py-3 text-lg font-bold text-white transition-all duration-300 rounded-full hover:bg-green-700"
              >
                Selengkapnya
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Gambar */}
          <div className="relative w-full">
            <Image
              src={HeroImage}
              alt="Hero"
              width={844}
              height={800}
              className="w-full h-auto object-contain"
              priority
            />
          </div>

          {/* Bagian Kanan - Campaign Fundraiser */}
          <div className="bg-red-500 text-white p-8 rounded-2xl flex flex-col justify-center">
            <h3 className="text-3xl md:text-4xl font-bold">
              #Yuk Jadi Fundraiser
            </h3>
            <p className="mt-4 text-lg">
              Dapatkan peluang Pahala Jariyah dengan membagikan Campaign. Desain
              kami sediakan, anda tinggal sebarkan.
            </p>
            <div className="mt-6">
              <a
                href="/register"
                className="inline-flex items-center gap-2 bg-blue-500 px-6 py-3 text-lg font-bold text-white transition-all duration-300 rounded-full hover:bg-blue-600"
              >
                Daftar Fundraiser
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
