import { service } from "@/types/service";
import Image from "next/image";
import Link from "next/link";

const SingleService = ({ blog }: { blog: service }) => {
  const { title, image, paragraph, path } = blog;
  
  return (
    <div className="group relative flex flex-col items-center justify-center rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-dark">
      {/* Bagian Gambar */}
      <Link href={path} className="relative mb-4 h-24 w-24 overflow-hidden rounded-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </Link>

      {/* Bagian Judul */}
      <h3 className="text-lg font-bold text-black dark:text-white sm:text-xl">
        <Link href={path} className="hover:text-primary">
          {title}
        </Link>
      </h3>

      {/* Bagian Deskripsi */}
      <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-300">
        {paragraph}
      </p>
    </div>
  );
};

export default SingleService;
