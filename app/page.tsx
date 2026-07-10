import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import UseCases from "@/components/UseCases";
import Equipment from "@/components/Equipment";
import About from "@/components/About";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <UseCases />
        <Equipment />
        <About />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
