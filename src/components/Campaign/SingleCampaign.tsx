import React from "react";
import Image from "next/image";

const SingleCampaign = ({ campaign }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      {/* Gambar (Placeholder untuk cover) */}
      <div className="relative">
        <Image
          src="/Bazma.png"
          alt="Cover Image"
          width={400}
          height={160}
          objectFit="cover"
        />
      </div>

      {/* Konten Campaign */}
      <div className="p-4">
        <p className="text-sm text-blue-600 font-semibold">
          {campaign.category}
        </p>
        <h3 className="text-lg font-bold text-gray-900 mt-1">
          {campaign.title}
        </h3>
        <p className="text-sm text-gray-600 mt-1">{campaign.description}</p>

        {/* Tombol */}
        <a
          href={campaign.buttonLink}
          className="block mt-3 text-center bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
        >
          {campaign.buttonText}
        </a>
      </div>
    </div>
  );
};

export default SingleCampaign;
