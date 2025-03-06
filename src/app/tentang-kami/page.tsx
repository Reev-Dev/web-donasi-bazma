import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang Kami - Bazma",
  description: "Created by Student",
};

export default function About() {
  return (
    <>
      <section className="relative sm:my-60 md:my-38 lg:my-42 bg-transparent">
        <div className="container">
          <div className="flex flex-col items-center">
            <Image
              src="/cropped-Logo.png"
              alt="Cover Image"
              width={600}
              height={400}
              objectFit="cover"
            ></Image>
            <h2 className="my-4 text-xl text-center font-bold !leading-tight text-black sm:text-2xl md:text-[35px]">
              Yayasan Baituzzakah Amanah Manfaat Umat
            </h2>
            <p className="text-base text-center !leading-relaxed text-body-color md:text-lg md:px-60 pb-6">
              Yayasan BAZMA sebagai lembaga yang hadir dengan nilai-nilai
              semangat berbagi dengan mengelola dana Zakat, Infak/Sedekah, Wakaf
              dan dana sosial lainnya terus berkomitmen untuk beradaptasi dan
              relevan dalam menghadirkan perubahan yang dapat menjawab berbagai
              tantangan yang datang seiring dengan perkembangan zaman. Komitmen
              tersebut kali ini diwujudkan oleh Yayasan Bazma melalui kelanjutan
              peta jalan transformasi organisasi dalam bentuk perubahan nama
              yang lebih komprehensif, memabawa identitas sebagai organisasi
              milik semua.
            </p>
            <p className="text-base text-center !leading-relaxed text-body-color md:text-lg md:px-60 pb-6">
              Pembaharuan identitas menjadi Yayasan Baituzzakah Amanah Manfaat
              Umat semakin memperkuat visi dan misi organisasi dalam membuka
              semua peluang kebaikan dari masyarakat dan stakeholder terkait.
              Hadir sebagai Lembaga yang amanah dalam mengelola dana umat,
              diharapkan dapat memberikan layanan penuh manfaat bagi donatur dan
              tentunya berujung bagi para penerima manfaat. Dengan memaksimalkan
              potensi yang ada, keberadaaan Yayasan Bazma akan terus
              #MenebarManfaat melalui beragam layanan kebaikan.
            </p>
            <p className="text-base text-center !leading-relaxed text-body-color md:text-lg md:px-60 pb-6">
              Perubahan identitas ini juga menjadi pertanda bahwa BAZMA akan
              berkembang menjadi lebih dinamis, namun tetap menjaga nilai- nilai
              yang sudah dipegang selama ini yakni berbagi dan memberdayakan
              sesama. BAZMA akan terus berupaya menjadi energi kebaikan,
              kebahagiaan dan kebermanfaatan bagi bagi semua.
            </p>
            <h2 className="mb-4 my-8 text-xl text-center font-bold !leading-tight text-black sm:text-2xl md:text-[35px]">
              Perjalanan BAZMA
            </h2>
            <Image
              src="/Perjalanan-Bazma-1024x459.png"
              alt="Cover Image"
              width={1000}
              height={400}
              objectFit="cover"
            ></Image>
            <h2 className="mb-4 my-12 text-xl text-center font-bold !leading-tight text-black sm:text-2xl md:text-[35px]">
            Struktur Organisasi Pengurus BAZMA
            </h2>
            <Image
              src="/Struktur-Pengurus-Bazma-1024x390.png"
              alt="Cover Image"
              width={1000}
              height={400}
              objectFit="cover"
            ></Image>
            <h2 className="mb-4 my-12 text-xl text-center font-bold !leading-tight text-black sm:text-2xl md:text-[35px]">
            Pengurus Yayasan BAZMA
            </h2>
            <Image
              src="/Pengurus-Yayasan-1-1024x613.png"
              alt="Cover Image"
              width={1000}
              height={400}
              objectFit="cover"
            ></Image>
            <h2 className="mb-4 my-12 text-xl text-center font-bold !leading-tight text-black sm:text-2xl md:text-[35px]">
            Cabang BAZMA Seluruh Indonesia
            </h2>
            <Image
              src="/Cabang-Bazma-1024x372.png"
              alt="Cover Image"
              width={1000}
              height={400}
              objectFit="cover"
            ></Image>
            <Image
              src="/Lima-Pilar-Program-Bazma-1024x545.png"
              alt="Cover Image"
              width={1000}
              height={400}
              objectFit="cover"
            ></Image>
            <Image
              src="/Sebaran-PM-1024x553.jpg"
              alt="Cover Image"
              width={1000}
              height={400}
              objectFit="cover"
            ></Image>
          </div>
        </div>
      </section>
    </>
  );
}
