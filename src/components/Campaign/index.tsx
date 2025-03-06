"use client";

import { useState } from "react";
import SingleCampaign from "./SingleCampaign";
import campaignData from "./CampaignData";

const Campaign = () => {
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  const categories = [
    {
      name: "Semua",
      description: "Lihat semua campaign Aksi Kebaikan",
      icon: "/icon/four-arrows_10066478.webp", // Ganti dengan path ikon asli
    },
    {
      name: "Kewajiban",
      description: "Tunaikan kewajiban Zakat, Fidyah, dan Kafarat disini",
      icon: "/icon/zakat_9871150.webp",
    },
    {
      name: "Sedekah",
      description: "Sedekah untuk Pendidikan kaum Dhuafa",
      icon: "/icon/give_7006344.webp",
    },
    {
      name: "Ramadan",
      description: "Campaign Khusus Spesial Ramadan",
      icon: "/icon/lamp_4431710.webp",
    },
  ];

  return (
    <section className="py-16 md:py-20 lg:py-28 ">
      <h2 className="text-3xl font-bold text-black text-center sm:text-3xl lg:text-3xl xl:text-4xl mb-4">
        Berbagai Pilihan Kebaikan
      </h2>
      <p className="text-center text-lg md:text-xl text-gray-700 mb-24">
        Berani berbuat baik, karena kebaikan kebaikanmu hantarkan senyum dan kebahagiaan
        kepada mereka.{" "}
        <span className="text-red-600 font-bold">
          Donasi Mudah mulai Rp10.000.
        </span>
      </p>
      <div className="container mx-auto flex flex-wrap">
        {/* Sidebar */}
        <div className="w-full lg:w-1/4 px-4 mb-8 lg:mb-0">
          <div className="bg-white shadow-md rounded-lg p-4">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`w-full flex items-center px-4 py-3 rounded-lg mb-2 text-left transition-all ${
                  selectedCategory === category.name
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {/* Ikon kategori */}
                <img
                  src={category.icon}
                  alt={category.name}
                  className="w-6 h-6 mr-3"
                />
                {/* Nama & Deskripsi */}
                <div>
                  <p className="text-lg font-medium">{category.name}</p>
                  <p
                    className={`text-sm ${
                      selectedCategory === category.name
                        ? "text-blue-200"
                        : "text-gray-500"
                    }`}
                  >
                    {category.description}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Konten */}
        <div className="w-full lg:w-3/4 px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {campaignData
              .filter(
                (campaign) =>
                  selectedCategory === "Semua" ||
                  campaign.category === selectedCategory
              )
              .map((campaign) => (
                <SingleCampaign key={campaign.id} campaign={campaign} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Campaign;
