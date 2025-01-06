import { Button } from "@/components/ui/button";
import Image from "next/image";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Features from "./_components/Features";
import Features2 from "./_components/Features2";
import AboutUs from "./_components/AboutUs";
import ContactUs from "./_components/ContactUs";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <div>
  {/* header*/}
  <Header/>
  {/* hero*/}
  <Hero/>
  <Features2/>
  <Features/>
  <AboutUs/>
  <ContactUs/>
  <Footer/>

  </div>
  );
}
