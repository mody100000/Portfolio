import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import SectionDivider from "@/components/ui/SectionDivider";

export default function Home() {
  return (
    <main className="grow flex flex-col items-center justify-center w-full">
      <div className="w-full my-9">
        <Hero />
        <About />
        <Skills />
      </div>
    </main>
  );
}
