import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import GithubContributions from "@/components/sections/GithubContributions";

export default function Home() {
  return (
    <main className="grow flex flex-col items-center justify-center w-full">
      <div className="w-full my-9">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <GithubContributions />
      </div>
    </main>
  );
}
