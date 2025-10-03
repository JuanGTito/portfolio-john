import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";

export const metadata = {
  title: "Juan Tito | Full Stack Developer",
  description: "Portafolio de Juan Tito, desarrollador web y mobile especializado en Next.js, Laravel y Python.",
  keywords: ["Desarrollador Web", "Next.js", "Laravel", "Python", "Portafolio"],
  openGraph: {
    title: "Juan Tito | Full Stack Developer",
    description: "Conoce mis proyectos en desarrollo web y mobile",
    url: "https://Juantitodev.it.com",
    siteName: "Portafolio de Juan Tito",
    images: [
      {
        url: "https://Juantitodev.it.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Portafolio de Juan Tito",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto py-4 px-12">
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
        
      </div>
      <Footer />
    </main>
  );
}
