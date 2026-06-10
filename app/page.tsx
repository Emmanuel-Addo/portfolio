import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Projects from "@/components/Projects";
import Stack from "@/components/Stack";
import Timeline from "@/components/Timeline";
import Connect from "@/components/Connect";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden flex flex-col">
      {/* Cinematic noise layer */}
      <div className="noise-overlay" />
      
      {/* Hero Section & Integrated Navigation */}
      <Hero />

      {/* Story / About Section */}
      <Story />

      {/* Projects Section */}
      <Projects />

      {/* Stack / Skills Section */}
      <Stack />

      {/* Journey / Timeline Section */}
      <Timeline />

      {/* Contact Section */}
      <Connect />

      {/* Site Footer */}
      <Footer />
    </main>
  );
}



