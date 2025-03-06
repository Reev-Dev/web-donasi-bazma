"use client";

import React from "react";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";

const testimonialData = [
  {
    id: 1,
    name: "Bodhi",
    designation: "Ketua TPQ Darul Ilmi",
    content:
      "Terima kasih atas bantuan Al-Quran yang diberikan oleh Aksi Kebaikan. Bantuan ini bermanfaat agar masyarakat disini bisa belajar Al-Quran.",
    image: "/people/Bodhi.webp",
    star: 5,
  },
  {
    id: 2,
    name: "Dian Sumatri",
    designation: "Kepala Pusat Sumber Belajar",
    content:
      "Bantuan dana pembelian buku kotak ilmu ini adalah amanah yang harus kita sampaikan ke yang berhak. Semoga santunan tersebut senantiasa menjadi limpahan amal bagi para donatur-donatur dan mencurahkan keberkahan untuk anak-anak",
    image: "/people/Dian-Sumatri.webp",
    star: 5,
  },
  {
    id: 3,
    name: "Djumati Sipirunaung",
    designation: "Ketua Yayasan Ar-Rahman BEO",
    content:
      "Bantuan Laptop dan Alat belajar ini sangat bermanfaat dalam menunjang proses belajar mengajar kami, madrasah yang berada di daerah terluar Indonesia.",
    image: "/people/Bodhi.webp",
    star: 5,
  },
  {
    id: 4,
    name: "Bilal Bahrul Ulum",
    designation: "Siswa SMART",
    content:
      "Alhamdulillah dengan adanya tambahan takjil buka puasa ini, menambah semangat kami untuk senantiasa mengamalkan shaum sunnah Senin dan Kamis",
    image: "/people/Bilal.webp",
    star: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#F7FCFF] relative z-10 py-16 md:py-20 lg:py-28 ">
      <div className="container">
        <SectionTitle
          title="Apa Kata Mereka Tentang Bazma?"
          paragraph="Lebih dari 30 tahun, Bazma telah menebar manfaat bagi sesama"
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {testimonialData.map((testimonial) => (
            <SingleTestimonial key={testimonial.id} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
