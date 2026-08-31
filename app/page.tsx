import { About } from "@/components/sections/About";
import { AiEngineering } from "@/components/sections/AiEngineering";
import { Approach } from "@/components/sections/Approach";
import { Capabilities } from "@/components/sections/Capabilities";
import { Contact } from "@/components/sections/Contact";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { Expertise } from "@/components/sections/Expertise";
import { Hero } from "@/components/sections/Hero";
import { ResumeCta } from "@/components/sections/ResumeCta";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Skills } from "@/components/sections/Skills";

export default function HomePage() {
  return (
    <main id="main">
      <Hero />
      <div className="mx-auto mt-16 h-px max-w-page bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <About />
      <Expertise />
      <AiEngineering />
      <SelectedWork />
      <Experience />
      <Capabilities />
      <Approach />
      <Skills />
      <Education />
      <ResumeCta />
      <Contact />
    </main>
  );
}
