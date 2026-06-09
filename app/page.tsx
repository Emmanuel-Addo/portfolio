import Hero from "@/components/Hero";
import About from "@/components/About";
import Work from "@/components/Work";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="w-full bg-[#0f0f0f]">
        <About />
      <Work/>

      </div>
      
    </main>
  );
}
