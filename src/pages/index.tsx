import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import SideProjects from "@/components/SideProject";
import Skills from "@/components/Skills";

const Index = (): JSX.Element => {
  return (
    <div className="w-full flex flex-col bg-slate-950">
      {/* <NavBar /> */}
      <Hero />
      <Experience />
      <Skills />
      <SideProjects />
      <Contact />
    </div>
  );
};

export default Index;
