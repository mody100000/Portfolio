import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Internships from "@/components/sections/Internships";
import Hackathons from "@/components/sections/Hackathons";
import Education from "@/components/sections/Education";
import Skills from "@/components/sections/Skills";
import GithubContributions from "@/components/sections/GithubContributions";

export default function Home() {
  return (
    <main className="grow flex flex-col items-center justify-center w-full">
      <div className="w-full my-9">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Internships />
        <Hackathons />
        <Education />
        <GithubContributions />
      </div>
    </main>
  );
}
