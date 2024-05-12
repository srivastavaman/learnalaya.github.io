import AboutSectionOne from "@/components/About/AboutSectionOne";

import Blog from "@/components/Blog";

import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Learnalaya | Learning make easy",
  description: "Digital Plateform To Boost Your Knowledge",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      
      <AboutSectionOne />
     
      <Blog />
      <Contact />
    </>
  );
}
