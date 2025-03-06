import { Metadata } from "next";
import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import Service from "@/components/Service";
import Campaign from "@/components/Campaign";
import Testimonials from "@/components/Testimonial";
import Volunteer from "@/components/Volunteer";

export const metadata: Metadata = {
  title: "Bazma - Baituzzakah Pertamina",
  description: "Created by Student",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Service />
      <Campaign />
      <Testimonials />
      <Volunteer />
    </>
  );
}
