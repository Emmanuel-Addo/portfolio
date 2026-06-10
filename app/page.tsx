import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden flex flex-col">
      {/* Cinematic noise layer */}
      <div className="noise-overlay" />
      
      {/* Hero Section & Integrated Navigation */}
      <Hero />
    </main>
  );
}

