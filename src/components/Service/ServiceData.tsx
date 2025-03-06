import { service } from "@/types/service";

const serviceData: service[] = [
  {
    id: 1,
    image: "/Kalkulator-Zakat-1.webp",
    title: "Kalkulator Zakat",
    paragraph: "Hitung kewajiban zakat, cukup masukan nilai dan lihat hasilnya",
    path: "/kalkulator-zakat",
  },
  {
    id: 2,
    image: "/Konfirmasi.webp",
    title: "Konfirmasi Donasi",
    paragraph:
      "Sudah Transfer? Yuk konfirmasi donasi Sahabat Baik agar tercatat",
    path: "https://api.whatsapp.com/send/?phone=6281210878282&text=Assalamualaikum+MiminAku+mau+berdonasi+nih.",
  },
  {
    id: 3,
    image: "/Jemput-zakat.webp",
    title: "Jemput ZISWAF",
    paragraph:
      "Tidak perlu kemana-mana, ZISWAF Sahabat Kami Jemput. Mudah bukan?",
    path: "https://api.whatsapp.com/send/?phone=6281210878282&text=Assalamualaikum+Mimin%0AAku+bisa+tolong+jemput+zakat+saya?&type=phone_number&app_absent=0",
  },
];
export default serviceData;
