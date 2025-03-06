import Image from "next/image";

const Volunteer = () => {
  return (
    <section className="container relative overflow-hidden rounded-lg shadow-lg mx-auto my-16">
      {/* Background Image */}
      <Image
        src="/Cover-image.webp"
        alt="Cover Image"
        layout="fill"
        objectFit="cover"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-blue-700/80 to-green-600/80"></div>

      <div className="relative flex flex-col items-center justify-center text-center text-white py-20 px-6">
        <h2 className="mb-4 text-3xl font-bold !leading-tight text-white sm:text-4xl md:text-[45px]">
          Gabung #JadiVolunteer
        </h2>
        <p className="text-base !leading-relaxed text-body-color md:text-lg">
          Yuk bergabung dalam setiap program kebaikan Bazma
        </p>
        <a
          href="https://api.whatsapp.com/send/?phone=6281210878282&text=Assalamualaikum+MiminAku+mau+gabung+volunteer"
          className="mt-4 inline-flex items-center gap-2 bg-red-600 px-5 py-2 text-sm font-medium text-white rounded-lg shadow-md transition hover:bg-red-700"
        >
          Daftar Volunteer
          <span className="text-lg">→</span>
        </a>
      </div>
    </section>
  );
};

export default Volunteer;
