import SectionTitle from "../Common/SectionTitle";
import SingleService from "./SingleService";
import serviceData from "./ServiceData";

const Service = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28 bg-[#F7FCFF]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          {/* Bagian Kiri: Judul & Deskripsi */}
          <div className="w-full px-4 lg:w-2/5">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h3 className="mb-4 text-3xl font-bold text-black sm:text-3xl lg:text-3xl xl:text-4xl">
                  Kami Siap Melayani
                </h3>
                <p className="text-lg font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Bersama kami, berdonasi jadi lebih mudah, menyenangkan, dan
                  penuh arti untuk mereka yang membutuhkan. Pilih salah satu
                  layanan yang Sahabat Baik perlukan yuk.
                </p>
              </div>
            </div>
          </div>

          {/* Bagian Kanan: Layanan */}
          <div className="w-full px-4 lg:w-3/5">
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
              {serviceData.map((blog) => (
                <SingleService key={blog.id} blog={blog} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
